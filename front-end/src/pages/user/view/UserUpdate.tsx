import * as React from "react";

// componets 
import UserLayout from "./UserLayout";

// libraries
import {  Button, Form, Input  } from 'antd';

const onFinish = (values:any) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo:any) => {
  console.log('Failed:', errorInfo);
};

class UserUpdate extends React.Component {
  render(): React.ReactNode {
    return (
      <UserLayout tabName="Update Record">
        <div style={{display:"grid",justifyContent:"center",gridTemplateColumns:"500px"}}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Country"
              name="country"
              rules={[{ required: true, message: 'Please input your country!' }]}
            >
              <Input />
            </Form.Item>
            
            <Form.Item
              label="Account Type"
              name="accountType"
              rules={[{ required: true, message: 'Please input your account type!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: 'Please input your last name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: 'Please input your first name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email Address"
              name="email"
              rules={[{ required: true, message: 'Please input your email address!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item label={null} style={{ marginTop: "1em" }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>  
      </UserLayout>
    )
  }
}


export default UserUpdate;