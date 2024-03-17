"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button, Textarea } from "@nextui-org/react";
import Header from "@/components/common/header";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [inputTextArea, setInputTextArea] = useState<string>(
    "안녕하십니까. 반갑습니다. 오늘 발표를 맡게 된 김지욱입니다."
  );
  const [mobile, setMobile] = useState<boolean>(false);

  const checkResize = () => {
    if (isMobile) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    checkResize();
  }, [isMobile]);

  const queryInputTextArea = useQuery({
    queryKey: ["inputTextArea"],
    queryFn: () => inputTextArea,
  });

  return (
    <section className="flex flex-col items-center justify-start w-full h-screen pb-12 gap-2 px-4 max-w-[1024px] mx-auto">
      {/*  */}
      <Header title={"발표 스크립트 작성"} isBackButtonVisible></Header>
      {/*  */}
      <div className="flex flex-col items-center justify-start gap-2 w-full h-full">
        <Textarea
          variant={"faded"}
          size={"lg"}
          fullWidth
          value={inputTextArea}
          placeholder={"발표 스크립트를 입력해주세요."}
          // height={"100%"}
          radius={"sm"}
          // value={queryInputTextArea.isFetching ? "11" : inputTextArea}
          classNames={{
            base: "min-h-full",
            input: "min-h-full",
            innerWrapper: "min-h-full",
            inputWrapper: "min-h-full",
          }}
          onChange={(e) => {
            setInputTextArea(e.target.value);
            queryInputTextArea.refetch();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              if (e.nativeEvent.isComposing) {
                return;
              }
            }
          }}
        ></Textarea>
      </div>
      <div className="flex flex-row gap-2 w-full justify-end select-none h-fit">
        <p>
          {inputTextArea != "" ? Math.ceil(inputTextArea.length * 0.2) : 0}초
        </p>
        <p>
          {inputTextArea != "" ? inputTextArea.split(" ").length : 0}
          단어
        </p>
        <p>{inputTextArea != "" ? inputTextArea.length : 0}글자</p>
      </div>
      <div className="flex flex-row gap-2 w-full justify-end h-fit">
        <Button
          variant={"flat"}
          size={"lg"}
          color={"primary"}
          fullWidth={mobile}
          className="px-8"
          onPress={() => {
            queryInputTextArea.refetch();
            // mutation.mutate();
            router.push("/prompt");
          }}
        >
          다음으로
        </Button>
      </div>
    </section>
  );
}
