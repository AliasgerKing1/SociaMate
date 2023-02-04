import React from 'react'
import { Link } from 'react-router-dom'

import PortalTitle from '../../../shared/Poraltitle/PortalTitle'
import PortalLogo from '../../../shared/PortalLogo/PortalLogo'
import Footer from '../../../shared/Footer/Footer'

const Logout = () => {
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
                <div className="card-body p-4 text-center">
                  <lord-icon
                    src="https://cdn.lordicon.com/hzomhqxz.json"
                    trigger="loop"
                    colors="primary:#405189,secondary:#08a88a"
                    style={{width: '180px', height: '180px'}}
                  >
                  </lord-icon>

                  <div className="mt-4 pt-2">
                    <h5>You are Logged Out</h5>
                    <p className="text-muted">
                      Thank you for Working with
                      <span className="fw-semibold"> Sar_Studio</span> come back soon
                    </p>
                    <div className="mt-4">
                      <Link
                       to="/admin"
                        className="btn btn-success w-100"
                        >Sign In</Link>
                    </div>
                  </div>
                </div>
                {/* <!-- end card body --> */}
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
      <Footer/>
      {/* <!-- end Footer --> */}
    </div>
    {/* <!-- end auth-page-wrapper --> */}
    </>
  )
}

export default Logout