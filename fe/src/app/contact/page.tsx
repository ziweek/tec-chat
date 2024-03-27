"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Button, Card } from "@nextui-org/react";
import Header from "@/components/common/header";
import { useIsMobile } from "@/hooks/useMediaQuery";
import FooterTray from "@/components/common/footer-tray";
import Image from "next/image";
import ModalChatbot from "@/components/chatbot-modal";
import { IconProfile } from "@/components/common/icons";

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
      className="flex flex-col items-center justify-start w-full min-h-screen gap-4 max-w-[400px] mx-auto bg-primary-50"
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto auto",
        gridTemplateColumns: "1fr",
      }}
    >
      {/*  */}
      <Header backgroundColor={"primary"}></Header>
      {/*  */}
      <div className="flex flex-col items-center w-full h-full justify-start gap-4">
        {/*  */}
        <div className="flex-col grid gap-4 w-full">
          <div className="flex flex-row w-full justify-between items-center px-4">
            <p className="font-bold  text-lg text-primary">
              정비근무대 비상연락망
            </p>
            <Button
              isIconOnly
              variant={"light"}
              disableRipple
              color={"secondary"}
              className="w-fit"
            >
              탐색하기
            </Button>
          </div>
          <div className="flex flex-col gap-2 overflow-auto scrollbar-hide px-4">
            <div className="grid grid-cols-2 gap-16 w-full items-center justify-center px-4">
              {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((e, i) => {
                return (
                  <div key={i} className="flex flex-col gap-1 items-center">
                    <div className="bg-secondary shadow-md rounded-full w-[75px] h-[75px] p-4 shadow-black-90 flex flex-col justify-between text-white">
                      <IconProfile fill="#ffffff"></IconProfile>
                    </div>
                    <p className="text-tiny">{e}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/*  */}
        <Card className="flex-col grid gap-2 w-[92%] fixed z-20 bottom-44">
          <div className="flex flex-row w-full justify-between items-center">
            <p className="font-bold  text-lg px-4 text-primary">
              최근 통화한 정비반
            </p>
            <Button variant={"light"} disableRipple color={"secondary"}>
              더 보기
            </Button>
          </div>
          <div className="flex flex-col gap-2 overflow-auto scrollbar-hide px-4">
            <div className="flex gap-4 whitespace-nowrap w-fit pb-4">
              {[
                {
                  name: "통신정비반",
                },
                {
                  name: "K200 정비반",
                },
                {
                  name: "K-2 정비반",
                },
                {
                  name: "K-9 정비반",
                },
                {
                  name: "K-9 정비반",
                },
              ].map((e, i) => {
                return (
                  <div key={i} className="flex flex-col gap-1 items-center">
                    <div className="bg-secondary shadow-md rounded-full w-[75px] h-[75px] p-4 shadow-black-90 flex flex-col justify-between text-white">
                      <IconProfile fill="#ffffff"></IconProfile>
                    </div>
                    <p className="text-tiny">{e.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
        {/*  */}
        <Card className="flex-col grid gap-1 w-full opacity-0">
          <div className="flex flex-row w-full justify-between items-center">
            <p className="font-bold  text-lg px-4 text-primary">
              최근 통화한 정비반
            </p>
            <Button variant={"light"} disableRipple color={"secondary"}>
              더 보기
            </Button>
          </div>
          <div className="flex flex-col gap-2 overflow-auto scrollbar-hide px-4">
            <div className="flex gap-4 whitespace-nowrap w-fit pb-4">
              {[
                {
                  name: "통신정비반",
                },
                {
                  name: "K200 정비반",
                },
                {
                  name: "K-2 정비반",
                },
                {
                  name: "K-9 정비반",
                },
                {
                  name: "K-9 정비반",
                },
              ].map((e, i) => {
                return (
                  <div key={i} className="flex flex-col gap-1 items-center">
                    <div className="bg-secondary shadow-md rounded-full w-[75px] h-[75px] p-4 shadow-black-90 flex flex-col justify-between text-white">
                      <IconProfile fill="#ffffff"></IconProfile>
                    </div>
                    <p className="text-tiny">{e.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
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
