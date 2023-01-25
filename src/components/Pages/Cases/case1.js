import React, { useState, forwardRef, useRef, useImperativeHandle, useEffect } from "react";
import PropTypes from 'prop-types';
import Header from '../../_layouts/Headers/Headers';
import Sidebar from '../../_layouts/Sidebar/Sidebar';
import Footer from '../../_layouts/Footers/Footers';
import $, { data } from 'jquery';
import axios from 'axios';
import { Variables } from '../../_utils/GlobalVariables';
import Moment from 'moment';


const Case1 = () => {
  const [posts, setPosts] = useState([]);
  const[items, setItems] = useState([]);
  const[metas, setMetas] = useState([]);
  const[keys, setKeys] = useState([]);
  const[values, setValues] = useState([]);
  const [loading, setLoading] = useState(false);
  const[isLoading, setIsLoading] = useState(true);
  const[query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const[itemsPerPage] = useState(6);
  const [result, setResult] = useState([]);
 

  useEffect(() => {
    const fetchItems = async () => {
    }
    fetchItems()

    setIsLoading(true)
    // const result = await axios(`http://127.0.0.1:8000/fulltext/cases/${query}`)

  let params = new URLSearchParams(window.location.search);
  let id = params.get('id');
  const result =   axios.get('http://192.168.30.102:5000/cases/'+id)
   console.log(result)
  //  console.log(result.data.meta_info)
        //  setItems(result.data)
        //  setMetas(result.data)
        //  setKeys(Object.keys(metas))
        //  setValues(Object.values(metas))
        //  items 
        // let entries= Object.entries(metas);
        // console.log(keys.length);
    // setItems(fullSearchUrl.data)
    setIsLoading(false)
    let keys = Object.keys(metas);
    let vals  = Object.values(metas);
//     i=0;
// for (i = 0; i < keys.length; i++)
// {
//     console.log(keys);
// }
//     for (const [key, value] of Object.entries(meta_info)) {
//       console.log(key + ": " + value)
// }
// console.log('Keys ', keys);
  // console.log('Vals ', vals);
  var data = [];
  var length = keys.length; // user defined length
  
  for(var i = 0; i < length; i++) {
      data.push("");
  }
  }, [])  
  
  
// const fruits = entries;
// let fLen = entries.length;

// let text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";
  return (
    <div>
       
     <Header title="Overview"></Header>
      <Sidebar  ></Sidebar>
      <div class="header">
            <div class="header-content">
                <nav class="navbar navbar-expand">
                    <div class="collapse navbar-collapse justify-content-between">
                        <div class="header-left">
                            <div class="dashboard_bar">
								Case Details
                            </div>
                        </div>
                        
                    </div>
                </nav>
            </div>
        </div>
      <div class="content-body">
            <div class="container-fluid">
    <div class="row">
    <div class="page-titles">
					<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="javascript:void(0)">Layout</a></li>
						<li class="breadcrumb-item active"><a href="javascript:void(0)">CaseDetails</a></li>
					</ol>
                </div>
    <div class="col-lg-12">
        <div class="card">
            <div class="card-body">
                <div class="row">  
                    <div class="col-xl-12 col-lg-12  col-md-12 col-xxl-12 col-sm-12">
                        <div class="product-detail-content">
                            
                            <div class="new-arrival-content pr">
                                {/* <h4>{key[0]}</h4> */}
                                {/* <div class="comment-review star-rating">
          <ul>
            <li><i class="fa fa-star"></i></li>
            <li><i class="fa fa-star"></i></li>
            <li><i class="fa fa-star"></i></li>
            <li><i class="fa fa-star-half-empty"></i></li>
            <li><i class="fa fa-star-half-empty"></i></li>
          </ul>
          <span class="review-text">(34 reviews) / </span><a class="product-review" href=""  data-toggle="modal" data-target="#reviewModal">Write a review?</a>
        </div> */}  
                                {/* <p> CAT: <span class="item"> {items.resolved_charges} &nbsp;&nbsp; {items.resolved_acts} <i
                                            class="fa fa-shopping-basket"></i></span>
                                </p> */}
                                {/* <p>Product code: <span class="item">0405689</span> </p>
                                <p>Brand: <span class="item">Lee</span></p> */}
                                {/* <p>Tags:&nbsp;&nbsp; */}
                                    {/* <span class="badge badge-success light">{items.resolved_charges}</span> */}
                                    {/* <span class="badge badge-success light">{items.resolved_charges} </span>
                                    <span class="badge badge-success light">{items.resolved_acts}</span> */}
                                    {/* <span class="badge badge-success light">clothes</span>
                                    <span class="badge badge-success light">shoes</span>
                                    <span class="badge badge-success light">dresses</span> */}
                                {/* </p> */}
                            {/* <td>May 27,2018</td> */}
                            <div class="col-lg-12">
                        <div class="card">
                        <div class="card-header">
                                <h4 class="card-title" align="center">METAINFO</h4>
                            </div>
                            {data.map((item) => (
            <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered table-responsive-sm">
                    <tbody>
                        <tr>
                            <td>{keys}</td>
                            <td>{values}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        ))}
                          
                        </div>
                    </div>
                             {/* <p class="text-content">{keys[0]}:{values[0]}</p>
                             <p class="text-content">{keys[1]}:{values[1]}</p>
                             <p class="text-content">{keys[2]}:{values[2]}</p>
                             <p class="text-content">{keys[3]}:{values[3]}</p>
                             <p class="text-content">{keys[4]}:{values[4]}</p> */}
                            </div>
                            
                            <p class="text-content">
                            <div class="card-header">
                                <h4 class="card-title">JUDGEMENT</h4>
                            </div>
                              {items.judgement}</p>
                        </div>
                        {/* <p>Product code: <span class="item">0405689</span> </p> */}
                                 
                                <p>Categories:&nbsp;&nbsp;
                                    <span class="badge badge-success light">{items.resolved_charges}</span>
                                    <span class="badge badge-success light">{items.resolved_charges} </span>
                                    <span class="badge badge-success light">{items.resolved_acts}</span> 
                                     {/* <span class="badge badge-success light">clothes</span>
                                    <span class="badge badge-success light">shoes</span>
                                    <span class="badge badge-success light">dresses</span>  */}
                                </p>
                                <p>Related: <span class="item">{items.related_cases}</span></p>
                    </div>
                    <div class="row">
          {items.map((item) => (
            // <Case1 key={item._id} item={item}></Case1>
            // <p> {item.meta_info['Date Delivered']}</p>
            <div class="col-lg-6 col-xl-6">
              <div class="card">
                <div class="card-body">
                  <div class="row m-b-30">
                    <div class="col-md-12 col-xxl-12">
                      <div class="new-arrival-content position-relative">
                      <h4><a href={"/Case?id="+item._id}>
                      { `${ item.meta_info['Parties'].substring(0,70)}...` } 
                {/* {item.judgement.substring(0,70)} */}
                {/* {item.meta_info['Parties'].substring(0,70)}... */}
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
</div>
</div>
  )
}

export default Case1