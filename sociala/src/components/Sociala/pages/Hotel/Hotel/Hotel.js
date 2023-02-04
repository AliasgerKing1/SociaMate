import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../../../shared/Header/Header';
import LeftSection from '../../../shared/left/LeftSection/LeftSection';
import Contact from '../../../shared/very_right/Contact/Contact';
import Group from '../../../shared/very_right/Group/Group';
import Pages from '../../../shared/very_right/Pages/Pages';
import FooterBar from "../../../shared/FooterBar/FooterBar";

function Hotel() {
  return (
    <div>

<div className="color-theme-blue mont-font">

    {/* <div className="preloader"></div> */}

    
    <div className="main-wrapper">

   {/* <!-- navigation top--> */}
   <Header/>
          {/* <!-- navigation top --> */}

          {/* <!-- navigation left --> */}
         

            <LeftSection/>


          {/* <!-- navigation left --> */}
          {/* <!-- main content --> */}
        <div className="main-content right-chat-active">
            
            <div className="middle-sidebar-bottom">
                <div className="middle-sidebar-left pe-0 ms-0 me-0" style={{maxWidth: '100%'}}>
                    <div className="row">
                        <div className="col-xl-6  chat-left scroll-bar">
                            <div className="card shadow-xss w-100 d-block d-flex border-0 p-4 mb-3">
                                <div className="card-body d-flex align-items-center p-0">
                                    <h2 className="fw-700 mb-0 mt-0 font-md text-grey-900">Hotel</h2>
                                    <div className="search-form-2 ms-auto">
                                        <i className="ti-search font-xss"></i>
                                        <input type="text" className="form-control text-grey-500 mb-0 bg-greylight theme-dark-bg border-0" placeholder="Search here." />
                                    </div>
                                    <a href="#" className="btn-round-md ms-2 bg-greylight theme-dark-bg rounded-3"><i className="feather-filter font-xss text-grey-500"></i></a>
                                </div>
                            </div>
                            <div className="row ps-2 pe-2">
                                <div className="col-lg-6 col-md-6 col-sm-6 mb-3 pe-2 ps-2">
                                    <div className="card w-100 p-0 hover-card shadow-xss border-0 rounded-3 overflow-hidden me-1">
                                        <span className="font-xsssss fw-700 ps-3 pe-3 lh-32 text-uppercase rounded-3 ls-2 bg-primary-gradiant d-inline-block text-white position-absolute mt-3 ms-3 z-index-1">Featured</span>
                                        <div className="card-image w-100 mb-3">
                                            <Link to="/hotel/details" className="position-relative d-block"><img src="/assets/images/h-1.jpg" alt="image" className="w-100" /></Link>
                                        </div>
                                        <div className="card-body pt-0">
                                            <i className="feather-bookmark font-md text-grey-500 position-absolute right-0 me-3"></i>
                                            <h4 className="fw-700 font-xss mt-0 lh-28 mb-0"><Link to="/hotel/details" className="text-dark text-grey-900">Montana Hotel</Link></h4>
                                            <h6 className="font-xsssss text-grey-500 fw-600 mt-0 mb-2"> 323 Geldenfe Ave Park, Flodia City</h6>
                                            <div className="star d-block w-100 text-left mt-0">
                                                <img src="/assets/images/star.png" alt="star" className="w15 me-1 float-left" />
                                                <img src="/assets/images/star.png" alt="star" className="w15 me-1 float-left" />
                                                <img src="/assets/images/star.png" alt="star" className="w15 me-1 float-left" />
                                                <img src="/assets/images/star.png" alt="star" className="w15 me-1 float-left" />
                                                <img src="/assets/images/star-disable.png" alt="star" className="w15 me-1 float-left me-2" />
                                            </div>
                                            <div className="clearfix"></div>
                                            <h5 className="mt-3 d-inline-block font-xssss fw-600 text-grey-500 me-2"><i className="btn-round-sm bg-greylight ti-ruler-pencil text-grey-500 me-1"></i> 200 sq</h5>
                                            <h5 className="mt-3 d-inline-block font-xssss fw-600 text-grey-500 me-2"><i className="btn-round-sm bg-greylight ti-rss-alt text-grey-500 me-1"></i> WiFi</h5>
                                            <h5 className="mt-3 d-inline-block font-xssss fw-600 text-grey-500"><i className="btn-round-sm bg-greylight ti-credit-card text-grey-500 me-1"></i> Card</h5>
                                            <div className="clearfix"></div>
                                            <span className="font-lg fw-700 mt-0 pe-3 ls-2 lh-32 d-inline-block text-success float-left"><span className="font-xsssss">$</span> 320 <span className="font-xsssss text-grey-500">/ mo</span> </span>
                                            <a href="#" className="position-absolute bottom-15 mb-2 right-15"><i className="btn-round-sm bg-primary-gradiant text-white font-sm feather-chevron-right"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6 mb-3 pe-2 ps-2">
                                    <div className="card w-100 p-0 hover-card shadow-xss border-0 rounded-3 overflow-hidden me-1">
                                        <span className="font-xsssss fw-700 ps-3 pe-3 lh-32 text-uppercase rounded-3 ls-2 bg-primary-gradiant d-inline-block text-white position-absolute mt-3 ms-3 z-index-1">Featured</span>
                                        <div className="card-image w-100 mb-3">
                                            <Link to="/hotel/details" className="position-relative d-block"><img src="/assets/images/h-2.jpg" alt="image" className="w-100" /></Link>
                                        </div>
                                        <div className="card-body pt-0">
                                            <i className="feather-bookmark font-md text-grey-500 position-absolute right-0 me-3"></i>
                                            <h4 className="fw-700 font-xss mt-0 lh-28 mb-0"><Link to="/hotel/details" className="text-dark text-grey-900">Himalayan Wind Horse</Link></h4>
                                            <h6 className="font-xsssss text-grey-500 fw-600 mt-0 mb-2"> 323 Geldenfe Ave Park, Flodia City</h6>
                                            <div className="star d-block w-100 text-left mt-0">
                                                <img src="/assets/images/star.png" alt="star" className="w15 me-1 float-left" />
                                                <img src="/assets/images/star.png" alt="star" className="w15 me-1 float-left" />
                                                <img src="/assets/images/star.png" alt="star" className="w15 me-1 float-left" />
                                                <img src="/assets/images/star.png" alt="star" className="w15 me-1 float-left" />
                                                <img src="/assets/images/star-disable.png" alt="star" className="w15 me-1 float-left me-2" />
                                            </div>
                                            <div className="clearfix"></div>
                                            <h5 className="mt-3 d-inline-block font-xssss fw-600 text-grey-500 me-2"><i className="btn-round-sm bg-greylight ti-ruler-pencil text-grey-500 me-1"></i> 200 sq</h5>
                                            <h5 className="mt-3 d-inline-block font-xssss fw-600 text-grey-500 me-2"><i className="btn-round-sm bg-greylight ti-rss-alt text-grey-500 me-1"></i> WiFi</h5>
                                            <h5 className="mt-3 d-inline-block font-xssss fw-600 text-grey-500"><i className="btn-round-sm bg-greylight ti-credit-card text-grey-500 me-1"></i> Card</h5>
                                            <div className="clearfix"></div>
                                            <span className="font-lg fw-700 mt-0 pe-3 ls-2 lh-32 d-inline-block text-success float-left"><span className="font-xsssss">$</span> 450 <span className="font-xsssss text-grey-500">/ mo</span> </span>
                                            <a href="#" className="position-absolute bottom-15 mb-2 right-15"><i className="btn-round-sm bg-primary-gradiant text-white font-sm feather-chevron-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 mb-3 pe-2 ps-2">
                                    <div className="card w-100 p-0 hover-card shadow-xss border-0 rounded-3 overflow-hidden me-1">
                                        <span className="font-xsssss fw-700 ps-3 pe-3 lh-32 text-uppercase rounded-3 ls-2 bg-primary-gradiant d-inline-block text-white position-absolute mt-3 ms-3 z-index-1">Featured</span>
                                        <div className="card-image w-100 mb-3">
                                            <Link to="/hotel/details" className="position-relative d-block"><img src="/assets/images/h-3.jpg" alt="image" className="w-100" /></Link>
                                        </div>
                                        <div className="card-body pt-0">
                                            <i className="feather-bookmark font-md text-grey-500 position-absolute right-0 me-3"></i>
                                            <h4 className="fw-700 font-xss mt-0 lh-28 mb-0"><Link to="/hotel/details" className="text-dark text-grey-900">Hotel Sonar Bangla</Link></h4>
                                            <h6 className="font-xsssss text-grey-500 fw-600 mt-0 mb-2"> 323 Geldenfe Ave Park, Flodia City</h6>
                                            <div className="star d-block w-100 text-left mt-0">
                                                <img src="/assets/images/star.png" alt="star" className="w15 me-1 float-left" />
                                                <img src="/assets/images/star.png" alt="star" className="w15 me-1 float-left" />
                                                <img src="/assets/images/star.png" alt="star" className="w15 me-1 float-left" />
                                                <img src="/assets/images/star.png" alt="star" className="w15 me-1 float-left" />
                                                <img src="/assets/images/star-disable.png" alt="star" className="w15 me-1 float-left me-2" />
                                            </div>
                                            <div className="clearfix"></div>
                                            <h5 className="mt-3 d-inline-block font-xssss fw-600 text-grey-500 me-2"><i className="btn-round-sm bg-greylight ti-ruler-pencil text-grey-500 me-1"></i> 200 sq</h5>
                                            <h5 className="mt-3 d-inline-block font-xssss fw-600 text-grey-500 me-2"><i className="btn-round-sm bg-greylight ti-rss-alt text-grey-500 me-1"></i> WiFi</h5>
                                            <h5 className="mt-3 d-inline-block font-xssss fw-600 text-grey-500"><i className="btn-round-sm bg-greylight ti-credit-card text-grey-500 me-1"></i> Card</h5>
                                            <div className="clearfix"></div>
                                            <span className="font-lg fw-700 mt-0 pe-3 ls-2 lh-32 d-inline-block text-success float-left"><span className="font-xsssss">$</span> 50 <span className="font-xsssss text-grey-500">/ mo</span> </span>
                                            <a href="#" className="position-absolute bottom-15 mb-2 right-15"><i className="btn-round-sm bg-primary-gradiant text-white font-sm feather-chevron-right"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6 mb-3 pe-2 ps-2">
                                    <div className="card w-100 p-0 hover-card shadow-xss border-0 rounded-3 overflow-hidden me-1">
                                        <span className="font-xsssss fw-700 ps-3 pe-3 lh-32 text-uppercase rounded-3 ls-2 bg-primary-gradiant d-inline-block text-white position-absolute mt-3 ms-3 z-index-1">Featured</span>
                                        <div className="card-image w-100 mb-3">
                                            <Link to="/hotel/details" className="position-relative d-block"><img src="/assets/images/h-4.jpg" alt="image" className="w-100" /></Link>
                                        </div>
                                        <div className="card-body pt-0">
                                            <i className="feather-bookmark font-md text-grey-500 position-absolute right-0 me-3"></i>
                                            <h4 className="fw-700 font-xss mt-0 lh-28 mb-0"><Link to="/hotel/details" className="text-dark text-grey-900">House Pool Party</Link></h4>
                                            <h6 className="font-xsssss text-grey-500 fw-600 mt-0 mb-2"> 323 Geldenfe Ave Park, Flodia City</h6>
                                            <div className="star d-block w-100 text-left mt-0">
                                                <img src="/assets/images/star.png" alt="star" className="w15 me-1 float-left" />
                                                <img src="/assets/images/star.png" alt="star" className="w15 me-1 float-left" />
                                                <img src="/assets/images/star.png" alt="star" className="w15 me-1 float-left" />
                                                <img src="/assets/images/star.png" alt="star" className="w15 me-1 float-left" />
                                                <img src="/assets/images/star-disable.png" alt="star" className="w15 me-1 float-left me-2" />
                                            </div>
                                            <div className="clearfix"></div>
                                            <h5 className="mt-3 d-inline-block font-xssss fw-600 text-grey-500 me-2"><i className="btn-round-sm bg-greylight ti-ruler-pencil text-grey-500 me-1"></i> 200 sq</h5>
                                            <h5 className="mt-3 d-inline-block font-xssss fw-600 text-grey-500 me-2"><i className="btn-round-sm bg-greylight ti-rss-alt text-grey-500 me-1"></i> WiFi</h5>
                                            <h5 className="mt-3 d-inline-block font-xssss fw-600 text-grey-500"><i className="btn-round-sm bg-greylight ti-credit-card text-grey-500 me-1"></i> Card</h5>
                                            <div className="clearfix"></div>
                                            <span className="font-lg fw-700 mt-0 pe-3 ls-2 lh-32 d-inline-block text-success float-left"><span className="font-xsssss">$</span> 60 <span className="font-xsssss text-grey-500">/ mo</span> </span>
                                            <a href="#" className="position-absolute bottom-15 mb-2 right-15"><i className="btn-round-sm bg-primary-gradiant text-white font-sm feather-chevron-right"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6 mb-3 pe-2 ps-2">
                                    <div className="card w-100 p-0 hover-card shadow-xss border-0 rounded-3 overflow-hidden me-1">
                                        <span className="font-xsssss fw-700 ps-3 pe-3 lh-32 text-uppercase rounded-3 ls-2 bg-primary-gradiant d-inline-block text-white position-absolute mt-3 ms-3 z-index-1">Featured</span>
                                        <div className="card-image w-100 mb-3">
                                            <Link to="/hotel/details" className="position-relative d-block"><img src="/assets/images/h-5.jpg" alt="image" className="w-100" /></Link>
                                        </div>
                                        <div className="card-body pt-0">
                                            <i className="feather-bookmark font-md text-grey-500 position-absolute right-0 me-3"></i>
                                            <h4 className="fw-700 font-xss mt-0 lh-28 mb-0"><Link to="/hotel/details" className="text-dark text-grey-900">Silver Star Boutique</Link></h4>
                                            <h6 className="font-xsssss text-grey-500 fw-600 mt-0 mb-2"> 323 Geldenfe Ave Park, Flodia City</h6>
                                            <div className="star d-block w-100 text-left mt-0">
                                                <img src="/assets/images/star.png" alt="star" className="w15 me-1 float-left" />
                                                <img src="/assets/images/star.png" alt="star" className="w15 me-1 float-left" />
                                                <img src="/assets/images/star.png" alt="star" className="w15 me-1 float-left" />
                                                <img src="/assets/images/star.png" alt="star" className="w15 me-1 float-left" />
                                                <img src="/assets/images/star-disable.png" alt="star" className="w15 me-1 float-left me-2" />
                                            </div>
                                            <div className="clearfix"></div>
                                            <h5 className="mt-3 d-inline-block font-xssss fw-600 text-grey-500 me-2"><i className="btn-round-sm bg-greylight ti-ruler-pencil text-grey-500 me-1"></i> 200 sq</h5>
                                            <h5 className="mt-3 d-inline-block font-xssss fw-600 text-grey-500 me-2"><i className="btn-round-sm bg-greylight ti-rss-alt text-grey-500 me-1"></i> WiFi</h5>
                                            <h5 className="mt-3 d-inline-block font-xssss fw-600 text-grey-500"><i className="btn-round-sm bg-greylight ti-credit-card text-grey-500 me-1"></i> Card</h5>
                                            <div className="clearfix"></div>
                                            <span className="font-lg fw-700 mt-0 pe-3 ls-2 lh-32 d-inline-block text-success float-left"><span className="font-xsssss">$</span> 760 <span className="font-xsssss text-grey-500">/ mo</span> </span>
                                            <a href="#" className="position-absolute bottom-15 mb-2 right-15"><i className="btn-round-sm bg-primary-gradiant text-white font-sm feather-chevron-right"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6 mb-3 pe-2 ps-2">
                                    <div className="card w-100 p-0 hover-card shadow-xss border-0 rounded-3 overflow-hidden me-1">
                                        <span className="font-xsssss fw-700 ps-3 pe-3 lh-32 text-uppercase rounded-3 ls-2 bg-primary-gradiant d-inline-block text-white position-absolute mt-3 ms-3 z-index-1">Featured</span>
                                        <div className="card-image w-100 mb-3">
                                            <Link to="/hotel/details" className="position-relative d-block"><img src="/assets/images/h-6.jpg" alt="image" className="w-100" /></Link>
                                        </div>
                                        <div className="card-body pt-0">
                                            <i className="feather-bookmark font-md text-grey-500 position-absolute right-0 me-3"></i>
                                            <h4 className="fw-700 font-xss mt-0 lh-28 mb-0"><Link to="/hotel/details" className="text-dark text-grey-900">Crown Retreat Hotel</Link></h4>
                                            <h6 className="font-xsssss text-grey-500 fw-600 mt-0 mb-2"> 323 Geldenfe Ave Park, Flodia City</h6>
                                            <div className="star d-block w-100 text-left mt-0">
                                                <img src="/assets/images/star.png" alt="star" className="w15 me-1 float-left" />
                                                <img src="/assets/images/star.png" alt="star" className="w15 me-1 float-left" />
                                                <img src="/assets/images/star.png" alt="star" className="w15 me-1 float-left" />
                                                <img src="/assets/images/star.png" alt="star" className="w15 me-1 float-left" />
                                                <img src="/assets/images/star-disable.png" alt="star" className="w15 me-1 float-left me-2" />
                                            </div>
                                            <div className="clearfix"></div>
                                            <h5 className="mt-3 d-inline-block font-xssss fw-600 text-grey-500 me-2"><i className="btn-round-sm bg-greylight ti-ruler-pencil text-grey-500 me-1"></i> 200 sq</h5>
                                            <h5 className="mt-3 d-inline-block font-xssss fw-600 text-grey-500 me-2"><i className="btn-round-sm bg-greylight ti-rss-alt text-grey-500 me-1"></i> WiFi</h5>
                                            <h5 className="mt-3 d-inline-block font-xssss fw-600 text-grey-500"><i className="btn-round-sm bg-greylight ti-credit-card text-grey-500 me-1"></i> Card</h5>
                                            <div className="clearfix"></div>
                                            <span className="font-lg fw-700 mt-0 pe-3 ls-2 lh-32 d-inline-block text-success float-left"><span className="font-xsssss">$</span> 840 <span className="font-xsssss text-grey-500">/ mo</span> </span>
                                            <a href="#" className="position-absolute bottom-15 mb-2 right-15"><i className="btn-round-sm bg-primary-gradiant text-white font-sm feather-chevron-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>   
                        <div className="col-xl-6 d-none d-xl-block ps-0 chat-left">
                            <div className="card w-100 border-0 shadow-none rounded-3 border-0 mb-4 overflow-hidden ">
                                <div id="map" className="rounded-3 chat-left"></div>
                                <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyCOdKtT5fapH3_OfhV3HFeZjqFs4OfNIew&amp;callback=mapinitialize" type="text/javascript"></script>
                                    

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
                    <input type="text" className="form-control border-0" placeholder="Search..." />
                    <i className="input-icon">
                        <ion-icon name="search-outline" role="img" className="md hydrated" aria-label="search outline"></ion-icon>
                    </i>
                    <a href="#" className="ms-1 mt-1 d-inline-block close searchbox-close">
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
                        <img src="/assets/images/user-12.png" alt="image" className="w35 me-1" />
                    </figure>
                    <h5 className="fw-700 text-primary font-xssss mt-1 mb-1">Hendrix Stamp</h5>
                    <h4 className="text-grey-500 font-xsssss mt-0 mb-0"><span className="d-inline-block bg-success btn-round-xss m-0"></span> Available</h4>
                    <a href="#" className="font-xssss position-absolute right-0 top-0 mt-3 me-4"><i className="ti-close text-grey-900 mt-2 d-inline-block"></i></a>
                </div>
            </div>
            <div className="modal-popup-body w-100 p-3 h-auto">
                <div className="message"><div className="message-content font-xssss lh-24 fw-500">Hi, how can I help you?</div></div>
                <div className="date-break font-xsssss lh-24 fw-500 text-grey-500 mt-2 mb-2">Mon 10:20am</div>
                <div className="message self text-right mt-2"><div className="message-content font-xssss lh-24 fw-500">I want those files for you. I want you to send 1 PDF and 1 image file.</div></div>
                <div className="snippet pt-3 ps-4 pb-2 pe-3 mt-2 bg-grey rounded-xl float-right" data-title=".dot-typing"><div className="stage"><div className="dot-typing"></div></div></div>
                <div className="clearfix"></div>
            </div>
            <div className="modal-popup-footer w-100 border-top">
                <div className="card p-3 d-block border-0 d-block">
                    <div className="form-group icon-right-input style1-input mb-0"><input type="text" placeholder="Start typing.." className="form-control rounded-xl bg-greylight border-0 font-xssss fw-500 ps-3" /><i className="feather-send text-grey-500 font-md"></i></div>
                </div>
            </div>
        </div> 
    </div>

</div>
    </div>
  )
}

export default Hotel;