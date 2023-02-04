import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../shared/Header/Header';
import LeftSection from '../../../shared/left/LeftSection/LeftSection';
import Contact from '../../../shared/very_right/Contact/Contact';
import Group from '../../../shared/very_right/Group/Group';
import Pages from '../../../shared/very_right/Pages/Pages';
import FooterBar from '../../../shared/FooterBar/FooterBar';


const initialValues = {};
export const Password = () => {
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
        <div className="main-content bg-lightblue theme-dark-bg right-chat-active">
            
            <div className="middle-sidebar-bottom">
                <div className="middle-sidebar-left">
                    <div className="middle-wrap">
                        <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                            <div className="card-body p-4 w-100 bg-current border-0 d-flex rounded-3">
                                <Link to="/auth/setting" className="d-inline-block mt-2"><i className="ti-arrow-left font-sm text-white"></i></Link>
                                <h4 className="font-xs text-white fw-600 ms-4 mb-0 mt-2">Change Password</h4>
                            </div>
                            <div className="card-body p-lg-5 p-4 w-100 border-0">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-12 mb-3">
                                            <div className="form-gorup">
                                                <label className="mont-font fw-600 font-xssss">Current Password</label>
                                                <input type="text" name="comment-name" className="form-control" />
                                            </div>        
                                        </div>

                                        <div className="col-lg-12 mb-3">
                                            <div className="form-gorup">
                                                <label className="mont-font fw-600 font-xssss">Change Password</label>
                                                <input type="text" name="comment-name" className="form-control" />
                                            </div>        
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12 mb-3">
                                            <div className="form-gorup">
                                                <label className="mont-font fw-600 font-xssss">Confirm Change Password</label>
                                                <input type="text" name="comment-name" className="form-control" />
                                            </div>        
                                        </div>                                     
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 mb-0">
                                            <a href="#" className="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-3 d-inline-block">Save</a>
                                        </div>
                                    </div>

                                     
                                    </form>
                            </div>
                        </div>
                        {/* <!-- <div className="card w-100 border-0 p-2"></div> --> */}
                    </div>
                </div>
                 
            </div>            
        </div>
        {/* <!-- main content --> */}

        {/* <!-- right chat --> */}
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
</div>
    </div>
  )
}

export default Password;