import Link from "next/link";
import React, { useState } from "react";

import profile_setting from "../../../public/team.svg";
import profile_setting_vector from "../../../public/settings.svg";

import { FiSearch } from "react-icons/fi";
import { FaRegPaperPlane } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiMiniPencil } from "react-icons/hi2";
import Image from "next/image";

export default function navbar() {
  const [profileImage, setProfileImage] = useState(null);

  const handleImage = (event) => {
    const file = event.target.files[0];
    setProfileImage(file);
  };
  return (
    <div className="w-[100%] border-y border-[#d5d7da] bg-white">
      <div className="flex justify-between items-center">
        <div className="p-3">
          <Link href={""} className="font-bold text-3xl" style={{fontFamily:'cursive'}}>
            fresha
          </Link>
        </div>
        <div className="flex">
          <div className="mt-2 mr-3">
            <button className="">
              <FiSearch className="w-[25px] h-[25px] mr-1" />
            </button>
          </div>
          <div className="mt-2 mr-3">
            <button className="">
              <FaRegPaperPlane className="w-[25px] h-[25px] mr-3" />
            </button>
          </div>
          <div className="mt-2 mr-3">
            <button className="">
              <IoNotificationsOutline className="w-[25px] h-[25px]" />
            </button>
          </div>

          <div className="mr-3 flex justify-center lg:justify-start items-center ">
            <input
              style={{ display: "none" }}
              type="file"
              name="profile_image"
              onChange={handleImage}
              id="img_input"
            />
            <label
              htmlFor="img_input"
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                background: "#f1f1f1",
                borderRadius: "50%",
              }}
              className="relative"
            >
              {profileImage ? (
                <Image
                  className="cursor-pointer"
                  src={URL.createObjectURL(profileImage)}
                  alt="Uploaded Image"
                  style={{
                    width: "30%",
                    height: "30%",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                  width={100}
                  height={100}
                />
              ) : (
                <Image
                  className="cursor-pointer"
                  style={{
                    width: "30%",
                    height: "30%",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                  src={profile_setting}
                  width={100}
                  height={100}
                  alt="default-avatar"
                />
              )}
              {/* <span className="cursor-pointer border border-[#0D257B] rounded-full absolute top-[70px] right-[0px] bg-white w-[32px] h-[32px] flex justify-center items-center">
                <HiMiniPencil className="text-[#0D257B] text-xl cursor-pointer" />
              </span> */}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
