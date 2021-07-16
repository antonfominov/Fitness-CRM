import React, { useState, useEffect } from 'react';

import { createCity } from '../../utils/api';

import { Form, Input, Button, Checkbox, Spin, Alert } from 'antd';

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
    //props.updateLoading(true);
    props.data ? updateCity({ ...values, id: props.data.id }) : props.addCity(values);
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
          rules={[
            {
              required: true,
              message: 'Введите название',
            },
          ]}>
          <Input />
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default CityEditorForm;
