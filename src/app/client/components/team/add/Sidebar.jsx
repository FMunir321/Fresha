"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    router.push("/client/components/team/add/profile");
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
              activeTab === "profile" ? "bg-[#d6d7f3]" : ""
            }`}
          >
            <Link className="!text-black" href={`profile`}>
              <li onClick={() => handleTabClick("profile")}>
                <span className="">Profile</span>
              </li>
            </Link>
          </ul>

          <ul
            className={`p-2 mt-3 rounded-md hover:bg-[#e9e9e994] ${
              activeTab === "addresses" ? "bg-[#d6d7f3]" : ""
            }`}
          >
            <Link className="!text-black" href={`addresses`}>
              <li onClick={() => handleTabClick("addresses")}>
                <span className="">Addresses</span>
              </li>
            </Link>
          </ul>

          <ul
            className={`p-2 mt-3 rounded-md hover:bg-[#e9e9e994] ${
              activeTab === "emergency" ? "bg-[#d6d7f3]" : ""
            }`}
          >
            <Link className="!text-black" href={`emergency`}>
              <li onClick={() => handleTabClick("emergency")}>
                <span className="">Emergency Contacts</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="border-b-[1px]">
          <p className="!text-lg !font-bold pt-2">Workspace</p>

          <ul
            className={`p-2 mt-3 rounded-md hover:bg-[#e9e9e994] ${
              activeTab === "services" ? "bg-[#d6d7f3]" : ""
            }`}
          >
            <Link className="!text-black" href={`services`}>
              <li onClick={() => handleTabClick("services")}>
                <span className="">Services</span>
              </li>
            </Link>
          </ul>

          <ul
            className={`p-2 mt-3 rounded-md hover:bg-[#e9e9e994] ${
              activeTab === "locations" ? "bg-[#d6d7f3]" : ""
            }`}
          >
            <Link className="!text-black" href={`locations`}>
              <li onClick={() => handleTabClick("locations")}>
                <span className="">Locations</span>
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
        <div className="">
          <p className="!text-lg !font-bold pt-2">Pay</p>

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
        </div>
      </div>
    </div>
  );
}
