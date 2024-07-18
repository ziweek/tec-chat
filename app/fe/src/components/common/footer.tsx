import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { IconGithub, IconLinkedIn } from "./icons";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function Footer(props: any) {
  const router = useRouter();

  return (
    <section
      className={`w-full z-50 bottom-0 min-h-[60px] pb-6 ${
        props.isFixed ? "" : ""
      }`}
    >
      <div className="flex flex-col justify-center items-center select-none h-full gap-1">
        <div className="flex flex-col justify-center items-center select-none h-full leading-none gap-1">
          <p className="font-bold">팀 옴니포스</p>
          <p className="text-tiny">2024 국방창업경진대회</p>
        </div>
        <div className="gap-1 h-full flex flex-row ">
          <Button
            isIconOnly
            color={"primary"}
            variant={"light"}
            size={"sm"}
            onPress={() => {
              window.open("https://github.com/ziweek");
            }}
          >
            <IconGithub fill="#000000" width={"20px"}></IconGithub>
          </Button>
          <Button
            isIconOnly
            variant={"light"}
            color={"primary"}
            size={"sm"}
            onPress={() => {
              window.open("https://www.linkedin.com/in/jiuk-kim-42248325a/");
            }}
          >
            <IconLinkedIn fill="#000000" width={"20px"}></IconLinkedIn>
          </Button>
        </div>
      </div>
    </section>
  );
}
