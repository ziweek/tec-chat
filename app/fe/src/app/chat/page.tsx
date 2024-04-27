"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Webcam from "react-webcam";
import { useRouter } from "next/navigation";
import {
  Button,
  Tooltip,
  Input,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Card,
} from "@nextui-org/react";
import Header from "@/components/common/header";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { useQuery } from "@tanstack/react-query";
import TextBubble from "@/components/text-bubble";
import ThreeRender from "@/components/3d-render";
import { Lottie3DModel } from "@/components/common/lotties";
import Dictaphone from "@/components/dictaphone";
import FooterTray from "@/components/common/footer-tray";

export default function Home() {
  // const [inputTextArea, setInputTextArea] = useState<string>(
  //   "안녕하십니까. 반갑습니다. 오늘 발표를 맡게 된 김지욱입니다."
  // );
  //
  const router = useRouter();
  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
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
      text: "안녕하세요! 저는 누구누구 입니다.",
    },
  ]);
  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false);
  const [indexOfTooltip, setindexOfTooltip] = useState<number | undefined>(
    undefined
  );

  const [isWebCamLoaded, setIsWebCamLoaded] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState(new Set(["범주"]));
  const selectedCategoryValue = useMemo(
    () => Array.from(selectedCategory).join(", ").replaceAll("_", " "),
    [selectedCategory]
  );
  const [selectedEquipment, setSelectedEquipment] = useState(new Set(["장비"]));
  const selectedEquipmentValue = useMemo(
    () => Array.from(selectedEquipment).join(", ").replaceAll("_", " "),
    [selectedEquipment]
  );

  const videoConstraints = {
    width: 1280,
    height: 1280,
    facingMode: "camera",
    aspectRatio: 1,
  };

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

  // const queryInputTextArea = useQuery({
  //   queryKey: ["inputTextArea"],
  //   queryFn: () => inputTextArea,
  // });

  return (
    <section
      className="flex flex-col items-center justify-start w-full h-screen gap-4 max-w-[1024px] mx-auto"
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        gridTemplateColumns: "1fr",
      }}
    >
      {/*  */}
      <Header title={"교범 챗봇과 대화하기"} isBackButtonVisible></Header>
      {/*  */}
      <div
        className="flex flex-col items-center w-full h-full gap-4 px-4"
        style={{
          display: "grid",
          gridTemplateRows: "1fr",
          gridTemplateColumns: "1fr",
        }}
      >
        {/* <Card className="max-h-full w-full drop-shadow-md h-full min-h-[200px]">
          <CardHeader className="font-bold text-lg">
            테크_챗 추천질문
          </CardHeader>
          <CardBody className="text-sm">테크_챗 추천질문</CardBody>
          <CardFooter>테크_챗 추천질문</CardFooter>
        </Card> */}
        <Card className="flex flex-col items-center justify-start w-full gap-3 p-4 drop-shadow-md h-full">
          <div className="flex flex-row gap-2 w-full h-fit">
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="bordered"
                  fullWidth
                  size={"lg"}
                  color={"primary"}
                >
                  {selectedCategoryValue}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedCategory}
                onSelectionChange={setSelectedCategory as any}
              >
                <DropdownItem key="자주포">자주포</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="bordered"
                  fullWidth
                  size={"lg"}
                  color={"primary"}
                >
                  {selectedEquipmentValue}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedEquipment}
                onSelectionChange={setSelectedEquipment as any}
              >
                <DropdownItem key="K-9">K-9</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="w-full h-full min-h-[400px] flex flex-col justify-stretch">
            {selectedEquipmentValue == "K-9" ? (
              <div className="h-full w-full rounded-xl overflow-clip drop-shadow-md">
                <ThreeRender src={"/models/k9.glb"}></ThreeRender>
              </div>
            ) : (
              <div className="relative border-2 rounded-xl border-primary flex flex-col justify-center items-center h-full w-full drop-shadow-md">
                <Lottie3DModel
                  // play
                  // loop
                  width={"250px"}
                  height={"250px"}
                ></Lottie3DModel>
                <p className="absolute bottom-2 w-full text-center">
                  군용장비의 3D 모델링이 표시됩니다.
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>
      {/*  */}
      {/* <div className="flex flex-row gap-2 w-full justify-end h-fit">
        <Button
          variant={"shadow"}
          size={"lg"}
          color={"primary"}
          fullWidth={mobile}
          className={`${mobile ? "w-full" : "px-8"} font-bold  drop-shadow-md`}
          onPress={() => {
            // queryInputTextArea.refetch();
            // mutation.mutate();
            // router.push("/prompt");
            setIsModalVisible(true);
          }}
        >
          교범 챗봇과 대화 시작하기
        </Button>
      </div> */}
      {/*  */}
      <FooterTray></FooterTray>
      {/*  */}
      <Modal
        isOpen={isModalVisible}
        isDismissable
        closeButton={
          <Button
            color={"danger"}
            size={"lg"}
            variant={"light"}
            onPress={() => {
              setIsModalVisible(false);
            }}
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
              mobile ? "pb-8" : ""
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
            <div className="overflow-y-scroll px-6 h-full py-4">
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
            <ModalFooter>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex flex-row gap-2 w-full justify-end h-fit">
                  {[
                    {
                      text: "사진 인식",
                      placement: "top-start",
                      children: (
                        <>
                          {/* {!isWebCamLoaded && (
                            <div className="flex flex-col justify-center items-center h-full">
                              <CircularProgress></CircularProgress>
                            </div>
                          )} */}
                          <Webcam
                            ref={webcamRef}
                            audio={false}
                            onLoadedDataCapture={() => {
                              setIsWebCamLoaded(true);
                            }}
                            // onUserMedia={() => {
                            //   setTimeout(() => setIsWebCamLoaded(true), 1_000);
                            // }}
                            mirrored
                            screenshotFormat="image/jpeg"
                            minScreenshotHeight={100}
                            minScreenshotWidth={100}
                            imageSmoothing
                            videoConstraints={videoConstraints}
                            className="rounded-2xl w-full h-full"
                          />
                        </>
                      ),
                    },
                    {
                      text: "음성 인식",
                      placement: "top-end",
                      children: <Dictaphone></Dictaphone>,
                    },
                  ].map((e, i) => (
                    <Tooltip
                      key={i}
                      showArrow={true}
                      content={e.children}
                      isOpen={isTooltipOpen && indexOfTooltip == i}
                      className="w-[300px] h-[300px]"
                      placement={e.placement as any}
                    >
                      <Button
                        key={i}
                        variant={
                          isTooltipOpen && indexOfTooltip == i
                            ? "solid"
                            : "flat"
                        }
                        size={"lg"}
                        color={"primary"}
                        className={`${
                          mobile ? "w-full" : "px-8"
                        } w-full font-bold`}
                        onPress={() => {
                          setIsTooltipOpen(!isTooltipOpen);
                          setindexOfTooltip(i);
                          // queryInputTextArea.refetch();
                          // mutation.mutate();
                          // router.push("/prompt");
                        }}
                      >
                        {e.text}
                      </Button>
                    </Tooltip>
                  ))}
                </div>
                <Input
                  placeholder={"질의어를 입력하세요."}
                  className="w-full"
                  variant={"bordered"}
                  classNames={{ input: "text-lg" }}
                  color={"primary"}
                  onClear={() => {
                    setInputText("");
                  }}
                  value={inputText}
                  onValueChange={(e) => {
                    setInputText(e);
                  }}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      setDialogContext([
                        ...dialogContext,
                        {
                          isAnimated: false,
                          isSent: true,
                          isLoading: false,
                          imgSrc: "/images/logo.png",
                          // sampleStageData[indexStage].content[currentCardIndex]
                          //   .imgSrc,
                          name: "사용자",
                          text: inputText,
                        },
                      ]);
                      setInputText("");
                    }
                  }}
                  endContent={
                    <Button
                      color={"primary"}
                      variant={"solid"}
                      onPress={() => {
                        setDialogContext([
                          ...dialogContext,
                          {
                            isAnimated: false,
                            isSent: true,
                            isLoading: false,
                            imgSrc: "/images/logo.png",
                            // sampleStageData[indexStage].content[
                            //   currentCardIndex
                            // ].imgSrc,
                            name: "사용자",
                            text: inputText,
                          },
                        ]);
                        setInputText("");
                      }}
                    >
                      전송
                    </Button>
                  }
                ></Input>
              </div>
            </ModalFooter>
          </div>
        </ModalContent>
      </Modal>
    </section>
  );
}
