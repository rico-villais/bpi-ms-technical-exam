// style
import './loginStyles.scss';

// store
import useUserStore from "./useUserStore";

// libraries
import {  Form, Input, Button } from 'antd';

const Login = () => {
  const userStore = useUserStore();
  userStore.fetchListIfNeeded();
  if (userStore.loggedInUser) {
    window.location.replace('/user');
  }

  const onFinish = (values:any) => {
    userStore.login(values);
  }

  const onFinishFailed = (errorInfo:any) => {
    console.log('test', this)
    console.log('Failed:', errorInfo);
  }

  return (
    <div className="main-layout">
      <div>
        <div className="wrapper">
            <div className="form-content">
                <h2 className="form-head"> Sign In </h2>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                      <Input />
                    </Form.Item>
    
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                      <Input type="password" />
                    </Form.Item>

                    <Form.Item label={null} style={{ marginTop: "1em" }}>
                      <Button type="primary" htmlType="submit">
                          Submit
                      </Button>
                  </Form.Item>
                </Form>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Login;