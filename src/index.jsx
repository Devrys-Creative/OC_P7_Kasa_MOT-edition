import React from 'react';
import ReactDOM from 'react-dom/client';

// import global style
import './assets/style/global.scss';

// Import app
import App from './pages/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
