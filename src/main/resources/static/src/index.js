import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';

import 'antd/dist/antd.less';

ReactDOM.render(
  <ConfigProvider locale={ruRU}>
    <App />
  </ConfigProvider>,
  document.getElementById('app'),
);
