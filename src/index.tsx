import React from 'react';
import ReactDOM from 'react-dom';
import Quote from './components/Quote';

// Utils
import reportWebVitals from './reportWebVitals';

// App render
ReactDOM.render(
  <React.StrictMode>
    <Quote text="lorem ipsum dolor" />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
