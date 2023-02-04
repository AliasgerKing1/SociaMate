import React from "react";
import Account from "../Account/Account";
import MorePages from "../MorePages/MorePages";
import NewFeed from "../NewFeed/NewFeed";
function LeftSection() {
  return (
    <div>
      <nav className="navigation scroll-bar">
        <div className="container ps-0 pe-0">
          <div className="nav-content">
            <NewFeed />
            
            <MorePages />

            <Account />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default LeftSection;
