import React, { useEffect, useState } from 'react';
import {useFormik} from "formik";
import { addFolderFunction, deleteFolderFunction, getFolderFunction } from '../../../../../Redux/FolderReducer';
import { addFileFunction, deleteFileFunction, getFileFunction } from '../../../../../Redux/FileReducer';
import { getDataById } from '../../../../../Redux/GetFolderDataByIdReducer';

import {useDispatch,useSelector} from "react-redux"

import { addFolder, getFolder,deleteFolder } from '../../../../../Services/Storage/FolderService';
import { addFile,deleteFile,getFile } from '../../../../../Services/Storage/FileService';
import { getFolderById } from '../../../../../Services/Storage/FolderService';

import { useParams } from 'react-router-dom';
import FormErrors from "../../../../shared/Errors/FormErrors";

import Header from '../../../../shared/Header/Header';
import Footer from '../../../../shared/Footer/Footer';
import NotificationModel from "../../../../shared/NotificationModel/NotificationModel";
import RightMenu from '../../../../shared/RightMenu/RightMenu';
import ChooseLayout from "../../../../shared/ChooseLayout/ChooseLayout";

import FolderSchema from '../../../../../Schemas/AddFolderSchema';
import CoustomContextMenu from '../../../../shared/utilities/coustomContextMenu/CoustomContextMenu';
import BreadCrumb from '../../../../shared/BreadCrumb/BreadCrumb';

const initialValues = {
    folder_name : "",
        data : []
}
const FolderDetails = () => {
    let dispatch = useDispatch();
    let params = useParams();
    let state = useSelector(state=>state.FolderReducer)
    let state2 = useSelector(state=>state.AdminReducer)
    let state3 = useSelector(state=>state.FileReducer)
    let state4 = useSelector(state=>state.DataByIdReducer)
    let [crumbs, setCrumbs] = useState(['home'])
    let [folderToDelete, setFolderToDelete ] = useState();
    let [site, setSite] = useState("");
    let [checkRename, setCheckRename] = useState(false);
    let [fileToDelete, setFileToDelete] = useState();
    let {values, handleBlur,handleChange,handleSubmit,touched,errors} = useFormik({
        initialValues : initialValues,
        validationSchema : FolderSchema,
        onSubmit : ()=> {
    addFolder(values).then(result=> {
                dispatch(addFolderFunction(result.data));
            });
        }
        })
    let getFolderData = async() => {
    let result = await getFolder();
    dispatch(getFolderFunction(result.data));
    }
    let getFileData = async()=> {
    let result = await getFile();
    dispatch(getFileFunction(result.data))
    }
    let getFolderDataById = async() => {
        let result = await getFolderById(params.id);
        dispatch(getDataById(result.data));
      }
      useEffect(()=> {
          if(state.length == 0) {
              getFolderData();
            }
            getFileData();
            getFolderDataById();
             
    }, [])
    useEffect(()=> {


if(crumbs.length === 2) {
    if(crumbs[1]) {
    crumbs.splice(1,1)
    console.log(crumbs[1])
}
} else {
    if(state4[0]) {
        console.log(state4[0])
        setCrumbs([...crumbs, state4[0].folder_name])
    }
}
           
       
    },[state4[0]])
    
    // console.log(crumbs)
    let confirmDelete = (folder) => {
    setFolderToDelete(folder);
    }
    let removeFolder = async() => {
    let result = await deleteFolder(folderToDelete._id);
    dispatch(deleteFolderFunction(result.data));
    }
    let form = new FormData();
    let Image = (e) => {
    form.append("photo",e.target.files[0]);
    }
    let obj = {
    username : state2.username,
    image : "",
    site: site
    }
    let addImg = async() => {
    form.append("data",JSON.stringify(obj))
    let result = await addFile(form);
    dispatch(addFileFunction(result.data));
    }
    
    let confirmFileDelete = (file) => {
    setFileToDelete(file);
    }
    let removeFile = async() => {
    let result = await deleteFile(fileToDelete._id);
    // console.log(result.data)
    dispatch(deleteFileFunction(result.data));
    }
    // console.log(state[0].data[0].folder)

    const selected = crumb => {
console.log(crumb)
    }
  return (
        <>
    
    <div className="file-detail-show">
    
        {/* <!-- Begin page --> */}
        <div id="layout-wrapper">
    
        <Header/>
    
    <NotificationModel/>
    <RightMenu/>
    
            {/* <!-- ============================================================== -->
            <!-- Start right Content here -->
            <!-- ============================================================== --> */}
            <div className="main-content" 
                onContextMenu={(e) => {
        e.preventDefault();
      }}>
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="chat-wrapper d-lg-flex gap-1 mx-n4 mt-n4 p-1">
                            <div className="file-manager-sidebar">
                                <div className="p-3 d-flex flex-column h-100">
                                    <div className="mb-3">
                                        <h5 className="mb-0 fw-semibold fs-16">My Drive</h5>
                                    </div>
                                    <div className="search-box">
                                        <input type="text" className="form-control bg-light border-light" placeholder="Search here..." />
                                        <i className="ri-search-2-line search-icon"></i>
                                    </div>
                                    <div className="mt-3 mx-n4 px-4 file-menu-sidebar-scroll" data-simplebar>
                                    
                                        <ul className="list-unstyled file-manager-menu">
                                            <li>
                                                <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true" aria-controls="collapseExample">
                                                    <i className="ri-folder-2-line align-bottom me-2"></i> <span className="file-list-link">My Drive</span>
                                                </a>
                                                <div className="collapse show" id="collapseExample">
                                                    <ul className="sub-menu list-unstyled">
                                                        <li>
                                                            <a href="#!">Assets</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">Marketing</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">Personal</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">Projects</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">Templates</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#!"><i className="ri-file-list-2-line align-bottom me-2"></i> <span className="file-list-link">Documents</span></a>
                                            </li>
                                            <li>
                                                <a href="#!"><i className="ri-image-2-line align-bottom me-2"></i> <span className="file-list-link">Media</span></a>
                                            <li>
                                                <a href="#!"><i className="ri-history-line align-bottom me-2"></i> <span className="file-list-link">Recents</span></a>
                                            </li>
                                            <li>
                                                <a href="#!"><i className="ri-star-line align-bottom me-2"></i> <span className="file-list-link">Important</span></a>
                                            </li>
                                            </li>
                                            <li>
                                                <a href="#!"><i className="ri-delete-bin-line align-bottom me-2"></i> <span className="file-list-link">Deleted</span></a>
                                            </li>
                                        </ul>
                                    </div>
    
    
                                    <div className="mt-auto">
                                        <h6 className="fs-11 text-muted text-uppercase mb-3">Storage Status</h6>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <i className="ri-database-2-line fs-17"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-3 overflow-hidden">
                                                <div className="progress mb-2 progress-sm">
                                                    <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <span className="text-muted fs-12 d-block text-truncate"><b>47.52</b>GB used of <b>119</b>GB</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="file-manager-content w-100 p-3 py-0">
                                <div className="mx-n3 pt-4 px-4 file-manager-content-scroll" data-simplebar>
      <BreadCrumb crumbs={crumbs} selected={selected}/>


                                    <div id="folder-list" className="mb-2">
                                        <div className="row justify-content-beetwen g-2 mb-3">
    
                                            <div className="col">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0 me-2 d-block d-lg-none">
                                                        <button type="button" className="btn btn-soft-success btn-icon btn-sm fs-16 file-menu-btn">
                                                            <i className="ri-menu-2-fill align-bottom"></i>
                                                        </button>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h5 className="fs-16 mb-0">Folders</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-auto">
                                                <div className="d-flex gap-2 align-items-start">
                                                    <select className="form-control" data-choices data-choices-search-false name="choices-single-default" id="file-type">
                                                        <option value="">File Type</option>
                                                        <option value="All">All</option>
                                                        <option value="Video">Video</option>
                                                        <option value="Images">Images</option>
                                                        <option value="Music">Music</option>
                                                        <option value="Documents">Documents</option>
                                                    </select>
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
                                        </div>
                                        {/* <!--end row--> */}
                                        <div className="row" id="folderlist-data">
                                        {
                                            state4[0] ? (state4[0].data.map((x,i)=> {
                                                return(
                                                    <div className="col-xxl-3 col-6 folder-card" key={i}>
                                                <div className="card bg-light shadow-none" id="folder-1">
                                                    <div className="card-body">
                                                        <div className="d-flex mb-1">
                                                            <div className="form-check form-check-danger mb-3 fs-15 flex-grow-1">
                                                                <input className="form-check-input" type="checkbox" value="" id="folderlistCheckbox_1" />
                                                                <label className="form-check-label" htmlFor="folderlistCheckbox_1"></label>
                                                            </div>
                                                            <div className="dropdown">
                                                                <button className="btn btn-ghost-primary btn-icon btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="ri-more-2-fill fs-16 align-bottom"></i>
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li><a className="dropdown-item view-item-btn" href="#;">Open</a></li>
                                                                    <li><a className="dropdown-item edit-folder-list" href="#createFolderModal" data-bs-toggle="modal" role="button">Rename</a></li>
                                                                    <li><a className="dropdown-item" href="#removeFolderModal" data-bs-toggle="modal" role="button" onClick={()=> confirmDelete(x)}>Delete</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
    
                                                        <div className="text-center">
                                                            <div className="mb-2">
                                                                <i className="ri-folder-2-fill align-bottom text-warning display-5"></i>
                                                            </div>
                                                            <h6 className="fs-15 folder-na me">{x.folder}</h6>
                                                            
                                                        </div>
                                                        <div className="hstack mt-4 text-muted">
                                                            <span className="me-auto"><b>349</b> Files</span>
                                                            <span><b>4.10</b>GB</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                                )
                                            })) : ""
                                         
                                        }
    
                                            {/* <!--end col--> */}
                                        </div>
                                        {/* <div className="row" id="folderlist-data">
                                        {
                                            state.map((x,i)=> {
                                                return(
                                                    <>
                                                    {
                                                                 x.data.map((y,b)=>{

                                                return(
                                                    <div className="col-xxl-3 col-6 folder-card" key={b}>
                                                <div className="card bg-light shadow-none" id="folder-1">
                                                    <div className="card-body">
                                                        <div className="d-flex mb-1">
                                                            <div className="form-check form-check-danger mb-3 fs-15 flex-grow-1">
                                                                <input className="form-check-input" type="checkbox" value="" id="folderlistCheckbox_1" />
                                                                <label className="form-check-label" htmlFor="folderlistCheckbox_1"></label>
                                                            </div>
                                                            <div className="dropdown">
                                                                <button className="btn btn-ghost-primary btn-icon btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="ri-more-2-fill fs-16 align-bottom"></i>
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li><a className="dropdown-item view-item-btn" href="#;">Open</a></li>
                                                                    <li><a className="dropdown-item edit-folder-list" href="#createFolderModal" data-bs-toggle="modal" role="button">Rename</a></li>
                                                                    <li><a className="dropdown-item" href="#removeFolderModal" data-bs-toggle="modal" role="button" onClick={()=> confirmDelete(y)}>Delete</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
    
                                                        <div className="text-center">
                                                            <div className="mb-2">
                                                                <i className="ri-folder-2-fill align-bottom text-warning display-5"></i>
                                                            </div>
                                                            <h6 className="fs-15 folder-na me">{y.folder}</h6>
                                                            
                                                        </div>
                                                        <div className="hstack mt-4 text-muted">
                                                            <span className="me-auto"><b>349</b> Files</span>
                                                            <span><b>4.10</b>GB</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                                                                                       
                                                )
                                              })
                                                            }                                            
                                            </>
                                                )
                                            })
                                        }
    */}
                                            {/* <!--end col--> */}
                                        {/* </div> */}




                                        {/* <!--end row--> */}
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <h5 className="flex-grow-1 fs-16 mb-0" id="filetype-title">Files</h5>
                                        <div className="flex-shrink-0">
                                        </div>
                                        
                                    </div>
                        <CoustomContextMenu />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- container-fluid --> */}
                </div>
                {/* <!-- End Page-content --> */}
    
                {/* <!-- START CREATE FOLDER MODAL --> */}
                <div className="modal fade zoomIn" id="createFolderModal" tabIndex="-1" aria-labelledby="createFolderModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-0">
                            <div className="modal-header p-3 bg-soft-success">
                                <h5 className="modal-title" id="createFolderModalLabel">Create Folder</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" id="addFolderBtn-close" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form autoComplete="off" className="needs-validation createfolder-form" id="createfolder-form" onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="foldername-input" className="form-label">Folder Name</label>
                                        <input type="text" name='folder_name' className= {"form-control " + (errors.folder_name && touched.folder_name? "is-invalid" : "")} onBlur={handleBlur} id="foldername-input" placeholder="Enter folder name" onChange={handleChange}/>
                                        <FormErrors errMsg={errors.folder_name} touched={touched.folder_name}/>
                                        {/* setFolderName({...folderName,folder_name : e.target.value}) */}
                                        {/* <input type="hidden" className="form-control" id="folderid-input" value="" placeholder="Enter folder name" /> */}
                                    </div>
                                    <div className="hstack gap-2 justify-content-end">
                                        <button type="button" className="btn btn-ghost-success" data-bs-dismiss="modal"><i className="ri-close-line align-bottom"></i> Close</button>
                                        <button type="submit" className="btn btn-primary" id="addNewFolder" data-bs-dismiss="modal">Add Folder</button>
                                        {/* onClick={folderSubmit} */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- END CREATE FOLDER MODAL --> */}
    
                {/* <!-- START CREATE FILE MODAL --> */}
                <div className="modal fade zoomIn" id="createFileModal" tabIndex="-1" aria-labelledby="createFileModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-0">
                            <div className="modal-header p-3 bg-soft-success">
                                <h5 className="modal-title" id="createFileModalLabel">Create File</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" id="addFileBtn-close" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form autoComplete="off" className="needs-validation createfile-form" id="createfile-form">
                                    <div className="mb-4">
                                    <label htmlFor="site-input" className="form-label">Site</label>
                                        <input type="text" className="form-control mb-2" id="site-input" name='site' placeholder="Enter site of use" onChange={(e)=> setSite(e.target.value)} />
                                        <label htmlFor="filename-input" className="form-label">File Name</label>
                                        <input type="file"  className="form-control" id="filename-input" placeholder="Enter file name" onChange={Image} />
                                       
                                    </div>
                                    <div className="hstack gap-2 justify-content-end">
                                        <button type="button" className="btn btn-ghost-success" data-bs-dismiss="modal"><i className="ri-close-line align-bottom"></i> Close</button>
                                        <a style={{cursor : 'pointer'}} className="btn btn-primary" id="addNewFile" data-bs-dismiss="modal" onClick={addImg}>Create</a>
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- END CREATE FILE MODAL --> */}
    
                {/* <!-- removeFileItemModal --> */}
                <div id="removeFileItemModal" className="modal fade zoomIn" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close-removefilemodal"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mt-2 text-center">
                                    <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop" colors="primary:#f7b84b,secondary:#f06548" style={{width:'100px',height:'100px'}}></lord-icon>
                                    <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                                        <h4>Are you sure you want to remove <span className='text-danger'>{fileToDelete ? (fileToDelete.image) : ""}</span> ?</h4>
                                        <p className="text-muted mx-4 mb-0">Are you sure you want to remove this item ?</p>
                                    </div>
                                </div>
                                <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                                    <button type="button" className="btn w-sm btn-light" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn w-sm btn-danger" id="remove-fileitem" onClick={removeFile} data-bs-dismiss="modal">Yes, Delete It!</button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /.modal-content --> */}
                    </div>
                    {/* <!-- /.modal-dialog --> */}
                </div>
                {/* <!-- /.modal --> */}
    
                {/* <!-- removeFileItemModal --> */}
                <div id="removeFolderModal" className="modal fade zoomIn" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close-removeFoldermodal"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mt-2 text-center">
                                    <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop" colors="primary:#f7b84b,secondary:#f06548" style={{width:'100px',height:'100px'}}></lord-icon>
                                    <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                                    <h4>Are you sure you want to remove <span className='text-danger'>{folderToDelete ? (folderToDelete.folder_name) : ""}</span> ?</h4>
                                        <p className="text-muted mx-4 mb-0">Are you sure you want to remove this folder ?</p>
                                    </div>
                                </div>
                                <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                                    <button type="button" className="btn w-sm btn-light" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn w-sm btn-danger" id="remove-folderList" data-bs-dismiss="modal" onClick={removeFolder}>Yes, Delete It!</button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /.modal-content --> */}
                    </div>
                    {/* <!-- /.modal-dialog --> */}
                </div>
                {/* <!-- /.modal --> */}
    
                <Footer/>
            </div>
 
            {/* <!-- end main content--> */}
    
        </div>
        {/* <!-- END layout-wrapper --> */}
    
        {/* <!--start back-to-top--> */}
        <button className="btn btn-danger btn-icon" id="back-to-top">
            <i className="ri-arrow-up-line"></i>
        </button>
        {/* <!--end back-to-top--> */}
    
        <div className="customizer-setting d-none d-md-block">
            <div className="btn-info btn-rounded shadow-lg btn btn-icon btn-lg p-2" data-bs-toggle="offcanvas" data-bs-target="#theme-settings-offcanvas" aria-controls="theme-settings-offcanvas">
                <i className='mdi mdi-spin mdi-cog-outline fs-22'></i>
            </div>
        </div>
    
        {/* <!-- Theme Settings --> */}
       <ChooseLayout/>
       </div>
    
        </>
  )
}

export default FolderDetails