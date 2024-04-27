"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Webcam from "react-webcam";
import { useRouter } from "next/navigation";
import { Button, Tooltip, Input } from "@nextui-org/react";
import Header from "@/components/common/header";
import { useIsMobile } from "@/hooks/useMediaQuery";
import TextBubble from "@/components/text-bubble";
import Dictaphone from "@/components/dictaphone";
import { IconCamera, IconChat, IconVoiceChat } from "@/components/common/icons";

export default function Home() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);
  const [inputText, setInputText] = useState("");
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const webcamRef = useRef<any>(null);
  const [dialogContext, setDialogContext] = useState([
    {
      isAnimated: true,
      isSent: false,
      isLoading: false,
      imgSrc: "/images/logo.png",
      name: "테크_챗",
      text: "안녕하세요! 어떻게 도와드릴까요?",
    },
  ]);
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
    <section
      className="flex flex-col items-center justify-start w-full h-screen max-w-[1024px] mx-auto bg-primary-50"
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        gridTemplateColumns: "1fr",
      }}
    >
      {/*  */}
      <Header title={"교범 챗봇과 대화하기"} isBackButtonVisible></Header>
      {/*  */}
      <div
        className="flex flex-col items-center w-full h-full gap-4"
        style={{
          display: "grid",
          gridTemplateRows: "1fr",
          gridTemplateColumns: "1fr",
        }}
      >
        <div
          className={`${
            mobile ? "" : ""
          } flex flex-col justify-start h-full w-full`}
          style={{
            display: "grid",
            gridTemplateRows: "1fr auto",
            gridTemplateColumns: "1fr",
            gap: "1px",
          }}
        >
          <div className="overflow-y-scroll h-full py-4 px-4">
            {dialogContext.map((e, i) => {
              return (
                <TextBubble
                  key={i}
                  // indexStage={indexStage}
                  isLoading={false}
                  isAnimated={e.isAnimated}
                  isSent={e.isSent}
                  imgSrc={e.imgSrc}
                  name={e.name}
                  text={e.text}
                  isLast={i == dialogContext.length - 1}
                ></TextBubble>
              );
            })}
            <div ref={messageEndRef} className="h-[100px]"></div>
          </div>
          <div className="flex flex-col gap-4 w-full bg-white px-4 g-white rounded-t-2xl py-4 pb-6">
            <div className="flex flex-row w-full justify-center items-center gap-2">
              {[
                {
                  text: "카메라로 질문하기",
                  icon: <IconCamera fill="#fff" height={25}></IconCamera>,
                  placement: "top-start",
                  children: (
                    <>
                      {/* {!isWebCamLoaded && (
                            <div className="flex flex-col justify-center items-center h-full">
                              <CircularProgress></CircularProgress>
                            </div>
                          )} */}
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
                    </>
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
                    className="w-[300px] h-[300px]"
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
                  setDialogContext([
                    ...dialogContext,
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
                    setDialogContext([
                      ...dialogContext,
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
        </div>
      </div>
    </section>
  );
}
