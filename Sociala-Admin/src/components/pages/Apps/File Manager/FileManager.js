import React from 'react';
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';
import NotificationModel from "../../../shared/NotificationModel/NotificationModel";
import RightMenu from '../../../shared/RightMenu/RightMenu';
import ChooseLayout from "../../../shared/ChooseLayout/ChooseLayout";
const FileManager = () => {
  return (
    <>

<div className="file-detail-show">

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
                        <div className="file-manager-sidebar">
                            <div className="p-3 d-flex flex-column h-100">
                                <div className="mb-3">
                                    <h5 className="mb-0 fw-semibold fs-16">My Drive</h5>
                                </div>
                                <div className="search-box">
                                    <input type="text" className="form-control bg-light border-light" placeholder="Search here..." />
                                    <i className="ri-search-2-line search-icon"></i>
                                </div>
                                <div className="mt-3 mx-n4 px-4 file-menu-sidebar-scroll" data-simplebar>
                                    <ul className="list-unstyled file-manager-menu">
                                        <li>
                                            <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true" aria-controls="collapseExample">
                                                <i className="ri-folder-2-line align-bottom me-2"></i> <span className="file-list-link">My Drive</span>
                                            </a>
                                            <div className="collapse show" id="collapseExample">
                                                <ul className="sub-menu list-unstyled">
                                                    <li>
                                                        <a href="#!">Assets</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Marketing</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Personal</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Projects</a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">Templates</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#!"><i className="ri-file-list-2-line align-bottom me-2"></i> <span className="file-list-link">Documents</span></a>
                                        </li>
                                        <li>
                                            <a href="#!"><i className="ri-image-2-line align-bottom me-2"></i> <span className="file-list-link">Media</span></a>
                                        <li>
                                            <a href="#!"><i className="ri-history-line align-bottom me-2"></i> <span className="file-list-link">Recents</span></a>
                                        </li>
                                        <li>
                                            <a href="#!"><i className="ri-star-line align-bottom me-2"></i> <span className="file-list-link">Important</span></a>
                                        </li>
                                        </li>
                                        <li>
                                            <a href="#!"><i className="ri-delete-bin-line align-bottom me-2"></i> <span className="file-list-link">Deleted</span></a>
                                        </li>
                                    </ul>
                                </div>


                                <div className="mt-auto">
                                    <h6 className="fs-11 text-muted text-uppercase mb-3">Storage Status</h6>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0">
                                            <i className="ri-database-2-line fs-17"></i>
                                        </div>
                                        <div className="flex-grow-1 ms-3 overflow-hidden">
                                            <div className="progress mb-2 progress-sm">
                                                <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span className="text-muted fs-12 d-block text-truncate"><b>47.52</b>GB used of <b>119</b>GB</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="file-manager-content w-100 p-3 py-0">
                            <div className="mx-n3 pt-4 px-4 file-manager-content-scroll" data-simplebar>
                                <div id="folder-list" className="mb-2">
                                    <div className="row justify-content-beetwen g-2 mb-3">

                                        <div className="col">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2 d-block d-lg-none">
                                                    <button type="button" className="btn btn-soft-success btn-icon btn-sm fs-16 file-menu-btn">
                                                        <i className="ri-menu-2-fill align-bottom"></i>
                                                    </button>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-16 mb-0">Folders</h5>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end col--> */}
                                        <div className="col-auto">
                                            <div className="d-flex gap-2 align-items-start">
                                                <select className="form-control" data-choices data-choices-search-false name="choices-single-default" id="file-type">
                                                    <option value="">File Type</option>
                                                    <option value="All" selected>All</option>
                                                    <option value="Video">Video</option>
                                                    <option value="Images">Images</option>
                                                    <option value="Music">Music</option>
                                                    <option value="Documents">Documents</option>
                                                </select>
    
                                                <button className="btn btn-primary w-sm create-folder-modal flex-shrink-0" data-bs-toggle="modal" data-bs-target="#createFolderModal"><i className="ri-add-line align-bottom me-1"></i> Create Folders</button>
                                            </div>
                                        </div>
                                        {/* <!--end col--> */}
                                    </div>
                                    {/* <!--end row--> */}
                                    <div className="row" id="folderlist-data">
                                        <div className="col-xxl-3 col-6 folder-card">
                                            <div className="card bg-light shadow-none" id="folder-1">
                                                <div className="card-body">
                                                    <div className="d-flex mb-1">
                                                        <div className="form-check form-check-danger mb-3 fs-15 flex-grow-1">
                                                            <input className="form-check-input" type="checkbox" value="" id="folderlistCheckbox_1" checked />
                                                            <label className="form-check-label" htmlFor="folderlistCheckbox_1"></label>
                                                        </div>
                                                        <div className="dropdown">
                                                            <button className="btn btn-ghost-primary btn-icon btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill fs-16 align-bottom"></i>
                                                            </button>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li><a className="dropdown-item view-item-btn" href="#;">Open</a></li>
                                                                <li><a className="dropdown-item edit-folder-list" href="#createFolderModal" data-bs-toggle="modal" role="button">Rename</a></li>
                                                                <li><a className="dropdown-item" href="#removeFolderModal" data-bs-toggle="modal" role="button">Delete</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="text-center">
                                                        <div className="mb-2">
                                                            <i className="ri-folder-2-fill align-bottom text-warning display-5"></i>
                                                        </div>
                                                        <h6 className="fs-15 folder-name">Projects</h6>
                                                    </div>
                                                    <div className="hstack mt-4 text-muted">
                                                        <span className="me-auto"><b>349</b> Files</span>
                                                        <span><b>4.10</b>GB</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end col--> */}
                                        <div className="col-xxl-3 col-6 folder-card">
                                            <div className="card bg-light shadow-none" id="folder-2">
                                                <div className="card-body">
                                                    <div className="d-flex mb-1">
                                                        <div className="form-check form-check-danger mb-3 fs-15 flex-grow-1">
                                                            <input className="form-check-input" type="checkbox" value="" id="folderlistCheckbox_2" />
                                                            <label className="form-check-label" htmlFor="folderlistCheckbox_2"></label>
                                                        </div>
                                                        <div className="dropdown">
                                                            <button className="btn btn-ghost-primary btn-icon btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill fs-16 align-bottom"></i>
                                                            </button>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li><a className="dropdown-item view-item-btn" href="#;">Open</a></li>
                                                                <li><a className="dropdown-item edit-folder-list" href="#createFolderModal" data-bs-toggle="modal" role="button">Rename</a></li>
                                                                <li><a className="dropdown-item" href="#removeFolderModal" data-bs-toggle="modal" role="button">Delete</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="text-center">
                                                        <div className="mb-2">
                                                            <i className="ri-folder-2-fill align-bottom text-warning display-5"></i>
                                                        </div>
                                                        <h6 className="fs-15 folder-name">Documents</h6>
                                                    </div>
                                                    <div className="hstack mt-4 text-muted">
                                                        <span className="me-auto"><b>2348</b> Files</span>
                                                        <span><b>27.01</b>GB</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end col--> */}
                                        <div className="col-xxl-3 col-6 folder-card">
                                            <div className="card bg-light shadow-none" id="folder-3">
                                                <div className="card-body">
                                                    <div className="d-flex mb-1">
                                                        <div className="form-check form-check-danger mb-3 fs-15 flex-grow-1">
                                                            <input className="form-check-input" type="checkbox" value="" id="folderlistCheckbox_3" />
                                                            <label className="form-check-label" htmlFor="folderlistCheckbox_3"></label>
                                                        </div>
                                                        <div className="dropdown">
                                                            <button className="btn btn-ghost-primary btn-icon btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill fs-16 align-bottom"></i>
                                                            </button>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li><a className="dropdown-item view-item-btn" href="#;">Open</a></li>
                                                                <li><a className="dropdown-item edit-folder-list" href="#createFolderModal" data-bs-toggle="modal" role="button">Rename</a></li>
                                                                <li><a className="dropdown-item" href="#removeFolderModal" data-bs-toggle="modal" role="button">Delete</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="text-center">
                                                        <div className="mb-2">
                                                            <i className="ri-folder-2-fill align-bottom text-warning display-5"></i>
                                                        </div>
                                                        <h6 className="fs-15 folder-name">Media</h6>
                                                    </div>
                                                    <div className="hstack mt-4 text-muted">
                                                        <span className="me-auto"><b>12480</b> Files</span>
                                                        <span><b>20.87</b>GB</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end col--> */}
                                        <div className="col-xxl-3 col-6 folder-card">
                                            <div className="card bg-light shadow-none" id="folder-4">
                                                <div className="card-body">
                                                    <div className="d-flex mb-1">
                                                        <div className="form-check form-check-danger mb-3 fs-15 flex-grow-1">
                                                            <input className="form-check-input" type="checkbox" value="" id="folderlistCheckbox_4" checked />
                                                            <label className="form-check-label" htmlFor="folderlistCheckbox_4"></label>
                                                        </div>
                                                        <div className="dropdown">
                                                            <button className="btn btn-ghost-primary btn-icon btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-2-fill fs-16 align-bottom"></i>
                                                            </button>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li><a className="dropdown-item view-item-btn" href="#;">Open</a></li>
                                                                <li><a className="dropdown-item edit-folder-list" href="#createFolderModal" data-bs-toggle="modal" role="button">Rename</a></li>
                                                                <li><a className="dropdown-item" href="#removeFolderModal" data-bs-toggle="modal" role="button">Delete</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="text-center">
                                                        <div className="mb-2">
                                                            <i className="ri-folder-2-fill align-bottom text-warning display-5"></i>
                                                        </div>
                                                        <h6 className="fs-15 folder-name">Velzon v1.7.0</h6>
                                                    </div>
                                                    <div className="hstack mt-4 text-muted">
                                                        <span className="me-auto"><b>180</b> Files</span>
                                                        <span><b>478.65</b>MB</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end col--> */}
                                    </div>
                                    {/* <!--end row--> */}
                                </div>
                                <div>
                                    <div className="d-flex align-items-center mb-3">
                                        <h5 className="flex-grow-1 fs-16 mb-0" id="filetype-title">Recent File</h5>
                                        <div className="flex-shrink-0">
                                            <button className="btn btn-primary createFile-modal" data-bs-toggle="modal" data-bs-target="#createFileModal"><i className="ri-add-line align-bottom me-1"></i> Create File</button>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        {/* <table className="table align-middle table-nowrap mb-0">
                                            <thead className="table-active">
                                                <tr>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">File Item</th>
                                                    <th scope="col">File Size</th>
                                                    <th scope="col">Recent Date</th>
                                                    <th scope="col" className="text-center">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody id="file-list">

                                            </tbody>
                                        </table> */}
                                        <div class="card">
                                <div class="card-body">
                                    <div class="live-preview">
                                        <div class="table-responsive">
                                            <table class="table table-borderless align-middle table-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">ID</th>
                                                        <th scope="col">File Name</th>
                                                        <th scope="col">Job Title</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="fw-medium">01</td>
                                                        <td><i class="ri-gallery-fill align-bottom text-success"></i> Annette Black</td>
                                                        <td>Industrial Designer</td>
                                                        <td>10, Nov 2021</td>
                                                        <td><span class="badge badge-soft-success">Active</span></td>
                                                        <td>
                                                            <div class="hstack gap-3 fs-15">
                                                                <a href="#;" class="link-primary"><i class="ri-settings-4-line"></i></a>
                                                                <a href="#;" class="link-danger"><i class="ri-delete-bin-5-line"></i></a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="fw-medium">02</td>
                                                        <td>Bessie Cooper</td>
                                                        <td>Graphic Designer</td>
                                                        <td>13, Nov 2021</td>
                                                        <td><span class="badge badge-soft-success">Active</span></td>
                                                        <td>
                                                            <div class="hstack gap-3 fs-15">
                                                                <a href="#;" class="link-primary"><i class="ri-settings-4-line"></i></a>
                                                                <a href="#;" class="link-danger"><i class="ri-delete-bin-5-line"></i></a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="fw-medium">03</td>
                                                        <td>Leslie Alexander</td>
                                                        <td>Product Manager</td>
                                                        <td>17, Nov 2021</td>
                                                        <td><span class="badge badge-soft-success">Active</span></td>
                                                        <td>
                                                            <div class="hstack gap-3 fs-15">
                                                                <a href="#;" class="link-primary"><i class="ri-settings-4-line"></i></a>
                                                                <a href="#;" class="link-danger"><i class="ri-delete-bin-5-line"></i></a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="fw-medium">04</td>
                                                        <td>Lenora Sandoval</td>
                                                        <td>Applications Engineer</td>
                                                        <td>25, Nov 2021</td>
                                                        <td><span class="badge badge-soft-danger">Disabled</span></td>
                                                        <td>
                                                            <div class="hstack gap-3 fs-15">
                                                                <a href="#;" class="link-primary"><i class="ri-settings-4-line"></i></a>
                                                                <a href="#;" class="link-danger"><i class="ri-delete-bin-5-line"></i></a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="d-none code-view">
                                        <pre class="language-markup" style={{height: '275px'}}><code>&lt;!-- Tables Without Borders --&gt;
&lt;table class=&quot;table table-borderless table-nowrap&quot;&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th scope=&quot;col&quot;&gt;Id&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Name&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Job Title&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Date&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Status&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
            &lt;td&gt;Annette Black&lt;/td&gt;
            &lt;td&gt;Industrial Designer&lt;/td&gt;
            &lt;td&gt;10, Nov 2021&lt;/td&gt;
            &lt;td&gt;&lt;span class=&quot;badge badge-soft-success&quot;&gt;Active&lt;/span&gt;&lt;/td&gt;
            &lt;td&gt;
                &lt;div class=&quot;hstack gap-3 fs-15&quot;&gt;
                    &lt;a href=&quot;#;&quot; class=&quot;link-primary&quot;&gt;&lt;i class=&quot;ri-settings-4-line&quot;&gt;&lt;/i&gt;&lt;/a&gt;
                    &lt;a href=&quot;#;&quot; class=&quot;link-danger&quot;&gt;&lt;i class=&quot;ri-delete-bin-5-line&quot;&gt;&lt;/i&gt;&lt;/a&gt;
                &lt;/div&gt;
            &lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
            &lt;td&gt;Bessie Cooper&lt;/td&gt;
            &lt;td&gt;Graphic Designer&lt;/td&gt;
            &lt;td&gt;13, Nov 2021&lt;/td&gt;
            &lt;td&gt;&lt;span class=&quot;badge badge-soft-success&quot;&gt;Active&lt;/span&gt;&lt;/td&gt;
            &lt;td&gt;
                &lt;div class=&quot;hstack gap-3 fs-15&quot;&gt;
                    &lt;a href=&quot;#;&quot; class=&quot;link-primary&quot;&gt;&lt;i class=&quot;ri-settings-4-line&quot;&gt;&lt;/i&gt;&lt;/a&gt;
                    &lt;a href=&quot;#;&quot; class=&quot;link-danger&quot;&gt;&lt;i class=&quot;ri-delete-bin-5-line&quot;&gt;&lt;/i&gt;&lt;/a&gt;
                &lt;/div&gt;
            &lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
            &lt;td&gt;Leslie Alexander&lt;/td&gt;
            &lt;td&gt;Product Manager&lt;/td&gt;
            &lt;td&gt;17, Nov 2021&lt;/td&gt;
            &lt;td&gt;&lt;span class=&quot;badge badge-soft-success&quot;&gt;Active&lt;/span&gt;&lt;/td&gt;
            &lt;td&gt;
                &lt;div class=&quot;hstack gap-3 fs-15&quot;&gt;
                    &lt;a href=&quot;#;&quot; class=&quot;link-primary&quot;&gt;&lt;i class=&quot;ri-settings-4-line&quot;&gt;&lt;/i&gt;&lt;/a&gt;
                    &lt;a href=&quot;#;&quot; class=&quot;link-danger&quot;&gt;&lt;i class=&quot;ri-delete-bin-5-line&quot;&gt;&lt;/i&gt;&lt;/a&gt;
                &lt;/div&gt;
            &lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;th scope=&quot;row&quot;&gt;4&lt;/th&gt;
            &lt;td&gt;Lenora Sandoval&lt;/td&gt;
            &lt;td&gt;Applications Engineer&lt;/td&gt;
            &lt;td&gt;25, Nov 2021&lt;/td&gt;
            &lt;td&gt;&lt;span class=&quot;badge badge-soft-danger&quot;&gt;Disabled&lt;/span&gt;&lt;/td&gt;
            &lt;td&gt;
                &lt;div class=&quot;hstack gap-3 fs-15&quot;&gt;
                    &lt;a href=&quot;#;&quot; class=&quot;link-primary&quot;&gt;&lt;i class=&quot;ri-settings-4-line&quot;&gt;&lt;/i&gt;&lt;/a&gt;
                    &lt;a href=&quot;#;&quot; class=&quot;link-danger&quot;&gt;&lt;i class=&quot;ri-delete-bin-5-line&quot;&gt;&lt;/i&gt;&lt;/a&gt;
                &lt;/div&gt;
            &lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
                                    </div>
                                </div>
                                {/* <!-- end card-body --> */}
                            </div>
                            {/* <!-- end card --> */}
                                    </div>
                                    <ul id="pagination" className="pagination pagination-lg"></ul>
                                    <div className="align-items-center mt-2 row g-3 text-center text-sm-start">
                                        <div className="col-sm">
                                            <div className="text-muted">Showing<span className="fw-semibold">4</span> of <span className="fw-semibold">125</span> Results
                                            </div>
                                        </div>
                                        <div className="col-sm-auto">
                                            <ul className="pagination pagination-separated pagination-sm justify-content-center justify-content-sm-start mb-0">
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
                            </div>
                        </div>
                        <div className="file-manager-detail-content p-3 py-0">
                            <div className="mx-n3 pt-3 px-3 file-detail-content-scroll" data-simplebar>
                                <div id="folder-overview">
                                    <div className="d-flex align-items-center pb-3 border-bottom border-bottom-dashed">
                                        <h5 className="flex-grow-1 fw-semibold mb-0">Overview</h5>
                                        <div>
                                            <button type="button" className="btn btn-soft-danger btn-icon btn-sm fs-16 close-btn-overview">
                                                <i className="ri-close-fill align-bottom"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div id="simple_dount_chart" data-colors='["--vz-info", "--vz-danger", "--vz-primary", "--vz-success"]' className="apex-charts mt-3" dir="ltr"></div>
                                    <div className="mt-4">
                                        <ul className="list-unstyled vstack gap-4">
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar-xs">
                                                            <div className="avatar-title rounded bg-soft-secondary text-secondary">
                                                                <i className="ri-file-text-line fs-17"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h5 className="mb-1 fs-15">Documents</h5>
                                                        <p className="mb-0 fs-12 text-muted">2348 files</p>
                                                    </div>
                                                    <b>27.01 GB</b>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar-xs">
                                                            <div className="avatar-title rounded bg-soft-success text-success">
                                                                <i className="ri-gallery-line fs-17"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h5 className="mb-1 fs-15">Media</h5>
                                                        <p className="mb-0 fs-12 text-muted">12480 files</p>
                                                    </div>
                                                    <b>20.87 GB</b>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar-xs">
                                                            <div className="avatar-title rounded bg-soft-warning text-warning">
                                                                <i className="ri-folder-2-line fs-17"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h5 className="mb-1 fs-15">Projects</h5>
                                                        <p className="mb-0 fs-12 text-muted">349 files</p>
                                                    </div>
                                                    <b>4.10 GB</b>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar-xs">
                                                            <div className="avatar-title rounded bg-soft-primary text-primary">
                                                                <i className="ri-error-warning-line fs-17"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h5 className="mb-1 fs-15">Others</h5>
                                                        <p className="mb-0 fs-12 text-muted">9873 files</p>
                                                    </div>
                                                    <b>33.54 GB</b>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pb-3 mt-auto">
                                        <div className="alert alert-danger d-flex align-items-center mb-0">
                                            <div className="flex-shrink-0">
                                                <i className="ri-cloud-line text-danger align-bottom display-5"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="text-danger fs-14">Upgrade to Pro</h5>
                                                <p className="text-muted mb-2">Get more space for your...</p>
                                                <button className="btn btn-sm btn-danger"><i className="ri-upload-cloud-line align-bottom"></i> Upgrade Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="file-overview" className="h-100">
                                    <div className="d-flex h-100 flex-column">
                                        <div className="d-flex align-items-center pb-3 border-bottom border-bottom-dashed mb-3 gap-2">
                                            <h5 className="flex-grow-1 fw-semibold mb-0">File Preview</h5>
                                            <div>
                                                <button type="button" className="btn btn-ghost-primary btn-icon btn-sm fs-16 favourite-btn">
                                                    <i className="ri-star-fill align-bottom"></i>
                                                </button>
                                                <button type="button" className="btn btn-soft-danger btn-icon btn-sm fs-16 close-btn-overview">
                                                    <i className="ri-close-fill align-bottom"></i>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="pb-3 border-bottom border-bottom-dashed mb-3">
                                            <div className="file-details-box bg-light p-3 text-center rounded-3 border border-light mb-3">
                                                <div className="display-4 file-icon">
                                                    <i className="ri-file-text-fill text-secondary"></i>
                                                </div>
                                            </div>
                                            <button type="button" className="btn btn-icon btn-sm btn-ghost-success float-end fs-16"><i className="ri-share-forward-line"></i></button>
                                            <h5 className="fs-16 mb-1 file-name">html.docx</h5>
                                            <p className="text-muted mb-0 fs-12"><span className="file-size">0.3 KB</span>, <span className="create-date">19 Apr, 2022</span></p>
                                        </div>
                                        <div>
                                            <h5 className="fs-12 text-uppercase text-muted mb-3">File Description :</h5>

                                            <div className="table-responsive">
                                                <table className="table table-borderless table-nowrap table-sm">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" style={{width: '35%'}}>File Name :</th>
                                                            <td className="file-name">html.docx</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">File Type :</th>
                                                            <td className="file-type">Documents</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Size :</th>
                                                            <td className="file-size">0.3 KB</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Created :</th>
                                                            <td className="create-date">19 Apr, 2022</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Path :</th>
                                                            <td className="file-path"><div className="user-select-all text-truncate">*:\projects\src\assets\images</div></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div>
                                                <h5 className="fs-12 text-uppercase text-muted mb-3">Share Information:</h5>
                                                <div className="table-responsive">
                                                    <table className="table table-borderless table-nowrap table-sm">
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row" style={{width: '35%'}}>Share Name :</th>
                                                                <td className="share-name">\\*\Projects</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Share Path :</th>
                                                                <td className="share-path">velzon:\Documents\</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-auto border-top border-top-dashed py-3">
                                            <div className="hstack gap-2">
                                                <button type="button" className="btn btn-soft-primary w-100"><i className="ri-download-2-line align-bottom me-1"></i> Download</button>
                                                <button type="button" className="btn btn-soft-danger w-100 remove-file-overview" data-remove-id="" data-bs-toggle="modal" data-bs-target="#removeFileItemModal"><i className="ri-close-fill align-bottom me-1"></i> Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- container-fluid --> */}
            </div>
            {/* <!-- End Page-content --> */}

            {/* <!-- START CREATE FOLDER MODAL --> */}
            <div className="modal fade zoomIn" id="createFolderModal" tabindex="-1" aria-labelledby="createFolderModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0">
                        <div className="modal-header p-3 bg-soft-success">
                            <h5 className="modal-title" id="createFolderModalLabel">Create Folder</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" id="addFolderBtn-close" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form autocomplete="off" className="needs-validation createfolder-form" id="createfolder-form" novalidate>
                                <div className="mb-4">
                                    <label htmlFor="foldername-input" className="form-label">Folder Name</label>
                                    <input type="text" className="form-control" id="foldername-input" required placeholder="Enter folder name" />
                                    <div className="invalid-feedback">Please enter a folder name.</div>
                                    <input type="hidden" className="form-control" id="folderid-input" value="" placeholder="Enter folder name" />
                                </div>
                                <div className="hstack gap-2 justify-content-end">
                                    <button type="button" className="btn btn-ghost-success" data-bs-dismiss="modal"><i className="ri-close-line align-bottom"></i> Close</button>
                                    <button type="submit" className="btn btn-primary" id="addNewFolder">Add Folder</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- END CREATE FOLDER MODAL --> */}

            {/* <!-- START CREATE FILE MODAL --> */}
            <div className="modal fade zoomIn" id="createFileModal" tabindex="-1" aria-labelledby="createFileModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0">
                        <div className="modal-header p-3 bg-soft-success">
                            <h5 className="modal-title" id="createFileModalLabel">Create File</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" id="addFileBtn-close" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form autocomplete="off" className="needs-validation createfile-form" id="createfile-form" novalidate>
                                <div className="mb-4">
                                    <label htmlFor="filename-input" className="form-label">File Name</label>
                                    <input type="text" className="form-control" id="filename-input" value="" required placeholder="Enter file name" />
                                    <div className="invalid-feedback">Please enter a file name.</div>
                                    <input type="hidden" className="form-control" id="fileid-input" value="" placeholder="Enter file name" />
                                </div>
                                <div className="hstack gap-2 justify-content-end">
                                    <button type="button" className="btn btn-ghost-success" data-bs-dismiss="modal"><i className="ri-close-line align-bottom"></i> Close</button>
                                    <button type="submit" className="btn btn-primary" id="addNewFile">Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- END CREATE FILE MODAL --> */}

            {/* <!-- removeFileItemModal --> */}
            <div id="removeFileItemModal" className="modal fade zoomIn" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close-removefilemodal"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mt-2 text-center">
                                <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop" colors="primary:#f7b84b,secondary:#f06548" style={{width:'100px',height:'100px'}}></lord-icon>
                                <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                                    <h4>Are you sure ?</h4>
                                    <p className="text-muted mx-4 mb-0">Are you sure you want to remove this item ?</p>
                                </div>
                            </div>
                            <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                                <button type="button" className="btn w-sm btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn w-sm btn-danger" id="remove-fileitem">Yes, Delete It!</button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /.modal-content --> */}
                </div>
                {/* <!-- /.modal-dialog --> */}
            </div>
            {/* <!-- /.modal --> */}

            {/* <!-- removeFileItemModal --> */}
            <div id="removeFolderModal" className="modal fade zoomIn" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close-removeFoldermodal"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mt-2 text-center">
                                <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop" colors="primary:#f7b84b,secondary:#f06548" style={{width:'100px',height:'100px'}}></lord-icon>
                                <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                                    <h4>Are you sure ?</h4>
                                    <p className="text-muted mx-4 mb-0">Are you sure you want to remove this folder ?</p>
                                </div>
                            </div>
                            <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                                <button type="button" className="btn w-sm btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn w-sm btn-danger" id="remove-folderList">Yes, Delete It!</button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /.modal-content --> */}
                </div>
                {/* <!-- /.modal-dialog --> */}
            </div>
            {/* <!-- /.modal --> */}

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
   </div>

    </>
  )
}

export default FileManager