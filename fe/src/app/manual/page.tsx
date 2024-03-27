"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import Header from "@/components/common/header";
import { useIsMobile } from "@/hooks/useMediaQuery";
import FooterTray from "@/components/common/footer-tray";
import Image from "next/image";
import ModalChatbot from "@/components/chatbot-modal";

export default function Home() {
  //
  const router = useRouter();
  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

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
      className="flex flex-col items-center justify-start w-full min-h-screen gap-4 max-w-[1024px] mx-auto bg-primary-50"
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto auto",
        gridTemplateColumns: "1fr",
      }}
    >
      {/*  */}
      <Header backgroundColor={"primary"}></Header>
      {/*  */}
      <div className="flex flex-col items-center w-full h-full justify-start gap-2"></div>
      {/*  */}
      <div className="fixed w-full bottom-0">
        <FooterTray setIsModalVisible={setIsModalVisible}></FooterTray>
      </div>
      <div className="opacity-0">
        <FooterTray setIsModalVisible={setIsModalVisible}></FooterTray>
      </div>
      <ModalChatbot
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      ></ModalChatbot>
    </section>
  );
}
