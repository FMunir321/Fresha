import "./sidebar.css";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import dashboard from "../../../public/home.svg";
import calendar from "../../../public/calendar.svg";
import sales from "../../../public/sales.svg";
import clients from "../../../public/clients.svg";
import account from "../../../public/sales.svg";
import catalog from "../../../public/catalog.svg";
import marketing from "../../../public/marketing.svg";
import payments from "../../../public/payments.svg";
import team from "../../../public/team.svg";
import report from "../../../public/reports.svg";
import addons from "../../../public/add-ons.svg";
import setting from "../../../public/settings.svg";

export default function sidebar({ setProfileDrawer }) {
  const [activeTab, setActiveTab] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const pathSegments = pathname.split("/");
    const lastSegment = pathSegments[pathSegments.length - 1];
    setActiveTab(lastSegment);
  }, [pathname]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName == activeTab ? tabName : tabName);
    setProfileDrawer(false);
  };

  return (
    <div className="p-3 bg-black text-white w-[60px] border-r-2">
      <div>
        <ul className="p-0 text-sm ">
          <Link className="hover-container" href={`/client/dashboard`}>
            <li
              className={`flex items-center rounded-md mb-3`}
              onClick={() => handleTabClick("dashboard")}
            >
              <div></div>
              <Image
                className="mr-3"
                src={dashboard}
                width={24}
                height={24}
                alt="dashboard"
              />
              <span className="rounded-t-md	rounded-b-md ml-[6px] fw-500 fs-16 font-fam text-white p-2">
                dashboard
              </span>
            </li>
          </Link>
        </ul>

        <ul className="p-0 text-sm ">
          <Link className="hover-container" href={`/client/calendar`}>
            <li
              className={`flex items-center rounded-md  mb-3`}
              onClick={() => handleTabClick("calendar")}
            >
              <div></div>
              <Image
                className="mr-3"
                src={calendar}
                width={24}
                height={24}
                alt="calendar"
              />
              <span className="rounded-t-md	rounded-b-md ml-[6px] fw-500 fs-16 font-fam text-white p-2">
                Calendar
              </span>
            </li>
          </Link>
        </ul>

        <ul className="p-0 text-sm">
          <Link className="hover-container" href={`/client/sales`}>
            <li
              className={`flex items-center rounded-md  mb-3`}
              onClick={() => handleTabClick("sales")}
            >
              <div></div>
              <Image
                className="mr-3"
                src={sales}
                width={24}
                height={24}
                alt="sales"
              />
              <span className="rounded-t-md	rounded-b-md ml-[6px] fw-500 fs-16 font-fam text-white p-2">
                Sales
              </span>
            </li>
          </Link>
        </ul>

        <ul className="p-0 text-sm ">
          <Link className="hover-container" href={`/client/clients`}>
            <li
              className={`flex items-center rounded-md  mb-3 `}
              onClick={() => handleTabClick("clients")}
            >
              <div></div>
              <Image
                className="mr-3"
                src={clients}
                width={24}
                height={24}
                alt="clients"
              />
              <span className="rounded-t-md	rounded-b-md ml-[6px] fw-500 fs-16 font-fam text-white p-2">
                Clients
              </span>
            </li>
          </Link>
        </ul>

        <ul className="p-0 text-sm ">
          <Link className="hover-container" href={`/client/catalog`}>
            <li
              className={`flex items-center rounded-md  mb-3`}
              onClick={() => handleTabClick("catalog")}
            >
              <div></div>
              <Image
                className="mr-3"
                src={catalog}
                width={24}
                height={24}
                alt="catalog"
              />
              <span className="rounded-t-md	rounded-b-md ml-[6px] fw-500 fs-16 font-fam text-white p-2">
                Catalog
              </span>
            </li>
          </Link>
        </ul>

        <ul className="p-0 text-sm ">
          <Link className="hover-container" href={`/client/dashboard`}>
            <li
              className={`flex items-center rounded-md  mb-3 ${
                activeTab === "account"
                  ? "setting_active_tab"
                  : "setting_inactive"
              }`}
              onClick={() => handleTabClick("dashboard")}
            >
              <div></div>
              <Image
                className="mr-3"
                src={account}
                width={24}
                height={24}
                alt="account"
              />
              <span className="rounded-t-md	rounded-b-md ml-[6px] fw-500 fs-16 font-fam text-white p-2">
                Online Booking
              </span>
            </li>
          </Link>
        </ul>
        <ul className="p-0 text-sm ">
          <Link className="hover-container" href={`/client/marketing`}>
            <li
              className={`flex items-center rounded-md  mb-3`}
              onClick={() => handleTabClick("marketing")}
            >
              <div></div>
              <Image
                className="mr-3"
                src={marketing}
                width={24}
                height={24}
                alt="marketing"
              />
              <span className="rounded-t-md	rounded-b-md ml-[6px] fw-500 fs-16 font-fam text-white p-2">
                Marketing
              </span>
            </li>
          </Link>
        </ul>
        <ul className="p-0 text-sm ">
          <Link className="hover-container" href={`/client/payments`}>
            <li
              className={`flex items-center rounded-md  mb-3`}
              onClick={() => handleTabClick("payments")}
            >
              <div></div>
              <Image
                className="mr-3"
                src={payments}
                width={24}
                height={24}
                alt="payments"
              />
              <span className="rounded-t-md	rounded-b-md ml-[6px] fw-500 fs-16 font-fam text-white p-2">
                Payments
              </span>
            </li>
          </Link>
        </ul>

        <ul className="p-0 text-sm ">
          <Link className="hover-container" href={`/client/team`}>
            <li
              className={`flex items-center rounded-md  mb-3`}
              onClick={() => handleTabClick("team")}
            >
              <div></div>
              <Image
                className="mr-3"
                src={team}
                width={24}
                height={24}
                alt="team"
              />
              <span className="rounded-t-md	rounded-b-md ml-[6px] fw-500 fs-16 font-fam text-white p-2">
                Team
              </span>
            </li>
          </Link>
        </ul>

        <ul className="p-0 text-sm ">
          <Link className="hover-container" href={`/client/report`}>
            <li
              className={`flex items-center rounded-md  mb-3`}
              onClick={() => handleTabClick("report")}
            >
              <div></div>
              <Image
                className="mr-3"
                src={report}
                width={24}
                height={24}
                alt="report"
              />
              <span className="rounded-t-md	rounded-b-md ml-[6px] fw-500 fs-16 font-fam text-white p-2">
                Report
              </span>
            </li>
          </Link>
        </ul>

        <ul className="p-0 text-sm ">
          <Link className="hover-container" href={`/client/addons`}>
            <li
              className={`flex items-center rounded-md  mb-3`}
              onClick={() => handleTabClick("addons")}
            >
              <div></div>
              <Image
                className="mr-3"
                src={addons}
                width={24}
                height={24}
                alt="addons"
              />
              <span className="rounded-t-md	rounded-b-md ml-[6px] fw-500 fs-16 font-fam text-white p-2">
                Add-ons
              </span>
            </li>
          </Link>
        </ul>
        <ul className="p-0 text-sm ">
          <Link className="hover-container" href={`/client/setting`}>
            <li
              className={`flex items-center rounded-md  mb-3`}
              onClick={() => handleTabClick("setting")}
            >
              <div></div>
              <Image
                className="mr-3"
                src={setting}
                width={24}
                height={24}
                alt="setting"
              />
              <span className="rounded-t-md	rounded-b-md ml-[6px] fw-500 fs-16 font-fam text-white p-2">
                Setting
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
