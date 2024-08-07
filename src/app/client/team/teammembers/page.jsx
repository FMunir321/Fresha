"use client";
import React, { useState, useMemo, useEffect } from "react";
import { Button, Flex, Table, Input, Dropdown, Menu } from 'antd';
import { DownOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Link } from "@nextui-org/react";

// Define columns with sorting and action
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text, record) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={record.picture}
          alt={text}
          style={{ width: 40, height: 40, borderRadius: '50%', marginRight: 8 }}
        />
        {text}
      </div>
    ),
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Contact',
    dataIndex: 'contact',
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    sorter: (a, b) => a.rating - b.rating,
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (_, record) => (
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item key="edit">Edit</Menu.Item>
            <Menu.Item key="off-time">Off Time</Menu.Item>
            <Menu.Item key="view-calendar">View Calendar</Menu.Item>
            <Menu.Item key="view-schedule-shifts">View Schedule Shifts</Menu.Item>
          </Menu>
        }
        trigger={['click']}
      >
        <Button icon={<EllipsisOutlined />} />
      </Dropdown>
    ),
  },
];

// Initialize data source
const generateInitialDataSource = () => {
  return Array.from({ length: 46 }).map((_, i) => ({
    key: i,
    name: `Edward King ${i}`,
    contact: `Contact ${i}`,
    rating: Math.floor(Math.random() * 5) + 1, // Example rating between 1 and 5
    picture: `https://i.pravatar.cc/40?img=${i}`, // Example placeholder image URL
    status: i % 2 === 0 ? 'active' : 'inactive', // Example status
  }));
};

export default function Page() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    // Set data source only on the client
    setDataSource(generateInitialDataSource());
  }, []);

  // Memoize filtered data source to avoid unnecessary recalculations
  const filteredDataSource = useMemo(() => {
    return dataSource
      .filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
        const matchesStatus = filterStatus === 'all' || item.status === filterStatus;
        return matchesSearch && matchesStatus;
      });
  }, [searchText, filterStatus, dataSource]);

  const start = () => {
    setLoading(true);
    // Simulate an AJAX request
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.key);
  };

  const menu = (
    <Menu onClick={handleFilterChange}>
      <Menu.Item key="all">All</Menu.Item>
      <Menu.Item key="active">Active</Menu.Item>
      <Menu.Item key="inactive">Inactive</Menu.Item>
    </Menu>
  );

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <>
      <div className="p-3 mt-3">
        <div className="flex !justify-between !items-center">
          <div>
            <p className="!font-bold text-black !text-xl">Team Members</p>
          </div>
          <div>
            <Link href="/client/team/teammembers/add"  className="text-white bg-black text-lg p-2 w-[70px] rounded-md">
              Add
            </Link>
          </div>
        </div>
      </div>

      <Flex gap="middle" vertical className="p-3">
        <Flex align="center" gap="middle">
          <Input
            placeholder="Search by name"
            value={searchText}
            onChange={handleSearchChange}
            style={{ width: 200, marginRight: 16 }}
          />
          <Dropdown overlay={menu} trigger={['click']}>
            <Button>
              Filter by status <DownOutlined />
            </Button>
          </Dropdown>
          <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
            Delete
          </Button>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
        </Flex>
        <Table rowSelection={rowSelection} columns={columns} dataSource={filteredDataSource} />
      </Flex>
    </>
  );
}
