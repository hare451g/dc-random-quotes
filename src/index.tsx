import React from 'react';
import ReactDOM from 'react-dom';

// Containers
import App from './containters/App';

// Utils
import reportWebVitals from './reportWebVitals';

// Styles
import './styles.css';

// App render
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
