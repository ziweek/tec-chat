import { Button } from "@nextui-org/react";
import { IconBook, IconHome, IconChat } from "./icons";

export default function FooterMain(props: {
  indexOfButton: number;
  setIndexOfButton: Function;
  isModalVisible: boolean;
  setIsModalVisible: Function;
}) {
  return (
    <div className="flex flex-row w-full h-[80px] items-center justify-around drop-shadow-md border-t-1 pb-2">
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
              i == 1 ? "bottom-4 text-white p-3" : "p-2"
            }`}
            color={"default"}
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
