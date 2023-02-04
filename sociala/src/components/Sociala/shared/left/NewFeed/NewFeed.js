import React from "react";
import { Link } from "react-router-dom"
function NewFeed() {
  return (
    <div>
      <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
        <div className="nav-caption fw-600 font-xssss text-grey-500">
          <span>New </span>Feeds
        </div>
        <ul className="mb-1 top-content">
          <li className="logo d-none d-xl-block d-lg-block"></li>
          <li>
            <Link to="/auth/home" className="nav-content-bttn open-font">
              <i className="feather-tv btn-round-md bg-blue-gradiant me-3"></i>
              <span>New feed</span>
            </Link>
          </li>
          <li>
            <Link to="/auth/video" className="nav-content-bttn open-font">
              <i className="feather-video btn-round-md bg-red-gradiant me-3"></i>
              <span>Top Videos</span>
            </Link>
          </li>
          <li>
            <Link to="/auth/stories" className="nav-content-bttn open-font">
              <i className="feather-globe btn-round-md bg-gold-gradiant me-3"></i>
              <span>Explore Stories</span>
            </Link>
          </li>
          <li>
            <Link to="/auth/group" className="nav-content-bttn open-font">
              <i className="feather-zap btn-round-md bg-mini-gradiant me-3"></i>
              <span>Popular Groups</span>
            </Link>
          </li>
          <li>
            <Link to="/auth/users" className="nav-content-bttn open-font">
              <i className="feather-user btn-round-md bg-primary-gradiant me-3"></i>
              <span>Users </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NewFeed;
