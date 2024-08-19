"use client";
import React, { useState } from "react";
import axios from "axios";
import {
  Form,
  Input,
  DatePicker,
  Select,
  Button,
  Upload,
  Typography,
  Col,
  Row,
} from "antd";
import { UploadOutlined, CameraOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Title } = Typography;
const { Option } = Select;

const formItemLayout = {
  wrapperCol: { span: 24 },
};

const inputStyle = { height: "45px", marginTop: "10px" };

const page = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await axios.post("/api/submit-form", values);
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="p-4">
      <Form form={form} onFinish={onFinish} layout="vertical">
        {/* Personal Information Section */}
        <Title level={4}>Basics Details</Title>
        <Row gutter={16} wrap>
          <Col span={24}>
            <Form.Item
              name="Service Name"
              label="Service Name"
              {...formItemLayout}
              style={{ marginBottom: 0, marginTop: "10px" }}
            >
              <Input style={inputStyle} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} wrap>
          <Col xs={24} sm={12} md={12}>
            <Form.Item
              name="servicetype"
              label="Service type"
              {...formItemLayout}
              style={{ marginBottom: 0, marginTop: "10px" }}
            >
              <Select placeholder="Select service type" style={inputStyle}>
                <Option value="red">Red</Option>
                <Option value="blue">Blue</Option>
                <Option value="green">Green</Option>
                <Option value="yellow">Yellow</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12}>
            <Form.Item
              name="menucategory"
              label="Menu Category"
              {...formItemLayout}
              style={{ marginBottom: 0, marginTop: "10px" }}
            >
              <Select placeholder="Select menu category" style={inputStyle}>
                <Option value="red">Red</Option>
                <Option value="blue">Blue</Option>
                <Option value="green">Green</Option>
                <Option value="yellow">Yellow</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} wrap>
          <Col span={24}>
            <Form.Item
              name="description"
              label="Description (Optional)"
              {...formItemLayout}
              style={{ marginBottom: 0, marginTop: "10px" }}
            >
              <TextArea rows={4} />
            </Form.Item>
          </Col>
        </Row>

        {/* Employment Details Section */}
        <Title level={4}>Pricing and duration</Title>
        <Row gutter={16} wrap>
          <Col xs={24} sm={8} md={8}>
            <Form.Item
              name="duration"
              label="Duration"
              {...formItemLayout}
              style={{ marginBottom: 0, marginTop: "10px" }}
            >
              <Select placeholder="1h" style={inputStyle}>
                <Option value="red">Red</Option>
                <Option value="blue">Blue</Option>
                <Option value="green">Green</Option>
                <Option value="yellow">Yellow</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={8} md={8}>
            <Form.Item
              name="pricetype"
              label="Price type"
              {...formItemLayout}
              style={{ marginBottom: 0, marginTop: "10px" }}
            >
              <Select placeholder="Fixed" style={inputStyle}>
                <Option value="red">Red</Option>
                <Option value="blue">Blue</Option>
                <Option value="green">Green</Option>
                <Option value="yellow">Yellow</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={8} md={8}>
            <Form.Item
              name="price"
              label="Price"
              {...formItemLayout}
              style={{ marginBottom: 0, marginTop: "10px" }}
            >
              <Input style={inputStyle} />
            </Form.Item>
          </Col>
        </Row>

        <Title level={4}>Extra time</Title>
        <Row gutter={16} wrap>
          <Col xs={24} sm={12} md={12}>
            <Form.Item
              name="type"
              label="Type"
              {...formItemLayout}
              style={{ marginBottom: 0, marginTop: "10px" }}
            >
              <Select placeholder="Select type" style={inputStyle}>
                <Option value="red">Red</Option>
                <Option value="blue">Blue</Option>
                <Option value="green">Green</Option>
                <Option value="yellow">Yellow</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12}>
            <Form.Item
              name="duration"
              label="Duration"
              {...formItemLayout}
              style={{ marginBottom: 0, marginTop: "10px" }}
            >
              <Select placeholder="select duration" style={inputStyle}>
                <Option value="red">Red</Option>
                <Option value="blue">Blue</Option>
                <Option value="green">Green</Option>
                <Option value="yellow">Yellow</Option>
              </Select>
            </Form.Item>
          </Col>
          
        </Row>
      </Form>
    </div>
  );
};

export default page;
