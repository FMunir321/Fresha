"use client";
import React from "react";
import Sidebar from "./Sidebar";
import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function layout({ children }) {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-end pt-5 pr-5 gap-3 ">
        <Button
          className="text-lg font-bold p-4"
          onClick={() => router.push("/client/catalog")}
        >
          Close
        </Button>
        <Button className="text-lg font-bold p-4 text-white bg-black">
          Save
        </Button>
      </div>
      <div className="flex w-[80%] m-auto justify-between	">
        <Sidebar />
        <div className="w-[65%] ">{children}</div>
      </div>
    </>
  );
}
