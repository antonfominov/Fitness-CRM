import React, { useState, useEffect } from 'react';

import { createClub, getCities, getClub } from '../../utils/api';

import { Form, Input, Button, Checkbox, Spin, Alert, Select } from 'antd';
import CityEditorForm from '../CityGrid/CityEditorForm';
import { options } from 'less';

const ClubEditorForm = (props) => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const [cityData, setCityData] = useState();

  const [listItems, setListItems] = useState([]);

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  useEffect(() => {
    if(props.data) {
      getClub(props.data).then((response) => {
        form.setFieldsValue({
          name: response.name,
          openTime: response.openTime,
          closeTime: response.closeTime,
          adress: response.adress,
          cityId: response.cityId,
        });
        getCities().then((response) => {
          const children = [];
          response.forEach(i => children.push(<Option key={i.id} value={i.id}>{i.name}</Option>))
          setListItems(children);
        })
        // const children = [];
        // children.push(<Option key={response.cityId} value={response.cityId}>{response.cityName}</Option>);
        // setListItems(children);
      });
    } else {
      getCities().then((response) => {
        form.setFieldsValue({
          name: '',
          openTime: '',
          closeTime: '',
          adress: '',
          cityId: '',
        })
        const children = [];
        response.forEach(i => children.push(<Option key={i.id} value={i.id}>{i.name}</Option>))
        //children.push(<Option key={response.cityId} value={response.cityId}>{response.cityName}</Option>);
        setListItems(children);
      });
    }
  },[props.data]);

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
          span: 7,
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
        <Form.Item
          label="Время открытия"
          name="openTime"
          rules={[
            {
              required: true,
              message: 'Введите время',
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Время закрытия"
          name="closeTime"
          rules={[
            {
              required: true,
              message: 'Введите время',
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Адрес"
          name="adress"
          rules={[
            {
              required: true,
              message: 'Введите адрес',
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Город"
          name="cityId"
          rules={[
            {
              required: true,
              message: 'Укажите город',
            },
          ]}>
            <Select
              placeholder="Выберите один из Ваших городов"
              onFocus={handleChange}
              allowClear>
                {listItems}
            </Select>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default ClubEditorForm;
