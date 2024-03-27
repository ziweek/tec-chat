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
      <div className="flex flex-col items-center w-full h-full justify-start gap-2">
        {/*  */}
        <div className="flex-col grid gap-1 w-full">
          <div className="flex flex-row w-full justify-between items-center">
            <p className="font-bold  text-lg px-4 text-primary">
              최근 조회한 교범
            </p>
            <Button variant={"light"} disableRipple color={"secondary"}>
              더 보기
            </Button>
          </div>
          <div className="flex flex-col gap-2 overflow-auto scrollbar-hide px-4">
            <div className="flex gap-4 whitespace-nowrap w-fit pb-4">
              {[
                {
                  title: "현무-4 탄도미사일의 운용 및 유지보수 절차",
                  date: "2024.03.01",
                },
                {
                  title: "K2 전차의 전투 전략 및 기술적 특성에 관한 교범",
                  date: "2023.05.15",
                },
                {
                  title: "무인정찰기의 운용 방법 및 기술적 특성에 관한 교범",
                  date: "2023.07.28",
                },
                {
                  title: "통신장비 운용에 대한 교범 개정안",
                  date: "2024.02.21",
                },
                {
                  title: "K-9 자주포 현가장치 부분 조정에 관한 교범",
                  date: "2023.11.03",
                },
              ].map((e, i) => {
                return (
                  <div
                    key={i}
                    className="bg-secondary shadow-md rounded-lg w-[120px] h-[150px] p-4 shadow-black-90 flex flex-col justify-between text-white"
                  >
                    <p className="line-clamp-4 text-sm w-full whitespace-normal text-pretty">
                      {e.title}
                    </p>
                    <p className="text-tiny">{e.date} 개정</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex-col grid gap-1 w-full">
          <div className="flex flex-row w-full justify-between items-center">
            <p className="font-bold  text-lg px-4 text-primary">
              최근 개정된 교범
            </p>
            <Button variant={"light"} disableRipple color={"secondary"}>
              더 보기
            </Button>
          </div>
          <div className="flex flex-col gap-2 overflow-auto scrollbar-hide px-4">
            <div className="flex gap-4 whitespace-nowrap w-fit pb-4">
              {[
                {
                  title: "현무-4 탄도미사일의 운용 및 유지보수 절차",
                  date: "2024.03.01",
                },
                {
                  title: "K2 전차의 전투 전략 및 기술적 특성에 관한 교범",
                  date: "2023.05.15",
                },
                {
                  title: "무인정찰기의 운용 방법 및 기술적 특성에 관한 교범",
                  date: "2023.07.28",
                },
                {
                  title: "통신장비 운용에 대한 교범 개정안",
                  date: "2024.02.21",
                },
                {
                  title: "K-9 자주포 현가장치 부분 조정에 관한 교범",
                  date: "2023.11.03",
                },
              ].map((e, i) => {
                return (
                  <div
                    key={i}
                    className="bg-secondary shadow-md rounded-lg w-[120px] h-[150px] p-4 shadow-black-90 flex flex-col justify-between text-white"
                  >
                    <p className="line-clamp-4 text-sm w-full whitespace-normal text-pretty">
                      {e.title}
                    </p>
                    <p className="text-tiny">{e.date} 개정</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex-col grid gap-1 w-full">
          <div className="flex flex-row w-full justify-between items-center px-4">
            <p className="font-bold  text-lg text-primary">
              소속 부대에서 운용하는 전자 교범
            </p>
            <Button
              isIconOnly
              variant={"light"}
              disableRipple
              color={"secondary"}
              className="w-fit"
            >
              <div className="flex flex-col justify-center items-end">
                <p className="font-bold text-tiny text-gray-500">
                  25사단 71연대
                </p>
                <p className="text-tiny">부대 변경하기</p>
              </div>
            </Button>
          </div>
          <div className="flex flex-col gap-2 overflow-auto scrollbar-hide px-4">
            <div className="flex flex-col gap-8 w-full items-center justify-center">
              {[1, 2, 3, 4, 5].map((e, i) => {
                return (
                  <div
                    key={i}
                    className="w-full h-[300px] bg-primary-50 p-4 rounded-lg"
                  >
                    <div
                      className="bg-secondary shadow-md rounded-lg w-[100px]
                  h-[150px] p-4 shadow-black-90"
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
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
