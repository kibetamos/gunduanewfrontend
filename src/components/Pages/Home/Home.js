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

const Home = () => {
 
  Moment.locale('en');
  const[items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const[isLoading, setIsLoading] = useState(true);

  //Retrieve cases from the database
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      // const result = await axios(`http://127.0.0.1:8000/fulltext/cases/${query}`)
      const result = await axios(`http://192.168.30.102:5000/files/`)
      console.log(result)
	   setItems(result.data.results)
      // setItems(fullSearchUrl.data)
      setIsLoading(false)
    }
    fetchItems()
  })
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
								{/* <form>
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
								</form> */}
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
										<h4 class="fs-20">Latest Uploads</h4>
										<a href="http://localhost:3000/Docs">
                                    <button  type="button" class="btn btn-primary mb-2 raise_button" data-toggle="modal" data-target=".bd-example-modal-lg" >Upload</button></a>
                                    </div>

									
									<div class="card-body pb-0 dz-scroll height530 loadmore-content"
										id="latestSalesContent">
											{items.map((item) =>( 
										<div class="pb-3 mb-3 border-bottom">
										
											<p class="font-w600">
											{/* <a href={"/Case?id="+item._id} */}
												<a href={"/files?id="+item.id} class="text-black">{item.id}</a></p>
											<div class="d-flex align-items-end">
												{/* <img src="" alt="" width="42"
													class="rounded-circle mr-2"/> */}
												<div class="mr-auto">
													<h4 class="fs-14 mb-0"><a href="app-profile.html"
															class="text-black"dateFormat="DMY">{item.file.substr(40)}</a></h4>
													{/* <span class="fs-12">{item.timestamp}</span> */}
												</div>
												{/* <span class="badge badge-sm light badge-primary">4 Ticket</span> */}
											</div>
										</div>
										))}
									</div>
									  
								</div>
							</div>
						</div>
					</div>
					
					<div class="col-xl-9 col-xxl-8">
						<div class="row">
							<div class="card-body">
                                
							<div class="col-xl-12">
								<div class="card">
									<div class="card-header border-0 pb-sm-0 pb-5">
										<div class="card-body">
										<h4 class="fs-20">Links to External Databases</h4>
                                
                                <div class="custom-tab-1">
                                    <ul class="nav nav-tabs">
                                        <li class="nav-item">
                                            <a class="nav-link active" data-toggle="tab" href="#home1"><i class="la la-home mr-2"></i> CommonWealth</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-toggle="tab" href="#profile1"><i class="la la-user mr-2"></i> African Library</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-toggle="tab" href="#contact1"><i class="la la-phone mr-2"></i>  World Library</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-toggle="tab" href="#message1"><i class="la la-envelope mr-2"></i> bailii.org</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane fade show active" id="home1" role="tabpanel">
                                            <div class="pt-4">
                                                <h4>CommonWealth</h4>
                                                <p>
                                                    <b><a href="http://www.worldlii.org/" target="www.worldlii.org">CommonWealth</a></b>
                                                    </p>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="profile1">
                                            <div class="pt-4">
                                                <h4>African Library</h4>
                                                <p>
                                                    <b><a href="http://www.africanlii.org/" target="www.worldlii.org">African Library</a></b>
                                                    </p>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="contact1">
                                            <div class="pt-4">
                                                <h4>World Library</h4>
                                                <p>
                                                    <b><a href="http://www.worldlii.org/" target="www.worldlii.org">World Library</a></b>
                                                    </p>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="message1">
                                            <div class="pt-4">
                                                <h4>bailii.org</h4>
                                                <p>
                                                <p>
                                                </p>
                                                    <b><a href="http://www.bailii.org/form/search_cases.html" target="www.worldlii.org">bailii.org</a></b>
                                                    </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
									</div>
									
								</div>
							</div>
                            </div>
							{/* <div class="col-xl-4 col-xxl-12 col-lg-4">
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
							</div> */}
							{/* <div class="col-xl-12">
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
							</div> */}
							<div class="col-xl-12">
								<div class="card">
									<div class="card-header border-0 pb-sm-0 pb-5">
										<h4 class="fs-20">Recent Event List</h4>
										
									</div>
									{/* <div class="card-body">
										<div class="event-bx owl-carousel">
											
											
											
										</div>
									</div> */}
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