"use client";
import React, { useState } from "react";
import ChartComponent from "./charts";
import Modal from "./modal";

const page = () => {
  const [timeRange, setTimeRange] = useState(7);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleTimeRangeChange = (e) => {
    setTimeRange(Number(e.target.value));
  };

  const clickhandle = () => {
    console.log("open");
  };
  return (
    <>
      <div className="w-[100%] flex justify-between gap-3 m-5 place-content-center">
        <div
          className="bg-white shadow-lg rounded-lg overflow-hidden flex-grow"
          style={{ width: "150px" }}
        >
          <div className="px-6 mt-4">
            <div className="flex justify-between">
              <h1 className="font-semibold text-[16px] mb-1">Recent Sales</h1>
              <button className="bg-red-500" onClick={openModal}>
                open
              </button>
            </div>
            <p className="text-[20px] text-[#757676]">Last 7 days</p>
            <h1 className="text-bold text-[20px] font-bold mt-1">PKR 0</h1>
          </div>
          <div className="px-6">
            <p className="text-[20px] text-[#757676]">
              Appointments <span className="text-black font-bold">3</span>
            </p>
            <p className="text-[20px] text-[#757676]">
              Appointments value{" "}
              <span className="text-black font-bold">PKR 132.00</span>
            </p>
          </div>
          <div>
            <div>
              <label>Select time range: </label>
              <select onChange={handleTimeRangeChange} value={timeRange}>
                <option value={7}>Last 7 Days</option>
                <option value={30}>Last 30 Days</option>
              </select>
            </div>
            <ChartComponent timeRange={timeRange} />
          </div>
        </div>

        <div
          className="bg-white shadow-lg rounded-lg overflow-hidden flex-grow"
          style={{ width: "150px" }}
        >
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Recent Sales</div>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2>Custom Modal Content</h2>
        <p>This is a custom modal without any library.</p>
      </Modal>
    </>
  );
};

export default page;
