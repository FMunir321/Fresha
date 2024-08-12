"use client";
import { useState } from "react";
import "./page.css";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const menuItems = [
    "Featured",
    "Consultation",
    "PRP & Microneedling",
    "IV Cocktails",
    "CO2 Laser",
    "Fillers",
    "HIFU",
    "PRP & Microneedling",
    "IV Cocktails",
    "CO2 Laser",
  ];

  const itemsPerView = 4; // Number of items to show at a time
  const maxIndex = Math.ceil(menuItems.length / itemsPerView) - 1;

  const handleSlideLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleSlideRight = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      const totalItemsVisible = nextIndex * itemsPerView + itemsPerView;
      if (totalItemsVisible >= menuItems.length) {
        return maxIndex;
      }
      return nextIndex;
    });
  };

  const onclickHandler = (item) => {
    console.log(item);
  };

  return (
    <div className="flex justify-between bg-white p-5">
      <div className="relative w-[60%]">
        <p className="!text-2xl !font-bold">Services</p>
        <div className="flex justify-between items-center">
          {/* Navbar Menu */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-300 ease-in-out gap-3"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="w-1/4 flex justify-center items-center"
                >
                  <span
                    onClick={() => onclickHandler(item)}
                    className="text-[14px] font-bold whitespace-nowrap p-2 hover:bg-[#eaeaea] rounded-2xl"
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <FaAngleLeft
            className="mouseHoverOnIcon w-[25px] h-[20px] m-2"
            onClick={handleSlideLeft}
            disabled={currentIndex === 0}
          />
          <FaChevronRight
            className="mouseHoverOnIcon w-[20px] h-[17px] m-2"
            onClick={handleSlideRight}
            disabled={currentIndex === 0}
          />
        </div>
        <div>
          <p>Consultaion Fee</p>
          <p>1 hr</p>
          <p>Rs 1,000</p>
        </div>
        
      </div>
      <div className="border w-[30%] !border-slate-300">
        <div className="p-3 space-y-4">
          <p className="!text-4xl !font-bold">
            {" "}
            Belleza Aesthetic Clinic Hayatabad
          </p>
          <p className="!text-[20px] !text-[#757676]">No reviews yet</p>
          <Link
            href="/client/clients/add"
            className="text-white bg-black text-lg p-2 rounded-md w-full block text-center "
          >
            Book now
          </Link>
        </div>
        <div className="border-b-1 !border-slate-300"></div>
        <p className="!text-[20px] !text-[#757676]">No reviews yet</p>
      </div>
    </div>
  );
};

export default Navbar;
