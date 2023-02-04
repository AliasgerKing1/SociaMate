import React from "react";

function Event() {
  return (
    <div>
      <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
        <div className="card-body d-flex align-items-center  p-4">
          <h4 className="fw-700 mb-0 font-xssss text-grey-900">Event</h4>
          <a
            href="default-event.html"
            className="fw-600 ms-auto font-xssss text-primary"
          >
            See all
          </a>
        </div>
        <div className="card-body d-flex pt-0 ps-4 pe-4 pb-3 overflow-hidden">
          <div className="bg-success me-2 p-3 rounded-xxl">
            <h4 className="fw-700 font-lg ls-3 lh-1 text-white mb-0">
              <span className="ls-1 d-block font-xsss text-white fw-600">
                FEB
              </span>
              22
            </h4>
          </div>
          <h4 className="fw-700 text-grey-900 font-xssss mt-2">
            Meeting with clients
            <span className="d-block font-xsssss fw-500 mt-1 lh-4 text-grey-500">
              41 madison ave, floor 24 new work, NY 10010
            </span>
          </h4>
        </div>

        <div className="card-body d-flex pt-0 ps-4 pe-4 pb-3 overflow-hidden">
          <div className="bg-warning me-2 p-3 rounded-xxl">
            <h4 className="fw-700 font-lg ls-3 lh-1 text-white mb-0">
              <span className="ls-1 d-block font-xsss text-white fw-600">
                APR
              </span>
              30
            </h4>
          </div>
          <h4 className="fw-700 text-grey-900 font-xssss mt-2">
            Developer Programe
            <span className="d-block font-xsssss fw-500 mt-1 lh-4 text-grey-500">
              41 madison ave, floor 24 new work, NY 10010
            </span>
          </h4>
        </div>

        <div className="card-body d-flex pt-0 ps-4 pe-4 pb-3 overflow-hidden">
          <div className="bg-primary me-2 p-3 rounded-xxl">
            <h4 className="fw-700 font-lg ls-3 lh-1 text-white mb-0">
              <span className="ls-1 d-block font-xsss text-white fw-600">
                APR
              </span>
              23
            </h4>
          </div>
          <h4 className="fw-700 text-grey-900 font-xssss mt-2">
            Aniversary Event
            <span className="d-block font-xsssss fw-500 mt-1 lh-4 text-grey-500">
              41 madison ave, floor 24 new work, NY 10010
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Event;
