import React from 'react';
import Header from '../../../shared/Header/Header';
import LeftSection from '../../../shared/left/LeftSection/LeftSection';
import Contact from '../../../shared/very_right/Contact/Contact';
import Group from '../../../shared/very_right/Group/Group';
import Pages from '../../../shared/very_right/Pages/Pages';
import FooterBar from '../../../shared/FooterBar/FooterBar';

export const Help = () => {
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
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="card w-100 border-0 p-0 rounded-3 overflow-hidden bg-image-contain bg-image-center" style={{backgroundImage: 'url(images/help-bg.png)'}}>
                                <div className="card-body p-md-5 p-4 text-center" style={{backgroundColor: 'rgba(0,85,255,0.8)'}}>
                                    <h2 className="fw-700 display2-size text-white display2-md-size lh-2">Welcome to the Sociala Commuinity!</h2>
                                    <p className="font-xsss ps-lg-5 pe-lg-5 lh-28 text-grey-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus </p>
                                    <div className="form-group w-lg-75 mt-4 border-light border p-1 bg-white rounded-3 ms-auto me-auto">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="form-group icon-input mb-0">
                                                    <i className="ti-search font-xs text-grey-400"></i>
                                                    <input type="text" className="style1-input border-0 ps-5 font-xsss mb-0 text-grey-500 fw-500 bg-transparent" placeholder="Search anythings.." />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <a href="#" className="w-100 d-block btn bg-current text-white font-xssss fw-600 ls-3 style1-input p-0 border-0 text-uppercase ">Search</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-100 border-0 shadow-none bg-transparent mt-5">
                                <div id="accordion" className="accordion mb-0">
                                  <div className="card shadow-xss">
                                    <div className="card-header" id="headingOne">
                                      <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                          I have read and agree to the Privacy Policy and Terms & Conditions*
                                        </button>
                                      </h5>
                                    </div>

                                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                      <div className="card-body">
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card shadow-xss">
                                    <div className="card-header" id="headingTwo">
                                      <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                          You can easily build a page without any design or custom coding.
                                        </button>
                                      </h5>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                      <div className="card-body">
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card shadow-xss">
                                    <div className="card-header" id="headingFour">
                                      <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                          I have read and agree to the Privacy Policy and Terms & Conditions*
                                        </button>
                                      </h5>
                                    </div>

                                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                      <div className="card-body">
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card shadow-xss">
                                    <div className="card-header" id="headingFive">
                                      <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                          I have read and agree to the Privacy Policy and Terms & Conditions*
                                        </button>
                                      </h5>
                                    </div>

                                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                                      <div className="card-body">
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card shadow-xss">
                                    <div className="card-header" id="headingSix">
                                      <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                          I have read and agree to the Privacy Policy and Terms & Conditions*
                                        </button>
                                      </h5>
                                    </div>

                                    <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                                      <div className="card-body">
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card shadow-xss">
                                    <div className="card-header" id="headingThree">
                                      <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                          Stream that converts more visitors than any website.
                                        </button>
                                      </h5>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                      <div className="card-body">
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                      </div>
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

    <div className="modal bottom side fade" id="Modalstries" tabIndex="-1" role="dialog" style={{ overflowY: 'auto'}}>
         <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content border-0 bg-transparent">
                <button type="button" className="close mt-0 position-absolute top--30 right--10" data-dismiss="modal" aria-label="Close"><i className="ti-close text-white font-xssss"></i></button>
                <div className="modal-body p-0">
                    <div className="card w-100 border-0 rounded-3 overflow-hidden bg-gradiant-bottom bg-gradiant-top">
                        <div className="owl-carousel owl-theme dot-style3 story-slider owl-dot-nav nav-none">
                            <div className="item"><img src="images/story-5.jpg" alt="image" /></div>
                            <div className="item"><img src="images/story-6.jpg" alt="image" /></div>
                            <div className="item"><img src="images/story-7.jpg" alt="image" /></div>
                            <div className="item"><img src="images/story-8.jpg" alt="image" /></div>
                            
                        </div>
                    </div>
                    <div className="form-group mt-3 mb-0 p-3 position-absolute bottom-0 z-index-1 w-100" />
                        <input type="text" className="style2-input w-100 bg-transparent border-light-md p-3 pe-5 font-xssss fw-500 text-white" defaultValue="Write Comments" />               
                        <span className="feather-send text-white font-md text-white position-absolute" style={{bottom: '35px', right: '30px'}}></span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="modal-popup-chat">
        <div className="modal-popup-wrap bg-white p-0 shadow-lg rounded-3">
            <div className="modal-popup-header w-100 border-bottom">
                <div className="card p-3 d-block border-0 d-block">
                    <figure className="avatar mb-0 float-left me-2">
                        <img src="images/user-12.png" alt="image" className="w35 me-1" />
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
  )
}

export default Help;