import { createRoot } from 'react-dom/client';
import { App as AntdApp, ConfigProvider } from 'antd';
import App from './App.tsx';
import './style/index.css';

createRoot(document.getElementById('root')!).render(
  <ConfigProvider theme={{ cssVar: true, hashed: false }}>
    <AntdApp>
      <App />
    </AntdApp>
  </ConfigProvider>
);
