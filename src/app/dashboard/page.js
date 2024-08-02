"use client";
import React, { useState } from "react";
import ChartComponent from "./charts";

const page = () => {
  const [timeRange, setTimeRange] = useState(7); // Default to 7 days

  const handleTimeRangeChange = (e) => {
    setTimeRange(Number(e.target.value));
  };

  return (
    <>
      <div className="w-[50%] flex justify-between gap-3 m-5 mr-5">
        <div
          className="bg-white shadow-lg rounded-lg overflow-hidden flex-grow"
          style={{ width: "48%" }}
        >
          <div className="px-6 mt-4">
            <h1 className="font-semibold text-[16px] mb-1">Recent Sales</h1>
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
          style={{ width: "48%" }}
        >
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Recent Sales</div>
          </div>
        </div>
      </div>
    </>

    // <div>
    //   <div>
    //     <label>Select time range: </label>
    //     <select onChange={handleTimeRangeChange} value={timeRange}>
    //       <option value={7}>Last 7 Days</option>
    //       <option value={30}>Last 30 Days</option>
    //     </select>
    //   </div>
    //   <ChartComponent timeRange={timeRange} />
    // </div>
  );
};

export default page;
