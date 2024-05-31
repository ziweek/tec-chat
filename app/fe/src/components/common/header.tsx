import { Button } from "@nextui-org/react";
import { IconBack } from "./icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header(props: any) {
  const router = useRouter();

  return (
    <section
      className={`top-0 w-full max-w-[1024px] ${
        props.isFixed ? "fixed z-50" : ""
      }`}
    >
      {/* BASIC HEADER */}
      <div
        className="flex flex-row w-full justify-between items-center h-[50px] py-2"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <div className="flex flex-row items-center justify-between w-full gap-2 px-1">
          {/*  */}
          {props.isBackButtonVisible && (
            <Button
              disableRipple={true}
              disableAnimation={true}
              color={"default"}
              variant={"light"}
              isIconOnly
              onPress={() => {
                router.back();
              }}
              // className="justify-start"
            >
              <IconBack fill={"#000000"} width={"20px"}></IconBack>
            </Button>
          )}
          {props.isCloseButtonVisible && (
            <div className="opacity-0">
              <Button
                color={"danger"}
                variant={"solid"}
                size={"sm"}
                onPress={() => {
                  router.back();
                }}
              >
                종료
              </Button>
            </div>
          )}
          {/*  */}
          {props.isLogoVisible && (
            <Image
              src={"/images/logo.png"}
              width={45}
              height={45}
              alt="logo"
            ></Image>
          )}
          {/*  */}
          {props.title && (
            <p className="w-full font-bold select-none text-center text-lg">
              {props.title}
            </p>
          )}
          {props.isBackButtonVisible && (
            <div className="opacity-0">
              <Button
                isDisabled
                variant={"light"}
                isIconOnly
                onPress={() => {
                  props.setIsModalVisible(false);
                }}
              >
                <IconBack fill={"#000000"} width={"20px"}></IconBack>
              </Button>
            </div>
          )}
          {props.isCloseButtonVisible && (
            <Button
              color={"danger"}
              variant={"solid"}
              size={"sm"}
              className="text-sm font-semibold"
              onPress={() => {
                props.setIsModalVisible(!props.isModalVisible);
              }}
            >
              종료
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
