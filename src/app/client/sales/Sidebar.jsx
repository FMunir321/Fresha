"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar({ setProfileDrawer }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    router.push("/client/sales/dailysalessummary");
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName == activeTab ? tabName : tabName);
  };
  return (
    <div className="p-3 w-[208px] border-r-2 bg-white h-[100vh]">
      <div>
        <h1>Sales</h1>
      </div>
      <div>
        <ul className="p-0 mt-3">
          <Link
            className="!text-black"
            href={`/client/sales/dailysalessummary`}
          >
            <li
              className={`flex items-center rounded-md mb-3`}
              onClick={() => handleTabClick("dailysalessummary")}
            >
              <span className="rounded-t-md	rounded-b-md fw-500 fs-16 font-fam">
                Daily sales summary
              </span>
            </li>
          </Link>
        </ul>

        <ul className="p-0 mt-3">
          <Link className="!text-black" href={`/client/sales/appointments`}>
            <li
              className={`flex items-center rounded-md mb-3`}
              onClick={() => handleTabClick("appointments")}
            >
              <span className="rounded-t-md	rounded-b-md fw-500 fs-16 font-fam">
                Appointments
              </span>
            </li>
          </Link>
        </ul>

        <ul className="p-0 mt-3">
          <Link className="!text-black" href={`/client/sales/sales`}>
            <li
              className={`flex items-center rounded-md mb-3`}
              onClick={() => handleTabClick("sales")}
            >
              <span className="rounded-t-md	rounded-b-md fw-500 fs-16 font-fam">
                Sales
              </span>
            </li>
          </Link>
        </ul>

        <ul className="p-0 mt-3">
          <Link className="!text-black" href={`/client/sales/payments`}>
            <li
              className={`flex items-center rounded-md mb-3`}
              onClick={() => handleTabClick("payments")}
            >
              <span className="rounded-t-md	rounded-b-md fw-500 fs-16 font-fam">
                Payments
              </span>
            </li>
          </Link>
        </ul>

        <ul className="p-0 mt-3">
          <Link className="!text-black" href={`/client/sales/giftcards`}>
            <li
              className={`flex items-center rounded-md mb-3`}
              onClick={() => handleTabClick("giftcards")}
            >
              <span className="rounded-t-md	rounded-b-md fw-500 fs-16 font-fam">
                Gift cards sold
              </span>
            </li>
          </Link>
        </ul>

        <ul className="p-0 mt-3">
          <Link className="!text-black" href={`/client/sales/membership`}>
            <li
              className={`flex items-center rounded-md mb-3`}
              onClick={() => handleTabClick("membership")}
            >
              <span className="rounded-t-md	rounded-b-md fw-500 fs-16 font-fam">
                Memberships sold
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
