import React from 'react';
import { Layout, Menu } from 'antd';

import CityGrid from '../CityGrid/CityGrid';

import './navigation.css';
const { Header, Content, Footer, Sider } = Layout;

const Navigation = () => {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">Города</Menu.Item>
          <Menu.Item key="2">Клубы</Menu.Item>
          <Menu.Item key="3">Тренировки</Menu.Item>
          <Menu.Item key="4">nav 4</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <CityGrid />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2021 Anton Fominov</Footer>
      </Layout>
    </Layout>
  );
};

export default Navigation;
