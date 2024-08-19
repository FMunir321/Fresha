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
        <Title level={4}>Add new supplier</Title>
        <Title level={4}>Personal Information</Title>
        <Row gutter={16} wrap>
          <Col span={24}>
            <Form.Item
              name="supplierName"
              label="Supplier Name"
              {...formItemLayout}
              style={{ marginBottom: 0, marginTop: "10px" }}
            >
              <Input style={inputStyle} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="description"
              label="Description"
              {...formItemLayout}
              style={{ marginBottom: 0, marginTop: "10px" }}
            >
              <Input style={inputStyle} />
            </Form.Item>
          </Col>
        </Row>

        <Title level={4}>Contact Information</Title>
        <Row gutter={16} wrap>
          <Col xs={24} sm={24} md={24}>
            <Form.Item
              name="firstname"
              label="First Name"
              {...formItemLayout}
              style={{ marginBottom: 0, marginTop: "10px" }}
            >
              <Input style={inputStyle} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24}>
            <Form.Item
              name="lastname"
              label="Last name"
              {...formItemLayout}
              style={{ marginBottom: 0, marginTop: "10px" }}
            >
              <Input style={inputStyle} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24}>
            <Form.Item
              name="phone number"
              label="Phone Number"
              {...formItemLayout}
              style={{ marginBottom: 0, marginTop: "10px" }}
            >
              <Input
                style={inputStyle}
                addonBefore={
                  <Select defaultValue="+1" style={{ height: "45px" }}>
                    <Option value="+1">+1</Option>
                    <Option value="+44">+44</Option>
                  </Select>
                }
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24}>
            <Form.Item
              name="telephone"
              label="TelePhone"
              {...formItemLayout}
              style={{ marginBottom: 0, marginTop: "10px" }}
            >
              <Input
                style={inputStyle}
                addonBefore={
                  <Select defaultValue="+1" style={{ height: "45px" }}>
                    <Option value="+1">+1</Option>
                    <Option value="+44">+44</Option>
                  </Select>
                }
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24}>
            <Form.Item
              name="email"
              label="Email"
              {...formItemLayout}
              style={{ marginBottom: 0, marginTop: "10px" }}
            >
              <Input style={inputStyle} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24}>
            <Form.Item
              name="website"
              label="Website"
              {...formItemLayout}
              style={{ marginBottom: 0, marginTop: "10px" }}
            >
              <Input style={inputStyle} />
            </Form.Item>
          </Col>
        </Row>

        <Title level={4}>Physical address</Title>
        <Row gutter={16} wrap>
          <Col xs={24} sm={24} md={24}>
            <Form.Item
              name="street"
              label="Street"
              {...formItemLayout}
              style={{ marginBottom: 0, marginTop: "10px" }}
            >
              <Input style={inputStyle} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24}>
            <Form.Item
              name="suburb"
              label="suburb"
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
              name="city"
              label="city"
              {...formItemLayout}
              style={{ marginBottom: 0, marginTop: "10px" }}
            >
              <Input style={inputStyle} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12}>
            <Form.Item
              name="state"
              label="state"
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
              name="zip/postalcode"
              label="Zip / Postalcode"
              {...formItemLayout}
              style={{ marginBottom: 0, marginTop: "10px" }}
            >
              <Input style={inputStyle} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12}>
            <Form.Item
              name="country"
              label="Country"
              {...formItemLayout}
              style={{ marginBottom: 0, marginTop: "10px" }}
            >
            <Select placeholder="Select country" style={inputStyle}>
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
