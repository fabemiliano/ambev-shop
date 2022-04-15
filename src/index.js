import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import ApplicationProvider from './context/context'


ReactDOM.render(
  <ApplicationProvider>
    <App />
  </ApplicationProvider>

  , document.getElementById('root'))