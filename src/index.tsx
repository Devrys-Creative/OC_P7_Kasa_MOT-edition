import React from 'react';
import ReactDOM from 'react-dom/client';

// import global style
import './assets/style/global.scss';

// Import app
import App from './pages/App.tsx';

// TypeScript type assertion for non-null element : root is alway found so rootElement is always non null HTMLElement
// getElementById return null||HTMLElement
const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
