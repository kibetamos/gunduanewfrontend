import React, { useState, useEffect } from "react";
import axios from 'axios';

const Case1 = () => {
  const [metas, setMetas] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [judgement, setJudgement] = useState('');
  const [relatedCases, setRelatedCases] = useState([]);
  const [relatedCaseDetails, setRelatedCaseDetails] = useState(null);
  const[items, setItems] = useState([]);
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    axios.get(`http://192.168.30.102:5000/cases/${id}`)
      .then(response => {
        console.log(response.data.related_cases)
        setMetas(response.data.meta_info);
        setJudgement(response.data.judgement);
        setRelatedCases(response.data.related_cases);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (relatedCases.length > 0) {
      let relatedCaseRequests = relatedCases.map((relatedCase) => {
        return axios.get(`http://192.168.30.102:5000/cases/${relatedCase}`);
      });
      Promise.all(relatedCaseRequests)
        .then((results) => {
          console.log(relatedCaseRequests);
          console.log(results.map((r) => r.data));
          // setRelatedCaseDetails(results.map((r) => r.data));
          setItems(results.map((r) => r.data));
          console.log("Parties of Related Cases:", relatedCaseDetails.map((d) => d.parties_info));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [relatedCases]);


  const shortenValue = (value) => {
    return value.length > 205 ? value.substring(0, 200) + '...' : value;
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div class="header">
        <div class="header-content">
          <nav class="navbar navbar-expand">
            <div class="collapse navbar-collapse justify-content-between">
              <div class="header-left">
                <div class="dashboard_bar">Case Details</div>
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
                    <div class="card-header">
                      <h4 class="card-title">JUDGEMENT</h4>
                    </div>
                    <p class="text-content">{judgement}</p>
                  </div>

                  <div >
              
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
                      <h3>Related Cases:</h3><h4>About : {items.length} results</h4>
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
                                    {/* <span class="badge badge-success light">{item.related_cases}</span> */}
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
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
                  {/* <div class="related-cases">
                    
                    <ul>
                      {relatedCases.map((relatedCase) => (
                        <li key={relatedCase}>
                          <a href={`/case?id=${relatedCase}`}>
                            <h4>{relatedCase}</h4>
                          </a>
                          <p>
                            <strong>Court:</strong> {relatedCase}
                          </p>
                          <p>
                            <strong>Year:</strong> {relatedCase.year}
                          </p>
                          
                        </li>
                      ))}
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <Footer /> */}
</div>
</div>
  )
};

Case1.propTypes = {};

Case1.defaultProps = {};

export default Case1;