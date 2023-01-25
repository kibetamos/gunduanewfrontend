import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Search from '../../Pages/Search/Search';
import axios from 'axios';

import {
  Link, useNavigate
} from "react-router-dom";
import styles from './Headers.module.css';

function Headers(props) {
  const [loading, setLoading] = useState(false);
  let gotten = JSON.parse(localStorage.getItem("gunduauser"));

  // const navigate = useNavigate();
  const { title } = props;
  const[query, setQuery] = useState("");
  const [result, setResult] = useState([])
  const navigate = useNavigate();
  let [loggedIn, setLoggedIn] = useState(false);


  // async function getResult(){
    
  //   let query = document.getElementById('search').value;
  //   // console.log(query)
  //   const url = `http://127.0.0.1:8000/cases/text_search/`+query;
  //   var result = await axios.get(url);

  //   setResult(result.data.hits)
  //   console.log(result);
  // }
    const onSubmit = (e) => {
      e.preventDefault();
      setResult();
    }

  useEffect(() => {
    let gotten = JSON.parse(localStorage.getItem("gunduauser"));
    // const navigate = useNavigate();
    //if not logged in
    if (gotten == null || !gotten) {
      if (window.location.pathname != "/login") {
        //redirect to login 
        // if (window.location.pathname != "/login") {
        //   // window.location.href = "/login";
        //   setLoggedIn(false);
        // }
      }
    } else {
      const headers = {
        'Content-Type': 'application/json',
      }
      let gotten = JSON.parse(localStorage.getItem("gunduauser"));
      let token = gotten.data.refresh;
      let payload = {
        "refresh": token
      };
  

      // setLoggedIn(true);
      // window.location.href = "/home";
    }
  }, []);
  const logOut = () => {
    // localStorage.removeItem("gunduauser");
    localStorage.removeItem('gunduauser');
    navigate('/login');
  }

  return (
    <div>
      {/*  Nav header start */}
      <div className="nav-header">
        <a href="/" className="brand-logo">
          <img className="logo-abbr" src="./images/gundualogo.png" alt="" />
          <img className="logo-compact" src="./images/gunduatext.png" alt="" />
          <img className="brand-title" src="./images/gunduatext4.png" alt="" />
        </a>

        <div className="nav-control">
          <div className="hamburger">
            <span className="line"></span><span className="line"></span><span className="line"></span>
          </div>
        </div>
      </div>
      {/*  Nav header end */}

      {/* Header start */}
      <div class="header">
        <div class="header-content">
          <nav class="navbar navbar-expand">
            <div class="collapse navbar-collapse justify-content-between">
              <div class="header-left">
                <div class="dashboard_bar">
                </div>
              </div>
              <ul class="navbar-nav header-right">
                <li class="nav-item">
                <form onSubmit={onSubmit}>
                  <div class="input-group top-search-bar search-area d-xl-inline-flex" >
                    <input type="text" 
                    class="form-control"
                    id='search'
                    
                    onChange={(e) => setQuery(e.target.value)} placeholder="Search..." 
                    />
                    <div class="input-group-append">
                      <span class="input-group-text"><a href="javascript:void(0)"><i
                      type="text"
													class="flaticon-381-search-2">
                            </i>
                            </a>
                            </span>
                      {/* <span class="input-group-text">
                      {/* <i type="text"
                        class="flaticon-381-search-2"/> 
                          <input className="app__submit" type="submit" value="Search" />
                          <button type="button" class="btn btn-primary">Save changes</button>
                          </span> */}
                    </div>
                  </div>
                  </form>
                </li>
                <li class="nav-item dropdown header-profile">
                  <a class="nav-link" href="javascript:void(0)" role="button" data-toggle="dropdown">
                    <img src="./images/profile/rename.png" width="20" />
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a href="/profile" class="dropdown-item ai-icon">
                      <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" class="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                      <span class="ml-2">Profile </span>
                    </a>
                    <a href="javascript:void(0);" onClick={logOut} class="dropdown-item ai-icon">
                      <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" class="text-danger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                      <span class="ml-2">Logout </span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* Header end */}
    </div>
  )
};

Headers.propTypes = {};

Headers.defaultProps = {};

export default Headers;
