import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { bankContext } from './redux/bankSlice';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} context={bankContext}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

