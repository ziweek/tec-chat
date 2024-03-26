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

export default function Home() {
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
      className="flex flex-col items-center justify-start w-full min-h-screen gap-4 max-w-[1024px] mx-auto bg-primary-50"
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto auto",
        gridTemplateColumns: "1fr",
      }}
    >
      {/*  */}
      <Header></Header>
      {/*  */}
      <div className="flex flex-col items-center w-full h-full justify-start gap-4">
        <div className="flex-col grid gap-2">
          <p className="font-bold  text-lg px-4 text-primary">
            최근에 업데이트 된 교범
          </p>
          <div className="flex flex-col gap-2 overflow-auto px-4 scrollbar-hide">
            <div className="flex gap-4 whitespace-nowrap w-fit pb-4">
              {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((e, i) => {
                return (
                  <div
                    key={i}
                    className="bg-white shadow-md rounded-lg w-[120px] h-[150px] p-4 shadow-black-90"
                  >
                    <p></p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex-col grid gap-2">
          <p className="font-bold  text-lg px-4 text-primary">자주 묻는 질문</p>
          <div className="flex flex-col gap-2 overflow-auto px-4 scrollbar-hide">
            <div className="flex gap-4 whitespace-nowrap w-fit pb-4">
              {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((e, i) => {
                return (
                  <div
                    key={i}
                    className="bg-white shadow-md rounded-lg w-[250px] h-[150px] p-4 shadow-black-90"
                  >
                    <p></p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex-col grid gap-2">
          <p className="font-bold text-primary text-lg px-4">
            최근에 추가된 장비
          </p>
          <div className="flex flex-col gap-2 overflow-auto px-4 scrollbar-hide">
            <div className="flex gap-4 whitespace-nowrap w-fit pb-4">
              {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((e, i) => {
                return (
                  <div
                    key={i}
                    className="bg-white shadow-md rounded-lg w-[60vw] h-[60vw] p-4 shadow-black-90"
                  >
                    <p></p>
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
