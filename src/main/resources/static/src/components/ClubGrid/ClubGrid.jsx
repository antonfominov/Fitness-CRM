import React, { useState, useEffect } from 'react';
import moment from 'moment';
import ClubEditorForm from './ClubEditorForm';

import { Table, Modal, Space, Button, Popconfirm, message, Spin } from 'antd';
import { SyncOutlined } from '@ant-design/icons';

import { getClubs, deleteClub, createClub, updateClub } from '../../utils/api';

const ClubGrid = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [clubEditor, setClubEditor] = useState();
  const [loading, setLoading] = useState(false);

  const [formTitle, setFormTitle] = useState();
  const [clubData, setClubData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await getClub();
    };
    fetchData();
  }, []);

  const showModal = (props) => {
    setFormTitle(props ? 'Редактирование' : 'Добавление');
    setClubEditor(props);
    setIsModalVisible(true);
  };

  const handleOk = (e) => {
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
    deleteClub(props);
    setClubData(clubData.filter((item) => item.id != props.id));
    message.success('Элемент успешно удалён');
  }

  function cancel(e) {
    console.log(e);
    message.error('Элемент не удалён');
  }

  const getClub = () => {
    getClubs().then((response) => {
      setClubData(response.map((item, index) => ({ ...item, key: item.id, number: index + 1 })));
    });
  };

  const addClub = (value) => {
    console.log(value);
    setLoading(true);
    createClub(value).then((response) => {
      const club = clubData;
      club.push(response);
      setClubData(club.map((item, index) => ({ ...item, key: item.id, number: index + 1 })));
    });
    setLoading(false);
    setIsModalVisible(false);
  };

  const update = (value) => {
    setLoading(true);
    updateClub(value).then((response) => {
      getClub();
    });
    setLoading(false);
    setIsModalVisible(false);
  };

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
      title: 'Часы работы',
      dataIndex: 'time',
      key: 'openTime + closeTime',
      align: 'center',
      render: (text, row) => <p> {moment.parseZone(row.openTime).format("HH:mm") + ' - ' + moment.parseZone(row.closeTime).format("HH:mm")} </p>,
    },
    {
      title: 'Адрес',
      dataIndex: 'adress',
      key: 'adress',
      align: 'center',
    },
    {
      title: 'Город',
      dataIndex: 'cityName',
      key: 'cityName',
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
      <Table columns={columns} dataSource={clubData} pagination={{ pageSize: '5' }} />

      <Modal
        title={formTitle}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button
            form="clubEditorForm"
            key="submit"
            type="primary"
            htmlType="submit"
            disabled={loading}>
            Принять
          </Button>,
          <Button key="back" onClick={handleCancel}>
            Отмена
          </Button>,
        ]}>
        <Spin spinning={loading}>
          <ClubEditorForm
            data={clubEditor}
            setClubData={setClubData}
            addClub={addClub}
            update={update}
          />
        </Spin>
      </Modal>
    </>
  );
};

export default ClubGrid;
