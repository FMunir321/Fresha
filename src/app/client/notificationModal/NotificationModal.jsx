import React, { useState } from "react";
import "./notificationModal.css";

import { FaRegCalendarAlt } from "react-icons/fa";
import Appoinments from "./Pages/Appoinments";
import { FaRegStar } from "react-icons/fa6";
import Reviews from "./Pages/Reviews";
import { RiMailStarLine } from "react-icons/ri";
import Tips from "./Pages/Tips";
import OnlineSales from "./Pages/OnlineSales";
import Actions from "./Pages/Actions";

export default function NotificationModal({ isOpen, onClose }) {
  const [isTap, setIsTap] = useState("1");

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const renderContent = () => {
    switch (isTap) {
      case "1":
        return <Appoinments />;
      case "2":
        return <Reviews />;
      case "3":
        return <Tips />;
      case "4":
        return <OnlineSales />;
      case "5":
        return <Actions />;
      default:
        return <Appoinments />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-10 justify-end"
      onClick={handleOverlayClick}
    >
      <div className="h-[100vh] w-[400px] absolute top-0 right-0  z-10">
        <div className="flex bg-white">
          <div className="w-[110px] p-2">
            <div onClick={() => setIsTap("1")} className="mouse-hover p-2">
              <div className="p-1">
                <FaRegCalendarAlt />
              </div>
              <div className="text-[#0d1619]">Appoinments</div>
            </div>

            <div onClick={() => setIsTap("2")} className="mouse-hover p-2">
              <div className="p-1">
                <FaRegStar />
              </div>
              <div className="text-[#0d1619]">Reviews</div>
            </div>

            <div onClick={() => setIsTap("3")} className="mouse-hover p-2">
              <div className="p-1">
                <RiMailStarLine />
              </div>
              <div className="text-[#0d1619]">Tips</div>
            </div>

            <div onClick={() => setIsTap("4")} className="mouse-hover p-2">
              <div className="p-1">
                <FaRegCalendarAlt />
              </div>
              <div className="text-[#0d1619]">Online Sales</div>
            </div>

            <div onClick={() => setIsTap("5")} className="mouse-hover p-2">
              <div className="p-1">
                <FaRegCalendarAlt />
              </div>
              <div className="text-[#0d1619]">Actions</div>
            </div>
          </div>

          <div className="p-2 bg-[#f9f9f9] w-[300px]">{renderContent()}</div>
        </div>
        <button onClick={onClose} className="close-btn">
          Close
        </button>
        {/* Your modal content here */}
      </div>
    </div>
  );
}
