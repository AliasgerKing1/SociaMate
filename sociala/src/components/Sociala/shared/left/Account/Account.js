import React from "react";
import { Link } from "react-router-dom";
function Account() {
  return (
    <div>
      <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1">
        <div className="nav-caption fw-600 font-xssss text-grey-500">
          <span></span> Account
        </div>
        <ul className="mb-1">
          <li className="logo d-none d-xl-block d-lg-block"></li>
          <li>
            <Link
              to="/auth/setting"
              className="nav-content-bttn open-font h-auto pt-2 pb-2"
            >
              <i className="font-sm feather-settings me-3 text-grey-500"></i>
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link to="/auth/analytics"
              className="nav-content-bttn open-font h-auto pt-2 pb-2"
            >
              <i className="font-sm feather-pie-chart me-3 text-grey-500"></i>
              <span>Analytics</span>
            </Link>
          </li>
          <li>
            <Link
              to="/auth/chat"
              className="nav-content-bttn open-font h-auto pt-2 pb-2"
            >
              <i className="font-sm feather-message-square me-3 text-grey-500"></i>
              <span>Chat</span>
              <span className="circle-count bg-warning mt-0">23</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Account;
