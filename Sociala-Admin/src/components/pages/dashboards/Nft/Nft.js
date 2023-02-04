import React from 'react'

import {Link } from "react-router-dom"
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';
import NotificationModel from "../../../shared/NotificationModel/NotificationModel";
import RightMenu from '../../../shared/RightMenu/RightMenu';
import ChooseLayout from "../../../shared/ChooseLayout/ChooseLayout";

const Nft = () => {
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
                                <h4 className="mb-sm-0">NFT Dashboard</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><Link to="/admin/analytics">Dashboards</Link></li>
                                        <li className="breadcrumb-item active">NFT Dashboard</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- end page title --> */}

                    <div className="row dash-nft">
                        <div className="col-xxl-9">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="card overflow-hidden">
                                        <div className="card-body bg-marketplace d-flex">
                                            <div className="flex-grow-1">
                                                <h4 className="fs-18 lh-base mb-0">Discover, Collect, Sell and Create <br /> your own <span className="text-success">NFTs.</span> </h4>
                                                <p className="mb-0 mt-2 pt-1 text-muted">The world's first and largest digital marketplace.</p>
                                                <div className="d-flex gap-3 mt-4">
                                                    <a href="#" className="btn btn-secondary">Discover Now </a>
                                                    <a href="#" className="btn btn-danger">Create Your Own</a>
                                                </div>
                                            </div>
                                            <img src="/assets/images/bg-d.png" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end col--> */}
                                <div className="col-xl-3 col-md-6">
                                    <div className="card card-height-100">
                                        <div className="card-body">
                                            <div className="float-end">
                                                <div className="dropdown card-header-dropdown">
                                                    <a className="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <span className="text-muted fs-18"><i className="mdi mdi-dots-vertical align-middle"></i></span>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">Today</a>
                                                        <a className="dropdown-item" href="#">Last Week</a>
                                                        <a className="dropdown-item" href="#">Last Month</a>
                                                        <a className="dropdown-item" href="#">Current Year</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-sm flex-shrink-0">
                                                    <span className="avatar-title bg-soft-info rounded fs-3">
                                                        <i className="bx bx-dollar-circle text-info"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-grow-1 ps-3">
                                                    <h5 className="text-muted text-uppercase fs-13 mb-0">Total Revenue</h5>
                                                </div>
                                            </div>
                                            <div className="mt-4 pt-1">
                                                <h4 className="fs-22 fw-semibold ff-secondary mb-0">$<span className="counter-value" data-target="559526.564">559526.564</span> </h4>
                                                <p className="mt-4 mb-0 text-muted"><span className="badge bg-soft-danger text-danger mb-0 me-1"> <i className="ri-arrow-down-line align-middle"></i> 3.96 % </span> vs. previous month</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end col--> */}
                                <div className="col-xl-3 col-md-6">
                                    <div className="card card-height-100">
                                        <div className="card-body">
                                            <div className="float-end">
                                                <div className="dropdown card-header-dropdown">
                                                    <a className="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <span className="text-muted fs-18"><i className="mdi mdi-dots-vertical align-middle"></i></span>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">Today</a>
                                                        <a className="dropdown-item" href="#">Last Week</a>
                                                        <a className="dropdown-item" href="#">Last Month</a>
                                                        <a className="dropdown-item" href="#">Current Year</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="avatar-sm flex-shrink-0">
                                                    <span className="avatar-title bg-soft-info rounded fs-3">
                                                        <i className="bx bx-wallet text-info"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-grow-1 ps-3">
                                                    <h5 className="text-muted text-uppercase fs-13 mb-0">Estimated</h5>
                                                </div>
                                            </div>
                                            <div className="mt-4 pt-1">
                                                <h4 className="fs-22 fw-semibold ff-secondary mb-0">$<span className="counter-value" data-target="624562.564">624562.564</span> </h4>
                                                <p className="mt-4 mb-0 text-muted"><span className="badge bg-soft-success text-success mb-0"> <i className="ri-arrow-up-line align-middle"></i> 16.24 % </span> vs. previous month</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end row--> */}

                            <div className="row">
                                <div className="col-xxl-12">
                                    <div className="card">
                                        <div className="card-body p-0">
                                            <div className="row g-0">
                                                <div className="col-xxl-8">
                                                    <div className="">
                                                        <div className="card-header border-0 align-items-center d-flex">
                                                            <h4 className="card-title mb-0 flex-grow-1">Marketplace</h4>
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
                                                        <div className="row g-0 text-center">
                                                            <div className="col-6 col-sm-4">
                                                                <div className="p-3 border border-dashed border-start-0">
                                                                    <h5 className="mb-1"><span className="counter-value" data-target="36.48">0</span>k</h5>
                                                                    <p className="text-muted mb-0">Aetworks</p>
                                                                </div>
                                                            </div>
                                                            
                                                            {/* <!--end col--> */}
                                                            <div className="col-6 col-sm-4">
                                                                <div className="p-3 border border-dashed border-start-0">
                                                                    <h5 className="mb-1"><span className="counter-value" data-target="92.54">0</span>k</h5>
                                                                    <p className="text-muted mb-0">Auction</p>
                                                                </div>
                                                            </div>
                                                            
                                                            {/* <!--end col--> */}
                                                            <div className="col-6 col-sm-4">
                                                                <div className="p-3 border border-dashed border-end-0">
                                                                    <h5 className="mb-1"><span className="counter-value" data-target="8.62">0</span>k</h5>
                                                                    <p className="text-muted mb-0">Creators</p>
                                                                </div>
                                                            </div>
                                                            
                                                            {/* <!--end col--> */}
                                                        </div>
                                                        <div id="line_chart_basic" data-colors='["--vz-secondary","--vz-success", "--vz-gray-300"]' className="apex-charts" dir="ltr"></div>
                                                    </div>
                                                </div>

                                                <div className="col-xxl-4">
                                                    <div className="border-start p-4 h-100 d-flex flex-column">

                                                        <div className="w-100">
                                                            <div className="d-flex align-items-center">
                                                                <img src="/assets/gif/img-2.gif" className="img-fluid avatar-xs rounded-circle object-cover" alt="" />
                                                                <div className="ms-3 flex-grow-1">
                                                                    <h5 className="fs-16 mb-1">Trendy Fashion Portraits</h5>
                                                                    <p className="text-muted mb-0">Artwork</p>
                                                                </div>
                                                                <div className="dropdown">
                                                                    <a href="#" className="align-middle text-muted" role="button" id="dropdownMenuButton5" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i className="ri-share-line fs-18"></i>
                                                                    </a>
                                                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton5">
                                                                        <li>
                                                                            <a href="#" className="dropdown-item">
                                                                                <i className="ri-twitter-fill text-primary align-bottom me-1"></i> Twitter
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" className="dropdown-item">
                                                                                <i className="ri-facebook-circle-fill text-info align-bottom me-1"></i> Facebook
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" className="dropdown-item">
                                                                                <i className="ri-google-fill text-danger align-bottom me-1"></i> Google
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <h3 className="ff-secondary fw-bold mt-4"><i className="mdi mdi-ethereum text-primary"></i> 346.12 ETH</h3>
                                                            <p className="text-success mb-3">+586.85 (40.6%)</p>

                                                            <p className="text-muted fs-15">NFT art is a digital asset that is collectable, unique, and non-transferrable, Cortes explained Every NFT is unique duplicated.</p>

                                                            <div className="d-flex align-items-end justify-content-between mt-4">
                                                                <div>
                                                                    <p className="fs-14 text-muted mb-1">Current Bid</p>
                                                                    <h4 className="fs-20 ff-secondary fw-semibold mb-0">342.74 ETH</h4>
                                                                </div>

                                                                <div>
                                                                    <p className="fs-14 text-muted mb-1">Highest Bid</p>
                                                                    <h4 className="fs-20 ff-secondary fw-semibold mb-0">346.67 ETH</h4>
                                                                </div>
                                                            </div>

                                                            <div className="dash-countdown mt-4 pt-1">
                                                                <div id="countdown" className="countdownlist"></div>
                                                            </div>

                                                            <div className="row mt-4 pt-2">
                                                                <div className="col">
                                                                    <a href="apps-nft-item-details.html" className="btn btn-primary w-100">View Details</a>
                                                                </div>
                                                                <div className="col">
                                                                    <button className="btn btn-info w-100">Bid Now</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!--end col--> */}
                            </div>
                            {/* <!--end row--> */}
                        </div>
                        {/* <!--end col--> */}

                        <div className="col-xxl-3">
                            <div className="card">
                                <div className="card-header border-0 pb-0">
                                    <h6 className="card-title mb-0">Popularity</h6>
                                </div>
                                <div>
                                    <div id="market-overview" data-colors='["--vz-success", "--vz-warning"]' className="apex-charts mt-n4"></div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header d-flex align-items-center">
                                    <h6 className="card-title mb-0 flex-grow-1">History of Bids</h6>
                                    <a className="text-muted" href="apps-nft-item-details.html">
                                        See All <i className="ri-arrow-right-line align-bottom"></i>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive table-card">
                                        <div data-simplebar style={{maxHeight: '382px'}}>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item list-group-item-action">
                                                    <div className="d-flex align-items-center">
                                                        <img src="/assets/images/users/avatar-10.jpg" alt="" className="avatar-xs object-cover rounded-circle" />
                                                        <div className="ms-3 flex-grow-1">
                                                            <a href="#!" className="stretched-link">
                                                                <h6 className="fs-14 mb-1">Herbert Stokes</h6>
                                                            </a>
                                                            <p className="mb-0 text-muted">@herbert10</p>
                                                        </div>
                                                        <div>
                                                            <h6>174.36 ETH</h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    <div className="d-flex align-items-center">
                                                        <img src="/assets/images/nft/img-01.jpg" alt="" className="avatar-xs object-cover rounded-circle" />
                                                        <div className="ms-3 flex-grow-1">
                                                            <a href="#!">
                                                                <h6 className="fs-14 mb-1">Nancy Martino</h6>
                                                            </a>
                                                            <p className="mb-0 text-muted">@nancyMt</p>
                                                        </div>
                                                        <div>
                                                            <h6>346.47 ETH</h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    <div className="d-flex align-items-center">
                                                        <img src="/assets/images/nft/img-04.jpg" alt="" className="avatar-xs object-cover rounded-circle" />
                                                        <div className="ms-3 flex-grow-1">
                                                            <a href="#!">
                                                                <h6 className="fs-14 mb-1">Timothy Smith</h6>
                                                            </a>
                                                            <p className="mb-0 text-muted">@timothy</p>
                                                        </div>
                                                        <div>
                                                            <h6>349.08 ETH</h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    <div className="d-flex align-items-center">
                                                        <img src="/assets/images/nft/img-06.jpg" alt="" className="avatar-xs object-cover rounded-circle" />
                                                        <div className="ms-3 flex-grow-1">
                                                            <a href="#!">
                                                                <h6 className="fs-14 mb-1">Glen Matney</h6>
                                                            </a>
                                                            <p className="mb-0 text-muted">@matney10</p>
                                                        </div>
                                                        <div>
                                                            <h6>852.34 ETH</h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    <div className="d-flex align-items-center">
                                                        <img src="/assets/images/users/avatar-8.jpg" alt="" className="avatar-xs object-cover rounded-circle" />
                                                        <div className="ms-3 flex-grow-1">
                                                            <a href="#!">
                                                                <h6 className="fs-14 mb-1">Michael Morris</h6>
                                                            </a>
                                                            <p className="mb-0 text-muted">@michael</p>
                                                        </div>
                                                        <div>
                                                            <h6>4.071 ETH</h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    <div className="d-flex align-items-center">
                                                        <img src="/assets/images/nft/img-03.jpg" alt="" className="avatar-xs object-cover rounded-circle" />
                                                        <div className="ms-3 flex-grow-1">
                                                            <a href="#!">
                                                                <h6 className="fs-14 mb-1">Alexis Clarke</h6>
                                                            </a>
                                                            <p className="mb-0 text-muted">@alexis_30</p>
                                                        </div>
                                                        <div>
                                                            <h6>30.749 ETH</h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    <div className="d-flex align-items-center">
                                                        <img src="/assets/images/nft/img-05.jpg" alt="" className="avatar-xs object-cover rounded-circle" />
                                                        <div className="ms-3 flex-grow-1">
                                                            <a href="#!">
                                                                <h6 className="fs-14 mb-1">Timothy Smith</h6>
                                                            </a>
                                                            <p className="mb-0 text-muted">@timothy</p>
                                                        </div>
                                                        <div>
                                                            <h6>349.08 ETH</h6>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--end col--> */}
                    </div>
                    
                    {/* <!--end row--> */}


                    <div className="row">
                        <div className="col-xxl-8">
                            <div className="swiper marketplace-swiper rounded gallery-light">
                                <div className="d-flex pt-2 pb-4">
                                    <h5 className="card-title fs-18 mb-1">Featured NFTs Artworks</h5>
                                </div>
                                <div className="swiper-wrapper">
                                <div className="row">
                                        <div className="col-md-3">
                                        <div className="swiper-slide">
                                        <div className="card explore-box card-animate rounded">
                                            <div className="explore-place-bid-img">
                                                <img src="/assets/gif/img-3.gif" alt="" className="img-fluid card-img-top explore-img" />
                                                <div className="bg-overlay"></div>
                                                <div className="place-bid-btn">
                                                    <a href="#!" className="btn btn-success"><i className="ri-auction-fill align-bottom me-1"></i> Place Bid</a>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <p className="fw-medium mb-0 float-end"><i className="mdi mdi-heart text-danger align-middle"></i> 37.41k </p>
                                                <h5 className="mb-1"><a href="apps-nft-item-details.html" className="link-dark">Walking On Air</a></h5>
                                                <p className="text-muted mb-0">Artwork</p>
                                            </div>
                                            <div className="card-footer border-top border-top-dashed">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1 fs-14">
                                                        <i className="ri-price-tag-3-fill text-warning align-bottom me-1"></i> Highest: <span className="fw-medium">10.35ETH</span>
                                                    </div>
                                                    <h5 className="flex-shrink-0 fs-14 text-primary mb-0">14.167 ETH</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div className="swiper-slide">
                                        <div className="card explore-box card-animate rounded">
                                            <div className="explore-place-bid-img">
                                                <img src="/assets/images/nft/img-03.jpg" alt="" className="img-fluid card-img-top explore-img" />
                                                <div className="bg-overlay"></div>
                                                <div className="place-bid-btn">
                                                    <a href="#!" className="btn btn-success"><i className="ri-auction-fill align-bottom me-1"></i> Place Bid</a>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <p className="fw-medium mb-0 float-end"><i className="mdi mdi-heart text-danger align-middle"></i> 19.29k </p>
                                                <h5 className="mb-1"><a href="apps-nft-item-details.html" className="link-dark">Filtered Portrait</a></h5>
                                                <p className="text-muted mb-0">Photography</p>
                                            </div>
                                            <div className="card-footer border-top border-top-dashed">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1 fs-14">
                                                        <i className="ri-price-tag-3-fill text-warning align-bottom me-1"></i> Highest: <span className="fw-medium">75.3ETH</span>
                                                    </div>
                                                    <h5 className="flex-shrink-0 fs-14 text-primary mb-0">67.36 ETH</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div className="swiper-slide">
                                        <div className="card explore-box card-animate rounded">
                                            <div className="explore-place-bid-img">
                                                <img src="/assets/gif/img-1.gif" alt="" className="img-fluid card-img-top explore-img" />
                                                <div className="bg-overlay"></div>
                                                <div className="place-bid-btn">
                                                    <a href="#!" className="btn btn-success"><i className="ri-auction-fill align-bottom me-1"></i> Place Bid</a>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <p className="fw-medium mb-0 float-end"><i className="mdi mdi-heart text-danger align-middle"></i> 8.42k </p>
                                                <h5 className="mb-1"><a href="apps-nft-item-details.html" className="link-dark">Patterns Arts & Culture</a></h5>
                                                <p className="text-muted mb-0">Artwork</p>
                                            </div>
                                            <div className="card-footer border-top border-top-dashed">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1 fs-14">
                                                        <i className="ri-price-tag-3-fill text-warning align-bottom me-1"></i> Highest: <span className="fw-medium">9.64ETH</span>
                                                    </div>
                                                    <h5 className="flex-shrink-0 fs-14 text-primary mb-0">14.167 ETH</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        </div>
                                        <div className="col-md-3">
                                        <div className="swiper-slide">
                                        <div className="card explore-box card-animate rounded">
                                            <div className="explore-place-bid-img">
                                                <img src="/assets/gif/img-4.gif" alt="" className="img-fluid card-img-top explore-img" />
                                                <div className="bg-overlay"></div>
                                                <div className="place-bid-btn">
                                                    <a href="#!" className="btn btn-success"><i className="ri-auction-fill align-bottom me-1"></i> Place Bid</a>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <p className="fw-medium mb-0 float-end"><i className="mdi mdi-heart text-danger align-middle"></i> 15.93k </p>
                                                <h5 className="mb-1"><a href="apps-nft-item-details.html" className="link-dark">Evolved Reality</a></h5>
                                                <p className="text-muted mb-0">Video</p>
                                            </div>
                                            <div className="card-footer border-top border-top-dashed">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1 fs-14">
                                                        <i className="ri-price-tag-3-fill text-warning align-bottom me-1"></i> Highest: <span className="fw-medium">2.75ETH</span>
                                                    </div>
                                                    <h5 className="flex-shrink-0 fs-14 text-primary mb-0">3.167 ETH</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-button-next"></div>
                                <div className="swiper-button-prev"></div>
                            </div>
                        </div>
                        {/* <!--end col--> */}
                        <div className="col-xxl-4">
                            <div className="card">
                                <div className="card-header align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1">Top Artworks</h4>
                                    <div className="flex-shrink-0">
                                        <div>
                                            <button type="button" className="btn btn-soft-primary btn-sm">
                                                See All
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive table-card">
                                        <div data-simplebar style={{maxHeight: '410px'}}>
                                            <table className="table table-borderless align-middle">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img src="/assets/images/nft/img-01.jpg" alt="" className="avatar-sm rounded-circle" />
                                                                <div className="ms-3">
                                                                    <a href="#!">
                                                                        <h6 className="fs-15 mb-1">One shop destination on</h6>
                                                                    </a>
                                                                    <p className="mb-0 text-muted">13,450 Sales</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div id="mini-chart-1" data-colors='["--vz-danger"]' className="apex-charts" dir="ltr"></div>
                                                        </td>
                                                        <td className="text-end">
                                                            <a href="#!">
                                                                <h6 className="fs-15 mb-1">$235,000+</h6>
                                                            </a>
                                                            <p className="mb-0 text-muted">Total USD</p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img src="/assets/images/nft/img-02.jpg" alt="" className="avatar-sm rounded-circle" />
                                                                <div className="ms-3">
                                                                    <a href="#!">
                                                                        <h6 className="fs-15 mb-1">Coin Journal is dedicated</h6>
                                                                    </a>
                                                                    <p className="mb-0 text-muted">11,752 Sales</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div id="mini-chart-2" data-colors='["--vz-danger"]' className="apex-charts" dir="ltr"></div>
                                                        </td>
                                                        <td className="text-end">
                                                            <a href="#!">
                                                                <h6 className="fs-15 mb-1">$632,000+</h6>
                                                            </a>
                                                            <p className="mb-0 text-muted">Total USD</p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img src="/assets/images/nft/img-03.jpg" alt="" className="avatar-sm rounded-circle" />
                                                                <div className="ms-3">
                                                                    <a href="#!">
                                                                        <h6 className="fs-15 mb-1">The Bitcoin-holding U.S.</h6>
                                                                    </a>
                                                                    <p className="mb-0 text-muted">7,526 Sales</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div id="mini-chart-3" data-colors='["--vz-danger"]' className="apex-charts" dir="ltr"></div>
                                                        </td>
                                                        <td className="text-end">
                                                            <a href="#!">
                                                                <h6 className="fs-15 mb-1">$468,000+</h6>
                                                            </a>
                                                            <p className="mb-0 text-muted">Total USD</p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img src="/assets/images/nft/img-04.jpg" alt="" className="avatar-sm rounded-circle" />
                                                                <div className="ms-3">
                                                                    <a href="#!">
                                                                        <h6 className="fs-15 mb-1">Cryptocurrency Price Bitcoin</h6>
                                                                    </a>
                                                                    <p className="mb-0 text-muted">15,521 Sales</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div id="mini-chart-4" data-colors='["--vz-success"]' className="apex-charts" dir="ltr"></div>
                                                        </td>
                                                        <td className="text-end">
                                                            <a href="#!">
                                                                <h6 className="fs-15 mb-1">$265,000+</h6>
                                                            </a>
                                                            <p className="mb-0 text-muted">Total USD</p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img src="/assets/images/nft/img-05.jpg" alt="" className="avatar-sm rounded-circle" />
                                                                <div className="ms-3">
                                                                    <a href="#!">
                                                                        <h6 className="fs-15 mb-1">Dash, Ripple and Litecoin</h6>
                                                                    </a>
                                                                    <p className="mb-0 text-muted">12,652 Sales</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div id="mini-chart-5" data-colors='["--vz-success"]' className="apex-charts" dir="ltr"></div>
                                                        </td>
                                                        <td className="text-end">
                                                            <a href="#!">
                                                                <h6 className="fs-15 mb-1">$456,000+</h6>
                                                            </a>
                                                            <p className="mb-0 text-muted">Total USD</p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img src="/assets/images/nft/img-06.jpg" alt="" className="avatar-sm rounded-circle" />
                                                                <div className="ms-3">
                                                                    <a href="#!">
                                                                        <h6 className="fs-15 mb-1">The Cat X Takashi</h6>
                                                                    </a>
                                                                    <p className="mb-0 text-muted">11,745 Sales</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div id="mini-chart-6" data-colors='["--vz-danger"]' className="apex-charts" dir="ltr"></div>
                                                        </td>
                                                        <td className="text-end">
                                                            <a href="#!">
                                                                <h6 className="fs-15 mb-1">$256,000+</h6>
                                                            </a>
                                                            <p className="mb-0 text-muted">Total USD</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img src="/assets/images/nft/img-01.jpg" alt="" className="avatar-sm rounded-circle" />
                                                                <div className="ms-3">
                                                                    <a href="#!">
                                                                        <h6 className="fs-15 mb-1">Long-tailed Macaque</h6>
                                                                    </a>
                                                                    <p className="mb-0 text-muted">41,032 Sales</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div id="mini-chart-7" data-colors='["--vz-success"]' className="apex-charts" dir="ltr"></div>
                                                        </td>
                                                        <td className="text-end">
                                                            <a href="#!">
                                                                <h6 className="fs-15 mb-1">$745,000+</h6>
                                                            </a>
                                                            <p className="mb-0 text-muted">Total USD</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img src="/assets/gif/img-5.gif" alt="" className="avatar-sm rounded-circle" />
                                                                <div className="ms-3">
                                                                    <a href="#!">
                                                                        <h6 className="fs-15 mb-1">Evolved Reality</h6>
                                                                    </a>
                                                                    <p className="mb-0 text-muted">513,794 Sales</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div id="mini-chart-8" data-colors='["--vz-danger"]' className="apex-charts" dir="ltr"></div>
                                                        </td>
                                                        <td className="text-end">
                                                            <a href="#!">
                                                                <h6 className="fs-15 mb-1">$870,000+</h6>
                                                            </a>
                                                            <p className="mb-0 text-muted">Total USD</p>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--end col--> */}
                    </div>
                    {/* <!--end row--> */}

                    <div className="row">
                        <div className="col-xxl-6">
                            <div className="card">
                                <div className="card-header align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1">Recent NFTs</h4>
                                    <div className="flex-shrink-0">
                                        <div className="dropdown card-header-dropdown">
                                            <a className="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="fw-semibold text-uppercase fs-12">Sort by: </span><span className="text-muted">Popular <i className="mdi mdi-chevron-down ms-1"></i></span>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item" href="#">Popular</a>
                                                <a className="dropdown-item" href="#">Newest</a>
                                                <a className="dropdown-item" href="#">Oldest</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive table-card">
                                        <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                                            <thead className="text-muted bg-soft-light">
                                                <tr>
                                                    <th>Collection</th>
                                                    <th>Volume</th>
                                                    <th>24h %</th>
                                                    <th>Creators</th>
                                                    <th>Items</th>
                                                </tr>
                                            </thead>
                                            {/* <!-- end thead --> */}
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <img src="/assets/images/nft/img-01.jpg" alt="" className="avatar-xs rounded-circle" />
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-1"><a href="apps-nft-item-details.html" className="link-dark">Abstract Face Painting</a></h6>
                                                                <p className="text-muted mb-0"> Artworks</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td><img src="/assets/images/svg/crypto-icons/btc.svg" className="avatar-xxs me-2" alt="" />48,568.025</td>
                                                    <td>
                                                        <span className="text-success mb-0"><i className="mdi mdi-trending-up align-middle me-1"></i>5.26
                                                        </span>
                                                    </td>
                                                    <td>6.8K</td>
                                                    <td>18.0K</td>
                                                </tr>
                                                {/* <!-- end --> */}

                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <img src="/assets/gif/img-5.gif" alt="" className="avatar-xs rounded-circle" />
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-1"><a href="apps-nft-item-details.html" className="link-dark">Long-tailed Macaque</a></h6>
                                                                <p className="text-muted mb-0">Games</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td><img src="/assets/images/svg/crypto-icons/ltc.svg" className="avatar-xxs me-2" alt="" />87,142.027</td>
                                                    <td>
                                                        <span className="text-danger mb-0"><i className="mdi mdi-trending-down align-middle me-1"></i>3.07
                                                        </span>
                                                    </td>
                                                    <td>2.6K</td>
                                                    <td>6.3K</td>
                                                </tr>
                                                {/* <!-- end --> */}
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <img src="/assets/images/nft/img-06.jpg" alt="" className="avatar-xs rounded-circle" />
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-1"><a href="apps-nft-item-details.html" className="link-dark">Robotic Body Art</a></h6>
                                                                <p className="text-muted mb-0">Photography</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td><img src="/assets/images/svg/crypto-icons/etc.svg" className="avatar-xxs me-2" alt="" />33,847.961</td>
                                                    <td>
                                                        <span className="text-success mb-0"><i className="mdi mdi-trending-up align-middle me-1"></i>7.13
                                                        </span>
                                                    </td>
                                                    <td>7.5K</td>
                                                    <td>14.6K</td>
                                                </tr>
                                                {/* <!-- end --> */}
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <img src="/assets/images/nft/img-04.jpg" alt="" className="avatar-xs rounded-circle" />
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-1"><a href="apps-nft-item-details.html" className="link-dark">Smillevers Crypto</a></h6>
                                                                <p className="text-muted mb-0">Artworks</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td><img src="/assets/images/svg/crypto-icons/dash.svg" className="avatar-xxs me-2" alt="" />73,654.421</td>
                                                    <td>
                                                        <span className="text-success mb-0"><i className="mdi mdi-trending-up align-middle me-1"></i>0.97
                                                        </span>
                                                    </td>
                                                    <td>5.3K</td>
                                                    <td>36.4K</td>
                                                </tr>
                                                {/* <!-- end --> */}
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <img src="/assets/images/nft/img-03.jpg" alt="" className="avatar-xs rounded-circle" />
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-1"><a href="apps-nft-item-details.html" className="link-dark">Creative Filtered Portrait</a></h6>
                                                                <p className="text-muted mb-0"> 3d Style</p>
                                                            </div>
                                                            <div className="flex-grow-1"></div>
                                                        </div>
                                                    </td>
                                                    <td><img src="/assets/images/svg/crypto-icons/bnb.svg" className="avatar-xxs me-2" alt="" />66,742.077</td>
                                                    <td>
                                                        <span className="text-danger mb-0"><i className="mdi mdi-trending-down align-middle me-1"></i>1.08
                                                        </span>
                                                    </td>
                                                    <td>3.1K</td>
                                                    <td>12.4K</td>
                                                </tr>
                                                {/* <!-- end --> */}
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <img src="/assets/images/nft/img-02.jpg" alt="" className="avatar-xs rounded-circle" />
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-1"><a href="apps-nft-item-details.html" className="link-dark">The Chirstoper</a></h6>
                                                                <p className="text-muted mb-0"> Crypto Card</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td><img src="/assets/images/svg/crypto-icons/usdt.svg" className="avatar-xxs me-2" alt="" />34,736.209</td>
                                                    <td>
                                                        <span className="text-success mb-0"><i className="mdi mdi-trending-up align-middle me-1"></i>4.52
                                                        </span>
                                                    </td>
                                                    <td>7.2K</td>
                                                    <td>25.0K</td>
                                                </tr>
                                                {/* <!-- end --> */}
                                            </tbody>
                                            {/* <!-- end tbody --> */}
                                        </table>
                                        {/* <!-- end table --> */}
                                    </div>
                                    {/* <!-- end tbody --> */}

                                </div>
                            </div>
                        </div>
                        {/* <!--end col--> */}
                        {/* <!--end card--> */}
                        <div className="col-xxl-3 col-lg-6">
                            <div className="card card-height-100">
                                <div className="card-header align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1">Worldwide Top Creators</h4>
                                    <div className="flex-shrink-0">
                                        <button type="button" className="btn btn-soft-primary btn-sm">
                                            Export Report
                                        </button>
                                    </div>
                                </div>
                                {/* <!-- end card header --> */}

                                {/* <!-- card body --> */}
                                <div className="card-body">

                                    <div id="creators-by-locations" data-colors='["--vz-gray-200", "--vz-success", "--vz-primary"]' style={{height: '265px'}} dir="ltr"></div>

                                    <div className="mt-1">
                                        <p className="mb-1"><img src="/assets/images/flags/us.svg" alt="" height="15" className="rounded me-2" /> United States <span className="float-end">34%</span></p>
                                        <p className="mb-1"><img src="/assets/images/flags/russia.svg" alt="" height="15" className="rounded me-2" /> Russia <span className="float-end">27%</span></p>
                                        <p className="mb-1"><img src="/assets/images/flags/spain.svg" alt="" height="15" className="rounded me-2" /> Spain <span className="float-end">21%</span></p>
                                        <p className="mb-1"><img src="/assets/images/flags/italy.svg" alt="" height="15" className="rounded me-2" /> Italy <span className="float-end">13%</span></p>
                                        <p className="mb-0"><img src="/assets/images/flags/germany.svg" alt="" height="15" className="rounded me-2" /> Germany <span className="float-end">5%</span></p>
                                    </div>
                                </div>
                                {/* <!-- end card body --> */}
                            </div>
                            {/* <!-- end card --> */}
                        </div>
                        {/* <!--end col--> */}
                        <div className="col-xxl-3 col-lg-6">
                            <div className="card">
                                <div className="card-header d-flex align-items-center">
                                    <h6 className="card-title flex-grow-1 mb-0">Top Collections</h6>
                                    <a href="apps-nft-collections.html" type="button" className="btn btn-soft-primary btn-sm flex-shrink-0">
                                        See All <i className="ri-arrow-right-line align-bottom"></i>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="swiper collection-slider">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="dash-collection overflow-hidden rounded-top position-relative">
                                                    <img src="/assets/images/nft/img-03.jpg" alt="" height="220" className="object-cover w-100" />
                                                    <div className="content position-absolute bottom-0 m-2 p-2 start-0 end-0 rounded d-flex align-items-center">
                                                        <div className="flex-grow-1">
                                                            <a href="#!">
                                                                <h5 className="text-white fs-16 mb-1">Artworks</h5>
                                                            </a>
                                                            <p className="text-white-75 mb-0">4700+ Items</p>
                                                        </div>
                                                        <div className="avatar-xxs">
                                                            <div className="avatar-title bg-white rounded-circle">
                                                                <a href="#!" className="link-success"><i className="ri-arrow-right-line"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="dash-collection overflow-hidden rounded-top position-relative">
                                                    <img src="/assets/images/nft/img-04.jpg" alt="" height="220" className="object-cover w-100" />
                                                    <div className="content position-absolute bottom-0 m-2 p-2 start-0 end-0 rounded d-flex align-items-center">
                                                        <div className="flex-grow-1">
                                                            <a href="#!">
                                                                <h5 className="text-white fs-16 mb-1">Crypto Card</h5>
                                                            </a>
                                                            <p className="text-white-75 mb-0">743+ Items</p>
                                                        </div>
                                                        <div className="avatar-xxs">
                                                            <div className="avatar-title bg-white rounded-circle">
                                                                <a href="#!" className="link-success"><i className="ri-arrow-right-line"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="dash-collection overflow-hidden rounded-top position-relative">
                                                    <img src="/assets/gif/img-5.gif" alt="" height="220" className="object-cover w-100" />
                                                    <div className="content position-absolute bottom-0 m-2 p-2 start-0 end-0 rounded d-flex align-items-center">
                                                        <div className="flex-grow-1">
                                                            <a href="#!">
                                                                <h5 className="text-white fs-16 mb-1">3d Style</h5>
                                                            </a>
                                                            <p className="text-white-75 mb-0">4781+ Items</p>
                                                        </div>
                                                        <div className="avatar-xxs">
                                                            <div className="avatar-title bg-white rounded-circle">
                                                                <a href="#!" className="link-success"><i className="ri-arrow-right-line"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="dash-collection overflow-hidden rounded-top position-relative">
                                                    <img src="/assets/images/nft/img-06.jpg" alt="" height="220" className="object-cover w-100" />
                                                    <div className="content position-absolute bottom-0 m-2 p-2 start-0 end-0 rounded d-flex align-items-center">
                                                        <div className="flex-grow-1">
                                                            <a href="#!">
                                                                <h5 className="text-white fs-16 mb-1">Collectibles</h5>
                                                            </a>
                                                            <p className="text-white-75 mb-0">3468+ Items</p>
                                                        </div>
                                                        <div className="avatar-xxs">
                                                            <div className="avatar-title bg-white rounded-circle">
                                                                <a href="#!" className="link-success"><i className="ri-arrow-right-line"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--end swiper--> */}
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header d-flex align-items-center">
                                    <h5 className="card-title flex-grow-1 mb-0">Popular Creators</h5>
                                    <a href="apps-nft-creators.html" type="button" className="btn btn-soft-primary btn-sm flex-shrink-0">
                                        See All <i className="ri-arrow-right-line align-bottom"></i>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="swiper collection-slider">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="d-flex">
                                                    <div className="flex-shink-0">
                                                        <img src="/assets/images/nft/img-02.jpg" alt="" className="avatar-sm object-cover rounded" />
                                                    </div>
                                                    <div className="ms-3 flex-grow-1">
                                                        <a href="pages-profile.html">
                                                            <h5 className="mb-1">Alexis Clarke</h5>
                                                        </a>
                                                        <p className="text-muted mb-0"><i className="mdi mdi-ethereum text-primary fs-14"></i> 81,369 ETH</p>
                                                    </div>
                                                    <div>
                                                        <div className="dropdown float-end">
                                                            <button className="btn btn-ghost-primary btn-icon dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-fill align-middle fs-16"></i>
                                                            </button>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li><a className="dropdown-item" href="#">View</a></li>
                                                                <li><a className="dropdown-item" href="#">Share</a></li>
                                                                <li><a className="dropdown-item" href="#!">Report</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="d-flex">
                                                    <div className="flex-shink-0">
                                                        <img src="/assets/images/nft/img-01.jpg" alt="" className="avatar-sm object-cover rounded" />
                                                    </div>
                                                    <div className="ms-3 flex-grow-1">
                                                        <a href="pages-profile.html">
                                                            <h5 className="mb-1">Timothy Smith</h5>
                                                        </a>
                                                        <p className="text-muted mb-0"><i className="mdi mdi-ethereum text-primary fs-14"></i> 4,754 ETH</p>
                                                    </div>
                                                    <div>
                                                        <div className="dropdown float-end">
                                                            <button className="btn btn-ghost-primary btn-icon dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-fill align-middle fs-16"></i>
                                                            </button>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li><a className="dropdown-item" href="#">View</a></li>
                                                                <li><a className="dropdown-item" href="#">Share</a></li>
                                                                <li><a className="dropdown-item" href="#!">Report</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="d-flex">
                                                    <div className="flex-shink-0">
                                                        <img src="/assets/images/nft/img-04.jpg" alt="" className="avatar-sm object-cover rounded" />
                                                    </div>
                                                    <div className="ms-3 flex-grow-1">
                                                        <a href="pages-profile.html">
                                                            <h5 className="mb-1">Herbert Stokes</h5>
                                                        </a>
                                                        <p className="text-muted mb-0"><i className="mdi mdi-ethereum text-primary fs-14"></i> 68,945 ETH</p>
                                                    </div>
                                                    <div>
                                                        <div className="dropdown float-end">
                                                            <button className="btn btn-ghost-primary btn-icon dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-fill align-middle fs-16"></i>
                                                            </button>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li><a className="dropdown-item" href="#">View</a></li>
                                                                <li><a className="dropdown-item" href="#">Share</a></li>
                                                                <li><a className="dropdown-item" href="#!">Report</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="d-flex">
                                                    <div className="flex-shink-0">
                                                        <img src="/assets/images/users/avatar-1.jpg" alt="" className="avatar-sm object-cover rounded" />
                                                    </div>
                                                    <div className="ms-3 flex-grow-1">
                                                        <a href="pages-profile.html">
                                                            <h5 className="mb-1">Glen Matney</h5>
                                                        </a>
                                                        <p className="text-muted mb-0"><i className="mdi mdi-ethereum text-primary fs-14"></i> 49,031 ETH</p>
                                                    </div>
                                                    <div>
                                                        <div className="dropdown float-end">
                                                            <button className="btn btn-ghost-primary btn-icon dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ri-more-fill align-middle fs-16"></i>
                                                            </button>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li><a className="dropdown-item" href="#">View</a></li>
                                                                <li><a className="dropdown-item" href="#">Share</a></li>
                                                                <li><a className="dropdown-item" href="#!">Report</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--end swiper--> */}
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

export default Nft;