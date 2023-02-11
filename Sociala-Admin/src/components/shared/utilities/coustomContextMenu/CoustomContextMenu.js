import React, {useEffect, useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';

import { updateFolderFunction } from '../../../../Redux/FolderReducer';

import {useParams} from "react-router-dom"


import { updateFolder } from '../../../../Services/Storage/FolderService';

import "../CoutomContextMenu.css"
const CoustomContextMenu = () => {
  let params = useParams();
  let dispatch = useDispatch();
  const [context, setContext] = useState(false);
  const [xYPosistion, setXyPosistion] = useState({ x: 0, y: 0 });
  const [chosen, setChosen] = useState();
  const [folderName, setFolderName] = useState("");
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
  let obj = {
    folder : folderName
  }
  let createFolderFile = async() => {
      let result = await updateFolder(params.id, obj);
      dispatch(updateFolderFunction(result.data))
    }
    return (
      <>
        <div
          className="contextContainer"
          onContextMenu={showNav}
          onClick={hideContext}
        >
          {/* {chosen && <h1>"{chosen}" is chosen</h1>} */}
          {context && (
            <div
              style={{ top: xYPosistion.y, left: xYPosistion.x }}
              className="dropdown-success rightClick"
            >
              <div className="menuElement" data-bs-toggle="modal" data-bs-target="#createFolderModal" onClick={() => initMenu("Create Folder")}>
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

        <div className="modal fade" id="createFolderModal" tabIndex="-1" aria-labelledby="exampleModalgridLabel" aria-modal="true" aria-hidden="true" style={{display : 'none'}}>
<div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalgridLabel">Create Folder</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <form>
                <div className="row g-3">
                    <div className="col-xxl-12">
                        <div>
                            <label htmlFor="firstName" className="form-label">Folder Name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="Enter foldername" onChange={(e)=> 
                              setFolderName(e.target.value) }/>
                        </div>
                    </div>
                    {/* <!--end col--> */}
                    <div className="col-lg-12">
                        <div className="hstack gap-2 justify-content-end">
                            <button type='button' className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                            <a href='#' className="btn btn-primary" data-bs-dismiss="modal" onClick={createFolderFile}>Create</a>
                        </div>
                    </div>
                    {/* <!--end col--> */}



                </div>
                {/* <!--end row--> */}
            </form>
        </div>
    </div>
</div>
</div>
    </>
  )
}

export default CoustomContextMenu