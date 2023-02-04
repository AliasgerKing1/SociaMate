import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { getUser } from "../../../../Redux/UserReducer";
import { getAdmin } from "../../../../Redux/AdminReducer";

import {totalUser,deleteUser,getUsers } from "../../../../Services/AdminService/AdminService";
import { getAdminProfile } from "../../../../Services/AdminService/AdminService";

import Header from "../../../shared/Header/Header";
import Footer from "../../../shared/Footer/Footer";
import NotificationModel from "../../../shared/NotificationModel/NotificationModel";
import RightMenu from "../../../shared/RightMenu/RightMenu";
import ChooseLayout from "../../../shared/ChooseLayout/ChooseLayout";


const Analytics = () => {
  let dispatch = useDispatch();
  let state = useSelector(state=>state.UserReducer)
  let state2 = useSelector(state=>state.AdminReducer)
let [usersCount, setUsersCount] = useState();
let [users, setUsers] = useState([]);
let [deleteUserId, setDeleteUserId] = useState([]);
useEffect(()=> {
totalUser().then(result=> {
  setUsersCount(result.data.total);
})
},[])

let getData = async () => {
let result = await getUsers();
dispatch(getUser(result.data))
}

let getAdminData = async () => {
  let result = await getAdminProfile();
  dispatch(getAdmin(result.data))
}

useEffect(()=> {
if(state.length == 0) {
  getData();
}
if(state2.length == 0) {
  getAdminData();
}
},[])

let confirmDelete = (user) => {
setDeleteUserId(user)
}
let removeUser = () => {
 deleteUser(deleteUserId._id).then(result=> {
  setUsers((preData)=> {
return preData.filter(item => item != deleteUserId);
  })
 })
} 
  return (
    <div>
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
                    <h4 className="mb-sm-0">Analytics</h4>

                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <Link to="/admin/analytics">Dashboards</Link>
                        </li>
                        <li className="breadcrumb-item active">Analytics</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end page title --> */}

              <div className="row">
                <div className="col-xxl-5">
                  <div className="d-flex flex-column h-100">
                    <div className="row h-100">
                      <div className="col-12">
                        <div className="card">
                          <div className="card-body p-0">
                            <div
                              className="alert alert-warning border-0 rounded-0 m-0 d-flex align-items-center"
                              role="alert"
                            >
                              <i
                                data-feather="alert-triangle"
                                className="text-warning me-2 icon-sm"
                              ></i>
                              <div className="flex-grow-1 text-truncate">
                                Your free trial expired in <b>17</b> days.
                              </div>
                              <div className="flex-shrink-0">
                                <a
                                  href="pages-pricing.html"
                                  className="text-reset text-decoration-underline"
                                >
                                  <b>Upgrade</b>
                                </a>
                              </div>
                            </div>

                            <div className="row align-items-end">
                              <div className="col-sm-8">
                                <div className="p-3">
                                  <p className="fs-20 lh-base">
                                    Upgrade your plan from a
                                    <span className="fw-semibold">
                                      Free trial
                                    </span>
                                    , to ‘Premium Plan’
                                    <i className="mdi mdi-arrow-right"></i>
                                  </p>
                                  <div className="mt-3">
                                    <a
                                      href="pages-pricing.html"
                                      className="btn btn-secondary"
                                    >
                                      Upgrade Account!
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-4">
                                <div className="px-3">
                                  <img
                                    src="/assets/images/user-illustarator-2.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- end card-body--> */}
                        </div>
                      </div>
                      {/* <!-- end col--> */}
                    </div>
                    {/* <!-- end row--> */}

                    <div className="row">
                      <div className="col-md-6">
                        <div className="card card-animate">
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p className="fw-medium text-muted mb-0">
                                  Users
                                </p>
                                <h2 className="mt-4 ff-secondary fw-semibold">
                                  <span
                                    className="counter-value"
                                    data-target="28.05"
                                  >
                                    {usersCount}
                                  </span>
                                  {/* <span>K</span>
                                  <span>M</span>
                                  <span>B</span>
                                  <span>T</span> */}
                                  
                                </h2>
                                <p className="mb-0 text-muted">
                                  <span className="badge bg-light text-success mb-0">
                                    <i className="ri-arrow-up-line align-middle"></i>
                                    16.24 %
                                  </span>
                                  vs. previous month
                                </p>
                              </div>
                              <div>
                                <div className="avatar-sm flex-shrink-0">
                                  <span className="avatar-title bg-soft-info rounded-circle fs-2">
                                    <i
                                      data-feather="users"
                                      className="text-info"
                                    ></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- end card body --> */}
                        </div>
                        {/* <!-- end card--> */}
                      </div>
                      {/* <!-- end col--> */}

                      <div className="col-md-6">
                        <div className="card card-animate">
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p className="fw-medium text-muted mb-0">
                                  Sessions
                                </p>
                                <h2 className="mt-4 ff-secondary fw-semibold">
                                  <span
                                    className="counter-value"
                                    data-target="97.66"
                                  >
                                    0
                                  </span>
                                  k
                                </h2>
                                <p className="mb-0 text-muted">
                                  <span className="badge bg-light text-danger mb-0">
                                    <i className="ri-arrow-down-line align-middle"></i>
                                    3.96 %
                                  </span>
                                  vs. previous month
                                </p>
                              </div>
                              <div>
                                <div className="avatar-sm flex-shrink-0">
                                  <span className="avatar-title bg-soft-info rounded-circle fs-2">
                                    <i
                                      data-feather="activity"
                                      className="text-info"
                                    ></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- end card body --> */}
                        </div>
                        {/* <!-- end card--> */}
                      </div>
                      {/* <!-- end col--> */}
                    </div>
                    {/* <!-- end row--> */}

                    <div className="row">
                      <div className="col-md-6">
                        <div className="card card-animate">
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p className="fw-medium text-muted mb-0">
                                  Avg. Visit Duration
                                </p>
                                <h2 className="mt-4 ff-secondary fw-semibold">
                                  <span
                                    className="counter-value"
                                    data-target="3"
                                  >
                                    0
                                  </span>
                                  m
                                  <span
                                    className="counter-value"
                                    data-target="40"
                                  >
                                    0
                                  </span>
                                  sec
                                </h2>
                                <p className="mb-0 text-muted">
                                  <span className="badge bg-light text-danger mb-0">
                                    <i className="ri-arrow-down-line align-middle"></i>
                                    0.24 %
                                  </span>
                                  vs. previous month
                                </p>
                              </div>
                              <div>
                                <div className="avatar-sm flex-shrink-0">
                                  <span className="avatar-title bg-soft-info rounded-circle fs-2">
                                    <i
                                      data-feather="clock"
                                      className="text-info"
                                    ></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- end card body --> */}
                        </div>
                        {/* <!-- end card--> */}
                      </div>
                      {/* <!-- end col--> */}

                      <div className="col-md-6">
                        <div className="card card-animate">
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p className="fw-medium text-muted mb-0">
                                  Bounce Rate
                                </p>
                                <h2 className="mt-4 ff-secondary fw-semibold">
                                  <span
                                    className="counter-value"
                                    data-target="33.48"
                                  >
                                    0
                                  </span>
                                  %
                                </h2>
                                <p className="mb-0 text-muted">
                                  <span className="badge bg-light text-success mb-0">
                                    <i className="ri-arrow-up-line align-middle"></i>
                                    7.05 %
                                  </span>
                                  vs. previous month
                                </p>
                              </div>
                              <div>
                                <div className="avatar-sm flex-shrink-0">
                                  <span className="avatar-title bg-soft-info rounded-circle fs-2">
                                    <i
                                      data-feather="external-link"
                                      className="text-info"
                                    ></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- end card body --> */}
                        </div>
                        {/* <!-- end card--> */}
                      </div>
                      {/* <!-- end col--> */}
                    </div>
                    {/* <!-- end row--> */}
                  </div>
                </div>
                {/* <!-- end col--> */}

                <div className="col-xxl-7">
                  <div className="row h-100">
                    <div className="col-xl-6">
                      <div className="card card-height-100">
                        <div className="card-header align-items-center d-flex">
                          <h4 className="card-title mb-0 flex-grow-1">
                            Live Users By Country
                          </h4>
                          <div className="flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-soft-primary btn-sm"
                            >
                              Export Report
                            </button>
                          </div>
                        </div>
                        {/* <!-- end card header --> */}

                        {/* <!-- card body --> */}
                        <div className="card-body">
                          <div
                            id="users-by-country"
                            data-colors='["--vz-light"]'
                            className="text-center"
                            style={{ height: "252px" }}
                          ></div>

                          <div className="table-responsive table-card mt-3">
                            <table className="table table-borderless table-sm table-centered align-middle table-nowrap mb-1">
                              <thead className="text-muted border-dashed border border-start-0 border-end-0 bg-soft-light">
                                <tr>
                                  <th>Duration (Secs)</th>
                                  <th style={{ width: "30%" }}>Sessions</th>
                                  <th style={{ width: "30%" }}>Views</th>
                                </tr>
                              </thead>
                              <tbody className="border-0">
                                <tr>
                                  <td>0-30</td>
                                  <td>2,250</td>
                                  <td>4,250</td>
                                </tr>
                                <tr>
                                  <td>31-60</td>
                                  <td>1,501</td>
                                  <td>2,050</td>
                                </tr>
                                <tr>
                                  <td>61-120</td>
                                  <td>750</td>
                                  <td>1,600</td>
                                </tr>
                                <tr>
                                  <td>121-240</td>
                                  <td>540</td>
                                  <td>1,040</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        {/* <!-- end card body --> */}
                      </div>
                      {/* <!-- end card --> */}
                    </div>
                    {/* <!-- end col --> */}

                    <div className="col-xl-6">
                    {/* <!-- end row --> */}
        <div className="card">
            <div className="card-header">
                <h4 className="card-title mb-0">All Users</h4>
            </div>
            {/* <!-- end card header --> */}

            <div className="card-body">
                <p className="text-muted">Example of how to use the pagination plugin</p>

                <div id="pagination-list">
                    <div className="mb-2">
                        <input className="search form-control" placeholder="Search" />
                    </div>

                    <div className="mx-n3">
                        <ul className="list list-group list-group-flush mb-0">
                        {
                          state.map((u)=> {
                            return(
                              <li key={u._id} className="list-group-item">
                                <div className="d-flex align-items-center pagi-list">
                                    <div className="flex-shrink-0 me-3">
                                        <div>
                                            <img className="image avatar-xs rounded-circle" alt="" src={u.image ? (u.image) : "/assets/images/users/avatar-1.jpg"} /> 
                                        </div>
                                    </div>

                                    <div className="flex-grow-1 overflow-hidden">
                                        <h5 className="fs-14 mb-1"><a href="#" className="link text-dark">{u.userName}</a></h5>
                                        <p className="born timestamp text-muted mb-0">26-01-2023 </p>
                                    </div>

                                    <div className="flex-shrink-0 ms-2" data-bs-toggle="modal" data-bs-target="#delModal" id="custom-sa-warning">
                                        <div>
                                            <button type="button" className="btn btn-sm btn-light" onClick={()=> confirmDelete(u)}><i className="ri-mail-line align-bottom"></i> Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            )
                          })
                        }
                        </ul>
                        {/* <!-- end ul list --> */}

                        <div className="d-flex justify-content-center">
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
                </div>
            </div>
            {/* <!-- end card --> */}
        </div>
        {/* <!-- end col --> */}

                      {/* <!-- end card --> */}
                    </div>
                    {/* <!-- end col--> */}
                  </div>
                  {/* <!-- end row--> */}
                </div>
                {/* <!-- end col --> */}
              </div>
              {/* <!-- end row--> */}

              <div className="row">
                <div className="col-xl-6">
                  <div className="card">
                    <div className="card-header border-0 align-items-center d-flex">
                      <h4 className="card-title mb-0 flex-grow-1">
                        Audiences Metrics
                      </h4>
                      <div>
                        <button
                          type="button"
                          className="btn btn-soft-secondary btn-sm"
                        >
                          ALL
                        </button>
                        <button
                          type="button"
                          className="btn btn-soft-secondary btn-sm"
                        >
                          1M
                        </button>
                        <button
                          type="button"
                          className="btn btn-soft-secondary btn-sm"
                        >
                          6M
                        </button>
                        <button
                          type="button"
                          className="btn btn-soft-primary btn-sm"
                        >
                          1Y
                        </button>
                      </div>
                    </div>
                    {/* <!-- end card header --> */}
                    <div className="card-header p-0 border-0 bg-soft-light">
                      <div className="row g-0 text-center">
                        <div className="col-6 col-sm-4">
                          <div className="p-3 border border-dashed border-start-0">
                            <h5 className="mb-1">
                              <span className="counter-value" data-target="854">
                                0
                              </span>
                              <span className="text-success ms-1 fs-13">
                                49%
                                <i className="ri-arrow-right-up-line ms-1 align-middle"></i>
                              </span>
                            </h5>
                            <p className="text-muted mb-0">Avg. Session</p>
                          </div>
                        </div>
                        {/* <!--end col--> */}
                        <div className="col-6 col-sm-4">
                          <div className="p-3 border border-dashed border-start-0">
                            <h5 className="mb-1">
                              <span
                                className="counter-value"
                                data-target="1278"
                              >
                                0
                              </span>
                              <span className="text-success ms-1 fs-13">
                                60%
                                <i className="ri-arrow-right-up-line ms-1 align-middle"></i>
                              </span>
                            </h5>
                            <p className="text-muted mb-0">Conversion Rate</p>
                          </div>
                        </div>
                        {/* <!--end col--> */}
                        <div className="col-6 col-sm-4">
                          <div className="p-3 border border-dashed border-start-0 border-end-0">
                            <h5 className="mb-1">
                              <span className="counter-value" data-target="3">
                                0
                              </span>
                              m
                              <span className="counter-value" data-target="40">
                                0
                              </span>
                              sec
                              <span className="text-success ms-1 fs-13">
                                37%
                                <i className="ri-arrow-right-up-line ms-1 align-middle"></i>
                              </span>
                            </h5>
                            <p className="text-muted mb-0">
                              Avg. Session Duration
                            </p>
                          </div>
                        </div>
                        {/* <!--end col--> */}
                      </div>
                    </div>
                    {/* <!-- end card header --> */}
                    <div className="card-body p-0 pb-2">
                      <div>
                        <div
                          id="audiences_metrics_charts"
                          data-colors='["--vz-primary", "--vz-gray-300"]'
                          className="apex-charts"
                          dir="ltr"
                        ></div>
                      </div>
                    </div>
                    {/* <!-- end card body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}

                <div className="col-xl-6">
                  <div className="card card-height-100">
                    <div className="card-header align-items-center d-flex">
                      <h4 className="card-title mb-0 flex-grow-1">
                        Audiences Sessions by Country
                      </h4>
                      <div className="flex-shrink-0">
                        <div className="dropdown card-header-dropdown">
                          <a
                            className="text-reset dropdown-btn"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="fw-semibold text-uppercase fs-13">
                              Sort by:
                            </span>
                            <span className="text-muted">
                              Current Week
                              <i className="mdi mdi-chevron-down ms-1"></i>
                            </span>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Today
                            </a>
                            <a className="dropdown-item" href="#">
                              Last Week
                            </a>
                            <a className="dropdown-item" href="#">
                              Last Month
                            </a>
                            <a className="dropdown-item" href="#">
                              Current Year
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- end card header --> */}
                    <div className="card-body p-0">
                      <div>
                        <div
                          id="audiences-sessions-country-charts"
                          data-colors='["--vz-success", "--vz-secondary"]'
                          className="apex-charts"
                          dir="ltr"
                        ></div>
                      </div>
                    </div>
                    {/* <!-- end cardbody --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}
              </div>
              {/* <!-- end row --> */}

              <div className="row">
                <div className="col-xl-4">
                  <div className="card card-height-100">
                    <div className="card-header align-items-center d-flex">
                      <h4 className="card-title mb-0 flex-grow-1">
                        Users by Device
                      </h4>
                      <div className="flex-shrink-0">
                        <div className="dropdown card-header-dropdown">
                          <a
                            className="text-reset dropdown-btn"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="text-muted fs-16">
                              <i className="mdi mdi-dots-vertical align-middle"></i>
                            </span>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Today
                            </a>
                            <a className="dropdown-item" href="#">
                              Last Week
                            </a>
                            <a className="dropdown-item" href="#">
                              Last Month
                            </a>
                            <a className="dropdown-item" href="#">
                              Current Year
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- end card header --> */}
                    <div className="card-body">
                      <div
                        id="user_device_pie_charts"
                        data-colors='["--vz-primary", "--vz-warning", "--vz-info"]'
                        className="apex-charts"
                        dir="ltr"
                      ></div>

                      <div className="table-responsive mt-3">
                        <table className="table table-borderless table-sm table-centered align-middle table-nowrap mb-0">
                          <tbody className="border-0">
                            <tr>
                              <td>
                                <h4 className="text-truncate fs-14 fs-medium mb-0">
                                  <i className="ri-stop-fill align-middle fs-18 text-primary me-2"></i>
                                  Desktop Users
                                </h4>
                              </td>
                              <td>
                                <p className="text-muted mb-0">
                                  <i
                                    data-feather="users"
                                    className="me-2 icon-sm"
                                  ></i>
                                  78.56k
                                </p>
                              </td>
                              <td className="text-end">
                                <p className="text-success fw-medium fs-13 mb-0">
                                  <i className="ri-arrow-up-s-fill fs-5 align-middle"></i>
                                  2.08%
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h4 className="text-truncate fs-14 fs-medium mb-0">
                                  <i className="ri-stop-fill align-middle fs-18 text-warning me-2"></i>
                                  Mobile Users
                                </h4>
                              </td>
                              <td>
                                <p className="text-muted mb-0">
                                  <i
                                    data-feather="users"
                                    className="me-2 icon-sm"
                                  ></i>
                                  105.02k
                                </p>
                              </td>
                              <td className="text-end">
                                <p className="text-danger fw-medium fs-13 mb-0">
                                  <i className="ri-arrow-down-s-fill fs-5 align-middle"></i>
                                  10.52%
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h4 className="text-truncate fs-14 fs-medium mb-0">
                                  <i className="ri-stop-fill align-middle fs-18 text-info me-2"></i>
                                  Tablet Users
                                </h4>
                              </td>
                              <td>
                                <p className="text-muted mb-0">
                                  <i
                                    data-feather="users"
                                    className="me-2 icon-sm"
                                  ></i>
                                  42.89k
                                </p>
                              </td>
                              <td className="text-end">
                                <p className="text-danger fw-medium fs-13 mb-0">
                                  <i className="ri-arrow-down-s-fill fs-5 align-middle"></i>
                                  7.36%
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* <!-- end card body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}

                <div className="col-xl-4 col-md-6">
                  <div className="card card-height-100">
                    <div className="card-header align-items-center d-flex">
                      <h4 className="card-title mb-0 flex-grow-1">
                        Top Referrals Pages
                      </h4>
                      <div className="flex-shrink-0">
                        <button
                          type="button"
                          className="btn btn-soft-primary btn-sm"
                        >
                          Export Report
                        </button>
                      </div>
                    </div>

                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <h6 className="text-muted text-uppercase fw-semibold text-truncate fs-13 mb-3">
                            Total Referrals Page
                          </h6>
                          <h4 className="mb-0">725,800</h4>
                          <p className="mb-0 mt-2 text-muted">
                            <span className="badge badge-soft-success mb-0">
                              <i className="ri-arrow-up-line align-middle"></i>
                              15.72 %
                            </span>
                            vs. previous month
                          </p>
                        </div>
                        {/* <!-- end col --> */}
                        <div className="col-6">
                          <div className="text-center">
                            <img
                              src="/assets/images/illustrator-1.png"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                        {/* <!-- end col --> */}
                      </div>
                      {/* <!-- end row --> */}
                      <div className="mt-3 pt-2">
                        <div className="progress progress-lg rounded-pill">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "18%" }}
                            aria-valuenow="18"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "22%" }}
                            aria-valuenow="22"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "16%" }}
                            aria-valuenow="16"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "19%" }}
                            aria-valuenow="19"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      {/* <!-- end --> */}

                      <div className="mt-3 pt-2">
                        <div className="d-flex mb-2">
                          <div className="flex-grow-1">
                            <p className="text-truncate text-muted fs-15 mb-0">
                              <i className="mdi mdi-circle align-middle text-primary me-2"></i>
                              www.google.com
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <p className="mb-0">24.58%</p>
                          </div>
                        </div>
                        {/* <!-- end --> */}
                        <div className="d-flex mb-2">
                          <div className="flex-grow-1">
                            <p className="text-truncate text-muted fs-15 mb-0">
                              <i className="mdi mdi-circle align-middle text-info me-2"></i>
                              www.youtube.com
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <p className="mb-0">17.51%</p>
                          </div>
                        </div>
                        {/* <!-- end --> */}
                        <div className="d-flex mb-2">
                          <div className="flex-grow-1">
                            <p className="text-truncate text-muted fs-15 mb-0">
                              <i className="mdi mdi-circle align-middle text-success me-2"></i>
                              www.meta.com
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <p className="mb-0">23.05%</p>
                          </div>
                        </div>
                        {/* <!-- end --> */}
                        <div className="d-flex mb-2">
                          <div className="flex-grow-1">
                            <p className="text-truncate text-muted fs-15 mb-0">
                              <i className="mdi mdi-circle align-middle text-warning me-2"></i>
                              www.medium.com
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <p className="mb-0">12.22%</p>
                          </div>
                        </div>
                        {/* <!-- end --> */}
                        <div className="d-flex">
                          <div className="flex-grow-1">
                            <p className="text-truncate text-muted fs-15 mb-0">
                              <i className="mdi mdi-circle align-middle text-danger me-2"></i>
                              Other
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <p className="mb-0">17.58%</p>
                          </div>
                        </div>
                        {/* <!-- end --> */}
                      </div>
                      {/* <!-- end --> */}

                      <div className="mt-2 text-center">
                        <a
                          href="#"
                          className="text-muted text-decoration-underline"
                        >
                          Show All
                        </a>
                      </div>
                    </div>
                    {/* <!-- end card body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}

                <div className="col-xl-4 col-md-6">
                  <div className="card card-height-100">
                    <div className="card-header align-items-center d-flex">
                      <h4 className="card-title mb-0 flex-grow-1">Top Pages</h4>
                      <div className="flex-shrink-0">
                        <div className="dropdown card-header-dropdown">
                          <a
                            className="text-reset dropdown-btn"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="text-muted fs-16">
                              <i className="mdi mdi-dots-vertical align-middle"></i>
                            </span>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Today
                            </a>
                            <a className="dropdown-item" href="#">
                              Last Week
                            </a>
                            <a className="dropdown-item" href="#">
                              Last Month
                            </a>
                            <a className="dropdown-item" href="#">
                              Current Year
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- end card header --> */}
                    <div className="card-body">
                      <div className="table-responsive table-card">
                        <table className="table align-middle table-borderless table-centered table-nowrap mb-0">
                          <thead className="text-muted table-light">
                            <tr>
                              <th scope="col" style={{ width: "62" }}>
                                Active Page
                              </th>
                              <th scope="col">Active</th>
                              <th scope="col">Users</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <a href="#">/themesbrand/skote-25867</a>
                              </td>
                              <td>99</td>
                              <td>25.3%</td>
                            </tr>
                            {/* <!-- end --> */}
                            <tr>
                              <td>
                                <a href="#">/dashonic/chat-24518</a>
                              </td>
                              <td>86</td>
                              <td>22.7%</td>
                            </tr>
                            {/* <!-- end --> */}
                            <tr>
                              <td>
                                <a href="#">/skote/timeline-27391</a>
                              </td>
                              <td>64</td>
                              <td>18.7%</td>
                            </tr>
                            {/* <!-- end --> */}
                            <tr>
                              <td>
                                <a href="#">/themesbrand/minia-26441</a>
                              </td>
                              <td>53</td>
                              <td>14.2%</td>
                            </tr>
                            {/* <!-- end --> */}
                            <tr>
                              <td>
                                <a href="#">/dashon/dashboard-29873</a>
                              </td>
                              <td>33</td>
                              <td>12.6%</td>
                            </tr>
                            {/* <!-- end --> */}
                            <tr>
                              <td>
                                <a href="#">/doot/chats-29964</a>
                              </td>
                              <td>20</td>
                              <td>10.9%</td>
                            </tr>
                            {/* <!-- end --> */}
                            <tr>
                              <td>
                                <a href="#">/minton/pages-29739</a>
                              </td>
                              <td>10</td>
                              <td>07.3%</td>
                            </tr>
                            {/* <!-- end --> */}
                          </tbody>
                          {/* <!-- end tbody --> */}
                        </table>
                        {/* <!-- end table --> */}
                      </div>
                      {/* <!-- end --> */}
                    </div>
                    {/* <!-- end cardbody --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}
              </div>
              {/* <!-- end row --> */}
            </div>
            {/* <!-- container-fluid --> */}
          </div>
          {/* <!-- End Page-content --> */}

          <Footer />
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
      {/* <div id="preloader"><div id="status"><div className="spinner-border text-primary avatar-sm" role="status"><span className="visually-hidden">Loading...</span></div></div></div> */}

      <div className="customizer-setting d-none d-md-block">
        <div
          className="btn-info btn-rounded shadow-lg btn btn-icon btn-lg p-2"
          data-bs-toggle="offcanvas"
          data-bs-target="#theme-settings-offcanvas"
          aria-controls="theme-settings-offcanvas"
        >
          <i className="mdi mdi-spin mdi-cog-outline fs-22"></i>
        </div>
      </div>

      {/* <!-- Theme Settings --> */}
      <ChooseLayout />

          {/* <!-- removeNotificationModal --> */}
<div id="delModal" className="modal fade zoomIn" tabIndex="-1" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="NotificationModalbtn-close"></button>
            </div>
            <div className="modal-body">
                <div className="mt-2 text-center">
                    <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop" colors="primary:#f7b84b,secondary:#f06548" style={{width:'100px',height:'100px'}}></lord-icon>
                    <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                        <h4>Are you sure ?</h4>
                        <p className="text-muted mx-4 mb-0">Are you sure you want to remove this User ?</p>
                    </div>
                </div>
                <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                    <button type="button" className="btn w-sm btn-light" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn w-sm btn-danger" id="delete-notification" onClick={removeUser}>

                    Yes, Delete It!</button>
                </div>
            </div>

        </div>
        {/* <!-- /.modal-content --> */}
    </div>
    {/* <!-- /.modal-dialog --> */}
</div>
{/* <!-- /.modal --> */}
    </div>
  );
};

export default Analytics;
