import React, { useState, useEffect, useRef } from 'react';
import CityEditorForm from './CityEditorForm';

import { Table, Modal, Space, Button } from 'antd';
import { SyncOutlined } from '@ant-design/icons';

import { getCities } from '../../utils/api';

const CityGrid = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cityEditor, setCityEditor] = useState();
  const [loading, setLoading] = useState(false);

  const [cityData, setCityData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCities();
      setCityData(result.map((item) => ({ ...item, key: item.id })));
      console.log(cityData);
    };
    fetchData();
  }, []);

  const showModal = (props) => {
    // const listItems = Object.keys(props).map((key) => {
    //   return <li key={key}>{props[key]}</li>;
    // });
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

  const columns = [
    {
      title: 'Номер',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Действия',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => showModal(record)}>Редактировать</Button>
          <Button danger>Удалить</Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Button type="primary" shape="round">
          Добавить
        </Button>
        <Button type="primary" shape="circle" icon={<SyncOutlined />} />
      </Space>
      <Table columns={columns} dataSource={cityData} pagination={{ pageSize: '10' }} />
      <Modal
        title="Редактирование"
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
