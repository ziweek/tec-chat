"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import Header from "@/components/common/header";
import { useIsMobile } from "@/hooks/useMediaQuery";
import {
  IconChat,
  IconHome,
  IconPerson,
  IconPhone,
} from "@/components/common/icons";
import FooterTray from "@/components/common/footer-tray";
import Image from "next/image";

export default function Home() {
  //
  const router = useRouter();
  const isMobile = useIsMobile();
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
        <div className="flex-col grid gap-1 w-full">
          <div className="flex flex-row w-full justify-between items-center">
            <p className="font-bold  text-lg px-4 text-primary">
              자주 묻는 질문
            </p>
            <Button variant={"light"} disableRipple color={"secondary"}>
              더 보기
            </Button>
          </div>
          <div className="flex flex-col gap-2 overflow-auto px-4 scrollbar-hide">
            <div className="flex gap-4 whitespace-nowrap w-fit pb-4">
              {[
                {
                  text: "현무-4 탄도미사일의 유도 시스템에는 어떤 기술이 사용되고 있나요?",
                },
                {
                  text: "K2 전차의 동력원으로는 어떤 유형의 엔진을 사용하고 있나요?",
                },
                {
                  text: "K21 보병전투차량은 어떤 유형의 방호 장갑을 갖고 있나요?",
                },
                {
                  text: "해당 무인정찰기의 최대 운용 고도는 어느 정도인가요?",
                },
                {
                  text: "AH-64E 가디언 아파치의 주요 무기 시스템은 무엇인가요?",
                },
              ].map((e, i) => {
                return (
                  <div
                    key={i}
                    className="bg-white shadow-md rounded-lg w-[200px] h-[120px] p-4 shadow-black-90"
                  >
                    <p className="line-clamp-4 text-sm w-full whitespace-normal text-pretty">
                      {e.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex-col grid gap-1 w-full">
          <div className="flex flex-row w-full justify-between items-center">
            <p className="font-bold  text-lg px-4 text-primary">
              최근 업데이트 된 교범
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
        <div className="flex-col grid gap-1 w-full">
          <div className="flex flex-row w-full justify-between items-center">
            <p className="font-bold  text-lg px-4 text-primary">
              최근 조회한 장비 내역
            </p>
            <Button variant={"light"} disableRipple color={"secondary"}>
              더 보기
            </Button>
          </div>
          <div className="flex flex-col gap-2 overflow-auto px-4 scrollbar-hide">
            <div className="flex gap-4 whitespace-nowrap w-fit pb-4">
              {[
                { name: "K-9 자주포", src: "/images/thumbnail/k9.png" },
                {
                  name: "K200 보병 전투장갑차",
                  src: "/images/thumbnail/k200.png",
                },
              ].map((e, i) => {
                return (
                  <div
                    key={i}
                    className="bg-white shadow-md rounded-lg w-[75vw] h-[75vw] p-4 shadow-black-90 relative"
                  >
                    <p className="line-clamp-4 text-md w-full whitespace-normal text-pretty absolute top-4 left-4">
                      {e.name}
                    </p>
                    <Image
                      src={e.src}
                      width={100}
                      height={100}
                      alt="img"
                      className="w-full h-full"
                    ></Image>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="fixed w-full bottom-0">
        <FooterTray></FooterTray>
      </div>
      <div className="opacity-0">
        <FooterTray></FooterTray>
      </div>
    </section>
  );
}
