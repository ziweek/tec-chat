import { useRouter } from "next/navigation";
import {
  IconBook,
  IconCamera,
  IconChat,
  IconHome,
  IconPerson,
  IconPhone,
  IconVoiceChat,
} from "@/components/common/icons";
import { Button, Tooltip, Input, CircularProgress } from "@nextui-org/react";
import { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";

import { useIsMobile } from "@/hooks/useMediaQuery";
import { useQuery } from "@tanstack/react-query";
import TextBubble from "@/components/text-bubble";
import Dictaphone from "@/components/dictaphone";

type propsForFooterTray = {
  showInput?: boolean;
  setIsModalVisible: Function;
  dialogContext: any;
  setDialogContext: Function;
};

export default function FooterTray(props: any) {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);
  const [inputText, setInputText] = useState("");
  const webcamRef = useRef<any>(null);
  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false);
  const [indexOfTooltip, setindexOfTooltip] = useState<number | undefined>(
    undefined
  );

  const [isWebCamLoaded, setIsWebCamLoaded] = useState<boolean>(false);

  const videoConstraints = {
    width: 1280,
    height: 1280,
    facingMode: "camera",
    aspectRatio: 1,
  };

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

  return (
    <div className="w-full h-fit gap-4 flex flex-col bg-white rounded-t-2xl pt-4">
      <div className="flex flex-row w-full justify-center items-center gap-2 px-4">
        {[
          {
            text: "카메라로 질문하기",
            icon: <IconCamera fill="#fff" height={25}></IconCamera>,
            placement: "top-start",
            children: (
              <div className="h-full flex flex-col items-center justify-center gap-2 p-2">
                {!isWebCamLoaded && (
                  <div className="flex flex-col justify-center items-center h-full">
                    <CircularProgress></CircularProgress>
                  </div>
                )}
                <Webcam
                  ref={webcamRef}
                  audio={false}
                  onUserMedia={() => {
                    setIsWebCamLoaded(true);
                  }}
                  mirrored
                  screenshotFormat="image/jpeg"
                  minScreenshotHeight={100}
                  minScreenshotWidth={100}
                  imageSmoothing
                  videoConstraints={videoConstraints}
                  className="rounded-2xl w-full h-full"
                />
                <Button isIconOnly radius={"full"}>
                  촬영하기
                </Button>
              </div>
            ),
          },
          {
            text: "음성 인식으로 질문하기",
            icon: <IconVoiceChat fill="#fff" height={25}></IconVoiceChat>,
            placement: "top-end",
            children: <Dictaphone></Dictaphone>,
          },
        ].map((e, i) => {
          return (
            <Tooltip
              key={i}
              showArrow={true}
              content={e.children}
              isOpen={isTooltipOpen && indexOfTooltip == i}
              className="w-[300px] h-fit max-h-[500px]"
              placement={e.placement as any}
            >
              <Button
                size={"sm"}
                isIconOnly
                variant={"solid"}
                color={"secondary"}
                className="min-w-[100px] h-fit w-full py-1"
                onPress={() => {
                  setIsTooltipOpen(!isTooltipOpen);
                  setindexOfTooltip(i);
                }}
              >
                <div className="flex flex-row w-full h-fit items-center gap-2 justify-center p-1">
                  {e.icon}
                  {e.text}
                </div>
              </Button>
            </Tooltip>
          );
        })}
      </div>
      {props.showInput ? (
        <div className="flex flex-row w-full justify-between h-fit pb-8 px-4">
          <Input
            placeholder={"질의어를 입력하세요."}
            className="w-full"
            variant={"flat"}
            classNames={{ input: "text-lg w-[75%]", clearButton: "" }}
            color={"primary"}
            onClear={() => {
              setInputText("");
            }}
            isClearable={false}
            value={inputText}
            onValueChange={(e) => {
              setInputText(e);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                props.setDialogContext([
                  ...props.dialogContext,
                  {
                    isAnimated: false,
                    isSent: true,
                    isLoading: false,
                    imgSrc: "/images/logo.png",
                    // sampleStageData[indexStage].content[currentCardIndex]
                    //   .imgSrc,
                    name: "사용자",
                    text: inputText,
                  },
                ]);
                setInputText("");
              }
            }}
            endContent={
              <Button
                color={"primary"}
                variant={"solid"}
                onPress={() => {
                  props.setDialogContext([
                    ...props.dialogContext,
                    {
                      isAnimated: false,
                      isSent: true,
                      isLoading: false,
                      imgSrc: "/images/logo.png",
                      // sampleStageData[indexStage].content[
                      //   currentCardIndex
                      // ].imgSrc,
                      name: "사용자",
                      text: inputText,
                    },
                  ]);
                  setInputText("");
                }}
              >
                전송
              </Button>
            }
          ></Input>
        </div>
      ) : (
        <div className="flex flex-row w-full justify-between h-fit pb-8">
          {[
            {
              text: "홈",
              onPress: () => {
                router.push("/home");
              },
              icon: <IconHome height={25} fill="#0C2F1D"></IconHome>,
            },
            {
              text: "전자교범",
              onPress: () => {
                router.push("/manual");
              },
              icon: <IconBook height={25} fill="#0C2F1D"></IconBook>,
            },
            {
              text: "테크챗봇",
              onPress: () => {
                props.setIsModalVisible(true);
              },
              icon: <IconChat height={25} fill="#0C2F1D"></IconChat>,
            },
            {
              text: "정비근무대",
              onPress: () => {
                router.push("/contact");
              },
              icon: <IconPhone height={25} fill="#0C2F1D"></IconPhone>,
            },
            {
              text: "내 정보",
              onPress: () => {
                router.push("/");
              },
              icon: <IconPerson height={25} fill="#0C2F1D"></IconPerson>,
            },
          ].map((e, i) => {
            return (
              <Button
                disableRipple
                key={i}
                isIconOnly
                className="w-full h-[60px]"
                variant={i == 2 ? "flat" : "light"}
                size={"sm"}
                radius={"full"}
                color={"primary"}
                onPress={e.onPress}
              >
                <div className="flex flex-col items-center justify-center gap-1 h-full text-tiny">
                  {e.icon}
                  {e.text}
                </div>
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );
}
