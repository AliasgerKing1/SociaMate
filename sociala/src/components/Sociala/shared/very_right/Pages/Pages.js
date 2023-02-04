import React from "react";

function Pages() {
  return (
    <div>
      <div className="section full pe-3 ps-4 pt-0 pb-4 position-relative feed-body">
        <h4 className="font-xsssss text-grey-500 text-uppercase fw-700 ls-3">
          Pages
        </h4>
        <ul className="list-group list-group-flush">
          <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
            <span className="btn-round-sm bg-primary-gradiant me-3 ls-3 text-white font-xssss fw-700">
              AB
            </span>
            <h3 className="fw-700 mb-0 mt-0">
              <a
                className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                href="#"
              >
                Armany Seary
              </a>
            </h3>
            <span className="bg-success ms-auto btn-round-xss"></span>
          </li>
          <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
            <span className="btn-round-sm bg-gold-gradiant me-3 ls-3 text-white font-xssss fw-700">
              SD
            </span>
            <h3 className="fw-700 mb-0 mt-0">
              <a
                className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                href="#"
              >
                Entropio Inc
              </a>
            </h3>
            <span className="bg-success ms-auto btn-round-xss"></span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pages;
