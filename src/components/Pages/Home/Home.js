import React, { useState, forwardRef, useRef, useImperativeHandle, useEffect } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Header from '../../_layouts/Headers/Headers';
import Sidebar from '../../_layouts/Sidebar/Sidebar';
import Footer from '../../_layouts/Footers/Footers';
import $ from 'jquery';
import axios from 'axios';
import { Variables } from '../../_utils/GlobalVariables';
import Moment from 'moment';

let gotten = JSON.parse(localStorage.getItem("gunduauser"));
let UserDetails = gotten.data;

const Home = () => {
Moment.locale('en');
const [items, setItems] = useState([]);
const [loading, setLoading] = useState(false);
const [isLoading, setIsLoading] = useState(true);

return (
	// <div className={styles.Home} data-testid="Home" style={{backgroundImage: "url('your-background-image-url')"}}>
<div className={styles.Home} data-testid="Home" style={{backgroundImage: "url('your-background-image-url')"}}> 
<Header title="Overview"></Header>
<Sidebar></Sidebar>
<div className="content-body">
<div className="container-fluid">
<div className="row">
<div className="col-xl-3 col-xxl-4">
<div className="row">
<div className="col-xl-12 col-md-6">
<div className="card">
</div>
</div>
</div>
</div>
<div className="col-xl-9 col-xxl-8">
<div className="row">
<div className="card-body">
<div className="col-lg-4 col-sm-6">
<div className="card">
<Link to="/transcription">
<h5 className="card-header">Transcription</h5>
</Link>
</div>
<div className="card">
<Link to="/case-categorization">
<h5 className="card-header">Case Categorization</h5>
</Link>
</div>
<div className="card">
<Link to="/text-summarization">
<h5 className="card-header">Text Summarization</h5>
</Link>
</div>
<div className="card">
<Link to="/case-linking">
<h5 className="card-header">Case Linking</h5>
</Link>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<Footer></Footer>
</div>
// </div>
);
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;