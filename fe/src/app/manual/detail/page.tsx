"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Card,
  Modal,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import Header from "@/components/common/header";
import { useIsMobile } from "@/hooks/useMediaQuery";
import FooterTray from "@/components/common/footer-tray";
import Image from "next/image";
import ModalChatbot from "@/components/chatbot-modal";
import ThreeRender from "@/components/3d-render";

export default function Home() {
  //
  const router = useRouter();
  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isThreeModelVisible, setIsThreeModelVisible] =
    useState<boolean>(false);
  const [isThreeModelModalVisible, setisThreeModelModalVisible] =
    useState<boolean>(false);

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
      <Header
        backgroundColor={"primary"}
        isBackButtonVisible
        title={"장비 운용 목적의 군사용 교범"}
      ></Header>
      {/*  */}
      <div className="flex flex-col items-center w-full h-full justify-start gap-8">
        {/*  */}
        <Card className="w-[92%] flex flex-col justify-center items-center aspect-[3/2] bg-secondary">
          {isThreeModelVisible ? (
            <div className="w-full h-full">
              <Button
                className="z-50 absolute right-4 bottom-4"
                color={"secondary"}
                variant={"solid"}
                size={"sm"}
                onPress={() => {
                  setisThreeModelModalVisible(!isThreeModelModalVisible);
                }}
              >
                크게 보기
              </Button>
              <ThreeRender src={"/models/k9.glb"}></ThreeRender>
            </div>
          ) : (
            <Button
              color={"primary"}
              onPress={() => {
                setIsThreeModelVisible(!isThreeModelVisible);
              }}
            >
              3D 모델링 보기
            </Button>
          )}
        </Card>
        <div className="px-4 leading-loose">
          <h1 className="font-bold">장비 운용 목적의 군사용 교범: K9 자주포</h1>
          <br></br>

          <h2 className="font-bold">목적:</h2>
          <p>
            본 교범은 K9 자주포의 효율적인 운용을 위한 지침을 제공하며, 군사
            작전에서의 정확하고 효과적인 화력 지원을 보장하기 위해
            작성되었습니다.
          </p>
          <br></br>

          <h2 className="font-bold">개요:</h2>
          <ul>
            <li>
              K9 자주포는 장거리 화력 지원 및 대규모 목표에 대한 정밀 타격을
              위한 장비입니다.
            </li>
            <li>
              본 교범은 K9 자주포의 운용자 및 유지보수 요원에게 필수적인 지침을
              제공하여 전투 상황에서의 효율성과 안전을 보장합니다.
            </li>
          </ul>
          <br></br>

          <h2 className="font-bold">운용 절차:</h2>
          <ol>
            <li>
              <strong>전투 임무에 대한 이해:</strong> 임무 목표 및 우선 순위의
              이해
            </li>
            <li>
              <strong>사격 준비:</strong> 자주포 및 관련 장비의 점검 및 유지보수
            </li>
            <li>
              <strong>사격 진행:</strong> 사격 명령의 이행과 목표물에 대한
              효과적인 화력 제공
            </li>
            <li>
              <strong>후속 조치:</strong> 사격 후의 장비 및 지역의 정리, 피해
              평가 및 보고
            </li>
          </ol>
          <br></br>

          <h2 className="font-bold">안전 및 윤리:</h2>
          <ul>
            <li>K9 자주포의 안전 조치 및 절차에 대한 이해와 준수</li>
            <li>전투 상황에서의 윤리적인 판단과 행동 가이드라인</li>
          </ul>

          <h2 className="font-bold">훈련:</h2>
          <ul>
            <li>정기적이고 체계적인 훈련의 중요성 강조</li>
            <li>시뮬레이션 및 실전 훈련을 통한 실전 대비 능력 강화</li>
          </ul>
          <br></br>

          <h2 className="font-bold">유지보수:</h2>
          <ul>
            <li>
              K9 자주포의 정기적인 점검 및 유지보수 프로세스에 대한 이해와 이행
            </li>
          </ul>
          <br></br>

          <h2 className="font-bold">참고 자료:</h2>
          <ul>
            <li>K9 자주포 운용 매뉴얼 및 제조사의 지침서</li>
            <li>관련 군사 규정 및 절차</li>
          </ul>
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
      <Modal
        isOpen={isThreeModelModalVisible}
        isDismissable
        closeButton={
          <Button
            color={"danger"}
            size={"lg"}
            variant={"light"}
            onPress={() => {
              setisThreeModelModalVisible(false);
            }}
            disableRipple
          >
            돌아가기
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
            } flex flex-col justify-start h-full w-full items-center`}
            style={{
              display: "grid",
              gridTemplateRows: "auto 1fr auto",
              gridTemplateColumns: "1fr",
              gap: "1px",
            }}
          >
            <ModalHeader className="flex flex-col border-b-2">
              3D 모델링 살펴보기
            </ModalHeader>
            <div className="overflow-y-scroll h-full w-full flex flex-col items-center">
              <ThreeRender src={"/models/k9.glb"}></ThreeRender>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </section>
  );
}
