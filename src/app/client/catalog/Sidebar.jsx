"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar({ setProfileDrawer }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    router.push("/client/catalog/servicemenu");
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName == activeTab ? tabName : tabName);
  };
  return (
    <div className="p-3 w-[208px] border-r-2 bg-white h-[100vh]">
      <div>
        <h1 className="!text-[20px] font-bold">Catalog</h1>
      </div>
      <div>
        <ul className="p-0 mt-3">
          <Link className="!text-black" href={`/client/catalog/servicemenu`}>
            <li
              className={`flex items-center rounded-md mb-3`}
              onClick={() => handleTabClick("servicemenu")}
            >
              <span className="rounded-t-md	rounded-b-md fw-500 fs-16 font-fam">
                Service menu
              </span>
            </li>
          </Link>
        </ul>

        <ul className="p-0 mt-3">
          <Link className="!text-black" href={`/client/catalog/memberships`}>
            <li
              className={`flex items-center rounded-md mb-3`}
              onClick={() => handleTabClick("memberships")}
            >
              <span className="rounded-t-md	rounded-b-md fw-500 fs-16 font-fam">
                Memberships
              </span>
            </li>
          </Link>
        </ul>

        <ul className="p-0 mt-3">
          <Link className="!text-black" href={`/client/catalog/products`}>
            <li
              className={`flex items-center rounded-md mb-3`}
              onClick={() => handleTabClick("products")}
            >
              <span className="rounded-t-md	rounded-b-md fw-500 fs-16 font-fam">
                Products
              </span>
            </li>
          </Link>
        </ul>

        <ul className="p-0 mt-3">
          <Link className="!text-black" href={`/client/catalog/stocktakes`}>
            <li
              className={`flex items-center rounded-md mb-3`}
              onClick={() => handleTabClick("stocktakes")}
            >
              <span className="rounded-t-md	rounded-b-md fw-500 fs-16 font-fam">
                Stocktakes
              </span>
            </li>
          </Link>
        </ul>

        <ul className="p-0 mt-3">
          <Link className="!text-black" href={`/client/catalog/stockorders`}>
            <li
              className={`flex items-center rounded-md mb-3`}
              onClick={() => handleTabClick("stockorders")}
            >
              <span className="rounded-t-md	rounded-b-md fw-500 fs-16 font-fam">
                Stock orders
              </span>
            </li>
          </Link>
        </ul>

        <ul className="p-0 mt-3">
          <Link className="!text-black" href={`/client/catalog/suppliers`}>
            <li
              className={`flex items-center rounded-md mb-3`}
              onClick={() => handleTabClick("suppliers")}
            >
              <span className="rounded-t-md	rounded-b-md fw-500 fs-16 font-fam">
                Supplier
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
