import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Link, useNavigate
} from "react-router-dom";
import styles from './Headers.module.css';

function Headers() {

  const navigate = useNavigate();
  let [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    let gotten = JSON.parse(localStorage.getItem("adanianuser"));
    //if not logged in
    if (gotten == null || !gotten) {
      if (window.location.pathname != "/register") {
        //redirect to login 
        if (window.location.pathname != "/login") {
          window.location.href = "/login";
          setLoggedIn(false);
        }
      }
    } else {
      setLoggedIn(true);
      // window.location.href = "/home";
    }
  }, []);
  const logOut = () => {
    localStorage.removeItem("adanianuser");
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
                  <div class="input-group top-search-bar search-area d-xl-inline-flex">
                    <input type="text" class="form-control" placeholder="Search..." />
                    <div class="input-group-append">
                      <span class="input-group-text"><a href="javascript:void(0)"><i class="flaticon-381-search-2"></i></a></span>
                    </div>
                  </div>
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
