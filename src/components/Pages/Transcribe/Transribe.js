import React, {useState,useEffect} from 'react';
import styles from '../../Pages/Home/Home.module.css';
import Header from '../../_layouts/Headers/Headers';
import Sidebar from '../../_layouts/Sidebar/Sidebar';
import axios from 'axios';

const Transcribe = (event) => {
  const [file, setFile] = useState();
  const[files, setFiles] = useState([]);
  const[name, setName] = useState([]);
  const[items, setItems] = useState([]);
  const [query, setquery] = useState("") 
  const [id, setid]= useState("")
  const [text, setText]= useState("")
  const [showFullText, setShowFullText] = useState(false);

  // console.log("-------------------------------")
  // let gotten = JSON.parse(localStorage.getItem("gunduauser"));

  // let UserDetails = gotten.data
  // console.log (UserDetails.key)

  let gotten = JSON.parse(localStorage.getItem("gunduauser"));
  let token = gotten.data.access;
  // let id = gotten.data.id;
  //       console.log(id)



//This is to post a new doc to the databse
  const newDoc =() => {
    var axios = require("axios").default;

    const uploadData = new FormData();
    uploadData.append('name',name);
    uploadData.append('file',file);
    // console.log(remark);
    axios.post('http://192.168.30.102:5000/transcription/', uploadData, {
      headers: {
        'Authorization': "Bearer " + token,
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => console.log(res))
    .catch(error => console.log(error))
  }
//Get text from file
  async function getText(id){
    var axios = require("axios").default;
    var result = 
    {
      method: 'GET',
      url:`http://192.168.30.102:5000/text/${id}/`,
      headers: {'Authorization': "Bearer " + token}
    };
  
    axios.request(result).then(function (result) {
          console.log(result.data.speech_text);
        }).catch(function (error) {
          console.error(error);
        });
  }

  // useEffect(() => {

  //   var axios = require("axios").default;

    const fetchItems = async () => {
      try {
        const result = await axios({
        method: 'GET',
        url: `http://192.168.30.102:5000/transcription/`,
        headers: {
          'Authorization': "Bearer " + token,
        },
      });
        console.log(result.data);
        setItems(result.data.results)

      }catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      fetchItems();
    }, []);     
  

  //  Do a summary of each document
// const url = `http://192.168.30.102:5000/files/summary/${query}`;

// async function getCases(){
//   var result = await axios.get(url);
//   // setCases(result.data.hits)
//   console.log(result.data);
// }
//   const onSubmit = (e) => {
//     e.preventDefault();
//     getCases();
//   }
  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
        fetch('http://192.168.30.102:5000/transcription/'+ id,
            {
                method: 'DELETE',
                headers: {
                  'Authorization': "Bearer " + token,
                  'Accept': 'application/json',
                  'content-Type': 'application/json'
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
          })
          .catch(err => {
            console.log(err);
            alert("Error deleting data: " + err);
        });
    }
};
  return (
    <div className={styles.Summaries} data-testid="Docs">

      <Header title="Transcription"></Header>
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
                                            <input type="text" class="form-control" value={name} onChange={(evt) =>setName(evt.target.value)}/>
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
								

							</div>
                                    </form>
                                </div>
                                                  </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger light" data-dismiss="modal">Close</button>
                                                    <button onClick={() => newDoc()} type="button" class="btn btn-primary">Transcribe</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            <div class="card">
            <table class="table table-responsive-md">
                                        <thead>
                                            <tr>
                                                {/* <th class="width80">ID</th> */}
                                                <th class="width80">NAME</th>
                                                <th>File</th>
                                                <th>Text</th>
                                                <th>ACTIONS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                          {items.map((item) =>(
                                            <tr>
                                                {/* <td><strong>{item.id}</strong></td> */}
                                                <td>{item.name}</td>
                                                <td>{item.file.substr(51)}</td>
                                                <td>{item.text} </td>
                        <td>
													{/* <div class="dropdown">
														<button type="button" class="btn btn-success light sharp" data-toggle="dropdown">
															<svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><circle fill="#000000" cx="5" cy="12" r="2"/><circle fill="#000000" cx="12" cy="12" r="2"/><circle fill="#000000" cx="19" cy="12" r="2"/></g></svg>
														</button>
														 <div class="dropdown-menu"> 
                            <a class="dropdown-item" href="#">Summarize</a> 
															 {/* <a class="dropdown-item" onClick={() => handleUpdate(item.id)}>Edit</a>  */}
                               {/* <a class="dropdown-item" onClick={() => handleDelete(item.id)}>Delete</a>	 */}
                              {/* <a class="dropdown-item"onClick={() => getText(item.id)} >Transcribe</a>
                          													
                              </div> 
                               &nbsp;&nbsp;&nbsp;&nbsp;<button type="button" class="btn btn-info">Transcribe</button> 
													</div> */} 
                           
                         <div class="d-flex ">
                               <a  data-toggle="modal" data-target="#editDraftModal"
                                  class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"title="EDIT"></i></a>
                              <a onClick={() => handleDelete(item.id)} class="btn btn-danger shadow btn-xs sharp" data-toggle="modal"title="DELETE">
                                   <i class="fa fa-trash"></i></a>

                              <a onClick={() => getText(item.id)} class="btn btn-danger shadow btn-xs sharp" data-toggle="modal"title="Transribe">
                                   <i class="fa fa-book"></i></a>

                                   {/* <a class onClick={() => getText(item.id)} >Transcribe</a> */}
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
export default Transcribe;

