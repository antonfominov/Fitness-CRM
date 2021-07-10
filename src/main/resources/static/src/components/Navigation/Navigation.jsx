import React from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

import CityGrid from '../CityGrid/CityGrid';
import ClubGrid from '../ClubGrid/ClubGrid';

import './navigation.css';
const { Header, Content, Footer, Sider } = Layout;

const Navigation = () => {
  return (
    <BrowserRouter>
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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <NavLink to="/">Города</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to="/clubs">Клубы</NavLink>
            </Menu.Item>
            <Menu.Item key="3">Тренировки</Menu.Item>
            <Menu.Item key="4">Пользователи</Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 595 }}>
              <Route exact path="/" component={CityGrid} />
              <Route exact path="/clubs" component={ClubGrid} />
              {/* <CityGrid /> */}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Anton Fominov</Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default Navigation;
