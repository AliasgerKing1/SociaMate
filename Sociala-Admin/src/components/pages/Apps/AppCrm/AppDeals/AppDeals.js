import React from 'react'
import {Link } from "react-router-dom"
import Header from '../../../../shared/Header/Header';
import Footer from '../../../../shared/Footer/Footer';
import NotificationModel from "../../../../shared/NotificationModel/NotificationModel";
import RightMenu from '../../../../shared/RightMenu/RightMenu';
import ChooseLayout from "../../../../shared/ChooseLayout/ChooseLayout";
const AppDeals = () => {
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

                    {/* <!-- start page title --> */}
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">Deals</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><Link to="/admin/crm">CRM</Link></li>
                                        <li className="breadcrumb-item active">Deals</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- end page title --> */}

                    <div className="card">
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-md-3">
                                    <div className="search-box">
                                        <input type="text" className="form-control search" placeholder="Search for deals..." />
                                        <i className="ri-search-line search-icon"></i>
                                    </div>
                                </div>
                                {/* <!--end col--> */}
                                <div className="col-md-auto ms-auto">
                                    <div className="d-flex hastck gap-2 flex-wrap">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="text-muted">Sort by: </span>
                                            <select className="form-control mb-0" data-choices data-choices-search-false id="choices-single-default">
                                                <option defaultValue="Owner">Owner</option>
                                                <option defaultValue="Company">Company</option>
                                                <option defaultValue="Date">Date</option>
                                            </select>
                                        </div>
                                        <button data-bs-toggle="modal" data-bs-target="#adddeals" className="btn btn-success"><i className="ri-add-fill align-bottom me-1"></i> Add
                                            Deals</button>
                                        <div className="dropdown">
                                            <button className="btn btn-soft-info btn-icon fs-14" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="ri-settings-4-line"></i>
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a className="dropdown-item" href="#">Copy</a></li>
                                                <li><a className="dropdown-item" href="#">Move to pipline</a></li>
                                                <li><a className="dropdown-item" href="#">Add to exceptions</a></li>
                                                <li><a className="dropdown-item" href="#">Switch to common form view</a>
                                                </li>
                                                <li><a className="dropdown-item" href="#">Reset form view to default</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end col--> */}
                            </div>
                            {/* <!--end row--> */}
                        </div>
                    </div>
                    {/* <!--end card--> */}

                    <div className="row row-cols-xxl-5 row-cols-lg-3 row-cols-md-2 row-cols-1">
                        <div className="col">
                            <div className="card">
                                <a className="card-body bg-soft-danger" data-bs-toggle="collapse" href="#leadDiscovered" role="button" aria-expanded="false" aria-controls="leadDiscovered">
                                    <h5 className="card-title text-uppercase fw-semibold mb-1 fs-15">Lead Discovered</h5>
                                    <p className="text-muted mb-0">$265,200 <span className="fw-medium">4 Deals</span></p>
                                </a>
                            </div>
                            {/* <!--end card--> */}
                            <div className="collapse show" id="leadDiscovered">
                                <div className="card mb-1">
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#leadDiscovered1" role="button" aria-expanded="false" aria-controls="leadDiscovered1">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/users/avatar-1.jpg" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">Managing sales team meeting</h6>
                                                <p className="text-muted mb-0">$87k - 01 Jan, 2022</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed" id="leadDiscovered1">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">Nesta Technologies <small className="badge badge-soft-danger">4 Days</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-question-answer-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Meeting with Thomas</h6>
                                                            <small className="text-muted fs-12">Yesterday at 9:12AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-earth-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Marketing Team Meeting</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer hstack gap-2">
                                            <button className="btn btn-warning btn-sm w-100"><i className="ri-phone-line align-bottom me-1"></i> Call</button>
                                            <button className="btn btn-info btn-sm w-100"><i className="ri-question-answer-line align-bottom me-1"></i>
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                                <div className="card mb-1">
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#leadDiscovered2" role="button" aria-expanded="false" aria-controls="leadDiscovered2">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/users/avatar-2.jpg" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">Airbnb React Development</h6>
                                                <p className="text-muted mb-0">$20.3k - 24 Dec, 2021</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed" id="leadDiscovered2">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">Nesta Technologies <small className="badge badge-soft-danger">4 Days</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-question-answer-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Meeting with Thomas</h6>
                                                            <small className="text-muted fs-12">Yesterday at 9:12AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-earth-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Marketing Team Meeting</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer hstack gap-2">
                                            <button className="btn btn-warning btn-sm w-100"><i className="ri-phone-line align-bottom me-1"></i> Call</button>
                                            <button className="btn btn-info btn-sm w-100"><i className="ri-question-answer-line align-bottom me-1"></i>
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                                <div className="card mb-1 ribbon-box ribbon-fill ribbon-sm">
                                    <div className="ribbon ribbon-info"><i className="ri-flashlight-fill"></i></div>
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#leadDiscovered3" role="button" aria-expanded="false" aria-controls="leadDiscovered3">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/users/avatar-3.jpg" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">Discovery Capital</h6>
                                                <p className="text-muted mb-0">$124.3k - 29 Dec, 2021</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed show" id="leadDiscovered3">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">Nesta Technologies <small className="badge badge-soft-danger">4 Days</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-question-answer-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Meeting with Thomas</h6>
                                                            <small className="text-muted fs-12">Yesterday at 9:12AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-earth-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Marketing Team Meeting</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer hstack gap-2">
                                            <button className="btn btn-warning btn-sm w-100"><i className="ri-phone-line align-bottom me-1"></i> Call</button>
                                            <button className="btn btn-info btn-sm w-100"><i className="ri-question-answer-line align-bottom me-1"></i>
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                                <div className="card">
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#leadDiscovered4" role="button" aria-expanded="false" aria-controls="leadDiscovered4">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/users/avatar-4.jpg" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">Airbnb React Development</h6>
                                                <p className="text-muted mb-0">$33.6k - 24 Dec, 2021</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed" id="leadDiscovered4">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">Nesta Technologies <small className="badge badge-soft-danger">4 Days</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-question-answer-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Meeting with Thomas</h6>
                                                            <small className="text-muted fs-12">Yesterday at 9:12AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-earth-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Marketing Team Meeting</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer hstack gap-2">
                                            <button className="btn btn-warning btn-sm w-100"><i className="ri-phone-line align-bottom me-1"></i> Call</button>
                                            <button className="btn btn-info btn-sm w-100"><i className="ri-question-answer-line align-bottom me-1"></i>
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                            </div>
                        </div>
                        {/* <!--end col--> */}

                        <div className="col">
                            <div className="card">
                                <a className="card-body bg-soft-success" data-bs-toggle="collapse" href="#contactInitiated" role="button" aria-expanded="false" aria-controls="contactInitiated">
                                    <h5 className="card-title text-uppercase fw-semibold mb-1 fs-15">Contact Initiated</h5>
                                    <p className="text-muted mb-0">$108,700 <span className="fw-medium">5 Deals</span></p>
                                </a>
                            </div>
                            {/* <!--end card--> */}
                            <div className="collapse show" id="contactInitiated">
                                <div className="card mb-1 ribbon-box ribbon-fill ribbon-sm">
                                    <div className="ribbon ribbon-info"><i className="ri-flashlight-fill"></i></div>
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#contactInitiated1" role="button" aria-expanded="false" aria-controls="contactInitiated1">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/users/avatar-5.jpg" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">Custom Mobile Apps</h6>
                                                <p className="text-muted mb-0">$28.7k - 13 Dec, 2021</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed" id="contactInitiated1">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">Nesta Technologies <small className="badge badge-soft-danger">4 Days</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-question-answer-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Meeting with Thomas</h6>
                                                            <small className="text-muted fs-12">Yesterday at 9:12AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-earth-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Marketing Team Meeting</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer hstack gap-2">
                                            <button className="btn btn-warning btn-sm w-100"><i className="ri-phone-line align-bottom me-1"></i> Call</button>
                                            <button className="btn btn-info btn-sm w-100"><i className="ri-question-answer-line align-bottom me-1"></i>
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                                <div className="card mb-1">
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#contactInitiated2" role="button" aria-expanded="false" aria-controls="contactInitiated2">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/brands/github.png" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">Investment Deal for Zoetic Fashion</h6>
                                                <p className="text-muted mb-0">$32.8k - 10 Oct, 2021</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed" id="contactInitiated2">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">Zoetic Fashion <small className="badge badge-soft-warning">25 Days</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-question-answer-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Meeting with Thomas</h6>
                                                            <small className="text-muted fs-12">Today at 9:12AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer hstack gap-2">
                                            <button className="btn btn-warning btn-sm w-100"><i className="ri-phone-line align-bottom me-1"></i> Call</button>
                                            <button className="btn btn-info btn-sm w-100"><i className="ri-question-answer-line align-bottom me-1"></i>
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                                <div className="card mb-1">
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#contactInitiated3" role="button" aria-expanded="false" aria-controls="contactInitiated3">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/users/avatar-6.jpg" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">Modern Design</h6>
                                                <p className="text-muted mb-0">$23k - 03 Oct, 2021</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed" id="contactInitiated3">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">Micro Design <small className="badge badge-soft-success">2 Month</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-earth-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Marketing Team Meeting</h6>
                                                            <small className="text-muted fs-12">Today at 11:58AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer hstack gap-2">
                                            <button className="btn btn-warning btn-sm w-100"><i className="ri-phone-line align-bottom me-1"></i> Call</button>
                                            <button className="btn btn-info btn-sm w-100"><i className="ri-question-answer-line align-bottom me-1"></i>
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                                <div className="card mb-1">
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#contactInitiated4" role="button" aria-expanded="false" aria-controls="contactInitiated4">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/users/avatar-7.jpg" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">Hotel Logo Design</h6>
                                                <p className="text-muted mb-0">$10.9k - 05 Jan, 2022</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed" id="contactInitiated4">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">Nesta Technologies <small className="badge badge-soft-danger">4 Days</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-question-answer-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Meeting with Thomas</h6>
                                                            <small className="text-muted fs-12">Yesterday at 9:12AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-earth-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Marketing Team Meeting</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer hstack gap-2">
                                            <button className="btn btn-warning btn-sm w-100"><i className="ri-phone-line align-bottom me-1"></i> Call</button>
                                            <button className="btn btn-info btn-sm w-100"><i className="ri-question-answer-line align-bottom me-1"></i>
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                                <div className="card">
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#contactInitiated5" role="button" aria-expanded="false" aria-controls="contactInitiated5">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/brands/mail_chimp.png" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">Managing Sales</h6>
                                                <p className="text-muted mb-0">$13.3k - 04 Sep, 2021</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed" id="contactInitiated5">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">Nesta Technologies <small className="badge badge-soft-danger">4 Days</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-question-answer-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Meeting with Thomas</h6>
                                                            <small className="text-muted fs-12">Yesterday at 9:12AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-earth-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Marketing Team Meeting</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer hstack gap-2">
                                            <button className="btn btn-warning btn-sm w-100"><i className="ri-phone-line align-bottom me-1"></i> Call</button>
                                            <button className="btn btn-info btn-sm w-100"><i className="ri-question-answer-line align-bottom me-1"></i>
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                            </div>
                        </div>
                        {/* <!--end col--> */}

                        <div className="col">
                            <div className="card">
                                <a className="card-body bg-soft-warning" data-bs-toggle="collapse" href="#needsIdentified" role="button" aria-expanded="false" aria-controls="needsIdentified">
                                    <h5 className="card-title text-uppercase fw-semibold mb-1 fs-15">Needs Identified</h5>
                                    <p className="text-muted mb-0">$708,200 <span className="fw-medium">7 Deals</span></p>
                                </a>
                            </div>
                            {/* <!--end card--> */}
                            <div className="collapse show" id="needsIdentified">
                                <div className="card mb-1">
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#needsIdentified1" role="button" aria-expanded="false" aria-controls="needsIdentified1">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/users/avatar-9.jpg" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">Art Studio Design</h6>
                                                <p className="text-muted mb-0">$147.5k - 24 Sep, 2021</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed" id="needsIdentified1">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">Alexis Clarke <small className="badge badge-soft-danger">7 Days</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-question-answer-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Meeting with Alexis</h6>
                                                            <small className="text-muted fs-12">Yesterday at 9:12AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer hstack gap-2">
                                            <button className="btn btn-warning btn-sm w-100"><i className="ri-phone-line align-bottom me-1"></i> Call</button>
                                            <button className="btn btn-info btn-sm w-100"><i className="ri-question-answer-line align-bottom me-1"></i>
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                                <div className="card mb-1">
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#needsIdentified2" role="button" aria-expanded="false" aria-controls="needsIdentified2">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/users/avatar-8.jpg" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">Billing Page Bug</h6>
                                                <p className="text-muted mb-0">$15.8k - 17 Dec, 2021</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed" id="needsIdentified2">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">Meta4Systems <small className="badge badge-soft-warning">35 Days</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-question-answer-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Meeting with Mary</h6>
                                                            <small className="text-muted fs-12">Yesterday at 9:12AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-earth-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Marketing Team Meeting</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer hstack gap-2">
                                            <button className="btn btn-warning btn-sm w-100"><i className="ri-phone-line align-bottom me-1"></i> Call</button>
                                            <button className="btn btn-info btn-sm w-100"><i className="ri-question-answer-line align-bottom me-1"></i>
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                                <div className="card mb-1">
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#needsIdentified3" role="button" aria-expanded="false" aria-controls="needsIdentified3">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/brands/dribbble.png" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">Food Selection Platform</h6>
                                                <p className="text-muted mb-0">$72.5k - 04 Jan, 2022</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed" id="needsIdentified3">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">Syntyce Solutions <small className="badge badge-soft-danger">15 Days</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-question-answer-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Meeting with Thomas</h6>
                                                            <small className="text-muted fs-12">Yesterday at 9:12AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-earth-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Marketing Team Meeting</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer hstack gap-2">
                                            <button className="btn btn-warning btn-sm w-100"><i className="ri-phone-line align-bottom me-1"></i> Call</button>
                                            <button className="btn btn-info btn-sm w-100"><i className="ri-question-answer-line align-bottom me-1"></i>
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                                <div className="card mb-1 ribbon-box ribbon-fill ribbon-sm">
                                    <div className="ribbon ribbon-info"><i className="ri-flashlight-fill"></i></div>
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#needsIdentified4" role="button" aria-expanded="false" aria-controls="needsIdentified4">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/users/avatar-1.jpg" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">Skote React Development</h6>
                                                <p className="text-muted mb-0">$89.8 - 21 Nov, 2021</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed" id="needsIdentified4">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">Themesbrand <small className="badge badge-soft-danger">3
                                                    Month</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-question-answer-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Meeting with Thomas</h6>
                                                            <small className="text-muted fs-12">Yesterday at 9:12AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-earth-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Marketing Team Meeting</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer hstack gap-2">
                                            <button className="btn btn-warning btn-sm w-100"><i className="ri-phone-line align-bottom me-1"></i> Call</button>
                                            <button className="btn btn-info btn-sm w-100"><i className="ri-question-answer-line align-bottom me-1"></i>
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                                <div className="card mb-1 ribbon-box ribbon-fill ribbon-sm">
                                    <div className="ribbon ribbon-info"><i className="ri-flashlight-fill"></i></div>
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#needsIdentified5" role="button" aria-expanded="false" aria-controls="needsIdentified5">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/users/avatar-2.jpg" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">Velzon - Admin Dashboard</h6>
                                                <p className="text-muted mb-0">$126.7k - 30 Dec, 2021</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed" id="needsIdentified5">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">Themesbrand <small className="badge badge-soft-danger">3
                                                    Days</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-question-answer-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Meeting with Nancy</h6>
                                                            <small className="text-muted fs-12">Yesterday at 9:12AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-earth-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Marketing Team Meeting</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer hstack gap-2">
                                            <button className="btn btn-warning btn-sm w-100"><i className="ri-phone-line align-bottom me-1"></i> Call</button>
                                            <button className="btn btn-info btn-sm w-100"><i className="ri-question-answer-line align-bottom me-1"></i>
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                                <div className="card mb-1">
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#needsIdentified6" role="button" aria-expanded="false" aria-controls="needsIdentified6">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/companies/img-6.png" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">Wood Elements Design</h6>
                                                <p className="text-muted mb-0">$120.2k - 24 Nov, 2021</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed" id="needsIdentified6">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">iTest Factory <small className="badge badge-soft-warning">42 Days</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-question-answer-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Meeting with Thomas</h6>
                                                            <small className="text-muted fs-12">Yesterday at 9:12AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-earth-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Marketing Team Meeting</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer hstack gap-2">
                                            <button className="btn btn-warning btn-sm w-100"><i className="ri-phone-line align-bottom me-1"></i> Call</button>
                                            <button className="btn btn-info btn-sm w-100"><i className="ri-question-answer-line align-bottom me-1"></i>
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                                <div className="card">
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#needsIdentified7" role="button" aria-expanded="false" aria-controls="needsIdentified7">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/users/avatar-10.jpg" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">PayPal SEO audit</h6>
                                                <p className="text-muted mb-0">$135.7k - 23 Nov, 2021</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed" id="needsIdentified7">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">Meta4Systems <small className="badge badge-soft-success">6 Month</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-question-answer-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Meeting with Thomas</h6>
                                                            <small className="text-muted fs-12">Yesterday at 9:12AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-earth-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Marketing Team Meeting</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer hstack gap-2">
                                            <button className="btn btn-warning btn-sm w-100"><i className="ri-phone-line align-bottom me-1"></i> Call</button>
                                            <button className="btn btn-info btn-sm w-100"><i className="ri-question-answer-line align-bottom me-1"></i>
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                            </div>
                        </div>
                        {/* <!--end col--> */}

                        <div className="col">
                            <div className="card">
                                <a className="card-body bg-soft-info" data-bs-toggle="collapse" href="#meetingArranged" role="button" aria-expanded="false" aria-controls="meetingArranged">
                                    <h5 className="card-title text-uppercase fw-semibold mb-1 fs-15">Meeting Arranged</h5>
                                    <p className="text-muted mb-0">$44,900 <span className="fw-medium">3 Deals</span></p>
                                </a>
                            </div>
                            {/* <!--end card--> */}
                            <div className="collapse show" id="meetingArranged">
                                <div className="card mb-1">
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#meetingArranged1" role="button" aria-expanded="false" aria-controls="meetingArranged1">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/companies/img-5.png" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">SASS app workflow diagram</h6>
                                                <p className="text-muted mb-0">$17.8k - 01 Jan, 2022</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed" id="meetingArranged1">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">Nesta Technologies <small className="badge badge-soft-danger">10 Days</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-question-answer-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Meeting with Thomas</h6>
                                                            <small className="text-muted fs-12">Yesterday at 9:12AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-earth-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Marketing Team Meeting</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer hstack gap-2">
                                            <button className="btn btn-warning btn-sm w-100"><i className="ri-phone-line align-bottom me-1"></i> Call</button>
                                            <button className="btn btn-info btn-sm w-100"><i className="ri-question-answer-line align-bottom me-1"></i>
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                                <div className="card mb-1">
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#meetingArranged2" role="button" aria-expanded="false" aria-controls="meetingArranged2">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/users/avatar-3.jpg" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">Uber new brand system</h6>
                                                <p className="text-muted mb-0">$24.5k - 22 Dec, 2021</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed" id="meetingArranged2">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">Nesta Technologies <small className="badge badge-soft-danger">4 Days</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-question-answer-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Meeting with Thomas</h6>
                                                            <small className="text-muted fs-12">Yesterday at 9:12AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-earth-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Marketing Team Meeting</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer hstack gap-2">
                                            <button className="btn btn-warning btn-sm w-100"><i className="ri-phone-line align-bottom me-1"></i> Call</button>
                                            <button className="btn btn-info btn-sm w-100"><i className="ri-question-answer-line align-bottom me-1"></i>
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                                <div className="card">
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#meetingArranged3" role="button" aria-expanded="false" aria-controls="meetingArranged3">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/companies/img-8.png" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">TripAdvisor</h6>
                                                <p className="text-muted mb-0">$2.6k - 12 Dec, 2021</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed" id="meetingArranged3">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">Nesta Technologies <small className="badge badge-soft-danger">4 Days</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-question-answer-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Meeting with Thomas</h6>
                                                            <small className="text-muted fs-12">Yesterday at 9:12AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-earth-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Marketing Team Meeting</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer hstack gap-2">
                                            <button className="btn btn-warning btn-sm w-100"><i className="ri-phone-line align-bottom me-1"></i> Call</button>
                                            <button className="btn btn-info btn-sm w-100"><i className="ri-question-answer-line align-bottom me-1"></i>
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                            </div>
                        </div>
                        {/* <!--end col--> */}

                        <div className="col">
                            <div className="card">
                                <a className="card-body bg-soft-secondary" data-bs-toggle="collapse" href="#offerAccepted" role="button" aria-expanded="false" aria-controls="offerAccepted">
                                    <h5 className="card-title text-uppercase fw-semibold mb-1 fs-15">Offer Accepted</h5>
                                    <p className="text-muted mb-0">$819,300 <span className="fw-medium">8 Deals</span></p>
                                </a>
                            </div>
                            {/* <!--end card--> */}
                            <div className="collapse show" id="offerAccepted">
                                <div className="card mb-1">
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#offerAccepted1" role="button" aria-expanded="false" aria-controls="offerAccepted1">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/users/avatar-10.jpg" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">Coupon Website</h6>
                                                <p className="text-muted mb-0">$27.4k - 07 Jan, 2021</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed" id="offerAccepted1">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">Nesta Technologies <small className="badge badge-soft-danger">4 Days</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-question-answer-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Meeting with Thomas</h6>
                                                            <small className="text-muted fs-12">Yesterday at 9:12AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-earth-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Marketing Team Meeting</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer hstack gap-2">
                                            <button className="btn btn-warning btn-sm w-100"><i className="ri-phone-line align-bottom me-1"></i> Call</button>
                                            <button className="btn btn-info btn-sm w-100"><i className="ri-question-answer-line align-bottom me-1"></i>
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                                <div className="card mb-1 ribbon-box ribbon-fill ribbon-sm">
                                    <div className="ribbon ribbon-info"><i className="ri-flashlight-fill"></i></div>
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#offerAccepted2" role="button" aria-expanded="false" aria-controls="offerAccepted2">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/brands/slack.png" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">Marketing Automation Demo</h6>
                                                <p className="text-muted mb-0">$94.8 - 19 Nov, 2021</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed" id="offerAccepted2">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">Nesta Technologies <small className="badge badge-soft-warning">47 Days</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-question-answer-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Meeting with Thomas</h6>
                                                            <small className="text-muted fs-12">Yesterday at 9:12AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-earth-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Marketing Team Meeting</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer hstack gap-2">
                                            <button className="btn btn-warning btn-sm w-100"><i className="ri-phone-line align-bottom me-1"></i> Call</button>
                                            <button className="btn btn-info btn-sm w-100"><i className="ri-question-answer-line align-bottom me-1"></i>
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                                <div className="card mb-1">
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#offerAccepted3" role="button" aria-expanded="false" aria-controls="offerAccepted3">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/users/avatar-4.jpg" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">New Email Design Templates</h6>
                                                <p className="text-muted mb-0">$136.9k - 05 Jan, 2022</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed" id="offerAccepted3">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">Nesta Technologies <small className="badge badge-soft-danger">4 Days</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-question-answer-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Meeting with Thomas</h6>
                                                            <small className="text-muted fs-12">Yesterday at 9:12AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-earth-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Marketing Team Meeting</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                                <div className="card mb-1">
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#offerAccepted4" role="button" aria-expanded="false" aria-controls="offerAccepted4">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/users/avatar-7.jpg" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">Create New Components</h6>
                                                <p className="text-muted mb-0">$45.9k - 26 Dec, 2021</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed" id="offerAccepted4">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">Nesta Technologies <small className="badge badge-soft-success">4 Month</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-question-answer-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Meeting with Thomas</h6>
                                                            <small className="text-muted fs-12">Yesterday at 9:12AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-earth-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Marketing Team Meeting</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer hstack gap-2">
                                            <button className="btn btn-warning btn-sm w-100"><i className="ri-phone-line align-bottom me-1"></i> Call</button>
                                            <button className="btn btn-info btn-sm w-100"><i className="ri-question-answer-line align-bottom me-1"></i>
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                                <div className="card mb-1 ribbon-box ribbon-fill ribbon-sm">
                                    <div className="ribbon ribbon-info"><i className="ri-flashlight-fill"></i></div>
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#offerAccepted5" role="button" aria-expanded="false" aria-controls="offerAccepted5">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/companies/img-3.png" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">New Test Tickets</h6>
                                                <p className="text-muted mb-0">$118k - 01 Jan, 2022</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed" id="offerAccepted5">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">Nesta Technologies <small className="badge badge-soft-danger">4 Days</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-question-answer-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Meeting with Thomas</h6>
                                                            <small className="text-muted fs-12">Yesterday at 9:12AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-earth-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Marketing Team Meeting</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer hstack gap-2">
                                            <button className="btn btn-warning btn-sm w-100"><i className="ri-phone-line align-bottom me-1"></i> Call</button>
                                            <button className="btn btn-info btn-sm w-100"><i className="ri-question-answer-line align-bottom me-1"></i>
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                                <div className="card mb-1 ribbon-box ribbon-fill ribbon-sm">
                                    <div className="ribbon ribbon-info"><i className="ri-flashlight-fill"></i></div>
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#offerAccepted6" role="button" aria-expanded="false" aria-controls="offerAccepted6">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/users/avatar-6.jpg" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">Recover Deleted Folder</h6>
                                                <p className="text-muted mb-0">$87.3k - 03 Jan, 2022</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed" id="offerAccepted6">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">Nesta Technologies <small className="badge badge-soft-danger">14 Days</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-question-answer-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Meeting with Thomas</h6>
                                                            <small className="text-muted fs-12">Yesterday at 9:12AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-earth-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Marketing Team Meeting</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer hstack gap-2">
                                            <button className="btn btn-warning btn-sm w-100"><i className="ri-phone-line align-bottom me-1"></i> Call</button>
                                            <button className="btn btn-info btn-sm w-100"><i className="ri-question-answer-line align-bottom me-1"></i>
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                                <div className="card mb-1">
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#offerAccepted7" role="button" aria-expanded="false" aria-controls="offerAccepted7">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/brands/github.png" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">Github SEO audit</h6>
                                                <p className="text-muted mb-0">$241.2k - 21 Sep, 2021</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed" id="offerAccepted7">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">Nesta Technologies <small className="badge badge-soft-danger">4 Days</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-question-answer-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Meeting with Thomas</h6>
                                                            <small className="text-muted fs-12">Yesterday at 9:12AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-earth-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Marketing Team Meeting</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer hstack gap-2">
                                            <button className="btn btn-warning btn-sm w-100"><i className="ri-phone-line align-bottom me-1"></i> Call</button>
                                            <button className="btn btn-info btn-sm w-100"><i className="ri-question-answer-line align-bottom me-1"></i>
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                                <div className="card">
                                    <div className="card-body">
                                        <a className="d-flex align-items-center" data-bs-toggle="collapse" href="#offerAccepted8" role="button" aria-expanded="false" aria-controls="offerAccepted8">
                                            <div className="flex-shrink-0">
                                                <img src="/assets/images/users/avatar-2.jpg" alt="" className="avatar-xs rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-15 mb-1">Urban Modern Design</h6>
                                                <p className="text-muted mb-0">$67.8k - 09 Oct, 2021</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="collapse border-top border-top-dashed" id="offerAccepted8">
                                        <div className="card-body">
                                            <h6 className="fs-15 mb-1">Nesta Technologies <small className="badge badge-soft-danger">4 Days</small></h6>
                                            <p className="text-muted">As a company grows however, you find it's not as easy
                                                to shout across</p>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-question-answer-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Meeting with Thomas</h6>
                                                            <small className="text-muted fs-12">Yesterday at 9:12AM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-mac-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Product Demo</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 avatar-xxs text-muted">
                                                            <i className="ri-earth-line"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-0">Marketing Team Meeting</h6>
                                                            <small className="text-muted fs-12">Monday at 04:41PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer hstack gap-2">
                                            <button className="btn btn-warning btn-sm w-100"><i className="ri-phone-line align-bottom me-1"></i> Call</button>
                                            <button className="btn btn-info btn-sm w-100"><i className="ri-question-answer-line align-bottom me-1"></i>
                                                Message</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end card--> */}
                            </div>
                        </div>
                        {/* <!--end col--> */}
                    </div>
                    {/* <!--end row--> */}


                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="adddeals" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header bg-light p-3">
                                    <h5 className="modal-title" id="exampleModalLabel">Create Deals</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <form className="needs-validation" noValidate id="deals-form">
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label htmlFor="deatType" className="form-label">Deals Type</label>
                                            <select className="form-select" id="deatType" data-choices aria-label="Default select example" required>
                                                <option defaultValue="" data-custom-properties="[object Object]">Select deals type</option>
                                                <option defaultValue="Lead Disovered">Lead Disovered</option>
                                                <option defaultValue="Contact Initiated">Contact Initiated</option>
                                                <option defaultValue="Need Identified">Need Identified</option>
                                                <option defaultValue="Meeting Arranged">Meeting Arranged</option>
                                                <option defaultValue="Offer Accepted">Offer Accepted</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please write an deals owner name.
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="dealTitle" className="form-label">Deal Title</label>
                                            <input type="text" className="form-control" id="dealTitle" placeholder="Enter title" required />
                                            <div className="invalid-feedback">
                                                Please write a title.
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="dealValue" className="form-label">Value (USD)</label>
                                            <input type="number" className="form-control" id="dealValue" step="0.01" placeholder="Enter value" required />
                                            <div className="invalid-feedback">
                                                Please write a value.
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="dealOwner" className="form-label">Deals Owner</label>
                                            <input type="text" className="form-control" id="dealOwner" required placeholder="Enter owner name" />
                                            <div className="invalid-feedback">
                                                Please write an deals owner name.
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="dueDate" className="form-label">Due Date</label>
                                            <input type="text" className="form-control" id="dueDate" data-provider="flatpickr" placeholder="Select date" required />
                                            <div className="invalid-feedback">
                                                Please select a due date.
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="dealEmail" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="dealEmail" placeholder="Enter email" required />
                                            <div className="invalid-feedback">
                                                Please write a email.
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="contactNumber" className="form-label">Contact</label>
                                            <input type="text" className="form-control" id="contactNumber" placeholder="Enter contact number" required />
                                            <div className="invalid-feedback">
                                                Please add a contact.
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="contactDescription" className="form-label">Description</label>
                                            <textarea className="form-control" id="contactDescription" rows="3" placeholder="Enter description" required></textarea>
                                            <div className="invalid-feedback">
                                                Please add a description.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-light" id="close-modal" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-success"><i className="ri-save-line align-bottom me-1"></i> Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <!--end modal--> */}

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

export default AppDeals;