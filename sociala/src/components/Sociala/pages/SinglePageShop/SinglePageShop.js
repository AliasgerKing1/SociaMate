import React from 'react';
import Header from '../../shared/Header/Header';
import LeftSection from '../../shared/left/LeftSection/LeftSection';
import Contact from '../../shared/very_right/Contact/Contact';
import Group from '../../shared/very_right/Group/Group';
import Pages from '../../shared/very_right/Pages/Pages';
import FooterBar from "../../shared/FooterBar/FooterBar";











const SinglePageShop = () => {
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
                <div className="middle-sidebar-left">
                    <div className="row">
                        <div className="col-xl-12 mt-3">
                            <div className="row">
                                <div className="col-lg-5 offset-lg-1 mb-4">
                                    <div className="product-slider-3 owl-carousel owl-theme dot-none owl-nav-link edge-link">

                                    <div id="carouselExampleControls" className="carousel  carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="owl-items pt-lg--10 pb-lg--10 bg-white rounded-3"><img data-thumb="<img src='/assets/images/pl7.png' />" style={{width : '400px', height: 'auto', marginRight: '50px'}} src="/assets/images/pl7.png" alt="icon" /></div>
    </div>
    <div className="carousel-item">
      <div className="owl-items pt-lg--10 pb-lg--10 bg-white rounded-3"><img data-thumb="<img src='/assets/images/pl8.png' />" style={{width : '400px', height: 'auto', marginRight: '50px'}} src="/assets/images/pl8.png" alt="icon" /></div>
    </div>
    <div className="carousel-item">
    <div className="owl-items pt-lg--10 pb-lg--10 bg-white rounded-3"><img data-thumb="<img src='/assets/images/pl9.png' />" style={{width : '400px', height: 'auto', marginRight: '50px'}} src="/assets/images/pl9.png" alt="icon" /></div>
    </div>
    <div className="carousel-item">
    <div className="owl-items pt-lg--10 pb-lg--10 bg-white rounded-3"><img data-thumb="<img src='/assets/images/pl6.png' />" style={{width : '400px', height: 'auto', marginRight: '50px'}} src="/assets/images/pl6.png" alt="icon" /></div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

                                        
                                        
                                       
                                        
                                        
                                    </div>                        
                                </div>
                                <div className="col-lg-6  col-md-12 pad-top-lg-200 pad-bottom-lg-100 pad-top-100 pad-bottom-75 ps-md--5">
                                    <h4 className="text-danger font-xssss fw-700 ls-2">DNMX</h4>
                                    <h2 className="fw-700 text-grey-900 display1-size lh-3 porduct-title display2-md-size"> Camisole with Adjustable Straps</h2>
                                    <div className="star d-block w-100 text-left">
                                        <img src="/assets/images/star.png" alt="star" className="w15 float-left" />
                                        <img src="/assets/images/star.png" alt="star" className="w15 float-left" />
                                        <img src="/assets/images/star.png" alt="star" className="w15 float-left" />
                                        <img src="/assets/images/star.png" alt="star" className="w15 float-left" />
                                        <img src="/assets/images/star-disable.png" alt="star" className="w15 float-left me-2" />
                                    </div>
                                    <p className="review-link font-xssss fw-500 text-grey-500 lh-3"> 2 customer review</p>
                                    <div className="clearfix"></div>
                                    <p className="font-xsss fw-400 text-grey-500 lh-30 pe-5 mt-3 me-5">ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu.</p>

                                    <h6 className="display2-size fw-700 text-current ls-2 mb-2"><span className="font-xl">$</span>449 <span className="font-xs text-grey-500" style={{textDecoration: 'line-through'}}>$699</span></h6>
                                    <div className="timer bg-white mt-2 mb-0 w350 rounded-3"><div className="time-count"><span className="text-time">00</span> <span className="text-day">Day</span></div> <div className="time-count"><span className="text-time">10</span> <span className="text-day">Hours</span> </div> <div className="time-count"><span className="text-time">49</span> <span className="text-day">Min</span> </div> <div className="time-count"><span className="text-time">11</span> <span className="text-day">Sec</span> </div> </div>
                                    <div className="clearfix"></div>
                                    <form action="#" className="form--action mt-4 mb-3">
                                        <div className="product-action flex-row align-items-center">
                                            <div className="quantity me-3">
                                                <input type="number" className="quantity-input" name="qty" id="qty" defaultValue="1" min="1" />
                                                <div className="dec qtybutton">-</div>
                                                <div className="inc qtybutton">+</div>
                                            </div>
                                            
                                            <a href="#" className="add-to-cart bg-dark text-white fw-700 ps-lg-5 pe-lg-5 text-uppercase font-xssss float-left border-dark border rounded-3 border-size-md d-inline-block mt-0 p-3 text-center ls-3">Add to cart</a>
                                            <a href="#" className="btn-round-xl alert-dark text-white d-inline-block mt-0 ms-4 float-left"><i className="ti-heart font-sm"></i></a>
                                        </div>  
                                    </form>
                                    <div className="clearfix"></div>
                                    <ul className="product-feature-list mt-5">
                                        <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left"><b className="text-grey-900"> Category : </b>Furniture</li>
                                        <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left">Straight fit</li> 
                                        <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left"><b className="text-grey-900">SKU : </b> REF. LA-107</li>
                                        <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left">Dry clean</li>
                                        <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left"><b className="text-grey-900">Tags : </b>Design, Toys</li>
                                        <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left">Cutton shirt</li>
                                    </ul>
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

export default SinglePageShop;