import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let header = [
  {
    id: 1,
    title: 'Главная',
    href: '/'
  },
  {
    id: 2,
    title: 'О нас',
    href: '/about'
  },
  {
    id: 3,
    title: 'Пользователи',
    href: '/users'
  },
]

let users = [
  {
    id: 1,
    name: 'Victor',
  },
  {
    id: 2,
    name: 'Anna',
  },
  {
    id: 3,
    name: 'Den',
  },
  {
    id: 4,
    name: 'Tony',
  },
  {
    id: 5,
    name: 'Freddy',
  },
]
root.render(
  <React.StrictMode>
    <App header={header} users={users}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
