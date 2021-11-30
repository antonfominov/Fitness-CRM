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

  // useEffect(() => {
  //   form.setFieldsValue({
  //     name: props.data ? props.data.name : '',
  //     openTime: props.data ? props.data.openTime : '',
  //     closeTime: props.data ? props.data.closeTime : '',
  //     adress: props.data ? props.data.adress : '',
  //     cityName: props.data ? props.data.cityId : '',
  //   });
  //   getCities().then((response) => {
  //     const children = [];
  //     response.forEach(elem => {
  //       children.push(<Option key={elem.id}>{elem.name}</Option>);
  //     });
  //     setListItems(children);
  //   });
  // }, []);

  useEffect(() => {
    if(props.data) {
      getClub(props.data).then((response) => {
        console.log(response)
        form.setFieldsValue({
          name: response.name,
          openTime: response.openTime,
          closeTime: response.closeTime,
          adress: response.adress,
          cityId: response.cityId,
        });
        const children = [];
        children.push(<Option key={response.cityId} value={response.cityId}>{response.cityName}</Option>);
        setListItems(children);
        console.log(listItems);
      });
    } else {
      form.setFieldsValue({
        name: '',
        openTime: '',
        closeTime: '',
        adress: '',
        cityId: '',
      })
      const children = [];
      setListItems(children);
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
