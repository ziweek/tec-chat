"use client";

import "regenerator-runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { Button, Slider } from "@nextui-org/react";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { LottieVoiceRecognition } from "@/components/common/lotties";
import Header from "@/components/common/header";
import {
  Chip,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { IconNext, IconPrev, IconVoice } from "@/components/common/icons";

function splitSentences(text: string) {
  // 마침표, 느낌표, 물음표를 기준으로 나눕니다.
  var sentences = text?.split(/[.!?]/);

  // 빈 문자열을 제거합니다.
  sentences = sentences?.filter(function (sentence) {
    return sentence.trim() !== "";
  });

  return sentences;
}

var arraySplittedInputTextarea: string[] = [];

export default function Prompt() {
  const router = useRouter();
  const isMobile = useIsMobile();

  const [indexOfSentence, setIndexOfSentence] = useState<number>(0);
  const [isHydrated, setIsHydrated] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [numberOfFontSize, setNumberOfFontSize] = useState<number>(36);
  const [isPitchingDone, setIsPitchingDone] = useState<boolean>(false);

  //
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

  //
  //
  //
  const queryInputTextArea = useQuery({
    queryKey: ["inputTextArea"],
    queryFn: (): any => {},
    refetchOnMount: true,
  });

  //
  //
  //
  useEffect(() => {
    if (typeof window != undefined) {
      setIsHydrated(true);
      arraySplittedInputTextarea = splitSentences(queryInputTextArea.data);
      resetTranscript();
    }
  }, []);
  useEffect(() => {
    if (
      arraySplittedInputTextarea &&
      indexOfSentence >= arraySplittedInputTextarea.length
    ) {
      setIsModalVisible(true);
      setIsPitchingDone(true);
    }
  }, [indexOfSentence]);
  useEffect(() => {
    // 점수 초기화
    var score = 0;
    for (let index = 0; index < transcript.trim().length; index++) {
      if (
        arraySplittedInputTextarea &&
        transcript.trim()[index] ==
          arraySplittedInputTextarea[indexOfSentence].trim()[index]
      ) {
        score = score + 1;
      }
    }
    // 점수 산정
    if (arraySplittedInputTextarea) {
      score =
        Math.round(
          (score / arraySplittedInputTextarea[indexOfSentence]?.trim().length) *
            100
        ) / 100;
    }
    // 패스 or 논 패스
    if (
      score > 0.8 &&
      indexOfSentence <= arraySplittedInputTextarea.length - 1
    ) {
      resetTranscript();
      setIndexOfSentence(indexOfSentence + 1);
    }
  });

  //
  //
  //
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ clearTranscriptOnListen: true });
  if (!browserSupportsSpeechRecognition) {
    return <p>Browser does not support speech recognition.</p>;
  }
  function toggleListening() {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({
        language: "ko-KR",
        continuous: true,
        interimResults: true,
      });
    }
  }

  return (
    <>
      {isHydrated && (
        <>
          <div className="flex flex-col items-center justify-between w-screen h-screen pt-4 pb-16 gap-2 px-4 max-w-[1024px] mx-auto">
            {/* 헤더 */}
            <Header
              title="프롬프트"
              isCloseButtonVisible
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
            ></Header>
            {/* 텍스트 */}
            <div className="flex flex-col items-center w-full h-full">
              <LottieVoiceRecognition
                play={listening}
                loop={listening}
                width={120}
              ></LottieVoiceRecognition>
              <Chip
                variant={"dot"}
                color={"primary"}
                className="text-tiny font-semibold"
              >
                {arraySplittedInputTextarea &&
                indexOfSentence + 1 > arraySplittedInputTextarea.length
                  ? arraySplittedInputTextarea.length
                  : indexOfSentence + 1}{" "}
                /{" "}
                {arraySplittedInputTextarea &&
                  arraySplittedInputTextarea.length}
              </Chip>
              <div className="relative flex flex-col items-center w-full h-full">
                <p
                  className="absolute top-2 px-4 font-bold  select-none h-fit leading-relaxed text-start w-full text-primary"
                  style={{ fontSize: `${numberOfFontSize}px` }}
                >
                  {transcript}
                </p>
                <p
                  className="absolute top-2 px-4 font-bold  select-none h-fit opacity-25 leading-relaxed text-start w-full"
                  style={{ fontSize: `${numberOfFontSize}px` }}
                >
                  {arraySplittedInputTextarea &&
                    arraySplittedInputTextarea[indexOfSentence]}
                </p>
              </div>
            </div>
            {/* 모듈 */}
            <div
              className={`flex flex-col justify-center gap-8 w-full h-fit ${
                mobile ? "items-center" : "items-end"
              }`}
            >
              <div className="w-full max-w-sm px-12 flex flex-col">
                <Slider
                  showSteps
                  label="글자 크기"
                  size={"sm"}
                  color={"primary"}
                  step={12}
                  maxValue={72}
                  minValue={24}
                  onChange={(value: any) => {
                    setNumberOfFontSize(value[0]);
                  }}
                ></Slider>
              </div>
              <div className="flex flex-row gap-2 max-w-sm w-full justify-between h-fit items-center">
                <Button
                  variant={"solid"}
                  size={"lg"}
                  color={"primary"}
                  fullWidth={isMobile}
                  className="px-8 font-bold h-[100px]"
                  isDisabled={indexOfSentence == 0}
                  onPress={() => {
                    if (indexOfSentence != 0) {
                      setIndexOfSentence(indexOfSentence - 1);
                      resetTranscript();
                    }
                  }}
                >
                  <div className="flex flex-col items-center justify-center">
                    <IconPrev width={50} fill="#fff"></IconPrev>
                    이전 문장
                  </div>
                </Button>
                <Button
                  variant={"solid"}
                  size={"lg"}
                  color={listening ? "danger" : "success"}
                  fullWidth={isMobile}
                  className="px-8 font-bold h-[100px] text-white"
                  onPress={() => {
                    if (listening ? "on" : "off") {
                      toggleListening();
                    } else {
                      SpeechRecognition.stopListening;
                      resetTranscript();
                    }
                  }}
                >
                  <div className="flex flex-col items-center justify-center">
                    <IconVoice width={50} fill="#fff"></IconVoice>
                    {listening ? "중단하기" : "음성 인식"}
                  </div>
                </Button>
                <Button
                  variant={"solid"}
                  size={"lg"}
                  color={"primary"}
                  fullWidth={isMobile}
                  className="px-8 font-bold h-[100px]"
                  isDisabled={
                    arraySplittedInputTextarea &&
                    indexOfSentence >= arraySplittedInputTextarea.length - 1
                  }
                  onPress={() => {
                    if (
                      indexOfSentence <=
                      arraySplittedInputTextarea.length - 2
                    ) {
                      setIndexOfSentence(indexOfSentence + 1);
                      resetTranscript();
                    }
                  }}
                >
                  <div className="flex flex-col items-center justify-center">
                    <IconNext width={50} fill="#fff"></IconNext>
                    다음 문장
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <Modal isOpen={isModalVisible} placement={"center"} className="mx-8">
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    발표가 끝났나요?
                  </ModalHeader>
                  <ModalBody>
                    <p className="px-2 text-pretty break-words">
                      {isPitchingDone &&
                        "스크립트 문장을 모두 실행하였습니다. "}
                      5초 뒤 자동으로 홈화면으로 돌아갑니다.
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color={"primary"}
                      variant="light"
                      onPress={() => {
                        setIsModalVisible(false);
                        SpeechRecognition.stopListening();
                      }}
                    >
                      돌아가기
                    </Button>
                    <Button
                      color="danger"
                      onPress={() => {
                        router.replace("/script");
                        SpeechRecognition.stopListening();
                      }}
                    >
                      종료하기
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
}
