import React, {useState  } from "react";
import styles from '../../Pages/Home/Home.module.css';
import Header from '../../_layouts/Headers/Headers';
import Sidebar from '../../_layouts/Sidebar/Sidebar';
import axios from "axios";

// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

const Editor = () => {
  return (
    <div className={styles.Summaries} data-testid="Docs">

      <Header title="Overview"></Header>
      <Sidebar  ></Sidebar>
{/* <div class="header">
    
</div> */}

<div class="content-body">
    <div class="container-fluid">


        <div class="page-titles">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="javascript:void(0)">Form</a></li>
    <li class="breadcrumb-item active"><a href="javascript:void(0)">Editor</a></li>
  </ol>
        </div>
        
        <div class="row">
            <div class="col-xl-12 col-xxl-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Write your text here</h4>
                    </div>
                    <div class="card-body">
                        <div class="summernote">
                         {/* {this} */}
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</div>

</div>

  )
}
export default Editor;

