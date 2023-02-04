import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Header from '../../shared/Header/Header';
import LeftSection from '../../shared/left/LeftSection/LeftSection';
import Contact from '../../shared/very_right/Contact/Contact';
import Group from '../../shared/very_right/Group/Group';
import Pages from '../../shared/very_right/Pages/Pages';
import FooterBar from "../../shared/FooterBar/FooterBar";

let Shop = () => {
    let [navLink5, setNavLink5] = useState(false);
    let demo = ()=> {
        setNavLink5(true);
          }
    
  return (
    <div  onLoad={demo}>
<div className="color-theme-blue mont-font">

    {/* <div className="preloader"></div> */}

    
    <div className="main-wrapper">

        {/* <!-- navigation top--> */}
        <Header navLink5={navLink5} />
          {/* <!-- navigation top --> */}

          {/* <!-- navigation left --> */}
         

            <LeftSection/>


          {/* <!-- navigation left --> */}
        {/* <!-- main content --> */}
        <div className="main-content bg-white right-chat-active">
            
            <div className="middle-sidebar-bottom">
                <div className="middle-sidebar-left pe-0">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card p-md-5 p-4 bg-primary-gradiant rounded-3 shadow-xss bg-pattern border-0 overflow-hidden">
                                        <div className="bg-pattern-div"></div>
                                        <h2 className="display2-size display2-md-size fw-700 text-white mb-0 mt-0">Shop <span className="fw-700 ls-3 text-grey-200 font-xsssss mt-2 d-block">32 PRODUCT FOUND</span></h2>
                                    </div>
                                </div>

                                <div className="col-lg-12 mt-4">
                                    <div className="card w-100 p-4 border-0 bg-lightblue">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div className="form-group mb-0">
                                                    <label htmlFor="Search" className="fw-600 text-grey-900 font-xsss">Categories</label>
                                                </div>
                                                <ul className="recent-post mt-2">
                                                    <li className="mb-0"><a href="#" className="fw-600 font-xssss">Drress</a></li>
                                                    <li className="mb-0"><a href="#" className="fw-600 font-xssss">Shirt</a></li>
                                                    <li className="mb-0"><a href="#" className="fw-600 font-xssss">Jacket</a></li>
                                                    <li className="mb-0"><a href="#" className="fw-600 font-xssss">Jean</a></li>
                                                    <li className="mb-0"><a href="#" className="fw-600 font-xssss">Men</a></li>
                                                    <li className="mb-0"><a href="#" className="fw-600 font-xssss">Shorts</a></li>
                                                    <li className="mb-0"><a href="#" className="fw-600 font-xssss">Swimwear</a></li>
                                                    <li className="mb-0"><a href="#" className="fw-600 font-xssss">Tousers</a></li>
                                                    <li className="mb-0"><a href="#" className="fw-600 font-xssss">Jumper Cardigans</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3 pe-4">
                                                <div className="form-group mb-0">
                                                    <label htmlFor="Search" className="fw-600 text-grey-900 font-xsss">Brand</label>
                                                </div>
                                                <div className="form-group mb-2 mt-2">
                                                    <div className="custom-control me-0 custom-radio size-sm custom-control-inline d-block">
                                                        <input type="radio" className="custom-control-input" id="customRadio1" name="Depart" defaultValue="customEx" defaultChecked="" />
                                                        <label className="custom-control-label small-size fw-600 text-grey-800 font-xssss d-block" htmlFor="customRadio1">Addidas<span className="float-right fw-600 text-grey-600 font-xssss mt-1">12</span></label>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-2">
                                                    <div className="custom-control me-0 custom-radio size-sm custom-control-inline d-block">
                                                        <input type="radio" className="custom-control-input" id="customRadio5" name="Depart" defaultValue="customEx" />
                                                        <label className="custom-control-label small-size fw-600 text-grey-800 font-xssss d-block" htmlFor="customRadio5">Levis <span className="float-right fw-600 text-grey-600 font-xssss mt-1">15</span></label>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-2">
                                                    <div className="custom-control me-0 custom-radio size-sm custom-control-inline d-block">
                                                        <input type="radio" className="custom-control-input" id="customRadio3" name="Depart" defaultValue="customEx" />
                                                        <label className="custom-control-label small-size fw-600 text-grey-800 font-xssss d-block" htmlFor="customRadio3">Cape Town <span className="float-right fw-600 text-grey-600 font-xssss mt-1">7</span></label>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-2">
                                                    <div className="custom-control me-0 custom-radio size-sm custom-control-inline d-block">
                                                        <input type="radio" className="custom-control-input" id="customRadio4" name="Depart" defaultValue="customEx" />
                                                        <label className="custom-control-label small-size fw-600 text-grey-800 font-xssss d-block" htmlFor="customRadio4">Nikes <span className="float-right fw-600 text-grey-600 font-xssss mt-1">34</span></label>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-2 mt-2">
                                                    <div className="custom-control me-0 custom-radio size-sm custom-control-inline d-block">
                                                        <input type="radio" className="custom-control-input" id="customRadio1" name="Depart" defaultValue="customEx" defaultChecked="" />
                                                        <label className="custom-control-label small-size fw-600 text-grey-800 font-xssss d-block" htmlFor="customRadio1">Addidas<span className="float-right fw-600 text-grey-600 font-xssss mt-1">12</span></label>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-2">
                                                    <div className="custom-control me-0 custom-radio size-sm custom-control-inline d-block">
                                                        <input type="radio" className="custom-control-input" id="customRadio5" name="Depart" defaultValue="customEx" />
                                                        <label className="custom-control-label small-size fw-600 text-grey-800 font-xssss d-block" htmlFor="customRadio5">Levis <span className="float-right fw-600 text-grey-600 font-xssss mt-1">15</span></label>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-2">
                                                    <div className="custom-control me-0 custom-radio size-sm custom-control-inline d-block">
                                                        <input type="radio" className="custom-control-input" id="customRadio3" name="Depart" defaultValue="customEx" />
                                                        <label className="custom-control-label small-size fw-600 text-grey-800 font-xssss d-block" htmlFor="customRadio3">Cape Town <span className="float-right fw-600 text-grey-600 font-xssss mt-1">7</span></label>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-2">
                                                    <div className="custom-control me-0 custom-radio size-sm custom-control-inline d-block">
                                                        <input type="radio" className="custom-control-input" id="customRadio4" name="Depart" defaultValue="customEx" />
                                                        <label className="custom-control-label small-size fw-600 text-grey-800 font-xssss d-block" htmlFor="customRadio4">Nikes <span className="float-right fw-600 text-grey-600 font-xssss mt-1">34</span></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="form-group mb-0">
                                                    <label htmlFor="Search" className="fw-600 text-grey-900 font-xsss">Size</label>
                                                </div>
                                                <ul className="list-inline mt-2">
                                                    <li className="list-inline-item me-0 mb-2"><a href="#" className="btn-round-sm bg-white fw-600 font-xssss text-grey-800 ">XS</a></li>
                                                    <li className="list-inline-item me-0 mb-2"><a href="#" className="btn-round-sm bg-white fw-600 font-xssss text-grey-800 ">S</a></li>
                                                    <li className="list-inline-item me-0 mb-2"><a href="#" className="btn-round-sm bg-white fw-600 font-xssss text-grey-800 ">SM</a></li>
                                                    <li className="list-inline-item me-0 mb-2"><a href="#" className="btn-round-sm bg-white fw-600 font-xssss text-grey-800 ">M</a></li>
                                                    <li className="list-inline-item me-0 mb-2"><a href="#" className="btn-round-sm bg-white fw-600 font-xssss text-grey-800 ">L</a></li>
                                                    <li className="list-inline-item me-0 mb-2"><a href="#" className="btn-round-sm bg-white fw-600 font-xssss text-grey-800 ">XL</a></li>                                               
                                                    <li className="list-inline-item me-0 mb-2"><a href="#" className="btn-round-sm bg-white fw-600 font-xssss text-grey-800 ">XS</a></li>
                                                    <li className="list-inline-item me-0 mb-2"><a href="#" className="btn-round-sm bg-white fw-600 font-xssss text-grey-800 ">S</a></li>
                                                    <li className="list-inline-item me-0 mb-2"><a href="#" className="btn-round-sm bg-white fw-600 font-xssss text-grey-800 ">SM</a></li>
                                                    <li className="list-inline-item me-0 mb-2"><a href="#" className="btn-round-sm bg-white fw-600 font-xssss text-grey-800 ">M</a></li>
                                                    <li className="list-inline-item me-0 mb-2"><a href="#" className="btn-round-sm bg-white fw-600 font-xssss text-grey-800 ">L</a></li>
                                                    <li className="list-inline-item me-0 mb-2"><a href="#" className="btn-round-sm bg-white fw-600 font-xssss text-grey-800 ">XL</a></li>                                               
                                                </ul> 

                                                <div className="form-group mb-0 mt-4">
                                                    <label htmlFor="Search" className="fw-600 text-grey-900 font-xsss">Color</label>
                                                </div>
                                                <ul className="list-inline mt-2">
                                                    <li className="list-inline-item me-0"><a href="#" className="btn-round-sm" style={{backgroundColor: '#ff3b30'}}></a></li>
                                                    <li className="list-inline-item me-0"><a href="#" className="btn-round-sm" style={{backgroundColor: '#4cd964'}}></a></li>
                                                    <li className="list-inline-item me-0"><a href="#" className="btn-round-sm" style={{backgroundColor: '#132977'}}></a></li>
                                                    <li className="list-inline-item me-0"><a href="#" className="btn-round-sm" style={{backgroundColor: '#ff2d55'}}></a></li>
                                                    <li className="list-inline-item me-0"><a href="#" className="btn-round-sm" style={{backgroundColor: '#ffcc00'}}></a></li>
                                                    <li className="list-inline-item me-0"><a href="#" className="btn-round-sm" style={{backgroundColor: '#ff9500'}}></a></li>
                                                    <li className="list-inline-item me-0"><a href="#" className="btn-round-sm" style={{backgroundColor: '#8e8e93'}}></a></li>
                                                    <li className="list-inline-item me-0"><a href="#" className="btn-round-sm" style={{backgroundColor: '#D2691E'}}></a></li>
                                                    <li className="list-inline-item me-0"><a href="#" className="btn-round-sm" style={{backgroundColor: '#228B22'}}></a></li>
                                                    <li className="list-inline-item me-0"><a href="#" className="btn-round-sm" style={{backgroundColor: '#FFC0CB'}}></a></li>
                                                    <li className="list-inline-item me-0"><a href="#" className="btn-round-sm" style={{backgroundColor: '#5f9ea0'}}></a></li>
                                                    <li className="list-inline-item me-0"><a href="#" className="btn-round-sm" style={{backgroundColor: '#9932cc'}}></a></li>
                                                </ul>

                                            </div>
                                            <div className="col-lg-3">
                                                <div className="form-group mb-0 mt-0">
                                                    <label htmlFor="Search" className="fw-600 text-grey-900 font-xsss">Price</label>
                                                </div>
                                                <div className="form-group mt-3 mb-0">
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                          <div id="slider-range" className="mb-2 noUi-target noUi-ltr noUi-horizontal noUi-background">
                                                          <div className="noUi-base">
                                                          <div className="noUi-origin noUi-connect" style={{left: '9.09091%'}}>
                                                          <div className="noUi-handle noUi-handle-lower">

                                                          </div>
                                                          </div>
                                                          <div className="noUi-origin noUi-background" style={{left: '79.798%'}}><div className="noUi-handle noUi-handle-upper">

                                                          </div>
                                                          </div>
                                                          </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="row slider-labels">
                                                        <div className="col-6 caption">
                                                          <span id="slider-range-value1" className="font-xsssss fw-600 text-grey-600">$1,000</span>
                                                        </div>
                                                        <div className="col-6 text-right caption">
                                                          <span id="slider-range-value2" className="font-xsssss fw-600 text-grey-600">$8,000</span>
                                                        </div>
                                                      </div>
                                                      <div className="row">
                                                        <div className="col-sm-12">
                                                          <form>
                                                            <input type="hidden" name="min-value" defaultValue="" />
                                                            <input type="hidden" name="max-value" defaultValue="" />
                                                          </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-0 mt-3">
                                                    <label htmlFor="Search" className="fw-600 text-grey-900 font-xsss">Tag</label>
                                                </div>
                                                <ul className="list-inline mt-2">
                                                    <li className="m-0 list-inline-item mb-2">
                                                    <a href="#" className="fw-600 font-xssss text-grey-700 pt-1 pb-1 ps-3 pe-3 d-inline-block rounded-xl bg-white">Dresses</a>
                                                    </li>
                                                    <li className="m-0 list-inline-item mb-2"><a href="#" className="fw-600 font-xssss text-grey-700 pt-1 pb-1 ps-3 pe-3 d-inline-block rounded-xl bg-white">Shirt</a></li>
                                                    <li className="m-0 list-inline-item mb-2"><a href="#" className="fw-600 font-xssss text-grey-700 pt-1 pb-1 ps-3 pe-3 d-inline-block rounded-xl bg-white">Jacket</a></li>
                                                    <li className="m-0 list-inline-item mb-2"><a href="#" className="fw-600 font-xssss text-grey-700 pt-1 pb-1 ps-3 pe-3 d-inline-block rounded-xl bg-white">Jean</a></li>
                                                    <li className="m-0 list-inline-item mb-2"><a href="#" className="fw-600 font-xssss text-grey-700 pt-1 pb-1 ps-3 pe-3 d-inline-block rounded-xl bg-white">Men</a></li>
                                                    <li className="m-0 list-inline-item mb-2"><a href="#" className="fw-600 font-xssss text-grey-700 pt-1 pb-1 ps-3 pe-3 d-inline-block rounded-xl bg-white">Shorts</a></li>
                                                    <li className="m-0 list-inline-item mb-2"><a href="#" className="fw-600 font-xssss text-grey-700 pt-1 pb-1 ps-3 pe-3 d-inline-block rounded-xl bg-white">Swimwear</a></li>
                                                    <li className="m-0 list-inline-item mb-2"><a href="#" className="fw-600 font-xssss text-grey-700 pt-1 pb-1 ps-3 pe-3 d-inline-block rounded-xl bg-white">Tousers</a></li>
                                                    <li className="m-0 list-inline-item mb-2"><a href="#" className="fw-600 font-xssss text-grey-700 pt-1 pb-1 ps-3 pe-3 d-inline-block rounded-xl bg-white">Jumper Cardigans</a></li>
                                                </ul>
                                          
                                                     
                                                
                                            </div>  
                                        </div>  
                                    </div>
                                </div>
                            
                                <div className="col-lg-12 mt-3">
                                    <h4 className="float-left font-xssss fw-700 text-grey-500 text-uppercase ls-3 mt-2 pt-1">32 Product found</h4>
                                    <select className="searchCat float-right sort"> <option defaultValue="">Default Sorting</option><option value="151781441596 ">Fashion</option><option value="139119624252 ">- Men</option><option value="139118313532 ">- Women</option><option value="139360141372 ">Electronics</option><option value="152401903676 ">Home &amp; Garden</option><option value="138866720828 ">- Decor</option><option value="138866917436 ">- Lighting</option></select>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card w-100 border-0 mt-4">
                                        <div className="card-image w-100 p-0 text-center bg-greylight rounded-3 mb-2">
                                            <a href="#"><img src="/assets/images/pp-9.png" alt="product-image" className="w-100 mt-0 mb-0 p-5" /></a>
                                        </div>
                                        <div className="card-body w-100 p-0 text-center">
                                            <h2 className="mt-2 mb-1"><Link to="/shop/single/product" className="text-black fw-700 font-xsss lh-26">Textured Sleeveless Camisole</Link></h2>
                                            <h6 className="font-xsss fw-600 text-grey-500 ls-2">$449</h6>
                                        </div>                                
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="card w-100 border-0 mt-4">
                                        <div className="card-image w-100 p-0 text-center bg-greylight rounded-3 mb-2">
                                            <a href="#"><img src="/assets/images/pp-10.png" alt="product-image" className="w-100 mt-0 mb-0 p-5" /></a>
                                        </div>
                                        <div className="card-body w-100 p-0 text-center">
                                            <h2 className="mt-2 mb-1"><Link to="/shop/single/product" className="text-black fw-700 font-xsss lh-26">Adjustable Shoulder Straps</Link></h2>
                                            <h6 className="font-xsss fw-600 text-grey-500 ls-2">$449</h6>
                                        </div>                                
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="card w-100 border-0 mt-4">
                                        <div className="card-image w-100 p-0 text-center bg-greylight rounded-3 mb-2">
                                            <a href="#"><img src="/assets/images/pp-13.png" alt="product-image" className="w-100 mt-0 mb-0 p-5" /></a>
                                        </div>
                                        <div className="card-body w-100 p-0 text-center">
                                            <h2 className="mt-2 mb-1"><Link to="/shop/single/product" className="text-black fw-700 font-xsss lh-26">Neck Strappy Camisole</Link></h2>
                                            <h6 className="font-xsss fw-600 text-grey-500 ls-2">$449</h6>
                                        </div>                                
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="card w-100 border-0 mt-4">
                                        <div className="card-image w-100 p-0 text-center bg-greylight rounded-3 mb-2">
                                            <a href="#"><img src="/assets/images/pp-14.png" alt="product-image" className="w-100 mt-0 mb-0 p-5" /></a>
                                        </div>
                                        <div className="card-body w-100 p-0 text-center">
                                            <h2 className="mt-2 mb-1"><Link to="/shop/single/product" className="text-black fw-700 font-xsss lh-26">Scoop-Neck Strappy</Link></h2>
                                            <h6 className="font-xsss fw-600 text-grey-500 ls-2">$449</h6>
                                        </div>                                
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card w-100 border-0 mt-4">
                                        <div className="card-image w-100 p-0 text-center bg-greylight rounded-3 mb-2">
                                            <a href="#"><img src="/assets/images/pp-8.png" alt="product-image" className="w-100 mt-0 mb-0 p-5" /></a>
                                        </div>
                                        <div className="card-body w-100 p-0 text-center">
                                            <h2 className="mt-2 mb-1"><Link to="/shop/single/product" className="text-black fw-700 font-xsss lh-26">Butler Stool Ladder</Link></h2>
                                            <h6 className="font-xsss fw-600 text-grey-500 ls-2">$449</h6>
                                        </div>                                
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="card w-100 border-0 mt-4">
                                        <div className="card-image w-100 p-0 text-center bg-greylight rounded-3 mb-2">
                                            <a href="#"><img src="/assets/images/pp-22.png" alt="product-image" className="w-100 mt-0 mb-0 p-5" /></a>
                                        </div>
                                        <div className="card-body w-100 p-0 text-center">
                                            <h2 className="mt-2 mb-1"><Link to="/shop/single/product" className="text-black fw-700 font-xsss lh-26">Butler Stool Ladder</Link></h2>
                                            <h6 className="font-xsss fw-600 text-grey-500 ls-2">$449</h6>
                                        </div>                                
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="card w-100 border-0 mt-4">
                                        <div className="card-image w-100 p-0 text-center bg-greylight rounded-3 mb-2">
                                            <a href="#"><img src="/assets/images/pp-23.png" alt="product-image" className="w-100 mt-0 mb-0 p-5" /></a>
                                        </div>
                                        <div className="card-body w-100 p-0 text-center">
                                            <h2 className="mt-2 mb-1"><Link to="/shop/single/product" className="text-black fw-700 font-xsss lh-26">Butler Stool Ladder</Link></h2>
                                            <h6 className="font-xsss fw-600 text-grey-500 ls-2">$449</h6>
                                        </div>                                
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="card w-100 border-0 mt-4">
                                        <div className="card-image w-100 p-0 text-center bg-greylight rounded-3 mb-2">
                                            <a href="#"><img src="/assets/images/pp-8.png" alt="product-image" className="w-100 mt-0 mb-0 p-5" /></a>
                                        </div>
                                        <div className="card-body w-100 p-0 text-center">
                                            <h2 className="mt-2 mb-1"><Link to="/shop/single/product" className="text-black fw-700 font-xsss lh-26">Butler Stool Ladder</Link></h2>
                                            <h6 className="font-xsss fw-600 text-grey-500 ls-2">$449</h6>
                                        </div>                                
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="card w-100 border-0 mt-4">
                                        <div className="card-image w-100 p-0 text-center bg-greylight rounded-3 mb-2">
                                            <a href="#"><img src="/assets/images/pp-9.png" alt="product-image" className="w-100 mt-0 mb-0 p-5" /></a>
                                        </div>
                                        <div className="card-body w-100 p-0 text-center">
                                            <h2 className="mt-2 mb-1"><Link to="/shop/single/product" className="text-black fw-700 font-xsss lh-26">Textured Sleeveless Camisole</Link></h2>
                                            <h6 className="font-xsss fw-600 text-grey-500 ls-2">$449</h6>
                                        </div>                                
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="card w-100 border-0 mt-4">
                                        <div className="card-image w-100 p-0 text-center bg-greylight rounded-3 mb-2">
                                            <a href="#"><img src="/assets/images/pp-10.png" alt="product-image" className="w-100 mt-0 mb-0 p-5" /></a>
                                        </div>
                                        <div className="card-body w-100 p-0 text-center">
                                            <h2 className="mt-2 mb-1"><Link to="/shop/single/product" className="text-black fw-700 font-xsss lh-26">Adjustable Shoulder Straps</Link></h2>
                                            <h6 className="font-xsss fw-600 text-grey-500 ls-2">$449</h6>
                                        </div>                                
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="card w-100 border-0 mt-4">
                                        <div className="card-image w-100 p-0 text-center bg-greylight rounded-3 mb-2">
                                            <a href="#"><img src="/assets/images/pp-11.png" alt="product-image" className="w-100 mt-0 mb-0 p-5" /></a>
                                        </div>
                                        <div className="card-body w-100 p-0 text-center">
                                            <h2 className="mt-2 mb-1"><Link to="/shop/single/product" className="text-black fw-700 font-xsss lh-26">Neck Strappy Camisole</Link></h2>
                                            <h6 className="font-xsss fw-600 text-grey-500 ls-2">$449</h6>
                                        </div>                                
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="card w-100 border-0 mt-4">
                                        <div className="card-image w-100 p-0 text-center bg-greylight rounded-3 mb-2">
                                            <a href="#"><img src="/assets/images/pp-4.png" alt="product-image" className="w-100 mt-0 mb-0 p-5 mt-4 mb-4" /></a>
                                        </div>
                                        <div className="card-body w-100 p-0 text-center">
                                            <h2 className="mt-2 mb-1"><Link to="/shop/single/product" className="text-black fw-700 font-xsss lh-26">Scoop-Neck Strappy</Link></h2>
                                            <h6 className="font-xsss fw-600 text-grey-500 ls-2">$449</h6>
                                        </div>                                
                                    </div>
                                </div>
                                <div className="col-lg-12 mt-3 mb-5 text-center"><a href="#" className="fw-700 text-white font-xssss text-uppercase ls-3 lh-32 rounded-3 mt-3 text-center d-inline-block p-2 bg-current w150">Load More</a></div>
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
                <div className="message self text-right mt-2"><div className="message-content font-xssss lh-24 fw-500">I want those files htmlFor you. I want you to send 1 PDF and 1 image file.</div></div>
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

export default Shop;