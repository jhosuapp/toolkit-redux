import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './jsx/App.jsx';
//Redux
import { Provider } from 'react-redux';
//Store
import { store } from './jsx/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
)
