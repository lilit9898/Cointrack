import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './root/App';
import reportWebVitals from './reportWebVitals';
import theme from './theme/theme';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
reportWebVitals();
