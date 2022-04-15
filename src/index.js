import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import ApplicationProvider from './context/context'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <ApplicationProvider>
      <App />
    </ApplicationProvider>
  </BrowserRouter>, document.getElementById('root'))