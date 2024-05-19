import { Button, Form, Input } from 'antd';
import React from 'react';

export default function LoginForm ({
  onFinish,
  onFinishFailed
}: {
  onFinish: (values: any) => void,
  onFinishFailed: (values: any) => void
}) {
  return (
    <Form name='basic' onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item
        label='Username'
        name='username'
        rules={[{
            required: true,
            message: 'Please enter your username'
        }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Password'
        name='password'
        rules={[{
          required: true,
          message: 'Please enter your password'
        }]}
      >
          <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
