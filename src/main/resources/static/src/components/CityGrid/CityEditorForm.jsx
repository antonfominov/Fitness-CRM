import React from 'react';

import { Form, Input, Button, Checkbox } from 'antd';

const CityEditorForm = (props) => {
  var data = props.data.name ? props.data.name : undefined;
  const [form] = Form.useForm();

  form.setFieldsValue({
    username: data,
  });
  console.log(data);

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
