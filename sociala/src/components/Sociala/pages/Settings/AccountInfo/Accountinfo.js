import React, { useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {updateUsers,getUserByid} from "../../../../../services/userService/userService";

import {useSelector} from "react-redux"

import Header from '../../../shared/Header/Header';
import LeftSection from '../../../shared/left/LeftSection/LeftSection';
import Contact from '../../../shared/very_right/Contact/Contact';
import Group from '../../../shared/very_right/Group/Group';
import Pages from '../../../shared/very_right/Pages/Pages';
import FooterBar from '../../../shared/FooterBar/FooterBar';


export const Accountinfo = () => {
    let navigate = useNavigate();
    let state = useSelector(state=>state.UserReducer)
let form = new FormData();
let Image = (e) => {
    form.append("photo",e.target.files[0]);
}
let [user, setUser] = useState({
    userName : "",
    email : "",
    intrest : "",
    phone : "",
    address: "",
    city : "",
    country : "",
    bio: "",
    image : ""
})
let update = () => {
    form.append("data",JSON.stringify(user))
    updateUsers(state._id, form).then(result=> {
        navigate("/auth/setting/account/info")
    });
}

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
                                <h4 className="font-xs text-white fw-600 ms-4 mb-0 mt-2">Account Details</h4>
                            </div>
                            <div className="card-body p-lg-5 p-4 w-100 border-0 ">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 text-center">
                                    <figure className="avatar ms-auto me-auto mb-0 mt-2 w100"><img src={state.image} alt="image" className="shadow-sm rounded-3 w-100" /></figure>
<h2 className="fw-700 font-sm text-grey-900 mt-3">{state.userName}</h2> 
                                    <h4 className="text-grey-500 fw-500 mb-3 font-xsss mb-4">Brooklyn</h4>    
                                    {/* <!-- <a href="#" className="p-3 alert-primary text-primary font-xsss fw-500 mt-2 rounded-3">Upload New Photo</a> --> */}
                                </div>
                            </div>

                            <form>
                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <div className="form-group">
                                            <label className="mont-font fw-600 font-xsss">User Name</label>
                                            <input type="text" className="form-control" onChange={(e)=> setUser((data)=> {
                                                return {...data , userName : e.target.value}
                                            })} />
                                        </div>        
                                    </div>

                                    <div className="col-lg-6 mb-3">
                                        <div className="form-group">
                                            <label className="mont-font fw-600 font-xsss">Intrest</label>
                                            <select name="" className='form-control' onChange={(e)=> setUser((data)=> {
                                                return {...data , intrest : e.target.value}
                                            })}>
                                                <option value="">Select</option>
                                                <option value="1">1</option>
                                            </select>
                                        </div>        
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <div className="form-group">
                                            <label className="mont-font fw-600 font-xsss">Email</label>
                                            <input type="text" className="form-control" onChange={(e)=> setUser((data)=> {
                                                return {...data , email : e.target.value}
                                            })} />
                                        </div>        
                                    </div>

                                    <div className="col-lg-6 mb-3">
                                        <div className="form-group">
                                            <label className="mont-font fw-600 font-xsss">Phone</label>
                                            <input type="text" className="form-control" onChange={(e)=> setUser((data)=> {
                                                return {...data , phone : e.target.value}
                                            })} />
                                        </div>        
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12 mb-3">
                                        <div className="form-group">
                                            <label className="mont-font fw-600 font-xsss">Address</label>
                                            <input type="text" className="form-control" onChange={(e)=> setUser((data)=> {
                                                return {...data , address : e.target.value}
                                            })} />
                                        </div>        
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <div className="form-group">
                                            <label className="mont-font fw-600 font-xsss">Town / City</label>
                                            <select name="" className='form-control' onChange={(e)=> setUser((data)=> {
                                                return {...data , city : e.target.value}
                                            })} >
                                                <option value="">Select</option>
                                                <option value="1">1</option>
                                            </select>
                                        </div>        
                                    </div>

                                    <div className="col-lg-6 mb-3">
                                        <div className="form-group">
                                            <label className="mont-font fw-600 font-xsss">Country</label>
                                            <select name="" className='form-control' onChange={(e)=> setUser((data)=> {
                                                return {...data , country : e.target.value}
                                            })}>
                                                <option value="">Select</option>
                                                <option value="1">1</option>
                                            </select>
                                        </div>        
                                    </div>

                                    <div className="col-lg-12 mb-3">
                                        <div className="card mt-3 border-0">
                                            <div className="card-body d-flex justify-content-between align-items-end p-0">
                                                <div className="form-group mb-0 w-100">
                                                    <input type="file" name="file" id="file" className="input-file" onChange={Image} />
                                                    <label htmlFor="file" className="rounded-3 text-center bg-white btn-tertiary js-labelFile p-4 w-100 border-dashed">
                                                    <i className="ti-cloud-down large-icon me-3 d-block"></i>
                                                    <span className="js-fileName">Drag and drop or click to replace</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mb-3">
                                        <label className="mont-font fw-600 font-xsss">Bio</label>
                                        <textarea className="form-control mb-0 p-3 h100 bg-greylight lh-16" rows="5" placeholder="Write your message..." spellCheck="false" onChange={(e)=> setUser((data)=> {
                                                return {...data , bio : e.target.value}
                                            })}></textarea>
                                    </div>

                                    <div className="col-lg-12">
                                        <a href="#" className="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-3 d-inline-block" onClick={update}>Save</a>
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

export default Accountinfo;