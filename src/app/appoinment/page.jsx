"use client";
import { useEffect, useState } from "react";
import "./page.css";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { TfiTimer } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { Button } from "antd";

const generateInitialDataSource = () => {
  return Array.from({ length: 10 }).map((_, i) => ({
    key: i,
    name: `Edward King ${i}`,
    contact: `Contact ${i}`,
    rating: Math.floor(Math.random() * 5) + 1, // Example rating between 1 and 5
    picture: `https://i.pravatar.cc/40?img=${i}`, // Example placeholder image URL
    status: i % 2 === 0 ? "active" : "inactive", // Example status
  }));
};
const data = [
  {
    id: "1",
    day: "Monday",
    starttime: "11:00am",
    endtime: "8:00pm",
    available: "yes",
  },
  {
    id: "1",
    day: "Tuesday",
    starttime: "11:00am",
    endtime: "8:00pm",
    available: "yes",
  },
  {
    id: "1",
    day: "Wednesday",
    starttime: "11:00am",
    endtime: "8:00pm",
    available: "yes",
  },
  {
    id: "1",
    day: "Thrusday",
    starttime: "11:00am",
    endtime: "8:00pm",
    available: "yes",
  },
  {
    id: "1",
    day: "Friday",
    starttime: "11:00am",
    endtime: "8:00pm",
    available: "No",
  },
];
const Navbar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dataSource, setDataSource] = useState([]);

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

  useEffect(() => {
    // Set data source only on the client
    setDataSource(generateInitialDataSource());
    console.log(dataSource);
  }, []);
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
    <div className="flex justify-between items-start bg-white p-5 ">
      <div className="relative w-[60%] ">
        <p className="!text-2xl !font-bold">Services</p>
        <div className="flex justify-between items-center">
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
        <div className="border rounded-lg p-3 !border-slate-300 flex justify-between hover:bg-[#f3f4f6] !mt-5">
          <div>
            <p>Consultaion Fee</p>
            <p>1 hr</p>
            <p>Rs 1,000</p>
          </div>
          <Button className="rounded-3xl border-slate-300 font-semibold">
            Book
          </Button>
        </div>

        <p className="!text-2xl !font-bold pt-5">Team</p>
        <div className="grid grid-cols-4 gap-5">
          {dataSource.map((item, index) => (
            <div key={index} className="flex items-center p-3">
              <img
                src={item.picture}
                alt={item.picture}
                style={{
                  width: 118,
                  height: 118,
                  borderRadius: "50%",
                  marginRight: 8,
                }}
              />
            </div>
          ))}
        </div>

        <p className="!text-2xl !font-bold pt-5">About</p>
        <p className="!text-base !font-medium pt-3">
          Aesthetics/ laser hairs removal/ CO2 fractional / HIFU/ Hydrafacials/
          PRPs/ Microneedling/ Botox/ Fillers/ Acne treatment/ Acne Scar
          Removal/ Whitening Facials/ Whitening Infusions/ Skin Glow Therapy.
        </p>
        <div className="flex justify-between pt-5">
          <div className="w-[50%]">
            <p className="!text-xl !font-semibold">Opening times</p>
            {data.map((item, index) => (
              <div className="flex justify-between text-sm font-medium">
                <div>{item.day}</div>
                <div>
                  {item.starttime} - {item.endtime}
                </div>
              </div>
            ))}
          </div>
          <div className="w-[40%]">
            <p className="!text-xl !font-semibold">Additional information</p>
            <div>Instant Confirmation</div>
          </div>
        </div>

        <p className="!text-2xl !font-bold py-5">Venues nearby</p>
        <img className="w-[45%] pl-2" src="https://images.fresha.com/locations/location-profile-images/495535/1515313/6b6905ad-e838-4052-813d-7f1bfc020650-BellezaBeautyClinicandSalon-PK-KhyberPakhtunkhwa-Peshawar-Bashirabad-Fresha.jpg?class=venue-gallery-large&dpr=2"></img>
        <div className="border-x border-b w-[45%] pl-2">
          
          <p className="!text-md !font-semibold">
            Belleza Beauty Clinic and Salon
          </p>
          <div className="flex text-center pt-1">
            <p className="text-md !font-semibold">4.6</p>
            <span className="p-[3px]">(16)</span>
          </div>
          <p className="text-md">Bashirabad, Peshawar</p>
          <button className="text-md pt-1">Beauty Salon</button>
        </div>
      </div>

      <div className="border w-[30%] !border-slate-300 sticky !top-0 rounded-md self-start">
        <div className="p-3 space-y-4">
          <p className="!text-4xl !font-bold">
            Belleza Aesthetic Clinic Hayatabad
          </p>
          <p className="!text-[20px] !text-[#757676]">No reviews yet</p>
          <Link
            href="/client/clients/add"
            className="text-white bg-black text-lg p-2 rounded-md w-full block text-center"
          >
            Book now
          </Link>
        </div>
        <div className="border-b-1 !border-slate-300"></div>
        <div className="flex p-3">
          <TfiTimer className="w-5 h-5" />
          <p className="!text-[16px] !ml-1">
            Closed opens on Tuesday at 11:00 am
          </p>
        </div>
        <div className="flex p-3">
          <IoLocationOutline className="w-[25px] h-5" />
          <p className="!text-[16px] !ml-1">
            Block B, PDA Compex, Phase 5, Hayatabad, Block B
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
