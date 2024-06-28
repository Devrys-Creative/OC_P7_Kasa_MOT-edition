import React from 'react';
import ReactDOM from 'react-dom/client';

// import style
import './assets/style/global.scss';

// Import pages components
import App from './pages/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
