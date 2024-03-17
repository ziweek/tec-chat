import { Card, Spinner } from "@nextui-org/react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

type propsForTextBubble = {
  imgSrc: string;
  isLoading: boolean;
  name: string;
  text: string;
  isSent: boolean;
  isAnimated: boolean;
  indexStage: number;
  isLast: boolean;
};

export default function TextBubble(props: propsForTextBubble) {
  return (
    <div
      className={`space-y-4 flex flex-col w-full ${
        props.isSent ? "items-end" : "items-start"
      }`}
    >
      <div
        className={`flex flex-row h-fit items-end space-x-2 w-full ${
          props.isSent ? "justify-end" : "justify-start"
        }`}
      >
        <Image
          src={props.imgSrc}
          alt="a"
          height={50}
          width={50}
          className={`${props.isSent ? "opacity-0" : ""}`}
        ></Image>
        <p className="text-pretty text-center break-keep font-bold">
          {props.isSent ? "사용자" : props.name}
        </p>
      </div>
      <Card
        className={`w-fit max-w-[90%] h-fit shadow-none border-0 p-4 text-black ${
          props.isSent
            ? "bg-gray-100"
            : props.indexStage == 0
            ? "bg-blue-100 dark:bg-blue-300"
            : props.indexStage == 1
            ? "bg-orange-100 dark:bg-orange-300"
            : "bg-purple-100 dark:bg-purple-300"
        } `}
        shadow={"none"}
      >
        {props.isLoading ? (
          <Spinner></Spinner>
        ) : props.isAnimated && props.isLast ? (
          <TypeAnimation
            sequence={[props.text]}
            wrapper="span"
            speed={25}
            repeat={1}
            cursor={false}
          />
        ) : (
          <p>{props.text}</p>
        )}
      </Card>
    </div>
  );
}
