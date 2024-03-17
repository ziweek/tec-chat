"use client";

import {
  LottieArrowDown,
  LottieVoiceRecognition,
} from "@/components/common/lotties";
import { Button, Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/useMediaQuery";
import Image from "next/image";
import Footer from "@/components/common/footer";

export default function Home() {
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
    <section className="w-full h-full max-w-[1024px] mx-auto min-h-full">
      {/* 1. 프로젝트 소개  */}
      <div className="flex h-screen flex-col items-center justify-center bg-white">
        <div className="flex flex-col items-center justify-center space-y-4 w-full">
          {/* 소개 텍스트 */}
          <div className="flex flex-col items-center justify-center w-full gap-1">
            <Image
              src={"/icons/appIcon.png"}
              width={75}
              height={75}
              alt="logo"
            ></Image>
            <p
              className={`select-none font-bold text-primary text-center ${
                mobile ? "text-3xl" : "text-4xl"
              }`}
            >
              발표의 정석
            </p>
            <p
              className={`select-none font-bold text-primary text-center ${
                mobile ? "text-lg" : "text-xl"
              }`}
            >
              세상에서 가장 쉬운 피칭
            </p>
          </div>
          {/*  */}
          <div className="flex flex-col items-center justify-center space-y-4 w-full">
            <LottieVoiceRecognition
              play
              loop
              width={mobile ? "350px" : "400px"}
            ></LottieVoiceRecognition>
            <div className="flex flex-row space-x-2">
              <Button
                className={`hover:-translate-y-1 font-bold ${
                  mobile ? "border-2" : "border-3"
                }`}
                size={mobile ? "md" : "lg"}
                color={"primary"}
                variant={"bordered"}
                onClick={() => {
                  router.push(
                    "https://github.com/ziweek/the-art-of-presentation.git"
                  );
                }}
              >
                프로젝트 소개자료
              </Button>
              <Button
                className={`hover:-translate-y-1 font-bold ${
                  mobile ? "border-2" : "border-3"
                }`}
                size={mobile ? "md" : "lg"}
                color={"primary"}
                variant={"bordered"}
                onClick={() => {
                  router.push("/script");
                }}
              >
                프로젝트 체험하기
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4">
          <LottieArrowDown play width={50}></LottieArrowDown>
        </div>
      </div>
      {/* 2. 핵심 기술 설명 */}
      <div className="flex h-full py-16 min-h-screen flex-col items-center justify-center space-y-8">
        <p className="select-none text-2xl font-bold">핵심기능 소개</p>
        <div
          className="flex min-h-[40vh] w-[90vw] select-none flex-col items-center justify-between max-w-[1200px]"
          style={
            mobile
              ? { gap: "20px" }
              : {
                  display: "grid",
                  gridTemplateAreas: `"a b c"`,
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gridTemplateRows: "1fr",
                  gap: "20px",
                }
          }
        >
          {[
            {
              title: "음성인식 기반 피칭 프롬프트",
              gridArea: "a",
              text: "sdf",
            },
            {
              title: "스크립트 첨삭에 특화된 인공지능",
              gridArea: "b",
              text: "sdf",
            },
            {
              title: "32개 다양한 언어 지원",
              gridArea: "c",
              text: "sdf",
            },
          ].map((content, i) => {
            return (
              <Card
                key={i}
                className="min-h-[300px] h-full w-full p-4"
                style={{ gridArea: content.gridArea }}
                shadow={"sm"}
              >
                <CardHeader>
                  <p className="text-lg font-bold">{content.title}</p>
                </CardHeader>
                <Divider></Divider>
                <CardBody>
                  <p>{content.text}</p>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
      {/* Footer */}
      <Footer isFixed></Footer>
    </section>
  );
}
