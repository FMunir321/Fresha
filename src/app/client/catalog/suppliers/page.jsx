import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-[16px] font-semibold">Suppliers</h1>
        <p>add and manage details of your suppliers. </p>
      </div>

      <Link href={'/client/components/catalog/supplier'}>Add</Link>
    </div>
  );
};

export default page;
