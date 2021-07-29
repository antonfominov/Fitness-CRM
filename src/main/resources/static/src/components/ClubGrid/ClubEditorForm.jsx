import React, { useState, useEffect } from 'react';

import { createClub } from '../../utils/api';

import { Form, Input, Button, Checkbox, Spin, Alert } from 'antd';

const ClubEditorForm = (props) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    form.setFieldsValue({
      name: props.data ? props.data.name : '',
      openTime: props.data ? props.data.openTime : '',
      closeTime: props.data ? props.data.closeTime : '',
      adress: props.data ? props.data.adress : '',
    });
  });

  const onFinish = (values) => {
    console.log('Success:', values);
    props.data ? props.update({ ...values, id: props.data.id }) : props.addClub(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Spin spinning={loading}>
      <Form
        form={form}
        id="clubEditorForm"
        name="basic"
        labelCol={{
          span: 6,
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
        <Form.Item label="Время открытия" name="openTime">
          <Input />
        </Form.Item>
        <Form.Item label="Время закрытия" name="closeTime">
          <Input />
        </Form.Item>
        <Form.Item label="Адрес" name="adress">
          <Input />
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default ClubEditorForm;
