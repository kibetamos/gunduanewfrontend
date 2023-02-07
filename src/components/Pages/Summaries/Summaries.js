import React, { useState, forwardRef, useRef, useImperativeHandle, useEffect } from "react";
import PropTypes from 'prop-types';
import styles from '../../Pages/Home/Home.module.css';
import Header from '../../_layouts/Headers/Headers';
import Sidebar from '../../_layouts/Sidebar/Sidebar';
import Footer from '../../_layouts/Footers/Footers';
import $ from 'jquery';
import axios from "axios";
import { Variables } from '../../_utils/GlobalVariables';
import Spinner from "./Spinner";
import * as ReactBoostrap from 'react-bootstrap';
import Moment from 'moment';


const Summaries = ( {isLoading} ) => {
  const[query, setQuery] = useState("");
  // const [results, setResults] = useState([])
  const[items, setItems] = useState([]);
  const[files, setFiles] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("-------------------------------")
  let gotten = JSON.parse(localStorage.getItem("gunduauser"));
  // console.log(gotten);
  let UserDetails = gotten.data
  console.log (UserDetails.key)



  async function getResult(){
 
    var axios = require("axios").default;

      var options = {
        method: 'GET',
        url: `http://192.168.30.102:5000/cases/similar/`+summary +"/",
        headers: {
          Authorization: 'Token ' +(UserDetails.key)
        }
      };
      // console.log(options);
      axios.request(options).then(function (options) {
        console.log(options.data);
        setItems(options.data)
      }).catch(function (error) {
        console.error(error);
      });
  }
    const onButton = (e) => {
      e.preventDefault();
      getResult();
    }
const [id, setid]= useState("") 
const [summary, setSummary] = useState("")

// const url = `http://192.168.30.102:5000/summary/${id}`;

var axios = require("axios").default;

async function getSummary(){
  // console.log(url)
  var axios = require("axios").default;

  var result = 
  {
    method: 'GET',
    url:`http://192.168.30.102:5000/summary/${id}`,
    headers: {Authorization: 'Token ' +(UserDetails.key)}
  };

  axios.request(result).then(function (result) {
        console.log(result.data);
        setSummary(result.data.summary)
      }).catch(function (error) {
        console.error(error);
      });
    
  // setSummary(result.data.summary)
  // console.log(result);
}
  const onSubmit = (e) => {
    e.preventDefault();
    getSummary();
  }


  async function getSummary1(id){
    // console.log(url)
    var axios = require("axios").default;
  
    var result = 
    {
      method: 'GET',
      url:`http://192.168.30.102:5000/summary/${id}/`,
      headers: {Authorization: 'Token ' +(UserDetails.key)}
    };
  
    axios.request(result).then(function (result) {
          console.log(result.data);
          setSummary(result.data.summary)
        }).catch(function (error) {
          console.error(error);
        });
      
    // setSummary(result.data.summary)
    // console.log(result);
  }


  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
        fetch('http://192.168.30.102:5000/files/'+ id +"/",
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'content-Type': 'application/json',
                    Authorization: 'Token ' +(UserDetails.key)
                }
            })
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText);
            } else if (response.status === 204) {
                setFiles(files.filter(f => f.id !== id));
                alert("Deleted successfully");
                // return response.json();
            } else {
              return response.json();
          }
          // )
          //   .then(responseData => {
          //     setFiles(files.filter(f => f.id !== id));
          //     alert("Deleted successfully");
          })
          .catch(err => {
            console.log(err);
            alert("Error deleting data: " + err);
        });
    }
};

//Retrieve cases from the database
useEffect(() => {
  
  const fetchFiles = async () => {
    var axios = require("axios").default;
    // setIsLoading(true)
    const files = {
      method: 'GET',
      url: `http://192.168.30.102:5000/files/`,
      headers: {Authorization: 'Token ' +(UserDetails.key)}    
    
    };
    console.log(files)
    axios.request(files).then(function (files) {
    // const result = await axios(`http://127.0.0.1:8000/fulltext/cases/${query}`)
    // const files = await axios(`http://192.168.30.102:5000/files/`)
    console.log(files.data.results)
    setFiles(files.data.results)
    // setItems(fullSearchUrl.data)
    setLoading(false);
  }).catch(function (error) {
    console.error(error);
  });
}
  fetchFiles()
},[] )


Moment.locale('en');

  return isLoading ? (<Spinner />) :(
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
                                    <button type="button" class="btn btn-primary mb-2 raise_button" data-toggle="modal" data-target=".bd-example-modal-lg">Summarize Text</button>&ensp;&ensp;&ensp;&ensp; 
                                    <a href="http://localhost:3000/Docs">
                                      <button  type="button" class="btn btn-primary mb-2 raise_button" data-toggle="modal" data-target=".bd-example-modal-lg" >Check History</button></a>

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
                                                <span class="input-group-text">ID</span>
                                            </div>
                                            <input type="text"
                                            placeholder="Enter ID" 
                                            autoComplete="Off" value={id}
                                            onChange={(e) => setid(e.target.value)} 
                                            class="form-control"/>
                                            <button type="submit" class="btn btn-primary">Summary</button>
                                        </div>
                                    
                
								
                  {summary}
                
                  
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
            <div class="col-xl-6">
              <div class="card">
                <div class="card-body">
                  <div class="row m-b-30">
                    <div class="col-md-12 col-xx l-12">
                      <div class="new-arrival-content position-relative">
                      <div class="card-header">
                      <h4>
                        <a href={"/Case?id="+item._id}>
                          {/* {item.meta_info['Parties']} */}
                { item.meta_info['Parties '].substring(0,70) ? `${item.meta_info['Parties ']}` : 
                `${item.meta_info['Parties '].substring(0,70)}...`} 
                </a>
                </h4> 
                </div>
                <div class="card-body">
                        <p class="card-title">Judge(s): <span class="item">{item.meta_info['Judge(s) ']}<i class="fa fa-check-circle text-success"></i></span></p>
                        <p class="card-title">Citation: <span class="item">{item.meta_info['Citation']}</span> </p>
                        <p class="card-title">County: <span class="item">{item.meta_info['County']}</span></p>
                        <p class="card-title">Date: <span class="item">{item.meta_info['Date Delivered ']}</span></p>
                        {/* <p class="text-content"></p> */}
                        <p class="card-text">Tags:&nbsp;&nbsp;
                                    <span class="badge badge-success light">{item.related_cases}</span>
                                    <span class="badge badge-success light">{item.resolved_acts}</span>
                                    <span class="badge badge-success light">{item.resolved_charges}</span>
                                </p>
                                </div>
                                <div class="card-footer border-0 pt-0">
                                {/* <p class="card-text d-inline">Date: <span class="item">{item.meta_info['Date Delivered ']}</span></p> */}
                                <a class="card-link float-right">Judge(s): {item.meta_info['Judge(s) ']}</a>
                            </div>
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
                                    {loading && 
  <div class="spinner-border text-primary" role="status">
    <span class="sr-only">Loading...</span>
  </div>
}
{!loading && 
  <div class="card">
    <table class="table table-responsive-md">
      <thead>
        <tr>
          <th class="width80">ID</th>
          <th>NAME</th>
          <th>FILE</th>
          <th>SUMMARY</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {files.map((f =>(
          <tr key={f.id} >
            <td><strong>{f.id}</strong></td>
            <td>{f.remark}</td>
            <td>{f.file.substring(40)}</td>
            <td>
              {f.summary == null ? `${f.summary}`:
                `${f.summary.substring(0,200)}...`} 
            </td>
            <td>
              <div class="dropdown">
                <button type="button" class="btn btn-success light sharp" data-toggle="dropdown">
                  <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><circle fill="#000000" cx="5" cy="12" r="2"/><circle fill="#000000" cx="12" cy="12" r="2"/><circle fill="#000000" cx="19" cy="12" r="2"/></g></svg>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Edit</a>
                  <a class="dropdown-item" onClick={() => handleDelete(f.id)}>Delete</a>
                  <a class="dropdown-item" onClick={() => getSummary1(f.id)}>Summary</a>
                </div>
              </div>
            </td>
          </tr>
        )))} 
      </tbody>
    </table>
  </div>
}

                                    
      </div>
    </div>
    </div>
    
  )
};


Summaries.propTypes = {};

Summaries.defaultProps = {};

export default Summaries;