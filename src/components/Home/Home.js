import React, { useState, forwardRef, useRef, useImperativeHandle, useEffect } from "react";
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import Header from '../_layouts/Headers/Headers';
import Sidebar from '../_layouts/Sidebar/Sidebar';
import Footer from '../_layouts/Footers/Footers';
import $ from 'jquery';
import axios from 'axios';
import { Variables } from '../_utils/GlobalVariables';
import Moment from 'moment';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  //when page loads
  useEffect(() => {
    getPosts();
  }, []);

  //get all posts
  const getPosts = () => {
    let gotten = JSON.parse(localStorage.getItem("adanianuser"));
    let token = gotten.data.success.token;


    const headers = {
      'Content-Type': 'multipart/form-data',
      'Authorization': "Bearer " + token
    }
    setLoading(true);
    axios.get(Variables.apiURL + 'api/get_all_posts', { headers: headers })
      .then(response => {
        setLoading(false);
        console.log(response.data.success);

        if (response.status == 200) {
          setPosts(response.data.success);
          console.log(posts);
        } else {
          $('#SubmitError').show();
        }
      })
      .catch(error => {
        console.log('error');
        console.log(error);
        // $('#EmailAbsentError').show();
        // setLoading(false);
      })
  }

  Moment.locale('en');
  return (
    <div className={styles.Home} data-testid="Home">

      <Header title="Overview"></Header>
      <Sidebar  ></Sidebar>

      <div class="content-body">
        <div class="container-fluid">
          <div class=" ">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="javascript:void(0)">Layout</a></li>
              <li class="breadcrumb-item active"><a href="javascript:void(0)">Blank</a></li>
            </ol>
          </div>
          <div class="row">
            <div class="col-lg-6 col-xl-6">
              <div class="card">
                <div class="card-body">
                  <div class="row m-b-30">
                    <div class="col-md-12 col-xxl-12">
                      <div class="new-arrival-content position-relative">
                        <h4><a href="ecom-product-detail.html">Solid Women's V-neck Dark T-Shirt</a></h4>
                        <div class="comment-review star-rating">
                          <ul>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star-half-empty"></i></li>
                            <li><i class="fa fa-star-half-empty"></i></li>
                          </ul>
                          <span class="review-text">(34 reviews) / </span><a class="product-review" href="" data-toggle="modal" data-target="#reviewModal">Write a review?</a>
                          <p class="price">$320.00</p>
                        </div>
                        <p>Availability: <span class="item"> In stock <i class="fa fa-check-circle text-success"></i></span></p>
                        <p>Product code: <span class="item">0405689</span> </p>
                        <p>Brand: <span class="item">Lee</span></p>
                        <p class="text-content">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-6">
              <div class="card">
                <div class="card-body">
                  <div class="row m-b-30">
                    <div class="col-md-12 col-xxl-12">
                      <div class="new-arrival-content position-relative">
                        <h4><a href="ecom-product-detail.html">Solid Women's V-neck Dark T-Shirt</a></h4>
                        <div class="comment-review star-rating">
                          <ul>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star-half-empty"></i></li>
                            <li><i class="fa fa-star-half-empty"></i></li>
                          </ul>
                          <span class="review-text">(34 reviews) / </span><a class="product-review" href="" data-toggle="modal" data-target="#reviewModal">Write a review?</a>
                          <p class="price">$325.00</p>
                        </div>
                        <p>Availability: <span class="item"> In stock <i class="fa fa-check-circle text-success"></i></span></p>
                        <p>Product code: <span class="item">0405689</span> </p>
                        <p>Brand: <span class="item">Lee</span></p>
                        <p class="text-content">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="reviewModal">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Review</h5>
                    <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form>
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
                    </form>
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

Home.propTypes = {};

Home.defaultProps = {};

export default Home;