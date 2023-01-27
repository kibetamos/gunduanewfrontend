import React from 'react';
import PropTypes from 'prop-types';
import {
  Link, useNavigate
} from "react-router-dom";

const Sidebar = () => (
  <div className='sidebar-main' id='sidebar-main'>
    <div class="deznav">
      <div class="deznav-scroll">
        {/* <a href="javascript:void(0)" class="add-menu-sidebar" data-toggle="modal" id='sendMessageModalBtn' data-target="#sendMessageModal" > Send Message</a>
        <a href="javascript:void(0)" id='showGroupModalBtn' class="add-menu-sidebar d-none" data-toggle="modal" data-target="#addGroupModal" > Show Group Chooser</a>
        <a href="javascript:void(0)" id='chooseIndividualContactModalBtn' class="add-menu-sidebar d-none" data-toggle="modal" data-target="#chooseIndividualContactModal" > Show Group Chooser</a>
        <a href="javascript:void(0)" id='confirmDeleteGroupModalBtn' class="add-menu-sidebar d-none" data-toggle="modal" data-target="#confirmDeleteGroupModal" > Show Group Confirm Delete</a>
        <a href="javascript:void(0)" id='showDraftsModalBtn' class="add-menu-sidebar d-none" data-toggle="modal" data-target="#addDraftsModal" > Show draft modal </a>
        <a href="javascript:void(0)" id='showDeleteContactModalBtn' data-toggle="modal" data-target="#deleteContactModal" class="btn btn-danger shadow btn-xs sharp d-none"> Delete Single Contact </a>
        <a href="javascript:void(0)" data-toggle="modal" data-target="#editContactModalside"
          class="btn btn-primary shadow btn-xs sharp mr-1 d-none" id="showEditContactModal"  > </a> */}

        <ul class="metismenu" id="menu">
          <li > 
            <a href="/" class="ai-icon active" aria-expanded="false">
              <i class="flaticon-381-home-3"></i>
              <span class="nav-text">Home</span>
            </a>
          </li>
          <li >
            <a href="/summaries" class="ai-icon active" aria-expanded="false">
              <i class="flaticon-381-clock-1"></i>
              <span class="nav-text"> Summaries</span>
            </a>
          </li>
          {/* <li >
            <a href="/library" class="ai-icon active" aria-expanded="false">
              <i class='flaticon-381-square'></i>
              <span class="nav-text"> Library</span>
            </a>
          </li> */}
           {/* <li >
            <a href="/categories" class="ai-icon active" aria-expanded="false">
              <i class="fa-solid fa-table-cells-large"></i>
              <span class="nav-text"> Categories</span>
            </a>
          </li> */}
          <li >
            <a href="/search" class="ai-icon active" aria-expanded="false">
              <i class="flaticon-381-search-1"></i>
              <span class="nav-text"> Search</span>
            </a>
          </li>
          <li >
            <a href="/Docs" class="ai-icon active" aria-expanded="false">
              <i class="flaticon-381-notepad-1"></i>
              <span class="nav-text"> Docs</span>
            </a>
          </li>
          <li >
            <a href="/Transcribe" class="ai-icon active" aria-expanded="false">
              <i class="flaticon-381-notepad-1"></i>
              <span class="nav-text"> Transcribe</span>
            </a>
          </li>
          <li >
            <a href="/editor" class="ai-icon active" aria-expanded="false">
              <i class="flaticon-381-edit-1"></i>
              <span class="nav-text"> Editor</span>
            </a>
          </li>
          <li >
            <a href="/library" class="ai-icon active" aria-expanded="false">
              <i class="fa fa-institution"></i>
              <span class="nav-text"> Library</span>
            </a>
          </li>
          <li >
            <a href="/profile" class="ai-icon active" aria-expanded="false">
              <i class="flaticon-381-user-1"></i>
              <span class="nav-text">User Profile</span>
            </a>
          </li>
        </ul>
        {/* <div class="copyright">
        <p><strong>UjumbePap </strong> © 2022 All Rights Reserved</p> 
      </div> */}
      </div>
    </div>
  </div>
);

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default Sidebar;
