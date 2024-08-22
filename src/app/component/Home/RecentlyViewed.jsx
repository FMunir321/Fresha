import Image from "next/image";
import React from "react";
import { Button } from "antd";

const RecentlyViewed = () => {
  return (
    <section className="px-5">
      <p>Recently Viewed</p>
      <div className="row flex flex-row gap-3">
        <div className="col sm:w-[49%] lg:w-[24%] border-2 rounded-lg bg-white">
          <img
            className="w-[317px] h-[178px]"
            src={
              "https://images.fresha.com/locations/location-profile-images/973745/1048959/a9150849-5b2b-43f7-91e6-67be893dc4d6.jpg?class=venue-gallery-large&dpr=2"
            }
          />
          <div className="px-2 flex flex-col gap-1">
            <h1 className="text-[14px] font-semibold">
              Belleza Aesthetic Clinic Hayatabad{" "}
            </h1>
            <p className="text-[#757676]">No reviews yet</p>
            <p className="text-[#757676]">Peshawar, Peshawar</p>
            <Button className="rounded-3xl w-[50%] mb-1">Aesthetics</Button>
          </div>
        </div>
        <div className="col sm:w-[49%] lg:w-[24%] border-2 rounded-lg bg-white">
          <img
            className="w-[317px] h-[178px]"
            src={
              "https://images.fresha.com/locations/location-profile-images/973745/1048959/a9150849-5b2b-43f7-91e6-67be893dc4d6.jpg?class=venue-gallery-large&dpr=2"
            }
          />
          <div className="px-2 flex flex-col gap-1">
            <h1 className="text-[14px] font-semibold">
              Belleza Aesthetic Clinic Hayatabad{" "}
            </h1>
            <p className="text-[#757676]">No reviews yet</p>
            <p className="text-[#757676]">Peshawar, Peshawar</p>
            <Button className="rounded-3xl w-[50%] mb-1">Aesthetics</Button>
          </div>
        </div>
        <div className="col sm:w-[49%] lg:w-[24%] border-2 rounded-lg bg-white">
          <img
            className="w-[317px] h-[178px]"
            src={
              "https://images.fresha.com/locations/location-profile-images/973745/1048959/a9150849-5b2b-43f7-91e6-67be893dc4d6.jpg?class=venue-gallery-large&dpr=2"
            }
          />
          <div className="px-2 flex flex-col gap-1">
            <h1 className="text-[14px] font-semibold">
              Belleza Aesthetic Clinic Hayatabad{" "}
            </h1>
            <p className="text-[#757676]">No reviews yet</p>
            <p className="text-[#757676]">Peshawar, Peshawar</p>
            <Button className="rounded-3xl w-[50%] mb-1">Aesthetics</Button>
          </div>
        </div>
        <div className="col sm:w-[49%] lg:w-[24%] border-2 rounded-lg bg-white">
          <img
            className="w-[317px] h-[178px]"
            src={
              "https://images.fresha.com/locations/location-profile-images/973745/1048959/a9150849-5b2b-43f7-91e6-67be893dc4d6.jpg?class=venue-gallery-large&dpr=2"
            }
          />
          <div className="px-2 flex flex-col gap-1">
            <h1 className="text-[14px] font-semibold">
              Belleza Aesthetic Clinic Hayatabad{" "}
            </h1>
            <p className="text-[#757676]">No reviews yet</p>
            <p className="text-[#757676]">Peshawar, Peshawar</p>
            <Button className="rounded-3xl w-[50%] mb-1">Aesthetics</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewed;
