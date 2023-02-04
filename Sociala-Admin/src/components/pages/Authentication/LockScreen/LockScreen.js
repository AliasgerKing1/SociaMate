import React, { useState } from 'react';
import {useNavigate,Link} from 'react-router-dom';

import { useSelector } from 'react-redux';

import { checkPass } from '../../../../Services/LockScreenService/LockScreenService';

import PortalLogo from '../../../shared/PortalLogo/PortalLogo';
import PortalTitle from '../../../shared/Poraltitle/PortalTitle';
import Footer from '../../../shared/Footer/Footer';
import { AlertDanger } from '../../../../shared/Alerts/Alerts';

const LockScreen = () => {
    let state = useSelector(state=>state.AdminReducer)
    let navigate = useNavigate();
    let [password,setPassword] = useState("");
    let [showAlert, setShowAlert] = useState(false);
    let [msg, setMsg] = useState("");
    let obj = {
        password : password
    }
    let unLock = () => {
checkPass(obj).then(result=> {
    if (result.data.errType === 2) {
        setMsg("Admin this Password is incorrect !");
        setShowAlert(true);
    }
    if(result.data.status === 200) {
        localStorage.setItem("Admintoken", result.data.Admintoken);
        navigate("/admin/setting/auth/profile")
    }
})
    }
  return (
    <>
    <div className="auth-page-wrapper pt-5">
         {/* <!-- auth page bg --> */}
<PortalLogo/>

{/* <!-- auth page content --> */}
<div className="auth-page-content">
  <div className="container">
  <PortalTitle/>
    {/* <!-- end row --> */}

                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card mt-4">

                            <div className="card-body p-4">
                                <div className="text-center mt-2">
                                    <h5 className="text-primary">Lock Screen</h5>
                                    <p className="text-muted">Enter your password to unlock the screen!</p>
                                </div>
                                <div className="user-thumb text-center">
                                    <img src={state.image} className="rounded-circle img-thumbnail avatar-lg" alt="thumbnail" />
                                    <h5 className="font-size-15 mt-3">{state.name}</h5>
                                </div>
                                <div className="p-2 mt-4">
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="userpassword">Password</label>
                                            <input type="password" className="form-control" id="userpassword" placeholder="Enter password" onChange={(e)=> setPassword(e.target.value)} />
                                        </div>
                                        <div className="mb-2 mt-4">
                                            <a href='#' className="btn btn-success w-100" type="submit" onClick={unLock}>Unlock</a>
                                        </div>
                                        {
                                        showAlert ? (<AlertDanger msg={msg} />) : ""
                                      }
                                    </form>
                                    
                                    {/* <!-- end form --> */}

                                </div>
                            </div>
                            {/* <!-- end card body --> */}
                        </div>
                        {/* <!-- end card --> */}
                        <div className="mt-4 text-center">
                            <p className="mb-0">Not you ? return <Link to="/admin/analytics" className="fw-semibold text-primary text-decoration-underline"> Dashboard </Link> </p>
                        </div>
                    </div>
                </div>
                {/* <!-- end row --> */}
            </div>
            {/* <!-- end container --> */}
        </div>
        {/* <!-- end auth page content --> */}

        {/* <!-- footer --> */}
        <Footer/>
        {/* <!-- end Footer --> */}
    </div>
    {/* <!-- end auth-page-wrapper --> */}

    </>
  )
}

export default LockScreen