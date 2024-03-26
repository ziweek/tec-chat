import { useRouter } from "next/navigation";
import {
  IconCamera,
  IconChat,
  IconHome,
  IconPerson,
  IconPhone,
  IconVoiceChat,
} from "@/components/common/icons";
import { Button } from "@nextui-org/react";

export default function FooterTray() {
  const router = useRouter();
  return (
    <div className="w-full h-fit gap-2 flex flex-col">
      <div className="flex flex-row w-full justify-center items-center gap-2">
        {[
          {
            text: "텍스트",
            icon: <IconChat fill="#fff" width={25}></IconChat>,
          },
          {
            text: "카메라",
            icon: <IconCamera fill="#fff" width={25}></IconCamera>,
          },
          {
            text: "음성인식",
            icon: <IconVoiceChat fill="#fff" width={25}></IconVoiceChat>,
          },
        ].map((e, i) => {
          return (
            <Button
              isIconOnly
              key={i}
              variant={"shadow"}
              color={"secondary"}
              className="min-w-[100px] h-fit"
            >
              <div className="flex flex-row w-full h-fit items-center gap-2 justify-center p-1">
                {e.icon}
                {e.text}
              </div>
            </Button>
          );
        })}
      </div>
      <div className="flex flex-row w-full justify-between h-fit px-4 bg-white rounded-t-2xl py-4 pb-6 shadow-black shadow-lg">
        {[
          {
            text: "홈",
            src: "/home",
            icon: <IconHome height={25} fill="#0C2F1D"></IconHome>,
          },
          {
            text: "챗봇",
            src: "/chat",
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
