"use client";

import {
  Lottie3DModel,
  LottieArrowDown,
  LottieDotLoading,
  LottieVoiceRecognition,
} from "@/components/common/lotties";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/useMediaQuery";
import Image from "next/image";
import Footer from "@/components/common/footer";
import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init();
    return () => {};
  }, []);

  return (
    <section className="w-full h-full mx-auto min-h-full overflow-x-clip">
      {/* 1. 프로젝트 소개  */}
      <div className="flex h-screen flex-col items-center justify-center bg-black">
        <div
          // data-aos={"fade-up"}
          className="flex flex-col items-center justify-center space-y-4 w-full z-20"
        >
          {/* 소개 텍스트 */}
          <div className="flex flex-col items-center justify-center w-full gap-1">
            <p
              className={`select-none font-bold text-white text-center ${
                mobile ? "text-3xl" : "text-4xl"
              }`}
            >
              테크_챗
            </p>
            <p
              className={`select-none font-bold text-white text-center ${
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
                className={`hover:-translate-y-1 font-bold text-white ${
                  mobile ? "border-2" : "border-3"
                }`}
                size={mobile ? "md" : "lg"}
                color={"default"}
                variant={"bordered"}
                onClick={() => {
                  window.open("https://github.com/ziweek/tec-chat");
                }}
              >
                프로젝트 소개자료
              </Button>
              <Button
                className={`hover:-translate-y-1 font-bold text-white ${
                  mobile ? "border-2" : "border-3"
                }`}
                size={mobile ? "md" : "lg"}
                color={"default"}
                variant={"bordered"}
                onClick={() => {
                  router.push("/home");
                }}
              >
                프로젝트 체험하기
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 z-20">
          <LottieArrowDown play loop width={50}></LottieArrowDown>
        </div>
        <div className="absolute w-auto min-w-full h-screen max-w-none bg-black/75 z-10"></div>
        <video
          controls={false}
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className="absolute z-0 w-screen h-screen max-w-none overflow-clip object-cover"
        >
          <source
            src={require("../../public/video/bg.mp4")}
            type="video/mp4"
            className="w-screen h-screen"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 1. 놀라운 성능 */}
      <div className="flex h-fit flex-col items-center justify-center gap-8 pt-24">
        <div
          data-aos="fade-up"
          data-aos-duration="750"
          className="flex flex-col items-center justify-center space-y-8"
        >
          <p className="select-none text-3xl font-bold">
            최고의 전투력을 위한,<br></br> 테크쳇의 놀라운 성능.
          </p>
          <p className="select-none text-center">
            기술교범 계의 챗 GPT로 등장한 테크챗은<br></br>뛰어난 성능에서부터
            시작합니다.
          </p>
        </div>
        <div
          className="flex flex-col px-8 gap-4"
          // className="flex h-fit w-full select-none flex-col items-center max-w-[1024px] px-4 gap-4"
          // style={
          //   mobile
          //     ? { gap: "20px" }
          //     : {
          //         display: "grid",
          //         gridTemplateAreas: `"a b" "c d"`,
          //         gridTemplateColumns: "1fr 1fr",
          //         gridTemplateRows: "1fr",
          //         gap: "20px",
          //       }
          // }
        >
          {[
            {
              title: "적대적 프롬프트 주입 공격을\n필터링하는 sLLM 에이전트",
              // gridArea: "a",
              img: (
                <Image
                  src={"/images/logo_ollama.png"}
                  width={100}
                  height={100}
                  alt="img"
                  className="mx-auto h-[120px] w-fit"
                ></Image>
              ),
              text: "테크챗에는 프롬프트를 필터링하는 별도의 sLLM 에이전트를 배치하여, 사용자의 악의적인 프롬프트에 대응하고 있습니다.",
            },
            {
              title: "적대적 프롬프트 주입 공격을\n필터링하는 sLLM 에이전트",
              // gridArea: "a",
              img: (
                <Image
                  src={"/images/logo_ollama.png"}
                  width={100}
                  height={100}
                  alt="img"
                  className="mx-auto h-[120px] w-fit"
                ></Image>
              ),
              text: "테크챗에는 프롬프트를 필터링하는 별도의 sLLM 에이전트를 배치하여, 사용자의 악의적인 프롬프트에 대응하고 있습니다.",
            },
          ].map((content, i) => {
            return (
              <Card
                key={i}
                data-aos={"fade-up"}
                data-aos-delay={i * 100 + 100}
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="750"
                className="h-full w-full p-4 bg-secondary"
                // style={{ gridArea: content.gridArea }}
                shadow={"sm"}
              >
                <CardHeader>
                  <p className="text-xl font-bold whitespace-pre-line text-white leading-relaxed">
                    {content.title}
                  </p>
                </CardHeader>
                {/* <Divider></Divider> */}
                <CardBody className="gap-4 text-balance break-keep">
                  <p className="text-white leading-relaxed text-sm">
                    {content.text}
                  </p>
                  {content.img}
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>

      {/* 2. 강력한 보안 */}
      <div className="flex h-fit flex-col items-center justify-center gap-8 pt-24">
        <div
          data-aos="fade-up"
          data-aos-duration="750"
          className="flex flex-col items-center justify-center space-y-8"
        >
          <p className="select-none text-3xl font-bold text-center">
            데이터를 보호하기 위한,<br></br>테크챗의 지속적인 노력.
          </p>
          <p className="select-none text-center">
            전자 교범 데이터를 운용하는 테크챗은<br></br>강력한 수준의 보안
            정책을 지향하며<br></br>지속적으로 노력하고 있습니다.
          </p>
        </div>
        <div
          className="flex flex-col px-8 gap-4"
          // className="flex h-fit w-full select-none flex-col items-center max-w-[1024px] px-4"
          // style={
          //   mobile
          //     ? { gap: "20px" }
          //     : {
          //         display: "grid",
          //         gridTemplateAreas: `"a b" "c d"`,
          //         gridTemplateColumns: "1fr 1fr",
          //         gridTemplateRows: "1fr",
          //         gap: "20px",
          //       }
          // }
        >
          {[
            {
              title: "개발자도구 탐지 장치로\n소스코드 유출 방지",
              // gridArea: "a",
              img: (
                <Image
                  src={"/images/logo_ollama.png"}
                  width={100}
                  height={100}
                  alt="img"
                  className="mx-auto h-[120px] w-fit"
                ></Image>
              ),
              text: "테크챗에는 브라우저의 개발자도구를 탐지하는 코드가 항상 동작하여, 소스코드의 유출 및 악의적인 위변조를 차단하고 있습니다.",
            },
            {
              title: "적대적 프롬프트 주입 공격을\n필터링하는 sLLM 에이전트",
              // gridArea: "a",
              img: (
                <Image
                  src={"/images/logo_ollama.png"}
                  width={100}
                  height={100}
                  alt="img"
                  className="mx-auto h-[120px] w-fit"
                ></Image>
              ),
              text: "테크챗에는 프롬프트를 필터링하는 별도의 sLLM 에이전트를 배치하여, 사용자의 악의적인 프롬프트에 대응하고 있습니다.",
            },
          ].map((content, i) => {
            return (
              <Card
                key={i}
                data-aos="fade-left"
                data-aos-delay={i * 100 + 100}
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="750"
                className="h-full w-full p-4 bg-black"
                // style={{ gridArea: content.gridArea }}
                shadow={"sm"}
              >
                <CardHeader>
                  <p className="text-xl font-bold whitespace-pre-line text-white leading-relaxed">
                    {content.title}
                  </p>
                </CardHeader>
                {/* <Divider></Divider> */}
                <CardBody className="gap-4 text-balance break-keep">
                  <p className="text-white leading-relaxed text-sm">
                    {content.text}
                  </p>
                  {content.img}
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>

      {/* 3. 직관적인  */}
      <div className="flex h-fit flex-col items-center justify-center gap-8 pt-24">
        <div
          data-aos="fade-up"
          data-aos-duration="750"
          className="flex flex-col items-center justify-center space-y-8"
        >
          <p className="select-none text-3xl font-bold">
            누구나 손쉽게 배우는,<br></br>직관적인 사용자 경험.
          </p>
          <p className="select-none text-center">
            기술교범 계의 챗 GPT로 등장한 테크챗은<br></br>뛰어난 성능에서부터
            시작합니다.
          </p>
        </div>
        <div
          className="flex flex-col px-8 gap-4"
          // className="flex h-fit w-full select-none flex-col items-center max-w-[1024px] px-4"
          // style={
          //   mobile
          //     ? { gap: "20px" }
          //     : {
          //         display: "grid",
          //         gridTemplateAreas: `"a b" "c d"`,
          //         gridTemplateColumns: "1fr 1fr",
          //         gridTemplateRows: "1fr",
          //         gap: "20px",
          //       }
          // }
        >
          {[
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
              text: "텍스트 질의 뿐만 아니라 카메라 또는 음성 인식 등의 멀티모달 인터페이스를 지원하여 사용자 편의성을 개선하였습니다.",
            },
            {
              title: "군용장비의 3D 모델링으로 실증적 진단",
              gridArea: "d",
              img: (
                <div className="mx-auto h-[120px] w-fit flex flex-col justify-center">
                  <Lottie3DModel goTo={30} height={120}></Lottie3DModel>
                </div>
              ),
              text: "blender 등의 소프트웨어로 작성된 3D 모델링 구조도를 통해 운용장비의 파트에 대해 직관적으로 접근할 수 있습니다.",
            },
          ].map((content, i) => {
            return (
              <Card
                key={i}
                data-aos="fade-right"
                data-aos-delay={i * 100 + 100}
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="750"
                className="h-full w-full p-4 bg-[#A7CDA2]"
                // style={{ gridArea: content.gridArea }}
                shadow={"sm"}
              >
                <CardHeader>
                  <p className="text-xl font-bold whitespace-pre-line text-primary leading-relaxed">
                    {content.title}
                  </p>
                </CardHeader>
                {/* <Divider></Divider> */}
                <CardBody className="gap-4 text-balance break-keep">
                  <p className="text-primary leading-relaxed text-sm">
                    {content.text}
                  </p>
                  {content.img}
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>

      {/* 3. 직관적인  */}
      {/* <div className="flex h-fit flex-col items-center justify-center space-y-8">
        <div
          data-aos="fade-up"
          data-aos-duration="750"
          className="flex flex-col items-center justify-center space-y-8"
        >
          <p className="select-none text-3xl font-bold">
            누구나 손쉽게 배우는,<br></br>직관적인 사용자 경험.
          </p>
          <p className="select-none text-center">
            기술교범 계의 챗 GPT로 등장한 테크챗은<br></br>뛰어난 성능에서부터
            시작합니다.
          </p>
        </div>
        <div
          // className="flex h-fit w-full select-none flex-col items-center max-w-[1024px] px-4"
          // style={
          //   mobile
          //     ? { gap: "20px" }
          //     : {
          //         display: "grid",
          //         gridTemplateAreas: `"a b" "c d"`,
          //         gridTemplateColumns: "1fr 1fr",
          //         gridTemplateRows: "1fr",
          //         gap: "20px",
          //       }
          // }
        >
          {[
            {
              title: "Ollama를 활용한 온디바이스 생성형 AI",
              // gridArea: "a",
              img: (
                <Image
                  src={"/images/logo_ollama.png"}
                  width={100}
                  height={100}
                  alt="img"
                  className="mx-auto h-[120px] w-fit"
                ></Image>
              ),
              text: "자체적으로 구분된 독립적인 서버를 사용하여 보안 문제를 해결하기 위해 Ollama LLM 프레임워크를 활용하였습니다.",
            },
            {
              title: "에이전트 간 앙상블을 통한 정확도 개선",
              gridArea: "b",
              img: (
                <div className="mx-auto h-[120px] w-fit flex flex-col justify-center">
                  <LottieEnsemble height={120} goTo={10}></LottieEnsemble>
                </div>
              ),
              text: " 다수의 에이전트 모델 간의 상호작용을 시키는 앙상블 기법을 활용하여 LLM 특유의 ‘할루시네이션’(환각) 현상을 최소화하고 경제적인 관점에서 최대한의 효율적인 성능을 확보한다.",
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
              text: "텍스트 질의 뿐만 아니라 카메라 또는 음성 인식 등의 멀티모달 인터페이스를 지원하여 사용자 편의성을 개선하였습니다.",
            },

            {
              title: "군용장비의 3D 모델링으로 실증적 진단",
              gridArea: "d",
              img: (
                <div className="mx-auto h-[120px] w-fit flex flex-col justify-center">
                  <Lottie3DModel goTo={30} height={120}></Lottie3DModel>
                </div>
              ),
              text: "blender 등의 소프트웨어로 작성된 3D 모델링 구조도를 통해 운용장비의 파트에 대해 직관적으로 접근할 수 있습니다.",
            },
          ].map((content, i) => {
            return (
              <Card
                key={i}
                className="h-full w-full p-4"
                // style={{ gridArea: content.gridArea }}
                shadow={"sm"}
              >
                <CardHeader>
                  <p className="text-d font-bold text-primary leading-relaxed">
                    {content.title}
                  </p>
                </CardHeader>
                <Divider></Divider>
                <CardBody className="gap-2 text-pretty">
                  {content.img}
                  <p className="leading-loose text-sm">{content.text}</p>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div> */}
      {/* Footer */}
      <div className="px-8 py-12">
        <Accordion variant={"shadow"} className="bg-black/20">
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="데이터 출처 확인하기"
            classNames={{ title: "text-sm" }}
          >
            sdf
          </AccordionItem>
        </Accordion>
      </div>

      <Footer isFixed></Footer>
    </section>
  );
}
