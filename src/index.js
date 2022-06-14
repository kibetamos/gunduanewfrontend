import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import SinglePost from './components/SinglePost/SinglePost';
import UploadPost from './components/UploadPost/UploadPost';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/" element={<Login />} />
      <Route exact path="login" element={<Login />} />
      <Route exact path="home" element={<Home />} />
      <Route path="single-post" element={<SinglePost />} >
        {/* <Route exact path=":id" element={<SinglePost />} /> */}
      </Route>
      <Route exact path="upload-post" element={<UploadPost />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
