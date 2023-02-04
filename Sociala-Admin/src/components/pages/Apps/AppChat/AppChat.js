import React from 'react'
import {Link } from "react-router-dom"
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';
import NotificationModel from "../../../shared/NotificationModel/NotificationModel";
import RightMenu from '../../../shared/RightMenu/RightMenu';
import ChooseLayout from "../../../shared/ChooseLayout/ChooseLayout";
const AppChat = () => {
    let online = true;
  return (
    <div>

    {/* <!-- Begin page --> */}
    <div id="layout-wrapper">

    <Header/>

<NotificationModel/>
<RightMenu/>
        {/* <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== --> */}
        <div className="main-content">

            <div className="page-content">
                <div className="container-fluid">
                    <div className="chat-wrapper d-lg-flex gap-1 mx-n4 mt-n4 p-1">
                        <div className="chat-leftsidebar">
                            <div className="px-4 pt-4 mb-4">
                                <div className="d-flex align-items-start">
                                    <div className="flex-grow-1">
                                        <h5 className="mb-4">Chats</h5>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="Add Contact">

                                            {/* <!-- Button trigger modal --> */}
                                            <button type="button" className="btn btn-soft-success btn-sm">
                                                <i className="ri-add-line align-bottom"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="search-box">
                                    <input type="text" className="form-control bg-light border-light" placeholder="Search here..." />
                                    <i className="ri-search-2-line search-icon"></i>
                                </div>

                            </div> 
                            {/* <!-- .p-4 --> */}

                            <ul className="nav nav-tabs nav-tabs-custom nav-success nav-justified" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-bs-toggle="tab" href="#chats" role="tab">
                                        Chats
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#contacts" role="tab">
                                        Contacts
                                    </a>
                                </li>
                            </ul>

                            <div className="tab-content text-muted">
                                <div className="tab-pane active" id="chats" role="tabpanel">
                                    <div className="chat-room-list pt-3" data-simplebar>
                                        <div className="d-flex align-items-center px-4 mb-2">
                                            <div className="flex-grow-1">
                                                <h4 className="mb-0 fs-12 text-muted text-uppercase">Direct Messages</h4>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="New Message">
        
                                                    {/* <!-- Button trigger modal --> */}
                                                    <button type="button" className="btn btn-soft-success btn-sm shadow-none">
                                                        <i className="ri-add-line align-bottom"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
        
                                        <div className="chat-message-list">
        
                                            <ul className="list-unstyled chat-list chat-user-list" id="userList">
                                                
                                            </ul>
                                        </div>
        
                                        <div className="d-flex align-items-center px-4 mt-4 pt-2 mb-2">
                                            <div className="flex-grow-1">
                                                <h4 className="mb-0 fs-11 text-muted text-uppercase">Channels</h4>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="Create group">
                                                    {/* <!-- Button trigger modal --> */}
                                                    <button type="button" className="btn btn-soft-success btn-sm">
                                                        <i className="ri-add-line align-bottom"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
        
                                        <div className="chat-message-list">
        
                                            <ul className="list-unstyled chat-list chat-user-list mb-0" id="channelList">
                                            </ul>
                                        </div>
                                        {/* <!-- End chat-message-list --> */}
                                    </div>
                                </div>
                                <div className="tab-pane" id="contacts" role="tabpanel">
                                    <div className="chat-room-list pt-3" data-simplebar>
                                        <div className="sort-contact">            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end tab contact --> */}
                        </div>
                        {/* <!-- end chat leftsidebar --> */}
                        {/* <!-- Start User chat --> */}
                        <div className="user-chat w-100 overflow-hidden">

                            <div className="chat-content d-lg-flex">
                                {/* <!-- start chat conversation section --> */}
                                <div className="w-100 overflow-hidden position-relative">
                                    {/* <!-- conversation user --> */}
                                    <div className="position-relative">
                                        

{
    online ? (<Online/>) : ( <Offline/>)
}
                                    

                         

                                        {/* <!-- end chat-conversation --> */}

                                        <div className="chat-input-section p-3 p-lg-4">

                                            <form id="chatinput-form" encType="multipart/form-data">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-auto">
                                                        <div className="chat-input-links me-2">
                                                            <div className="links-list-item">
                                                                <button type="button" className="btn btn-link text-decoration-none emoji-btn" id="emoji-btn">
                                                                    <i className="bx bx-smile align-middle"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col">
                                                        <div className="chat-input-feedback">
                                                            Please Enter a Message
                                                        </div>
                                                        <input type="text" className="form-control chat-input bg-light border-light" id="chat-input" placeholder="Type your message..." autoComplete="off" />
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="chat-input-links ms-2">
                                                            <div className="links-list-item">
                                                                <button type="submit" className="btn btn-success chat-send waves-effect waves-light">
                                                                    <i className="ri-send-plane-2-fill align-bottom"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </form>
                                        </div>

                                        <div className="replyCard">
                                            <div className="card mb-0">
                                                <div className="card-body py-3">
                                                    <div className="replymessage-block mb-0 d-flex align-items-start">
                                                        <div className="flex-grow-1">
                                                            <h5 className="conversation-name"></h5>
                                                            <p className="mb-0"></p>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <button type="button" id="close_toggle" className="btn btn-sm btn-link mt-n2 me-n3 fs-18">
                                                                <i className="bx bx-x align-middle"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end chat-wrapper --> */}

                </div>
                {/* <!-- container-fluid --> */}
            </div>
            {/* <!-- End Page-content --> */}

            <Footer/>
        </div>
        {/* <!-- end main content--> */}

    </div>
    {/* <!-- END layout-wrapper --> */}

    <div className="offcanvas offcanvas-end border-0" tabIndex="-1" id="userProfileCanvasExample">
        {/* <!--end offcanvas-header--> */}
        <div className="offcanvas-body profile-offcanvas p-0">
            <div className="team-cover">
                <img src="/assets/images/small/img-9.jpg" alt="" className="img-fluid" />
            </div>
            <div className="p-1 pb-4 pt-0">
                <div className="team-settings">
                    <div className="row g-0">
                        <div className="col">
                            <div className="btn nav-btn">
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="user-chat-nav d-flex">
                                <button type="button" className="btn nav-btn favourite-btn active">
                                    <i className="ri-star-fill"></i>
                                </button>

                                <div className="dropdown">
                                    <a className="btn nav-btn" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><a className="dropdown-item" href="#"><i className="ri-inbox-archive-line align-bottom text-muted me-2"></i>Archive</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="ri-mic-off-line align-bottom text-muted me-2"></i>Muted</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="ri-delete-bin-5-line align-bottom text-muted me-2"></i>Delete</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!--end col--> */}
            </div>
            <div className="p-3 text-center">
                <img src="/assets/images/users/avatar-2.jpg" alt="" className="avatar-lg img-thumbnail rounded-circle mx-auto profile-img" />
                <div className="mt-3">
                    <h5 className="fs-16 mb-1"><a href="#" className="link-primary username">Lisa Parker</a></h5>
                    <p className="text-muted"><i className="ri-checkbox-blank-circle-fill me-1 align-bottom text-success"></i>Online</p>
                </div>

                <div className="d-flex gap-3 justify-content-center">
                    <button type="button" className="btn avatar-xs p-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Message">
                        <span className="avatar-title rounded bg-light text-body">
                            <i className="ri-question-answer-line"></i>
                        </span>
                    </button>

                    <button type="button" className="btn avatar-xs p-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite">
                        <span className="avatar-title rounded bg-light text-body">
                            <i className="ri-star-line"></i>
                        </span>
                    </button>

                    <button type="button" className="btn avatar-xs p-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Phone">
                        <span className="avatar-title rounded bg-light text-body">
                            <i className="ri-phone-line"></i>
                        </span>
                    </button>

                    <div className="dropdown">
                        <button className="btn avatar-xs p-0" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="avatar-title bg-light text-body rounded">
                                <i className="ri-more-fill"></i>
                            </span>
                        </button>

                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" href="#"><i className="ri-inbox-archive-line align-bottom text-muted me-2"></i>Archive</a></li>
                            <li><a className="dropdown-item" href="#"><i className="ri-mic-off-line align-bottom text-muted me-2"></i>Muted</a></li>
                            <li><a className="dropdown-item" href="#"><i className="ri-delete-bin-5-line align-bottom text-muted me-2"></i>Delete</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-top border-top-dashed p-3">
                <h5 className="fs-15 mb-3">Personal Details</h5>
                <div className="mb-3">
                    <p className="text-muted text-uppercase fw-medium fs-13 mb-1">Number</p>
                    <h6>+(256) 2451 8974</h6>
                </div>
                <div className="mb-3">
                    <p className="text-muted text-uppercase fw-medium fs-13 mb-1">Email</p>
                    <h6>lisaparker@gmail.com</h6>
                </div>
                <div>
                    <p className="text-muted text-uppercase fw-medium fs-13 mb-1">Location</p>
                    <h6 className="mb-0">California, USA</h6>
                </div>
            </div>

            <div className="border-top border-top-dashed p-3">
                <h5 className="fs-15 mb-3">Attached Files</h5>

                <div className="vstack gap-2">
                    <div className="border rounded border-dashed p-2">
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 me-3">
                                <div className="avatar-xs">
                                    <div className="avatar-title bg-light text-secondary rounded fs-20">
                                        <i className="ri-folder-zip-line"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                                <h5 className="fs-15 mb-1"><a href="#" className="text-body text-truncate d-block">App pages.zip</a></h5>
                                <div className="text-muted">2.2MB</div>
                            </div>
                            <div className="flex-shrink-0 ms-2">
                                <div className="d-flex gap-1">
                                    <button type="button" className="btn btn-icon text-muted btn-sm fs-18"><i className="ri-download-2-line"></i></button>
                                    <div className="dropdown">
                                        <button className="btn btn-icon text-muted btn-sm fs-18 dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ri-more-fill"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#"><i className="ri-share-line align-bottom me-2 text-muted"></i> Share</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="ri-bookmark-line align-bottom me-2 text-muted"></i> Bookmark</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="ri-delete-bin-line align-bottom me-2 text-muted"></i> Delete</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border rounded border-dashed p-2">
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 me-3">
                                <div className="avatar-xs">
                                    <div className="avatar-title bg-light text-secondary rounded fs-20">
                                        <i className="ri-file-ppt-2-line"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                                <h5 className="fs-15 mb-1"><a href="#" className="text-body text-truncate d-block">Velzon admin.ppt</a></h5>
                                <div className="text-muted">2.4MB</div>
                            </div>
                            <div className="flex-shrink-0 ms-2">
                                <div className="d-flex gap-1">
                                    <button type="button" className="btn btn-icon text-muted btn-sm fs-18"><i className="ri-download-2-line"></i></button>
                                    <div className="dropdown">
                                        <button className="btn btn-icon text-muted btn-sm fs-18 dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ri-more-fill"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#"><i className="ri-share-line align-bottom me-2 text-muted"></i> Share</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="ri-bookmark-line align-bottom me-2 text-muted"></i> Bookmark</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="ri-delete-bin-line align-bottom me-2 text-muted"></i> Delete</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border rounded border-dashed p-2">
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 me-3">
                                <div className="avatar-xs">
                                    <div className="avatar-title bg-light text-secondary rounded fs-20">
                                        <i className="ri-folder-zip-line"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                                <h5 className="fs-15 mb-1"><a href="#" className="text-body text-truncate d-block">Images.zip</a></h5>
                                <div className="text-muted">1.2MB</div>
                            </div>
                            <div className="flex-shrink-0 ms-2">
                                <div className="d-flex gap-1">
                                    <button type="button" className="btn btn-icon text-muted btn-sm fs-18"><i className="ri-download-2-line"></i></button>
                                    <div className="dropdown">
                                        <button className="btn btn-icon text-muted btn-sm fs-18 dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ri-more-fill"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#"><i className="ri-share-line align-bottom me-2 text-muted"></i> Share</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="ri-bookmark-line align-bottom me-2 text-muted"></i> Bookmark</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="ri-delete-bin-line align-bottom me-2 text-muted"></i> Delete</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border rounded border-dashed p-2">
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 me-3">
                                <div className="avatar-xs">
                                    <div className="avatar-title bg-light text-secondary rounded fs-20">
                                        <i className="ri-image-2-line"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                                <h5 className="fs-15 mb-1"><a href="#" className="text-body text-truncate d-block">bg-pattern.png</a></h5>
                                <div className="text-muted">1.1MB</div>
                            </div>
                            <div className="flex-shrink-0 ms-2">
                                <div className="d-flex gap-1">
                                    <button type="button" className="btn btn-icon text-muted btn-sm fs-18"><i className="ri-download-2-line"></i></button>
                                    <div className="dropdown">
                                        <button className="btn btn-icon text-muted btn-sm fs-18 dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ri-more-fill"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#"><i className="ri-share-line align-bottom me-2 text-muted"></i> Share</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="ri-bookmark-line align-bottom me-2 text-muted"></i> Bookmark</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="ri-delete-bin-line align-bottom me-2 text-muted"></i> Delete</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-2">
                        <button type="button" className="btn btn-danger">Load more <i className="ri-arrow-right-fill align-bottom ms-1"></i></button>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--end offcanvas-body--> */}
    </div>
    {/* <!--end offcanvas--> */}



    {/* <!--start back-to-top--> */}
    <button className="btn btn-danger btn-icon" id="back-to-top">
        <i className="ri-arrow-up-line"></i>
    </button>
    {/* <!--end back-to-top--> */}

    {/* <!--preloader--> */}
    {/* <div id="preloader">
        <div id="status">
            <div className="spinner-border text-primary avatar-sm" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </div> */}

    <div className="customizer-setting d-none d-md-block">
        <div className="btn-info btn-rounded shadow-lg btn btn-icon btn-lg p-2" data-bs-toggle="offcanvas" data-bs-target="#theme-settings-offcanvas" aria-controls="theme-settings-offcanvas">
            <i className='mdi mdi-spin mdi-cog-outline fs-22'></i>
        </div>
    </div>

    {/* <!-- Theme Settings --> */}
    <ChooseLayout/>
   </div>
  )
}

export default AppChat;

let Online = () => {
return(
    <div className="position-relative" id="users-chat">
    <div className="p-3 user-chat-topbar">
        <div className="row align-items-center">
            <div className="col-sm-4 col-8">
                <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 d-block d-lg-none me-3">
                        <a href="#" className="user-chat-remove fs-18 p-1"><i className="ri-arrow-left-s-line align-bottom"></i></a>
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                                <img src="/assets/images/users/avatar-2.jpg" className="rounded-circle avatar-xs" alt="" />
                                <span className="user-status"></span>
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                                <h5 className="text-truncate mb-0 fs-16"><a className="text-reset username" data-bs-toggle="offcanvas" href="#userProfileCanvasExample" aria-controls="userProfileCanvasExample">Lisa Parker</a></h5>
                                <p className="text-truncate text-muted mb-0 userStatus"><span>Online</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-8 col-4">
                <ul className="list-inline user-chat-nav text-end mb-0">
                    <li className="list-inline-item m-0">
                        <div className="dropdown">
                            <button className="btn btn-ghost-secondary btn-icon" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i data-feather="search" className="icon-sm"></i>
                            </button>
                            <div className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg">
                                <div className="p-2">
                                    <div className="search-box">
                                        <input type="text" className="form-control bg-light border-light" placeholder="Search here..."  id="searchMessage" />
                                        <i className="ri-search-2-line search-icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="list-inline-item d-none d-lg-inline-block m-0">
                        <button type="button" className="btn btn-ghost-secondary btn-icon" data-bs-toggle="offcanvas" data-bs-target="#userProfileCanvasExample" aria-controls="userProfileCanvasExample">
                            <i data-feather="info" className="icon-sm"></i>
                        </button>
                    </li>

                    <li className="list-inline-item m-0">
                        <div className="dropdown">
                            <button className="btn btn-ghost-secondary btn-icon" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i data-feather="more-vertical" className="icon-sm"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item d-block d-lg-none user-profile-show" href="#"><i className="ri-user-2-fill align-bottom text-muted me-2"></i> View Profile</a>
                                <a className="dropdown-item" href="#"><i className="ri-inbox-archive-line align-bottom text-muted me-2"></i> Archive</a>
                                <a className="dropdown-item" href="#"><i className="ri-mic-off-line align-bottom text-muted me-2"></i> Muted</a>
                                <a className="dropdown-item" href="#"><i className="ri-delete-bin-5-line align-bottom text-muted me-2"></i> Delete</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </div>
    {/* <!-- end chat user head --> */}
    <div className="chat-conversation p-3 p-lg-4 " id="chat-conversation" data-simplebar>
        {/* <div id="elmLoader">
            <div className="spinner-border text-primary avatar-sm" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div> */}
        <ul className="list-unstyled chat-conversation-list" id="users-conversation">
            
        </ul>
        {/* <!-- end chat-conversation-list --> */}
    </div>
    <div className="alert alert-warning alert-dismissible copyclipboard-alert px-4 fade show " id="copyClipBoard" role="alert">
        Message copied
    </div>
</div>
)
}
let Offline = () => {
return(
    <>
                  <div className="position-relative" id="channel-chat">
                                            <div className="p-3 user-chat-topbar">
                                            <div className="row align-items-center">
                                                <div className="col-sm-4 col-8">
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0 d-block d-lg-none me-3">
                                                            <a href="#" className="user-chat-remove fs-18 p-1"><i className="ri-arrow-left-s-line align-bottom"></i></a>
                                                        </div>
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                                                                    <img src="/assets/images/users/avatar-2.jpg" className="rounded-circle avatar-xs" alt="" />
                                                                </div>
                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <h5 className="text-truncate mb-0 fs-16"><a className="text-reset username" data-bs-toggle="offcanvas" href="#userProfileCanvasExample" aria-controls="userProfileCanvasExample">Lisa Parker</a></h5>
                                                                    <p className="text-truncate text-muted fs-14 mb-0 userStatus"><small>24 Members</small></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-8 col-4">
                                                    <ul className="list-inline user-chat-nav text-end mb-0">
                                                        <li className="list-inline-item m-0">
                                                            <div className="dropdown">
                                                                <button className="btn btn-ghost-secondary btn-icon" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i data-feather="search" className="icon-sm"></i>
                                                                </button>
                                                                <div className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg">
                                                                    <div className="p-2">
                                                                        <div className="search-box">
                                                                            <input type="text" className="form-control bg-light border-light" placeholder="Search here..." id="searchMessage" />
                                                                            <i className="ri-search-2-line search-icon"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li className="list-inline-item d-none d-lg-inline-block m-0">
                                                            <button type="button" className="btn btn-ghost-secondary btn-icon" data-bs-toggle="offcanvas" data-bs-target="#userProfileCanvasExample" aria-controls="userProfileCanvasExample">
                                                                <i data-feather="info" className="icon-sm"></i>
                                                            </button>
                                                        </li>

                                                        <li className="list-inline-item m-0">
                                                            <div className="dropdown">
                                                                <button className="btn btn-ghost-secondary btn-icon" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i data-feather="more-vertical" className="icon-sm"></i>
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-end">
                                                                    <a className="dropdown-item d-block d-lg-none user-profile-show" href="#"><i className="ri-user-2-fill align-bottom text-muted me-2"></i> View Profile</a>
                                                                    <a className="dropdown-item" href="#"><i className="ri-inbox-archive-line align-bottom text-muted me-2"></i> Archive</a>
                                                                    <a className="dropdown-item" href="#"><i className="ri-mic-off-line align-bottom text-muted me-2"></i> Muted</a>
                                                                    <a className="dropdown-item" href="#"><i className="ri-delete-bin-5-line align-bottom text-muted me-2"></i> Delete</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        {/* <!-- end chat user head --> */}
                                            <div className="chat-conversation p-3 p-lg-4" id="chat-conversation" data-simplebar>
                                                <ul className="list-unstyled chat-conversation-list" id="channel-conversation">       
                                                </ul>
                                                {/* <!-- end chat-conversation-list --> */}

                                            </div>
                                            <div className="alert alert-warning alert-dismissible copyclipboard-alert px-4 fade show " id="copyClipBoardChannel" role="alert">
                                                Message copied
                                            </div>
                                        </div>

    </>
)
}