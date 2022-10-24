import React, { useState, forwardRef, useRef, useImperativeHandle, useEffect } from "react";
import PropTypes from 'prop-types';
import styles from '../../Pages/Home/Home.module.css';
import Header from '../../_layouts/Headers/Headers';
import Sidebar from '../../_layouts/Sidebar/Sidebar';
import Footer from '../../_layouts/Footers/Footers';
import $ from 'jquery';
import axios from 'axios';
import { Variables } from '../../_utils/GlobalVariables';
import Moment from 'moment';


const Summaries = () => {
  

Moment.locale('en');
  return (
    <div className={styles.Summaries} data-testid="Summaries">

      <Header title="Overview"></Header>
      <Sidebar  ></Sidebar>

      <div class="content-body">
        <div class="container-fluid">
          <div class=" ">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="javascript:void(0)">Layout</a></li>
              <li class="breadcrumb-item active"><a href="javascript:void(0)">Blank</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
};

Summaries.propTypes = {};

Summaries.defaultProps = {};

export default Summaries;