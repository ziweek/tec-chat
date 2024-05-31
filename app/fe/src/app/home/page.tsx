"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Button, Card, CircularProgress } from "@nextui-org/react";
import Header from "@/components/common/header";
import { useIsMobile } from "@/hooks/useMediaQuery";
import FooterMain from "@/components/common/footer-main";
import Image from "next/image";
import ModalChatbot from "@/components/chatbot-modal";

export default function Home() {
  //
  const router = useRouter();
  const [indexOfButton, setIndexOfButton] = useState<number>(0);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  // const isMobile = useIsMobile();
  // const [mobile, setMobile] = useState<boolean>(false);

  // const checkResize = () => {
  //   if (isMobile) {
  //     setMobile(true);
  //   } else {
  //     setMobile(false);
  //   }
  // };

  // useEffect(() => {
  //   checkResize();
  // }, [isMobile]);

  return (
    <>
      <section
        className="flex flex-col items-center w-full min-h-screen gap-4 max-w-[400px] mx-auto h-full"
        style={{
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          gridTemplateColumns: "1fr",
        }}
      >
        <Header></Header>
        {indexOfButton == 0 && (
          <div className="flex flex-col justify-start items-center gap-4 px-4 h-full overflow-y-scroll pb-[90px]">
            {[1, 2, 3].map((e, i) => {
              return (
                <Card
                  key={i}
                  className="w-full h-[150px] p-4"
                  isPressable
                  onPress={() => {
                    router.push("/manual/detail");
                  }}
                >
                  <div className="flex flex-row justify-center items-center w-full h-full gap-4">
                    <Image
                      width={100}
                      height={100}
                      src={"/images/thumbnail/k9.png"}
                      alt="img"
                      className="w-[75px] h-[75px]"
                    ></Image>
                    <div className="w-full flex flex-col items-start justify-start gap-1">
                      <div className="flex flex-row gap-4">
                        <p className="font-bold">타이틀</p>
                      </div>
                      <div className="flex flex-row gap-4">
                        <p className="text-tiny">모델명</p>
                        <p className="text-tiny">시리얼넘버</p>
                      </div>
                      <div className="flex flex-row gap-4">
                        <p className="text-tiny">상태1</p>
                        <p className="text-tiny">상태1</p>
                      </div>
                      <div className="flex flex-row gap-4">
                        <p className="text-tiny">상태1</p>
                        <p className="text-tiny">상태1</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center w-fit h-full gap-1 justify-center">
                      <CircularProgress
                        size={"lg"}
                        classNames={{
                          svg: "w-20 h-20 drop-shadow-md",
                          indicator: "stroke-secondary stroke-[4px]",
                          track: "stroke-[4px]",
                          value: "text-xl font-semibold",
                        }}
                        // color={"secondary"}
                        value={62}
                        showValueLabel={true}
                      ></CircularProgress>
                      <p className="text-tiny font-bold">정비 신뢰지수</p>
                    </div>
                  </div>
                </Card>
              );
            })}
            <div className="flex flex-row gap-2">
              <Button variant={"light"} color={"default"} size={"sm"}>
                장비 추가
              </Button>
              <Button variant={"light"} color={"warning"} size={"sm"}>
                장비 편집
              </Button>
              <Button variant={"light"} color={"danger"} size={"sm"}>
                장비 편집
              </Button>
            </div>
          </div>
        )}
        {/*  */}
        <div className="fixed w-full bottom-0">
          <FooterMain
            indexOfButton={indexOfButton}
            setIndexOfButton={setIndexOfButton}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          ></FooterMain>
        </div>
      </section>
      <ModalChatbot
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      ></ModalChatbot>
    </>
  );
}
