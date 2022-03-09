import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from './store/userStore';
import DeviceStore from './store/deviceStore';
import BasketStore from './store/basketStore';
export const Context=createContext(null)


ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{user:new UserStore(),device:new DeviceStore(), basket:new BasketStore() }}>
 <App />

    </Context.Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
