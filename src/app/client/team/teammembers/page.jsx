"use client";
import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const items = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
];
export default function page() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-3 mt-3">
      <div className="flex !justify-between !items-center ">
        <div>
          <p className="!font-bold text-black !text-xl">Team Members</p>
        </div>
        <div>
          <button className="text-white bg-black text-lg p-2 w-[70px] rounded-md">
            Add
          </button>
        </div>
      </div>

      <div>
        <div className="p-5">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search items..."
            className="border p-2 mb-4 w-full"
          />
          <ul>
            {filteredItems.map((item, index) => (
              <li key={index} className="border p-2 mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
