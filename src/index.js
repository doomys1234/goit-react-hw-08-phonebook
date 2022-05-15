import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from '../src/redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
// import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import App from './App';




ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='https://github.com/doomys1234/goit-react-hw-08-phonebook'>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
        </BrowserRouter>
        {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
);