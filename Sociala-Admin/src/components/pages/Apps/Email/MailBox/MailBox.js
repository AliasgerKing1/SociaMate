import React from 'react'
import Header from '../../../../shared/Header/Header';
import NotificationModel from "../../../../shared/NotificationModel/NotificationModel";
import RightMenu from '../../../../shared/RightMenu/RightMenu';
import ChooseLayout from "../../../../shared/ChooseLayout/ChooseLayout";
const MailBox = () => {
  return (
    <>

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

                    <div className="email-wrapper d-lg-flex gap-1 mx-n4 mt-n4 p-1">
                        <div className="email-menu-sidebar">
                            <div className="p-4 d-flex flex-column h-100">
                                <div className="pb-4 border-bottom border-bottom-dashed">
                                    <button type="button" className="btn btn-danger w-100" data-bs-toggle="modal" data-bs-target="#composemodal"><i data-feather="plus-circle" className="icon-xs me-1 icon-dual-light"></i> Compose</button>
                                </div>

                                <div className="mx-n4 px-4 email-menu-sidebar-scroll" data-simplebar>
                                    <div className="mail-list mt-3">
                                        <a href="#" className="active"><i className="ri-mail-fill me-3 align-middle fw-medium"></i> <span className="mail-list-link">All</span> <span className="badge badge-soft-success ms-auto  ">5</span></a>
                                        <a href="#"><i className="ri-inbox-archive-fill me-3 align-middle fw-medium"></i> <span className="mail-list-link">Inbox</span> <span className="badge badge-soft-success ms-auto  ">5</span></a>
                                        <a href="#"><i className="ri-send-plane-2-fill me-3 align-middle fw-medium"></i><span className="mail-list-link">Sent</span></a>
                                        <a href="#"><i className="ri-edit-2-fill me-3 align-middle fw-medium"></i><span className="mail-list-link">Draft</span></a>
                                        <a href="#"><i className="ri-error-warning-fill me-3 align-middle fw-medium"></i><span className="mail-list-link">Spam</span></a>
                                        <a href="#"><i className="ri-delete-bin-5-fill me-3 align-middle fw-medium"></i><span className="mail-list-link">Trash</span></a>
                                        <a href="#"><i className="ri-star-fill me-3 align-middle fw-medium"></i><span className="mail-list-link">Starred</span></a>
                                        <a href="#"><i className="ri-price-tag-3-fill me-3 align-middle fw-medium"></i><span className="mail-list-link">Important</span></a>
                                    </div>


                                    <div>
                                        <h5 className="fs-12 text-uppercase text-muted mt-4">Labels</h5>

                                        <div className="mail-list mt-1">
                                            <a href="#"><span className="ri-checkbox-blank-circle-line me-2 text-info"></span><span className="mail-list-link" data-type="label">Support</span> <span className="badge badge-soft-success ms-auto">3</span></a>
                                            <a href="#"><span className="ri-checkbox-blank-circle-line me-2 text-warning"></span><span className="mail-list-link" data-type="label">Freelance</span></a>
                                            <a href="#"><span className="ri-checkbox-blank-circle-line me-2 text-primary"></span><span className="mail-list-link" data-type="label">Social</span></a>
                                            <a href="#"><span className="ri-checkbox-blank-circle-line me-2 text-danger"></span><span className="mail-list-link" data-type="label">Friends</span><span className="badge badge-soft-success ms-auto">2</span></a>
                                            <a href="#"><span className="ri-checkbox-blank-circle-line me-2 text-success"></span><span className="mail-list-link" data-type="label">Family</span></a>
                                        </div>
                                    </div>

                                    <div className="border-top border-top-dashed pt-3 mt-3">
                                        <a href="#" className="btn btn-icon btn-sm btn-soft-info btn-rounded float-end"><i className="bx bx-plus fs-16"></i></a>
                                        <h5 className="fs-12 text-uppercase text-muted mb-3">Chat</h5>

                                            <div className="mt-2 vstack email-chat-list mx-n4">
                                                <a href="#" className="d-flex align-items-center active">
                                                    <div className="flex-shrink-0 me-2 avatar-xxs chatlist-user-image">
                                                    <img className="img-fluid rounded-circle" src="/assets/images/users/avatar-2.jpg" alt="" />
                                                </div>

                                                <div className="flex-grow-1 chat-user-box overflow-hidden">
                                                    <h5 className="fs-13 text-truncate mb-0 chatlist-user-name">Scott Median</h5>
                                                    <small className="text-muted text-truncate mb-0">Hello ! are you there?</small>
                                                </div>
                                            </a>

                                            <a href="#" className="d-flex align-items-center">
                                                    <div className="flex-shrink-0 me-2 avatar-xxs chatlist-user-image">
                                                    <img className="img-fluid rounded-circle" src="/assets/images/users/avatar-4.jpg" alt="" />
                                                </div>

                                                <div className="flex-grow-1 chat-user-box overflow-hidden">
                                                    <h5 className="fs-13 text-truncate mb-0 chatlist-user-name">Julian Rosa</h5>
                                                    <small className="text-muted text-truncate mb-0">What about our next..</small>
                                                </div>
                                            </a>

                                            <a href="#" className="d-flex align-items-center">
                                                    <div className="flex-shrink-0 me-2 avatar-xxs chatlist-user-image">
                                                    <img className="img-fluid rounded-circle" src="/assets/images/users/avatar-3.jpg" alt="" />
                                                </div>

                                                <div className="flex-grow-1 chat-user-box overflow-hidden">
                                                    <h5 className="fs-13 text-truncate mb-0 chatlist-user-name">David Medina</h5>
                                                    <small className="text-muted text-truncate mb-0">Yeah everything is fine</small>
                                                </div>
                                            </a>

                                            <a href="#" className="d-flex align-items-center">
                                                    <div className="flex-shrink-0 me-2 avatar-xxs chatlist-user-image">
                                                    <img className="img-fluid rounded-circle" src="/assets/images/users/avatar-5.jpg" alt="" />
                                                </div>

                                                <div className="flex-grow-1 chat-user-box overflow-hidden">
                                                    <h5 className="fs-13 text-truncate mb-0 chatlist-user-name">Jay Baker</h5>
                                                    <small className="text-muted text-truncate mb-0">Wow that's great</small>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <h5 className="fs-13">1.75 GB of 10 GB used</h5>
                                    <div className="progress progress-sm">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end email-menu-sidebar --> */}

                        <div className="email-content">
                            <div className="p-4 pb-0">
                                <div className="border-bottom border-bottom-dashed">
                                    <div className="row mt-n2 mb-3 mb-sm-0">
                                        <div className="col col-sm-auto order-1 d-block d-lg-none">
                                            <button type="button" className="btn btn-soft-success btn-icon btn-sm fs-16 email-menu-btn">
                                                <i className="ri-menu-2-fill align-bottom"></i>
                                            </button>
                                        </div>
                                        <div className="col-sm order-3 order-sm-2">
                                            <div className="hstack gap-sm-1 align-items-center flex-wrap email-topbar-link">
                                                <div className="form-check fs-14 m-0">
                                                    <input className="form-check-input" type="checkbox" defualtValue="" id="checkall" />
                                                    <label className="form-check-label" htmlFor="checkall"></label>
                                                </div>
                                                <div id="email-topbar-actions">
                                                    <div className="hstack gap-sm-1 align-items-center flex-wrap">
                                                        <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm fs-16" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Archive">
                                                            <i className="ri-inbox-archive-fill align-bottom"></i>
                                                        </button>
                                                        <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm fs-16" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Report Spam">
                                                            <i className="ri-error-warning-fill align-bottom"></i>
                                                        </button>
                                                        <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Trash">
                                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm fs-16" data-bs-toggle="modal" data-bs-target="#removeItemModal">
                                                                <i className="ri-delete-bin-5-fill align-bottom"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="vr align-self-center mx-2"></div>
                                                <div className="dropdown">
                                                    <button className="btn btn-ghost-secondary btn-icon btn-sm fs-16" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="ri-price-tag-3-fill align-bottom"></i>
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#">Support</a>
                                                        <a className="dropdown-item" href="#">Freelance</a>
                                                        <a className="dropdown-item" href="#">Social</a>
                                                        <a className="dropdown-item" href="#">Friends</a>
                                                        <a className="dropdown-item" href="#">Family</a>
                                                    </div>
                                                </div>
                                                <div className="dropdown">
                                                    <button className="btn btn-ghost-secondary btn-icon btn-sm fs-16" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="ri-more-2-fill align-bottom"></i>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#" id="mark-all-read">Mark all as Read</a>
                                                    </div>
                                                </div>
                                                <div className="alert alert-warning alert-dismissible unreadConversations-alert px-4 fade show " id="unreadConversations" role="alert">
                                                    No Unread Conversations
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-auto order-2 order-sm-3">
                                            <div className="d-flex gap-sm-1 email-topbar-link">
                                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm fs-16">
                                                    <i className="ri-refresh-line align-bottom"></i>
                                                </button>
                                                <div className="dropdown">
                                                    <button className="btn btn-ghost-secondary btn-icon btn-sm fs-16" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="ri-more-2-fill align-bottom"></i>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">Mark as Unread</a>
                                                        <a className="dropdown-item" href="#">Mark as Important</a>
                                                        <a className="dropdown-item" href="#">Add to Tasks</a>
                                                        <a className="dropdown-item" href="#">Add Star</a>
                                                        <a className="dropdown-item" href="#">Mute</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row align-items-end mt-3">
                                        <div className="col">
                                            <div id="mail-filter-navlist">
                                                <ul className="nav nav-tabs nav-tabs-custom nav-success gap-1 text-center border-bottom-0" role="tablist">
                                                    <li className="nav-item">
                                                        <button className="nav-link fw-semibold active" id="pills-primary-tab" data-bs-toggle="pill" data-bs-target="#pills-primary" type="button" role="tab" aria-controls="pills-primary" aria-selected="true">
                                                            <i className="ri-inbox-fill align-bottom d-inline-block"></i>
                                                            <span className="ms-1 d-none d-sm-inline-block">Primary</span>
                                                        </button>
                                                    </li>
                                                    <li className="nav-item">
                                                        <button className="nav-link fw-semibold" id="pills-social-tab" data-bs-toggle="pill" data-bs-target="#pills-social" type="button" role="tab" aria-controls="pills-social" aria-selected="false">
                                                            <i className="ri-group-fill align-bottom d-inline-block"></i>
                                                            <span className="ms-1 d-none d-sm-inline-block">Social</span>
                                                        </button>
                                                    </li>
                                                    <li className="nav-item">
                                                        <button className="nav-link fw-semibold" id="pills-promotions-tab" data-bs-toggle="pill" data-bs-target="#pills-promotions" type="button" role="tab" aria-controls="pills-promotions" aria-selected="false">
                                                            <i className="ri-price-tag-3-fill align-bottom d-inline-block"></i>
                                                            <span className="ms-1 d-none d-sm-inline-block">Promotions</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                        <div className="col-auto">
                                            <div className="text-muted mb-2">1-50 of 154</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="pills-primary" role="tabpanel" aria-labelledby="pills-primary-tab">
                                        <div className="message-list-content mx-n4 px-4 message-list-scroll" data-simplebar>
                                            <div id="elmLoader">
                                                <div className="spinner-border text-primary avatar-sm" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div>
                                            <ul className="message-list" id="mail-list"></ul>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-social" role="tabpanel" aria-labelledby="pills-social-tab">
                                        <div className="message-list-content mx-n4 px-4 message-list-scroll" data-simplebar>
                                            <ul className="message-list" id="social-mail-list"></ul>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-promotions" role="tabpanel" aria-labelledby="pills-promotions-tab">
                                        <div className="message-list-content mx-n4 px-4 message-list-scroll" data-simplebar>
                                            <ul className="message-list" id="promotions-mail-list"></ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end email-content --> */}

                        <div className="email-detail-content">
                            <div className="p-4 d-flex flex-column h-100">
                                <div className="pb-4 border-bottom border-bottom-dashed">
                                    <div className="row">
                                        <div className="col">
                                            <div className="">
                                                    <button type="button" className="btn btn-soft-danger btn-icon btn-sm fs-16 close-btn-email" id="close-btn-email">
                                                    <i className="ri-close-fill align-bottom"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div className="hstack gap-sm-1 align-items-center flex-wrap email-topbar-link">
                                                <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm fs-16 favourite-btn active">
                                                    <i className="ri-star-fill align-bottom"></i>
                                                </button>
                                                <button className="btn btn-ghost-secondary btn-icon btn-sm fs-16">
                                                    <i className="ri-printer-fill align-bottom"></i>
                                                </button>
                                                    <button className="btn btn-ghost-secondary btn-icon btn-sm fs-16 remove-mail" data-remove-id=""  data-bs-toggle="modal" data-bs-target="#removeItemModal">
                                                    <i className="ri-delete-bin-5-fill align-bottom"></i>
                                                </button>
                                                <div className="dropdown">
                                                    <button className="btn btn-ghost-secondary btn-icon btn-sm fs-16" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="ri-more-2-fill align-bottom"></i>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">Mark as Unread</a>
                                                        <a className="dropdown-item" href="#">Mark as Important</a>
                                                        <a className="dropdown-item" href="#">Add to Tasks</a>
                                                        <a className="dropdown-item" href="#">Add Star</a>
                                                        <a className="dropdown-item" href="#">Mute</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mx-n4 px-4 email-detail-content-scroll" data-simplebar>
                                    <div className="mt-4 mb-3">
                                        <h5 className="fw-bold email-subject-title">New updates for Skote Theme</h5>
                                    </div>

                                    <div className="accordion accordion-flush">
                                        <div className="accordion-item border-dashed left">
                                            <div className="accordion-header">
                                                <a role="button" className="btn w-100 text-start px-0 bg-transparent shadow-none collapsed" data-bs-toggle="collapse" href="#email-collapseOne" aria-expanded="true" aria-controls="email-collapseOne">
                                                    <div className="d-flex align-items-center text-muted">
                                                        <div className="flex-shrink-0 avatar-xs me-3">
                                                            <img src="/assets/images/users/avatar-3.jpg" alt="" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="fs-14 text-truncate email-user-name mb-0">Jack Davis</h5>
                                                            <div className="text-truncate fs-12">to: me</div>
                                                        </div>
                                                        <div className="flex-shrink-0 align-self-start">
                                                            <div className="text-muted fs-12">09 Jan 2022, 11:12 AM</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div id="email-collapseOne" className="accordion-collapse collapse">
                                                <div className="accordion-body text-body px-0">
                                                    <div>
                                                        <p>Hi,</p>
                                                        <p>Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque arcu leo, facilisis in fringilla id, luctus in tortor.
                                                        </p>
                                                        <p>Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices.</p>
                                                        <p>Sincerly,</p>

                                                        <div className="d-flex gap-3">
                                                            <div className="border rounded avatar-xl h-auto">
                                                                <img src="/assets/images/small/img-2.jpg" alt="" className="img-fluid rouned-top" />
                                                                <div className="py-2 text-center">
                                                                    <a href="#" className="d-block fw-semibold">Download</a>
                                                                </div>
                                                            </div>
                                                            <div className="border rounded avatar-xl h-auto">
                                                                <img src="/assets/images/small/img-6.jpg" alt="" className="img-fluid rouned-top" />
                                                                <div className="py-2 text-center">
                                                                    <a href="#" className="d-block fw-semibold">Download</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end accordion-item --> */}

                                        <div className="accordion-item border-dashed right">
                                            <div className="accordion-header">
                                                <a role="button" className="btn w-100 text-start px-0 bg-transparent shadow-none collapsed" data-bs-toggle="collapse" href="#email-collapseTwo" aria-expanded="true" aria-controls="email-collapseTwo">
                                                    <div className="d-flex align-items-center text-muted">
                                                        <div className="flex-shrink-0 avatar-xs me-3">
                                                            <img src="/assets/images/users/avatar-1.jpg" alt="" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="fs-14 text-truncate email-user-name-right mb-0">Anna Adame</h5>
                                                            <div className="text-truncate fs-12">to: jackdavis@email.com</div>
                                                        </div>
                                                        <div className="flex-shrink-0 align-self-start">
                                                            <div className="text-muted fs-12">09 Jan 2022, 02:15 PM</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div id="email-collapseTwo" className="accordion-collapse collapse">
                                                <div className="accordion-body text-body px-0">
                                                    <div>
                                                        <p>Hi,</p>
                                                        <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
                                                        <p>Thank you</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end accordion-item --> */}

                                        <div className="accordion-item border-dashed left">
                                            <div className="accordion-header">
                                                <a role="button" className="btn w-100 text-start px-0 bg-transparent shadow-none" data-bs-toggle="collapse" href="#email-collapseThree" aria-expanded="true" aria-controls="email-collapseThree">
                                                    <div className="d-flex align-items-center text-muted">
                                                        <div className="flex-shrink-0 avatar-xs me-3">
                                                            <img src="/assets/images/users/avatar-3.jpg" alt="" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="fs-14 text-truncate email-user-name mb-0">Jack Davis</h5>
                                                            <div className="text-truncate fs-12">to: me</div>
                                                        </div>
                                                        <div className="flex-shrink-0 align-self-start">
                                                            <div className="text-muted fs-12">10 Jan 2022, 10:08 AM</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div id="email-collapseThree" className="accordion-collapse collapse show">
                                                <div className="accordion-body text-body px-0">
                                                    <div>
                                                        <p>Hi,</p>
                                                        <p>Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar pronunciation.</p>
                                                        <p>Thank you</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end accordion-item --> */}
                                    </div>
                                    {/* <!-- end accordion --> */}
                                </div>
                                <div className="mt-auto">
                                    <form className="mt-2">
                                        <div>
                                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Reply :</label>
                                            <textarea className="form-control border-bottom-0 rounded-top rounded-0 border" id="exampleFormControlTextarea1" rows="3" placeholder="Enter message"></textarea>
                                            <div className="bg-light px-2 py-1 rouned-bottom border">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="btn-group" role="group">
                                                            <button type="button" className="btn btn-sm py-0 fs-15 btn-light" data-bs-toggle="tooltip" data-bs-placement="top" title="Bold"><i className="ri-bold align-bottom"></i></button>
                                                            <button type="button" className="btn btn-sm py-0 fs-15 btn-light" data-bs-toggle="tooltip" data-bs-placement="top" title="Italic"><i className="ri-italic align-bottom"></i></button>
                                                            <button type="button" className="btn btn-sm py-0 fs-15 btn-light" data-bs-toggle="tooltip" data-bs-placement="top" title="Link"><i className="ri-link align-bottom"></i></button>
                                                            <button type="button" className="btn btn-sm py-0 fs-15 btn-light" data-bs-toggle="tooltip" data-bs-placement="top" title="Image"><i className="ri-image-2-line align-bottom"></i></button>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-sm btn-success"><i className="ri-send-plane-2-fill align-bottom"></i></button>
                                                            <button type="button" className="btn btn-sm btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <span className="visually-hidden">Toggle Dropdown</span>
                                                            </button>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li><a className="dropdown-item" href="#"><i className="ri-timer-line text-muted me-1 align-bottom"></i> Schedule Send</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end email-detail-content --> */}
                    </div>
                    {/* <!-- end email wrapper --> */}

                    <div className="email-chat-detail" id="emailchat-detailElem">
                        <div className="card mb-0">
                            <div className="card-header align-items-center d-flex bg-primary text-white-50">
                                <div className="flex-grow-1">
                                        <h5 className="fs-13 text-white mb-1 profile-username"></h5>
                                    <p className="mb-0 fs-12 lh-1">Active</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="mt-n3 me-n3">
                                        <button type="button" className="btn btn-link text-white fs-16 text-decoration-none" id="emailchat-btn-close"><i className="ri-close-fill"></i></button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end card header --> */}

                            <div className="card-body p-0">
                                <div id="users-chat">
                                    <div className="chat-conversation p-3" id="chat-conversation" data-simplebar style={{height: '250px'}}>
                                        <ul className="list-unstyled chat-conversation-list chat-sm" id="users-conversation">
                                            <li className="chat-list left">
                                                <div className="conversation-list">
                                                    <div className="chat-avatar">
                                                        <img src="/assets/images/users/avatar-2.jpg" alt="" />
                                                    </div>
                                                    <div className="user-chat-content">
                                                        <div className="ctext-wrap">
                                                            <div className="ctext-wrap-content">
                                                                <p className="mb-0 ctext-content">Good morning 😊</p>
                                                            </div>
                                                            <div className="dropdown align-self-start message-box-drop">
                                                                <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="ri-more-2-fill"></i>
                                                                </a>
                                                                <div className="dropdown-menu">
                                                                    <a className="dropdown-item" href="#"><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</a>
                                                                    <a className="dropdown-item" href="#"><i className="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</a>
                                                                    <a className="dropdown-item delete-item" href="#"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="conversation-name"><small className="text-muted time">09:07 am</small> <span className="text-success check-message-icon"><i className="ri-check-double-line align-bottom"></i></span></div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* <!-- chat-list --> */}

                                            <li className="chat-list right">
                                                <div className="conversation-list">
                                                    <div className="user-chat-content">
                                                        <div className="ctext-wrap">
                                                            <div className="ctext-wrap-content">
                                                                <p className="mb-0 ctext-content">Good morning, How are you? What about our next meeting?</p>
                                                            </div>
                                                            <div className="dropdown align-self-start message-box-drop">
                                                                <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="ri-more-2-fill"></i>
                                                                </a>
                                                                <div className="dropdown-menu">
                                                                    <a className="dropdown-item" href="#"><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</a>
                                                                    <a className="dropdown-item" href="#"><i className="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</a>
                                                                    <a className="dropdown-item delete-item" href="#"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="conversation-name"><small className="text-muted time">09:08 am</small> <span className="text-success check-message-icon"><i className="ri-check-double-line align-bottom"></i></span></div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* <!-- chat-list --> */}

                                            <li className="chat-list left">
                                                <div className="conversation-list">
                                                    <div className="chat-avatar">
                                                        <img src="/assets/images/users/avatar-2.jpg" alt="" />
                                                    </div>
                                                    <div className="user-chat-content">
                                                        <div className="ctext-wrap">
                                                            <div className="ctext-wrap-content">
                                                                <p className="mb-0 ctext-content">Yeah everything is fine. Our next meeting tomorrow at 10.00 AM</p>
                                                            </div>
                                                            <div className="dropdown align-self-start message-box-drop">
                                                                <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="ri-more-2-fill"></i>
                                                                </a>
                                                                <div className="dropdown-menu">
                                                                    <a className="dropdown-item" href="#"><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</a>
                                                                    <a className="dropdown-item" href="#"><i className="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</a>
                                                                    <a className="dropdown-item delete-item" href="#"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="conversation-name"><small className="text-muted time">09:10 am</small> <span className="text-success check-message-icon"><i className="ri-check-double-line align-bottom"></i></span></div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* <!-- chat-list --> */}

                                            <li className="chat-list right">
                                                <div className="conversation-list">
                                                    <div className="user-chat-content">
                                                        <div className="ctext-wrap">
                                                            <div className="ctext-wrap-content">
                                                                <p className="mb-0 ctext-content">Wow that's great</p>
                                                            </div>
                                                            <div className="dropdown align-self-start message-box-drop">
                                                                <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="ri-more-2-fill"></i>
                                                                </a>
                                                                <div className="dropdown-menu">
                                                                    <a className="dropdown-item" href="#"><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</a>
                                                                    <a className="dropdown-item" href="#"><i className="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</a>
                                                                    <a className="dropdown-item delete-item" href="#"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="conversation-name"><small className="text-muted time">09:12 am</small> <span className="text-success check-message-icon"><i className="ri-check-double-line align-bottom"></i></span></div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* <!-- chat-list --> */}

                                        </ul>
                                    </div>
                                </div>

                                <div className="border-top border-top-dashed">
                                    <div className="row g-2 mx-3 mt-2 mb-3">
                                        <div className="col">
                                            <div className="position-relative">
                                                <input type="text" className="form-control border-light bg-light" placeholder="Enter Message..." />
                                            </div>
                                        </div>
                                        {/* <!-- end col --> */}
                                        <div className="col-auto">
                                            <button type="submit" className="btn btn-info"><i className="mdi mdi-send"></i></button>
                                        </div>
                                        {/* <!-- end col --> */}
                                    </div>
                                    {/* <!-- end row --> */}
                                </div>
                            </div>
                            {/* <!-- end cardbody --> */}
                        </div>
                    </div>
                    {/* <!-- end email chat detail --> */}
                </div>
                {/* <!-- container-fluid --> */}
            </div>
            {/* <!-- End Page-content --> */}

            <Footer/>
        </div>
        {/* <!-- end main content--> */}

    </div>
    {/* <!-- END layout-wrapper --> */}

    {/* <!-- Compose Modal --> */}
    <div className="modal fade" id="composemodal" tabindex="-1" role="dialog" aria-labelledby="composemodalTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-header p-3 bg-light">
                    <h5 className="modal-title" id="composemodalTitle">New Message</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div>
                        <div className="mb-3 position-relative">
                            <input type="text" className="form-control email-compose-input" data-choices data-choices-limit="15" defualtValue="support@themesbrand.com" data-choices-removeItem placeholder="To" />
                            <div className="position-absolute top-0 end-0">
                                <div className="d-flex">
                                    <button className="btn btn-link text-reset fw-semibold px-2" type="button" data-bs-toggle="collapse" data-bs-target="#CcRecipientsCollapse" aria-expanded="false" aria-controls="CcRecipientsCollapse">
                                        Cc
                                    </button>
                                    <button className="btn btn-link text-reset fw-semibold px-2" type="button" data-bs-toggle="collapse" data-bs-target="#BccRecipientsCollapse" aria-expanded="false" aria-controls="BccRecipientsCollapse">
                                        Bcc
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="collapse" id="CcRecipientsCollapse">
                            <div className="mb-3">
                                <label>Cc:</label>
                                <input type="text" className="form-control" data-choices data-choices-limit="15" data-choices-removeItem placeholder="Cc recipients" />
                            </div>
                        </div>
                        <div className="collapse" id="BccRecipientsCollapse">
                            <div className="mb-3">
                                <label>Bcc:</label>
                                <input type="text" className="form-control" data-choices data-choices-limit="15" data-choices-removeItem placeholder="Bcc recipients" />
                            </div>
                        </div>

                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Subject" />
                        </div>
                        <div className="ck-editor-reverse">
                            <div id="email-editor"></div>
                        </div>

                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-ghost-danger" data-bs-dismiss="modal">Discard</button>

                    <div className="btn-group">
                        <button type="button" className="btn btn-success">Send</button>
                        <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" href="#"><i className="ri-timer-line text-muted me-1 align-bottom"></i> Schedule Send</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- end modal --> */}

    {/* <!-- removeItemModal --> */}
    <div id="removeItemModal" className="modal fade zoomIn" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="btn-close"></button>
                </div>
                <div className="modal-body">
                    <div className="mt-2 text-center">
                        <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop" colors="primary:#f7b84b,secondary:#f06548" style={{width:'100px',height:'100px'}}></lord-icon>
                        <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                            <h4>Are you Sure ?</h4>
                            <p className="text-muted mx-4 mb-0">Are you Sure You want to Remove this Record ?</p>
                        </div>
                    </div>
                    <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                        <button type="button" className="btn w-sm btn-light" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn w-sm btn-danger " id="delete-record">Yes, Delete It!</button>
                    </div>
                </div>

            </div>
            {/* <!-- /.modal-content --> */}
        </div>
        {/* <!-- /.modal-dialog --> */}
    </div>
    {/* <!-- /.modal --> */}
         


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

export default MailBox