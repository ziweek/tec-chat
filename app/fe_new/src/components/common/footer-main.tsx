"use client";

import { Button } from "@nextui-org/react";
import { IconBook, IconHome, IconChat } from "./icons";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { useState, useEffect } from "react";

export default function FooterMain(props: {
  indexOfButton: number;
  setIndexOfButton: Function;
  isModalVisible: boolean;
  setIsModalVisible: Function;
}) {
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
    <div
      className={`flex flex-row w-full h-[90px] items-center justify-around drop-shadow-md border-t-1 pb-4 max-w-[400px] bg-white`}
    >
      {[
        {
          icon: <IconHome height={20} fill="#0C2F1D"></IconHome>,
          text: "장비관리",
        },
        {
          icon: <IconChat height={20} fill="#fff"></IconChat>,
          text: "테크챗봇",
        },
        {
          icon: <IconBook height={20} fill="#0C2F1D"></IconBook>,
          text: "전자교범",
        },
      ].map((e, i) => {
        return (
          <Button
            key={i}
            className={`w-fit h-fit ${
              i == 1 ? "bottom-4 text-white p-3" : "p-1"
            }`}
            color={"primary"}
            isIconOnly
            disableRipple
            radius={i == 1 ? "full" : "sm"}
            variant={
              i == 1 ? "shadow" : i == props.indexOfButton ? "flat" : "light"
            }
            onPress={() => {
              if (i == 1) {
                props.setIsModalVisible(true);
              } else {
                props.setIndexOfButton(i);
              }
            }}
          >
            <div className="flex flex-col w-fit h-fit gap-1 items-center justify-center aspect-square">
              {e.icon}
              <p className="text-tiny">{e.text}</p>
            </div>
          </Button>
        );
      })}
    </div>
  );
}
