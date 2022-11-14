import React, {useState,useEffect} from 'react';
import styles from '../../Pages/Home/Home.module.css';
import Header from '../../_layouts/Headers/Headers';
import Sidebar from '../../_layouts/Sidebar/Sidebar';
import axios from 'axios';

const Docs = (event) => {
  const [file, setFile] = useState();
  const [remark, setRemark] = useState("");
  const [posts, setPosts] = useState([]);
  const[items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const[isLoading, setIsLoading] = useState(true);
  // const[query, setQuery] = useState('');
  const [query, setquery] = useState("") 
  const [currentPage, setCurrentPage] = useState(1);
  const[itemsPerPage] = useState(6);

//This is to post a new doc to the databse
  const newDoc =() => {
    const uploadData = new FormData();
    uploadData.append('remark',remark);
    uploadData.append('file',file, file.name);
    // console.log(remark);
    fetch('http://127.0.0.1:8000/files/',{
      method:'POST',
      body:uploadData
    })
    .then(res => console.log(res))
    .catch(error => console.log(error))
  }
//Retrieve cases from the database
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      // const result = await axios(`http://127.0.0.1:8000/fulltext/cases/${query}`)
      const result = await axios(`http://127.0.0.1:8000/files/`)
      console.log(result.data)
      setItems(result.data.results)
      // setItems(fullSearchUrl.data)
      setIsLoading(false)
    }
    fetchItems()
  },[query] )

  //  Do a summary of each document
const url = `http://127.0.0.1:8000/files/summary/${query}`;

async function getCases(){
  var result = await axios.get(url);
  // setCases(result.data.hits)
  console.log(result.data);
}
  const onSubmit = (e) => {
    e.preventDefault();
    getCases();
  }
  return (
    <div className={styles.Summaries} data-testid="Docs">

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
                                    <button type="button" class="btn btn-primary mb-2 raise_button" data-toggle="modal" data-target=".bd-example-modal-lg">Upload</button>
                                    </div>
                                    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-hidden="true">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title">Upload Text</h5>
                                                    <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                <div class="basic-form">
                                    <form>
                                    <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Name</span>
                                            </div>
                                            <input type="text" class="form-control" value={remark} onChange={(evt) =>setRemark(evt.target.value)}/>
                                        </div>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Upload</span>
                                            </div>
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" onChange={(evt) =>setFile(evt.target.files[0])}/>
                                                <label class="custom-file-label">Choose file</label>
                                            </div>
                                        </div>
                                        <div class="input-group mb-3">      
								{/* <div class="input-group">
									<textarea rows="6" cols="7"class="form-control" placeholder="Paste your message..."></textarea>
									<div class="input-group-append">
										<button type="button" class="btn btn-primary"><i class="fa fa-location-arrow"></i></button>
									</div>
                  </div> */}

							</div>
              {/* <div class="input-group mb-3">
              <div class="input-group">
									<textarea rows="14" cols="7"class="form-control" placeholder="View Summarized Text $ Edit "></textarea>
									<div class="input-group-append">
										
									</div>
                  </div>
							</div> */}
                                    </form>
                                </div>
                                                  </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger light" data-dismiss="modal">Close</button>
                                                    <button onClick={() => newDoc()} type="button" class="btn btn-primary">Save changes</button>
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
                                                <th class="width80">ID</th>
                                                {/* <th>CASES</th> */}
                                                {/* <th>No.Of Cases</th> */}
                                                <th>Remark</th>
                                                {/* <th>STATUS</th> */}
                                                <th>Name</th>
                                                <th>ACTIONS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        
           {items.map((item) => 
           (
                                            <tr>
                                                <td><strong>{item.id}</strong></td>
                                                <td>{item.remark}</td>
                                                {/* <td>5</td> */}
                                                <td>{item.file.substr(40)}</td>
                                                {/* <td><span class="badge light badge-success">Successful</span></td> */}
                                                {/* <td>$21.56</td> */}
                                                <td>
                                                  {/* <div class="raise_button">
            <button type="button"class="btn btn-primary">Summarize Text</button>
            </div> */}
													<div class="dropdown">
														<button type="button" class="btn btn-success light sharp" data-toggle="dropdown">
															<svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><circle fill="#000000" cx="5" cy="12" r="2"/><circle fill="#000000" cx="12" cy="12" r="2"/><circle fill="#000000" cx="19" cy="12" r="2"/></g></svg>
														</button>
														<div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Summarize</a>
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
}
export default Docs;

