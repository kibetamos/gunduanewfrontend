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
   //Do a .summary of each document
// const url = `http://127.0.0.1:8000/files/.summary/${query}`;

// async function getCases(){
//   var result = await axios.get(url);
//   // setCases(result.data.hits)
//   console.log(result.data);
// }
//   const onSubmit = (e) => {
//     e.preventDefault();
//     getCases();
//   }
const [id, setid]= useState("") 
const [summary, setSummary] = useState("")
const url = `http://127.0.0.1:8000/files/summary/${id}`;

async function getSummary(){
  var result = await axios.get(url);
  setSummary(result.data.summary)
  console.log(summary);
}
  const onSubmit = (e) => {
    e.preventDefault();
    getSummary();
  }

Moment.locale('en');
  return (
    <div className={styles.Summaries} data-testid="Summaries">

      <Header title="Overview"></Header>
      <Sidebar  ></Sidebar>
        <div class="container-fluid">
      <div class="content-body">
     
          
          <div class=" ">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="javascript:void(0)">Layout</a></li>
              <li class="breadcrumb-item active"><a href="javascript:void(0)">Blank</a></li>
              
            </ol>
            
          </div>
                                    {/* <!-- Large modal --> */}
                                    <div class="raise_button">
                                    <button type="button" class="btn btn-primary mb-2 raise_button" data-toggle="modal" data-target=".bd-example-modal-lg">Summarize Text</button>
                                    </div>
                                    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-hidden="true">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title">Summarize Text</h5>
                                                    <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                <div class="basic-form">
                                    <form onSubmit={onSubmit}>
                                    <div class="input-group mb-3" >
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Name</span>
                                            </div>
                                            <input type="text"
                                            placeholder="Enter ID" 
                                            autoComplete="Off" value={id}
                                            onChange={(e) => setid(e.target.value)} 
                                            class="form-control"/>
                                            <input className="app__submit" type="submit" value="Summary" />
                                        </div>
                                        {/* <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Upload</span>
                                            </div>
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input"/>
                                                <label class="custom-file-label">Choose file</label>
                                            </div>
                                        </div> */}

                                        {/* <div class="input-group mb-3">      
								<div class="input-group">
									<textarea rows="6" cols="7"class="form-control" placeholder="Paste your message..."></textarea>
									<div class="input-group-append">
										<button type="button" class="btn btn-primary"><i class="fa fa-location-arrow"></i></button>
									</div>
                  </div>

							</div> */}
              <div class="input-group mb-3">
              <div class="input-group">
									<textarea>{summary}</textarea>
                  
									<div class="input-group-append">
										<button type="button"></button>
									</div>
                  </div>
							</div>
                                    </form>
                                </div>
                                                  </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger light" data-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
        {/* <div class="raise_button">
            <button type="button"class="btn btn-primary">Summarize Text</button>
            </div> */}
            <div class="card">
            <table class="table table-responsive-md">
                                        <thead>
                                            <tr>
                                                <th class="width80">#</th>
                                                <th>TITLE</th>
                                                <th>SOURCE</th>
                                                <th>DATE</th>
                                                <th>STATUS</th>
                                                {/* <th>PRICE</th> */}
                                                <th>ACTIONS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>01</strong></td>
                                                <td>Mr. Bobby</td>
                                                <td>Dr. Jackson</td>
                                                <td>01 August 2020</td>
                                                <td><span class="badge light badge-success">Successful</span></td>
                                                {/* <td>$21.56</td> */}
                                                <td>
													<div class="dropdown">
														<button type="button" class="btn btn-success light sharp" data-toggle="dropdown">
															<svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><circle fill="#000000" cx="5" cy="12" r="2"/><circle fill="#000000" cx="12" cy="12" r="2"/><circle fill="#000000" cx="19" cy="12" r="2"/></g></svg>
														</button>
														<div class="dropdown-menu">
															<a class="dropdown-item" href="#">Edit</a>
															<a class="dropdown-item" href="#">Delete</a>
														</div>
													</div>
												</td>
                                            </tr>
										
											
                                        </tbody>
                                    </table>
                                    </div>
                                    
      </div>
      
    </div>
    
    
    </div>
    
  )
};


Summaries.propTypes = {};

Summaries.defaultProps = {};

export default Summaries;