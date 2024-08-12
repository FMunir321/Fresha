"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar({ setProfileDrawer }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    router.push("/client/team/teammembers");
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName == activeTab ? tabName : tabName);
  };
  return (
    <div className="p-3 w-[208px] border-r-2 bg-white h-[100vh]">
      <div>
        <h1>Team</h1>
      </div>
      <div>
        <ul className="p-0 mt-3">
          <Link className="!text-black" href={`/client/team/teammembers`}>
            <li
              className={`flex items-center rounded-md mb-3`}
              onClick={() => handleTabClick("dashboard")}
            >
              <span className="rounded-t-md	rounded-b-md fw-500 fs-16 font-fam">
                Team Members
              </span>
            </li>
          </Link>
        </ul>

        <ul className="p-0 mt-3">
          <Link className="!text-black" href={`/client/team/scheduledshifts`}>
            <li
              className={`flex items-center rounded-md mb-3`}
              onClick={() => handleTabClick("dashboard")}
            >
              <span className="rounded-t-md	rounded-b-md fw-500 fs-16 font-fam">
                Scheduled Shifts
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
