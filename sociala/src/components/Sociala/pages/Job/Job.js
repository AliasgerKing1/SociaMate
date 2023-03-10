import React, { useState } from 'react';
import Header from '../../shared/Header/Header';
import LeftSection from '../../shared/left/LeftSection/LeftSection';
import Contact from '../../shared/very_right/Contact/Contact';
import Group from '../../shared/very_right/Group/Group';
import Pages from '../../shared/very_right/Pages/Pages';
import FooterBar from '../../shared/FooterBar/FooterBar';



let Job = () => {
  let [navLink6, setNavLink6] = useState(false);
  let demo = ()=> {
    setNavLink6(true);
      }

  return (
    <div  onLoad={demo}>
      <div className="color-theme-blue mont-font">
        {/* <div className="preloader"></div> */}

        <div className="main-wrapper">
          {/* <!-- navigation top--> */}
          <Header navLink6={navLink6} />
          {/* <!-- navigation top --> */}

          {/* <!-- navigation left --> */}

          <LeftSection />

          {/* <!-- navigation left --> */}
          {/* <!-- main content --> */}

          <div className="main-content right-chat-active">
            <div className="middle-sidebar-bottom">
              <div
                className="middle-sidebar-left pe-0 ms-0 me-0"
                style={{ maxWidth: "100%" }}
              >
                <div className="row">
                  <div className="col-xl-6 chat-left scroll-bar">
                    <div className="card shadow-xss w-100 d-block d-flex border-0 p-4 mb-3">
                      <div className="card-body d-flex align-items-center p-0">
                        <h2 className="fw-700 mb-0 mt-0 font-md text-grey-900">
                          Job
                        </h2>
                        <div className="search-form-2 ms-auto">
                          <i className="ti-search font-xss"></i>
                          <input
                            type="text"
                            className="form-control text-grey-500 mb-0 bg-greylight theme-dark-bg border-0"
                            placeholder="Search here."
                          />
                        </div>
                        <a
                          href="#"
                          className="btn-round-md ms-2 bg-greylight theme-dark-bg rounded-3"
                        >
                          <i className="feather-filter font-xss text-grey-500"></i>
                        </a>
                      </div>
                    </div>
                    <div
                      className="card d-block w-100 border-0 mb-3 shadow-xss bg-white rounded-3 p-4"
                      style={{ paddingLeft: "120px !important" }}
                    >
                      <div className="row">
                        <div className="col-md-2">
                          <img
                            src="/assets/images/download7.png"
                            alt="images"
                            className="position-absolute p-2 bg-lightblue2 w65 ms-4 left-0"
                          />
                        </div>
                        <div className="col-md-10">
                          <i className="feather-bookmark font-md text-grey-500 position-absolute right-0 me-3"></i>
                          <h4 className="font-xss fw-700 text-grey-900 mb-3 pe-4">
                            Python Developer{" "}
                            <span className="font-xssss fw-500 text-grey-500 ms-4">
                              (3 days ago)
                            </span>{" "}
                          </h4>
                          <h5 className="font-xssss mb-2 text-grey-500 fw-600">
                            <span className="text-grey-900 font-xssss">
                              Location :{" "}
                            </span>{" "}
                            London, United Kingdom
                          </h5>
                          <h5 className="font-xssss mb-2 text-grey-500 fw-600">
                            <span className="text-grey-900 font-xssss">
                              Employment :{" "}
                            </span>{" "}
                            Part Time
                          </h5>
                          <h5 className="font-xssss text-grey-500 fw-600 mb-3">
                            <span className="text-grey-900 font-xssss">
                              Salary :{" "}
                            </span>{" "}
                            12000 -45000
                          </h5>
                          <h6 className="d-inline-block p-2 text-success alert-success fw-600 font-xssss rounded-3 me-2">
                            UX Design
                          </h6>
                          <h6 className="d-inline-block p-2 text-warning alert-warning fw-600 font-xssss rounded-3 me-2">
                            Andriod
                          </h6>
                          <h6 className="d-inline-block p-2 text-secondary alert-secondary fw-600 font-xssss rounded-3 me-2">
                            Developer
                          </h6>
                          <a
                            href="#"
                            className="position-absolute bottom-15 mb-3 right-15"
                          >
                            <i className="btn-round-sm bg-primary-gradiant text-white font-sm feather-chevron-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className="card d-block w-100 border-0 mb-3 shadow-xss bg-white rounded-3 p-4"
                      style={{ paddingLeft: "120px !important" }}
                    >
                      <div className="row">
                        <div className="col-md-2">
                          <img
                            src="/assets/images/download4.png"
                            alt="images"
                            className="position-absolute p-2 bg-lightblue2 w65 ms-4 left-0"
                          />
                        </div>
                        <div className="col-md-10">
                          <i className="feather-bookmark font-md text-danger position-absolute right-0 me-3"></i>
                          <h4 className="font-xss fw-700 text-grey-900 mb-3 pe-4">
                            Sass Developer{" "}
                            <span className="font-xssss fw-500 text-grey-500 ms-4">
                              (3 days ago)
                            </span>{" "}
                          </h4>
                          <h5 className="font-xssss mb-2 text-grey-500 fw-600">
                            <span className="text-grey-900 font-xssss">
                              Location :{" "}
                            </span>{" "}
                            London, United Kingdom
                          </h5>
                          <h5 className="font-xssss mb-2 text-grey-500 fw-600">
                            <span className="text-grey-900 font-xssss">
                              Employment :{" "}
                            </span>{" "}
                            Part Time
                          </h5>
                          <h5 className="font-xssss text-grey-500 fw-600 mb-3">
                            <span className="text-grey-900 font-xssss">
                              Salary :{" "}
                            </span>{" "}
                            12000 -45000
                          </h5>
                          <h6 className="d-inline-block p-2 text-success alert-success fw-600 font-xssss rounded-3 me-2">
                            UX Design
                          </h6>
                          <h6 className="d-inline-block p-2 text-warning alert-warning fw-600 font-xssss rounded-3 me-2">
                            Andriod
                          </h6>
                          <h6 className="d-inline-block p-2 text-secondary alert-secondary fw-600 font-xssss rounded-3 me-2">
                            Developer
                          </h6>
                          <a
                            href="#"
                            className="position-absolute bottom-15 mb-3 right-15"
                          >
                            <i className="btn-round-sm bg-primary-gradiant text-white font-sm feather-chevron-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className="card d-block w-100 border-0 mb-3 shadow-xss bg-white rounded-3 p-4"
                      style={{ paddingLeft: "120px !important" }}
                    >
                      <div className="row">
                        <div className="col-md-2">
                          <img
                            src="/assets/images/download6.png"
                            alt="images"
                            className="position-absolute p-2 bg-lightblue2 w65 ms-4 left-0"
                          />
                        </div>
                        <div className="col-md-10">
                          <i className="feather-bookmark font-md text-danger position-absolute right-0 me-3"></i>
                          <h4 className="font-xss fw-700 text-grey-900 mb-3 pe-4">
                            Java Developer{" "}
                            <span className="font-xssss fw-500 text-grey-500 ms-4">
                              (3 days ago)
                            </span>{" "}
                          </h4>
                          <h5 className="font-xssss mb-2 text-grey-500 fw-600">
                            <span className="text-grey-900 font-xssss">
                              Location :{" "}
                            </span>{" "}
                            London, United Kingdom
                          </h5>
                          <h5 className="font-xssss mb-2 text-grey-500 fw-600">
                            <span className="text-grey-900 font-xssss">
                              Employment :{" "}
                            </span>{" "}
                            Part Time
                          </h5>
                          <h5 className="font-xssss text-grey-500 fw-600 mb-3">
                            <span className="text-grey-900 font-xssss">
                              Salary :{" "}
                            </span>{" "}
                            12000 -45000
                          </h5>
                          <h6 className="d-inline-block p-2 text-success alert-success fw-600 font-xssss rounded-3 me-2">
                            UX Design
                          </h6>
                          <h6 className="d-inline-block p-2 text-warning alert-warning fw-600 font-xssss rounded-3 me-2">
                            Andriod
                          </h6>
                          <h6 className="d-inline-block p-2 text-secondary alert-secondary fw-600 font-xssss rounded-3 me-2">
                            Developer
                          </h6>
                          <a
                            href="#"
                            className="position-absolute bottom-15 mb-3 right-15"
                          >
                            <i className="btn-round-sm bg-primary-gradiant text-white font-sm feather-chevron-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card d-block w-100 border-0 mb-3 shadow-xss bg-white rounded-3 p-4"
                      style={{ paddingLeft: "120px !important" }}
                    >
                      <div className="row">
                        <div className="col-md-2">
                          <img
                            src="/assets/images/download5.png"
                            alt="images"
                            className="position-absolute p-2 bg-lightblue2 w65 ms-4 left-0"
                          />
                        </div>
                        <div className="col-md-10">
                          <i className="feather-bookmark font-md text-grey-500 position-absolute right-0 me-3"></i>
                          <h4 className="font-xss fw-700 text-grey-900 mb-3 pe-4">
                            React Developer{" "}
                            <span className="font-xssss fw-500 text-grey-500 ms-4">
                              (3 days ago)
                            </span>{" "}
                          </h4>
                          <h5 className="font-xssss mb-2 text-grey-500 fw-600">
                            <span className="text-grey-900 font-xssss">
                              Location :{" "}
                            </span>{" "}
                            London, United Kingdom
                          </h5>
                          <h5 className="font-xssss mb-2 text-grey-500 fw-600">
                            <span className="text-grey-900 font-xssss">
                              Employment :{" "}
                            </span>{" "}
                            Part Time
                          </h5>
                          <h5 className="font-xssss text-grey-500 fw-600 mb-3">
                            <span className="text-grey-900 font-xssss">
                              Salary :{" "}
                            </span>{" "}
                            12000 -45000
                          </h5>
                          <h6 className="d-inline-block p-2 text-success alert-success fw-600 font-xssss rounded-3 me-2">
                            UX Design
                          </h6>
                          <h6 className="d-inline-block p-2 text-warning alert-warning fw-600 font-xssss rounded-3 me-2">
                            Andriod
                          </h6>
                          <h6 className="d-inline-block p-2 text-secondary alert-secondary fw-600 font-xssss rounded-3 me-2">
                            Developer
                          </h6>
                          <a
                            href="#"
                            className="position-absolute bottom-15 mb-3 right-15"
                          >
                            <i className="btn-round-sm bg-primary-gradiant text-white font-sm feather-chevron-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 ps-0 d-none d-xl-block">
                      <div className="card w-100 border-0 shadow-none rounded-3 border-0 mb-4 overflow-hidden ">
                        <div
                          id="map"
                          className="rounded-3"
                          style={{ height: "86vh" }}
                        ></div>
                        <h1>helloooo</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- main content --> */}

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

                <Contact />

                <Group />

                <Pages />
              </div>
            </div>

            {/* <!-- right chat --> */}

            <FooterBar />

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

          <div className="modal-popup-chat">
            <div className="modal-popup-wrap bg-white p-0 shadow-lg rounded-3">
              <div className="modal-popup-header w-100 border-bottom">
                <div className="card p-3 d-block border-0 d-block">
                  <figure className="avatar mb-0 float-left me-2">
                    <img
                      src="/assets/images/user-12.png"
                      alt="image"
                      className="w35 me-1"
                    />
                  </figure>
                  <h5 className="fw-700 text-primary font-xssss mt-1 mb-1">
                    Hendrix Stamp
                  </h5>
                  <h4 className="text-grey-500 font-xsssss mt-0 mb-0">
                    <span className="d-inline-block bg-success btn-round-xss m-0"></span>{" "}
                    Available
                  </h4>
                  <a
                    href="#"
                    className="font-xssss position-absolute right-0 top-0 mt-3 me-4"
                  >
                    <i className="ti-close text-grey-900 mt-2 d-inline-block"></i>
                  </a>
                </div>
              </div>
              <div className="modal-popup-body w-100 p-3 h-auto">
                <div className="message">
                  <div className="message-content font-xssss lh-24 fw-500">
                    Hi, how can I help you?
                  </div>
                </div>
                <div className="date-break font-xsssss lh-24 fw-500 text-grey-500 mt-2 mb-2">
                  Mon 10:20am
                </div>
                <div className="message self text-right mt-2">
                  <div className="message-content font-xssss lh-24 fw-500">
                    I want those files for you. I want you to send 1 PDF and 1
                    image file.
                  </div>
                </div>
                <div
                  className="snippet pt-3 ps-4 pb-2 pe-3 mt-2 bg-grey rounded-xl float-right"
                  data-title=".dot-typing"
                >
                  <div className="stage">
                    <div className="dot-typing"></div>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="modal-popup-footer w-100 border-top">
                <div className="card p-3 d-block border-0 d-block">
                  <div className="form-group icon-right-input style1-input mb-0">
                    <input
                      type="text"
                      placeholder="Start typing.."
                      className="form-control rounded-xl bg-greylight border-0 font-xssss fw-500 ps-3"
                    />
                    <i className="feather-send text-grey-500 font-md"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job;