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

  const[metas, setMetas] = useState([]);
 
  const[isLoading, setIsLoading] = useState(true);

  const [judgement, setJudgement] = useState('');
  const [relatedCases, setRelatedCases] = useState([]);

  useEffect(() => {

  let params = new URLSearchParams(window.location.search);
  let id = params.get('id');
  axios.get(`http://192.168.30.102:5000/cases/${id}`)
  .then(response => {
    setMetas(response.data.meta_info);
    
    setJudgement(response.data.judgement);
    setRelatedCases(response.data.related_cases);
    console.log(response.data.related_cases);
    setIsLoading(false);
    
  })
  .catch(error => {
    console.error(error);
    setIsLoading(false);
  });
}, []);
const shortenValue = (value) => {
  return value.length > 205 ? value.substring(0, 200) + '...' : value;
};

if (isLoading) {
  return <p>Loading...</p>;
}

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
						<li class="breadcrumb-item"><a href="/search">Case</a></li>
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
                            <div class="col-lg-12">
                        <div class="card">
                        <div class="card-header">
                                <h4 class="card-title" align="center">METAINFO</h4>
                            </div>

                            
            <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered table-responsive-sm">
                {/* <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead> */}
                    <tbody>
                    {Object.entries(metas).map(([key, value]) => (
                        <tr key={key}>
                        <td>{key}</td>
                        <td>{shortenValue(value)}</td>
                        </tr>
))}
                    </tbody>
                </table>
                
            </div>
        </div>

        
                          
                        </div>
                    </div>
                            
                            </div>
                            
                            <p class="text-content">
                            <div class="card-header">
                                <h4 class="card-title">JUDGEMENT</h4>
                            </div>
                              {judgement}</p>
                        </div>
                        {/* <p>Product code: <span class="item">0405689</span> </p> */}
                                 
                               
                                {/* <p>Related: <span class="item">{items.related_cases}</span></p> */}
                                <h3>Related Cases:</h3>
                                {relatedCases.map(relatedCase => (
          <li key={relatedCase}>{relatedCase}</li>
        ))}
                    </div>
           
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
  );
}

export default Case1