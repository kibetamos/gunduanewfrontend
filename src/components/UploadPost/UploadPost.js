import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './UploadPost.module.css';
import $ from 'jquery';
import axios from 'axios';
import {
  Link, useNavigate
} from "react-router-dom";
import { Variables } from '../_utils/GlobalVariables';
import Headers from '../Headers/Headers';
import Footers from '../Footers/Footers';

const UploadPost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(false);
  const displayNone = { display: 'none' };

  const navigate = useNavigate();

  const handleChange = (event) => {
    // this.setState({ [event.target.name]: event.target.value });
    if (event.target.name == "title") {
      validateTitle(event.target.value);
    } else if (event.target.name == "description") {
      validateDescription(event.target.value);
    } else if (event.target.name == "image") {
      validateImage(event);
    }
  }

  const validateDescription = (value) => {
    setDescription(value);
    if (!(value.length < 2)) {
      $('#DescriptionAbsentError').hide();
      // setTitlevalid(true);
    } else {
      $('#DescriptionAbsentError').show();
    }
  }
  const validateTitle = (value) => {
    setTitle(value);
    if (!(value.length < 2)) {
      $('#TitleInvalidError').hide();
      // setTitlevalid(true);
    } else {
      $('#TitleInvalidError').show();
    }
  }

  const validateImage = (e) => {
    if (!(document.getElementById("imageuploadinput").files.length === 0)) {
      $('#ImageInvalidError').hide();
      setImage(e.target.files[0]);
    } else {
      $('#ImageInvalidError').show();
    }
  }

  const NewPost = (e) => {
    // console.log('submitPayload');
    e.preventDefault();
    // If fields are blank
    if (document.getElementById("imageuploadinput").files.length == 0) {
      validateImage(image);
      return;
    }
    if (title.length < 2) {
      validateTitle(title);
      return;
    }
    if (description.length < 2) {
      validateDescription(description);
      return;
    }

    // let submitPayload = {
    //   "title": title,
    //   "description": description,
    //   "image": image
    // };

    let formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
    console.log(formData);
    // for (let [key, value] of formData) {
    //   console.log(`${key}: ${value}`)
    // }

    let gotten = JSON.parse(localStorage.getItem("adanianuser"));
    let token = gotten.data.success.token;

    const headers = {
      'Content-Type': 'multipart/form-data',
      'Authorization': "Bearer " + token
    }
    setLoading(true);
    axios.post(Variables.apiURL + 'api/upload_post', formData, { headers: headers })
      .then(response => {

        setLoading(false);
        // console.log(response);

        if (response.status == 200) {
          $('#SubmitError').hide();
          $('.alert-success').show();
          document.getElementById("uploadPostForm").reset();
          setTimeout(function () {
            window.location.href = "/home";
          }, 1500);
        } else {
          $('.alert-success').hide();
          $('#SubmitError').show();
        }
      })
      .catch(error => {
        console.log('error');
        console.log(error);
        $('#EmailAbsentError').show();
        setLoading(false);
      })
  }



  return (
    <div className={styles.UploadPost} data-testid="UploadPost">

      {/* <!-- dividers --> */}
      <div class="dividers">
        <div class="divider"></div>
        <div class="divider"></div>
        <div class="divider"></div>
        <div class="divider"></div>
      </div>

      <Headers></Headers>

      <div class="container pb-5 mt-5  pt-5 upload-container h-100">
        <div class="row justify-content-center pt-5 h-100 align-items-center">
          <div class="col-md-10 background-white col-sm-12">
            <div class="authincation-content">
              <div class="row no-gutters">
                <div class="col-xl-12">
                  <div class="auth-form">
                    <h3 class="text-center mb-4 text-primary"><strong>New Post</strong><p className='text-black mb-0 p-0 fs-16'>(Time to Nerd)</p></h3>
                    <form id="uploadPostForm" onSubmit={NewPost}>
                      <div class="form-group">
                        <label class="mb-1 text-primary"><strong>Image</strong></label>
                        <input onChange={handleChange} accept="image/x-png,image/gif,image/jpeg,image/jpg,image/png" type="file" id='imageuploadinput' name="image" class="form-control" placeholder="Choose a good image" />
                      </div>
                      <div className="alert alert-danger mt-2" id='ImageInvalidError' style={displayNone} role="alert">
                        It all starts with a good photo
                      </div>
                      <div class="form-group">
                        <label class="mb-1 text-primary"><strong>Title</strong></label>
                        <input onChange={handleChange} type="text" name="title" class="form-control" placeholder="title goes here..." />
                      </div>
                      <div className="alert alert-danger mt-2" id='TitleInvalidError' style={displayNone} role="alert">
                        Every good post has a great caption
                      </div>
                      <div class="form-group">
                        <label class="mb-1 text-primary"><strong>Description</strong></label>
                        <textarea onChange={handleChange} name='description' class="form-control" placeholder="...">
                        </textarea>
                      </div>
                      <div className="alert alert-danger" id='DescriptionAbsentError' style={displayNone} role="alert">
                        Write something nice.
                      </div>
                      <div className="alert alert-success" style={displayNone} role="alert">
                        <strong>Success! </strong>Your post was uploaded.
                      </div>
                      <div className="alert alert-danger" id='SubmitError' style={displayNone} role="alert">
                        <strong>Error! </strong>Something went wrong, Please try again.
                      </div>
                      <div class="text-center mt-4">
                        <button type="submit" class="btn bg-primary text-white btn-block"> {loading ? <span>Loading...</span> : <span>Upload</span>}</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footers></Footers>
    </div>
  )
};

UploadPost.propTypes = {};

UploadPost.defaultProps = {};

export default UploadPost;
