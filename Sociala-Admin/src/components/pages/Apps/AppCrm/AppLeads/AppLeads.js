import React from 'react'
import {Link } from "react-router-dom"
import Header from '../../../../shared/Header/Header';
import Footer from '../../../../shared/Footer/Footer';
import NotificationModel from "../../../../shared/NotificationModel/NotificationModel";
import RightMenu from '../../../../shared/RightMenu/RightMenu';
import ChooseLayout from "../../../../shared/ChooseLayout/ChooseLayout";
const AppLeads = () => {
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
                                <h4 className="mb-sm-0">Leads</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><Link to="/admin/crm">CRM</Link></li>
                                        <li className="breadcrumb-item active">Leads</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- end page title --> */}

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card" id="leadsList">
                                <div className="card-header border-0">

                                    <div className="row g-4 align-items-center">
                                        <div className="col-sm-3">
                                            <div className="search-box">
                                                <input type="text" className="form-control search" placeholder="Search for..." />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </div>
                                        <div className="col-sm-auto ms-auto">
                                            <div className="hstack gap-2">
                                                <button className="btn btn-danger" id="remove-actions"><i className="ri-delete-bin-2-line"></i></button>
                                                <button type="button" className="btn btn-info" data-bs-toggle="offcanvas" href="#offcanvasExample"><i className="ri-filter-3-line align-bottom me-1"></i> Fliters</button>
                                                <button type="button" className="btn btn-secondary add-btn" data-bs-toggle="modal" id="create-btn" data-bs-target="#showModal"><i className="ri-add-line align-bottom me-1"></i> Add Leads</button>
                                                <span className="dropdown">
                                                    <button className="btn btn-soft-info btn-icon fs-14" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="ri-settings-4-line"></i>
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li><a className="dropdown-item" href="#">Copy</a></li>
                                                        <li><a className="dropdown-item" href="#">Move to pipline</a></li>
                                                        <li><a className="dropdown-item" href="#">Add to exceptions</a></li>
                                                        <li><a className="dropdown-item" href="#">Switch to common form
                                                                view</a></li>
                                                        <li><a className="dropdown-item" href="#">Reset form view to
                                                                default</a></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div>
                                        <div className="table-responsive table-card">
                                            <table className="table align-middle" id="customerTable">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th scope="col" style={{width: '50px'}}>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="checkAll" defaultValue="option" />
                                                            </div>
                                                        </th>

                                                        <th className="sort" data-sort="name">Name</th>
                                                        <th className="sort" data-sort="company_name">Company</th>
                                                        <th className="sort" data-sort="leads_score">Leads Score</th>
                                                        <th className="sort" data-sort="phone">Phone</th>
                                                        <th className="sort" data-sort="location">Location</th>
                                                        <th className="sort" data-sort="tags">Tags</th>
                                                        <th className="sort" data-sort="date">Create Date</th>
                                                        <th className="sort" data-sort="action">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="list form-check-all">
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" defaultValue="option1" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{display:'none'}}><a href="#" className="fw-medium link-primary">#VZ2101</a></td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src="/assets/images/users/avatar-1.jpg" alt="" className="avatar-xxs rounded-circle image_src object-cover" />
                                                                </div>
                                                                <div className="flex-grow-1 ms-2 name">Tony Noble</div>
                                                            </div>
                                                        </td>
                                                        <td className="company_name">Force Medicines</td>
                                                        <td className="leads_score">147</td>
                                                        <td className="phone">580-464-4694</td>
                                                        <td className="location">Los Angeles, USA</td>
                                                        <td className="tags">
                                                            <span className="badge badge-soft-primary">Lead</span>
                                                            <span className="badge badge-soft-primary">Partner</span>
                                                        </td>
                                                        <td className="date">07 Apr, 2021</td>
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
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="View">
                                                                    <a href="#"><i className="ri-eye-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit">
                                                                    <a className="edit-item-btn" href="#showModal" data-bs-toggle="modal"><i className="ri-pencil-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Delete">
                                                                    <a className="remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                                        <i className="ri-delete-bin-fill align-bottom text-muted"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" defaultValue="option1" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{display:'none'}}><a href="#" className="fw-medium link-primary">#VZ2101</a></td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src="/assets/images/users/avatar-2.jpg" alt="" className="avatar-xxs rounded-circle image_src object-cover" />
                                                                </div>
                                                                <div className="flex-grow-1 ms-2 name">Tony Noble</div>
                                                            </div>
                                                        </td>
                                                        <td className="company_name">Force Medicines</td>
                                                        <td className="leads_score">147</td>
                                                        <td className="phone">580-464-4694</td>
                                                        <td className="location">Los Angeles, USA</td>
                                                        <td className="tags">
                                                            <span className="badge badge-soft-primary">Lead</span>
                                                            <span className="badge badge-soft-primary">Partner</span>
                                                        </td>
                                                        <td className="date">07 Apr, 2021</td>
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
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="View">
                                                                    <a href="#"><i className="ri-eye-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit">
                                                                    <a className="edit-item-btn" href="#showModal" data-bs-toggle="modal"><i className="ri-pencil-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Delete">
                                                                    <a className="remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                                        <i className="ri-delete-bin-fill align-bottom text-muted"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" defaultValue="option1" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{display:'none'}}><a href="#" className="fw-medium link-primary">#VZ2101</a></td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src="/assets/images/users/avatar-3.jpg" alt="" className="avatar-xxs rounded-circle image_src object-cover" />
                                                                </div>
                                                                <div className="flex-grow-1 ms-2 name">Tony Noble</div>
                                                            </div>
                                                        </td>
                                                        <td className="company_name">Force Medicines</td>
                                                        <td className="leads_score">147</td>
                                                        <td className="phone">580-464-4694</td>
                                                        <td className="location">Los Angeles, USA</td>
                                                        <td className="tags">
                                                            <span className="badge badge-soft-primary">Lead</span>
                                                            <span className="badge badge-soft-primary">Partner</span>
                                                        </td>
                                                        <td className="date">07 Apr, 2021</td>
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
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="View">
                                                                    <a href="#"><i className="ri-eye-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit">
                                                                    <a className="edit-item-btn" href="#showModal" data-bs-toggle="modal"><i className="ri-pencil-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Delete">
                                                                    <a className="remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                                        <i className="ri-delete-bin-fill align-bottom text-muted"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" defaultValue="option1" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{display:'none'}}><a href="#" className="fw-medium link-primary">#VZ2101</a></td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src="/assets/images/users/avatar-4.jpg" alt="" className="avatar-xxs rounded-circle image_src object-cover" />
                                                                </div>
                                                                <div className="flex-grow-1 ms-2 name">Tony Noble</div>
                                                            </div>
                                                        </td>
                                                        <td className="company_name">Force Medicines</td>
                                                        <td className="leads_score">147</td>
                                                        <td className="phone">580-464-4694</td>
                                                        <td className="location">Los Angeles, USA</td>
                                                        <td className="tags">
                                                            <span className="badge badge-soft-primary">Lead</span>
                                                            <span className="badge badge-soft-primary">Partner</span>
                                                        </td>
                                                        <td className="date">07 Apr, 2021</td>
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
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="View">
                                                                    <a href="#"><i className="ri-eye-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit">
                                                                    <a className="edit-item-btn" href="#showModal" data-bs-toggle="modal"><i className="ri-pencil-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Delete">
                                                                    <a className="remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                                        <i className="ri-delete-bin-fill align-bottom text-muted"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" defaultValue="option1" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{display:'none'}}><a href="#" className="fw-medium link-primary">#VZ2101</a></td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src="/assets/images/users/avatar-5.jpg" alt="" className="avatar-xxs rounded-circle image_src object-cover" />
                                                                </div>
                                                                <div className="flex-grow-1 ms-2 name">Tony Noble</div>
                                                            </div>
                                                        </td>
                                                        <td className="company_name">Force Medicines</td>
                                                        <td className="leads_score">147</td>
                                                        <td className="phone">580-464-4694</td>
                                                        <td className="location">Los Angeles, USA</td>
                                                        <td className="tags">
                                                            <span className="badge badge-soft-primary">Lead</span>
                                                            <span className="badge badge-soft-primary">Partner</span>
                                                        </td>
                                                        <td className="date">07 Apr, 2021</td>
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
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="View">
                                                                    <a href="#"><i className="ri-eye-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit">
                                                                    <a className="edit-item-btn" href="#showModal" data-bs-toggle="modal"><i className="ri-pencil-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Delete">
                                                                    <a className="remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                                        <i className="ri-delete-bin-fill align-bottom text-muted"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" defaultValue="option1" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{display:'none'}}><a href="#" className="fw-medium link-primary">#VZ2101</a></td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src="/assets/images/users/avatar-6.jpg" alt="" className="avatar-xxs rounded-circle image_src object-cover" />
                                                                </div>
                                                                <div className="flex-grow-1 ms-2 name">Tony Noble</div>
                                                            </div>
                                                        </td>
                                                        <td className="company_name">Force Medicines</td>
                                                        <td className="leads_score">147</td>
                                                        <td className="phone">580-464-4694</td>
                                                        <td className="location">Los Angeles, USA</td>
                                                        <td className="tags">
                                                            <span className="badge badge-soft-primary">Lead</span>
                                                            <span className="badge badge-soft-primary">Partner</span>
                                                        </td>
                                                        <td className="date">07 Apr, 2021</td>
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
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="View">
                                                                    <a href="#"><i className="ri-eye-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit">
                                                                    <a className="edit-item-btn" href="#showModal" data-bs-toggle="modal"><i className="ri-pencil-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Delete">
                                                                    <a className="remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                                        <i className="ri-delete-bin-fill align-bottom text-muted"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" defaultValue="option1" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{display:'none'}}><a href="#" className="fw-medium link-primary">#VZ2101</a></td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src="/assets/images/users/avatar-9.jpg" alt="" className="avatar-xxs rounded-circle image_src object-cover" />
                                                                </div>
                                                                <div className="flex-grow-1 ms-2 name">Tony Noble</div>
                                                            </div>
                                                        </td>
                                                        <td className="company_name">Force Medicines</td>
                                                        <td className="leads_score">147</td>
                                                        <td className="phone">580-464-4694</td>
                                                        <td className="location">Los Angeles, USA</td>
                                                        <td className="tags">
                                                            <span className="badge badge-soft-primary">Lead</span>
                                                            <span className="badge badge-soft-primary">Partner</span>
                                                        </td>
                                                        <td className="date">07 Apr, 2021</td>
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
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="View">
                                                                    <a href="#"><i className="ri-eye-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit">
                                                                    <a className="edit-item-btn" href="#showModal" data-bs-toggle="modal"><i className="ri-pencil-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Delete">
                                                                    <a className="remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                                        <i className="ri-delete-bin-fill align-bottom text-muted"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" defaultValue="option1" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{display:'none'}}><a href="#" className="fw-medium link-primary">#VZ2101</a></td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src="/assets/images/users/avatar-8.jpg" alt="" className="avatar-xxs rounded-circle image_src object-cover" />
                                                                </div>
                                                                <div className="flex-grow-1 ms-2 name">Tony Noble</div>
                                                            </div>
                                                        </td>
                                                        <td className="company_name">Force Medicines</td>
                                                        <td className="leads_score">147</td>
                                                        <td className="phone">580-464-4694</td>
                                                        <td className="location">Los Angeles, USA</td>
                                                        <td className="tags">
                                                            <span className="badge badge-soft-primary">Lead</span>
                                                            <span className="badge badge-soft-primary">Partner</span>
                                                        </td>
                                                        <td className="date">07 Apr, 2021</td>
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
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="View">
                                                                    <a href="#"><i className="ri-eye-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit">
                                                                    <a className="edit-item-btn" href="#showModal" data-bs-toggle="modal"><i className="ri-pencil-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Delete">
                                                                    <a className="remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                                        <i className="ri-delete-bin-fill align-bottom text-muted"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" defaultValue="option1" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{display:'none'}}><a href="#" className="fw-medium link-primary">#VZ2101</a></td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src="/assets/images/users/avatar-7.jpg" alt="" className="avatar-xxs rounded-circle image_src object-cover" />
                                                                </div>
                                                                <div className="flex-grow-1 ms-2 name">Tony Noble</div>
                                                            </div>
                                                        </td>
                                                        <td className="company_name">Force Medicines</td>
                                                        <td className="leads_score">147</td>
                                                        <td className="phone">580-464-4694</td>
                                                        <td className="location">Los Angeles, USA</td>
                                                        <td className="tags">
                                                            <span className="badge badge-soft-primary">Lead</span>
                                                            <span className="badge badge-soft-primary">Partner</span>
                                                        </td>
                                                        <td className="date">07 Apr, 2021</td>
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
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="View">
                                                                    <a href="#"><i className="ri-eye-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit">
                                                                    <a className="edit-item-btn" href="#showModal" data-bs-toggle="modal"><i className="ri-pencil-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Delete">
                                                                    <a className="remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                                        <i className="ri-delete-bin-fill align-bottom text-muted"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" defaultValue="option1" />
                                                            </div>
                                                        </th>
                                                        <td className="id" style={{display:'none'}}><a href="#" className="fw-medium link-primary">#VZ2101</a></td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src="/assets/images/users/avatar-10.jpg" alt="" className="avatar-xxs rounded-circle image_src object-cover" />
                                                                </div>
                                                                <div className="flex-grow-1 ms-2 name">Tony Noble</div>
                                                            </div>
                                                        </td>
                                                        <td className="company_name">Force Medicines</td>
                                                        <td className="leads_score">147</td>
                                                        <td className="phone">580-464-4694</td>
                                                        <td className="location">Los Angeles, USA</td>
                                                        <td className="tags">
                                                            <span className="badge badge-soft-primary">Lead</span>
                                                            <span className="badge badge-soft-primary">Partner</span>
                                                        </td>
                                                        <td className="date">07 Apr, 2021</td>
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
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="View">
                                                                    <a href="#"><i className="ri-eye-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit">
                                                                    <a className="edit-item-btn" href="#showModal" data-bs-toggle="modal"><i className="ri-pencil-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Delete">
                                                                    <a className="remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                                        <i className="ri-delete-bin-fill align-bottom text-muted"></i>
                                                                    </a>
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
                                                    <p className="text-muted mb-0">We've searched more than 150+ leads We
                                                        did not find any
                                                        leads for you search.</p>
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
                                    <div className="modal fade" id="showModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header bg-light p-3">
                                                    <h5 className="modal-title" id="exampleModalLabel"></h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close-modal"></button>
                                                </div>
                                                <form className="tablelist-form" autoComplete="off">
                                                    <div className="modal-body">
                                                        <input type="hidden" id="id-field" />
                                                        <div className="row g-3">
                                                            <div className="col-lg-12">
                                                                <div className="text-center">
                                                                    <div className="position-relative d-inline-block">
                                                                        <div className="position-absolute bottom-0 end-0">
                                                                            <label htmlFor="lead-image-input" className="mb-0" data-bs-toggle="tooltip" data-bs-placement="right" title="Select Image">
                                                                                <div className="avatar-xs cursor-pointer">
                                                                                    <div className="avatar-title bg-light border rounded-circle text-muted">
                                                                                        <i className="ri-image-fill"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </label>
                                                                            <input className="form-control d-none" defaultValue="" id="lead-image-input" type="file" accept="image/png, image/gif, image/jpeg" />
                                                                        </div>
                                                                        <div className="avatar-lg p-1">
                                                                            <div className="avatar-title bg-light rounded-circle">
                                                                                <img src="/assets/images/users/user-dummy-img.jpg" id="lead-img" className="avatar-md rounded-circle object-cover" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h5 className="fs-13 mt-3">Lead Image</h5>
                                                                </div>
                                                                <div>
                                                                    <label htmlFor="leadname-field" className="form-label">Name</label>
                                                                    <input type="text" id="leadname-field" className="form-control" placeholder="Enter Name" required />
                                                                </div>
                                                            </div>
                                                            {/* <!--end col--> */}
                                                            <div className="col-lg-12">
                                                                <div>
                                                                    <label htmlFor="company_name-field" className="form-label">Company Name</label>
                                                                    <input type="text" id="company_name-field" className="form-control" placeholder="Enter company name" required />
                                                                </div>
                                                            </div>
                                                            {/* <!--end col--> */}
                                                            <div className="col-lg-6">
                                                                <div>
                                                                    <label htmlFor="leads_score-field" className="form-label">Leads Score</label>
                                                                    <input type="text" id="leads_score-field" className="form-control" placeholder="Enter lead score" required />
                                                                </div>
                                                            </div>
                                                            {/* <!--end col--> */}
                                                            <div className="col-lg-6">
                                                                <div>
                                                                    <label htmlFor="phone-field" className="form-label">Phone</label>
                                                                    <input type="text" id="phone-field" className="form-control" placeholder="Enter phone no" required />
                                                                </div>
                                                            </div>
                                                            {/* <!--end col--> */}
                                                            <div className="col-lg-12">
                                                                <div>
                                                                    <label htmlFor="location-field" className="form-label">Location</label>
                                                                    <input type="text" id="location-field" className="form-control" placeholder="Enter location" required />
                                                                </div>
                                                            </div>
                                                            {/* <!--end col--> */}
                                                            <div className="col-lg-12">
                                                                <div>
                                                                    <label htmlFor="taginput-choices" className="form-label">Tags</label>
                                                                    <select className="form-control" name="taginput-choices" id="taginput-choices" multiple>
                                                                        <option defaultValue="Lead">Lead</option>
                                                                        <option defaultValue="Partner">Partner</option>
                                                                        <option defaultValue="Exiting">Exiting</option>
                                                                        <option defaultValue="Long-term">Long-term</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div>
                                                                    <label htmlFor="date-field" className="form-label">Created Date</label>
                                                                    <input type="date" id="date-field" className="form-control" data-provider="flatpickr" data-date-format="d M, Y" placeholder="Select Date" required />
                                                                </div>
                                                            </div>
                                                            {/* <!--end col--> */}
                                                        </div>
                                                        {/* <!--end row--> */}
                                                    </div>
                                                    <div className="modal-footer">
                                                        <div className="hstack gap-2 justify-content-end">
                                                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                                            <button type="submit" className="btn btn-success" id="add-btn">Add leads</button>
                                                            {/* <!-- <button type="button" className="btn btn-success" id="edit-btn">Update</button> --> */}
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--end modal--> */}

                                    {/* <!-- Modal --> */}
                                    <div className="modal fade zoomIn" id="deleteRecordModal" tabIndex="-1" aria-labelledby="deleteRecordLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="btn-close"></button>
                                                </div>
                                                <div className="modal-body p-5 text-center">
                                                    <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop" colors="primary:#405189,secondary:#f06548" style={{width:'90px',height:'90px'}}></lord-icon>
                                                    <div className="mt-4 text-center">
                                                        <h4 className="fs-semibold">You are about to delete a lead ?</h4>
                                                        <p className="text-muted fs-14 mb-4 pt-1">Deleting your lead will
                                                            remove all of your information from our database.</p>
                                                        <div className="hstack gap-2 justify-content-center remove">
                                                            <button className="btn btn-link link-success fw-medium text-decoration-none" id="deleteRecord-close" data-bs-dismiss="modal"><i className="ri-close-line me-1 align-middle"></i>
                                                                Close</button>
                                                            <button className="btn btn-danger" id="delete-record">Yes,
                                                                Delete It!!</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--end modal --> */}


                                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                        <div className="offcanvas-header bg-light">
                                            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Leads Fliters</h5>
                                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        {/* <!--end offcanvas-header--> */}
                                        <form action="#" className="d-flex flex-column justify-content-end h-100">
                                            <div className="offcanvas-body">
                                                <div className="mb-4">
                                                    <label htmlFor="datepicker-range" className="form-label text-muted text-uppercase fw-semibold mb-3">Date</label>
                                                    <input type="date" className="form-control" id="datepicker-range" data-provider="flatpickr" data-range="true" placeholder="Select date" />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="country-select" className="form-label text-muted text-uppercase fw-semibold mb-3">Country</label>
                                                    <select className="form-control" data-choices data-choices-multiple-remove="true" name="country-select" id="country-select" multiple>
                                                        <option defaultValue="">Select country</option>
                                                        <option defaultValue="Argentina">Argentina</option>
                                                        <option defaultValue="Belgium">Belgium</option>
                                                        <option defaultValue="Brazil" selected>Brazil</option>
                                                        <option defaultValue="Colombia">Colombia</option>
                                                        <option defaultValue="Denmark">Denmark</option>
                                                        <option defaultValue="France">France</option>
                                                        <option defaultValue="Germany">Germany</option>
                                                        <option defaultValue="Mexico">Mexico</option>
                                                        <option defaultValue="Russia">Russia</option>
                                                        <option defaultValue="Spain">Spain</option>
                                                        <option defaultValue="Syria">Syria</option>
                                                        <option defaultValue="United Kingdom" selected>United Kingdom</option>
                                                        <option defaultValue="United States of America">United States of
                                                            America</option>
                                                    </select>
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="status-select" className="form-label text-muted text-uppercase fw-semibold mb-3">Status</label>
                                                    <div className="row g-2">
                                                        <div className="col-lg-6">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                                                                <label className="form-check-label" htmlFor="inlineCheckbox1">New Leads</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" defaultValue="option2" />
                                                                <label className="form-check-label" htmlFor="inlineCheckbox2">Old Leads</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" defaultValue="option3" />
                                                                <label className="form-check-label" htmlFor="inlineCheckbox3">Loss Leads</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="inlineCheckbox4" defaultValue="option4" />
                                                                <label className="form-check-label" htmlFor="inlineCheckbox4">Follow Up</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="leadscore" className="form-label text-muted text-uppercase fw-semibold mb-3">Lead
                                                        Score</label>
                                                    <div className="row g-2 align-items-center">
                                                        <div className="col-lg">
                                                            <input type="number" className="form-control" id="leadscore" placeholder="0" />
                                                        </div>
                                                        <div className="col-lg-auto">
                                                            To
                                                        </div>
                                                        <div className="col-lg">
                                                            <input type="number" className="form-control" id="leadscore" placeholder="0" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="leads-tags" className="form-label text-muted text-uppercase fw-semibold mb-3">Tags</label>
                                                    <div className="row g-3">
                                                        <div className="col-lg-6">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="marketing" defaultValue="marketing" />
                                                                <label className="form-check-label" htmlFor="marketing">Marketing</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="management" defaultValue="management" />
                                                                <label className="form-check-label" htmlFor="management">Management</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="business" defaultValue="business" />
                                                                <label className="form-check-label" htmlFor="business">Business</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="investing" defaultValue="investing" />
                                                                <label className="form-check-label" htmlFor="investing">Investing</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="partner" defaultValue="partner" />
                                                                <label className="form-check-label" htmlFor="partner">Partner</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="lead" defaultValue="lead" />
                                                                <label className="form-check-label" htmlFor="lead">Leads</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="sale" defaultValue="sale" />
                                                                <label className="form-check-label" htmlFor="sale">Sale</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="owner" defaultValue="owner" />
                                                                <label className="form-check-label" htmlFor="owner">Owner</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="banking" defaultValue="banking" />
                                                                <label className="form-check-label" htmlFor="banking">Banking</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="banking" defaultValue="banking" />
                                                                <label className="form-check-label" htmlFor="banking">Exiting</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="banking" defaultValue="banking" />
                                                                <label className="form-check-label" htmlFor="banking">Finance</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="banking" defaultValue="banking" />
                                                                <label className="form-check-label" htmlFor="banking">Fashion</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!--end offcanvas-body--> */}
                                            <div className="offcanvas-footer border-top p-3 text-center hstack gap-2">
                                                <button className="btn btn-light w-100">Clear Filter</button>
                                                <button type="submit" className="btn btn-success w-100">Filters</button>
                                            </div>
                                            {/* <!--end offcanvas-footer--> */}
                                        </form>
                                    </div>
                                    {/* <!--end offcanvas--> */}

                                </div>
                            </div>

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

export default AppLeads;