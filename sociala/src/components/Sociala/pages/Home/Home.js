import React, { useEffect, useState } from 'react';

import {useDispatch,useSelector} from "react-redux";
import { getUser } from '../../../../Redux/UserReducer';
import { getAllUser } from '../../../../Redux/AllUserReducer';

import {addMsg, getMsg} from "../../../../services/PostService/PostService";
import { getUserProfile } from '../../../../services/profileService/profileService';
import { getUsers } from "../../../../services/userService/userService";

import FriendRequest from "../../shared/right/FriendRequest/FriendRequest";
import Friends from "../../shared/right/Friends/Friends";
import SuggestedGroup from "../../shared/right/SuggestedGroup/SuggestedGroup";
import SuggestedPeople from "../../shared/right/SuggestedPeople/SuggestedPeople";
import Event from "../../shared/right/Event/Event";

import Header from "../../shared/Header/Header";
import LeftSection from "../../shared/left/LeftSection/LeftSection";
import Contact from "../../shared/very_right/Contact/Contact";
import Group from "../../shared/very_right/Group/Group";
import Pages from "../../shared/very_right/Pages/Pages";
import FooterBar from "../../shared/FooterBar/FooterBar";


function Home() {
  let dispatch = useDispatch();
  let state = useSelector(state=>state.UserReducer)
  let state2 = useSelector(state=>state.AllUserReducer)
  let [navLink, setNavLink] = useState(false);

  useEffect(() => {
    getMsg().then(result=> {
      setAllPost(result.data)
    })
  },[]);
  let getData = () => {
    let token = localStorage.getItem("token")
    getUserProfile(token).then(result=> {
      dispatch(getUser(result.data))
    })
  }

  let getAllData = () => {
    getUsers().then((result) => {
      dispatch(getAllUser(result.data));
    });
  }
  useEffect(() => {
if(state.length == 0) {
getData();
}
if(state2.length == 0) {
  getAllData();
}
  },[]);
  let [allPost, setAllPost] = useState([]);
  let [msg, setMsg] = useState({
    message: "",
    comments: [],
  });
  let setData = (e, property) => {
    setMsg((previousData) => {
      return { ...previousData, [property]: e.target.value };

    });
  };

  let sendData = () => {
    addMsg(msg).then((result) => {
    
    });
  };
  let demo = ()=> {
    setNavLink(true);
      }

  return (
    <div onLoad={demo}>
      <div className="color-theme-blue mont-font">
        <div className="main-wrapper">
          {/* <!-- navigation top--> */}
          <Header navLink={navLink} />
          {/* <!-- navigation top --> */}

          {/* <!-- navigation left --> */}

          <LeftSection />

          {/* <!-- navigation left --> */}
          {/* <!-- main content --> */}
          <div className="main-content right-chat-active">
            <div className="middle-sidebar-bottom">
              <div className="middle-sidebar-left">
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
                <div className="row feed-body">
                  <div className="col-xl-8 col-xxl-9 col-lg-8">
                    <div className="card w-100 shadow-none bg-transparent bg-transparent-card border-0 p-0 mb-0">
                      <div
                        className="owl-carousel category-card owl-theme overflow-hidden nav-none"
                        style={{ display: "flex" }}
                      >
                        <div className="item px-1">
                          <div
                            data-bs-toggle="modal"
                            data-bs-target="#Modalstory"
                            className="card w125 h200 d-block border-0 shadow-none rounded-xxxl bg-dark overflow-hidden mb-3 mt-3"
                          >
                            <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                              <a href="#">
                                <span className="btn-round-lg bg-white">
                                  <i className="feather-plus font-lg"></i>
                                </span>
                                <div className="clearfix"></div>
                                <h4 className="fw-700 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">
                                  Add Story
                                </h4>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="item  px-1">
                          <div
                            data-bs-toggle="modal"
                            data-bs-target="#Modalstory"
                            className="card w125 h200 d-block border-0 shadow-xss rounded-xxxl bg-gradiant-bottom overflow-hidden cursor-pointer mb-3 mt-3"
                            style={{
                              backgroundImage: "url(assets/images/s-1.jpg)",
                            }}
                          >
                            {/* style={{backgroundImage: 'url(assets/images/s-1.jpg)'}} */}
                            <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                              <a href="#">
                                <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                                  <img
                                    src="/assets/images/user-11.png"
                                    alt="image"
                                    className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                  />
                                </figure>
                                <div className="clearfix"></div>
                                <h4 className="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">
                                  Victor Exrixon
                                </h4>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="item  px-1">
                          <div
                            data-bs-toggle="modal"
                            data-bs-target="#Modalstory"
                            className="card w125 h200 d-block border-0 shadow-xss rounded-xxxl bg-gradiant-bottom overflow-hidden cursor-pointer mb-3 mt-3"
                            style={{
                              backgroundImage: "url(assets/images/s-2.jpg)",
                            }}
                          >
                            {/* style={{backgroundImage: 'url(assets/images/s-2.jpg)'}} */}
                            <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                              <a href="#">
                                <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                                  <img
                                    src="/assets/images/user-12.png"
                                    alt="image"
                                    className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                  />
                                </figure>
                                <div className="clearfix"></div>
                                <h4 className="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">
                                  Surfiya Zakir
                                </h4>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="item  px-1">
                          <div
                            data-bs-toggle="modal"
                            data-bs-target="#Modalstory"
                            className="card w125 h200 d-block border-0 shadow-xss rounded-xxxl bg-gradiant-bottom overflow-hidden cursor-pointer mb-3 mt-3"
                          >
                            <video autoPlay loop className="float-right w-100">
                              <source
                                src="/assets/images/s-4.mp4"
                                type="video/mp4"
                              />
                            </video>
                            <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                              <a href="#">
                                <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                                  <img
                                    src="/assets/images/user-9.png"
                                    alt="image"
                                    className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                  />
                                </figure>
                                <div className="clearfix"></div>
                                <h4 className="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">
                                  Goria Coast
                                </h4>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="item  px-1">
                          <div
                            data-bs-toggle="modal"
                            data-bs-target="#Modalstries"
                            className="card w125 h200 d-block border-0 shadow-xss rounded-xxxl bg-gradiant-bottom overflow-hidden cursor-pointer mb-3 mt-3 me-1"
                          >
                            <video autoPlay loop className="float-right w-100">
                              <source
                                src="./assets/images/s-3.mp4"
                                type="video/mp4"
                              />
                            </video>
                            <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                              <a href="#">
                                <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                                  <img
                                    src="/assets/images/user-4.png"
                                    alt="image"
                                    className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                  />
                                </figure>
                                <div className="clearfix"></div>
                                <h4 className="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">
                                  Hurin Seary
                                </h4>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="item  px-1">
                          <div
                            data-bs-toggle="modal"
                            data-bs-target="#Modalstory"
                            className="card w125 h200 d-block border-0 shadow-xss rounded-xxxl bg-gradiant-bottom overflow-hidden cursor-pointer mb-3 mt-3"
                            style={{
                              backgroundImage: "url(assets/images/s-5.jpg)",
                            }}
                          >
                            <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                              <a href="#">
                                <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                                  <img
                                    src="/assets/images/user-3.png"
                                    alt="image"
                                    className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                  />
                                </figure>
                                <div className="clearfix"></div>
                                <h4 className="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">
                                  David Goria
                                </h4>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="item  px-1">
                          <div
                            data-bs-toggle="modal"
                            data-bs-target="#Modalstory"
                            className="card w125 h200 d-block border-0 shadow-xss rounded-xxxl bg-gradiant-bottom overflow-hidden cursor-pointer mb-3 mt-3"
                            style={{
                              backgroundImage: "url(assets/images/s-6.jpg)",
                            }}
                          >
                            {/* style={{backgroundImage: 'url(assets/images/s-6.jpg)'}} */}
                            <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                              <a href="#">
                                <figure className="avatar ms-auto me-auto mb-0 position-relative w50 z-index-1">
                                  <img
                                    src="/assets/images/user-2.png"
                                    alt="image"
                                    className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                  />
                                </figure>
                                <div className="clearfix"></div>
                                <h4 className="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">
                                  Seary Victor
                                </h4>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card w-100 shadow-xss rounded-xxl border-0 ps-4 pt-4 pe-4 pb-3 mb-3">
                      <div className="card-body p-0">
                        <div className="row">
                          <div className="col-md-3">
                            <a
                              href="#"
                              className=" font-xssss fw-600 text-grey-500 card-body p-0 d-flex align-items-center"
                            >
                              <i className="btn-round-sm font-xs text-primary feather-edit-3 me-2 bg-greylight"></i>
                              Create Post
                            </a>
                          </div>
                          <div className="col-md-2 offset-md-7">
                          <a href="#" onClick={sendData}>
                              <span className="feather-send btn-round-sm mt-1 text-primary font-md feather-edit-3 position-absolute bg-greylight"></span>
                          </a>
                          </div>
                        </div>
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
                          onChange={(e) => setData(e, "message")}
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
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-start p-4 rounded-xxl border-0 shadow-lg"
                          aria-labelledby="dropdownMenu4"
                        >
                          <div className="card-body p-0 d-flex">
                            <i className="feather-bookmark text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4 cursor">
                              Save Link
                              <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                Add this to your saved items
                              </span>
                            </h4>
                          </div>
                          <div className="card-body p-0 d-flex mt-2">
                            <i className="feather-alert-circle text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4 cursor">
                              Hide Post
                              <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500"></span>
                            </h4>
                          </div>
                          <div className="card-body p-0 d-flex mt-2">
                            <i className="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4 cursor">
                              Hide all from Group
                              <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                Save to your saved items
                              </span>
                            </h4>
                          </div>
                          <div className="card-body p-0 d-flex mt-2">
                            <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4 cursor">
                              Unfollow
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
                          Surfiya Zakir
                          <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                            3 hour ago
                          </span>
                        </h4>
                        <a
                          href="#"
                          className="ms-auto"
                          id="dropdownMenu2"
                          data-bs-toggle="dropdown"
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
                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4 cursor">
                              Save Link
                              <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                Add this to your saved items
                              </span>
                            </h4>
                          </div>
                          <div className="card-body p-0 d-flex mt-2">
                            <i className="feather-alert-circle text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4 cursor">
                              Hide Post
                              <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                Save to your saved items
                              </span>
                            </h4>
                          </div>
                          <div className="card-body p-0 d-flex mt-2">
                            <i className="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4 cursor">
                              Hide all from Group
                              <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                Save to your saved items
                              </span>
                            </h4>
                          </div>
                          <div className="card-body p-0 d-flex mt-2">
                            <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4 cursor">
                              Unfollow
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
                          feugiat non nisi. Phasellus faucibus mollis pharetra.
                          Proin blandit ac massa sed rhoncus
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
                          className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
                        >
                          <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i>
                          <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>
                          2.8K Like
                        </a>
                        <div className="emoji-wrap">
                          <ul className="emojis list-inline mb-0">
                            <li className="emoji list-inline-item">
                              <i className="em em---1"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-angry"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-anguished"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-astonished"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-blush"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-clap"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-cry"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-full_moon_with_face"></i>
                            </li>
                          </ul>
                        </div>
                        <a
                          href="#"
                          className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                        >
                          <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>
                          <span className="d-none-xss">22 Comment</span>
                        </a>
                        <a
                          href="#"
                          id="dropdownMenu21"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                        >
                          <i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg"></i>
                          <span className="d-none-xs">Share</span>
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
                          aria-labelledby="dropdownMenu21"
                        >
                          <h4 className="fw-700 font-xss text-grey-900 d-flex align-items-center">
                            Share
                            <i className="feather-x ms-auto font-xssss btn-round-xs bg-greylight text-grey-900 me-2"></i>
                          </h4>
                          <div className="card-body p-0 d-flex">
                            <ul className="d-flex align-items-center justify-content-between mt-2">
                              <li className="me-1">
                                <a
                                  href="#"
                                  className="btn-round-lg bg-facebook"
                                >
                                  <i className="font-xs ti-facebook text-white"></i>
                                </a>
                              </li>
                              <li className="me-1">
                                <a href="#" className="btn-round-lg bg-twiiter">
                                  <i className="font-xs ti-twitter-alt text-white"></i>
                                </a>
                              </li>
                              <li className="me-1">
                                <a
                                  href="#"
                                  className="btn-round-lg bg-linkedin"
                                >
                                  <i className="font-xs ti-linkedin text-white"></i>
                                </a>
                              </li>
                              <li className="me-1">
                                <a
                                  href="#"
                                  className="btn-round-lg bg-instagram"
                                >
                                  <i className="font-xs ti-instagram text-white"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="btn-round-lg bg-pinterest"
                                >
                                  <i className="font-xs ti-pinterest text-white"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="card-body p-0 d-flex">
                            <ul className="d-flex align-items-center justify-content-between mt-2">
                              <li className="me-1">
                                <a href="#" className="btn-round-lg bg-tumblr">
                                  <i className="font-xs ti-tumblr text-white"></i>
                                </a>
                              </li>
                              <li className="me-1">
                                <a href="#" className="btn-round-lg bg-youtube">
                                  <i className="font-xs ti-youtube text-white"></i>
                                </a>
                              </li>
                              <li className="me-1">
                                <a href="#" className="btn-round-lg bg-flicker">
                                  <i className="font-xs ti-flickr text-white"></i>
                                </a>
                              </li>
                              <li className="me-1">
                                <a href="#" className="btn-round-lg bg-black">
                                  <i className="font-xs ti-vimeo-alt text-white"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="btn-round-lg bg-whatsup">
                                  <i className="font-xs feather-phone text-white"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h4 className="fw-700 font-xssss mt-4 text-grey-500 d-flex align-items-center mb-3">
                            Copy Link
                          </h4>
                          <i className="feather-copy position-absolute right-35 mt-3 font-xs text-grey-500"></i>
                          <input
                            type="text"
                            defaultValue="https://socia.be/1rGxjoJKVF0"
                            className="bg-grey text-grey-500 font-xssss border-0 lh-32 p-2 font-xssss fw-600 rounded-3 w-100 theme-dark-bg"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-0">
                      <div className="card-body p-0 d-flex">
                        <figure className="avatar me-3 m-0">
                          <img
                            src="/assets/images/user-8.png"
                            alt="image"
                            className="shadow-sm rounded-circle w45"
                          />
                        </figure>
                        <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                          Goria Coast
                          <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                            2 hour ago
                          </span>
                        </h4>
                        <a
                          href="#"
                          className="ms-auto"
                          id="dropdownMenu6"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
                          aria-labelledby="dropdownMenu6"
                        >
                          <div className="card-body p-0 d-flex">
                            <i className="feather-bookmark text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4 cursor">
                              Save Link
                              <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                Add this to your saved items
                              </span>
                            </h4>
                          </div>
                          <div className="card-body p-0 d-flex mt-2">
                            <i className="feather-alert-circle text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4 cursor">
                              Hide Post
                              <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                Save to your saved items
                              </span>
                            </h4>
                          </div>
                          <div className="card-body p-0 d-flex mt-2">
                            <i className="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4 cursor">
                              Hide all from Group
                              <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                Save to your saved items
                              </span>
                            </h4>
                          </div>
                          <div className="card-body p-0 d-flex mt-2">
                            <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4 cursor">
                              Unfollow
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
                          feugiat non nisi. Phasellus faucibus mollis pharetra.
                          Proin blandit ac massa sed rhoncus
                          <a href="#" className="fw-600 text-primary ms-2">
                            See more
                          </a>
                        </p>
                      </div>
                      <div className="card-body d-flex p-0">
                        <a
                          href="#"
                          className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
                        >
                          <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i>
                          <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>
                          2.8K Like
                        </a>
                        <div className="emoji-wrap">
                          <ul className="emojis list-inline mb-0">
                            <li className="emoji list-inline-item">
                              <i className="em em---1"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-angry"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-anguished"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-astonished"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-blush"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-clap"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-cry"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-full_moon_with_face"></i>
                            </li>
                          </ul>
                        </div>
                        <a
                          href="#"
                          className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                        >
                          <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>
                          <span className="d-none-xss">22 Comment</span>
                        </a>
                        <a
                          href="#"
                          id="dropdownMenu31"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                        >
                          <i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg"></i>
                          <span className="d-none-xs">Share</span>
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
                          aria-labelledby="dropdownMenu31"
                        >
                          <h4 className="fw-700 font-xss text-grey-900 d-flex align-items-center">
                            Share
                            <i className="feather-x ms-auto font-xssss btn-round-xs bg-greylight text-grey-900 me-2"></i>
                          </h4>
                          <div className="card-body p-0 d-flex">
                            <ul className="d-flex align-items-center justify-content-between mt-2">
                              <li className="me-1">
                                <a
                                  href="#"
                                  className="btn-round-lg bg-facebook"
                                >
                                  <i className="font-xs ti-facebook text-white"></i>
                                </a>
                              </li>
                              <li className="me-1">
                                <a href="#" className="btn-round-lg bg-twiiter">
                                  <i className="font-xs ti-twitter-alt text-white"></i>
                                </a>
                              </li>
                              <li className="me-1">
                                <a
                                  href="#"
                                  className="btn-round-lg bg-linkedin"
                                >
                                  <i className="font-xs ti-linkedin text-white"></i>
                                </a>
                              </li>
                              <li className="me-1">
                                <a
                                  href="#"
                                  className="btn-round-lg bg-instagram"
                                >
                                  <i className="font-xs ti-instagram text-white"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="btn-round-lg bg-pinterest"
                                >
                                  <i className="font-xs ti-pinterest text-white"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="card-body p-0 d-flex">
                            <ul className="d-flex align-items-center justify-content-between mt-2">
                              <li className="me-1">
                                <a href="#" className="btn-round-lg bg-tumblr">
                                  <i className="font-xs ti-tumblr text-white"></i>
                                </a>
                              </li>
                              <li className="me-1">
                                <a href="#" className="btn-round-lg bg-youtube">
                                  <i className="font-xs ti-youtube text-white"></i>
                                </a>
                              </li>
                              <li className="me-1">
                                <a href="#" className="btn-round-lg bg-flicker">
                                  <i className="font-xs ti-flickr text-white"></i>
                                </a>
                              </li>
                              <li className="me-1">
                                <a href="#" className="btn-round-lg bg-black">
                                  <i className="font-xs ti-vimeo-alt text-white"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="btn-round-lg bg-whatsup">
                                  <i className="font-xs feather-phone text-white"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h4 className="fw-700 font-xssss mt-4 text-grey-500 d-flex align-items-center mb-3">
                            Copy Link
                          </h4>
                          <i className="feather-copy position-absolute right-35 mt-3 font-xs text-grey-500"></i>
                          <input
                            type="text"
                            defaultValue="https://socia.be/1rGxjoJKVF0"
                            className="bg-grey text-grey-500 font-xssss border-0 lh-32 p-2 font-xssss fw-600 rounded-3 w-100 theme-dark-bg"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="card w-100 shadow-none bg-transparent bg-transparent-card border-0 p-0 mb-0">
                      <div
                        className="owl-carousel category-card owl-theme overflow-hidden nav-none"
                        style={{ display: "flex" }}
                      >
                        <div className="item  px-1">
                          <div className="card w200 d-block border-0 shadow-xss rounded-xxl overflow-hidden mb-3 me-2 mt-3">
                            <div className="card-body position-relative h100 bg-image-cover bg-image-center">
                              {/* style={{backgroundImage: url(assets/images/u-bg.jpg)}} */}
                            </div>
                            <div className="card-body d-block w-100 ps-4 pe-4 pb-4 text-center">
                              <figure className="avatar ms-auto me-auto mb-0 mt--6 position-relative w75 z-index-1">
                                <img
                                  src="/assets/images/user-11.png"
                                  alt="image"
                                  className="float-right p-1 bg-white rounded-circle w-100"
                                />
                              </figure>
                              <div className="clearfix"></div>
                              <h4 className="fw-700 font-xsss mt-2 mb-1">
                                Aliqa Macale
                              </h4>
                              <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-2">
                                support@gmail.com
                              </p>
                              <span className="live-tag mt-2 mb-0 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">
                                LIVE
                              </span>
                              <div className="clearfix mb-2"></div>
                            </div>
                          </div>
                        </div>

                        <div className="item  px-1">
                          <div className="card w200 d-block border-0 shadow-xss rounded-xxl overflow-hidden mb-3 me-2 mt-3">
                            <div className="card-body position-relative h100 bg-image-cover bg-image-center"></div>
                            {/* style={{backgroundImage: 'url(assets/images/s-2.jpg)'}} */}
                            <div className="card-body d-block w-100 ps-4 pe-4 pb-4 text-center">
                              <figure className="avatar ms-auto me-auto mb-0 mt--6 position-relative w75 z-index-1">
                                <img
                                  src="/assets/images/user-2.png"
                                  alt="image"
                                  className="float-right p-1 bg-white rounded-circle w-100"
                                />
                              </figure>
                              <div className="clearfix"></div>
                              <h4 className="fw-700 font-xsss mt-2 mb-1">
                                Seary Victor
                              </h4>
                              <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-2">
                                support@gmail.com
                              </p>
                              <span className="live-tag mt-2 mb-0 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">
                                LIVE
                              </span>
                              <div className="clearfix mb-2"></div>
                            </div>
                          </div>
                        </div>

                        <div className="item  px-1">
                          <div className="card w200 d-block border-0 shadow-xss rounded-xxl overflow-hidden mb-3 me-2 mt-3">
                            <div className="card-body position-relative h100 bg-image-cover bg-image-center">
                              {/* style={{backgroundImage: 'url(assets/images/s-6.jpg)'}} */}
                            </div>
                            <div className="card-body d-block w-100 ps-4 pe-4 pb-4 text-center">
                              <figure className="avatar ms-auto me-auto mb-0 mt--6 position-relative w75 z-index-1">
                                <img
                                  src="/assets/images/user-3.png"
                                  alt="image"
                                  className="float-right p-1 bg-white rounded-circle w-100"
                                />
                              </figure>
                              <div className="clearfix"></div>
                              <h4 className="fw-700 font-xsss mt-2 mb-1">
                                John Steere
                              </h4>
                              <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-2">
                                support@gmail.com
                              </p>
                              <span className="live-tag mt-2 mb-0 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">
                                LIVE
                              </span>
                              <div className="clearfix mb-2"></div>
                            </div>
                          </div>
                        </div>

                        <div className="item  px-1">
                          <div className="card w200 d-block border-0 shadow-xss rounded-xxl overflow-hidden mb-3 me-2 mt-3">
                            <div className="card-body position-relative h100 bg-image-cover bg-image-center">
                              {/* style={{backgroundImage: 'url(assets/images/bb-16.png)'}} */}
                            </div>
                            <div className="card-body d-block w-100 ps-4 pe-4 pb-4 text-center">
                              <figure className="avatar ms-auto me-auto mb-0 mt--6 position-relative w75 z-index-1">
                                <img
                                  src="/assets/images/user-4.png"
                                  alt="image"
                                  className="float-right p-1 bg-white rounded-circle w-100"
                                />
                              </figure>
                              <div className="clearfix"></div>
                              <h4 className="fw-700 font-xsss mt-2 mb-1">
                                Mohannad Zitoun
                              </h4>
                              <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-2">
                                support@gmail.com
                              </p>
                              <span className="live-tag mt-2 mb-0 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">
                                LIVE
                              </span>
                              <div className="clearfix mb-2"></div>
                            </div>
                          </div>
                        </div>

                        <div className="item  px-1">
                          <div className="card w200 d-block border-0 shadow-xss rounded-xxl overflow-hidden mb-3 me-2 mt-3">
                            <div className="card-body position-relative h100 bg-image-cover bg-image-center">
                              {/* style={{backgroundImage: 'url(assets/images/e-4.jpg)'}} */}
                            </div>
                            <div className="card-body d-block w-100 ps-4 pe-4 pb-4 text-center">
                              <figure className="avatar ms-auto me-auto mb-0 mt--6 position-relative w75 z-index-1">
                                <img
                                  src="/assets/images/user-7.png"
                                  alt="image"
                                  className="float-right p-1 bg-white rounded-circle w-100"
                                />
                              </figure>
                              <div className="clearfix"></div>
                              <h4 className="fw-700 font-xsss mt-2 mb-1">
                                Studio Express
                              </h4>
                              <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-2">
                                support@gmail.com
                              </p>
                              <span className="live-tag mt-2 mb-0 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">
                                LIVE
                              </span>
                              <div className="clearfix mb-2"></div>
                            </div>
                          </div>
                        </div>

                        <div className="item  px-1">
                          <div className="card w200 d-block border-0 shadow-xss rounded-xxl overflow-hidden mb-3 me-2 mt-3">
                            <div className="card-body position-relative h100 bg-image-cover bg-image-center">
                              {/* style={{backgroundImage: 'url(assets/images/coming-soon.png)'}} */}
                            </div>
                            <div className="card-body d-block w-100 ps-4 pe-4 pb-4 text-center">
                              <figure className="avatar ms-auto me-auto mb-0 mt--6 position-relative w75 z-index-1">
                                <img
                                  src="/assets/images/user-5.png"
                                  alt="image"
                                  className="float-right p-1 bg-white rounded-circle w-100"
                                />
                              </figure>
                              <div className="clearfix"></div>
                              <h4 className="fw-700 font-xsss mt-2 mb-1">
                                Hendrix Stamp
                              </h4>
                              <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-2">
                                support@gmail.com
                              </p>
                              <span className="live-tag mt-2 mb-0 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">
                                LIVE
                              </span>
                              <div className="clearfix mb-2"></div>
                            </div>
                          </div>
                        </div>

                        <div className="item  px-1">
                          <div className="card w200 d-block border-0 shadow-xss rounded-xxl overflow-hidden mb-3 me-2 mt-3">
                            <div
                              className="card-body position-relative h100 bg-image-cover bg-image-center"
                              style={{
                                backgroundImage: "url(assets/images/bb-9.jpg)",
                              }}
                            >
                              {/* style={{backgroundImage: 'url(assets/images/bb-9.jpg)'}} */}
                            </div>
                            <div className="card-body d-block w-100 ps-4 pe-4 pb-4 text-center">
                              <figure className="avatar ms-auto me-auto mb-0 mt--6 position-relative w75 z-index-1">
                                <img
                                  src="/assets/images/user-6.png"
                                  alt="image"
                                  className="float-right p-1 bg-white rounded-circle w-100"
                                />
                              </figure>
                              <div className="clearfix"></div>
                              <h4 className="fw-700 font-xsss mt-2 mb-1">
                                Mohannad Zitoun
                              </h4>
                              <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-2">
                                support@gmail.com
                              </p>
                              <span className="live-tag mt-2 mb-0 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">
                                LIVE
                              </span>
                              <div className="clearfix mb-2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
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
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-start p-4 rounded-xxl border-0 shadow-lg"
                          aria-labelledby="dropdownMenu5"
                        >
                          <div className="card-body p-0 d-flex">
                            <i className="feather-bookmark text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4  cursor">
                              Save Link
                              <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                Add this to your saved items
                              </span>
                            </h4>
                          </div>
                          <div className="card-body p-0 d-flex mt-2">
                            <i className="feather-alert-circle text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4  cursor">
                              Hide Post
                              <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                Save to your saved items
                              </span>
                            </h4>
                          </div>
                          <div className="card-body p-0 d-flex mt-2">
                            <i className="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4 cursor">
                              Hide all from Group
                              <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                Save to your saved items
                              </span>
                            </h4>
                          </div>
                          <div className="card-body p-0 d-flex mt-2">
                            <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4 cursor">
                              Unfollow
                              <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                Save to your saved items
                              </span>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="card-body p-0 mb-3 rounded-3 overflow-hidden">
                        <a href="default-video.html" className="video-btn">
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
                          feugiat non nisi. Phasellus faucibus mollis pharetra.
                          Proin blandit ac massa sed rhoncus
                          <a href="#" className="fw-600 text-primary ms-2">
                            See more
                          </a>
                        </p>
                      </div>
                      <div className="card-body d-flex p-0">
                        <a
                          href="#"
                          className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
                        >
                          <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i>
                          <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>
                          2.8K Like
                        </a>
                        <div className="emoji-wrap">
                          <ul className="emojis list-inline mb-0">
                            <li className="emoji list-inline-item">
                              <i className="em em---1"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-angry"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-anguished"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-astonished"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-blush"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-clap"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-cry"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-full_moon_with_face"></i>
                            </li>
                          </ul>
                        </div>
                        <a
                          href="#"
                          className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                        >
                          <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>
                          <span className="d-none-xss">22 Comment</span>
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
                        <a href="#" className="ms-auto">
                          <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
                        </a>
                      </div>

                      <div className="card-body p-0 me-lg-5">
                        <p className="fw-500 text-grey-500 lh-26 font-xssss w-100">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Morbi nulla dolor, ornare at commodo non,
                          feugiat non nisi. Phasellus faucibus mollis pharetra.
                          Proin blandit ac massa sed rhoncus
                          <a href="#" className="fw-600 text-primary ms-2">
                            See more
                          </a>
                        </p>
                      </div>
                      <div className="card-body d-block p-0 mb-3">
                        <div className="row ps-2 pe-2">
                          <div className="col-xs-6 col-sm-6 p-1">
                            <a
                              href="/assets/images/t-36.jpg"
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
                              href="/assets/images/t-32.jpg"
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
                              href="/assets/images/t-33.jpg"
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
                              href="/assets/images/t-34.jpg"
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
                              href="/assets/images/t-35.jpg"
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
                          className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
                        >
                          <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i>
                          <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>
                          2.8K Like
                        </a>
                        <div className="emoji-wrap">
                          <ul className="emojis list-inline mb-0">
                            <li className="emoji list-inline-item">
                              <i className="em em---1"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-angry"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-anguished"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-astonished"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-blush"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-clap"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-cry"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-full_moon_with_face"></i>
                            </li>
                          </ul>
                        </div>
                        <a
                          href="#"
                          className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                        >
                          <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>
                          <span className="d-none-xss">22 Comment</span>
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
                    {allPost.map((p, i) => {
                      return (
                        <div
                          className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-0"
                          key={i}
                        >
                          <div className="card-body p-0 d-flex">
                            <figure className="avatar me-3">
                              <img
                                src="/assets/images/user-8.png"
                                alt="image"
                                className="shadow-sm rounded-circle w45"
                              />
                            </figure>
                            <h3 className="fw-700 text-grey-900 font-xssss mt-1">
Aliasger
                              <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                                2 hour ago
                              </span>
                            </h3>
                            <a href="#" className="ms-auto" id="dropdownMenu6"
                          data-bs-toggle="dropdown"
                          aria-expanded="false">
                              <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
                            </a>
                            <div
                          className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
                          aria-labelledby="dropdownMenu2"
                        >
                          <div className="card-body p-0 d-flex">
                            <i className="feather-bookmark text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4 cursor">
                              Save Link
                              <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                Add this to your saved items
                              </span>
                            </h4>
                          </div>
                          <div className="card-body p-0 d-flex mt-2">
                            <i className="feather-alert-circle text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4 cursor">
                              Hide Post
                              <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                Save to your saved items
                              </span>
                            </h4>
                          </div>
                          <div className="card-body p-0 d-flex mt-2">
                            <i className="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4 cursor">
                              Hide all from Group
                              <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                Save to your saved items
                              </span>
                            </h4>
                          </div>
                          <div className="card-body p-0 d-flex mt-2">
                            <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                            <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4 cursor">
                              Unfollow
                              <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                Save to your saved items
                              </span>
                            </h4>
                          </div>
                        </div>
                          </div>

                          <div className="card-body p-0 me-lg-5"></div>
                          <div className="card-body d-block p-0 mb-3">
                            <div className="row ps-2 pe-2">
                              <div className="col-xs-6 col-sm-6 p-1">
                                <h4 className="fw-500 text-grey-500 lh-26 font-xss w-100">
                                  {p.message}
                                </h4>
                              </div>
                            </div>
                          </div>

                          <div className="card-body d-flex p-0">
                            <a
                              href="#"
                              className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
                            >
                              <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i>
                              <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>
                              2.8K Like
                            </a>
                            <div className="emoji-wrap">
                              <ul className="emojis list-inline mb-0">
                                <li className="emoji list-inline-item">
                                  <i className="em em---1"></i>
                                </li>
                                <li className="emoji list-inline-item">
                                  <i className="em em-angry"></i>
                                </li>
                                <li className="emoji list-inline-item">
                                  <i className="em em-anguished"></i>
                                </li>
                                <li className="emoji list-inline-item">
                                  <i className="em em-astonished"></i>
                                </li>
                                <li className="emoji list-inline-item">
                                  <i className="em em-blush"></i>
                                </li>
                                <li className="emoji list-inline-item">
                                  <i className="em em-clap"></i>
                                </li>
                                <li className="emoji list-inline-item">
                                  <i className="em em-cry"></i>
                                </li>
                                <li className="emoji list-inline-item">
                                  <i className="em em-full_moon_with_face"></i>
                                </li>
                              </ul>
                            </div>
                            <a
                              href="#"
                              className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                            >
                              <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>
                              <span className="d-none-xss">22 Comment</span>
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
                      );
                    })}

                    <div className="card w-100 shadow-none bg-transparent bg-transparent-card border-0 p-0 mb-0">
                      <div
                        className="owl-carousel category-card owl-theme overflow-hidden nav-none"
                        style={{ display: "flex" }}
                      >
                        <div className="item  px-1">
                          <div className="card w150 d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 me-2 mt-3">
                            <div className="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                              <figure className="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1">
                                <img
                                  src="/assets/images/user-11.png"
                                  alt="image"
                                  className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                />
                              </figure>
                              <div className="clearfix"></div>
                              <h4 className="fw-700 font-xssss mt-3 mb-1">
                                Richard Bowers
                              </h4>
                              <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">
                                @macale343
                              </p>
                              <a
                                href="#"
                                className="text-center p-2 lh-20 w100 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white"
                              >
                                FOLLOW
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="item  px-1">
                          <div className="card w150 d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 me-2 mt-3">
                            <div className="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                              <figure className="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1">
                                <img
                                  src="/assets/images/user-9.png"
                                  alt="image"
                                  className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                />
                              </figure>
                              <div className="clearfix"></div>
                              <h4 className="fw-700 font-xssss mt-3 mb-1">
                                David Goria
                              </h4>
                              <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">
                                @macale343
                              </p>
                              <a
                                href="#"
                                className="text-center p-2 lh-20 w100 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white"
                              >
                                FOLLOW
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="item  px-1">
                          <div className="card w150 d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 me-2 mt-3">
                            <div className="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                              <figure className="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1">
                                <img
                                  src="/assets/images/user-12.png"
                                  alt="image"
                                  className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                />
                              </figure>
                              <div className="clearfix"></div>
                              <h4 className="fw-700 font-xssss mt-3 mb-1">
                                Vincent Parks
                              </h4>
                              <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">
                                @macale343
                              </p>
                              <a
                                href="#"
                                className="text-center p-2 lh-20 w100 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white"
                              >
                                FOLLOW
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="item  px-1">
                          <div className="card w150 d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 me-2 mt-3">
                            <div className="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                              <figure className="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1">
                                <img
                                  src="/assets/images/user-8.png"
                                  alt="image"
                                  className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                />
                              </figure>
                              <div className="clearfix"></div>
                              <h4 className="fw-700 font-xssss mt-3 mb-1">
                                Studio Express
                              </h4>
                              <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">
                                @macale343
                              </p>
                              <a
                                href="#"
                                className="text-center p-2 lh-20 w100 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white"
                              >
                                FOLLOW
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="item  px-1">
                          <div className="card w150 d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 me-2 mt-3">
                            <div className="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                              <figure className="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1">
                                <img
                                  src="/assets/images/user-7.png"
                                  alt="image"
                                  className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                                />
                              </figure>
                              <div className="clearfix"></div>
                              <h4 className="fw-700 font-xssss mt-3 mb-1">
                                Aliqa Macale
                              </h4>
                              <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">
                                @macale343
                              </p>
                              <a
                                href="#"
                                className="text-center p-2 lh-20 w100 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white"
                              >
                                FOLLOW
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
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
                      <div className="card-body p-0 mb-3 rounded-3 overflow-hidden">
                        <a href="default-video.html" className="video-btn">
                          <video autoPlay loop className="float-right w-100">
                            <source
                              src="/assets/images/v-1.mp4"
                              type="video/mp4"
                            />
                          </video>
                        </a>
                      </div>
                      <div className="card-body p-0 me-lg-5">
                        <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Morbi nulla dolor, ornare at commodo non,
                          feugiat non nisi. Phasellus faucibus mollis pharetra.
                          Proin blandit ac massa sed rhoncus
                          <a href="#" className="fw-600 text-primary ms-2">
                            See more
                          </a>
                        </p>
                      </div>
                      <div className="card-body d-flex p-0">
                        <a
                          href="#"
                          className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
                        >
                          <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i>
                          <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>
                          2.8K Like
                        </a>
                        <div className="emoji-wrap">
                          <ul className="emojis list-inline mb-0">
                            <li className="emoji list-inline-item">
                              <i className="em em---1"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-angry"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-anguished"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-astonished"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-blush"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-clap"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-cry"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-full_moon_with_face"></i>
                            </li>
                          </ul>
                        </div>
                        <a
                          href="#"
                          className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                        >
                          <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>
                          <span className="d-none-xss">22 Comment</span>
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
                        <a href="#" className="ms-auto">
                          <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
                        </a>
                      </div>
                      <div className="card-body p-0 me-lg-5">
                        <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Morbi nulla dolor, ornare at commodo non,
                          feugiat non nisi. Phasellus faucibus mollis pharetra.
                          Proin blandit ac massa sed rhoncus
                          <a href="#" className="fw-600 text-primary ms-2">
                            See more
                          </a>
                        </p>
                      </div>
                      <div className="card-body d-block p-0 mb-3">
                        <div className="row ps-2 pe-2">
                          <div className="col-sm-12 p-1">
                            <a
                              href="/assets/images/t-30.jpg"
                              data-lightbox="roadtr"
                            >
                              <img
                                src="/assets/images/t-31.jpg"
                                className="rounded-3 w-100"
                                alt="image"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body d-flex p-0">
                        <a
                          href="#"
                          className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
                        >
                          <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i>
                          <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>
                          2.8K Like
                        </a>
                        <div className="emoji-wrap">
                          <ul className="emojis list-inline mb-0">
                            <li className="emoji list-inline-item">
                              <i className="em em---1"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-angry"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-anguished"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-astonished"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-blush"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-clap"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-cry"></i>
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-full_moon_with_face"></i>
                            </li>
                          </ul>
                        </div>
                        <a
                          href="#"
                          className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                        >
                          <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>
                          <span className="d-none-xss">22 Comment</span>
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

                    <div className="card w-100 text-center shadow-xss rounded-xxl border-0 p-4 mb-3 mt-3">
                      <div
                        className="snippet mt-2 ms-auto me-auto"
                        data-title=".dot-typing"
                      >
                        <div className="stage">
                          <div className="dot-typing"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-xxl-3 col-lg-4 ps-lg-0">
                    <FriendRequest />

                    <Friends />

                    <SuggestedGroup />

                    <SuggestedPeople />

                    <Event />
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
  );
}

export default Home;

