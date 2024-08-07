"use client";
import React, { useState } from "react";
import { Button, Card, Col, Modal, Row, Form, Input, Typography } from 'antd';
import { PlusOutlined, EditOutlined } from '@ant-design/icons';

const { Title } = Typography;

const initialAddresses = [
  { id: 1, name: 'Office', address: '123 Main St, Suite 400' },
  { id: 2, name: 'Branch', address: '456 Elm St, Floor 2' },
];

const AddressManagement = () => {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleAddAddress = () => {
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleModalOk = async () => {
    try {
      const values = await form.validateFields();
      setAddresses([...addresses, { id: addresses.length + 1, ...values }]);
      setIsModalVisible(false);
      form.resetFields();
    } catch (error) {
      console.error('Validation Failed:', error);
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <Title level={4}>Manage Addresses</Title>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{
            borderRadius: '20px',
            backgroundColor: '#52c41a',
            borderColor: '#52c41a',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
          onClick={handleAddAddress}
        >
          Add an Address
        </Button>
      </div>

      <Row gutter={16}>
        {addresses.map((address) => (
          <Col span={8} key={address.id}>
            <Card
              title={address.name}
              extra={<EditOutlined />}
              style={{ marginBottom: '16px' }}
            >
              <p>{address.address}</p>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        title="Add Address"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText="Add"
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Address Name"
            rules={[{ required: true, message: 'Please input the address name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: 'Please input the address!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddressManagement;
