import { Button } from "antd";
import React from "react";

const Reviews = () => {
  return (
    <section className="px-5">
      <p>Recently Viewed</p>
      <div className="row flex flex-row gap-3">
        <div className="col sm:w-[49%] lg:w-[24%] border-2 rounded-lg bg-white">
          <div className="px-2 flex flex-col gap-1">
            <h1 className="text-[14px] font-semibold">
              The best booking system{" "}
            </h1>
            <p>
              Great experience, easy to book. Paying for treatments is so
              convenient — no cash or cards needed!
            </p>
          </div>
        </div>

        <div className="col sm:w-[49%] lg:w-[24%] border-2 rounded-lg bg-white">
          <div className="px-2 flex flex-col gap-1">
            <h1 className="text-[14px] font-semibold">
              The best booking system{" "}
            </h1>
            <p>
              Great experience, easy to book. Paying for treatments is so
              convenient — no cash or cards needed!
            </p>
          </div>
        </div>

        <div className="col sm:w-[49%] lg:w-[24%] border-2 rounded-lg bg-white">
          <div className="px-2 flex flex-col gap-1">
            <h1 className="text-[14px] font-semibold">
              The best booking system{" "}
            </h1>
            <p>
              Great experience, easy to book. Paying for treatments is so
              convenient — no cash or cards needed!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
