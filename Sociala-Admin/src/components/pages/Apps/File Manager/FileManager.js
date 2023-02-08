import React, { useEffect, useState } from 'react';
import {useFormik} from "formik";

import { addFolderFunction, deleteFolderFunction, getFolderFunction } from '../../../../Redux/FolderReducer';
import {useDispatch,useSelector} from "react-redux"

import {Link} from "react-router-dom"

import { addFolder, getFolder,deleteFolder } from '../../../../Services/Storage/FolderService';
import { addFile,deleteFile,getFile } from '../../../../Services/Storage/FileService';

import FormErrors from "../../../shared/Errors/FormErrors"

import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';
import NotificationModel from "../../../shared/NotificationModel/NotificationModel";
import RightMenu from '../../../shared/RightMenu/RightMenu';
import ChooseLayout from "../../../shared/ChooseLayout/ChooseLayout";

import FolderSchema from '../../../../Schemas/AddFolderSchema';
import FileSchema from "../../../../Schemas/AddFileSchema";
import { addFileFunction, deleteFileFunction, getFileFunction } from '../../../../Redux/FileReducer';

const initialValues = {
    folder_name : "",
        data : []
}
const FileManager = () => {
    let dispatch = useDispatch();
    let state = useSelector(state=>state.FolderReducer)
    let state2 = useSelector(state=>state.AdminReducer)
    let state3 = useSelector(state=>state.FileReducer)
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
useEffect(()=> {
    if(state.length == 0) {
        getFolderData();
    }
    getFileData();
    
}, [])

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
    dispatch(deleteFileFunction(result.data));
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

        <div className="main-content">

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
                                                    <option value="All" selected>All</option>
                                                    <option value="Video">Video</option>
                                                    <option value="Images">Images</option>
                                                    <option value="Music">Music</option>
                                                    <option value="Documents">Documents</option>
                                                </select>
    
                                                <button className="btn btn-primary w-sm create-folder-modal flex-shrink-0" data-bs-toggle="modal" data-bs-target="#createFolderModal"><i className="ri-add-line align-bottom me-1"></i> Create Folders</button>
                                            </div>
                                        </div>
                                        {/* <!--end col--> */}
                                    </div>
                                    {/* <!--end row--> */}
                                    <div className="row" id="folderlist-data">
                                    {
                                        state.map((x,i)=> {
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
                                                                <li><Link className="dropdown-item view-item-btn" to={"/admin/folder/details/" + x._id}>Open</Link></li>
                                                                <li><a className="dropdown-item edit-folder-list" href="#createFolderModal" data-bs-toggle="modal" role="button">Rename</a></li>
                                                                <li><a className="dropdown-item" href="#removeFolderModal" data-bs-toggle="modal" role="button" onClick={()=> confirmDelete(x)}>Delete</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="text-center">
                                                        <div className="mb-2">
                                                            <i className="ri-folder-2-fill align-bottom text-warning display-5"></i>
                                                        </div>
                                                        {checkRename == true ? (<input type="text" class="form-control" id="valueInput" defualtValue={x.folder_name} />) : (<h6 className="fs-15 folder-na me">{x.folder_name}</h6>)}
                                                        
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

                                        {/* <!--end col--> */}
                                    </div>
                                    {/* <!--end row--> */}
                                </div>
                                <div>
                                    <div className="d-flex align-items-center mb-3">
                                        <h5 className="flex-grow-1 fs-16 mb-0" id="filetype-title">Recent File</h5>
                                        <div className="flex-shrink-0">
                                            <button className="btn btn-primary createFile-modal" data-bs-toggle="modal" data-bs-target="#createFileModal"><i className="ri-add-line align-bottom me-1"></i> Create File</button>
                                        </div>
                                    </div>
                                    <div className="table-responsive">

                                        <div className="card">
                                <div className="card-body">
                                    <div className="live-preview">
                                        <div className="table-responsive">
                                            <table className="table table-borderless align-middle table-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">SR NO.</th>
                                                        <th scope="col">File Name</th>
                                                        <th scope="col">Admin Name</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Site</th>
                                                        <th scope="col">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                state3.map((x,n)=> {
                                                    let classes = "";
                                                    let original_name = x.image;
                                                    let arr = original_name.split(".");
                                                    let ext = arr[arr.length-1];
                                                    if(ext === "jpg" || ext === "JPG") {
                                                        classes ="ri-gallery-fill text-success"
                                                    }
                                                    else if(ext === "pdf" || ext === "PDF") {
                                                        classes= "ri-file-pdf-fill text-danger";
                                                    }
                                                    else if(ext === "docx" || ext === "DOCX") {
                                                        classes= "ri-file-text-fill text-primary";
                                                    }
                                                    else if(ext === "pptx" || ext === "PPTX") {
                                                        classes= "ri-file-ppt-2-fill text-danger";
                                                    }        
                                                    else if(ext === "png" || ext === "PNG") {
                                                        classes ="ri-gallery-fill text-secondary"
                                                    }
                                                    else if(ext === "svg" || ext === "SVG") {
                                                        classes ="ri-gallery-fill text-dark"
                                                    }
                                                    else if(ext === "xlsx" || ext === "XLSX") {
                                                        classes ="ri-file-excel-fill text-success"
                                                    }
                                                    else if(ext === "zip" || ext === "ZIP" || ext === "rar" || ext == "RAR") {
                                                        classes ="ri-file-zip-fill text-warning"
                                                    }
                                                    return(
                                                        <tr key={n}>
                                                        <td className="fw-medium">{n + 1}</td>
                                                        <td><i className={"align-bottom me-2 " + classes}></i> {x.image}</td>
                                                        <td>{x.username}</td>
                                                        <td>10, Nov 2021</td>
                                                        <td><span className="badge badge-soft-success">{x.site}</span></td>
                                                        <td>
                                                            <div className="hstack gap-3 fs-15">
                                                            <div className="dropdown">
                                                            <button className="btn btn-ghost-primary btn-icon dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <a href="#;" className="link-primary"><i className="ri-settings-4-line"></i></a>
                                                            </button>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li><a className="dropdown-item view-item-btn" href="#;">View</a></li>
                                                                <li><a className="dropdown-item edit-folder-list" href="#createFolderModal" data-bs-toggle="modal" role="button">Rename</a></li>
                                                            </ul>
                                                        </div>
                                                              
                                                                <a href="#;" className="link-danger" data-bs-target="#removeFileItemModal" data-bs-toggle="modal"  onClick={()=> confirmFileDelete(x)}><i className="ri-delete-bin-5-line"></i></a>
                                                            </div>
                                                        </td>
                                                        </tr>
                                                    )
                                                })
                                                }
{/*                                                 <tr>
                                                        <td className="fw-medium">01</td>
                                                        <td><i className="ri-gallery-fill align-bottom text-success me-2"></i> Annette Black</td>
                                                        <td>Industrial Designer</td>
                                                        <td>10, Nov 2021</td>
                                                        <td><span className="badge badge-soft-success">Active</span></td>
                                                        <td>
                                                            <div className="hstack gap-3 fs-15">
                                                                <a href="#;" className="link-primary"><i className="ri-settings-4-line"></i></a>
                                                                <a href="#;" className="link-danger"><i className="ri-delete-bin-5-line"></i></a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">02</td>
                                                        <td><i className="ri-file-pdf-fill align-bottom text-danger me-2"></i> Bessie Cooper</td>
                                                        <td>Graphic Designer</td>
                                                        <td>13, Nov 2021</td>
                                                        <td><span className="badge badge-soft-success">Active</span></td>
                                                        <td>
                                                            <div className="hstack gap-3 fs-15">
                                                                <a href="#;" className="link-primary"><i className="ri-settings-4-line"></i></a>
                                                                <a href="#;" className="link-danger"><i className="ri-delete-bin-5-line"></i></a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">03</td>
                                                        <td><i className="ri-folder-2-fill align-bottom text-warning me-2"></i>Leslie Alexander</td>
                                                        <td>Product Manager</td>
                                                        <td>17, Nov 2021</td>
                                                        <td><span className="badge badge-soft-success">Active</span></td>
                                                        <td>
                                                            <div className="hstack gap-3 fs-15">
                                                                <a href="#;" className="link-primary"><i className="ri-settings-4-line"></i></a>
                                                                <a href="#;" className="link-danger"><i className="ri-delete-bin-5-line"></i></a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="fw-medium">04</td>
                                                        <td><i className="ri-file-text-fill align-bottom text-secondary me-2"></i>Lenora Sandoval</td>
                                                        <td>Applications Engineer</td>
                                                        <td>25, Nov 2021</td>
                                                        <td><span className="badge badge-soft-danger">Disabled</span></td>
                                                        <td>
                                                            <div className="hstack gap-3 fs-15">
                                                                <a href="#;" className="link-primary"><i className="ri-settings-4-line"></i></a>
                                                                <a href="#;" className="link-danger"><i className="ri-delete-bin-5-line"></i></a>
                                                            </div>
                                                        </td>
                                                    </tr>  */}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{height: '275px'}}><code>
                                        {/* <!-- Tables Without Borders --> */}
<table className="table table-borderless table-nowrap">
    <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Job Title</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Annette Black</td>
            <td>Industrial Designer</td>
            <td>10, Nov 2021</td>
            <td><span className="badge badge-soft-success">Active</span></td>
            <td>
                <div className="hstack gap-3 fs-15">
                    <a href="#;" className="link-primary"><i className="ri-settings-4-line"></i></a>
                    <a href="#;" className="link-danger"><i className="ri-delete-bin-5-line"></i></a>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Bessie Cooper</td>
            <td>Graphic Designer</td>
            <td>13, Nov 2021</td>
            <td><span className="badge badge-soft-success">Active</span></td>
            <td>
                <div className="hstack gap-3 fs-15">
                    <a href="#;" className="link-primary"><i className="ri-settings-4-line"></i></a>
                    <a href="#;" className="link-danger"><i className="ri-delete-bin-5-line"></i></a>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Leslie Alexander</td>
            <td>Product Manager</td>
            <td>17, Nov 2021</td>
            <td><span className="badge badge-soft-success">Active</span></td>
            <td>
                <div className="hstack gap-3 fs-15">
                    <a href="#;" className="link-primary"><i className="ri-settings-4-line"></i></a>
                    <a href="#;" className="link-danger"><i className="ri-delete-bin-5-line"></i></a>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row">4</th>
            <td>Lenora Sandoval</td>
            <td>Applications Engineer</td>
            <td>25, Nov 2021</td>
            <td><span className="badge badge-soft-danger">Disabled</span></td>
            <td>
                <div className="hstack gap-3 fs-15">
                    <a href="#;" className="link-primary"><i className="ri-settings-4-line"></i></a>
                    <a href="#;" className="link-danger"><i className="ri-delete-bin-5-line"></i></a>
                </div>
            </td>
        </tr>
    </tbody>
</table></code></pre>
                                    </div>
                                </div>
                                {/* <!-- end card-body --> */}
                            </div>
                            {/* <!-- end card --> */}
                                    </div>
                                    <ul id="pagination" className="pagination pagination-lg"></ul>
                                    <div className="align-items-center mt-2 row g-3 text-center text-sm-start">
                                        <div className="col-sm">
                                            <div className="text-muted">Showing<span className="fw-semibold">4</span> of <span className="fw-semibold">125</span> Results
                                            </div>
                                        </div>
                                        <div className="col-sm-auto">
                                            <ul className="pagination pagination-separated pagination-sm justify-content-center justify-content-sm-start mb-0">
                                                <li className="page-item disabled">
                                                    <a href="#" className="page-link">←</a>
                                                </li>
                                                <li className="page-item active">
                                                    <a href="#" className="page-link">1</a>
                                                </li>
                                                <li className="page-item">
                                                    <a href="#" className="page-link">2</a>
                                                </li>
                                                <li className="page-item">
                                                    <a href="#" className="page-link">3</a>
                                                </li>
                                                <li className="page-item">
                                                    <a href="#" className="page-link">→</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="file-manager-detail-content p-3 py-0">
                            <div className="mx-n3 pt-3 px-3 file-detail-content-scroll" data-simplebar>
                                <div id="folder-overview">
                                    <div className="d-flex align-items-center pb-3 border-bottom border-bottom-dashed">
                                        <h5 className="flex-grow-1 fw-semibold mb-0">Overview</h5>
                                        <div>
                                            <button type="button" className="btn btn-soft-danger btn-icon btn-sm fs-16 close-btn-overview">
                                                <i className="ri-close-fill align-bottom"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div id="simple_dount_chart" data-colors='["--vz-info", "--vz-danger", "--vz-primary", "--vz-success"]' className="apex-charts mt-3" dir="ltr"></div>
                                    <div className="mt-4">
                                        <ul className="list-unstyled vstack gap-4">
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar-xs">
                                                            <div className="avatar-title rounded bg-soft-secondary text-secondary">
                                                                <i className="ri-file-text-line fs-17"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h5 className="mb-1 fs-15">Documents</h5>
                                                        <p className="mb-0 fs-12 text-muted">2348 files</p>
                                                    </div>
                                                    <b>27.01 GB</b>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar-xs">
                                                            <div className="avatar-title rounded bg-soft-success text-success">
                                                                <i className="ri-gallery-line fs-17"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h5 className="mb-1 fs-15">Media</h5>
                                                        <p className="mb-0 fs-12 text-muted">12480 files</p>
                                                    </div>
                                                    <b>20.87 GB</b>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar-xs">
                                                            <div className="avatar-title rounded bg-soft-warning text-warning">
                                                                <i className="ri-folder-2-line fs-17"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h5 className="mb-1 fs-15">Projects</h5>
                                                        <p className="mb-0 fs-12 text-muted">349 files</p>
                                                    </div>
                                                    <b>4.10 GB</b>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar-xs">
                                                            <div className="avatar-title rounded bg-soft-primary text-primary">
                                                                <i className="ri-error-warning-line fs-17"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h5 className="mb-1 fs-15">Others</h5>
                                                        <p className="mb-0 fs-12 text-muted">9873 files</p>
                                                    </div>
                                                    <b>33.54 GB</b>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pb-3 mt-auto">
                                        <div className="alert alert-danger d-flex align-items-center mb-0">
                                            <div className="flex-shrink-0">
                                                <i className="ri-cloud-line text-danger align-bottom display-5"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="text-danger fs-14">Upgrade to Pro</h5>
                                                <p className="text-muted mb-2">Get more space for your...</p>
                                                <button className="btn btn-sm btn-danger"><i className="ri-upload-cloud-line align-bottom"></i> Upgrade Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="file-overview" className="h-100">
                                    <div className="d-flex h-100 flex-column">
                                        <div className="d-flex align-items-center pb-3 border-bottom border-bottom-dashed mb-3 gap-2">
                                            <h5 className="flex-grow-1 fw-semibold mb-0">File Preview</h5>
                                            <div>
                                                <button type="button" className="btn btn-ghost-primary btn-icon btn-sm fs-16 favourite-btn">
                                                    <i className="ri-star-fill align-bottom"></i>
                                                </button>
                                                <button type="button" className="btn btn-soft-danger btn-icon btn-sm fs-16 close-btn-overview">
                                                    <i className="ri-close-fill align-bottom"></i>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="pb-3 border-bottom border-bottom-dashed mb-3">
                                            <div className="file-details-box bg-light p-3 text-center rounded-3 border border-light mb-3">
                                                <div className="display-4 file-icon">
                                                    <i className="ri-file-text-fill text-secondary"></i>
                                                </div>
                                            </div>
                                            <button type="button" className="btn btn-icon btn-sm btn-ghost-success float-end fs-16"><i className="ri-share-forward-line"></i></button>
                                            <h5 className="fs-16 mb-1 file-name">html.docx</h5>
                                            <p className="text-muted mb-0 fs-12"><span className="file-size">0.3 KB</span>, <span className="create-date">19 Apr, 2022</span></p>
                                        </div>
                                        <div>
                                            <h5 className="fs-12 text-uppercase text-muted mb-3">File Description :</h5>

                                            <div className="table-responsive">
                                                <table className="table table-borderless table-nowrap table-sm">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" style={{width: '35%'}}>File Name :</th>
                                                            <td className="file-name">html.docx</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">File Type :</th>
                                                            <td className="file-type">Documents</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Size :</th>
                                                            <td className="file-size">0.3 KB</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Created :</th>
                                                            <td className="create-date">19 Apr, 2022</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Path :</th>
                                                            <td className="file-path"><div className="user-select-all text-truncate">*:\projects\src\assets\images</div></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div>
                                                <h5 className="fs-12 text-uppercase text-muted mb-3">Share Information:</h5>
                                                <div className="table-responsive">
                                                    <table className="table table-borderless table-nowrap table-sm">
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row" style={{width: '35%'}}>Share Name :</th>
                                                                <td className="share-name">\\*\Projects</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Share Path :</th>
                                                                <td className="share-path">velzon:\Documents\</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-auto border-top border-top-dashed py-3">
                                            <div className="hstack gap-2">
                                                <button type="button" className="btn btn-soft-primary w-100"><i className="ri-download-2-line align-bottom me-1"></i> Download</button>
                                                <button type="button" className="btn btn-soft-danger w-100 remove-file-overview" data-remove-id="" data-bs-toggle="modal" data-bs-target="#removeFileItemModal"><i className="ri-close-fill align-bottom me-1"></i> Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                <button type="button" className="btn w-sm btn-danger" id="remove-folderList" onClick={removeFolder}>Yes, Delete It!</button>
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

export default FileManager