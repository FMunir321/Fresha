"use client";
import React, { useState } from "react";
import { Button, Form, Input, Modal, Typography, Row, Col, Card } from 'antd';
import { PlusOutlined, EditOutlined } from '@ant-design/icons';

const { Title } = Typography;

const initialContacts = [
  { id: 1, name: 'John Doe', relationship: 'Brother', email: 'john.doe@example.com', phone: '+1 234 567 8901' },
  { id: 2, name: 'Jane Smith', relationship: 'Friend', email: 'jane.smith@example.com', phone: '+1 987 654 3210' },
];

const EmergencyContacts = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleAddContact = () => {
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleModalOk = async () => {
    try {
      const values = await form.validateFields();
      setContacts([...contacts, { id: contacts.length + 1, ...values }]);
      setIsModalVisible(false);
      form.resetFields();
    } catch (error) {
      console.error('Validation Failed:', error);
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <Title level={4}>Manage Emergency Contacts</Title>
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
          onClick={handleAddContact}
        >
          Add an Emergency Contact
        </Button>
      </div>

      <Row gutter={16}>
        {contacts.map((contact) => (
          <Col span={8} key={contact.id}>
            <Card
              title={contact.name}
              extra={<EditOutlined />}
              style={{ marginBottom: '16px' }}
            >
              <p><strong>Relationship:</strong> {contact.relationship}</p>
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>Phone:</strong> {contact.phone}</p>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        title="Add Emergency Contact"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText="Add"
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Full Name"
            rules={[{ required: true, message: 'Please input the full name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="relationship"
            label="Relationship"
            rules={[{ required: true, message: 'Please input the relationship!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ type: 'email', message: 'Please input a valid email!' }, { required: true, message: 'Please input the email!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[{ required: true, message: 'Please input the phone number!' }]}
          >
            <Input.Group compact>
              <Form.Item
                name="countryCode"
                noStyle
                rules={[{ required: true, message: 'Please input the country code!' }]}
              >
                <Input
                  style={{ width: '30%' }}
                  addonBefore="+"
                  placeholder="Country Code"
                />
              </Form.Item>
              <Form.Item
                name="phoneNumber"
                noStyle
                rules={[{ required: true, message: 'Please input the phone number!' }]}
              >
                <Input
                  style={{ width: '70%' }}
                  placeholder="Phone Number"
                />
              </Form.Item>
            </Input.Group>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default EmergencyContacts;
