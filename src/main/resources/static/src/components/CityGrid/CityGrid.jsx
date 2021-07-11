import React, { useState, useEffect, useRef } from 'react';
import CityEditorForm from './CityEditorForm';

import { Table, Modal, Space, Button, Popconfirm, message } from 'antd';
import { SyncOutlined } from '@ant-design/icons';

import { getCities, deleteCity } from '../../utils/api';

const CityGrid = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cityEditor, setCityEditor] = useState();
  const [loading, setLoading] = useState(false);

  const [formTitle, setFormTitle] = useState();
  const [cityData, setCityData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCities();
      setCityData(result.map((item, index) => ({ ...item, key: item.id, number: index + 1 })));
      console.log(cityData);
    };
    fetchData();
  }, []);

  const showModal = (props) => {
    // const listItems = Object.keys(props).map((key) => {
    //   return <li key={key}>{props[key]}</li>;
    // });
    setFormTitle(props ? 'Редактирование' : 'Добавление');
    setCityEditor(props);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsModalVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function confirm(props) {
    console.log(props);
    deleteCity(props);
    setCityData(cityData.filter((item) => item.id != props.id));
    message.success('Элемент успешно удалён');
  }

  function cancel(e) {
    console.log(e);
    message.error('Элемент не удалён');
  }

  const columns = [
    {
      title: 'Номер',
      dataIndex: 'number',
      key: 'id',
    },
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
    {
      title: 'Действия',
      key: 'action',
      align: 'center',
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => showModal(record)}>Редактировать</Button>
          <Button danger>
            <Popconfirm
              title="Вы уверены что хотите удалить выбранный элемент?"
              onConfirm={() => confirm(record)}
              onCancel={cancel}
              okText="Да"
              cancelText="Нет">
              Удалить
            </Popconfirm>
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Button type="primary" shape="round" onClick={() => showModal()}>
          Добавить
        </Button>
        <Button type="primary" shape="circle" icon={<SyncOutlined />} />
      </Space>
      <Table columns={columns} dataSource={cityData} pagination={{ pageSize: '10' }} />
      <Modal
        title={formTitle}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button
            form="cityEditorForm"
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
            htmlType="submit">
            Принять
          </Button>,
          <Button key="back" onClick={handleCancel}>
            Отмена
          </Button>,
        ]}>
        <CityEditorForm data={cityEditor} />
      </Modal>
    </>
  );
};

export default CityGrid;
