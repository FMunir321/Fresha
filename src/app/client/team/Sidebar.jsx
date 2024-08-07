"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar({ setProfileDrawer }) {
  const [activeTab, setActiveTab] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const pathSegments = pathname.split("/");
    const lastSegment = pathSegments[pathSegments.length - 1];
    setActiveTab(lastSegment);
  }, [pathname]);

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
