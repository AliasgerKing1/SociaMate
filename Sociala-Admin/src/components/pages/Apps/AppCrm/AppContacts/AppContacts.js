import React from 'react'
import {Link } from "react-router-dom"
import Header from '../../../../shared/Header/Header';
import Footer from '../../../../shared/Footer/Footer';
import NotificationModel from "../../../../shared/NotificationModel/NotificationModel";
import RightMenu from '../../../../shared/RightMenu/RightMenu';
import ChooseLayout from "../../../../shared/ChooseLayout/ChooseLayout";
const AppContacts = () => {
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
                                <h4 className="mb-sm-0">Contacts</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><Link to="/admin/crm">CRM</Link></li>
                                        <li className="breadcrumb-item active">Contacts</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- end page title --> */}

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="flex-grow-1">
                                            <button className="btn btn-info add-btn" data-bs-toggle="modal" data-bs-target="#showModal"><i className="ri-add-fill me-1 align-bottom"></i> Add Contacts</button>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <div className="hstack text-nowrap gap-2">
                                                <button className="btn btn-danger" id="remove-actions" onClick="deleteMultiple()"><i className="ri-delete-bin-2-line"></i></button>
                                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addmembers"><i className="ri-filter-2-line me-1 align-bottom"></i> Filters</button>
                                                <button className="btn btn-soft-success">Import</button>
                                                <button type="button" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-soft-info"><i className="ri-more-2-fill"></i></button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                                    <li><a className="dropdown-item" href="#">All</a></li>
                                                    <li><a className="dropdown-item" href="#">Last Week</a></li>
                                                    <li><a className="dropdown-item" href="#">Last Month</a></li>
                                                    <li><a className="dropdown-item" href="#">Last Year</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--end col--> */}
                        <div className="col-xxl-9">
                            <div className="card" id="contactList">
                                <div className="card-header">
                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <div className="search-box">
                                                <input type="text" className="form-control search" placeholder="Search for contact..." />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-auto ms-auto">
                                            <div className="d-flex align-items-center gap-2">
                                                <span className="text-muted">Sort by: </span>
                                                <select className="form-control mb-0" data-choices data-choices-search-false id="choices-single-default">
                                                    <option value="Name">Name</option>
                                                    <option value="Company">Company</option>
                                                    <option value="Lead">Lead</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div>
                                        <div className="table-responsive table-card mb-3">
                                            <table className="table align-middle table-nowrap mb-0" id="customerTable">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th scope="col" style={{width: '50px'}}>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="checkAll" value="option" />
                                                            </div>
                                                        </th>
                                                        <th className="sort" data-sort="name" scope="col">Name</th>
                                                        <th className="sort" data-sort="company_name" scope="col">Company
                                                        </th>
                                                        {/* <!-- <th className="sort" data-sort="designation" scope="col">Designation
                                                            </th> --> */}
                                                        <th className="sort" data-sort="email_id" scope="col">Email ID</th>
                                                        <th className="sort" data-sort="phone" scope="col">Phone No</th>
                                                        <th className="sort" data-sort="lead_score" scope="col">Lead Score
                                                        </th>
                                                        <th className="sort" data-sort="tags" scope="col">Tags</th>
                                                        <th className="sort" data-sort="date" scope="col">Last Contacted
                                                        </th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="list form-check-all">
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" value="option1" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{display:'none'}}><a href="#" className="fw-medium link-primary">#VZ001</a>
                                                        </td>
                                                        <td className="name">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0"><img src="/assets/images/users/avatar-10.jpg" alt="" className="avatar-xs rounded-circle" /></div>
                                                                <div className="flex-grow-1 ms-2 name">Tonya Noble</div>
                                                            </div>
                                                        </td>
                                                        <td className="company_name">Nesta Technologies</td>
                                                        {/* <!-- <td className="designation">Lead Designer / Developer</td> --> */}
                                                        <td className="email_id">tonyanoble@velzon.com</td>
                                                        <td className="phone">414-453-5725</td>
                                                        <td className="lead_score">154</td>
                                                        <td className="tags">
                                                            <span className="badge badge-soft-primary">Lead</span>
                                                            <span className="badge badge-soft-primary">Partner</span>
                                                        </td>
                                                        <td className="date">15 Dec, 2021 <small className="text-muted">08:58AM</small></td>
                                                        <td>
                                                            <ul className="list-inline hstack gap-2 mb-0">
                                                                <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Call">
                                                                    <a href="#" className="text-muted d-inline-block">
                                                                        <i className="ri-phone-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Message">
                                                                    <a href="#" className="text-muted d-inline-block">
                                                                        <i className="ri-question-answer-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <div className="dropdown">
                                                                        <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i className="ri-more-fill align-middle"></i>
                                                                        </button>
                                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                                            <li><a className="dropdown-item view-item-btn" href="#"><i className="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                                                    View</a></li>
                                                                            <li><a className="dropdown-item edit-item-btn" href="#showModal" data-bs-toggle="modal"><i className="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                                                    Edit</a></li>
                                                                            <li>
                                                                                <a className="dropdown-item remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                                                    <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                                                    Delete
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" value="option1" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{display:'none'}}><a href="#" className="fw-medium link-primary">#VZ001</a>
                                                        </td>
                                                        <td className="name">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0"><img src="/assets/images/users/avatar-9.jpg" alt="" className="avatar-xs rounded-circle" /></div>
                                                                <div className="flex-grow-1 ms-2 name">Tonya Noble</div>
                                                            </div>
                                                        </td>
                                                        <td className="company_name">Nesta Technologies</td>
                                                        {/* <!-- <td className="designation">Lead Designer / Developer</td> --> */}
                                                        <td className="email_id">tonyanoble@velzon.com</td>
                                                        <td className="phone">414-453-5725</td>
                                                        <td className="lead_score">154</td>
                                                        <td className="tags">
                                                            <span className="badge badge-soft-primary">Lead</span>
                                                            <span className="badge badge-soft-primary">Partner</span>
                                                        </td>
                                                        <td className="date">15 Dec, 2021 <small className="text-muted">08:58AM</small></td>
                                                        <td>
                                                            <ul className="list-inline hstack gap-2 mb-0">
                                                                <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Call">
                                                                    <a href="#" className="text-muted d-inline-block">
                                                                        <i className="ri-phone-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Message">
                                                                    <a href="#" className="text-muted d-inline-block">
                                                                        <i className="ri-question-answer-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <div className="dropdown">
                                                                        <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i className="ri-more-fill align-middle"></i>
                                                                        </button>
                                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                                            <li><a className="dropdown-item view-item-btn" href="#"><i className="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                                                    View</a></li>
                                                                            <li><a className="dropdown-item edit-item-btn" href="#showModal" data-bs-toggle="modal"><i className="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                                                    Edit</a></li>
                                                                            <li>
                                                                                <a className="dropdown-item remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                                                    <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                                                    Delete
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" value="option1" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{display:'none'}}><a href="#" className="fw-medium link-primary">#VZ001</a>
                                                        </td>
                                                        <td className="name">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0"><img src="/assets/images/users/avatar-8.jpg" alt="" className="avatar-xs rounded-circle" /></div>
                                                                <div className="flex-grow-1 ms-2 name">Tonya Noble</div>
                                                            </div>
                                                        </td>
                                                        <td className="company_name">Nesta Technologies</td>
                                                        {/* <!-- <td className="designation">Lead Designer / Developer</td> --> */}
                                                        <td className="email_id">tonyanoble@velzon.com</td>
                                                        <td className="phone">414-453-5725</td>
                                                        <td className="lead_score">154</td>
                                                        <td className="tags">
                                                            <span className="badge badge-soft-primary">Lead</span>
                                                            <span className="badge badge-soft-primary">Partner</span>
                                                        </td>
                                                        <td className="date">15 Dec, 2021 <small className="text-muted">08:58AM</small></td>
                                                        <td>
                                                            <ul className="list-inline hstack gap-2 mb-0">
                                                                <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Call">
                                                                    <a href="#" className="text-muted d-inline-block">
                                                                        <i className="ri-phone-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Message">
                                                                    <a href="#" className="text-muted d-inline-block">
                                                                        <i className="ri-question-answer-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <div className="dropdown">
                                                                        <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i className="ri-more-fill align-middle"></i>
                                                                        </button>
                                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                                            <li><a className="dropdown-item view-item-btn" href="#"><i className="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                                                    View</a></li>
                                                                            <li><a className="dropdown-item edit-item-btn" href="#showModal" data-bs-toggle="modal"><i className="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                                                    Edit</a></li>
                                                                            <li>
                                                                                <a className="dropdown-item remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                                                    <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                                                    Delete
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" value="option1" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{display:'none'}}><a href="#" className="fw-medium link-primary">#VZ001</a>
                                                        </td>
                                                        <td className="name">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0"><img src="/assets/images/users/avatar-6.jpg" alt="" className="avatar-xs rounded-circle" /></div>
                                                                <div className="flex-grow-1 ms-2 name">Tonya Noble</div>
                                                            </div>
                                                        </td>
                                                        <td className="company_name">Nesta Technologies</td>
                                                        {/* <!-- <td className="designation">Lead Designer / Developer</td> --> */}
                                                        <td className="email_id">tonyanoble@velzon.com</td>
                                                        <td className="phone">414-453-5725</td>
                                                        <td className="lead_score">154</td>
                                                        <td className="tags">
                                                            <span className="badge badge-soft-primary">Lead</span>
                                                            <span className="badge badge-soft-primary">Partner</span>
                                                        </td>
                                                        <td className="date">15 Dec, 2021 <small className="text-muted">08:58AM</small></td>
                                                        <td>
                                                            <ul className="list-inline hstack gap-2 mb-0">
                                                                <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Call">
                                                                    <a href="#" className="text-muted d-inline-block">
                                                                        <i className="ri-phone-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Message">
                                                                    <a href="#" className="text-muted d-inline-block">
                                                                        <i className="ri-question-answer-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <div className="dropdown">
                                                                        <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i className="ri-more-fill align-middle"></i>
                                                                        </button>
                                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                                            <li><a className="dropdown-item view-item-btn" href="#"><i className="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                                                    View</a></li>
                                                                            <li><a className="dropdown-item edit-item-btn" href="#showModal" data-bs-toggle="modal"><i className="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                                                    Edit</a></li>
                                                                            <li>
                                                                                <a className="dropdown-item remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                                                    <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                                                    Delete
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" value="option1" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{display:'none'}}><a href="#" className="fw-medium link-primary">#VZ001</a>
                                                        </td>
                                                        <td className="name">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0"><img src="/assets/images/users/avatar-4.jpg" alt="" className="avatar-xs rounded-circle" /></div>
                                                                <div className="flex-grow-1 ms-2 name">Tonya Noble</div>
                                                            </div>
                                                        </td>
                                                        <td className="company_name">Nesta Technologies</td>
                                                        {/* <!-- <td className="designation">Lead Designer / Developer</td> --> */}
                                                        <td className="email_id">tonyanoble@velzon.com</td>
                                                        <td className="phone">414-453-5725</td>
                                                        <td className="lead_score">154</td>
                                                        <td className="tags">
                                                            <span className="badge badge-soft-primary">Lead</span>
                                                            <span className="badge badge-soft-primary">Partner</span>
                                                        </td>
                                                        <td className="date">15 Dec, 2021 <small className="text-muted">08:58AM</small></td>
                                                        <td>
                                                            <ul className="list-inline hstack gap-2 mb-0">
                                                                <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Call">
                                                                    <a href="#" className="text-muted d-inline-block">
                                                                        <i className="ri-phone-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Message">
                                                                    <a href="#" className="text-muted d-inline-block">
                                                                        <i className="ri-question-answer-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <div className="dropdown">
                                                                        <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i className="ri-more-fill align-middle"></i>
                                                                        </button>
                                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                                            <li><a className="dropdown-item view-item-btn" href="#"><i className="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                                                    View</a></li>
                                                                            <li><a className="dropdown-item edit-item-btn" href="#showModal" data-bs-toggle="modal"><i className="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                                                    Edit</a></li>
                                                                            <li>
                                                                                <a className="dropdown-item remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                                                    <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                                                    Delete
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" value="option1" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{display:'none'}}><a href="#" className="fw-medium link-primary">#VZ001</a>
                                                        </td>
                                                        <td className="name">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0"><img src="/assets/images/users/avatar-3.jpg" alt="" className="avatar-xs rounded-circle" /></div>
                                                                <div className="flex-grow-1 ms-2 name">Tonya Noble</div>
                                                            </div>
                                                        </td>
                                                        <td className="company_name">Nesta Technologies</td>
                                                        {/* <!-- <td className="designation">Lead Designer / Developer</td> --> */}
                                                        <td className="email_id">tonyanoble@velzon.com</td>
                                                        <td className="phone">414-453-5725</td>
                                                        <td className="lead_score">154</td>
                                                        <td className="tags">
                                                            <span className="badge badge-soft-primary">Lead</span>
                                                            <span className="badge badge-soft-primary">Partner</span>
                                                        </td>
                                                        <td className="date">15 Dec, 2021 <small className="text-muted">08:58AM</small></td>
                                                        <td>
                                                            <ul className="list-inline hstack gap-2 mb-0">
                                                                <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Call">
                                                                    <a href="#" className="text-muted d-inline-block">
                                                                        <i className="ri-phone-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Message">
                                                                    <a href="#" className="text-muted d-inline-block">
                                                                        <i className="ri-question-answer-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <div className="dropdown">
                                                                        <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i className="ri-more-fill align-middle"></i>
                                                                        </button>
                                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                                            <li><a className="dropdown-item view-item-btn" href="#"><i className="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                                                    View</a></li>
                                                                            <li><a className="dropdown-item edit-item-btn" href="#showModal" data-bs-toggle="modal"><i className="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                                                    Edit</a></li>
                                                                            <li>
                                                                                <a className="dropdown-item remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                                                    <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                                                    Delete
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" value="option1" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{display:'none'}}><a href="#" className="fw-medium link-primary">#VZ001</a>
                                                        </td>
                                                        <td className="name">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0"><img src="/assets/images/users/avatar-1.jpg" alt="" className="avatar-xs rounded-circle" /></div>
                                                                <div className="flex-grow-1 ms-2 name">Tonya Noble</div>
                                                            </div>
                                                        </td>
                                                        <td className="company_name">Nesta Technologies</td>
                                                        {/* <!-- <td className="designation">Lead Designer / Developer</td> --> */}
                                                        <td className="email_id">tonyanoble@velzon.com</td>
                                                        <td className="phone">414-453-5725</td>
                                                        <td className="lead_score">154</td>
                                                        <td className="tags">
                                                            <span className="badge badge-soft-primary">Lead</span>
                                                            <span className="badge badge-soft-primary">Partner</span>
                                                        </td>
                                                        <td className="date">15 Dec, 2021 <small className="text-muted">08:58AM</small></td>
                                                        <td>
                                                            <ul className="list-inline hstack gap-2 mb-0">
                                                                <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Call">
                                                                    <a href="#" className="text-muted d-inline-block">
                                                                        <i className="ri-phone-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Message">
                                                                    <a href="#" className="text-muted d-inline-block">
                                                                        <i className="ri-question-answer-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <div className="dropdown">
                                                                        <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i className="ri-more-fill align-middle"></i>
                                                                        </button>
                                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                                            <li><a className="dropdown-item view-item-btn" href="#"><i className="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                                                    View</a></li>
                                                                            <li><a className="dropdown-item edit-item-btn" href="#showModal" data-bs-toggle="modal"><i className="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                                                    Edit</a></li>
                                                                            <li>
                                                                                <a className="dropdown-item remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                                                    <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                                                    Delete
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="noresult" style={{display: 'none'}}>
                                                <div className="text-center">
                                                    <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop" colors="primary:#121331,secondary:#08a88a" style={{width:'75px',height:'75px'}}>
                                                    </lord-icon>
                                                    <h5 className="mt-2">Sorry! No Result Found</h5>
                                                    <p className="text-muted mb-0">We've searched more than 150+ contacts We did not find any
                                                        contacts for you search.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end mt-3">
                                            <div className="pagination-wrap hstack gap-2">
                                                <a className="page-item pagination-prev disabled" href="#">
                                                    Previous
                                                </a>
                                                <ul className="pagination listjs-pagination mb-0"></ul>
                                                <a className="page-item pagination-next" href="#">
                                                    Next
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal fade" id="showModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content border-0">
                                                <div className="modal-header bg-soft-info p-3">
                                                    <h5 className="modal-title" id="exampleModalLabel"></h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close-modal"></button>
                                                </div>
                                                <form className="tablelist-form" autocomplete="off">
                                                    <div className="modal-body">
                                                        <input type="hidden" id="id-field" />
                                                        <div className="row g-3">
                                                            <div className="col-lg-12">
                                                                <div className="text-center">
                                                                    <div className="position-relative d-inline-block">
                                                                        <div className="position-absolute  bottom-0 end-0">
                                                                            <label htmlFor="customer-image-input" className="mb-0" data-bs-toggle="tooltip" data-bs-placement="right" title="Select Image">
                                                                                <div className="avatar-xs cursor-pointer">
                                                                                    <div className="avatar-title bg-light border rounded-circle text-muted">
                                                                                        <i className="ri-image-fill"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </label>
                                                                            <input className="form-control d-none" value="" id="customer-image-input" type="file" accept="image/png, image/gif, image/jpeg" />
                                                                        </div>
                                                                        <div className="avatar-lg p-1">
                                                                            <div className="avatar-title bg-light rounded-circle">
                                                                                <img src="/assets/images/users/user-dummy-img.jpg" id="customer-img" className="avatar-md rounded-circle object-cover" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <label htmlFor="name-field" className="form-label">Name</label>
                                                                    <input type="text" id="customername-field" className="form-control" placeholder="Enter name" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div>
                                                                    <label htmlFor="company_name-field" className="form-label">Company Name</label>
                                                                    <input type="text" id="company_name-field" className="form-control" placeholder="Enter company name" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div>
                                                                    <label htmlFor="designation-field" className="form-label">Designation</label>
                                                                    <input type="text" id="designation-field" className="form-control" placeholder="Enter Designation" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div>
                                                                    <label htmlFor="email_id-field" className="form-label">Email ID</label>
                                                                    <input type="text" id="email_id-field" className="form-control" placeholder="Enter email" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div>
                                                                    <label htmlFor="phone-field" className="form-label">Phone</label>
                                                                    <input type="text" id="phone-field" className="form-control" placeholder="Enter phone no" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div>
                                                                    <label htmlFor="lead_score-field" className="form-label">Lead Score</label>
                                                                    <input type="text" id="lead_score-field" className="form-control" placeholder="Enter value" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div>
                                                                    <label htmlFor="taginput-choices" className="form-label font-size-13 text-muted">Tags</label>
                                                                    <select className="form-control" name="taginput-choices" id="taginput-choices" multiple>
                                                                        <option value="Lead">Lead</option>
                                                                        <option value="Partner">Partner</option>
                                                                        <option value="Exiting">Exiting</option>
                                                                        <option value="Long-term">Long-term</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <div className="hstack gap-2 justify-content-end">
                                                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                                            <button type="submit" className="btn btn-success" id="add-btn">Add Contact</button>
                                                            {/* <!-- <button type="button" className="btn btn-success" id="edit-btn">Update</button> --> */}
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--end add modal--> */}

                                    <div className="modal fade zoomIn" id="deleteRecordModal" tabindex="-1" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="btn-close" id="deleteRecord-close"  data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body p-5 text-center">
                                                    <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop" colors="primary:#405189,secondary:#f06548" style={{width:'90px',height:'90px'}}></lord-icon>
                                                    <div className="mt-4 text-center">
                                                        <h4 className="fs-semibold">You are about to delete a contact ?</h4>
                                                        <p className="text-muted fs-14 mb-4 pt-1">Deleting your contact will remove all of your information from our database.</p>
                                                        <div className="hstack gap-2 justify-content-center remove">
                                                            <button className="btn btn-link link-success fw-medium text-decoration-none" id="deleteRecord-close" data-bs-dismiss="modal"><i className="ri-close-line me-1 align-middle"></i> Close</button>
                                                            <button className="btn btn-danger" id="delete-record">Yes, Delete It!!</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--end delete modal --> */}

                                </div>
                            </div>
                            {/* <!--end card--> */}
                        </div>
                        {/* <!--end col--> */}
                        <div className="col-xxl-3">
                            <div className="card" id="contact-view-detail">
                                <div className="card-body text-center">
                                    <div className="position-relative d-inline-block">
                                        <img src="/assets/images/users/avatar-10.jpg" alt="" className="avatar-lg rounded-circle img-thumbnail" />
                                        <span className="contact-active position-absolute rounded-circle bg-success"><span className="visually-hidden"></span></span>
                                    </div>
                                    <h5 className="mt-4 mb-1">Tonya Noble</h5>
                                    <p className="text-muted">Nesta Technologies</p>

                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item avatar-xs">
                                            <a href="#" className="avatar-title bg-soft-success text-success fs-15 rounded">
                                                <i className="ri-phone-line"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item avatar-xs">
                                            <a href="#" className="avatar-title bg-soft-danger text-danger fs-15 rounded">
                                                <i className="ri-mail-line"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item avatar-xs">
                                            <a href="#" className="avatar-title bg-soft-warning text-warning fs-15 rounded">
                                                <i className="ri-question-answer-line"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body">
                                    <h6 className="text-muted text-uppercase fw-semibold mb-3">Personal Information</h6>
                                    <p className="text-muted mb-4">Hello, I'm Tonya Noble, The most effective objective is one that is tailored to the job you are applying for. It states what kind of career you are seeking, and what skills and experiences.</p>
                                    <div className="table-responsive table-card">
                                        <table className="table table-borderless mb-0">
                                            <tbody>
                                                <tr>
                                                    <td className="fw-medium" scope="row">Designation</td>
                                                    <td>Lead Designer / Developer</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium" scope="row">Email ID</td>
                                                    <td>tonyanoble@velzon.com</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium" scope="row">Phone No</td>
                                                    <td>414-453-5725</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium" scope="row">Lead Score</td>
                                                    <td>154</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium" scope="row">Tags</td>
                                                    <td>
                                                        <span className="badge badge-soft-primary">Lead</span>
                                                        <span className="badge badge-soft-primary">Partner</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium" scope="row">Last Contacted</td>
                                                    <td>15 Dec, 2021 <small className="text-muted">08:58AM</small></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end card--> */}
                        </div>
                        {/* <!--end col--> */}
                    </div>
                    {/* <!--end row--> */}

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

export default AppContacts