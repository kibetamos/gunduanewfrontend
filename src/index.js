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
import Docs  from './components/Pages/Docs/Docs';
import Case1 from './components/Pages/Cases/case1';
import Home2 from  './components/Pages/Home/Home2';
import Editor from './components/Pages/Editor/Editor';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home2" element={<Home2 />} />
      <Route exact path="/Summaries" element={<Summaries />} />
      <Route exact path="/Docs" element={<Docs />} />
      <Route exact path="/Case" element={<Case1 />} />
      <Route exact path="/Editor" element={<Editor />} />
      <Route exact path="/categories"  />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
