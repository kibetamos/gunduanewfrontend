import React, {useState} from 'react';
import styles from '../../Pages/Home/Home.module.css';
import Header from '../../_layouts/Headers/Headers';
import Sidebar from '../../_layouts/Sidebar/Sidebar';

const Docs = (event) => {
  const [file, setFile] = useState();
  const [remark, setRemark] = useState("");


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

  // const changeHandler = (event) => {
	// 	setSelectedFile(event.target.files[0]);
		// setIsSelected(true);
	// };
  // const handleSubmission = () => {
	// 	const formData = new FormData();

	// 	// formData.append('File', selectedFile);

	// 	fetch(
	// 		'http://127.0.0.1:8000/files/',
	// 		{
	// 			method: 'POST',
	// 			body: formData,
	// 		}
	// 	)
	// 		.then((response) => response.json())
	// 		.then((result) => {
	// 			console.log('Success:', result);
	// 		})
	// 		.catch((error) => {
	// 			console.error('Error:', error);
	// 		});
	// };
	
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
                                                <th class="width80">#</th>
                                                <th>CASES</th>
                                                <th>No.Of Cases</th>
                                                <th>DATE</th>
                                                {/* <th>STATUS</th> */}
                                                {/* <th>PRICE</th> */}
                                                <th>ACTIONS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>01</strong></td>
                                                <td>Case 1</td>
                                                <td>5</td>
                                                <td>01 August 2020</td>
                                                {/* <td><span class="badge light badge-success">Successful</span></td> */}
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
											<tr>
                                                <td><strong>02</strong></td>
                                                <td>Case 2 </td>
                                                <td>6</td>
                                                <td>01 August 2020</td>
                                                {/* <td><span class="badge light badge-danger">Canceled</span></td> */}
                                                {/* <td>$21.56</td> */}
                                                <td>
													<div class="dropdown">
														<button type="button" class="btn btn-danger light sharp" data-toggle="dropdown">
															<svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><circle fill="#000000" cx="5" cy="12" r="2"/><circle fill="#000000" cx="12" cy="12" r="2"/><circle fill="#000000" cx="19" cy="12" r="2"/></g></svg>
														</button>
														<div class="dropdown-menu">
															<a class="dropdown-item" href="#">Edit</a>
															<a class="dropdown-item" href="#">Delete</a>
														</div>
													</div>
												</td>
                                            </tr>
											<tr>
                                                <td><strong>03</strong></td>
                                                <td>Case3</td>
                                                <td>10</td>
                                                <td>01 August 2020</td>
                                                {/* <td><span class="badge light badge-warning">Pending</span></td> */}
                                                {/* <td>$21.56</td> */}
                                                <td>
													<div class="dropdown">
														<button type="button" class="btn btn-warning light sharp" data-toggle="dropdown">
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
}
export default Docs;

