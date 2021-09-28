import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as firebase from 'firebase';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';


const firebaseConfig = {
  apiKey: "AIzaSyCpILb2kq7c35JQJ37BNmYuN5McJXS9amI",
  authDomain: "webapp-6d76b.firebaseapp.com",
  projectId: "webapp-6d76b",
  storageBucket: "webapp-6d76b.appspot.com",
  messagingSenderId: "941661869696",
  appId: "1:941661869696:web:c0717610f0e51d0cf07865",
  measurementId: "G-G6T90EY3R7"
};

window.store = store;

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
