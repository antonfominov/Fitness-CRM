import React, { useEffect } from 'react';

import { Form, Input, Button, Checkbox } from 'antd';

const CityEditorForm = (props) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      username: props.data ? props.data.name : undefined,
    });
  });

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      form={form}
      id="cityEditorForm"
      name="basic"
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
        //username: props.data.name,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
      <Form.Item
        label="Имя"
        name="username"
        rules={[
          {
            required: true,
            message: 'Введите имя',
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[
          {
            required: true,
            message: 'Введите пароль',
          },
        ]}>
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}>
        <Checkbox>Запомнить меня</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}></Form.Item>
    </Form>
  );
};

export default CityEditorForm;
