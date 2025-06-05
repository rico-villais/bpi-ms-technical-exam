import * as React from "react";

// libraries
import {  Button, Form, Input  } from 'antd';

// store
import useUserStore from "../useUserStore";

interface IUserForm {
    viewingAs: string;
}

class UserForm extends React.Component<IUserForm> {
    constructor(props:any) {
        super(props);
        console.log('ey', props, this)
        this.onFinish.bind(this);
        this.onFinishFailed.bind(this);
    }

    onFinish = (values:any) => {
        console.log('Success:', values);
        if (this.props.viewingAs === "add") {
            useUserStore.getState().create(values);
        }
    }

    onFinishFailed = (errorInfo:any) => {
        console.log('test', this)
        console.log('Failed:', errorInfo);
    }

    render(): React.ReactNode {
        return (
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
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
                name="accounttype"
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
                name="lastname"
                rules={[{ required: true, message: 'Please input your last name!' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="First Name"
                name="firstname"
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
        )
    }
}


export default UserForm;