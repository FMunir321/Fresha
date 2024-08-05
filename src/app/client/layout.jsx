"use client";

import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

const { Sider, Content } = Layout;
const BasicLayout = ({ children }) => {
  const [filterVisible, setFilterVisible] = useState(true);
  const [profileDrawer, setProfileDrawer] = useState(false);
  return (
    <div>
      <Navbar />
      <Layout>
        <Sider>
          <Sidebar setProfileDrawer={setProfileDrawer} />
        </Sider>
        <Layout className=" !bg-[#f8f8fb]">
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default BasicLayout;
