"use client";

import {
  Lottie3DModel,
  LottieArrowDown,
  LottieDotLoading,
  LottieEnsemble,
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
            {/* <Image
              src={"/icons/appIcon.png"}
              width={75}
              height={75}
              alt="logo"
            ></Image> */}
            <p
              className={`select-none font-bold text-primary text-center ${
                mobile ? "text-3xl" : "text-4xl"
              }`}
            >
              테크_챗
            </p>
            <p
              className={`select-none font-bold text-primary text-center ${
                mobile ? "text-md" : "text-lg"
              }`}
            >
              생성형 AI를 활용한 야전교범 챗봇 가이드
            </p>
          </div>
          {/*  */}
          <div className="flex flex-col items-center justify-center space-y-4 w-full">
            <div className="overflow-y-clip h-[100px] flex flex-col justify-center">
              <LottieDotLoading
                play
                loop
                width={mobile ? "350px" : "400px"}
              ></LottieDotLoading>
            </div>
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
                  router.push("/chat");
                }}
              >
                프로젝트 체험하기
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4">
          <LottieArrowDown play loop width={50}></LottieArrowDown>
        </div>
      </div>
      {/* 2. 핵심 기술 설명 */}
      <div className="flex h-full py-16 min-h-screen flex-col items-center justify-center space-y-8">
        <p className="select-none text-2xl font-bold">핵심기능 소개</p>
        <div
          className="flex min-h-[40vh] w-full select-none flex-col items-center justify-between max-w-[1024px] px-4"
          style={
            mobile
              ? { gap: "20px" }
              : {
                  display: "grid",
                  gridTemplateAreas: `"a b" "c d"`,
                  gridTemplateColumns: "1fr 1fr",
                  gridTemplateRows: "1fr 1fr",
                  gap: "20px",
                }
          }
        >
          {[
            {
              title: "Ollama를 활용한 온디바이스 생성형 AI",
              gridArea: "a",
              img: (
                <Image
                  src={"/images/logo_ollama.png"}
                  width={100}
                  height={100}
                  alt="img"
                  className="mx-auto h-[120px] w-fit"
                ></Image>
              ),
              text: "sdf",
            },
            {
              title: "에이전트 간 앙상블을 통한 정확도 개선",
              gridArea: "b",
              img: (
                <div className="mx-auto h-[120px] w-fit flex flex-col justify-center">
                  <LottieEnsemble height={120} goTo={10}></LottieEnsemble>
                </div>
              ),
              text: "sdf",
            },
            {
              title: "텍스트, 이미지, 음성 등 멀티모달 분석",
              gridArea: "c",
              img: (
                <div className="mx-auto h-[120px] w-fit flex flex-col justify-center">
                  <LottieVoiceRecognition
                    // play
                    // loop
                    height={80}
                    goTo={12}
                  ></LottieVoiceRecognition>
                </div>
              ),
              text: "sdf",
            },

            {
              title: "군장비의 3D 모델을 통한 진단",
              gridArea: "d",
              img: (
                <div className="mx-auto h-[120px] w-fit flex flex-col justify-center">
                  <Lottie3DModel goTo={30} height={120}></Lottie3DModel>
                </div>
              ),
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
                  <p className="text-md font-bold text-primary">
                    {content.title}
                  </p>
                </CardHeader>
                <Divider></Divider>
                <CardBody>
                  {content.img}
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
