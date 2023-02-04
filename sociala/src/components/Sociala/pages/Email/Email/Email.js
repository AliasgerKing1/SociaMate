import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../../../shared/Header/Header';
import LeftSection from '../../../shared/left/LeftSection/LeftSection';
import Contact from '../../../shared/very_right/Contact/Contact';
import Group from '../../../shared/very_right/Group/Group';
import Pages from '../../../shared/very_right/Pages/Pages';
import FooterBar from "../../../shared/FooterBar/FooterBar";


function Email() {
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
                <div className="middle-sidebar-left pe-0 ps-lg-3 ms-0 me-0" style={{maxWidth: '100%'}}>
                    <div className="row">
                           
                       
                        <div className="col-lg-12">
                            <div className="chat-wrapper p-3 w-100 position-relative scroll-bar bg-white theme-dark-bg">
                                <ul className="email-message">
                                    <li>
                                        <Link to='/email/open' className="rounded-3 bg-lightblue theme-light-bg">
                                            <div className="form-check mt-1">
                                                <input className="form-check-input" type="checkbox" id="blankCheckbox1" defaultValue="option1" aria-label="" />
                                                <label className="text-grey-500 font-xssss" htmlFor="blankCheckbox1"></label>
                                            </div>
                                            <div className="email-user">
                                                <span className="btn-round-xss ms-0 bg-success me-2"></span>
                                                <img src="/assets/images/user-12.png" alt="user" className="w35 me-2" />  
                                                <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">Hurin Seary</h6>
                                            </div>
                                            <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                                                <i className="feather-star font-xss text-warning me-2"></i>
                                                Mobile Apps Redesign
                                            </div>
                                            <div className="email-text text-grey-500 fw-600 font-xssss">
                                                Hey Cak, Could you free now? Can you look and read the brief first before...
                                            </div>
                                            <span className="email-file">
                                                <i className="feather-paperclip font-xss btn-round-sm text-grey-500 me-2 p-0"></i>
                                            </span>
                                            <div className="email-time text-grey-500 fw-600">12:48PM</div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/email/open' className="rounded-3 bg-transparent">
                                            <div className="form-check mt-1">
                                                <input className="form-check-input" type="checkbox" id="blankCheckbox2" defaultValue="option1" aria-label="" />
                                                <label className="text-grey-500 font-xssss" htmlFor="blankCheckbox2"></label>
                                            </div>
                                            <div className="email-user">
                                                <span className="btn-round-xss ms-0 bg-success me-2"></span>
                                                <img src="/assets/images/user-8.png" alt="user" className="w35 me-2" />  
                                                <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">Victor Exrixon</h6>
                                            </div>
                                            <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                                                <i className="feather-star font-xss text-warning me-2"></i>
                                                Mobile Apps Redesign
                                            </div>
                                            <div className="email-text text-grey-500 fw-600 font-xssss">
                                                Hey Cak, Could you free now? Can you look and read the brief first before...
                                            </div>
                                            <span className="email-file">
                                                <i className="feather-paperclip font-xss btn-round-sm text-grey-500 me-2 p-0"></i>
                                            </span>
                                            <div className="email-time text-grey-500 fw-600">12:48PM</div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/email/open' className="rounded-3 bg-transparent">
                                            <div className="form-check mt-1">
                                                <input className="form-check-input" type="checkbox" id="blankCheckbox3" defaultValue="option1" aria-label="" />
                                                <label className="text-grey-500 font-xssss" htmlFor="blankCheckbox3"></label>
                                            </div>
                                            <div className="email-user">
                                                <span className="btn-round-xss ms-0 bg-success me-2"></span>
                                                <img src="/assets/images/user-7.png" alt="user" className="w35 me-2" />  
                                                <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">Surfiya Zakir</h6>
                                            </div>
                                            <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                                                <i className="feather-star font-xss text-warning me-2"></i>
                                                Mobile Apps Redesign
                                            </div>
                                            <div className="email-text text-grey-500 fw-600 font-xssss">
                                                Hey Cak, Could you free now? Can you look and read the brief first before...
                                            </div>
                                            <span className="email-file">
                                                <i className="feather-paperclip font-xss btn-round-sm text-grey-500 me-2 p-0"></i>
                                            </span>
                                            <div className="email-time text-grey-500 fw-600">12:48PM</div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/email/open' className="rounded-3 bg-transparent">
                                            <div className="form-check mt-1">
                                                <input className="form-check-input" type="checkbox" id="blankCheckbox4" defaultValue="option1" aria-label="" />
                                                <label className="text-grey-500 font-xssss" htmlFor="blankCheckbox4"></label>
                                            </div>
                                            <div className="email-user">
                                                <span className="btn-round-xss ms-0 bg-dark me-2"></span>
                                                <img src="/assets/images/user-6.png" alt="user" className="w35 me-2" />  
                                                <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">Goria Coast</h6>
                                            </div>
                                            <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                                                <i className="feather-star font-xss text-warning me-2"></i>
                                                Mobile Apps Redesign
                                            </div>
                                            <div className="email-text text-grey-500 fw-600 font-xssss">
                                                Hey Cak, Could you free now? Can you look and read the brief first before...
                                            </div>
                                            <span className="email-file">
                                                
                                            </span>
                                            <div className="email-time text-grey-500 fw-600">12:48PM</div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/email/open' className="rounded-3 bg-lightblue theme-light-bg">
                                            <div className="form-check mt-1">
                                                <input className="form-check-input" type="checkbox" id="blankCheckbox5" defaultValue="option1" aria-label="" />
                                                <label className="text-grey-500 font-xssss" htmlFor="blankCheckbox5"></label>
                                            </div>
                                            <div className="email-user">
                                                <span className="btn-round-xss ms-0 bg-success me-2"></span>
                                                <img src="/assets/images/user-5.png" alt="user" className="w35 me-2" />  
                                                <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">Hurin Seary</h6>
                                            </div>
                                            <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                                                <i className="feather-star font-xss text-warning me-2"></i>
                                                Mobile Apps Redesign
                                            </div>
                                            <div className="email-text text-grey-500 fw-600 font-xssss">
                                                Hey Cak, Could you free now? Can you look and read the brief first before...
                                            </div>
                                            <span className="email-file">
                                                <i className="feather-paperclip font-xss btn-round-sm text-grey-500 me-2 p-0"></i>
                                            </span>
                                            <div className="email-time text-grey-500 fw-600">12:48PM</div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/email/open' className="rounded-3 bg-lightblue theme-light-bg">
                                            <div className="form-check mt-1">
                                                <input className="form-check-input" type="checkbox" id="blankCheckbox6" defaultValue="option1" aria-label="" />
                                                <label className="text-grey-500 font-xssss" htmlFor="blankCheckbox6"></label>
                                            </div>
                                            <div className="email-user">
                                                <span className="btn-round-xss ms-0 bg-warning me-2"></span>
                                                <span className="btn-round-sm bg-gold-gradiant me-2 ls-3 text-white font-xssss fw-700">V</span>  
                                                <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">David Goria</h6>
                                            </div>
                                            <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                                                <i className="feather-star font-xss text-warning me-2"></i>
                                                Mobile Apps Redesign
                                            </div>
                                            <div className="email-text text-grey-500 fw-600 font-xssss">
                                                Hey Cak, Could you free now? Can you look and read the brief first before...
                                            </div>
                                            <span className="email-file">
                                                
                                            </span>
                                            <div className="email-time text-grey-500 fw-600">12:48PM</div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/email/open' className="rounded-3 bg-transparent">
                                            <div className="form-check mt-1">
                                                <input className="form-check-input" type="checkbox" id="blankCheckbox7" defaultValue="option1" aria-label="" />
                                                <label className="text-grey-500 font-xssss" htmlFor="blankCheckbox7"></label>
                                            </div>
                                            <div className="email-user">
                                                <span className="btn-round-xss ms-0 bg-success me-2"></span>
                                                <img src="/assets/images/user-3.png" alt="user" className="w35 me-2" />  
                                                <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">Seary Victor</h6>
                                            </div>
                                            <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                                                <i className="feather-star font-xss text-warning me-2"></i>
                                                Mobile Apps Redesign
                                            </div>
                                            <div className="email-text text-grey-500 fw-600 font-xssss">
                                                Hey Cak, Could you free now? Can you look and read the brief first before...
                                            </div>
                                            <span className="email-file">
                                                <i className="feather-paperclip font-xss btn-round-sm text-grey-500 me-2 p-0"></i>
                                            </span>
                                            <div className="email-time text-grey-500 fw-600">12:48PM</div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/email/open' className="rounded-3 bg-transparent">
                                            <div className="form-check mt-1">
                                                <input className="form-check-input" type="checkbox" id="blankCheckbox8" defaultValue="option1" aria-label="" />
                                                <label className="text-grey-500 font-xssss" htmlFor="blankCheckbox8"></label>
                                            </div>
                                            <div className="email-user">
                                                <span className="btn-round-xss ms-0 bg-warning me-2"></span>
                                                <img src="/assets/images/user-2.png" alt="user" className="w35 me-2" />  
                                                <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">Ana Seary</h6>
                                            </div>
                                            <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                                                <i className="feather-star font-xss text-warning me-2"></i>
                                                Mobile Apps Redesign
                                            </div>
                                            <div className="email-text text-grey-500 fw-600 font-xssss">
                                                Hey Cak, Could you free now? Can you look and read the brief first before...
                                            </div>
                                            <span className="email-file">
                                                
                                            </span>
                                            <div className="email-time text-grey-500 fw-600">12:48PM</div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/email/open' className="rounded-3 bg-transparent">
                                            <div className="form-check mt-1">
                                                <input className="form-check-input" type="checkbox" id="blankCheckbox9" defaultValue="option1" aria-label="" />
                                                <label className="text-grey-500 font-xssss" htmlFor="blankCheckbox9"></label>
                                            </div>
                                            <div className="email-user">
                                                <span className="btn-round-xss ms-0 bg-success me-2"></span>
                                                <span className="btn-round-sm bg-primary-gradiant me-2 ls-3 text-white font-xssss fw-700">UD</span>
                                                <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">Studio Express</h6>
                                            </div>
                                            <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                                                <i className="feather-star font-xss text-warning me-2"></i>
                                                Mobile Apps Redesign
                                            </div>
                                            <div className="email-text text-grey-500 fw-600 font-xssss">
                                                Hey Cak, Could you free now? Can you look and read the brief first before...
                                            </div>
                                            <span className="email-file">
                                                <i className="feather-paperclip font-xss btn-round-sm text-grey-500 me-2 p-0"></i>
                                            </span>
                                            <div className="email-time text-grey-500 fw-600">12:48PM</div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/email/open' className="rounded-3 bg-lightblue theme-light-bg">
                                            <div className="form-check mt-1">
                                                <input className="form-check-input" type="checkbox" id="blankCheckbox10" defaultValue="option1" aria-label="" />
                                                <label className="text-grey-500 font-xssss" htmlFor="blankCheckbox10"></label>
                                            </div>
                                            <div className="email-user">
                                                <span className="btn-round-xss ms-0 bg-warning me-2"></span>
                                                <span className="btn-round-sm bg-gold-gradiant me-2 ls-3 text-white font-xssss fw-700">V</span>  
                                                <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">David Goria</h6>
                                            </div>
                                            <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                                                <i className="feather-star font-xss text-warning me-2"></i>
                                                Mobile Apps Redesign
                                            </div>
                                            <div className="email-text text-grey-500 fw-600 font-xssss">
                                                Hey Cak, Could you free now? Can you look and read the brief first before...
                                            </div>
                                            <span className="email-file">
                                                
                                            </span>
                                            <div className="email-time text-grey-500 fw-600">12:48PM</div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/email/open' className="rounded-3 bg-transparent">
                                            <div className="form-check mt-1">
                                                <input className="form-check-input" type="checkbox" id="blankCheckbox11" defaultValue="option1" aria-label="" />
                                                <label className="text-grey-500 font-xssss" htmlFor="blankCheckbox11"></label>
                                            </div>
                                            <div className="email-user">
                                                <span className="btn-round-xss ms-0 bg-success me-2"></span>
                                                <img src="/assets/images/user-3.png" alt="user" className="w35 me-2" />  
                                                <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">Seary Victor</h6>
                                            </div>
                                            <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                                                <i className="feather-star font-xss text-warning me-2"></i>
                                                Mobile Apps Redesign
                                            </div>
                                            <div className="email-text text-grey-500 fw-600 font-xssss">
                                                Hey Cak, Could you free now? Can you look and read the brief first before...
                                            </div>
                                            <span className="email-file">
                                                <i className="feather-paperclip font-xss btn-round-sm text-grey-500 me-2 p-0"></i>
                                            </span>
                                            <div className="email-time text-grey-500 fw-600">12:48PM</div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/email/open' className="rounded-3 bg-transparent">
                                            <div className="form-check mt-1">
                                                <input className="form-check-input" type="checkbox" id="blankCheckbox12" defaultValue="option1" aria-label="" />
                                                <label className="text-grey-500 font-xssss" htmlFor="blankCheckbox12"></label>
                                            </div>
                                            <div className="email-user">
                                                <span className="btn-round-xss ms-0 bg-warning me-2"></span>
                                                <img src="/assets/images/user-2.png" alt="user" className="w35 me-2" />  
                                                <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">Ana Seary</h6>
                                            </div>
                                            <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                                                <i className="feather-star font-xss text-warning me-2"></i>
                                                Mobile Apps Redesign
                                            </div>
                                            <div className="email-text text-grey-500 fw-600 font-xssss">
                                                Hey Cak, Could you free now? Can you look and read the brief first before...
                                            </div>
                                            <span className="email-file">
                                                
                                            </span>
                                            <div className="email-time text-grey-500 fw-600">12:48PM</div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/email/open' className="rounded-3 bg-transparent">
                                            <div className="form-check mt-1">
                                                <input className="form-check-input" type="checkbox" id="blankCheckbox13" defaultValue="option1" aria-label="" />
                                                <label className="text-grey-500 font-xssss" htmlFor="blankCheckbox13"></label>
                                            </div>
                                            <div className="email-user">
                                                <span className="btn-round-xss ms-0 bg-success me-2"></span>
                                                <span className="btn-round-sm bg-primary-gradiant me-2 ls-3 text-white font-xssss fw-700">UD</span>
                                                <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">Studio Express</h6>
                                            </div>
                                            <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                                                <i className="feather-star font-xss text-warning me-2"></i>
                                                Mobile Apps Redesign
                                            </div>
                                            <div className="email-text text-grey-500 fw-600 font-xssss">
                                                Hey Cak, Could you free now? Can you look and read the brief first before...
                                            </div>
                                            <span className="email-file">
                                                <i className="feather-paperclip font-xss btn-round-sm text-grey-500 me-2 p-0"></i>
                                            </span>
                                            <div className="email-time text-grey-500 fw-600">12:48PM</div>
                                        </Link>
                                    </li>
                                </ul>                                 
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

\
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









export default Email;