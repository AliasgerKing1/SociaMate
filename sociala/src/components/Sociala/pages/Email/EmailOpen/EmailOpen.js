import React from 'react';
import Header from '../../../shared/Header/Header';
import LeftSection from '../../../shared/left/LeftSection/LeftSection';
import Contact from '../../../shared/very_right/Contact/Contact';
import Group from '../../../shared/very_right/Group/Group';
import Pages from '../../../shared/very_right/Pages/Pages';
import FooterBar from "../../../shared/FooterBar/FooterBar";

function EmailOpen() {
  return (
    <div>
      <div className="color-theme-blue mont-font">
        {/* <div className="preloader"></div> */}

        <div className="main-wrapper">
          {/* <!-- navigation top--> */}
          <Header />
          {/* <!-- navigation top --> */}

          {/* <!-- navigation left --> */}

          <LeftSection />

          {/* <!-- navigation left --> */}
          {/* <!-- main content --> */}
          {/* <!-- main content --> */}
          <div className="main-content right-chat-active">
            <div className="middle-sidebar-bottom">
              <div
                className="middle-sidebar-left pe-0 ps-lg-3 ms-0 me-0"
                style={{ maxWidth: "100%" }}
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div className="chat-wrapper p-0 w-100 position-relative scroll-bar bg-white theme-dark-bg">
                      <div className="chat-wrapper pt-0 w-100 position-relative scroll-bar">
                        <div className="chat-body p-lg-4 p-3 mt-lg-3 mt-0">
                          <div className="card dark-bg-transparent border-0 w-100 p-0 mb-3 shadow-none">
                            <div className="card-body p-0">
                              <h6 className="fw-600 text-grey-500 font-xsssss">
                                Today, 16th September 2020, 11:45{" "}
                              </h6>
                              <h2 className="font-sm text-grey-900 fw-600">
                                Meeting World
                              </h2>
                            </div>
                          </div>
                          <div
                            className="panel-group"
                            id="accordion"
                            role="tablist"
                            aria-multiselectable="true"
                          >
                            <div className="panel panel-default p-0 bg-transparent border-bottom rounded-0">
                              <div
                                className="panel-heading  pb-2"
                                role="tab"
                                id="headingOne"
                              >
                                <a
                                  className="panel-title fw-400 mb-0 accordion-toggle icon-none d-flex justify-content-between pe-0 collapsed"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#collapseOne"
                                  aria-expanded="false"
                                  aria-controls="collapseOne"
                                >
                                  <figure className="avatar me-2 mb-0 w35 mt-1 pt-1">
                                    <img
                                      src="/assets/images/user-8.png"
                                      alt="image"
                                      className="float-right shadow-sm rounded-circle w-100"
                                    />
                                  </figure>
                                  <span className="font-xssss text-grey-700 pt-2 mt-1 ps-2 fw-700 mb-0 me-auto text-dark">
                                    Aenni Mirenda{" "}
                                  </span>
                                  <span className="font-xssss text-grey-500 pt-2 mt-1 ps-2 fw-600 mb-0 ms-auto">
                                    14.09.2020 10:23
                                  </span>
                                </a>
                              </div>
                              <div
                                id="collapseOne"
                                className="panel-collapse in collapse"
                                role="tabpanel"
                                aria-labelledby="headingOne"
                              >
                                <p className="text-grey-600 mb-4 font-xsss lh-28 fw-500 mt-3">
                                  Hi Aenni, <br /> <br /> All individual Framer
                                  subscriptions have been grandfathered into a
                                  Pro plan at your existing rate. If you were on
                                  a Small Team plan, then all 5 seats have been
                                  converted over to Pro seats at your existing
                                  rate. <br />
                                  <br /> Regards,
                                  <br />
                                  Jessica{" "}
                                </p>
                              </div>
                            </div>
                            <div className="panel panel-default p-0 mb-0 bg-transparent border-bottom rounded-0">
                              <div
                                className="panel-heading pb-2"
                                role="tab"
                                id="headingTwo"
                              >
                                <a
                                  className="panel-title fw-400 mb-0 accordion-toggle icon-none collapsed d-flex justify-content-between pe-0"
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  <figure className="avatar me-2 mb-0 w35 mt-1 pt-1">
                                    <img
                                      src="/assets/images/icon2.png"
                                      alt="image"
                                      className="float-left shadow-none rounded-circle w-75 mt-1"
                                    />
                                  </figure>
                                  <span className="font-xssss text-grey-700 pt-2 mt-1 ps-2 fw-700 mb-0 me-auto text-dark">
                                    You
                                  </span>
                                  <span className="font-xssss text-grey-500 pt-2 mt-1 ps-2 fw-600 mb-0 ms-auto">
                                    14.09.2020 11:45
                                  </span>
                                </a>
                              </div>
                              <div
                                id="collapseTwo"
                                className="panel-collapse collapse in"
                                role="tabpanel"
                                aria-labelledby="headingTwo"
                              >
                                <div className="panel-body pt-4">
                                  <p className="text-grey-600 mb-4 font-xsss lh-28 fw-500 mt-3">
                                    Hi Aenni, <br /> <br /> All individual
                                    Framer subscriptions have been grandfathered
                                    into a Pro plan at your existing rate. If
                                    you were on a Small Team plan, then all 5
                                    seats have been converted over to Pro seats
                                    at your existing rate. <br />
                                    <br /> Regards,
                                    <br />
                                    Jessica{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="panel panel-default p-0 bg-transparent rounded-0">
                              <div
                                className="panel-heading pt-1 pb-2"
                                role="tab"
                                id="headingThree"
                              >
                                <a
                                  className="panel-title fw-400 mb-0 accordion-toggle icon-none d-flex justify-content-between pe-0"
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#collapseThree"
                                  aria-expanded="true"
                                  aria-controls="collapseThree"
                                >
                                  <figure className="avatar me-2 mb-0 w35 mt-1 pt-1">
                                    <img
                                      src="/assets/images/user-8.png"
                                      alt="image"
                                      className="float-right shadow-sm rounded-circle w-100"
                                    />
                                  </figure>
                                  <span className="font-xssss text-grey-700 pt-2 mt-1 ps-2 fw-700 mb-0 me-auto text-dark">
                                    Aenni Mirenda{" "}
                                  </span>
                                  <span className="font-xssss text-grey-500 pt-2 mt-1 ps-2 fw-600 mb-0 ms-auto">
                                    14.09.2020 12:23
                                  </span>
                                </a>
                              </div>
                              <div
                                id="collapseThree"
                                className="panel-collapse collapse in show"
                                role="tabpanel"
                                aria-labelledby="headingThree"
                              >
                                <p className="text-grey-600 mb-4 font-xsss lh-28 fw-500 mt-3">
                                  Hi Aenni, <br /> <br /> All individual Framer
                                  subscriptions have been grandfathered into a
                                  Pro plan at your existing rate. If you were on
                                  a Small Team plan, then all 5 seats have been
                                  converted over to Pro seats at your existing
                                  rate. <br />
                                  <br /> Regards,
                                  <br />
                                  Jessica{" "}
                                </p>
                                <textarea
                                  className="form-control mb-5 p-3 h100 bg-greylight lh-16"
                                  rows="5"
                                  placeholder="Write your message..."
                                ></textarea>
                                <p className="mb-5"></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="chat-bottom dark-bg p-3 mb-3 border-top border-bottom bor-0 theme-dark-bg"
                        style={{ width: "98%" }}
                      >
                        <form className="chat-form d-block overflow-hidden">
                          <button className="bg-dark border-0 btn-round-md float-left d-lg-block d-none">
                            <i className="ti-microphone text-white lh-4 font-xs"></i>
                          </button>
                          <button className="bg-dark border-0 btn-round-md ms-1 float-left">
                            <i className="ti-clip text-white lh-4 font-xs"></i>
                          </button>
                          <button className="bg-dark border-0 btn-round-md ms-1 float-left">
                            <i className="ti-image text-white lh-4 font-xs"></i>
                          </button>
                          <button className="bg-current border-0 p-0 float-right w200 text-white fw-600 font-xssss text-uppercase">
                            Send
                          </button>
                        </form>
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

export default EmailOpen;