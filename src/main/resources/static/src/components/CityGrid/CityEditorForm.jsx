import React, { useState, useEffect } from 'react';

import { Form, Input, Button, Checkbox, Spin } from 'antd';

const CityEditorForm = (props) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    form.setFieldsValue({
      name: props.data ? props.data.name : '',
    });
  });

  const onFinish = (values) => {
    console.log('Success:', values);
    //setLoading(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Spin spinning={loading}>
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
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        <Form.Item
          label="Название"
          name="name"
          //onChange={(e) => onNameChange(e.target.value)}
          rules={[
            {
              required: true,
              message: 'Введите название',
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
      </Form>
    </Spin>
  );
};

export default CityEditorForm;
