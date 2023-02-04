import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Logout} from "../../../../services/loginAuthService/loginAuthService";

import Header from '../../shared/Header/Header';
import LeftSection from '../../shared/left/LeftSection/LeftSection';
import Contact from '../../shared/very_right/Contact/Contact';
import Group from '../../shared/very_right/Group/Group';
import Pages from '../../shared/very_right/Pages/Pages';
import FooterBar from "../../shared/FooterBar/FooterBar";

let Setting =()  => {
  let navigate = useNavigate();
  let logout = () => {
    Logout();
    navigate("/")
  }
  return (
    <div>
      <div className="color-theme-blue mont-font">

        <div className="main-wrapper">

          {/* <!-- navigation top--> */}
          <Header />
          {/* <!-- navigation top--> */}


          {/* <!-- navigation left --> */}
          <LeftSection />
          {/* <!-- navigation left --> */}


          {/* <!-- main content --> */}
          <div className="main-content bg-lightblue theme-dark-bg right-chat-active">
            <div className="middle-sidebar-bottom">
              <div className="middle-sidebar-left">
                <div className="middle-wrap">
                  <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                    <div className="card-body p-lg-5 p-4 w-100 border-0">
                      <div className="row">
                        <div className="col-lg-12">
                          <h4 className="mb-4 font-xxl fw-700 mont-font mb-lg-5 mb-4 font-md-xs">
                            Settings
                          </h4>
                          <div className="nav-caption fw-600 font-xssss text-grey-500 mb-2">
                            Genaral
                          </div>
                          <ul className="list-inline mb-4">
                            <li className="list-inline-item d-block border-bottom me-0">
                              <Link
                               to="/auth/setting/account/info"
                                className="pt-2 pb-2 d-flex align-items-center"
                              >
                                <i className="btn-round-md bg-primary-gradiant text-white feather-home font-md me-3"></i>
                                <h4 className="fw-600 font-xsss mb-0 mt-0">
                                  Acount Information
                                </h4>
                                <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item d-block border-bottom me-0">
                              <Link
                                to="/auth/setting/saveaddress"
                                className="pt-2 pb-2 d-flex align-items-center"
                              >
                                <i className="btn-round-md bg-gold-gradiant text-white feather-map-pin font-md me-3"></i>
                                <h4 className="fw-600 font-xsss mb-0 mt-0">
                                  Saved Address
                                </h4>
                                <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item d-block me-0">
                              <Link
                                to="/auth/setting/social"
                                className="pt-2 pb-2 d-flex align-items-center"
                              >
                                <i className="btn-round-md bg-red-gradiant text-white feather-twitter font-md me-3"></i>
                                <h4 className="fw-600 font-xsss mb-0 mt-0">
                                  Social Acount
                                </h4>
                                <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                              </Link>
                            </li>
                          </ul>

                          <div className="nav-caption fw-600 font-xsss text-grey-500 mb-2">
                            Acount
                          </div>
                          <ul className="list-inline mb-4">
                            <li className="list-inline-item d-block border-bottom me-0">
                              <Link
                                to="/auth/setting/card"
                                className="pt-2 pb-2 d-flex align-items-center"
                              >
                                <i className="btn-round-md bg-mini-gradiant text-white feather-credit-card font-md me-3"></i>
                                <h4 className="fw-600 font-xsss mb-0 mt-0">
                                  My Cards
                                </h4>
                                <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item d-block  me-0">
                              <Link
                               to="/auth/setting/password"
                                className="pt-2 pb-2 d-flex align-items-center"
                              >
                                <i className="btn-round-md bg-blue-gradiant text-white feather-inbox font-md me-3"></i>
                                <h4 className="fw-600 font-xsss mb-0 mt-0">
                                  Password
                                </h4>
                                <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                              </Link>
                            </li>
                          </ul>

                          <div className="nav-caption fw-600 font-xsss text-grey-500 mb-2">
                            Other
                          </div>
                          <ul className="list-inline">
                            <li className="list-inline-item d-block border-bottom me-0">
                              <Link
                               to="/auth/setting/notifications"
                                className="pt-2 pb-2 d-flex align-items-center"
                              >
                                <i className="btn-round-md bg-gold-gradiant text-white feather-bell font-md me-3"></i>
                                <h4 className="fw-600 font-xsss mb-0 mt-0">
                                  Notification
                                </h4>
                                <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item d-block border-bottom me-0">
                              <Link
                                to="/auth/setting/help"
                                className="pt-2 pb-2 d-flex align-items-center"
                              >
                                <i className="btn-round-md bg-primary-gradiant text-white feather-help-circle font-md me-3"></i>
                                <h4 className="fw-600 font-xsss mb-0 mt-0">Help</h4>
                                <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                              </Link>
                            </li>
                            <li className="list-inline-item d-block me-0">
                              <a
                                onClick={logout}
                                className="pt-2 pb-2 d-flex align-items-center"
                                style={{cursor : 'pointer'}}
                              >
                                <i className="btn-round-md bg-red-gradiant text-white feather-lock font-md me-3"></i>
                                <h4 className="fw-600 font-xsss mb-0 mt-0" >
                                  Logout
                                </h4>
                                <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- main content --> */}

          {/* <!-- right chat --> */}
          {/* <!-- right chat --> */}
          <div className="right-chat nav-wrap mt-2 right-scroll-bar">
            <div className="middle-sidebar-right-content bg-white shadow-xss rounded-xxl">
              {/* <!-- loader wrapper --> */}
              <div className="preloader-wrap p-3">
                <div className="box shimmer">
                  <div className="lines">
                    <div className="line s_shimmer"></div>
                    <div className="line s_shimmer"></div>
                    <div className="line s_shimmer"></div>
                    <div className="line s_shimmer"></div>
                  </div>
                </div>
                <div className="box shimmer mb-3">
                  <div className="lines">
                    <div className="line s_shimmer"></div>
                    <div className="line s_shimmer"></div>
                    <div className="line s_shimmer"></div>
                    <div className="line s_shimmer"></div>
                  </div>
                </div>
                <div className="box shimmer">
                  <div className="lines">
                    <div className="line s_shimmer"></div>
                    <div className="line s_shimmer"></div>
                    <div className="line s_shimmer"></div>
                    <div className="line s_shimmer"></div>
                  </div>
                </div>
              </div>
                {/* <!-- loader wrapper --> */}

                <Contact/>
              
              <Group/>
              
              <Pages/>



            </div>
          </div>

          {/* <!-- right chat --> */}

          <FooterBar/>

          <div className="app-header-search">
            <form className="search-form">
              <div className="form-group searchbox mb-0 border-0 p-1">
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Search..."
                />
                <i className="input-icon">
                  <ion-icon
                    name="search-outline"
                    role="img"
                    className="md hydrated"
                    aria-label="search outline"
                  ></ion-icon>
                </i>
                <a
                  href="#"
                  className="ms-1 mt-1 d-inline-block close searchbox-close"
                >
                  <i className="ti-close font-xs"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;