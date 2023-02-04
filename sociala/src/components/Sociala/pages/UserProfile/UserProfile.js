import React from "react";

import Header from '../../shared/Header/Header';
import LeftSection from '../../shared/left/LeftSection/LeftSection';
import Contact from '../../shared/very_right/Contact/Contact';
import Group from '../../shared/very_right/Group/Group';
import Pages from '../../shared/very_right/Pages/Pages';
import FooterBar from "../../shared/FooterBar/FooterBar";

let UserProfile =() => {
  return (
    <div>
      <div className="color-theme-blue mont-font">
        {/* <div className="preloader"></div> */}

        <div className="main-wrapper">
          <div className="main-wrapper">
            {/* <!-- navigation top--> */}
            <Header />
            {/* <!-- navigation top --> */}

            {/* <!-- navigation left --> */}

            <LeftSection />

            {/* <!-- navigation left --> */}
            {/* <!-- main content --> */}
            <div className="main-content right-chat-active">
              <div className="middle-sidebar-bottom">
                <div className="middle-sidebar-left">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3 mt-3 overflow-hidden">
                        <div
                          className="card-body position-relative h240 bg-image-cover bg-image-center"
                          style={{
                            backgroundImage: "url(/assets/images/bb-9.jpg)",
                          }}
                        ></div>
                        <div className="card-body d-block pt-4 text-center position-relative">
                          <figure className="avatar mt--6 position-relative w75 z-index-1 w100 z-index-1 ms-auto me-auto">
                            <img
                              src="/assets/images/pt-1.jpg"
                              alt="image"
                              className="p-1 bg-white rounded-xl w-100"
                            />
                          </figure>

                          <h4 className="font-xs ls-1 fw-700 text-grey-900">
                            Surfiya Zakir
                            <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                              @surfiyazakir22
                            </span>
                          </h4>
                          <div className="d-flex align-items-center pt-0 position-absolute left-15 top-10 mt-4 ms-2">
                            <h4 className="font-xsssss text-center d-none d-lg-block text-grey-500 fw-600 ms-2 me-2">
                              <b className="text-grey-900 mb-1 font-sm fw-700 d-inline-block ls-3 text-dark">
                                456
                              </b>
                              Posts
                            </h4>
                            <h4 className="font-xsssss text-center d-none d-lg-block text-grey-500 fw-600 ms-2 me-2">
                              <b className="text-grey-900 mb-1 font-sm fw-700 d-inline-block ls-3 text-dark">
                                2.1k
                              </b>
                              Followers
                            </h4>
                            <h4 className="font-xsssss text-center d-none d-lg-block text-grey-500 fw-600 ms-2 me-2">
                              <b className="text-grey-900 mb-1 font-sm fw-700 d-inline-block ls-3 text-dark">
                                32k
                              </b>
                              Follow
                            </h4>
                          </div>
                          <div className="d-flex align-items-center justify-content-center position-absolute right-15 top-10 mt-2 me-2">
                            <a
                              href="#"
                              className="d-none d-lg-block bg-success p-3 z-index-1 rounded-3 text-white font-xsssss text-uppercase fw-700 ls-3"
                            >
                              Add Friend
                            </a>
                            <a
                              href="#"
                              className="d-none d-lg-block bg-greylight btn-round-lg ms-2 rounded-3 text-grey-700"
                            >
                              <i className="feather-mail font-md"></i>
                            </a>
                            <a
                              href="#"
                              id="dropdownMenu8"
                              className="d-none d-lg-block btn-round-lg ms-2 rounded-3 text-grey-700 bg-greylight"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="ti-more font-md"></i>
                            </a>
                            <div
                              className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
                              aria-labelledby="dropdownMenu8"
                            >
                              <div className="card-body p-0 d-flex">
                                <i className="feather-bookmark text-grey-500 me-3 font-lg"></i>
                                <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-0">
                                  Save Link
                                  <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                    Add this to your saved items
                                  </span>
                                </h4>
                              </div>
                              <div className="card-body p-0 d-flex mt-2">
                                <i className="feather-alert-circle text-grey-500 me-3 font-lg"></i>
                                <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-0">
                                  Hide Post
                                  <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                    Save to your saved items
                                  </span>
                                </h4>
                              </div>
                              <div className="card-body p-0 d-flex mt-2">
                                <i className="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
                                <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-0">
                                  Hide all from Group
                                  <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                    Save to your saved items
                                  </span>
                                </h4>
                              </div>
                              <div className="card-body p-0 d-flex mt-2">
                                <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                                <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-0">
                                  Unfollow Group
                                  <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                    Save to your saved items
                                  </span>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="card-body d-block w-100 shadow-none mb-0 p-0 border-top-xs">
                          <ul
                            className="nav nav-tabs h55 d-flex product-info-tab border-bottom-0 ps-4"
                            id="pills-tab"
                            role="tablist"
                          >
                            <li className="active list-inline-item me-5">
                              <a
                                className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block active"
                                href="#navtabs1"
                                data-toggle="tab"
                              >
                                About
                              </a>
                            </li>
                            <li className="list-inline-item me-5">
                              <a
                                className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block"
                                href="#navtabs2"
                                data-toggle="tab"
                              >
                                Membership
                              </a>
                            </li>
                            <li className="list-inline-item me-5">
                              <a
                                className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block"
                                href="#navtabs3"
                                data-toggle="tab"
                              >
                                Discussion
                              </a>
                            </li>
                            <li className="list-inline-item me-5">
                              <a
                                className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block"
                                href="#navtabs4"
                                data-toggle="tab"
                              >
                                Video
                              </a>
                            </li>
                            <li className="list-inline-item me-5">
                              <a
                                className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block"
                                href="#navtabs3"
                                data-toggle="tab"
                              >
                                Group
                              </a>
                            </li>
                            <li className="list-inline-item me-5">
                              <a
                                className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block"
                                href="#navtabs1"
                                data-toggle="tab"
                              >
                                Events
                              </a>
                            </li>
                            <li className="list-inline-item me-5">
                              <a
                                className="fw-700 me-sm-5 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block"
                                href="#navtabs7"
                                data-toggle="tab"
                              >
                                Media
                              </a>
                            </li>
                            <li className="list-inline-item ms-auto mt-3 me-4">
                              <a href="#" className="">
                                <i className="ti-more-alt text-grey-500 font-xs"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-xxl-3 col-lg-4 pe-0">
                      <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                        <div className="card-body d-block p-4">
                          <h4 className="fw-700 mb-3 font-xsss text-grey-900">
                            About
                          </h4>
                          <p className="fw-500 text-grey-500 lh-24 font-xssss mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Morbi nulla dolor, ornare at commodo non,
                            feugiat non nisi. Phasellus faucibus mollis
                            pharetra. Proin blandit ac massa sed rhoncus
                          </p>
                        </div>
                        <div className="card-body border-top-xs d-flex">
                          <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                          <h4 className="fw-700 text-grey-900 font-xssss mt-0">
                            Private
                            <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                              What's up, how are you?
                            </span>
                          </h4>
                        </div>

                        <div className="card-body d-flex pt-0">
                          <i className="feather-eye text-grey-500 me-3 font-lg"></i>
                          <h4 className="fw-700 text-grey-900 font-xssss mt-0">
                            Visble
                            <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                              Anyone can find you
                            </span>
                          </h4>
                        </div>
                        <div className="card-body d-flex pt-0">
                          <i className="feather-map-pin text-grey-500 me-3 font-lg"></i>
                          <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                            Flodia, Austia
                          </h4>
                        </div>
                        <div className="card-body d-flex pt-0">
                          <i className="feather-users text-grey-500 me-3 font-lg"></i>
                          <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                            Genarel Group
                          </h4>
                        </div>
                      </div>
                      <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                        <div className="card-body d-flex align-items-center  p-4">
                          <h4 className="fw-700 mb-0 font-xssss text-grey-900">
                            Photos
                          </h4>
                          <a
                            href="#"
                            className="fw-600 ms-auto font-xssss text-primary"
                          >
                            See all
                          </a>
                        </div>
                        <div className="card-body d-block pt-0 pb-2">
                          <div className="row">
                            <div className="col-6 mb-2 pe-1">
                              <a
                                href="/assets/images/e-2.jpg"
                                data-lightbox="roadtrip"
                              >
                                <img
                                  src="/assets/images/e-2.jpg"
                                  alt="image"
                                  className="img-fluid rounded-3 w-100"
                                />
                              </a>
                            </div>
                            <div className="col-6 mb-2 ps-1">
                              <a
                                href="/assets/images/e-3.jpg"
                                data-lightbox="roadtrip"
                              >
                                <img
                                  src="/assets/images/e-3.jpg"
                                  alt="image"
                                  className="img-fluid rounded-3 w-100"
                                />
                              </a>
                            </div>
                            <div className="col-6 mb-2 pe-1">
                              <a
                                href="/assets/images/e-4.jpg"
                                data-lightbox="roadtrip"
                              >
                                <img
                                  src="/assets/images/e-4.jpg"
                                  alt="image"
                                  className="img-fluid rounded-3 w-100"
                                />
                              </a>
                            </div>
                            <div className="col-6 mb-2 ps-1">
                              <a
                                href="/assets/images/e-5.jpg"
                                data-lightbox="roadtrip"
                              >
                                <img
                                  src="/assets/images/e-5.jpg"
                                  alt="image"
                                  className="img-fluid rounded-3 w-100"
                                />
                              </a>
                            </div>
                            <div className="col-6 mb-2 pe-1">
                              <a
                                href="/assets/images/e-2.jpg"
                                data-lightbox="roadtrip"
                              >
                                <img
                                  src="/assets/images/e-2.jpg"
                                  alt="image"
                                  className="img-fluid rounded-3 w-100"
                                />
                              </a>
                            </div>
                            <div className="col-6 mb-2 ps-1">
                              <a
                                href="/assets/images/e-1.jpg"
                                data-lightbox="roadtrip"
                              >
                                <img
                                  src="/assets/images/e-1.jpg"
                                  alt="image"
                                  className="img-fluid rounded-3 w-100"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body d-block w-100 pt-0">
                          <a
                            href="#"
                            className="p-2 lh-28 w-100 d-block bg-grey text-grey-800 text-center font-xssss fw-700 rounded-xl"
                          >
                            <i className="feather-external-link font-xss me-2"></i>
                            More
                          </a>
                        </div>
                      </div>

                      <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                        <div className="card-body d-flex align-items-center  p-4">
                          <h4 className="fw-700 mb-0 font-xssss text-grey-900">
                            Event
                          </h4>
                          <a
                            href="#"
                            className="fw-600 ms-auto font-xssss text-primary"
                          >
                            See all
                          </a>
                        </div>
                        <div className="card-body d-flex pt-0 ps-4 pe-4 pb-3 overflow-hidden">
                          <div className="bg-success me-2 p-3 rounded-xxl">
                            <h4 className="fw-700 font-lg ls-3 lh-1 text-white mb-0">
                              <span className="ls-1 d-block font-xsss text-white fw-600">
                                FEB
                              </span>
                              22
                            </h4>
                          </div>
                          <h4 className="fw-700 text-grey-900 font-xssss mt-2">
                            Meeting with clients
                            <span className="d-block font-xsssss fw-500 mt-1 lh-4 text-grey-500">
                              41 madison ave, floor 24 new work, NY 10010
                            </span>
                          </h4>
                        </div>

                        <div className="card-body d-flex pt-0 ps-4 pe-4 pb-3 overflow-hidden">
                          <div className="bg-warning me-2 p-3 rounded-xxl">
                            <h4 className="fw-700 font-lg ls-3 lh-1 text-white mb-0">
                              <span className="ls-1 d-block font-xsss text-white fw-600">
                                APR
                              </span>
                              30
                            </h4>
                          </div>
                          <h4 className="fw-700 text-grey-900 font-xssss mt-2">
                            Developer Programe
                            <span className="d-block font-xsssss fw-500 mt-1 lh-4 text-grey-500">
                              41 madison ave, floor 24 new work, NY 10010
                            </span>
                          </h4>
                        </div>

                        <div className="card-body d-flex pt-0 ps-4 pe-4 pb-3 overflow-hidden">
                          <div className="bg-primary me-2 p-3 rounded-xxl">
                            <h4 className="fw-700 font-lg ls-3 lh-1 text-white mb-0">
                              <span className="ls-1 d-block font-xsss text-white fw-600">
                                APR
                              </span>
                              23
                            </h4>
                          </div>
                          <h4 className="fw-700 text-grey-900 font-xssss mt-2">
                            Aniversary Event
                            <span className="d-block font-xsssss fw-500 mt-1 lh-4 text-grey-500">
                              41 madison ave, floor 24 new work, NY 10010
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-xxl-9 col-lg-8">
                      <div className="card w-100 shadow-xss rounded-xxl border-0 ps-4 pt-4 pe-4 pb-3 mb-3 mt-3">
                        <div className="card-body p-0">
                          <a
                            href="#"
                            className=" font-xssss fw-600 text-grey-500 card-body p-0 d-flex align-items-center"
                          >
                            <i className="btn-round-sm font-xs text-primary feather-edit-3 me-2 bg-greylight"></i>
                            Create Post
                          </a>
                        </div>
                        <div className="card-body p-0 mt-3 position-relative">
                          <figure className="avatar position-absolute ms-2 mt-1 top-5">
                            <img
                              src="/assets/images/user-8.png"
                              alt="image"
                              className="shadow-sm rounded-circle w30"
                            />
                          </figure>
                          <textarea
                            name="message"
                            className="h100 bor-0 w-100 rounded-xxl p-2 ps-5 font-xssss text-grey-500 fw-500 border-light-md theme-dark-bg"
                            cols="30"
                            rows="10"
                            placeholder="What's on your mind?"
                          ></textarea>
                        </div>
                        <div className="card-body d-flex p-0 mt-0">
                          <a
                            href="#"
                            className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
                          >
                            <i className="font-md text-danger feather-video me-2"></i>
                            <span className="d-none-xs">Live Video</span>
                          </a>
                          <a
                            href="#"
                            className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
                          >
                            <i className="font-md text-success feather-image me-2"></i>
                            <span className="d-none-xs">Photo/Video</span>
                          </a>
                          <a
                            href="#"
                            className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
                          >
                            <i className="font-md text-warning feather-camera me-2"></i>
                            <span className="d-none-xs">Feeling/Activity</span>
                          </a>
                          <a
                            href="#"
                            className="ms-auto"
                            id="dropdownMenu4"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
                          </a>
                          <div
                            className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
                            aria-labelledby="dropdownMenu4"
                          >
                            <div className="card-body p-0 d-flex">
                              <i className="feather-bookmark text-grey-500 me-3 font-lg"></i>
                              <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                Save Link
                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                  Add this to your saved items
                                </span>
                              </h4>
                            </div>
                            <div className="card-body p-0 d-flex mt-2">
                              <i className="feather-alert-circle text-grey-500 me-3 font-lg"></i>
                              <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                Hide Post
                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                  Save to your saved items
                                </span>
                              </h4>
                            </div>
                            <div className="card-body p-0 d-flex mt-2">
                              <i className="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
                              <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                Hide all from Group
                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                  Save to your saved items
                                </span>
                              </h4>
                            </div>
                            <div className="card-body p-0 d-flex mt-2">
                              <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                              <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">
                                Unfollow Group
                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                  Save to your saved items
                                </span>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
                        <div className="card-body p-0 d-flex">
                          <figure className="avatar me-3">
                            <img
                              src="/assets/images/user-7.png"
                              alt="image"
                              className="shadow-sm rounded-circle w45"
                            />
                          </figure>
                          <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                            Anthony Daugloi
                            <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                              3 hour ago
                            </span>
                          </h4>
                          <a
                            href="#"
                            className="ms-auto"
                            id="dropdownMenu21"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
                          </a>
                          <div
                            className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
                            aria-labelledby="dropdownMenu21"
                          >
                            <div className="card-body p-0 d-flex">
                              <i className="feather-bookmark text-grey-500 me-3 font-lg"></i>
                              <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                Save Link
                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                  Add this to your saved items
                                </span>
                              </h4>
                            </div>
                            <div className="card-body p-0 d-flex mt-2">
                              <i className="feather-alert-circle text-grey-500 me-3 font-lg"></i>
                              <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                Hide Post
                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                  Save to your saved items
                                </span>
                              </h4>
                            </div>
                            <div className="card-body p-0 d-flex mt-2">
                              <i className="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
                              <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                Hide all from Group
                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                  Save to your saved items
                                </span>
                              </h4>
                            </div>
                            <div className="card-body p-0 d-flex mt-2">
                              <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                              <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">
                                Unfollow Group
                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                  Save to your saved items
                                </span>
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="card-body p-0 me-lg-5">
                          <p className="fw-500 text-grey-500 lh-26 font-xssss w-100">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Morbi nulla dolor, ornare at commodo non,
                            feugiat non nisi. Phasellus faucibus mollis
                            pharetra. Proin blandit ac massa sed rhoncus
                            <a href="#" className="fw-600 text-primary ms-2">
                              See more
                            </a>
                          </p>
                        </div>
                        <div className="card-body d-block p-0">
                          <div className="row ps-2 pe-2">
                            <div className="col-xs-4 col-sm-4 p-1">
                              <a
                                href="/assets/images/t-10.jpg"
                                data-lightbox="roadtrip"
                              >
                                <img
                                  src="/assets/images/t-10.jpg"
                                  className="rounded-3 w-100"
                                  alt="image"
                                />
                              </a>
                            </div>
                            <div className="col-xs-4 col-sm-4 p-1">
                              <a
                                href="/assets/images/t-11.jpg"
                                data-lightbox="roadtrip"
                              >
                                <img
                                  src="/assets/images/t-11.jpg"
                                  className="rounded-3 w-100"
                                  alt="image"
                                />
                              </a>
                            </div>
                            <div className="col-xs-4 col-sm-4 p-1">
                              <a
                                href="/assets/images/t-12.jpg"
                                data-lightbox="roadtrip"
                                className="position-relative d-block"
                              >
                                <img
                                  src="/assets/images/t-12.jpg"
                                  className="rounded-3 w-100"
                                  alt="image"
                                />
                                <span className="img-count font-sm text-white ls-3 fw-600">
                                  <b>+2</b>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body d-flex p-0 mt-3">
                          <a
                            href="#"
                            className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-3"
                          >
                            <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i>
                            <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>
                            2.8K Like
                          </a>
                          <a
                            href="#"
                            className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                          >
                            <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>
                            22 Comment
                          </a>
                          <a
                            href="#"
                            className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                          >
                            <i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg"></i>
                            <span className="d-none-xs">Share</span>
                          </a>
                        </div>
                      </div>

                      <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-0">
                        <div className="card-body p-0 d-flex">
                          <figure className="avatar me-3">
                            <img
                              src="/assets/images/user-8.png"
                              alt="image"
                              className="shadow-sm rounded-circle w45"
                            />
                          </figure>
                          <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                            Anthony Daugloi
                            <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                              2 hour ago
                            </span>
                          </h4>
                          <a
                            href="#"
                            className="ms-auto"
                            id="dropdownMenu2"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
                          </a>
                          <div
                            className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
                            aria-labelledby="dropdownMenu2"
                          >
                            <div className="card-body p-0 d-flex">
                              <i className="feather-bookmark text-grey-500 me-3 font-lg"></i>
                              <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                Save Link
                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                  Add this to your saved items
                                </span>
                              </h4>
                            </div>
                            <div className="card-body p-0 d-flex mt-2">
                              <i className="feather-alert-circle text-grey-500 me-3 font-lg"></i>
                              <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                Hide Post
                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                  Save to your saved items
                                </span>
                              </h4>
                            </div>
                            <div className="card-body p-0 d-flex mt-2">
                              <i className="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
                              <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                Hide all from Group
                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                  Save to your saved items
                                </span>
                              </h4>
                            </div>
                            <div className="card-body p-0 d-flex mt-2">
                              <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                              <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">
                                Unfollow Group
                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                  Save to your saved items
                                </span>
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="card-body p-0 me-lg-5">
                          <p className="fw-500 text-grey-500 lh-26 font-xssss w-100">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Morbi nulla dolor, ornare at commodo non,
                            feugiat non nisi. Phasellus faucibus mollis
                            pharetra. Proin blandit ac massa sed rhoncus
                            <a href="#" className="fw-600 text-primary ms-2">
                              See more
                            </a>
                          </p>
                        </div>
                        <div className="card-body d-flex p-0">
                          <a
                            href="#"
                            className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-3"
                          >
                            <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i>
                            <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>
                            2.8K Like
                          </a>
                          <a
                            href="#"
                            className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                          >
                            <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>
                            22 Comment
                          </a>
                          <a
                            href="#"
                            className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                          >
                            <i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg"></i>
                            <span className="d-none-xs">Share</span>
                          </a>
                        </div>
                      </div>

                      <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3 mt-3">
                        <div className="card-body p-0 d-flex">
                          <figure className="avatar me-3">
                            <img
                              src="/assets/images/user-8.png"
                              alt="image"
                              className="shadow-sm rounded-circle w45"
                            />
                          </figure>
                          <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                            Anthony Daugloi
                            <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                              2 hour ago
                            </span>
                          </h4>
                          <a
                            href="#"
                            className="ms-auto"
                            id="dropdownMenu5"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
                          </a>
                          <div
                            className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
                            aria-labelledby="dropdownMenu5"
                          >
                            <div className="card-body p-0 d-flex">
                              <i className="feather-bookmark text-grey-500 me-3 font-lg"></i>
                              <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                Save Link
                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                  Add this to your saved items
                                </span>
                              </h4>
                            </div>
                            <div className="card-body p-0 d-flex mt-2">
                              <i className="feather-alert-circle text-grey-500 me-3 font-lg"></i>
                              <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                Hide Post
                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                  Save to your saved items
                                </span>
                              </h4>
                            </div>
                            <div className="card-body p-0 d-flex mt-2">
                              <i className="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
                              <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                Hide all from Group
                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                  Save to your saved items
                                </span>
                              </h4>
                            </div>
                            <div className="card-body p-0 d-flex mt-2">
                              <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                              <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">
                                Unfollow Group
                                <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                  Save to your saved items
                                </span>
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="card-body p-0 mb-3 rounded-3 overflow-hidden">
                          <a href="#" className="video-btn">
                            <video autoPlay loop className="float-right w-100">
                              <source
                                src="/assets/images/v-2.mp4"
                                type="video/mp4"
                              />
                            </video>
                          </a>
                        </div>
                        <div className="card-body p-0 me-lg-5">
                          <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Morbi nulla dolor, ornare at commodo non,
                            feugiat non nisi. Phasellus faucibus mollis
                            pharetra. Proin blandit ac massa sed rhoncus
                            <a href="#" className="fw-600 text-primary ms-2">
                              See more
                            </a>
                          </p>
                        </div>
                        <div className="card-body d-flex p-0">
                          <a
                            href="#"
                            className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-3"
                          >
                            <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i>
                            <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>
                            2.8K Like
                          </a>
                          <a
                            href="#"
                            className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                          >
                            <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>
                            22 Comment
                          </a>
                          <a
                            href="#"
                            className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                          >
                            <i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg"></i>
                            <span className="d-none-xs">Share</span>
                          </a>
                        </div>
                      </div>

                      <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-4">
                        <div className="card-body p-0 d-flex">
                          <figure className="avatar me-3">
                            <img
                              src="/assets/images/user-8.png"
                              alt="image"
                              className="shadow-sm rounded-circle w45"
                            />
                          </figure>
                          <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                            Anthony Daugloi
                            <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                              2 hour ago
                            </span>
                          </h4>
                          <a href="#" className="ms-auto">
                            <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
                          </a>
                        </div>

                        <div className="card-body p-0 me-lg-5">
                          <p className="fw-500 text-grey-500 lh-26 font-xssss w-100">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Morbi nulla dolor, ornare at commodo non,
                            feugiat non nisi. Phasellus faucibus mollis
                            pharetra. Proin blandit ac massa sed rhoncus
                            <a href="#" className="fw-600 text-primary ms-2">
                              See more
                            </a>
                          </p>
                        </div>
                        <div className="card-body d-block p-0 mb-3">
                          <div className="row ps-2 pe-2">
                            <div className="col-xs-6 col-sm-6 p-1">
                              <a
                                href="/assets/images/t-21.jpg"
                                data-lightbox="roadtri"
                              >
                                <img
                                  src="/assets/images/t-21.jpg"
                                  className="rounded-3 w-100"
                                  alt="image"
                                />
                              </a>
                            </div>
                            <div className="col-xs-6 col-sm-6 p-1">
                              <a
                                href="/assets/images/t-22.jpg"
                                data-lightbox="roadtri"
                              >
                                <img
                                  src="/assets/images/t-22.jpg"
                                  className="rounded-3 w-100"
                                  alt="image"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="row ps-2 pe-2">
                            <div className="col-xs-4 col-sm-4 p-1">
                              <a
                                href="/assets/images/t-23.jpg"
                                data-lightbox="roadtri"
                              >
                                <img
                                  src="/assets/images/t-23.jpg"
                                  className="rounded-3 w-100"
                                  alt="image"
                                />
                              </a>
                            </div>
                            <div className="col-xs-4 col-sm-4 p-1">
                              <a
                                href="/assets/images/t-24.jpg"
                                data-lightbox="roadtri"
                              >
                                <img
                                  src="/assets/images/t-24.jpg"
                                  className="rounded-3 w-100"
                                  alt="image"
                                />
                              </a>
                            </div>
                            <div className="col-xs-4 col-sm-4 p-1">
                              <a
                                href="/assets/images/t-25.jpg"
                                data-lightbox="roadtri"
                                className="position-relative d-block"
                              >
                                <img
                                  src="/assets/images/t-25.jpg"
                                  className="rounded-3 w-100"
                                  alt="image"
                                />
                                <span className="img-count font-sm text-white ls-3 fw-600">
                                  <b>+2</b>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body d-flex p-0">
                          <a
                            href="#"
                            className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-3"
                          >
                            <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i>
                            <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>
                            2.8K Like
                          </a>
                          <a
                            href="#"
                            className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                          >
                            <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>
                            22 Comment
                          </a>
                          <a
                            href="#"
                            className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                          >
                            <i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg"></i>
                            <span className="d-none-xs">Share</span>
                          </a>
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
    </div>
  );
}

export default UserProfile;
