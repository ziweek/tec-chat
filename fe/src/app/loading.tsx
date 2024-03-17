"use client";

import { Spinner } from "@nextui-org/react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-2">
      <Spinner size={"lg"}></Spinner>
    </div>
  );
}
