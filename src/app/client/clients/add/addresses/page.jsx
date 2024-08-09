"use client";
import { Button, Form, Input, Modal } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineWork } from "react-icons/md";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";

export default function page() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [addressName, setAddressName] = useState("faisal");

  useEffect(() => {
    console.log(addressName);
  }, [addressName]);

  const handleModalOpen = () => {
    setIsModalVisible(true);
  };
  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const handleModalOk = async () => {};

  return (
    <div>
      <h1 className="text-xl font-bold">Addresses</h1>
      <p>Manage your client's addresses</p>
      <Button type="link" onClick={handleModalOpen}>Add new address</Button>

      <Modal
        title="New Address"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText="Continue"
        cancelText="Cancel"
        okButtonProps={{
          style: {
            backgroundColor: "black",
            borderColor: "black", 
            color: "white", 
            fontWeight: "bold", 
            padding:'20px',
          },
        }}
        cancelButtonProps={{
          style: {
            padding:'20px',
            fontWeight: "bold", 
          },
        }}
      >
        <div className="flex justify-between">
          <div
            className="border border-black rounded-md p-3 w-[30%] flex flex-col items-center"
            onClick={() => setAddressName("home")}
          >
            <AiFillHome width={24} height={24} />
            <p>Home</p>
          </div>
          <div
            className="border border-black rounded-md p-3 w-[30%] flex flex-col items-center "
            onClick={() => setAddressName("work")}
          >
            <MdOutlineWork width={24} height={24} />
            <p>Work</p>
          </div>
          <div
            className="border border-black rounded-md p-3 w-[30%] flex flex-col items-center"
            onClick={() => setAddressName("other")}
          >
            <TfiLayoutMenuSeparated width={24} height={24} />
            <p>Other</p>
          </div>
        </div>
        
        <Form layout="vertical">
          <Form.Item
            // name="name"
            label="Address Name"
            rules={[
              { required: true, message: "Please input the address name!" },
            ]}
          >
           <Input value={addressName} />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: "Please input the address!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
