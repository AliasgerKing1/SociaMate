import React from 'react'
import {Link } from "react-router-dom"
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';
import NotificationModel from "../../../shared/NotificationModel/NotificationModel";
import RightMenu from '../../../shared/RightMenu/RightMenu';
import ChooseLayout from "../../../shared/ChooseLayout/ChooseLayout";
const AppCalender = () => {
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
                                <h4 className="mb-sm-0">Calendar</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><Link to="/home">Apps</Link></li>
                                        <li className="breadcrumb-item active">Calendar</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- end page title --> */}

                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-xl-3">
                                    <div className="card card-h-100">
                                        <div className="card-body">
                                            <button className="btn btn-primary w-100" id="btn-new-event"><i className="mdi mdi-plus"></i> Create New Event</button>

                                            <div id="external-events">
                                                <br />
                                                <p className="text-muted">Drag and drop your event or click in the calendar</p>
                                                <div className="external-event fc-event bg-soft-success text-success" data-classname="bg-soft-success">
                                                    <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2"></i>New Event
                                                    Planning
                                                </div>
                                                <div className="external-event fc-event bg-soft-info text-info" data-classname="bg-soft-info">
                                                    <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2"></i>Meeting
                                                </div>
                                                <div className="external-event fc-event bg-soft-warning text-warning" data-classname="bg-soft-warning">
                                                    <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2"></i>Generating
                                                    Reports
                                                </div>
                                                <div className="external-event fc-event bg-soft-danger text-danger" data-classname="bg-soft-danger">
                                                    <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2"></i>Create
                                                    New theme
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="mb-1">Upcoming Events</h5>
                                        <p className="text-muted">Don't miss scheduled events</p>
                                        <div className="pe-2 me-n1 mb-3" data-simplebar style={{height: '400px'}}>
                                            <div id="upcoming-event-list"></div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-body bg-soft-info">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <i data-feather="calendar" className="text-info icon-dual-info"></i>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6 className="fs-16">Welcome to your Calendar!</h6>
                                                    <p className="text-muted mb-0">Event that applications book will appear here. Click on an event to see the details and manage applicants event.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--end card--> */}
                                </div> 
                                {/* <!-- end col--> */}

                                <div className="col-xl-9">
                                    <div className="card card-h-100">
                                        <div className="card-body">
                                            <div id="calendar"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end col --> */}
                            </div>
                            {/* <!--end row--> */}

                            <div style={{clear:'both'}}></div>

                            {/* <!-- Add New Event MODAL --> */}
                            <div className="modal fade" id="event-modal" tabIndex="-1">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content border-0">
                                        <div className="modal-header p-3 bg-soft-info">
                                            <h5 className="modal-title" id="modal-title">Event</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
                                        </div>
                                        <div className="modal-body p-4">
                                            <form className="needs-validation" name="event-form" id="form-event" noValidate>
                                                <div className="text-end">
                                                    <a href="#" className="btn btn-sm btn-soft-primary" id="edit-event-btn" data-id="edit-event" role="button">Edit</a>
                                                </div>
                                                <div className="event-details">
                                                    <div className="d-flex mb-2">
                                                        <div className="flex-grow-1 d-flex align-items-center">
                                                            <div className="flex-shrink-0 me-3">
                                                                <i className="ri-calendar-event-line text-muted fs-16"></i>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="d-block fw-semibold mb-0" id="event-start-date-tag"></h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-2">
                                                        <div className="flex-shrink-0 me-3">
                                                            <i className="ri-time-line text-muted fs-16"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="d-block fw-semibold mb-0"><span id="event-timepicker1-tag"></span> - <span id="event-timepicker2-tag"></span></h6>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-2">
                                                        <div className="flex-shrink-0 me-3">
                                                            <i className="ri-map-pin-line text-muted fs-16"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="d-block fw-semibold mb-0"> <span id="event-location-tag"></span></h6>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex mb-3">
                                                        <div className="flex-shrink-0 me-3">
                                                            <i className="ri-discuss-line text-muted fs-16"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <p className="d-block text-muted mb-0" id="event-description-tag"></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row event-form">
                                                    <div className="col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label">Type</label>
                                                            <select className="form-select d-none" name="category" id="event-category" required>
                                                                <option defaultValue="bg-soft-danger">Danger</option>
                                                                <option defaultValue="bg-soft-success">Success</option>
                                                                <option defaultValue="bg-soft-primary">Primary</option>
                                                                <option defaultValue="bg-soft-info">Info</option>
                                                                <option defaultValue="bg-soft-dark">Dark</option>
                                                                <option defaultValue="bg-soft-warning">Warning</option>
                                                            </select>
                                                            <div className="invalid-feedback">Please select a valid event category</div>
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label">Event Name</label>
                                                            <input className="form-control d-none" placeholder="Enter event name" type="text" name="title" id="event-title" required defaultValue="" />
                                                            <div className="invalid-feedback">Please provide a valid event name</div>
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-12">
                                                        <div className="mb-3">
                                                            <label>Event Date</label>
                                                            <div className="input-group d-none">
                                                                <input type="text" id="event-start-date" className="form-control flatpickr flatpickr-input" placeholder="Select date" readOnly required />
                                                                <span className="input-group-text"><i className="ri-calendar-event-line"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-12" id="event-time">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="mb-3">
                                                                    <label className="form-label">Start Time</label>
                                                                    <div className="input-group d-none">
                                                                        <input id="timepicker1" type="text" className="form-control flatpickr flatpickr-input" placeholder="Select start time"  readOnly />
                                                                        <span className="input-group-text"><i className="ri-time-line"></i></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="mb-3">
                                                                    <label className="form-label">End Time</label>
                                                                    <div className="input-group d-none">
                                                                        <input id="timepicker2" type="text" className="form-control flatpickr flatpickr-input" placeholder="Select end time" readOnly />
                                                                        <span className="input-group-text"><i className="ri-time-line"></i></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-12">
                                                        <div className="mb-3">
                                                            <label htmlFor="event-location">Location</label>
                                                            <div>
                                                                <input type="text" className="form-control d-none" name="event-location" id="event-location" placeholder="Event location" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <input type="hidden" id="eventid" name="eventid" defaultValue="" />
                                                    <div className="col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label">Description</label>
                                                            <textarea className="form-control d-none" id="event-description" placeholder="Enter a description" rows="3" spellCheck="false"></textarea>
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                </div>
                                                {/* <!--end row--> */}
                                                <div className="hstack gap-2 justify-content-end">
                                                    <button type="button" className="btn btn-soft-danger" id="btn-delete-event"><i className="ri-close-line align-bottom"></i> Delete</button>
                                                    <button type="submit" className="btn btn-success" id="btn-save-event">Add Event</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div> 
                                    {/* <!-- end modal-content--> */}
                                </div> 
                                {/* <!-- end modal dialog--> */}
                            </div>
                             {/* <!-- end modal--> */}
                            {/* <!-- end modal--> */}
                        </div>
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

export default AppCalender;