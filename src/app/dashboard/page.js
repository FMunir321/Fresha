"use client";
import React, { useState } from "react";
import ChartComponent from "./charts";

const page = () => {
  const [timeRange, setTimeRange] = useState(7); // Default to 7 days

  const handleTimeRangeChange = (e) => {
    setTimeRange(Number(e.target.value));
  };

  return (
    <div className="flex justify-between w-full">
      <div
        className="bg-white shadow-lg rounded-lg overflow-hidden flex-grow"
        style={{ width: "48%" }}
      >
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Recent Sales</div>
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
