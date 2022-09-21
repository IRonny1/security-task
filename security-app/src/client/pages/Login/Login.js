import { Link } from "react-router-dom";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

import { AlignBox } from "../../components";

import "./Login.scss";

const Login = () => {
  const [form] = Form.useForm();

  return (
    <AlignBox className="login-page">
      <Form
        name="login"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          label="Email:"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input prefix={<MailOutlined />} />
        </Form.Item>
        <Form.Item
          label="Password:"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary">Sign In</Button>
        </Form.Item>
        <Link to="/register" className="register-link">
          Dont have an account? Create one
        </Link>
      </Form>
    </AlignBox>
  );
};

export default Login;
