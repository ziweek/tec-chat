"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Button, Modal, ModalContent, ModalHeader } from "@nextui-org/react";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { useQuery } from "@tanstack/react-query";
import TextBubble from "@/components/text-bubble";
import FooterTray from "./common/footer-tray";

type propsForModal = {
  isModalVisible: boolean;
  setIsModalVisible: Function;
};

export default function ModalChatbot(props: propsForModal) {
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
      text: "어떻게 도와드릴까요?",
    },
  ]);

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
    <Modal
      isOpen={props.isModalVisible}
      isDismissable
      closeButton={
        <Button
          color={"danger"}
          size={"lg"}
          variant={"light"}
          onPress={() => {
            props.setIsModalVisible(false);
          }}
          disableRipple
        >
          대화 종료
        </Button>
      }
      scrollBehavior={"normal"}
      className={`${isMobile ? "h-[100vh]" : "h-[500px]"}`}
      size={isMobile ? "full" : "lg"}
    >
      <ModalContent>
        <div
          className={`${
            mobile ? "pb-4" : ""
          } flex flex-col justify-start h-full w-full `}
          style={{
            display: "grid",
            gridTemplateRows: "auto 1fr auto",
            gridTemplateColumns: "1fr",
            gap: "1px",
          }}
        >
          <ModalHeader className="flex flex-col border-b-2">
            교범 챗봇과 대화하기
          </ModalHeader>
          <div className="overflow-y-scroll px-4 h-full py-4">
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
          <FooterTray
            dialogContext={dialogContext}
            setDialogContext={setDialogContext}
            showInput
            setIsModalVisible={props.setIsModalVisible}
          ></FooterTray>
        </div>
      </ModalContent>
    </Modal>
  );
}
