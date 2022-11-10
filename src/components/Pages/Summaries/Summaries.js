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
  const[query, setQuery] = useState("");
  // const [results, setResults] = useState([])
  const[items, setItems] = useState([]);
  const[files, setFiles] = useState([]);
  

  async function getResult(){
    
    let query = document.getElementById('search').value;
    console.log(query)
    // const url = `http://127.0.0.1:8000/cases/similar/${summary}`;
    const url = `http://127.0.0.1:8000/cases/similar/`+summary;

    var response = await axios.get(url);
    // setItems(result.data.results)
    // console.log(response.data);
    setItems(response.data)
    console.log(response.data);
  }
    const onButton = (e) => {
      e.preventDefault();
      getResult();
    }
const [id, setid]= useState("") 
const [summary, setSummary] = useState("")
const url = `http://127.0.0.1:8000/summary/${id}`;

async function getSummary(){
  var result = await axios.get(url);
  setSummary(result.data.summary)
  console.log(summary);
}
  const onSubmit = (e) => {
    e.preventDefault();
    getSummary();
  }


//Retrieve cases from the database
useEffect(() => {
  const fetchFiles = async () => {
    // setIsLoading(true)
    // const result = await axios(`http://127.0.0.1:8000/fulltext/cases/${query}`)
    const files = await axios(`http://127.0.0.1:8000/files/`)
    console.log(files.data.results)
    setFiles(files.data.results)
    // setItems(fullSearchUrl.data)
    // setIsLoading(false)
  }
  fetchFiles()
},[query] )

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
                                        
                {summary}
									{/* <textarea rows="14" cols="7"class="form-control" ></textarea> */}
                  
									<div class="input-group-append">
                  <div class="modal-footer">
                                                    {/* <button type="button" class="btn btn-danger light" data-dismiss="modal">Close</button> */}
                                                    <button type="button" class="btn btn-primary" onClick={getResult}>Similar cases</button>
                                                </div>
                                 
							</div>

                                    </form>
                                </div>
                                                  </div>
                                                

<div class="row">
          {items.map((item) => (
            // <Case1 key={item._id} item={item}></Case1>
            // <p> {item.meta_info['Date Delivered']}</p>
            <div class="col-lg-6 col-xl-6">
              <div class="card">
                <div class="card-body">
                  <div class="row m-b-30">
                    <div class="col-md-12 col-xx l-12">
                      <div class="new-arrival-content position-relative">
                      <h4><a href={"/Case?id="+item._id}>
                {/* { item.meta_info['Parties'].substring(0,70) ? `${item.meta_info['Parties']}` : 
                `${item.meta_info['Parties'].substring(0,70)}...`} */}
                {/* {item.judgement.substring(0,70)} */}
                {item.meta_info['Parties']}
                </a></h4> 
                        <div class="comment-review star-rating">
                          <ul>
                            {/* <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star-half-empty"></i></li>
                            <li><i class="fa fa-star-half-empty"></i></li> */}
                          </ul>
                          {/* <span class="review-text">(34 reviews) / </span><a class="product-review" href="" data-toggle="modal" data-target="#reviewModal">Write a review?</a>
                          <p class="price">$320.00</p> */}
                        </div>
                        <p>Judge(s): <span class="item">{item.meta_info['Judge(s)']}<i class="fa fa-check-circle text-success"></i></span></p>
                        <p>Citation: <span class="item">{item.meta_info['Citation']}</span> </p>
                        <p>County: <span class="item">{item.meta_info['County']}</span></p>
                        <p>Date: <span class="item">{item.meta_info['Date Delivered']}</span></p>
                        {/* <p class="text-content"></p> */}
                        <p>Tags:&nbsp;&nbsp;
                                    <span class="badge badge-success light">{item.related_cases}</span>&nbsp;&nbsp;
                                    <span class="badge badge-success light">{item.resolved_acts}</span>
                                </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        ))}
            
        
            <div class="modal fade" id="reviewModal">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Review</h5>
                    <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    {/* <form>
                      <div class="text-center mb-4">
                        <img class="img-fluid rounded" width="78" src="./images/avatar/1.jpg" alt="DexignZone" />
                      </div>
                      <div class="form-group">
                        <div class="rating-widget mb-4 text-center">
                          <div class="rating-stars">
                            <ul id="stars">
                              <li class="star" title="Poor" data-value="1">
                                <i class="fa fa-star fa-fw"></i>
                              </li>
                              <li class="star" title="Fair" data-value="2">
                                <i class="fa fa-star fa-fw"></i>
                              </li>
                              <li class="star" title="Good" data-value="3">
                                <i class="fa fa-star fa-fw"></i>
                              </li>
                              <li class="star" title="Excellent" data-value="4">
                                <i class="fa fa-star fa-fw"></i>
                              </li>
                              <li class="star" title="WOW!!!" data-value="5">
                                <i class="fa fa-star fa-fw"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <textarea class="form-control" placeholder="Comment" rows="5"></textarea>
                      </div>
                      <button class="btn btn-success btn-block">RATE</button>
                    </form> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
                                                  
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger light" data-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            <div class="card">
            <table class="table table-responsive-md">
                                        <thead>
                                            <tr>
                                                <th class="width80">ID</th>
                                                <th>NAME</th>
                                                <th>FILE</th>
                                                <th>SUMMARY</th>
                                                <th>STATUS</th>
                                                {/* <th>PRICE</th> */}
                                                <th>ACTIONS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                      
                                        {files.map((file) => 
                                        // if {
                                        //   {file.summary} != null  }

                                        // else {
                                        // }
           (
                                            <tr>
                                                <td><strong>{file.id}</strong></td>
                                                <td>{file.remark}</td>
                                                <td>{file.file.substring(40)}</td>
                                                <td>{file.summary.substring(0, 150)}...</td>
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
                                            ))} 
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