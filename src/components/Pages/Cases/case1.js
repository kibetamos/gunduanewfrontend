import React, { useState, forwardRef, useRef, useImperativeHandle, useEffect } from "react";
import PropTypes from 'prop-types';
import Header from '../../_layouts/Headers/Headers';
import Sidebar from '../../_layouts/Sidebar/Sidebar';
import Footer from '../../_layouts/Footers/Footers';
import $ from 'jquery';
import axios from 'axios';
import { Variables } from '../../_utils/GlobalVariables';
import Moment from 'moment';


const Case1 = ({ item }) => {
  const [posts, setPosts] = useState([]);
  const[items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const[isLoading, setIsLoading] = useState(true);
  const[query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const[itemsPerPage] = useState(6);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      // const result = await axios(`http://127.0.0.1:8000/fulltext/cases/${query}`)

      let params = new URLSearchParams(window.location.search);
     let id = params.get('id');
     const result = await axios('http://127.0.0.1:8000/cases/'+id)
     console.log(result.data)
           setItems(result.data)
      // setItems(fullSearchUrl.data)
      setIsLoading(false)
    }
    fetchItems()
//     for (const [key, value] of Object.entries(meta_info)) {
//       console.log(key + ": " + value)
// }
      
  },[query] )
  return (
    <div>
       
     <Header title="Overview"></Header>
      <Sidebar  ></Sidebar>

   
    <div class="row">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-xl-3 col-lg-6  col-md-6 col-xxl-5 ">
                        
                    </div>
                    
                    <div class="col-xl-9 col-lg-6  col-md-6 col-xxl-7 col-sm-6">
                        <div class="product-detail-content">
                            
                            <div class="new-arrival-content pr">
                                {/* <h4>{items.meta_info['County']}</h4> */}
                                <div class="comment-review star-rating">
          <ul>
            <li><i class="fa fa-star"></i></li>
            <li><i class="fa fa-star"></i></li>
            <li><i class="fa fa-star"></i></li>
            <li><i class="fa fa-star-half-empty"></i></li>
            <li><i class="fa fa-star-half-empty"></i></li>
          </ul>
          <span class="review-text">(34 reviews) / </span><a class="product-review" href=""  data-toggle="modal" data-target="#reviewModal">Write a review?</a>
        </div>
        <div>
        <div>
             
    </div>

</div>
        <div class="d-table mb-2">
        {
                Object.keys(items).forEach(key => 
                    <h2>key: meta_info[key]</h2>
                )
            }
          <p class="price float-left d-block">$325.00</p>
                                </div>
                                <p>Availability: <span class="item"> {items.resolved_charges} &nbsp;&nbsp; {items.resolved_acts} <i
                                            class="fa fa-shopping-basket"></i></span>
                                </p>
                                <p>Product code: <span class="item">0405689</span> </p>
                                <p>Brand: <span class="item">Lee</span></p>
                                <p>Tags:&nbsp;&nbsp;
                                    {/* <span class="badge badge-success light">{items.resolved_charges}</span> */}
                                    <span class="badge badge-success light">{items.resolved_charges} &nbsp;&nbsp; {items.resolved_acts}</span>
                                    {/* <span class="badge badge-success light">{items.resolved_acts}</span> */}
                                    {/* <span class="badge badge-success light">clothes</span>
                                    <span class="badge badge-success light">shoes</span>
                                    <span class="badge badge-success light">dresses</span> */}
                                </p>
                                <p class="text-content">{items.judgement}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

{/* <div class="modal fade" id="reviewModal">
<div class="modal-dialog" role="document">
<div class="modal-content">
<div class="modal-header">
  <h5 class="modal-title">Review</h5>
  <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
  </button>
</div>
<div class="modal-body">
  
</div>
</div>
</div>
</div> */}
</div>
</div>
  )
}

export default Case1