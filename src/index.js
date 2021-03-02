import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Nav from "./components/nav.js"
import Hero from "./components/hero.js"
import SubText from "./components/subtext.js"

ReactDOM.render(
  <React.StrictMode>
    <Nav style={ `position:fixed`}
    />
    <Hero />
    <SubText />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
