"use client";

import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import Sidebar from "./sidebar";
const { Sider, Content } = Layout;
const BasicLayout = ({children}) => {
  const [filterVisible, setFilterVisible] = useState(true);
  const [profileDrawer, setProfileDrawer] = useState(false);
  return (
    <div>
      <Layout>
        <Sider theme="light" className="rounded-xl" style={{width:'none'}}>
          <Sidebar setProfileDrawer={setProfileDrawer} />
        </Sider>
        <Layout className=" !bg-[#f8f8fb] rounded-xl">
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default BasicLayout;
