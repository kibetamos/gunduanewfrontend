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

const Home = ({ item }) => {
  const [posts, setPosts] = useState([]);
  const[items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const[isLoading, setIsLoading] = useState(true);
  const[query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const[itemsPerPage] = useState(6);

  //when page loads
  // useEffect(() => {
  //   // getPosts();
  // }, []);
//   useEffect(() => {
//     const fetchItems = async () => {
//       setIsLoading(true)
//       // const result = await axios(`http://127.0.0.1:8000/fulltext/cases/${query}`)
//       const result = await axios('http://127.0.0.1:8000/cases/')
//       console.log(result.data)
//       setItems(result.data)
//       // setItems(fullSearchUrl.data)
//       setIsLoading(false)
//     }
//     fetchItems()
//   },[query] )
  //get all posts
  // const getPosts = () => {
  //   let gotten = JSON.parse(localStorage.getItem("adanianuser"));
  //   let token = gotten.data.success.token;


  //   const headers = {
  //     'Content-Type': 'multipart/form-data',
  //     'Authorization': "Bearer " + token
  //   }
  //   setLoading(true);
  //   axios.get(Variables.apiURL + 'api/get_all_posts', { headers: headers })
  //     .then(response => {
  //       setLoading(false);
  //       console.log(response.data.success);

  //       if (response.status == 200) {
  //         setPosts(response.data.success);
  //         console.log(posts);
  //       } else {
  //         $('#SubmitError').show();
  //       }
  //     })
  //     .catch(error => {
  //       console.log('error');
  //       console.log(error);
  //       // $('#EmailAbsentError').show();
  //       // setLoading(false);
  //     })
  // }

  Moment.locale('en');
  return (
    
    <div className={styles.Home} data-testid="Home">

      <Header title="Overview"></Header>
      <Sidebar  ></Sidebar>

<div class="content-body">
		
			<div class="container-fluid">
				
				<div class="modal fade" id="addOrderModalside">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Add Event</h5>
								<button type="button" class="close" data-dismiss="modal"><span>&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="form-group">
										<label class="text-black font-w500">Event Name</label>
										<input type="text" class="form-control"/>
									</div>
									<div class="form-group">
										<label class="text-black font-w500">Event Date</label>
										<input type="date" class="form-control"/>
									</div>
									<div class="form-group">
										<label class="text-black font-w500">Description</label>
										<input type="text" class="form-control"/>
									</div>
									<div class="form-group">
										<button type="button" class="btn btn-primary">Create</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xl-3 col-xxl-4">
						<div class="row">
							<div class="col-xl-12 col-md-6">
								<div class="card">
									<div class="card-header border-0 pb-0">
										<h4 class="fs-20">Best Selling</h4>
										<select class="form-control style-1 default-select ">
											<option>This Week</option>
											<option>Next Week</option>
											<option>This Month</option>
											<option>Next Month</option>
										</select>
									</div>
									<div class="card-body">
										<div id="donutChart"></div>
										<div class="d-flex justify-content-between mt-4">
											<div class="pr-2">
												<svg width="20" height="8" viewBox="0 0 20 8" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<rect width="20" height="8" rx="4" fill="#214BB8" />
												</svg>
												<h4 class="fs-18 text-black mb-1 font-w600">21,512</h4>
												<span class="fs-14">Ticket Left</span>
											</div>
											<div class="pr-2">
												<svg width="20" height="8" viewBox="0 0 20 8" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<rect width="20" height="8" rx="4" fill="#FE634E" />
												</svg>
												<h4 class="fs-18 text-black mb-1 font-w600">45,612</h4>
												<span class="fs-14">Ticket Sold</span>
											</div>
											<div class="">
												<svg width="20" height="8" viewBox="0 0 20 8" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<rect width="20" height="8" rx="4" fill="#45ADDA" />
												</svg>
												<h4 class="fs-18 text-black mb-1 font-w600">275</h4>
												<span class="fs-14">Event Held</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-12 col-md-6">
								<div class="card">
									<div class="card-header border-0 pb-0">
										<h4 class="fs-20">Latest Sales</h4>
										<select class="form-control style-1 default-select ">
											<option>This Week</option>
											<option>Next Week</option>
											<option>This Month</option>
											<option>Next Month</option>
										</select>
									</div>
									<div class="card-body pb-0 dz-scroll height630 loadmore-content"
										id="latestSalesContent">
										<div class="pb-3 mb-3 border-bottom">
											<p class="font-w600"><a href="event.html" class="text-black">The Story’s of
													Danau Toba (Drama Theater)</a></p>
											<div class="d-flex align-items-end">
												<img src="images/profile/20.jpg" alt="" width="42"
													class="rounded-circle mr-2"/>
												<div class="mr-auto">
													<h4 class="fs-14 mb-0"><a href="app-profile.html"
															class="text-black">Steffany Humble</a></h4>
													<span class="fs-12">2m ago</span>
												</div>
												<span class="badge badge-sm light badge-primary">4 Ticket</span>
											</div>
										</div>
										<div class="pb-3 mb-3 border-bottom">
											<p class="font-w600"><a href="event.html" class="text-black">Envato Author
													SF Meetup</a></p>
											<div class="d-flex align-items-end">
												<img src="images/profile/21.jpg" alt="" width="42"
													class="rounded-circle mr-2"/>
												<div class="mr-auto">
													<h4 class="fs-14 mb-0"><a href="app-profile.com"
															class="text-black">Jacob Swing Swing</a></h4>
													<span class="fs-12">6h ago</span>
												</div>
												<span class="badge badge-sm light badge-primary">2 Ticket</span>
											</div>
										</div>
										<div class="pb-3 mb-3 border-bottom">
											<p class="font-w600"><a href="event.html" class="text-black">Envato Atuhor
													Community Fun Hiking at Sibayak Mountaint</a></p>
											<div class="d-flex align-items-end">
												<img src="images/profile/22.jpg" alt="" width="42"
													class="rounded-circle mr-2"/>
												<div class="mr-auto">
													<h4 class="fs-14 mb-0"><a href="app-profile.com"
															class="text-black">Robert Carloz</a></h4>
													<span class="fs-12">10h ago</span>
												</div>
												<span class="badge badge-sm light badge-primary">1 Ticket</span>
											</div>
										</div>
										<div class="pb-3 mb-3 border-bottom">
											<p class="font-w600"><a href="event.html" class="text-black">Indonesia
													Envato Authors National Meetup</a></p>
											<div class="d-flex align-items-end">
												<img src="images/profile/23.jpg" alt="" width="42"
													class="rounded-circle mr-2"/>
												<div class="mr-auto">
													<h4 class="fs-14 mb-0"><a href="app-profile.com"
															class="text-black">Kevin Stefanus</a></h4>
													<span class="fs-12">2m ago</span>
												</div>
												<span class="badge badge-sm light badge-primary">1 Ticket</span>
											</div>
										</div>
										<div class="pb-3 mb-3 border-bottom">
											<p class="font-w600"><a href="event.html" class="text-black">Envato Author
													SF Meetup</a></p>
											<div class="d-flex align-items-end">
												<img src="images/profile/21.jpg" alt="" width="42"
													class="rounded-circle mr-2"/>
												<div class="mr-auto">
													<h4 class="fs-14 mb-0"><a href="app-profile.com"
															class="text-black">Jacob Swing Swing</a></h4>
													<span class="fs-12">6h ago</span>
												</div>
												<span class="badge badge-sm light badge-primary">2 Ticket</span>
											</div>
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
							<div class="card-body">
                                
                                <div class="custom-tab-1">
                                    <ul class="nav nav-tabs">
                                        <li class="nav-item">
                                            <a class="nav-link active" data-toggle="tab" href="#home1"><i class="la la-home mr-2"></i> Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-toggle="tab" href="#profile1"><i class="la la-user mr-2"></i> Profile</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-toggle="tab" href="#contact1"><i class="la la-phone mr-2"></i>  Contact</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-toggle="tab" href="#message1"><i class="la la-envelope mr-2"></i> Message</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane fade show active" id="home1" role="tabpanel">
                                            <div class="pt-4">
                                                <h4>This is home title</h4>
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                                                </p>
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="profile1">
                                            <div class="pt-4">
                                                <h4>This is profile title</h4>
                                                <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.
                                                </p>
                                                <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="contact1">
                                            <div class="pt-4">
                                                <h4>This is contact title</h4>
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                                                </p>
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="message1">
                                            <div class="pt-4">
                                                <h4>This is message title</h4>
                                                <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.
                                                </p>
                                                <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.
                                                </p>
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
										<select class="form-control style-1 default-select ">
											<option>Daily</option>
											<option>Monthly</option>
											<option>Weekly</option>
										</select>
									</div>
									<div class="card-body pt-0">
										<canvas id="widgetChart1" height="50"></canvas>
									</div>
								</div>
							</div>
							<div class="col-xl-12">
								<div class="card" id="sales-revenue">
									<div class="card-header pb-0 d-block d-sm-flex border-0">
										<h3 class="fs-20 text-black mb-0">Sales Revenue</h3>
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
							<div class="col-xl-12">
								<div class="card">
									<div class="card-header border-0 pb-sm-0 pb-5">
										<h4 class="fs-20">Recent Event List</h4>
										<div class="dropdown custom-dropdown mb-0">
											<div data-toggle="dropdown">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M12 12.9999C12.5523 12.9999 13 12.5522 13 11.9999C13 11.4477 12.5523 10.9999 12 10.9999C11.4477 10.9999 11 11.4477 11 11.9999C11 12.5522 11.4477 12.9999 12 12.9999Z"
														stroke="#7E7E7E" stroke-width="2" stroke-linecap="round"
														stroke-linejoin="round" />
													<path
														d="M12 5.99994C12.5523 5.99994 13 5.55222 13 4.99994C13 4.44765 12.5523 3.99994 12 3.99994C11.4477 3.99994 11 4.44765 11 4.99994C11 5.55222 11.4477 5.99994 12 5.99994Z"
														stroke="#7E7E7E" stroke-width="2" stroke-linecap="round"
														stroke-linejoin="round" />
													<path
														d="M12 19.9999C12.5523 19.9999 13 19.5522 13 18.9999C13 18.4477 12.5523 17.9999 12 17.9999C11.4477 17.9999 11 18.4477 11 18.9999C11 19.5522 11.4477 19.9999 12 19.9999Z"
														stroke="#7E7E7E" stroke-width="2" stroke-linecap="round"
														stroke-linejoin="round" />
												</svg>
											</div>
											<div class="dropdown-menu dropdown-menu-right">
												<a class="dropdown-item" href="javascript:void(0);">Details</a>
												<a class="dropdown-item text-danger"
													href="javascript:void(0);">Cancel</a>
											</div>
										</div>
									</div>
									<div class="card-body">
										<div class="event-bx owl-carousel">
											<div class="items">
												<div class="image-bx">
													<img src="images/events/1.png" alt=""/>
													<div class="info">
														<p class="fs-18 font-w600"><a href="event-detail.html"
																class="text-black">International Live Choice Festivals
																(2020)</a></p>
														<span class="fs-14 text-black d-block mb-3">Manchester,
															London</span>
														<p class="fs-12">Lorem ipsum dolor sit amet, consectetur
															adipiscing elit, sed do eiusmod tempor incididunt ut labore
															et dolore magna aliqua. Ut enim ad mini</p>
														<ul>
															<li><i class="las la-dollar-sign"></i>$124,00</li>
															<li><i class="las la-calendar"></i>June 20, 2020</li>
															<li><i class="fa fa-ticket"></i>561 pcs</li>
															<li><i class="las la-clock"></i>08:35 AM</li>
														</ul>
													</div>
												</div>
											</div>
											<div class="items">
												<div class="image-bx">
													<img src="images/events/3.png" alt=""/>
													<div class="info">
														<p class="fs-18 font-w600"><a href="event-detail.html"
																class="text-black">Envato Atuhor Community Fun Hiking at
																Sibayak Mt.</a></p>
														<span class="fs-14 text-black d-block mb-3">London, United
															Kingdom</span>
														<p class="fs-12">Lorem ipsum dolor sit amet, consectetur
															adipiscing elit, sed do eiusmod tempor incididunt ut labore
															et dolore magna aliqua. Ut enim ad mini</p>
														<ul>
															<li><i class="las la-dollar-sign"></i>$124,00</li>
															<li><i class="las la-calendar"></i>June 20, 2020</li>
															<li><i class="fa fa-ticket"></i>561 pcs</li>
															<li><i class="las la-clock"></i>08:35 AM</li>
														</ul>
													</div>
												</div>
											</div>
											<div class="items">
												<div class="image-bx">
													<img src="images/events/1.png" alt=""/>
													<div class="info">
														<p class="fs-18 font-w600"><a href="event-detail.html"
																class="text-black">International Live Choice Festivals
																(2020)</a></p>
														<span class="fs-14 text-black d-block mb-3">Manchester,
															London</span>
														<p class="fs-12">Lorem ipsum dolor sit amet, consectetur
															adipiscing elit, sed do eiusmod tempor incididunt ut labore
															et dolore magna aliqua. Ut enim ad mini</p>
														<ul>
															<li><i class="las la-dollar-sign"></i>$124,00</li>
															<li><i class="las la-calendar"></i>June 20, 2020</li>
															<li><i class="fa fa-ticket"></i>561 pcs</li>
															<li><i class="las la-clock"></i>08:35 AM</li>
														</ul>
													</div>
												</div>
											</div>
											<div class="items">
												<div class="image-bx">
													<img src="images/events/2.png" alt=""/>
													<div class="info">
														<p class="fs-18 font-w600"><a href="event-detail.html"
																class="text-black">Envato Indonesian Authors Meetup
																2020</a></p>
														<span class="fs-14 text-black d-block mb-3">Medan,
															Indonesia</span>
														<p class="fs-12">Lorem ipsum dolor sit amet, consectetur
															adipiscing elit, sed do eiusmod tempor incididunt ut labore
															et dolore magna aliqua. Ut enim ad mini</p>
														<ul>
															<li><i class="las la-dollar-sign"></i>$124,00</li>
															<li><i class="las la-calendar"></i>June 20, 2020</li>
															<li><i class="fa fa-ticket"></i>561 pcs</li>
															<li><i class="las la-clock"></i>08:35 AM</li>
														</ul>
													</div>
												</div>
											</div>
											<div class="items">
												<div class="image-bx">
													<img src="images/events/3.png" alt=""/>
													<div class="info">
														<p class="fs-18 font-w600"><a href="event-detail.html"
																class="text-black">Envato Atuhor Community Fun Hiking at
																Sibayak Mt.</a></p>
														<span class="fs-14 text-black d-block mb-3">London, United
															Kingdom</span>
														<p class="fs-12">Lorem ipsum dolor sit amet, consectetur
															adipiscing elit, sed do eiusmod tempor incididunt ut labore
															et dolore magna aliqua. Ut enim ad mini</p>
														<ul>
															<li><i class="las la-dollar-sign"></i>$124,00</li>
															<li><i class="las la-calendar"></i>June 20, 2020</li>
															<li><i class="fa fa-ticket"></i>561 pcs</li>
															<li><i class="las la-clock"></i>08:35 AM</li>
														</ul>
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
			</div>
		</div>
    </div>
  )
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;