import React, { useState, forwardRef, useRef, useImperativeHandle, useEffect } from "react";
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import Headers from '../Headers/Headers';
import Footers from '../Footers/Footers';
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

      {/* <!-- dividers --> */}
      <div class="dividers">
        <div class="divider"></div>
        <div class="divider"></div>
        <div class="divider"></div>
        <div class="divider"></div>
      </div>

      <Headers></Headers>

      {/* <!-- hero area --> */}
      <section class="hero-section mt-5">
        <div class="container pt-5">
          <div class="row">
            <div class="col-lg-6 align-self-end">
              <h1 class="mb-0">Welcome</h1>
              <h2 class="mb-100 title-border-lg">to Adanian Social</h2>
              <p class="mb-80 mr-5">This is the place for all the nerds to nerd.</p>
              <span class="font-secondary text-dark mr-3 mr-sm-5">Follow</span>
              <ul class="list-inline d-inline-block mb-5">
                <li class="list-inline-item mx-3"><a href="https://web.facebook.com/adalabsafrica/" class="text-dark"><i
                  class="ti-facebook"></i></a></li>
                <li class="list-inline-item mx-3"><a href="https://twitter.com/Adanianlabs" class="text-dark"><i
                  class="ti-twitter-alt"></i></a></li>
                <li class="list-inline-item mx-3"><a href="https://ke.linkedin.com/company/adalabafrica"
                  class="text-dark"><i class="ti-linkedin"></i></a></li>
              </ul>
            </div>
            <div class="col-lg-6 text-right">
              <img class="img-fluid" src="images/banner-img.png" alt="banner-image" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /hero area --> */}

      {/* <!-- blog post --> */}
      <section class="section">
        <div class="container">
          <div class="row">
            {posts.map((post) =>
              <div class="col-12 mb-100">
                <article data-file="articles/b.html" data-target="article" class="article-full-width">
                  <div class="post-image">
                    <img class="img-fluid" src={Variables.apiURL + post.image} alt="post-thumb" />
                  </div>
                  <div class="post-content">
                    <ul class="list-inline d-flex justify-content-between border-bottom post-meta pb-2 mb-4">
                      <li class="list-inline-item"><i class="ti-calendar mr-2"></i>  {Moment(post.updated_at).format('d MMM YYYY')} </li>
                      {/* <li class="list-inline-item"><i class="ti-alarm-clock mr-2"></i><span class="eta">8 min</span> read</li> */}
                    </ul>
                    <h4 class="mb-4"><a href="blog-single.html" class="text-dark">{post.title}</a></h4>
                    <p class="mb-0 post-summary">{post.description}</p>
                    {/* <a class="btn btn-transparent mb-4" href="blog-single.html">Continue...</a> */}
                  </div>
                </article>
              </div>
            )}

          </div>
          <div class="row">
            <div class="col-12">
              <nav>
                <ul class="pagination justify-content-center align-items-center">
                  <li class="page-item">
                    <span class="page-link">&laquo; Previous</span>
                  </li>
                  <li class="page-item active"><a class="page-link"  >01</a></li>
                  <li class="page-item ">
                    <span class="page-link">02</span>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">03</a></li>
                  <li class="page-item"><a class="page-link" href="#">04</a></li>
                  <li class="page-item"><a class="page-link" href="#">05</a></li>
                  <li class="page-item"><a class="page-link" href="#">06</a></li>
                  <li class="page-item">
                    <a class="page-link"  >Next &raquo;</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /blog post --> */}

      <Footers></Footers>

    </div>
  )
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
