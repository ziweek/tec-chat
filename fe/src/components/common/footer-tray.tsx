import { useRouter } from "next/navigation";
import {
  IconCamera,
  IconChat,
  IconHome,
  IconPerson,
  IconPhone,
  IconVoiceChat,
} from "@/components/common/icons";
import { Button, ButtonGroup } from "@nextui-org/react";

export default function FooterTray() {
  const router = useRouter();
  return (
    <div className="w-full h-fit gap-6 flex flex-col bg-white rounded-t-2xl pt-4">
      <div className="flex flex-row w-full justify-center items-center gap-2 px-4">
        {[
          {
            text: "카메라로 질문하기",
            icon: <IconCamera fill="#fff" height={25}></IconCamera>,
          },
          {
            text: "음성 인식으로 질문하기",
            icon: <IconVoiceChat fill="#fff" height={25}></IconVoiceChat>,
          },
        ].map((e, i) => {
          return (
            <Button
              size={"sm"}
              isIconOnly
              key={i}
              variant={"solid"}
              color={"secondary"}
              className="min-w-[100px] h-fit w-full py-1"
            >
              <div className="flex flex-row w-full h-fit items-center gap-2 justify-center p-1">
                {e.icon}
                {e.text}
              </div>
            </Button>
          );
        })}
      </div>
      <div className="flex flex-row w-full justify-between h-fit px-4 pb-6">
        {[
          {
            text: "홈",
            src: "/home",
            icon: <IconHome height={25} fill="#0C2F1D"></IconHome>,
          },
          {
            text: "챗봇",
            src: "/chatbot",
            icon: <IconChat height={25} fill="#0C2F1D"></IconChat>,
          },
          {
            text: "정비근무대",
            src: "",
            icon: <IconPhone height={25} fill="#0C2F1D"></IconPhone>,
          },
          {
            text: "내 정보",
            src: "",
            icon: <IconPerson height={25} fill="#0C2F1D"></IconPerson>,
          },
        ].map((e, i) => {
          return (
            <Button
              disableRipple
              key={i}
              isIconOnly
              className="w-full h-[45px]"
              variant={"light"}
              size={"sm"}
              color={"primary"}
              onPress={() => {
                router.push(e.src);
              }}
            >
              <div className="flex flex-col items-center justify-between h-full">
                {e.icon}
                {e.text}
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
