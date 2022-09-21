import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";

import { AlignBox } from "../../components";

import "./Register.scss";

const Register = () => {
  return (
    <AlignBox align="center" className="register-page">
      <Form
        name="register"
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
        <Form.Item label="First name:">
          <Input />
        </Form.Item>
        <Form.Item label="Last name:">
          <Input />
        </Form.Item>
        <Form.Item label="Email:">
          <Input />
        </Form.Item>
        <Form.Item label="Password:">
          <Input.Password />
        </Form.Item>
        <Form.Item className="register-action-buttons">
          <Button type="default">
            <Link to="/login">Get back</Link>
          </Button>
          <Button type="primary">Create account</Button>
        </Form.Item>
      </Form>
    </AlignBox>
  );
};

export default Register;
