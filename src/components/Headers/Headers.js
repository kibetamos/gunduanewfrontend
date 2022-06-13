import React from 'react';
import PropTypes from 'prop-types';
import styles from './Headers.module.css';

const Headers = () => (
  <div className={styles.Headers} data-testid="Headers">
    <header class="navigation">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="/"><img class="img-fluid" src="images/adalogo.webp" alt="parsa" /></a>
        <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navogation"
          aria-controls="navogation" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse text-center" id="navogation">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <a class="nav-link text-uppercase text-dark  " href="/" id="navbarDropdown" role="button">
                Home
              </a>
            </li>
            {/* <!-- <li class="nav-item">
            <a class="nav-link text-uppercase text-dark" href="about.html">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-uppercase text-dark" href="category.html">Categories</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-uppercase text-dark" href="contact.html">Contact</a>
          </li> --> */}
            <li class="nav-item">
              <a class="nav-link" href='/login'> <button>Login</button> </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href='/register'> Register</a>
            </li>
          </ul>

        </div>
      </nav>
    </header>
  </div>
);

Headers.propTypes = {};

Headers.defaultProps = {};

export default Headers;
