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

const Search = ({ item }) => {
    const[query, setQuery] = useState("");
  const [result, setResult] = useState([])
  

  async function getResult(){
    
    let query = document.getElementById('search').value;
    // console.log(query)
    const url = `http://127.0.0.1:8000/cases/text_search/`+query;
    var result = await axios.get(url);

    setResult(result.data.hits)
    console.log(result);
  }
    const onSubmit = (e) => {
      e.preventDefault();
      getResult();
    }
  Moment.locale('en');
  return (
    
    <div className={styles.Home} data-testid="Home">

      <Header title="Overview"></Header>
      <Sidebar  ></Sidebar>

<div class="content-body">
		
			<div class="container-fluid">
				<div class="row">
					<div class="col-xl-9 col-xxl-8">
						<div class="row">
	
							<div class="col-xl-12">
								<div class="card">
									<div class="card-header border-0 pb-sm-0 pb-5">
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