import React, { useState, forwardRef, useRef, useImperativeHandle, useEffect } from "react";
import PropTypes from 'prop-types';

import styles from './Home.module.css';
import Header from '../../_layouts/Headers/Headers';
import Sidebar from '../../_layouts/Sidebar/Sidebar';
import Footer from '../../_layouts/Footers/Footers';
import $ from 'jquery';
import axios from 'axios';
import { Variables } from '../../_utils/GlobalVariables';
import Moment from 'moment';
let gotten = JSON.parse(localStorage.getItem("gunduauser"));

// let UserDetails = gotten.data
// console.log (UserDetails.key)


const Home = () => {
 
  Moment.locale('en');
  const[items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const[isLoading, setIsLoading] = useState(true);

  //Retrieve cases from the database
  // useEffect(() => {
	// 	var axios = require("axios").default;

  //   const fetchItems = async () => {
	// 		var axios = require("axios").default;
  //     setIsLoading(true)
  //     // const result = await axios(`http://127.0.0.1:8000/fulltext/cases/${query}`)
  //     // const result = await axios(`http://192.168.30.102:5000/files/`)
	// 		var result = {
  //       method: 'GET',
  //       url: `http://192.168.30.102:5000/files/`,
  //       headers: {Authorization: 'Token ' +(UserDetails.key)}
  //     };
	// 		axios.request(result).then(function (result) {

  //     console.log(result.data);
	// 		setItems(result.data.results)
  //     // setItems(fullSearchUrl.data)
	// 	}).catch(function (error) {
	// 		console.error(error);
	// 	});
  //     setIsLoading(false)
  //   }
  //   fetchItems()
  // },[])
  return (
    
    <div className={styles.Home} data-testid="Home">

      <Header title="Dashboard"></Header>
      <Sidebar  ></Sidebar>

			<div class="content-body">
			{/* <!-- row --> */}
			<div class="container-fluid">
				{/* <!-- Add Order --> */}
		
				<div class="row">
					<div class="col-xl-3 col-xxl-4">
						<div class="row">
							<div class="col-xl-12 col-md-6">
								<div class="card">
									<div class="card-header border-0 pb-0">
										<h4 class="fs-20">Cases</h4>
										
									</div>
									<div class="card-body">
										<div id="donutChart"></div>
										<div class="d-flex justify-content-between mt-4">
											<div class="pr-2">
												<svg width="20" height="8" viewBox="0 0 20 8" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<rect width="20" height="8" rx="4" fill="#214BB8" />
												</svg>
												<h4 class="fs-18 text-black mb-1 font-w600">45,612</h4>
												<span class="fs-14">Criminal cases</span>
											</div>
											<div class="pr-2">
												<svg width="20" height="8" viewBox="0 0 20 8" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<rect width="20" height="8" rx="4" fill="#FE634E" />
												</svg>
												<h4 class="fs-18 text-black mb-1 font-w600">1,025</h4>
												<span class="fs-14">Traffic offence</span>
											</div>
											<div class="">
												<svg width="20" height="8" viewBox="0 0 20 8" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<rect width="20" height="8" rx="4" fill="#45ADDA" />
												</svg>
												<h4 class="fs-18 text-black mb-1 font-w600">21,512</h4>
												<span class="fs-14">Social Cases</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-12 col-md-6">
								<div class="card">
									<div class="card-header border-0 pb-0">
										<h4 class="fs-20">Latest Cases</h4>
										<select class="form-control style-1 default-select ">
											<option>This Week</option>
											{/* <option>Next Week</option>
											<option>This Month</option>
											<option>Next Month</option> */}
										</select>
									</div>
									<div class="card-body pb-0 dz-scroll height630 loadmore-content"
										id="latestSalesContent">
										<div class="pb-3 mb-3 border-bottom">
											<p class="font-w600"><a href="event.html" class="text-black">Trafic offence by 
													Danau Toba (Muthaiga Polica Station)</a></p>
										</div>
										<div class="pb-3 mb-3 border-bottom">
											<p class="font-w600"><a href="event.html" class="text-black">Christine Mwigina Akonya v Samuel Kairu Chege [2017] eKLR</a></p>
										</div>
										<div class="pb-3 mb-3 border-bottom">
											<p class="font-w600"><a href="event.html" class="text-black">Jennifer Mathenge v Patrick Muriuki Maina [2020] eKLR</a></p>
										</div>
										<div class="pb-3 mb-3 border-bottom">
											<p class="font-w600"><a href="event.html" class="text-black">Duncan Kimathi Karagania v Ngugi David & 3 others [2016] eKLR</a></p>
										</div>
										<div class="pb-3 mb-3 border-bottom">
											<p class="font-w600"><a href="event.html" class="text-black">Duncan Kimathi Karagania v Ngugi David & 3 others [2016] eKLR</a></p>
										</div>
									</div>
									<div class="card-footer text-center border-0">
										<a class="btn btn-primary btn-sm dz-load-more" id="latestSales"
											href="javascript:void(0)" rel="ajax/latest-sales.html">View More</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-9 col-xxl-8">
						<div class="row">
							<div class="col-xl-4 col-xxl-6 col-lg-4 col-sm-6">
								<div class="card">
									<div class="card-body">
										<div class="d-flex align-items-end">
											<div>
												<p class="fs-14 mb-1">New Cases</p>
												<span class="fs-35 text-black font-w600">66
													<svg class="ml-1" width="19" height="12" viewBox="0 0 19 12"
														fill="none" xmlns="http://www.w3.org/2000/svg">
														<path
															d="M2.00401 11.1924C0.222201 11.1924 -0.670134 9.0381 0.589795 7.77817L7.78218 0.585786C8.56323 -0.195262 9.82956 -0.195262 10.6106 0.585786L17.803 7.77817C19.0629 9.0381 18.1706 11.1924 16.3888 11.1924H2.00401Z"
															fill="#33C25B" />
													</svg>
												</span>
											</div>
											<canvas class="lineChart" id="chart_widget_2" height="85"></canvas>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-4 col-xxl-6 col-lg-4 col-sm-6">
								<div class="card">
									<div class="card-body">
										<div class="d-flex justify-content-between align-items-center">
											<div>
												<p class="fs-14 mb-1">Ongoing Cases</p>
												<span class="fs-35 text-black font-w600">209
													<svg class="ml-1" width="19" height="12" viewBox="0 0 19 12"
														fill="none" xmlns="http://www.w3.org/2000/svg">
														<path
															d="M2.00401 11.1924C0.222201 11.1924 -0.670134 9.0381 0.589795 7.77817L7.78218 0.585786C8.56323 -0.195262 9.82956 -0.195262 10.6106 0.585786L17.803 7.77817C19.0629 9.0381 18.1706 11.1924 16.3888 11.1924H2.00401Z"
															fill="#33C25B" />
													</svg>
												</span>
											</div>
											<div class="d-inline-block ml-auto position-relative donut-chart-sale">
												<span class="donut"
													data-peity='{ "fill": ["rgb(254, 99, 78)", "rgba(244, 244, 244, 1)"],   "innerRadius": 31, "radius": 10}'>6/8</span>
												<small class="text-secondary">90%</small>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-4 col-xxl-12 col-lg-4">
								<div class="card">
									<div class="card-header align-items-start pb-0 border-0">
										<div>
											<h4 class="fs-16 mb-0 text-black font-w600">Increase 25%</h4>
											<span class="fs-12">Comparisson</span>
										</div>
										
									</div>
									<div class="card-body pt-0">
										<canvas id="widgetChart1" height="80"></canvas>
									</div>
								</div>
							</div>
							<div class="col-xl-12">
								<div class="card" id="sales-revenue">
									<div class="card-header pb-0 d-block d-sm-flex border-0">
										<h3 class="fs-20 text-black mb-0">Cases Revenue</h3>
										<div class="card-action revenue-tabs mt-3 mt-sm-0">
											<ul class="nav nav-tabs" role="tablist">
												<li class="nav-item">
													<a class="nav-link active" data-toggle="tab" href="#monthly"
														role="tab" aria-selected="false">
														Monthly
													</a>
												</li>
												<li class="nav-item">
													<a class="nav-link" data-toggle="tab" href="#weekly" role="tab"
														aria-selected="false">
														Weekly
													</a>
												</li>
												<li class="nav-item">
													<a class="nav-link" data-toggle="tab" href="#today" role="tab"
														aria-selected="true">
														Daily
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div class="card-body">
										<div class="tab-content" id="myTabContent">
											<div class="tab-pane fade show active" id="user" role="tabpanel">
												<canvas id="revenue" class="chartjs"></canvas>
											</div>
										</div>
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
	
  )
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;