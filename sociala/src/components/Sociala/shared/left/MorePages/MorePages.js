import React from "react";
import {Link} from 'react-router-dom'

function MorePages() {
  return (
    <div>
      <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2">
        <div className="nav-caption fw-600 font-xssss text-grey-500">
          <span>More </span>Pages
        </div>
        <ul className="mb-3">
          <li>
            <Link to="/auth/email"
              className="nav-content-bttn open-font"
            >
              <i className="font-xl text-current feather-inbox me-3"></i>
              <span>Email Box</span>
              <span className="circle-count bg-warning mt-1">584</span>
            </Link>
          </li>
          <li>
            <Link to="/auth/hotel" className="nav-content-bttn open-font">
              <i className="font-xl text-current feather-home me-3"></i>
              <span>Near Hotel</span>
            </Link>
          </li>
          <li>
            <Link to="/auth/events" className="nav-content-bttn open-font">
              <i className="font-xl text-current feather-map-pin me-3"></i>
              <span>Latest Event</span>
            </Link>
          </li>
          <li>
            <Link
              to="/auth/livestream"
              className="nav-content-bttn open-font"
            >
              <i className="font-xl text-current feather-youtube me-3"></i>
              <span>Live Stream</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MorePages;
