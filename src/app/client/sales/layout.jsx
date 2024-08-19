import React from "react";
import Sidebar from "./Sidebar";

export default function layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[100%]">{children}</div>
    </div>
  );
}
