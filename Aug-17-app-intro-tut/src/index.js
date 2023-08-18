import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>

  // <>
  //   <h1>Hello</h1>
  //   <p>Tiger</p>
  // </>

  // [
  //   <h1>Hello</h1>,
  //   <p>TiGER</p>,
  //   <h2>Tiger</h2>
  // ]
);


// plain HTML...
// const tag = document.createElement('h1')
// tag.innerHTML = 'the_TiGER';
// document.getElementById('root').appendChild(tag);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
