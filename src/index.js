import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // React.StrictMode는 렌더링은 되지않는다. 따라서 지워도 지장없다.
  document.getElementById('root')
);

reportWebVitals();
