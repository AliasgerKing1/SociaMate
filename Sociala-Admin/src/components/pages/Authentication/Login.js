import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import {useFormik} from "formik";

import LoginSchema from '../../../Schemas/LoginSchema';

import Text from "../../shared/AllInputTypes/Text";
import Password from '../../shared/AllInputTypes/Password';
import FormErrors from '../../shared/Errors/FormErrors';

import { AlertDanger } from '../../../shared/Alerts/Alerts';

import {DoLogin} from ".././../../Services/loginAuthService/loginAuthService";

let initialValues = {
username : "",
password : ""
}
const Login = () => {
    let navigate = useNavigate();
    let [showAlert, setShowAlert] = useState(false);
    let [msg, setMsg] = useState("");
    let {values, handleBlur, handleChange, errors, touched, handleSubmit} = useFormik({
initialValues : initialValues,
validationSchema : LoginSchema,
onSubmit : ()=> {
    DoLogin(values).then(result=> {
        if (result.data.errType === 1) {
            setMsg("This email/username or password is incorrect !");
            setShowAlert(true);
        }
        if (result.data.errType === 2) {
            setMsg("This Password is incorrect !");
            setShowAlert(true);
        }
        if(result.data.status === 200) {
            localStorage.setItem("token", result.data.token);
            navigate("/admin/analytics")
        }
    })
}
    })
  return (
    <>
    {/* <!-- auth-page wrapper --> */}
    <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div className="bg-overlay"></div>
        {/* <!-- auth-page content --> */}
        <div className="auth-page-content overflow-hidden pt-lg-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card overflow-hidden">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="p-lg-5 p-4 auth-one-bg h-100">
                                        <div className="bg-overlay"></div>
                                        <div className="position-relative h-100 d-flex flex-column">
                                            <div className="mb-4">
                                                <a href="index.html" className="d-block">
                                                    <img src="/assets/images/logo-light.png" alt="" height="18" />
                                                </a>
                                            </div>
                                            <div className="mt-auto">
                                                <div className="mb-3">
                                                    <i className="ri-double-quotes-l display-4 text-success"></i>
                                                </div>

                                                <div id="qoutescarouselIndicators" className="carousel slide" data-bs-ride="carousel">
                                                    <div className="carousel-indicators">
                                                        <button type="button" data-bs-target="#qoutescarouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                        <button type="button" data-bs-target="#qoutescarouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                        <button type="button" data-bs-target="#qoutescarouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                    </div>
                                                    <div className="carousel-inner text-center text-white pb-5">
                                                        <div className="carousel-item active">
                                                            <p className="fs-15 fst-italic">" Great! Clean code, clean design, easy for customization. Thanks very much! "</p>
                                                        </div>
                                                        <div className="carousel-item">
                                                            <p className="fs-15 fst-italic">" The theme is really great with an amazing customer support."</p>
                                                        </div>
                                                        <div className="carousel-item">
                                                            <p className="fs-15 fst-italic">" Great! Clean code, clean design, easy for customization. Thanks very much! "</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- end carousel --> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end col --> */}

                                <div className="col-lg-6">
                                    <div className="p-lg-5 p-4">
                                        <div>
                                            <h5 className="text-primary">Welcome Back !</h5>
                                            <p className="text-muted">Sign in to continue to SociaMate Portal.</p>
                                        </div>

                                        <div className="mt-4">
                                            <form onSubmit={handleSubmit}>

                                                <div className="mb-3">
                                                    <label htmlFor="username" className="form-label">Username</label>
                                                    <Text name="username" autoComplete="off" placeholder="Username" change={handleChange} blur={handleBlur} classes={"form-control " + (errors.username && touched.username ? "is-invalid" : "")}/>
<FormErrors errMsg={errors.username} touched={touched.username}/>
                                                </div>

                                                <div className="mb-3">
                                                    <div className="float-end">
                                                        <a href="auth-pass-reset-cover.html" className="text-muted">Forgot password?</a>
                                                    </div>
                                                    <label className="form-label" htmlFor="password-input">Password</label>
                                                    <div className="position-relative auth-pass-inputgroup mb-3">
                                                    <Password name="password" classes={"form-control " + (errors.password && touched.password ? "is-invalid" : "")} placeholder="Enter password" change={handleChange} blur={handleBlur} id="password-input" value=""/>
                                                    <FormErrors errMsg={errors.password} touched={touched.password}/>  
                                                        {/* <input type="password" className="form-control pe-5 password-input" placeholder="Enter password" name='password' id="password-input" /> */}
                                                        <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></button>
                                                    </div>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                                                    <label className="form-check-label" htmlFor="auth-remember-check">Remember me</label>
                                                </div>

                                                <div className="mt-4">
                                                    <button className="btn btn-success w-100" type="submit">Sign In</button>
                                                </div>

                                                <div className="mt-4 text-center">
                                                    <div className="signin-other-title">
                                                        <h5 className="fs-13 mb-4 title">Sign In with</h5>
                                                    </div>

                                                    <div>
                                                        <button type="button" className="btn btn-primary btn-icon waves-effect waves-light"><i className="ri-facebook-fill fs-16 "></i></button>
                                                        <button type="button" className="btn btn-danger btn-icon waves-effect waves-light ms-2"><i className="ri-google-fill fs-16"></i></button>
                                                        <button type="button" className="btn btn-dark btn-icon waves-effect waves-light ms-2"><i className="ri-github-fill fs-16"></i></button>
                                                        <button type="button" className="btn btn-info btn-icon waves-effect waves-light ms-2"><i className="ri-twitter-fill fs-16"></i></button>
                                                    </div>
                                                </div>
                                      {
                                        showAlert ? (<AlertDanger msg={msg} />) : ""
                                      }
                                                
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end col --> */}
                            </div>
                            {/* <!-- end row --> */}
                        </div>
                        {/* <!-- end card --> */}
                    </div>
                    {/* <!-- end col --> */}

                </div>
                {/* <!-- end row --> */}
            </div>
            {/* <!-- end container --> */}
        </div>
        {/* <!-- end auth page content --> */}

        {/* <!-- footer --> */}
        <footer className="footer start-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <p className="mb-0">&copy;
                                    2023 SociaMate
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!-- end Footer --> */}
    </div>
    {/* <!-- end auth-page-wrapper --> */}
    </>
  )
}

export default Login