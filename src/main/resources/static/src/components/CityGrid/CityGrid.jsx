import React, { useState, useEffect, useRef } from 'react';
import CityEditorForm from './CityEditorForm';

import { Table, Modal, Tag, Space, Button } from 'antd';

import { getCities } from '../../utils/api';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const CityGrid = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cityEditor, setCityEditor] = useState(<li></li>);
  const [loading, setLoading] = useState(false);

  const [count, setCount] = useState('');
  const [scrollCoord, setScrollCoord] = useState(0);
  const headerRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCities();
      setCount(result);
      console.log(count);
    };
    fetchData();
  }, []);

  const showModal = (props) => {
    const listItems = Object.keys(props).map((key) => {
      return <li key={key}>{props[key]}</li>;
    });
    setCityEditor(listItems);

    setIsModalVisible(true);
    console.log(listItems);
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
      title: 'Имя',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Возраст',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Адрес',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Отметки',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Действия',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => showModal(record)}>
            Редактировать
          </Button>
          <a>Удалить</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} />;
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
        <CityEditorForm username="Антон" />
      </Modal>
    </>
  );
};

export default CityGrid;
