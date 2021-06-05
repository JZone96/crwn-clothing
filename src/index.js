import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom';//Imports routing functionality to our application

//1 create reducer, 2 create store, 3 create actions
import store from './redux/store';
import {Provider} from 'react-redux'//component that gives access to the store to all the application

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    	<BrowserRouter>
    		<App />
    	</BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
