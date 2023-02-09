import React from 'react'

import "../CoutomContextMenu.css"
const CoustomContextMenu = () => {
  const [context, setContext] = React.useState(false);
  const [xYPosistion, setXyPosistion] = React.useState({ x: 0, y: 0 });
  const [chosen, setChosen] = React.useState();
  const showNav = (event) => {
    event.preventDefault();
    setContext(false);
    const positionChange = {
      x: event.pageX,
      y: event.pageY,
    };
    setXyPosistion(positionChange);
    setContext(true);
  };
  const hideContext = (event) => {
    setContext(false);
  };
  const initMenu = (chosen) => {
    setChosen(chosen);
  };
  
    return (
      <>
        <div
          className="contextContainer"
          onContextMenu={showNav}
          onClick={hideContext}
        >
          {/* {chosen && <h1>"{chosen}" is chosen</h1>} */}
          <h2>{chosen}</h2>
          {context && (
            <div
              style={{ top: xYPosistion.y, left: xYPosistion.x }}
              className="dropdown-success rightClick"
            >
              <div className="menuElement" onClick={() => initMenu("Create Folder")}>
              <i className="ri-folder-2-line align-bottom me-2"></i> Create Folder
              </div>
              <div className="menuElement" onClick={() => initMenu("Create File")}>
              <i className="ri-file-3-line align-bottom me-2"></i> Create File
              </div>
              <div className="menuElement" onClick={() => initMenu("Cut")}>
              <i className="ri-scissors-2-line align-bottom me-2"></i> Cut
              </div>
              <div className="menuElement" onClick={() => initMenu("Copy")}>
              <i className="ri-file-copy-2-line align-bottom me-2"></i> Copy
              </div>
              <div className="menuElement" onClick={() => initMenu("Paste")}>
              <i className="ri-clipboard-line align-bottom me-2"></i> Paste
              </div>
              <div className="menuElement" style={{borderBottom : '1px solid #e9ebec'}} onClick={() => initMenu("Share")}>
              <i className="ri-share-line align-bottom me-2"></i> Share
              </div>
              <div className="menuElement" onClick={() => initMenu("Settings")}>
              <i className=" ri-settings-3-line align-bottom me-2"></i> Settings
              </div>
            </div>
          )}
        </div>
    </>
  )
}

export default CoustomContextMenu