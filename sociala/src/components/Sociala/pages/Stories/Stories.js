import React, { useState } from "react";
import Header from '../../shared/Header/Header';
import LeftSection from '../../shared/left/LeftSection/LeftSection';
import Contact from '../../shared/very_right/Contact/Contact';
import Group from '../../shared/very_right/Group/Group';
import Pages from '../../shared/very_right/Pages/Pages';
import FooterBar from '../../shared/FooterBar/FooterBar';
import Story from "../../shared/Story/Story";

 let Stories =() => {
  let [navLink2, setNavLink2] = useState(false);

  let demo = ()=> {
    setNavLink2(true);
  }
  return (
    <div onLoad={demo}>
      <div className="color-theme-blue mont-font">
        {/* <div className="preloader"></div> */}

        <div className="main-wrapper">
          {/* <!-- navigation top--> */}
          <Header navLink2={navLink2} />
          {/* <!-- navigation top--> */}
          {/* <!-- navigation left --> */}
          <LeftSection />
          {/* <!--  navigation left --> */}
          {/* <!-- main content --> */}
          <div className="main-content right-chat-active">
            <div className="middle-sidebar-bottom">
              <div className="middle-sidebar-left pe-0">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="card shadow-xss w-100 d-block d-flex border-0 p-4 mb-3">
                      <div className="card-body d-flex align-items-center p-0">
                        <h2 className="fw-700 mb-0 mt-0 font-md text-grey-900">
                          Storie
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

                    <div className="row ps-2 pe-1">
                      <div className="col-md-3 col-xss-6 pe-2 ps-2">
                        <div
                          className="card h300 d-block border-0 shadow-xss rounded-3 bg-gradiant-bottom overflow-hidden mb-3 bg-image-cover"
                          data-bs-target="#Modalstries"
                          data-bs-toggle="modal"
                          style={{
                            backgroundImage: "url(/assets/images/s-1.jpg)",
                          }}
                        >
                          <div className="card-body d-block w-100 position-absolute bottom-0 text-center">
                            <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                              <img
                                src="/assets/images/user-7.png"
                                alt="image"
                                className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                              />
                            </figure>
                            <div className="clearfix"></div>
                            <h4 className="fw-600 position-relative z-index-1 ls-3 font-xssss text-white mt-2 mb-1">
                              Victor Exrixon
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-xss-6 pe-2 ps-2">
                        <div
                          className="card h300 d-block border-0 shadow-xss rounded-3 bg-gradiant-bottom overflow-hidden mb-3 bg-image-cover"
                          data-bs-target="#Modalstries"
                          data-bs-toggle="modal"
                          style={{
                            backgroundImage: "url(/assets/images/s-2.jpg)",
                          }}
                        >
                          <div className="card-body d-block w-100 position-absolute bottom-0 text-center">
                            <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                              <img
                                src="/assets/images/user-12.png"
                                alt="image"
                                className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                              />
                            </figure>
                            <div className="clearfix"></div>
                            <h4 className="fw-600 position-relative z-index-1 ls-3 font-xssss text-white mt-2 mb-1">
                              Surfiya Zakir
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-xss-6 pe-2 ps-2">
                        <div
                          className="card h300 d-block border-0 shadow-xss rounded-3 bg-gradiant-bottom overflow-hidden mb-3"
                          data-bs-target="#Modalstries"
                          data-bs-toggle="modal"
                        >
                          <video autoPlay loop className="float-right w-100">
                            <source
                              src="/assets/images/s-4.mp4"
                              type="video/mp4"
                            />
                          </video>
                          <div className="card-body d-block w-100 position-absolute bottom-0 text-center">
                            <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                              <img
                                src="/assets/images/user-4.png"
                                alt="image"
                                className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                              />
                            </figure>
                            <div className="clearfix"></div>
                            <h4 className="fw-600 position-relative z-index-1 ls-3 font-xssss text-white mt-2 mb-1">
                              Goria Coast
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-xss-6 pe-2 ps-2">
                        <div
                          className="card h300 d-block border-0 shadow-xss rounded-3 bg-gradiant-bottom overflow-hidden mb-3"
                          data-bs-target="#Modalstries"
                          data-bs-toggle="modal"
                        >
                          <video autoPlay loop className="float-right w-100">
                            <source
                              src="/assets/images/s-3.mp4"
                              type="video/mp4"
                            />
                          </video>
                          <div className="card-body d-block w-100 position-absolute bottom-0 text-center">
                            <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                              <img
                                src="/assets/images/user-3.png"
                                alt="image"
                                className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                              />
                            </figure>
                            <div className="clearfix"></div>
                            <h4 className="fw-600 position-relative z-index-1 ls-3 font-xssss text-white mt-2 mb-1">
                              Hurin Seary
                            </h4>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3 col-xss-6 pe-2 ps-2">
                        <div
                          className="card h300 d-block border-0 shadow-xss rounded-3 bg-gradiant-bottom overflow-hidden mb-3 bg-image-cover"
                          data-bs-target="#Modalstries"
                          data-bs-toggle="modal"
                          style={{
                            backgrounImage: "url(/assets/images/s-5.jpg)",
                          }}
                        >
                          <div className="card-body d-block w-100 position-absolute bottom-0 text-center">
                            <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                              <img
                                src="/assets/images/user-2.png"
                                alt="image"
                                className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                              />
                            </figure>
                            <div className="clearfix"></div>
                            <h4 className="fw-600 position-relative z-index-1 ls-3 font-xssss text-white mt-2 mb-1">
                              Victor Exrixon
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-xss-6 pe-2 ps-2">
                        <div
                          className="card h300 d-block border-0 shadow-xss rounded-3 bg-gradiant-bottom overflow-hidden mb-3 bg-image-cover"
                          data-bs-target="#Modalstries"
                          data-bs-toggle="modal"
                          style={{
                            backgroundImage: "url(/assets/images/s-6.jpg)",
                          }}
                        >
                          <div className="card-body d-block w-100 position-absolute bottom-0 text-center">
                            <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                              <img
                                src="/assets/images/user-8.png"
                                alt="image"
                                className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                              />
                            </figure>
                            <div className="clearfix"></div>
                            <h4 className="fw-600 position-relative z-index-1 ls-3 font-xssss text-white mt-2 mb-1">
                              Surfiya Zakir
                            </h4>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3 col-xss-6 pe-2 ps-2">
                        <div
                          className="card h300 d-block border-0 shadow-xss rounded-3 bg-gradiant-bottom overflow-hidden mb-3 bg-image-cover"
                          data-bs-target="#Modalstries"
                          data-bs-toggle="modal"
                          style={{
                            backgroundImage: "url(/assets/images/s-7.jpg)",
                          }}
                        >
                          <div className="card-body d-block w-100 position-absolute bottom-0 text-center">
                            <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                              <img
                                src="/assets/images/user-4.png"
                                alt="image"
                                className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                              />
                            </figure>
                            <div className="clearfix"></div>
                            <h4 className="fw-600 position-relative z-index-1 ls-3 font-xssss text-white mt-2 mb-1">
                              Goria Coast
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-xss-6 pe-2 ps-2">
                        <div
                          className="card h300 d-block border-0 shadow-xss rounded-3 bg-gradiant-bottom overflow-hidden mb-3 bg-image-cover"
                          data-bs-target="#Modalstries"
                          data-bs-toggle="modal"
                          style={{
                            backgroundImage: "url(/assets/images/s-8.jpg)",
                          }}
                        >
                          <div className="card-body d-block w-100 position-absolute bottom-0 text-center">
                            <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                              <img
                                src="/assets/images/user-3.png"
                                alt="image"
                                className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                              />
                            </figure>
                            <div className="clearfix"></div>
                            <h4 className="fw-600 position-relative z-index-1 ls-3 font-xssss text-white mt-2 mb-1">
                              Hurin Seary
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-xss-6 pe-2 ps-2">
                        <div
                          className="card h300 d-block border-0 shadow-xss rounded-3 bg-gradiant-bottom overflow-hidden mb-3 bg-image-cover"
                          data-bs-target="#Modalstries"
                          data-bs-toggle="modal"
                          style={{
                            backgroundImage: "url(/assets/images/s-9.jpg)",
                          }}
                        >
                          <div className="card-body d-block w-100 position-absolute bottom-0 text-center">
                            <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                              <img
                                src="/assets/images/user-7.png"
                                alt="image"
                                className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                              />
                            </figure>
                            <div className="clearfix"></div>
                            <h4 className="fw-600 position-relative z-index-1 ls-3 font-xssss text-white mt-2 mb-1">
                              Victor Exrixon
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-xss-6 pe-2 ps-2">
                        <div
                          className="card h300 d-block border-0 shadow-xss rounded-3 bg-gradiant-bottom overflow-hidden mb-3 bg-image-cover"
                          data-bs-target="#Modalstries"
                          data-bs-toggle="modal"
                          style={{
                            backgroundImage: "url(/assets/images/s-10.jpg)",
                          }}
                        >
                          <div className="card-body d-block w-100 position-absolute bottom-0 text-center">
                            <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                              <img
                                src="/assets/images/user-12.png"
                                alt="image"
                                className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                              />
                            </figure>
                            <div className="clearfix"></div>
                            <h4 className="fw-600 position-relative z-index-1 ls-3 font-xssss text-white mt-2 mb-1">
                              Surfiya Zakir
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-xss-6 pe-2 ps-2">
                        <div
                          className="card h300 d-block border-0 shadow-xss rounded-3 bg-gradiant-bottom overflow-hidden mb-3 bg-image-cover"
                          data-bs-target="#Modalstries"
                          data-bs-toggle="modal"
                          style={{
                            backgroundImage: "url(/assets/images/s-11.jpg)",
                          }}
                        >
                          <div className="card-body d-block w-100 position-absolute bottom-0 text-center">
                            <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                              <img
                                src="/assets/images/user-4.png"
                                alt="image"
                                className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                              />
                            </figure>
                            <div className="clearfix"></div>
                            <h4 className="fw-600 position-relative z-index-1 ls-3 font-xssss text-white mt-2 mb-1">
                              Goria Coast
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-xss-6 pe-2 ps-2">
                        <div
                          className="card h300 d-block border-0 shadow-xss rounded-3 bg-gradiant-bottom overflow-hidden mb-3 bg-image-cover"
                          data-bs-target="#Modalstries"
                          data-bs-toggle="modal"
                          style={{
                            backgroundImage: "url(/assets/images/s-12.jpg)",
                          }}
                        >
                          <div className="card-body d-block w-100 position-absolute bottom-0 text-center">
                            <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                              <img
                                src="/assets/images/user-3.png"
                                alt="image"
                                className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                              />
                            </figure>
                            <div className="clearfix"></div>
                            <h4 className="fw-600 position-relative z-index-1 ls-3 font-xssss text-white mt-2 mb-1">
                              Hurin Seary
                            </h4>
                          </div>
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

        <Story />

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
                  <span className="d-inline-block bg-success btn-round-xss m-0"></span>
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
  );
}

export default Stories;
