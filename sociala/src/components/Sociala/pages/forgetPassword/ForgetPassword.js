import React from 'react'

const ForgetPassword = () => {
  return (
    <div>
<div className="color-theme-blue">

    {/* <div className="preloader"></div> */}

    <div className="main-wrap">


        <div className="nav-header bg-transparent shadow-none border-0">
            <div className="nav-top w-100">
                <a href="index.html"><i className="feather-zap text-success display1-size me-2 ms-0"></i><span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">Sociala. </span> </a>
                <a href="#" className="mob-menu ms-auto me-2 chat-active-btn"><i className="feather-message-circle text-grey-900 font-sm btn-round-md bg-greylight"></i></a>
                <a href="default-video.html" className="mob-menu me-2"><i className="feather-video text-grey-900 font-sm btn-round-md bg-greylight"></i></a>
                <a href="#" className="me-2 menu-search-icon mob-menu"><i className="feather-search text-grey-900 font-sm btn-round-md bg-greylight"></i></a>
                <button className="nav-menu me-0 ms-2"></button>
            </div>
        </div>

        <div className="row">
            <div className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat" style={{backgroundImage: 'url(/assets/images/login-bg-2.jpg)'}}></div>
            <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
                <div className="card shadow-none border-0 ms-auto me-auto login-card">
                    <div className="card-body rounded-0 text-left">
                        <h2 className="fw-700 display1-size display2-md-size mb-4">Change <br />your password</h2>                        
                        <form>
                            
                            <div className="form-group icon-input mb-1">
                                <input type="Password" className="style2-input ps-5 form-control text-grey-900 font-xss ls-3" placeholder="New Password" />
                                <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                            </div>
                            <div className="form-group icon-input mb-1">
                                <input type="Password" className="style2-input ps-5 form-control text-grey-900 font-xss ls-3" placeholder="Confirm New Password" />
                                <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                            </div>
                            <div className="form-check text-left mb-3">
                                <input type="checkbox" className="form-check-input mt-2" id="exampleCheck4" style={{cursor : 'pointer'}} />
                                <label className="form-check-label font-xsss text-grey-500" htmlFor="exampleCheck4">Accept Term and Conditions</label>
                                {/* <!-- <a href="#" className="fw-600 font-xsss text-grey-700 mt-1 float-right">Forgot your Password?</a> --> */}
                            </div>
                        </form>
                         
                        <div className="col-sm-12 p-0 text-left">
                            <div className="form-group mb-1"><a href="login.html" className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 ">Change Password</a></div>
                            
                        </div>
                         
                    </div>
                </div> 
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default ForgetPassword;