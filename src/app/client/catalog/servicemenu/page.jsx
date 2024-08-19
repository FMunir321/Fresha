import { Button, Dropdown } from "antd";
import React from "react";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/client/components/catalog/services/basicdetails"
      >
       Single service
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];
const page = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-[16px] font-semibold">Service menu</h1>
        <p>View and manage the services offered by your business. </p>
      </div>
      <div>
        <Dropdown menu={{ items }} placement="bottomRight" arrow>
          <Button>Add</Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default page;
