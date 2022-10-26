import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
// import Summarizer from './components/Summarizer/Summarizer';
import Summaries from './components/Pages/Summaries/Summaries';
import Search  from './components/Pages/Search/Search';
import Case1 from './components/Pages/Cases/case1';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Summaries" element={<Summaries />} />
      <Route exact path="/Search" element={<Search />} />
      <Route exact path="/Case" element={<Case1 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
