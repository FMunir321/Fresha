"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    router.push("/client/components/catalog/services/basicdetails");
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName == activeTab ? tabName : tabName);
  };
  return (
    <div className="w-[25%] h-[30%] ">
      <h1 className="text-lg font-bold p-3">Add a new client</h1>

      <div className=" bg-white border-2 h-[40%] p-3 rounded-[12px]">
        <div className="border-b-[1px]">
          <p className="!text-lg !font-bold">Personal</p>

          <ul
            className={`p-2 mt-3 rounded-md hover:bg-[#e9e9e994] ${
              activeTab === "basicdetails" ? "bg-[#d6d7f3]" : ""
            }`}
          >
            <Link className="!text-black" href={`basicdetails`}>
              <li onClick={() => handleTabClick("basicdetails")}>
                <span className="">Basic details</span>
              </li>
            </Link>
          </ul>

          <ul
            className={`p-2 mt-3 rounded-md hover:bg-[#e9e9e994] ${
              activeTab === "teammembers" ? "bg-[#d6d7f3]" : ""
            }`}
          >
            <Link className="!text-black" href={`teammembers`}>
              <li onClick={() => handleTabClick("teammembers")}>
                <span className="">Team members</span>
              </li>
            </Link>
          </ul>

          <ul
            className={`p-2 mt-3 rounded-md hover:bg-[#e9e9e994] ${
              activeTab === "resources" ? "bg-[#d6d7f3]" : ""
            }`}
          >
            <Link className="!text-black" href={`resources`}>
              <li onClick={() => handleTabClick("resources")}>
                <span className="">Resources</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="border-b-[1px]">
          <p className="!text-lg !font-bold pt-2">Settings</p>

          <ul
            className={`p-2 mt-3 rounded-md hover:bg-[#e9e9e994] ${
              activeTab === "onlinebooking" ? "bg-[#d6d7f3]" : ""
            }`}
          >
            <Link className="!text-black" href={`onlinebooking`}>
              <li onClick={() => handleTabClick("onlinebooking")}>
                <span className="">Online booking</span>
              </li>
            </Link>
          </ul>

          <ul
            className={`p-2 mt-3 rounded-md hover:bg-[#e9e9e994] ${
              activeTab === "commissions" ? "bg-[#d6d7f3]" : ""
            }`}
          >
            <Link className="!text-black" href={`commissions`}>
              <li onClick={() => handleTabClick("commissions")}>
                <span className="">Commissions</span>
              </li>
            </Link>
          </ul>

          <ul
            className={`p-2 mt-3 rounded-md hover:bg-[#e9e9e994] ${
              activeTab === "settings" ? "bg-[#d6d7f3]" : ""
            }`}
          >
            <Link className="!text-black" href={`settings`}>
              <li onClick={() => handleTabClick("settings")}>
                <span className="">Settings</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
