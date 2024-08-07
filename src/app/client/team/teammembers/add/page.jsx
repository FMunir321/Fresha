"use client";
import React, { useState } from "react";
import axios from 'axios';
import { Form, Input, DatePicker, Select, Button, Upload, Typography, Col, Row } from 'antd';
import { UploadOutlined, CameraOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Option } = Select;

const formItemLayout = {
  wrapperCol: { span: 24 },
};

const inputStyle = { height: '45px', marginTop: '10px' };

const AddTeamForm = () => {
  const [form] = Form.useForm();
  const [profileImage, setProfileImage] = useState('https://i.pravatar.cc/100');

  const handleImageChange = (info) => {
    if (info.file.status === 'done') {
      setProfileImage(info.file.response.url);
    }
  };

  const onFinish = async (values) => {
    try {
      const response = await axios.post('/api/submit-form', values);
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="p-4">
      <Form form={form} onFinish={onFinish} layout="vertical">
        {/* Profile Image Section */}
        <Form.Item label="Profile Image">
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Upload
              showUploadList={false}
              action="/api/upload-profile-image"
              beforeUpload={() => false}
              onChange={handleImageChange}
              className="profile-image-upload"
            >
              <div style={{ width: 100, height: 100, borderRadius: '50%', overflow: 'hidden', position: 'relative' }}>
                <img src={profileImage} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <CameraOutlined style={{ position: 'absolute', bottom: 0, right: 0, fontSize: 24, color: 'white', backgroundColor: 'black', padding: 4, borderRadius: '50%' }} />
              </div>
            </Upload>
          </div>
        </Form.Item>

        {/* Personal Information Section */}
        <Title level={4}>Personal Information</Title>
        <Row gutter={16} wrap>
          <Col xs={24} sm={12} md={12}>
            <Form.Item name="firstName" label="First Name" {...formItemLayout} style={{ marginBottom: 0, marginTop: '10px' }}>
              <Input style={inputStyle} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12}>
            <Form.Item name="lastName" label="Last Name" {...formItemLayout} style={{ marginBottom: 0, marginTop: '10px' }}>
              <Input style={inputStyle} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} wrap>
          <Col xs={24} sm={12} md={12}>
            <Form.Item name="email" label="Email" {...formItemLayout} style={{ marginBottom: 0, marginTop: '10px' }}>
              <Input style={inputStyle} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12}>
            <Form.Item name="phoneNumber" label="Phone Number" {...formItemLayout} style={{ marginBottom: 0, marginTop: '10px' }}>
              <Input
                style={inputStyle}
                addonBefore={<Select defaultValue="+1" style={{ height: '45px' }}><Option value="+1">+1</Option><Option value="+44">+44</Option></Select>}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} wrap>
          <Col xs={24} sm={12} md={12}>
            <Form.Item name="birthday" label="Birthday" {...formItemLayout} style={{ marginBottom: 0, marginTop: '10px' }}>
              <DatePicker style={inputStyle} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12}>
            <Form.Item name="year" label="Year" {...formItemLayout} style={{ marginBottom: 0, marginTop: '10px' }}>
              <Input type="number" style={inputStyle} />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item name="calendarColor" label="Choose Calendar Color" {...formItemLayout} style={{ marginBottom: 0, marginTop: '10px' }}>
          <Select placeholder="Select a color" style={inputStyle}>
            <Option value="red">Red</Option>
            <Option value="blue">Blue</Option>
            <Option value="green">Green</Option>
            <Option value="yellow">Yellow</Option>
          </Select>
        </Form.Item>
        <Form.Item name="jobTitle" label="Job Title" {...formItemLayout} style={{ marginBottom: 0, marginTop: '10px' }}>
          <Input style={inputStyle} />
        </Form.Item>

        {/* Employment Details Section */}
        <Title level={4}>Employment Details</Title>
        <p>Manage your team members' start date, end date, and employment details.</p>
        <Row gutter={16} wrap>
          <Col xs={24} sm={12} md={12}>
            <Form.Item name="startDate" label="Start Date" {...formItemLayout} style={{ marginBottom: 0, marginTop: '10px' }}>
              <DatePicker style={inputStyle} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12}>
            <Form.Item name="startYear" label="Start Year" {...formItemLayout} style={{ marginBottom: 0, marginTop: '10px' }}>
              <Input type="number" style={inputStyle} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} wrap>
          <Col xs={24} sm={12} md={12}>
            <Form.Item name="endDate" label="End Date" {...formItemLayout} style={{ marginBottom: 0, marginTop: '10px' }}>
              <DatePicker style={inputStyle} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12}>
            <Form.Item name="endYear" label="End Year" {...formItemLayout} style={{ marginBottom: 0, marginTop: '10px' }}>
              <Input type="number" style={inputStyle} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} wrap>
          <Col xs={24} sm={12} md={12}>
            <Form.Item name="employmentType" label="Employment Type" {...formItemLayout} style={{ marginBottom: 0, marginTop: '10px' }}>
              <Select placeholder="Select employment type" style={inputStyle}>
                <Option value="full-time">Full-Time</Option>
                <Option value="part-time">Part-Time</Option>
                <Option value="contract">Contract</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12}>
            <Form.Item name="teamMemberId" label="Team Member ID" {...formItemLayout} style={{ marginBottom: 0, marginTop: '10px' }}>
              <Input style={inputStyle} />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item name="notes" label="Notes" {...formItemLayout} style={{ marginTop: '10px' }}>
          <Input.TextArea rows={4} style={inputStyle} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddTeamForm;
