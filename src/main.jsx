import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from './jsx/App.jsx';
// import { PokemonApp } from './jsx/PokemosApp';
import { TodoApp } from './jsx/TodoApp';
//Redux
import { Provider } from 'react-redux';
//Store
import { store } from './jsx/store';
//Styles
import './css/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <TodoApp />
    </Provider>
  </React.StrictMode>,
)
