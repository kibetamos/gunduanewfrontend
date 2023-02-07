import React, { useState, forwardRef, useRef, useImperativeHandle, useEffect } from "react";
import PropTypes from 'prop-types';
import styles from '../../Pages/Home/Home.module.css';
import Home2 from "../Home/Home2";

import Sidebar from '../../_layouts/Sidebar/Sidebar';
import Footer from '../../_layouts/Footers/Footers';
import $ from 'jquery';
import axios from 'axios';
import { Variables } from '../../_utils/GlobalVariables';
import Moment from 'moment';
// import Spinner from "../Summaries/Spinner";
const Search = () => {
  const[query, setQuery] = useState("");
  const [result, setResult] = useState([])
  const[items, setItems] = useState([])
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const[isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const[itemsPerPage] = useState(6);
  
  async function getResult(){
    


    let query = document.getElementById('search').value;
    // console.log(query)
    const url = `http://192.168.30.102:5000/cases/fulltext/`+query;
    var result = await axios.get(url);
    
    // const data = await result.json();
    // setResults(data.results);
    // setResult(result.data.hits)
    setItems(result.data);

    if (!result.data.length) {
      console.log('No results found');
    } else {
    console.log(result.data);

  }
};
    const onSubmit = (e) => {
      
      e.preventDefault();
      
      setResult();
    };
  
  // useEffect(() => {
  //   const fetchItems = async () => {
  //     setIsLoading(true)
  //     const result = await axios(`http://192.168.30.102:5000/fulltext/cases/${query}`)
  //     // const result = await axios('http://192.168.30.102:5000/cases/')
  //     console.log(result.data)
  //     setItems(result.data)
  //     // setItems(fullSearchUrl.data)
  //     // setIsLoading(false)
  //   }
  //   fetchItems()
  // },[query] )
  Moment.locale('en');
  return (
    
    <div className={styles.Home} data-testid="Home">

      {/* <Header title="Overview"></Header> */}
      {/* <Headers ></Headers> */}
      <Sidebar  ></Sidebar>
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
                <form onSubmit={onSubmit}>
                  <div class="input-group top-search-bar search-area d-xl-inline-flex" >
                    <input type="text" 
                    class="form-control"
                    id='search'
                   
                    onChange={(e) => setQuery(e.target.value)} placeholder="Search..."/>
                    <button type="submit" class="btn btn-primary mb-2 raise_button"  onClick={getResult}>Search</button>
                  </div>
                  </form>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* Header end */}
    </div>

<div class="content-body">
		
			<div class="container-fluid">
				<div class="row">
					<div class="col-xl-12 col-xxl-12">
						<div class="row">
	
							<div class="col-xl-12">
								<div class="card">
									<div class="card-header border-0 pb-sm-0 pb-5">
                    
									</div>
                  <div className="card-header">
                  <h4 className="card-title">Search Cases Here</h4>
                </div>
										<div class="card-body">
                                
                                <div class="custom-tab-1">
                                    <ul class="nav nav-tabs">
                                        <li class="nav-item">
                                            <a class="nav-link active" data-toggle="tab" href="#home1"><i class="la la-home mr-2"></i> Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-toggle="tab" href="#profile1"><i class="la la-user mr-2"></i> Tags</a>
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
                                          
                                             
                                            <div class="row">
          {items.map((item) => (
            
            
            // <p> {item.meta_info['Date Delivered']}</p>
            <div class="col-lg-6 col-xl-6">
              <div class="card">
                <div class="card-body">
                  <div class="row m-b-30">
                    <div class="col-md-12 col-xxl-12">
                      <div class="new-arrival-content position-relative">
                      {/* <p key={item._id} item={item}></p> */}
                      <h4><a href={"/Case?id="+item._id}>
                      { `${ item.meta_info['Parties '].substring(0,70)}...` } 
                </a></h4> 
               
                        <p>Judge(s): <span class="item">{item.meta_info['Judge(s) ']}<i class="fa fa-check-circle text-success"></i></span></p>
                        <p>Citation: <span class="item">{item.meta_info['Citation']}</span> </p>
                        <p>County: <span class="item">{item.meta_info['County']}</span></p>
                        <p>Date: <span class="item">{item.meta_info['Date Delivered ']}</span></p>
                        <p>Tags:&nbsp;&nbsp;   
                                    <span class="badge badge-success light">{item.resolved_acts.slice(0,4)}</span>
                                </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        ))}
          </div>
                                        </div>

                                        <div class="tab-pane fade" id="profile1">
                                        {/* {isLoading ? <p> Loading ... </p> : (

)} */}

        {isLoading ? <p>Loading...</p> : (
                                            <div class="pt-4">

                                                <h4>Categories</h4>
                                                {items.map((item) => (
            <div class="col-lg-6 col-xl-6">
              <div class="card">
                <div class="card-body">
                  <div class="row m-b-30">
                    <div class="col-md-12 col-xxl-12">
                      <div class="new-arrival-content position-relative">
                      <h4><a href={"/Case?id="+item._id}>
                <p>Tags:&nbsp;&nbsp;
                <span class="badge badge-success light">{item.resolved_acts.slice(0,4)}</span>
                </p>
                </a></h4> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             </div>
        ))}
                                            </div>
                                            )}
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

Search.propTypes = {};

Search.defaultProps = {};

export default Search;