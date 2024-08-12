"use client";
import React, { useState } from "react";
import { Button, Flex, Table, Input, Dropdown, Menu } from "antd";

const generateInitialDataSource = () => {
  return Array.from({ length: 46 }).map((_, i) => ({
    key: i,
    name: `Edward King ${i}`,
    contact: `Contact ${i}`,
    rating: Math.floor(Math.random() * 5) + 1, // Example rating between 1 and 5
    picture: `https://i.pravatar.cc/40?img=${i}`, // Example placeholder image URL
    status: i % 2 === 0 ? "active" : "inactive", // Example status
  }));
};

export default function page() {
  const [searchText, setSearchText] = useState("");
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    // Set data source only on the client
    setDataSource(generateInitialDataSource());
  }, []);
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div>
      <h1>Services</h1>
      <p>Choose the services this team member provides</p>
      <Input
        placeholder="Search by name"
        value={searchText}
        onChange={handleSearchChange}
        style={{ marginRight: 16 }}
      />

    </div>
  );
}
