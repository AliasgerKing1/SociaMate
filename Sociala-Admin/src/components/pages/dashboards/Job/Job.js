import React from 'react'

import {Link } from "react-router-dom"
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';
import NotificationModel from "../../../shared/NotificationModel/NotificationModel";
import RightMenu from '../../../shared/RightMenu/RightMenu';
import ChooseLayout from "../../../shared/ChooseLayout/ChooseLayout";
const Job = () => {
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
                                    <h4 className="mb-sm-0">Job Dashboard</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><Link to="/admin/analytics">Dashboards</Link></li>
                                            <li className="breadcrumb-item active">Job Dashboard</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <!-- end page title --> */}

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="d-flex flex-column h-100">
                                    <div className="row">
                                        <div className="col-xl-6 col-md-6">
                                            <div className="card card-animate overflow-hidden">
                                                <div className="position-absolute start-0" style={{zIndex: '0'}}>
                                                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" width="200" height="120">
                                                        <style>
                                                            {/* .s0 {{
                                                                opacity: '.05',
                                                                fill: 'var(--vz-primary)'
                                                            }} */}
                                                        </style>
                                                        <path id="Shape 8" className="s0" d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z" />
                                                    </svg>
                                                </div>
                                                <div className="card-body" style={{zIndex:'1'}}>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <p className="text-uppercase fw-medium text-muted text-truncate mb-3"> Total Jobs</p>
                                                            <h4 className="fs-22 fw-semibold ff-secondary mb-0"><span className="counter-value" data-target="36894">0</span></h4>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <div id="total_jobs" data-colors='["--vz-success"]' className="apex-charts" dir="ltr"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- end card body --> */}
                                            </div>
                                            {/* <!-- end card --> */}
                                        </div>
                                        {/* <!--end col--> */}
                                        <div className="col-xl-6 col-md-6">
                                            {/* <!-- card --> */}
                                            <div className="card card-animate overflow-hidden">
                                                <div className="position-absolute start-0" style={{zIndex: '0'}}>
                                                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" width="200" height="120">
                                                        <style>
                                                            {/* .s0 {{
                                                                opacity: '.05',
                                                                fill: 'var(--vz-primary)'
                                                            }} */}
                                                        </style>
                                                        <path id="Shape 8" className="s0" d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z" />
                                                    </svg>
                                                </div>
                                                <div className="card-body" style={{zIndex:'1'}}>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <p className="text-uppercase fw-medium text-muted text-truncate mb-3"> Apply Jobs</p>
                                                            <h4 className="fs-22 fw-semibold ff-secondary mb-0"><span className="counter-value" data-target="28410">0</span></h4>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <div id="apply_jobs" data-colors='["--vz-success"]' className="apex-charts" dir="ltr"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- end card body --> */}
                                            </div>
                                            {/* <!-- end card --> */}
                                        </div>
                                        {/* <!-- end col --> */}
                                        <div className="col-xl-6 col-md-6">
                                            {/* <!-- card --> */}
                                            <div className="card card-animate overflow-hidden">
                                                <div className="position-absolute start-0" style={{zIndex: '0'}}>
                                                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" width="200" height="120">
                                                        <style>
                                                            {/* .s0 {{
                                                                opacity: '.05',
                                                                fill: 'var(--vz-primary)'
                                                            }} */}
                                                        </style>
                                                        <path id="Shape 8" className="s0" d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z" />
                                                    </svg>
                                                </div>
                                                <div className="card-body" style={{zIndex:'1'}}>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <p className="text-uppercase fw-medium text-muted text-truncate mb-3">New Jobs</p>
                                                            <h4 className="fs-22 fw-semibold ff-secondary mb-0"><span className="counter-value" data-target="4305">0</span></h4>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <div id="new_jobs_chart" data-colors='["--vz-success"]' className="apex-charts" dir="ltr"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- end card body --> */}
                                            </div>
                                            {/* <!-- end card --> */}
                                        </div>
                                        {/* <!-- end col --> */}
                                        <div className="col-xl-6 col-md-6">
                                            {/* <!-- card --> */}
                                            <div className="card card-animate overflow-hidden">
                                                <div className="position-absolute start-0" style={{zIndex: '0'}}>
                                                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" width="200" height="120">
                                                        <style>
                                                            {/* .s0 {{
                                                                opacity: '.05',
                                                                fill: 'var(--vz-primary)'
                                                            }} */}
                                                        </style>
                                                        <path id="Shape 8" className="s0" d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z" />
                                                    </svg>
                                                </div>
                                                <div className="card-body" style={{zIndex:'1'}}>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <p className="text-uppercase fw-medium text-muted text-truncate mb-3"> Interview</p>
                                                            <h4 className="fs-22 fw-semibold ff-secondary mb-0"><span className="counter-value" data-target="5021">0</span></h4>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <div id="interview_chart" data-colors='["--vz-danger"]' className="apex-charts" dir="ltr"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- end card body --> */}
                                            </div>
                                            {/* <!-- end card --> */}
                                        </div>
                                        {/* <!-- end col --> */}
                                        <div className="col-xl-6 col-md-6">
                                            <div className="card card-animate overflow-hidden">
                                                <div className="position-absolute start-0" style={{zIndex: '0'}}>
                                                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" width="200" height="120">
                                                        <style>
                                                            {/* .s0 {{
                                                                opacity: '.05',
                                                                fill: 'var(--vz-primary)'
                                                            }} */}
                                                        </style>
                                                        <path id="Shape 8" className="s0" d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z" />
                                                    </svg>
                                                </div>
                                                <div className="card-body" style={{zIndex:'1'}}>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <p className="text-uppercase fw-medium text-muted text-truncate mb-3"> Hired</p>
                                                            <h4 className="fs-22 fw-semibold ff-secondary mb-0"><span className="counter-value" data-target="3948">0</span></h4>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <div id="hired_chart" data-colors='["--vz-success"]' className="apex-charts" dir="ltr"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- end card body --> */}
                                            </div>
                                            {/* <!-- end card --> */}
                                        </div>
                                        {/* <!--end col--> */}
                                        <div className="col-xl-6 col-md-6">
                                            {/* <!-- card --> */}
                                            <div className="card card-animate overflow-hidden">
                                                <div className="position-absolute start-0" style={{zIndex: '0'}}>
                                                    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" width="200" height="120">
                                                        <style>
                                                            {/* .s0 {{
                                                                opacity: '.05',
                                                                fill: 'var(--vz-primary)'
                                                            }} */}
                                                        </style>
                                                        <path id="Shape 8" className="s0" d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z" />
                                                    </svg>
                                                </div>
                                                <div className="card-body" style={{zIndex:'1'}}>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <p className="text-uppercase fw-medium text-muted text-truncate mb-3">Rejected</p>
                                                            <h4 className="fs-22 fw-semibold ff-secondary mb-0"><span className="counter-value" data-target="1340">0</span></h4>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <div id="rejected_chart" data-colors='["--vz-danger"]' className="apex-charts" dir="ltr"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- end card body --> */}
                                            </div>
                                            {/* <!-- end card --> */}
                                        </div>
                                        {/* <!-- end col --> */}
                                    </div>
                                    {/* <!--end row--> */}
                                </div>
                            </div>
                            {/* <!--end col--> */}
                            <div className="col-xl-6">
                                <div className="card card-height-100">
                                    <div className="card-header align-items-center d-flex">
                                        <h4 className="card-title mb-0 flex-grow-1">Featured Companies</h4>
                                        <div className="flex-shrink-0">
                                            <a href="#!" className="btn btn-soft-primary btn-sm">View All Companies <i className="ri-arrow-right-line align-bottom"></i></a>
                                        </div>
                                    </div>
                                    {/* <!-- end card header --> */}

                                    <div className="card-body">
                                        <div className="table-responsive table-card">
                                            <table className="table table-centered table-hover align-middle table-nowrap mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar-xs me-2 flex-shrink-0">
                                                                    <div className="avatar-title bg-soft-secondary rounded">
                                                                        <img src="/assets/images/companies/img-1.png" alt="" height="16" />
                                                                    </div>
                                                                </div>
                                                                <h6 className="mb-0">Force Medicines</h6>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <i className="ri-map-pin-2-line text-primary me-1 align-bottom"></i> Cullera, Spain
                                                        </td>
                                                        <td>
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item">
                                                                    <a href="#!" className="link-secondary"><i className="ri-facebook-fill"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="#!" className="link-danger"><i className="ri-mail-line"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="#!" className="link-primary"><i className="ri-global-line"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="#!" className="link-info"><i className="ri-twitter-line"></i></a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td>
                                                            <a href="#!" className="btn btn-link btn-sm">View More <i className="ri-arrow-right-line align-bottom"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar-xs me-2 flex-shrink-0">
                                                                    <div className="avatar-title bg-soft-warning rounded">
                                                                        <img src="/assets/images/companies/img-3.png" alt="" height="16" />
                                                                    </div>
                                                                </div>
                                                                <h6 className="mb-0">Syntyce Solutions</h6>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <i className="ri-map-pin-2-line text-primary me-1 align-bottom"></i> Mughairah, UAE
                                                        </td>
                                                        <td>
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item">
                                                                    <a href="#!" className="link-secondary"><i className="ri-facebook-fill"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="#!" className="link-danger"><i className="ri-mail-line"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="#!" className="link-primary"><i className="ri-global-line"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="#!" className="link-info"><i className="ri-twitter-line"></i></a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td>
                                                            <a href="#!" className="btn btn-link btn-sm">View More <i className="ri-arrow-right-line align-bottom"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar-xs me-2 flex-shrink-0">
                                                                    <div className="avatar-title bg-soft-primary rounded">
                                                                        <img src="/assets/images/companies/img-2.png" alt="" height="16" />
                                                                    </div>
                                                                </div>
                                                                <h6 className="mb-0">Moetic Fashion</h6>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <i className="ri-map-pin-2-line text-primary me-1 align-bottom"></i> Mughairah, UAE
                                                        </td>
                                                        <td>
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item">
                                                                    <a href="#!" className="link-secondary"><i className="ri-facebook-fill"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="#!" className="link-danger"><i className="ri-mail-line"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="#!" className="link-primary"><i className="ri-global-line"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="#!" className="link-info"><i className="ri-twitter-line"></i></a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td>
                                                            <a href="#!" className="btn btn-link btn-sm">View More <i className="ri-arrow-right-line align-bottom"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar-xs me-2 flex-shrink-0">
                                                                    <div className="avatar-title bg-soft-danger rounded">
                                                                        <img src="/assets/images/companies/img-4.png" alt="" height="16" />
                                                                    </div>
                                                                </div>
                                                                <h6 className="mb-0">Meta4Systems</h6>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <i className="ri-map-pin-2-line text-primary me-1 align-bottom"></i> Germany
                                                        </td>
                                                        <td>
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item">
                                                                    <a href="#!" className="link-secondary"><i className="ri-facebook-fill"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="#!" className="link-danger"><i className="ri-mail-line"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="#!" className="link-primary"><i className="ri-global-line"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="#!" className="link-info"><i className="ri-twitter-line"></i></a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td>
                                                            <a href="#!" className="btn btn-link btn-sm">View More <i className="ri-arrow-right-line align-bottom"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar-xs me-2 flex-shrink-0">
                                                                    <div className="avatar-title bg-soft-danger rounded">
                                                                        <img src="/assets/images/companies/img-5.png" alt="" height="16" />
                                                                    </div>
                                                                </div>
                                                                <h6 className="mb-0">Themesbrand</h6>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <i className="ri-map-pin-2-line text-primary me-1 align-bottom"></i> Limestone, US
                                                        </td>
                                                        <td>
                                                            <ul className="list-inline mb-0">
                                                                <li className="list-inline-item">
                                                                    <a href="#!" className="link-secondary"><i className="ri-facebook-fill"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="#!" className="link-danger"><i className="ri-mail-line"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="#!" className="link-primary"><i className="ri-global-line"></i></a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="#!" className="link-info"><i className="ri-twitter-line"></i></a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td>
                                                            <a href="#!" className="btn btn-link btn-sm">View More <i className="ri-arrow-right-line align-bottom"></i></a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="align-items-center mt-4 pt-2 justify-content-between d-flex">
                                            <div className="flex-shrink-0">
                                                <div className="text-muted">
                                                    Showing <span className="fw-semibold">5</span> of <span className="fw-semibold">25</span> Results
                                                </div>
                                            </div>
                                            <ul className="pagination pagination-separated pagination-sm mb-0">
                                                <li className="page-item disabled">
                                                    <a href="#" className="page-link">←</a>
                                                </li>
                                                <li className="page-item">
                                                    <a href="#" className="page-link">1</a>
                                                </li>
                                                <li className="page-item active">
                                                    <a href="#" className="page-link">2</a>
                                                </li>
                                                <li className="page-item">
                                                    <a href="#" className="page-link">3</a>
                                                </li>
                                                <li className="page-item">
                                                    <a href="#" className="page-link">→</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> 
                                {/* <!-- .card--> */}
                            </div>
                            {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}
                        
                        <div className="row">
                            <div className="col-xxl-8">
                                <div className="card card-height-100">
                                    <div className="card-header border-0 align-items-center d-flex">
                                        <h4 className="card-title mb-0 flex-grow-1">Applications Statistic</h4>
                                        <div>
                                            <button type="button" className="btn btn-soft-secondary btn-sm">
                                                ALL
                                            </button>
                                            <button type="button" className="btn btn-soft-secondary btn-sm">
                                                1M
                                            </button>
                                            <button type="button" className="btn btn-soft-secondary btn-sm">
                                                6M
                                            </button>
                                            <button type="button" className="btn btn-soft-primary btn-sm">
                                                1Y
                                            </button>
                                        </div>
                                    </div>
                                    {/* <!-- end card header --> */}
                        
                                    <div className="card-header p-0 border-0 bg-soft-light">
                                        <div className="row g-0 text-center">
                                            <div className="col-6 col-sm-3">
                                                <div className="p-3 border border-dashed border-start-0">
                                                    <h5 className="mb-1"><span className="counter-value" data-target="3364">0</span></h5>
                                                    <p className="text-muted mb-0">New Applications</p>
                                                </div>
                                            </div>
                                            
                                            {/* <!--end col--> */}
                                            <div className="col-6 col-sm-3">
                                                <div className="p-3 border border-dashed border-start-0">
                                                    <h5 className="mb-1"><span className="counter-value" data-target="2804">0</span></h5>
                                                    <p className="text-muted mb-0">Interview</p>
                                                </div>
                                            </div>
                                            
                                            {/* <!--end col--> */}
                                            <div className="col-6 col-sm-3">
                                                <div className="p-3 border border-dashed border-start-0">
                                                    <h5 className="mb-1"><span className="counter-value" data-target="2402">0</span></h5>
                                                    <p className="text-muted mb-0">Hired</p>
                                                </div>
                                            </div>
                                            
                                            {/* <!--end col--> */}
                                            <div className="col-6 col-sm-3">
                                                <div className="p-3 border border-dashed border-start-0 border-end-0">
                                                    <h5 className="mb-1 text-success"><span className="counter-value" data-target="8">0</span>k</h5>
                                                    <p className="text-muted mb-0">Total Applications</p>
                                                </div>
                                            </div>
                                            
                                            {/* <!--end col--> */}
                                        </div>
                                    </div>
                                    {/* <!-- end card header --> */}
                        
                                    <div className="card-body p-0 pb-2">
                                        <div className="w-100">
                                            <div id="line_chart_dashed" data-colors='["--vz-primary", "--vz-secondary", "--vz-success"]' className="apex-charts" dir="ltr"></div>
                                        </div>
                                    </div>
                                    {/* <!-- end card body --> */}
                                </div>
                                {/* <!-- end card --> */}
                            </div>
                            {/* <!-- end col --> */}
                            <div className="col-xxl-4">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="d-flex align-items-center">
                                            <h6 className="card-title mb-0 flex-grow-1">Popular Candidates</h6>
                                            <div className="flex-shrink-0">
                                                <a href="apps-job-candidate-lists.html" className="link-primary">View All <i className="ri-arrow-right-line"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-0">
                                        <div className="col-lg-6">
                                            <div className="card-body border-end">
                                                <div className="search-box">
                                                    <input type="text" className="form-control bg-light border-light" autoComplete="off" id="searchList" placeholder="Search candidate..." />
                                                    <i className="ri-search-line search-icon"></i>
                                                </div>
                                                <div data-simplebar style={{maxHeight: '190px'}} className="px-3 mx-n3">
                                                    <ul className="list-unstyled mb-0 pt-2" id="candidate-list">
                                                        <li>
                                                            <a href="#" className="d-flex align-items-center py-2">
                                                                <div className="flex-shrink-0 me-2">
                                                                    <div className="avatar-xs">
                                                                        <img src="/assets/images/users/avatar-10.jpg" alt="" className="img-fluid rounded-circle candidate-img" />
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <h5 className="fs-13 mb-1 text-truncate"><span className="candidate-name">Tonya Noble</span> <span className="text-muted fw-normal">@tonya</span></h5>
                                                                    <div className="d-none candidate-position">Web Developer</div>
                                                                </div>
                                                            </a>
                                                        </li>
                                
                                                        <li>
                                                            <a href="#" className="d-flex align-items-center py-2">
                                                                <div className="flex-shrink-0 me-2">
                                                                    <div className="avatar-xs">
                                                                        <img src="/assets/images/users/avatar-1.jpg" alt="" className="img-fluid rounded-circle candidate-img" />
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <h5 className="fs-13 mb-1 text-truncate"><span className="candidate-name">Nicholas Ball</span> <span className="text-muted fw-normal">@nicholas</span></h5>
                                                                    <div className="d-none candidate-position">Assistant / Store Keeper</div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="d-flex align-items-center py-2">
                                                                <div className="flex-shrink-0 me-2">
                                                                    <div className="avatar-xs">
                                                                        <img src="/assets/images/users/avatar-9.jpg" alt="" className="img-fluid rounded-circle candidate-img" />
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <h5 className="fs-13 mb-1 text-truncate"><span className="candidate-name">Zynthia Marrow</span> <span className="text-muted fw-normal">@zynthia</span></h5>
                                                                    <div className="d-none candidate-position">Full Stack Engineer</div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="d-flex align-items-center py-2">
                                                                <div className="flex-shrink-0 me-2">
                                                                    <div className="avatar-xs">
                                                                        <img src="/assets/images/users/avatar-2.jpg" alt="" className="img-fluid rounded-circle candidate-img" />
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <h5 className="fs-13 mb-1 text-truncate"><span className="candidate-name">Cheryl Moore</span> <span className="text-muted fw-normal">@Cheryl</span></h5>
                                                                    <div className="d-none candidate-position">Product Designer</div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="d-flex align-items-center py-2">
                                                                <div className="flex-shrink-0 me-2">
                                                                    <div className="avatar-xs">
                                                                        <img src="/assets/images/users/avatar-5.jpg" alt="" className="img-fluid rounded-circle candidate-img" />
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <h5 className="fs-13 mb-1 text-truncate"><span className="candidate-name">Jennifer Bailey</span> <span className="text-muted fw-normal">@Jennifer</span></h5>
                                                                    <div className="d-none candidate-position">Marketing Director</div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="d-flex align-items-center py-2">
                                                                <div className="flex-shrink-0 me-2">
                                                                    <div className="avatar-xs">
                                                                        <img src="/assets/images/users/avatar-8.jpg" alt="" className="img-fluid rounded-circle candidate-img" />
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <h5 className="fs-13 mb-1 text-truncate"><span className="candidate-name">Hadley Leonard</span> <span className="text-muted fw-normal">@hadley</span></h5>
                                                                    <div className="d-none candidate-position">Executive, HR Operations</div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card-body text-center">
                                                <div className="avatar-md mb-3 mx-auto">
                                                    <img src="/assets/images/users/avatar-10.jpg" alt="" id="candidate-img" className="img-thumbnail rounded-circle shadow-none" />
                                                </div>
                                
                                                <h5 id="candidate-name" className="mb-0">Tonya Noble</h5>
                                                <p id="candidate-position" className="text-muted">Web Developer</p>
                                
                                                <div className="d-flex gap-2 justify-content-center mb-3">
                                                    <button type="button" className="btn avatar-xs p-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Google">
                                                        <span className="avatar-title rounded-circle bg-light text-body">
                                                            <i className="ri-google-line"></i>
                                                        </span>
                                                    </button>
                                
                                                    <button type="button" className="btn avatar-xs p-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Linkedin">
                                                        <span className="avatar-title rounded-circle bg-light text-body">
                                                            <i className="ri-linkedin-line"></i>
                                                        </span>
                                                    </button>
                                                    <button type="button" className="btn avatar-xs p-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Dribbble">
                                                        <span className="avatar-title rounded-circle bg-light text-body">
                                                            <i className="ri-dribbble-fill"></i>
                                                        </span>
                                                    </button>
                                                </div>
                                
                                                <div>
                                                    <button type="button" className="btn btn-success custom-toggle w-100" data-bs-toggle="button" aria-pressed="false">
                                                        <span className="icon-on"><i className="ri-add-line align-bottom me-1"></i> Follow</span>
                                                        <span className="icon-off"><i className="ri-user-unfollow-line align-bottom me-1"></i> Unfollow</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- end card --> */}
                                <div className="card overflow-hidden shadow-none">
                                    <div className="card-body bg-soft-danger">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <div className="avatar-sm">
                                                    <div className="avatar-title bg-soft-danger text-danger rounded-circle fs-17">
                                                        <i className="ri-gift-line"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="fs-16">Invite your friends to Velzon</h6>
                                                <p className="text-muted mb-0">Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally.</p>
                                            </div>
                                        </div>
                                        <div className="mt-3 text-end">
                                            <a href="#!" className="btn btn-danger">Invite Friends</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end col --> */}
                        </div>
                        {/* <!--end row--> */}
                        
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="row g-4 align-items-center">
                                            <div className="col-sm-auto">
                                                <div>
                                                    <h4 className="card-title mb-0 flex-grow-1">Recomended Jobs</h4>
                                                </div>
                                            </div>
                                            <div className="col-sm">
                                                <div className="d-flex justify-content-sm-end">
                                                    <div className="search-box ms-2">
                                                        <input type="text" className="form-control" id="searchResultList" placeholder="Search for jobs..." />
                                                        <i className="ri-search-line search-icon"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div id="recomended-jobs" className="table-card"></div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}
                        
                        <div className="row">
                            <div className="col-xxl-8">
                                <div className="card">
                                    <div className="card-header align-items-center d-flex">
                                        <h4 className="card-title mb-0 flex-grow-1">Recent Applicants</h4>
                                        <div className="flex-shrink-0">
                                            <button type="button" className="btn btn-soft-info btn-sm">
                                                <i className="ri-file-list-3-line align-bottom"></i> Generate Report
                                            </button>
                                        </div>
                                    </div>
                                    {/* <!-- end card header --> */}
                        
                                    <div className="card-body">
                                        <div className="table-responsive table-card">
                                            <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                                                <thead className="text-muted table-light">
                                                    <tr>
                                                        <th scope="col">ID</th>
                                                        <th scope="col">Candidate Name</th>
                                                        <th scope="col">Designation</th>
                                                        <th scope="col">Rate/hr</th>
                                                        <th scope="col">Location</th>
                                                        <th scope="col">Type</th>
                                                        <th scope="col">Rating</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <a href="#!" className="fw-medium link-primary">#VZ2112</a>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0 me-2">
                                                                    <img src="/assets/images/users/avatar-1.jpg" alt="" className="avatar-xs rounded-circle" />
                                                                </div>
                                                                <div className="flex-grow-1">Nicholas Ball</div>
                                                            </div>
                                                        </td>
                                                        <td>Assistant / Store Keeper</td>
                                                        <td>
                                                            <span className="text-success">$109.00</span>
                                                        </td>
                                                        <td>California, US</td>
                                                        <td>
                                                            <span className="badge badge-soft-success">Full Time</span>
                                                        </td>
                                                        <td>
                                                            <h5 className="fs-14 fw-medium mb-0">5.0<span className="text-muted fs-11 ms-1">(245 Rating)</span></h5>
                                                        </td>
                                                    </tr>
                                                    {/* <!-- end tr --> */}
                                                    <tr>
                                                        <td>
                                                            <a href="#!" className="fw-medium link-primary">#VZ2111</a>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0 me-2">
                                                                    <img src="/assets/images/users/avatar-2.jpg" alt="" className="avatar-xs rounded-circle" />
                                                                </div>
                                                                <div className="flex-grow-1">Elizabeth Allen</div>
                                                            </div>
                                                        </td>
                                                        <td>Education Training</td>
                                                        <td>
                                                            <span className="text-success">$149.00</span>
                                                        </td>
                                                        <td>Zuweihir, UAE</td>
                                                        <td>
                                                            <span className="badge badge-soft-secondary">Freelancer</span>
                                                        </td>
                                                        <td>
                                                            <h5 className="fs-14 fw-medium mb-0">4.5<span className="text-muted fs-11 ms-1">(645 Rating)</span></h5>
                                                        </td>
                                                    </tr>
                                                    {/* <!-- end tr --> */}
                                                    <tr>
                                                        <td>
                                                            <a href="#!" className="fw-medium link-primary">#VZ2109</a>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0 me-2">
                                                                    <img src="/assets/images/users/avatar-3.jpg" alt="" className="avatar-xs rounded-circle" />
                                                                </div>
                                                                <div className="flex-grow-1">Cassian Jenning</div>
                                                            </div>
                                                        </td>
                                                        <td>Graphic Designer</td>
                                                        <td>
                                                            <span className="text-success">$215.00</span>
                                                        </td>
                                                        <td>Limestone, US</td>
                                                        <td>
                                                            <span className="badge badge-soft-danger">Part Time</span>
                                                        </td>
                                                        <td>
                                                            <h5 className="fs-14 fw-medium mb-0">4.9<span className="text-muted fs-11 ms-1">(89 Rating)</span></h5>
                                                        </td>
                                                    </tr>
                                                    {/* <!-- end tr --> */}
                                                    <tr>
                                                        <td>
                                                            <a href="#!" className="fw-medium link-primary">#VZ2108</a>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0 me-2">
                                                                    <img src="/assets/images/users/avatar-4.jpg" alt="" className="avatar-xs rounded-circle" />
                                                                </div>
                                                                <div className="flex-grow-1">Scott Holt</div>
                                                            </div>
                                                        </td>
                                                        <td>UI/UX Designer</td>
                                                        <td>
                                                            <span className="text-success">$199.00</span>
                                                        </td>
                                                        <td>Germany</td>
                                                        <td>
                                                            <span className="badge badge-soft-danger">Part Time</span>
                                                        </td>
                                                        <td>
                                                            <h5 className="fs-14 fw-medium mb-0">4.3<span className="text-muted fs-11 ms-1">(47 Rating)</span></h5>
                                                        </td>
                                                    </tr>
                                                    {/* <!-- end tr --> */}
                                                    <tr>
                                                        <td>
                                                            <a href="#!" className="fw-medium link-primary">#VZ2109</a>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0 me-2">
                                                                    <img src="/assets/images/users/avatar-6.jpg" alt="" className="avatar-xs rounded-circle" />
                                                                </div>
                                                                <div className="flex-grow-1">Hadley Leonard</div>
                                                            </div>
                                                        </td>
                                                        <td>React Developer</td>
                                                        <td>
                                                            <span className="text-success">$330.00</span>
                                                        </td>
                                                        <td>Mughairah, UAE</td>
                                                        <td>
                                                            <span className="badge badge-soft-success">Full Time</span>
                                                        </td>
                                                        <td>
                                                            <h5 className="fs-14 fw-medium mb-0">4.7<span className="text-muted fs-11 ms-1">(161 Rating)</span></h5>
                                                        </td>
                                                    </tr>
                                                    {/* <!-- end tr --> */}
                                                    <tr>
                                                        <td>
                                                            <a href="#!" className="fw-medium link-primary">#VZ2110</a>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0 me-2">
                                                                    <img src="/assets/images/users/avatar-10.jpg" alt="" className="avatar-xs rounded-circle" />
                                                                </div>
                                                                <div className="flex-grow-1">Harley Watkins</div>
                                                            </div>
                                                        </td>
                                                        <td>Project Manager</td>
                                                        <td>
                                                            <span className="text-success">$330.00</span>
                                                        </td>
                                                        <td>Texanna, US</td>
                                                        <td>
                                                            <span className="badge badge-soft-secondary">Freelancer</span>
                                                        </td>
                                                        <td>
                                                            <h5 className="fs-14 fw-medium mb-0">4.7<span className="text-muted fs-11 ms-1">(3.21k Rating)</span></h5>
                                                        </td>
                                                    </tr>
                                                    {/* <!-- end tr --> */}
                                                    <tr>
                                                        <td>
                                                            <a href="#!" className="fw-medium link-primary">#VZ2111</a>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0 me-2">
                                                                    <img src="/assets/images/users/avatar-8.jpg" alt="" className="avatar-xs rounded-circle" />
                                                                </div>
                                                                <div className="flex-grow-1">Nadia Harding</div>
                                                            </div>
                                                        </td>
                                                        <td>Web Designer</td>
                                                        <td>
                                                            <span className="text-success">$330.00</span>
                                                        </td>
                                                        <td>Pahoa, US</td>
                                                        <td>
                                                            <span className="badge badge-soft-danger">Part Time</span>
                                                        </td>
                                                        <td>
                                                            <h5 className="fs-14 fw-medium mb-0">4.7<span className="text-muted fs-11 ms-1">(2.93k Rating)</span></h5>
                                                        </td>
                                                    </tr>
                                                    {/* <!-- end tr --> */}
                                                    <tr>
                                                        <td>
                                                            <a href="#!" className="fw-medium link-primary">#VZ2112</a>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0 me-2">
                                                                    <img src="/assets/images/users/avatar-9.jpg" alt="" className="avatar-xs rounded-circle" />
                                                                </div>
                                                                <div className="flex-grow-1">Jenson Carlson</div>
                                                            </div>
                                                        </td>
                                                        <td>Product Director</td>
                                                        <td>
                                                            <span className="text-success">$330.00</span>
                                                        </td>
                                                        <td>Pahoa, US</td>
                                                        <td>
                                                            <span className="badge badge-soft-success">Full Time</span>
                                                        </td>
                                                        <td>
                                                            <h5 className="fs-14 fw-medium mb-0">4.7<span className="text-muted fs-11 ms-1">(4.31k Rating)</span></h5>
                                                        </td>
                                                    </tr>
                                                    {/* <!-- end tr --> */}
                                                </tbody>
                                                {/* <!-- end tbody --> */}
                                            </table>
                                            {/* <!-- end table --> */}
                                        </div>
                                    </div>
                                </div> 
                                {/* <!-- .card--> */}
                            </div>
                             {/* <!-- .col--> */}
                            <div className="col-xxl-4">
                                {/* <!-- card --> */}
                                <div className="card card-height-100">
                                    <div className="card-header align-items-center d-flex">
                                        <h4 className="card-title mb-0 flex-grow-1">Jobs Views Location</h4>
                                        <div className="flex-shrink-0">
                                            <button type="button" className="btn btn-soft-primary btn-sm">
                                                Export Report
                                            </button>
                                        </div>
                                    </div>
                                    {/* <!-- end card header --> */}
                            
                                    {/* <!-- card body --> */}
                                    <div className="card-body">
                            
                                        <div id="sales-by-locations" data-colors='["--vz-light", "--vz-success", "--vz-primary"]' style={{height: '269px'}} dir="ltr"></div>
                            
                                        <div className="px-2 py-2 mt-4">
                                            <p className="mb-1">Canada <span className="float-end">75%</span></p>
                                            <div className="progress mt-2" style={{height: '6px'}}>
                                                <div className="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="75"></div>
                                            </div>
                            
                                            <p className="mt-3 mb-1">Greenland <span className="float-end">47%</span>
                                            </p>
                                            <div className="progress mt-2" style={{height: '6px'}}>
                                                <div className="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{width: '47%'}} aria-valuenow="47" aria-valuemin="0" aria-valuemax="47"></div>
                                            </div>
                            
                                            <p className="mt-3 mb-1">Russia <span className="float-end">82%</span></p>
                                            <div className="progress mt-2" style={{height: '6px'}}>
                                                <div className="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{width: '82%'}} aria-valuenow="82" aria-valuemin="0" aria-valuemax="82"></div>
                                            </div>
                                        </div>
                                    </div>
                                  {/* <!-- end card body --> */}
                                </div>
                                
                                {/* <!-- end card --> */}
                            </div>
                            
                            {/* <!-- end col --> */}
                        </div> 
                        {/* <!-- end row--> */}
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

export default Job