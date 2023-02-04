import React from 'react';
import Header from '../../shared/Header/Header';
import LeftSection from '../../shared/left/LeftSection/LeftSection';
import Contact from '../../shared/very_right/Contact/Contact';
import Group from '../../shared/very_right/Group/Group';
import Pages from '../../shared/very_right/Pages/Pages';
import FooterBar from "../../shared/FooterBar/FooterBar";

function Chat() {
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
                           

                        <div className="col-lg-12 position-relative">
                            <div className="chat-wrapper pt-0 w-100 position-relative scroll-bar bg-white theme-dark-bg">
                                <div className="chat-body p-3 ">
                                    <div className="messages-content pb-5">
                                        <div className="message-item">
                                            <div className="message-user">
                                                <figure className="avatar">
                                                    <img src="/assets/images/user-9.png" alt="image" />
                                                </figure>
                                                <div>
                                                    <h5>Byrom Guittet</h5>
                                                    <div className="time">01:35 PM</div>
                                                </div>
                                            </div>
                                            <div className="message-wrap">I'm fine, how are you 😃</div>
                                        </div>

                                        <div className="message-item outgoing-message">
                                            <div className="message-user">
                                                <figure className="avatar">
                                                    <img src="/assets/images/user-1.png" alt="image" />
                                                </figure>
                                                <div>
                                                    <h5>Byrom Guittet</h5>
                                                    <div className="time">01:35 PM<i className="ti-double-check text-info"></i></div>
                                                </div>
                                            </div>
                                            <div className="message-wrap">I want those files for you. I want you to send 1 PDF and 1 image file.</div>
                                        </div>

                                        <div className="message-item">
                                            <div className="message-user">
                                                <figure className="avatar">
                                                    <img src="/assets/images/user-9.png" alt="image" />
                                                </figure>
                                                <div>
                                                    <h5>Byrom Guittet</h5>
                                                    <div className="time">01:35 PM</div>
                                                </div>
                                            </div>
                                            <div className="message-wrap">I've found some cool photos for our travel app.</div>
                                        </div>

                                        <div className="message-item outgoing-message">
                                            <div className="message-user">
                                                <figure className="avatar">
                                                    <img src="/assets/images/user-1.png" alt="image" />
                                                </figure>
                                                <div>
                                                    <h5>Byrom Guittet</h5>
                                                    <div className="time">01:35 PM<i className="ti-double-check text-info"></i></div>
                                                </div>
                                            </div>
                                            <div className="message-wrap">Hey mate! How are things going ?</div>
                                        </div>

                                        <div className="message-item">
                                            <div className="message-user">
                                                <figure className="avatar">
                                                    <img src="/assets/images/user-9.png" alt="image" />
                                                </figure>
                                                <div>
                                                    <h5>Byrom Guittet</h5>
                                                    <div className="time">01:35 PM</div>
                                                </div>
                                            </div>
                                            <figure>
                                                <img src="/assets/images/bb-9.jpg" className="w-25 img-fluid rounded-3" alt="image" />
                                            </figure>
                                            
                                        
                                        </div>

                                        <div className="message-item outgoing-message">
                                            <div className="message-user">
                                                <figure className="avatar">
                                                    <img src="/assets/images/user-1.png" alt="image" />
                                                </figure>
                                                <div>
                                                    <h5>Byrom Guittet</h5>
                                                    <div className="time">01:35 PM<i className="ti-double-check text-info"></i></div>
                                                </div>
                                            </div>
                                            <div className="message-wrap" style={{marginBottom: '90px'}}>Hey mate! How are things going ?</div>

                                        </div>
                                        <div className="clearfix"></div>


                                    </div>
                                </div>
                            </div>
                            <div className="chat-bottom dark-bg p-3 shadow-none theme-dark-bg" style={{width: '98%'}}>
                                <form className="chat-form">
                                    <button className="bg-grey float-left"><i className="ti-microphone text-grey-600"></i></button>
                                    <div className="form-group"><input type="text" placeholder="Start typing.." /></div>          
                                    <button className="bg-current"><i className="ti-arrow-right text-white"></i></button>
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

export default Chat;