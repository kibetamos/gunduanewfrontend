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
    <div className={styles.Headers} data-testid="Headers">
      <header class="navigation">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="/home"><img class="img-fluid" src="images/adalogo.webp" alt="parsa" /></a>
          <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navogation"
            aria-controls="navogation" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse text-center" id="navogation">
            {
              loggedIn ?
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link"  > <button>New Post</button> </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" onClick={logOut} > <button>Logout</button> </a>
                  </li>
                </ul>
                :
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href='/login'> <button>Login</button> </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href='/register'> Register</a>
                  </li>
                </ul>
            }


          </div>
        </nav>
      </header>
    </div>
  )
};

Headers.propTypes = {};

Headers.defaultProps = {};

export default Headers;
