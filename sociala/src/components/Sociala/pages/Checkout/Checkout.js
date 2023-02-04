import React from "react";
import { Link } from "react-router-dom";
import Header from "../../shared/Header/Header";
import LeftSection from "../../shared/left/LeftSection/LeftSection";
import Contact from "../../shared/very_right/Contact/Contact";
import Group from "../../shared/very_right/Group/Group";
import Pages from "../../shared/very_right/Pages/Pages";
import FooterBar from "../../shared/FooterBar/FooterBar";
import Notification from "../../shared/Notification/Notification";

const Checkout = () => {
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
          <div className="main-content bg-white right-chat-active">
            <div className="middle-sidebar-bottom">
              <div className="middle-sidebar-left">
                <div className="row">
                  <div className="col-xl-12 mb-4">
                    <div className="row">
                      <div className="col-lg-12 mb-3">
                        <div className="card p-lg-5 p-4 bg-primary-gradiant rounded-3 shadow-xss bg-pattern border-0 overflow-hidden">
                          <div className="bg-pattern-div"></div>
                          <h2 className="display2-size display2-md-size fw-700 text-white mb-0 mt-0">
                            Checkout{" "}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="card bg-greyblue border-0 p-4 mb-5">
                          <p className="mb-0 mont-font font-xssss text-uppercase fw-600 text-grey-500">
                            <i className="fa fa-exclamation-circle"></i> Have A
                            Coupon?{" "}
                            <a
                              className="expand-btn text-grey-500 fw-700"
                              href="#coupon_info"
                            >
                              Click Here To Enter Your Code.
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6">
                        <div className="page-title">
                          <h4 className="mont-font fw-600 font-md mb-lg-5 mb-4">
                            Billing address
                          </h4>
                          <form action="#">
                            <div className="row">
                              <div className="col-lg-6 mb-3">
                                <div className="form-gorup">
                                  <label className="mont-font fw-600 font-xssss">
                                    First Name
                                  </label>
                                  <input
                                    type="text"
                                    name="comment-name"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              <div className="col-lg-6 mb-3">
                                <div className="form-gorup">
                                  <label className="mont-font fw-600 font-xssss">
                                    Last Name
                                  </label>
                                  <input
                                    type="text"
                                    name="comment-name"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-6 mb-3">
                                <div className="form-gorup">
                                  <label className="mont-font fw-600 font-xssss">
                                    Email
                                  </label>
                                  <input
                                    type="text"
                                    name="comment-name"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              <div className="col-lg-6 mb-3">
                                <div className="form-gorup">
                                  <label className="mont-font fw-600 font-xssss">
                                    Phone
                                  </label>
                                  <input
                                    type="text"
                                    name="comment-name"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-12 mb-3">
                                <div className="form-gorup">
                                  <label className="mont-font fw-600 font-xssss">
                                    Country
                                  </label>
                                  <input
                                    type="text"
                                    name="comment-name"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              <div className="col-lg-12 mb-3">
                                <div className="form-gorup">
                                  <label className="mont-font fw-600 font-xssss">
                                    Address
                                  </label>
                                  <input
                                    type="text"
                                    name="comment-name"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-6 mb-3">
                                <div className="form-gorup">
                                  <label className="mont-font fw-600 font-xssss">
                                    Twon / City
                                  </label>
                                  <input
                                    type="text"
                                    name="comment-name"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              <div className="col-lg-6 mb-3">
                                <div className="form-gorup">
                                  <label className="mont-font fw-600 font-xssss">
                                    Postcode
                                  </label>
                                  <input
                                    type="text"
                                    name="comment-name"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              <div className="col-lg-12 mb-3">
                                <div className="form-check text-left mb-3">
                                  <label
                                    className="pt--1 form-check-label fw-600 font-xsss text-grey-700"
                                    htmlFor="exampleCheck1"
                                  >
                                    <Link to="/shop">Create an acount ?</Link>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </form>
                          <h4 className="mont-font fw-600 font-md mb-3">
                            Shipping address
                          </h4>
                          <div className="form-check text-left mb-3 mt-2">
                            <label
                              className="pt--1 form-check-label fw-600 font-xsss text-grey-700"
                              htmlFor="exampleCheck2"
                            >
                              106, Krishna Business Pride, Towersquare, Indore{" "}
                              <br />
                              <Link to="/shop">
                                Ship to a different address ?
                              </Link>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-5 offset-xl-1 col-lg-6">
                        <div className="order-details">
                          <h4 className="mont-font fw-600 font-md mb-5">
                            Order Details
                          </h4>
                          <div className="table-content table-responsive mb-5 card border-0 bg-greyblue p-lg-5 p-4">
                            <table className="table order-table order-table-2 mb-0">
                              <thead>
                                <tr>
                                  <th className="border-0">Product</th>
                                  <th className="text-right border-0">Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th className="text-grey-500 fw-500 font-xsss">
                                    Aliquam lobortis est
                                    <strong>
                                      <span>✕</span>1
                                    </strong>
                                  </th>
                                  <td className="text-right text-grey-500 fw-500 font-xsss">
                                    $80.00
                                  </td>
                                </tr>
                                <tr>
                                  <th className="text-grey-500 fw-500 font-xsss">
                                    Auctor gravida enim
                                    <strong>
                                      <span>✕</span>1
                                    </strong>
                                  </th>
                                  <td className="text-right text-grey-500 fw-500 font-xsss">
                                    $60.00
                                  </td>
                                </tr>
                              </tbody>
                              <tfoot>
                                <tr className="cart-subtotal">
                                  <th>Subtotal</th>
                                  <td className="text-right text-grey-700 font-xsss fw-700">
                                    $56.00
                                  </td>
                                </tr>
                                <tr className="shipping">
                                  <th>Shipping</th>
                                  <td className="text-right">
                                    <span className="text-grey-700 font-xsss fw-700">
                                      Flat Rate; $20.00
                                    </span>
                                  </td>
                                </tr>
                                <tr className="order-total">
                                  <th>Order Total</th>
                                  <td className="text-right text-grey-700 font-xsss fw-700">
                                    <span className="order-total-ammount">
                                      $56.00
                                    </span>
                                  </td>
                                </tr>
                              </tfoot>
                            </table>
                          </div>
                          <div className="checkout-payment card border-0 mb-3 bg-greyblue p-lg-5 p-4">
                            <form action="#" className="payment-form">
                              <div className="payment-group mb-4">
                                <div className="payment-radio">
                                  <input
                                    type="radio"
                                    defaultValue="bank"
                                    name="payment-method"
                                    id="bank"
                                    defaultChecked=""
                                  />
                                  <label
                                    className="payment-label fw-600 font-xsss text-grey-900 ms-2"
                                    htmlFor="cheque"
                                  >
                                    Direct Bank Transfer
                                  </label>
                                </div>
                                <div
                                  className="payment-info"
                                  data-method="bank"
                                >
                                  <p className="font-xssss lh-24 text-grey-500 ps-4">
                                    Make your payment directly into our bank
                                    account. Please use your Order ID as the
                                    payment reference. Your order will not be
                                    shipped until the funds have cleared in our
                                    account.
                                  </p>
                                </div>
                              </div>
                              <div className="payment-group mb-4">
                                <div className="payment-radio">
                                  <input
                                    type="radio"
                                    defaultValue="cheque"
                                    name="payment-method"
                                    id="cheque"
                                  />
                                  <label
                                    className="payment-label fw-600 font-xsss text-grey-900 ps-2"
                                    htmlFor="cheque"
                                  >
                                    Cheque payments
                                  </label>
                                </div>
                                <div
                                  className="payment-info cheque hide-in-default"
                                  data-method="cheque"
                                  style={{ display: "none" }}
                                >
                                  <p className="font-xssss lh-24 text-grey-500 ps-4">
                                    Please send a check to Store Name, Store
                                    Street, Store Town, Store State / County,
                                    Store Postcode.
                                  </p>
                                </div>
                              </div>
                              <div className="payment-group mb-0">
                                <div className="payment-radio">
                                  <input
                                    type="radio"
                                    defaultValue="cash"
                                    name="payment-method"
                                    id="cash"
                                  />
                                  <label
                                    className="payment-label fw-600 font-xsss text-grey-900 ps-2"
                                    htmlFor="cash"
                                  >
                                    Cash on Delivary
                                  </label>
                                </div>
                                <div
                                  className="payment-info cash hide-in-default"
                                  data-method="cash"
                                  style={{ display: "none" }}
                                >
                                  <p className="font-xssss lh-24 text-grey-500 ps-4">
                                    Pay with cash upon delivery.
                                  </p>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div className="clearfix"></div>

                          <div className="card shadow-none border-0">
                            <a
                              href="#"
                              className="w-100 p-3 mt-3 font-xsss text-center text-white bg-current rounded-3 text-uppercase fw-600 ls-3"
                            >
                              Place Order
                            </a>
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

        <Notification />
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
  );
};

export default Checkout;
