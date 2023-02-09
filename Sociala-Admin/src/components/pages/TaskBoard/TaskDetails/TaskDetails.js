import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux"

import {getTaskDetailsById} from "../../../../Services/TaskBoardService/TaskBoardService";
import { getTaskById } from '../../../../Redux/TaskDetailsReducer';

import Header from "../../../shared/Header/Header";
import Footer from "../../../shared/Footer/Footer";
import NotificationModel from "../../../shared/NotificationModel/NotificationModel";
import RightMenu from "../../../shared/RightMenu/RightMenu";
import ChooseLayout from "../../../shared/ChooseLayout/ChooseLayout";
import Timer from '../../../shared/Task/Timer';

const TaskDetails = () => {
    let params = useParams();
    let dispatch = useDispatch();
let state = useSelector(state=>state.TaskDetailsReducer);
const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

let timer;
  useEffect(() => {

timer = setInterval(()=> {
setSeconds(seconds + 1)
}, 1000)

  });
    let id;
    let getDetails = async() => {
         id = params.id;
        let result = await getTaskDetailsById(id);
        dispatch(getTaskById(result.data));
    }
    useEffect(()=> {
        if(state.length == 0) {
            getDetails();
        }  
    },[])

  return (
    <>
    {/* <!-- Begin page --> */}
    <div id="layout-wrapper">
    <Header />

<NotificationModel />
<RightMenu />

        {/* <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== --> */}
        <div className="main-content">

            <div className="page-content">
                <div className="container-fluid">

                    {/* <!-- start page title --> */}
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">Task Details</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><a href="#">Tasks</a></li>
                                        <li className="breadcrumb-item active">Task Details</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- end page title --> */}

                    <div className="row">
                        <div className="col-xxl-3">
<Timer/>
                            {/* <!--end card--> */}
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="mb-4">
                                        <select className="form-control" name="choices-single-default" data-choices data-choices-search-false>
                                            <option value="">Select Task board</option>
                                            <option value="unassigned">Unassigned</option>
                                            <option value="todo">To Do</option>
                                            <option value="inprogress">Inprogress</option>
                                            <option value="inreviews">In Reviews</option>
                                            <option value="completed">Completed</option>
                                        </select>
                                    </div>
                                    <div className="table-card">
                                        <table className="table mb-0">
                                            <tbody>
                                                <tr>
                                                    <td className="fw-medium">Tasks No</td>
                                                    <td>#VLZ456</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">Tasks Title</td>
                                                    <td>Fund Collection</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">Project Name</td>
                                                    <td>{state.name}</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">Priority</td>
                                                    <td><span className="badge badge-soft-danger">High</span></td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">Status</td>
                                                    <td><span className="badge badge-soft-secondary">Inprogress</span></td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">Due Date</td>
                                                    <td>07 jan 2023</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        {/* <!--end table--> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!--end card--> */}
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="d-flex mb-3">
                                        <h6 className="card-title mb-0 flex-grow-1">Assigned To</h6>
                                        <div className="flex-shrink-0">
                                            <button type="button" className="btn btn-soft-danger btn-sm" data-bs-toggle="modal" data-bs-target="#inviteMembersModal"><i className="ri-share-line me-1 align-bottom"></i> Assigned Member</button>
                                        </div>
                                    </div>
                                    <ul className="list-unstyled vstack gap-3 mb-0">
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <img src="/assets/images/users/avatar-10.jpg" alt="" className="avatar-xs rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    <h6 className="mb-1 fs-15"><a href="pages-profile.html">Tonya Noble</a></h6>
                                                    <p className="text-muted mb-0">Full Stack Developer</p>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <div className="dropdown">
                                                        <button className="btn btn-icon btn-sm fs-16 text-muted dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="ri-more-fill"></i>
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#"><i className="ri-eye-fill text-muted me-2 align-bottom"></i>View</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="ri-star-fill text-muted me-2 align-bottom"></i>Favourite</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <img src="/assets/images/users/avatar-8.jpg" alt="" className="avatar-xs rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    <h6 className="mb-1 fs-15"><a href="pages-profile.html">Thomas Taylor</a></h6>
                                                    <p className="text-muted mb-0">UI/UX Designer</p>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <div className="dropdown">
                                                        <button className="btn btn-icon btn-sm fs-16 text-muted dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="ri-more-fill"></i>
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#"><i className="ri-eye-fill text-muted me-2 align-bottom"></i>View</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="ri-star-fill text-muted me-2 align-bottom"></i>Favourite</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <img src="/assets/images/users/avatar-2.jpg" alt="" className="avatar-xs rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    <h6 className="mb-1 fs-15"><a href="pages-profile.html">Nancy Martino</a></h6>
                                                    <p className="text-muted mb-0">Web Designer</p>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <div className="dropdown">
                                                        <button className="btn btn-icon btn-sm fs-16 text-muted dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="ri-more-fill"></i>
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#"><i className="ri-eye-fill text-muted me-2 align-bottom"></i>View</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="ri-star-fill text-muted me-2 align-bottom"></i>Favourite</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!--end card--> */}
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title mb-3">Attachments</h5>
                                    <div className="vstack gap-2">
                                        <div className="border rounded border-dashed p-2">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar-sm">
                                                        <div className="avatar-title bg-light text-secondary rounded fs-24">
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
                                                                <li><a className="dropdown-item" href="#"><i className="ri-pencil-fill align-bottom me-2 text-muted"></i> Rename</a></li>
                                                                <li><a className="dropdown-item" href="#"><i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border rounded border-dashed p-2">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar-sm">
                                                        <div className="avatar-title bg-light text-secondary rounded fs-24">
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
                                                                <li><a className="dropdown-item" href="#"><i className="ri-pencil-fill align-bottom me-2 text-muted"></i> Rename</a></li>
                                                                <li><a className="dropdown-item" href="#"><i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border rounded border-dashed p-2">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar-sm">
                                                        <div className="avatar-title bg-light text-secondary rounded fs-24">
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
                                                                <li><a className="dropdown-item" href="#"><i className="ri-pencil-fill align-bottom me-2 text-muted"></i> Rename</a></li>
                                                                <li><a className="dropdown-item" href="#"><i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2 text-center">
                                            <button type="button" className="btn btn-secondary">View more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end card--> */}
                        </div>
                        {/* <!---end col--> */}
                        <div className="col-xxl-9">
                            <div className="card">
                                <div className="card-body">
                                    <div className="text-muted">
                                        <h6 className="mb-3 fw-semibold text-uppercase">Summary</h6>
                                        <p>It will be as simple as occidental in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>

                                        <h6 className="mb-3 fw-semibold text-uppercase">Sub-tasks</h6>
                                        <ul className=" ps-3 list-unstyled vstack gap-2">
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="productTask" />
                                                    <label className="form-check-label" htmlFor="productTask">
                                                        Product Design, Figma (Software), Prototype
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="dashboardTask" />
                                                    <label className="form-check-label" htmlFor="dashboardTask">
                                                        Dashboards : Ecommerce, Analytics, Project,etc.
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="calenderTask" />
                                                    <label className="form-check-label" htmlFor="calenderTask">
                                                        Create calendar, chat and email app pages
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="authenticationTask" />
                                                    <label className="form-check-label" htmlFor="authenticationTask">
                                                        Add authentication pages
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>

                                        <div className="pt-3 border-top border-top-dashed mt-4">
                                            <h6 className="mb-3 fw-semibold text-uppercase">Tasks Tags</h6>
                                            <div className="hstack flex-wrap gap-2 fs-15">
                                                <div className="badge fw-medium badge-soft-info">UI/UX</div>
                                                <div className="badge fw-medium badge-soft-info">Dashboard</div>
                                                <div className="badge fw-medium badge-soft-info">Design</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end card--> */}
                            <div className="card">
                                <div className="card-header">
                                    <div>
                                        <ul className="nav nav-tabs-custom rounded card-header-tabs border-bottom-0" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-bs-toggle="tab" href="#home-1" role="tab">
                                                    Comments (5)
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" href="#messages-1" role="tab">
                                                    Attachments File (4)
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" href="#profile-1" role="tab">
                                                    Time Entries (9 hrs 13 min)
                                                </a>
                                            </li>
                                        </ul>
                                        {/* <!--end nav--> */}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="home-1" role="tabpanel">
                                            <h5 className="card-title mb-4">Comments</h5>
                                            <div data-simplebar style={{height: '508px'}} className="px-3 mx-n3 mb-2">
                                                <div className="d-flex mb-4">
                                                    <div className="flex-shrink-0">
                                                        <img src="/assets/images/users/avatar-7.jpg" alt="" className="avatar-xs rounded-circle" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h5 className="fs-15"><a href="pages-profile.html">Joseph Parker</a> <small className="text-muted">20 Dec 2021 - 05:47AM</small></h5>
                                                        <p className="text-muted">I am getting message from customers that when they place order always get error message .</p>
                                                        <a href="#" className="badge text-muted bg-light"><i className="mdi mdi-reply"></i> Reply</a>
                                                        <div className="d-flex mt-4">
                                                            <div className="flex-shrink-0">
                                                                <img src="/assets/images/users/avatar-10.jpg" alt="" className="avatar-xs rounded-circle" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h5 className="fs-15"><a href="pages-profile.html">Tonya Noble</a> <small className="text-muted">22 Dec 2021 - 02:32PM</small></h5>
                                                                <p className="text-muted">Please be sure to check your Spam mailbox to see if your email filters have identified the email from Dell as spam.</p>
                                                                <a href="#" className="badge text-muted bg-light"><i className="mdi mdi-reply"></i> Reply</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex mb-4">
                                                    <div className="flex-shrink-0">
                                                        <img src="/assets/images/users/avatar-8.jpg" alt="" className="avatar-xs rounded-circle" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h5 className="fs-15"><a href="pages-profile.html">Thomas Taylor</a> <small className="text-muted">24 Dec 2021 - 05:20PM</small></h5>
                                                        <p className="text-muted">If you have further questions, please contact Customer Support from the “Action Menu” on your <a href="#" className="text-decoration-underline">Online Order Support</a>.</p>
                                                        <a href="#" className="badge text-muted bg-light"><i className="mdi mdi-reply"></i> Reply</a>
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <img src="/assets/images/users/avatar-10.jpg" alt="" className="avatar-xs rounded-circle" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h5 className="fs-15"><a href="pages-profile.html">Tonya Noble</a> <small className="text-muted">26 min ago</small></h5>
                                                        <p className="text-muted">Your <a href="#" className="text-decoration-underline">Online Order Support</a> provides you with the most current status of your order. To help manage your order refer to the “Action Menu” to initiate return, contact Customer Support and more.</p>
                                                        <div className="row g-2 mb-3">
                                                            <div className="col-lg-1 col-sm-2 col-6">
                                                                <img src="/assets/images/small/img-4.jpg" alt="" className="img-fluid rounded" />
                                                            </div>
                                                            <div className="col-lg-1 col-sm-2 col-6">
                                                                <img src="/assets/images/small/img-5.jpg" alt="" className="img-fluid rounded" />
                                                            </div>
                                                        </div>
                                                        <a href="#" className="badge text-muted bg-light"><i className="mdi mdi-reply"></i> Reply</a>
                                                        <div className="d-flex mt-4">
                                                            <div className="flex-shrink-0">
                                                                <img src="/assets/images/users/avatar-6.jpg" alt="" className="avatar-xs rounded-circle" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h5 className="fs-15"><a href="pages-profile.html">Nancy Martino</a> <small className="text-muted">8 sec ago</small></h5>
                                                                <p className="text-muted">Other shipping methods are available at checkout if you want your purchase delivered faster.</p>
                                                                <a href="#" className="badge text-muted bg-light"><i className="mdi mdi-reply"></i> Reply</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <form className="mt-4">
                                                <div className="row g-3">
                                                    <div className="col-lg-12">
                                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Leave a Comments</label>
                                                        <textarea className="form-control bg-light border-light" id="exampleFormControlTextarea1" rows="3" placeholder="Enter comments"></textarea>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-12 text-end">
                                                        <button type="button" className="btn btn-ghost-secondary btn-icon waves-effect me-1"><i className="ri-attachment-line fs-16"></i></button>
                                                        <a href="#" className="btn btn-success">Post Comments</a>
                                                    </div>
                                                </div>
                                                {/* <!--end row--> */}
                                            </form>
                                        </div>
                                        {/* <!--end tab-pane--> */}
                                        <div className="tab-pane" id="messages-1" role="tabpanel">
                                            <div className="table-responsive table-card">
                                                <table className="table table-borderless align-middle mb-0">
                                                    <thead className="table-light text-muted">
                                                        <tr>
                                                            <th scope="col">File Name</th>
                                                            <th scope="col">Type</th>
                                                            <th scope="col">Size</th>
                                                            <th scope="col">Upload Date</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div className="avatar-sm">
                                                                        <div className="avatar-title bg-soft-primary text-primary rounded fs-20">
                                                                            <i className="ri-file-zip-fill"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="ms-3 flex-grow-1">
                                                                        <h6 className="fs-15 mb-0"><a href="#">App pages.zip</a></h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>Zip File</td>
                                                            <td>2.22 MB</td>
                                                            <td>21 Dec, 2021</td>
                                                            <td>
                                                                <div className="dropdown">
                                                                    <a href="#" className="btn btn-light btn-icon" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="true">
                                                                        <i className="ri-equalizer-fill"></i>
                                                                    </a>
                                                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink1" data-popper-placement="bottom-end" style={{position: 'absolute', inset: '0px 0px auto auto', margin: '0px', transform: 'translate(0px, 23px)'}}>
                                                                        <li><a className="dropdown-item" href="#"><i className="ri-eye-fill me-2 align-middle text-muted"></i>View</a></li>
                                                                        <li><a className="dropdown-item" href="#"><i className="ri-download-2-fill me-2 align-middle text-muted"></i>Download</a></li>
                                                                        <li className="dropdown-divider"></li>
                                                                        <li><a className="dropdown-item" href="#"><i className="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div className="avatar-sm">
                                                                        <div className="avatar-title bg-soft-danger text-danger rounded fs-20">
                                                                            <i className="ri-file-pdf-fill"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="ms-3 flex-grow-1">
                                                                        <h6 className="fs-15 mb-0"><a href="#">Velzon admin.ppt</a></h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>PPT File</td>
                                                            <td>2.24 MB</td>
                                                            <td>25 Dec, 2021</td>
                                                            <td>
                                                                <div className="dropdown">
                                                                    <a href="#" className="btn btn-light btn-icon" id="dropdownMenuLink2" data-bs-toggle="dropdown" aria-expanded="true">
                                                                        <i className="ri-equalizer-fill"></i>
                                                                    </a>
                                                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink2" data-popper-placement="bottom-end" style={{position: 'absolute', inset: '0px 0px auto auto', margin: '0px', transform: 'translate(0px, 23px)'}}>
                                                                        <li><a className="dropdown-item" href="#"><i className="ri-eye-fill me-2 align-middle text-muted"></i>View</a></li>
                                                                        <li><a className="dropdown-item" href="#"><i className="ri-download-2-fill me-2 align-middle text-muted"></i>Download</a></li>
                                                                        <li className="dropdown-divider"></li>
                                                                        <li><a className="dropdown-item" href="#"><i className="ri-delete-bin-5-line me-2 align-middle text-muted"></i>Delete</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div className="avatar-sm">
                                                                        <div className="avatar-title bg-soft-info text-info rounded fs-20">
                                                                            <i className="ri-folder-line"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="ms-3 flex-grow-1">
                                                                        <h6 className="fs-15 mb-0"><a href="#">Images.zip</a></h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>ZIP File</td>
                                                            <td>1.02 MB</td>
                                                            <td>28 Dec, 2021</td>
                                                            <td>
                                                                <div className="dropdown">
                                                                    <a href="#" className="btn btn-light btn-icon" id="dropdownMenuLink3" data-bs-toggle="dropdown" aria-expanded="true">
                                                                        <i className="ri-equalizer-fill"></i>
                                                                    </a>
                                                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink3" data-popper-placement="bottom-end" style={{position: 'absolute', inset: '0px 0px auto auto', margin: '0px', transform: 'translate(0px, 23px)'}}>
                                                                        <li><a className="dropdown-item" href="#"><i className="ri-eye-fill me-2 align-middle"></i>View</a></li>
                                                                        <li><a className="dropdown-item" href="#"><i className="ri-download-2-fill me-2 align-middle"></i>Download</a></li>
                                                                        <li><a className="dropdown-item" href="#"><i className="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div className="avatar-sm">
                                                                        <div className="avatar-title bg-soft-danger text-danger rounded fs-20">
                                                                            <i className="ri-image-2-fill"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="ms-3 flex-grow-1">
                                                                        <h6 className="fs-15 mb-0"><a href="#">Bg-pattern.png</a></h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>PNG File</td>
                                                            <td>879 KB</td>
                                                            <td>02 Nov 2021</td>
                                                            <td>
                                                                <div className="dropdown">
                                                                    <a href="#" className="btn btn-light btn-icon" id="dropdownMenuLink4" data-bs-toggle="dropdown" aria-expanded="true">
                                                                        <i className="ri-equalizer-fill"></i>
                                                                    </a>
                                                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink4" data-popper-placement="bottom-end" style={{position: 'absolute', inset: '0px 0px auto auto', margin: '0px', transform: 'translate(0px, 23px)'}}>
                                                                        <li><a className="dropdown-item" href="#"><i className="ri-eye-fill me-2 align-middle"></i>View</a></li>
                                                                        <li><a className="dropdown-item" href="#"><i className="ri-download-2-fill me-2 align-middle"></i>Download</a></li>
                                                                        <li><a className="dropdown-item" href="#"><i className="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                {/* <!--end table--> */}
                                            </div>
                                        </div>
                                        {/* <!--end tab-pane--> */}
                                        <div className="tab-pane" id="profile-1" role="tabpanel">
                                            <h6 className="card-title mb-4 pb-2">Time Entries</h6>
                                            <div className="table-responsive table-card">
                                                <table className="table align-middle mb-0">
                                                    <thead className="table-light text-muted">
                                                        <tr>
                                                            <th scope="col">Member</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Duration</th>
                                                            <th scope="col">Timer Idle</th>
                                                            <th scope="col">Tasks Title</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">
                                                                <div className="d-flex align-items-center">
                                                                    <img src="/assets/images/users/avatar-8.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                                    <div className="flex-grow-1 ms-2">
                                                                        <a href="pages-profile.html" className="fw-medium">Thomas Taylor</a>
                                                                    </div>
                                                                </div>
                                                            </th>
                                                            <td>02 Jan, 2022</td>
                                                            <td>3 hrs 12 min</td>
                                                            <td>05 min</td>
                                                            <td>Apps Pages</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src="/assets/images/users/avatar-10.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                                    <div className="flex-grow-1 ms-2">
                                                                        <a href="pages-profile.html" className="fw-medium">Tonya Noble</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>28 Dec, 2021</td>
                                                            <td>1 hrs 35 min</td>
                                                            <td>-</td>
                                                            <td>Profile Page Design</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                <div className="d-flex align-items-center">
                                                                    <img src="/assets/images/users/avatar-10.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                                    <div className="flex-grow-1 ms-2">
                                                                        <a href="pages-profile.html" className="fw-medium">Tonya Noble</a>
                                                                    </div>
                                                                </div>
                                                            </th>
                                                            <td>27 Dec, 2021</td>
                                                            <td>4 hrs 26 min</td>
                                                            <td>03 min</td>
                                                            <td>Ecommerce Dashboard</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                {/* <!--end table--> */}
                                            </div>
                                        </div>
                                        {/* <!--edn tab-pane--> */}

                                    </div>
                                    {/* <!--end tab-content--> */}
                                </div>
                            </div>
                            {/* <!--end card--> */}
                        </div>
                        {/* <!--end col--> */}
                    </div>
                    {/* <!--end row--> */}

                    <div className="modal fade" id="inviteMembersModal" tabIndex="-1" aria-labelledby="inviteMembersModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content border-0">
                                <div className="modal-header p-3 ps-4 bg-soft-success">
                                    <h5 className="modal-title" id="inviteMembersModalLabel">Team Members</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body p-4">
                                    <div className="search-box mb-3">
                                        <input type="text" className="form-control bg-light border-light" placeholder="Search here..." />
                                        <i className="ri-search-line search-icon"></i>
                                    </div>

                                    <div className="mb-4 d-flex align-items-center">
                                        <div className="me-2">
                                            <h5 className="mb-0 fs-13">Members :</h5>
                                        </div>
                                        <div className="avatar-group justify-content-center">
                                            <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Tonya Noble">
                                                <div className="avatar-xs">
                                                    <img src="/assets/images/users/avatar-10.jpg" alt="" className="rounded-circle img-fluid" />
                                                </div>
                                            </a>
                                            <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Thomas Taylor">
                                                <div className="avatar-xs">
                                                    <img src="/assets/images/users/avatar-8.jpg" alt="" className="rounded-circle img-fluid" />
                                                </div>
                                            </a>
                                            <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Nancy Martino">
                                                <div className="avatar-xs">
                                                    <img src="/assets/images/users/avatar-2.jpg" alt="" className="rounded-circle img-fluid" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mx-n4 px-4" data-simplebar style={{maxHeight: '225px'}}>
                                        <div className="vstack gap-3">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-xs flex-shrink-0 me-3">
                                                    <img src="/assets/images/users/avatar-2.jpg" alt="" className="img-fluid rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-13 mb-0"><a href="#" className="text-body d-block">Nancy Martino</a></h5>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <button type="button" className="btn btn-light btn-sm">Add</button>
                                                </div>
                                            </div>
                                            {/* <!-- end member item --> */}
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-xs flex-shrink-0 me-3">
                                                    <div className="avatar-title bg-soft-danger text-danger rounded-circle">
                                                        HB
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-13 mb-0"><a href="#" className="text-body d-block">Henry Baird</a></h5>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <button type="button" className="btn btn-light btn-sm">Add</button>
                                                </div>
                                            </div>
                                            {/* <!-- end member item --> */}
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-xs flex-shrink-0 me-3">
                                                    <img src="/assets/images/users/avatar-3.jpg" alt="" className="img-fluid rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-13 mb-0"><a href="#" className="text-body d-block">Frank Hook</a></h5>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <button type="button" className="btn btn-light btn-sm">Add</button>
                                                </div>
                                            </div>
                                            {/* <!-- end member item --> */}
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-xs flex-shrink-0 me-3">
                                                    <img src="/assets/images/users/avatar-4.jpg" alt="" className="img-fluid rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-13 mb-0"><a href="#" className="text-body d-block">Jennifer Carter</a></h5>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <button type="button" className="btn btn-light btn-sm">Add</button>
                                                </div>
                                            </div>
                                            {/* <!-- end member item --> */}
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-xs flex-shrink-0 me-3">
                                                    <div className="avatar-title bg-soft-success text-success rounded-circle">
                                                        AC
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-13 mb-0"><a href="#" className="text-body d-block">Alexis Clarke</a></h5>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <button type="button" className="btn btn-light btn-sm">Add</button>
                                                </div>
                                            </div>
                                            {/* <!-- end member item --> */}
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-xs flex-shrink-0 me-3">
                                                    <img src="/assets/images/users/avatar-7.jpg" alt="" className="img-fluid rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-13 mb-0"><a href="#" className="text-body d-block">Joseph Parker</a></h5>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <button type="button" className="btn btn-light btn-sm">Add</button>
                                                </div>
                                            </div>
                                            {/* <!-- end member item --> */}
                                        </div>
                                        {/* <!-- end list --> */}
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-light w-xs" data-bs-dismiss="modal">Cancel</button>
                                    <button type="button" className="btn btn-success w-xs">Assigned</button>
                                </div>
                            </div>
                            {/* <!-- end modal-content --> */}
                        </div>
                        {/* <!-- modal-dialog --> */}
                    </div>
                    {/* <!-- end modal --> */}

                </div>
                {/* <!-- container-fluid --> */}
            </div>
            {/* <!-- End Page-content --> */}

            <Footer/>
        </div>
        {/* <!-- end main content--> */}

    </div>
    {/* <!-- END layout-wrapper --> */}



    {/* <!--start back-to-top--> */}
    <button className="btn btn-danger btn-icon" id="back-to-top">
        <i className="ri-arrow-up-line"></i>
    </button>
    {/* <!--end back-to-top--> */}


    <div className="customizer-setting d-none d-md-block">
        <div className="btn-info btn-rounded shadow-lg btn btn-icon btn-lg p-2" data-bs-toggle="offcanvas" data-bs-target="#theme-settings-offcanvas" aria-controls="theme-settings-offcanvas">
            <i className='mdi mdi-spin mdi-cog-outline fs-22'></i>
        </div>
    </div>

    {/* <!-- Theme Settings --> */}
    <ChooseLayout/>
     </>
  )
}

export default TaskDetails


































// <div className="timer" role="timer">
// <div className="col-4">
//   <div className="box">
//     <p id="day">{days < 10 ? "0" + days : days}</p>
//     <span className="text">Days</span>
//   </div>
// </div>
// <div className="col-4">
//   <div className="box">
//     <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
//     <span className="text">Hours</span>
//   </div>
// </div>
// <div className="col-4">
//   <div className="box">
//     <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
//     <span className="text">Minutes</span>
//   </div>
// </div>
// <div className="col-4">
//   <div className="box">
//     <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
//     <span className="text">Seconds</span>
//   </div>
// </div>
// </div>