import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { addBoard,getBoard, updateBoard,deleteBoard } from "../../../Services/TaskBoardService/TaskBoardService";

import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";
import NotificationModel from "../../shared/NotificationModel/NotificationModel";
import RightMenu from "../../shared/RightMenu/RightMenu";
import ChooseLayout from "../../shared/ChooseLayout/ChooseLayout";


const TaskBoard = () => {
    let navigate = useNavigate();
    let [innerData, setInnerData] = useState({
        projectname : "",
        tasktitle : "",
        taskdescription : "",
        duedate : "",
        tags : "",
        tasksprogress : ""
    })
    let [board, setBoard] = useState([])
    let [Board_id, setBoard_id] = useState("")
    let [taskBoard, setTaskBoard] = useState("");
    let [project_id, setProject_id] = useState("");
    let [project_name, setProject_name] = useState("");
    let[boardNameArr,setBoardNameArr] = useState([]);

    useEffect(()=> {
        getBoard().then(result=> {
            setBoard(result.data)
        })
    },[])
    let obj =  {
        name : taskBoard,
        innerData : innerData
    }
    let handleAdd = ()=> {
        addBoard(obj).then(result=> {
           setBoard(result.data)
        })
setBoardNameArr([...boardNameArr, taskBoard])
    }
let addContent = (id) => {
    setBoard_id(id);
} 
let addInnerData = () => {
    updateBoard(Board_id, innerData).then(result=> {
        setBoard(result.data)
    })
}

let confDelete = (id, projectname) => {
    setProject_id(id)
    setProject_name(projectname)
}
let deleteCard = () => {
deleteBoard(project_id).then(result=> {
console.log(result.data)
}).catch((error)=> {

})
}
let detailPage = (id) => {
navigate(`/admin/taskboard/details/${id}`)
}
  return (
    <>
    {/* <!-- Begin page --> */}
    <div id="layout-wrapper">

    <Header />

<NotificationModel />
<RightMenu />


        {/* <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== --> */}
        <div className="main-content">

            <div className="page-content">
                <div className="container-fluid">

                    {/* <!-- start page title --> */}
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">Task Board</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><a href="#">Tasks</a></li>
                                        <li className="breadcrumb-item active">Task Board</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- end page title --> */}

                    <div className="card">
                        <div className="card-body">
                            <div className="row g-2">
                                <div className="col-lg-auto">
                                    <div className="hstack gap-2">
                                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createboardModal"><i className="ri-add-line align-bottom me-1"></i> Create Board</button>
                                    </div>
                                </div>
                                {/* <!--end col--> */}
                                <div className="col-lg-3 col-auto">
                                    <div className="search-box">
                                        <input type="text" className="form-control search" id="search-task-options" placeholder="Search for project, tasks..." />
                                        <i className="ri-search-line search-icon"></i>
                                    </div>
                                </div>
                                <div className="col-auto ms-sm-auto">
                                    <div className="avatar-group" id="newMembar">
                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Nancy">
                                            <img src="/assets/images/users/avatar-5.jpg" alt="" className="rounded-circle avatar-xs" />
                                        </a>
                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Frank">
                                            <img src="/assets/images/users/avatar-3.jpg" alt="" className="rounded-circle avatar-xs" />
                                        </a>
                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Tonya">
                                            <img src="/assets/images/users/avatar-10.jpg" alt="" className="rounded-circle avatar-xs" />
                                        </a>
                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Thomas">
                                            <img src="/assets/images/users/avatar-8.jpg" alt="" className="rounded-circle avatar-xs" />
                                        </a>
                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Herbert">
                                            <img src="/assets/images/users/avatar-2.jpg" alt="" className="rounded-circle avatar-xs" />
                                        </a>
                                        <a href="#addmemberModal" data-bs-toggle="modal" className="avatar-group-item">
                                            <div className="avatar-xs">
                                                <div className="avatar-title rounded-circle">
                                                    +
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* <!--end col--> */}
                            </div>
                            {/* <!--end row--> */}
                        </div>
                        {/* <!--end card-body--> */}
                    </div>
                    {/* <!--end card--> */}
                    
                    <div className="tasks-board mb-3" id="kanbanboard">
                        {
                            board ? ( board.map((x,i)=> {
                                let progress = x.innerData[0].tasksprogress;
                                return(
                                    <div className="tasks-list" key={i}>
                            <div className="d-flex mb-3">
                                <div className="flex-grow-1">
                                    <h6 className="fs-14 text-uppercase fw-semibold mb-0"> {x.name} <small className="badge bg-success align-bottom ms-1 totaltask-badge">1</small></h6>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="dropdown card-header-dropdown">
                                        <a className="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="fw-medium text-muted fs-13">Priority<i className="mdi mdi-chevron-down ms-1"></i></span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Priority</a>
                                            <a className="dropdown-item" href="#">Date Added</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                x.innerData[0].tasktitle ? ( <div data-simplebar className="tasks-wrapper px-3 mx-n3">
                                <div id="new-task" className="tasks">
                                    <div className="card tasks-box">
                                        <div className="card-body">
                                            <div className="d-flex mb-2">
                                                <a href="#" className="text-muted fw-medium fs-14 flex-grow-1">#VL5287</a>
                                                <div className="dropdown">
                                                    <a href="#;" className="text-muted" id="dropdownMenuLink2" data-bs-toggle="dropdown" aria-expanded="false"><i className="ri-more-fill"></i></a>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                                                        <li><a className="dropdown-item" to="/admin/taskboard/details" onClick={()=>detailPage(x._id)}><i className="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                                View</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="ri-edit-2-line align-bottom me-2 text-muted"></i>
                                                                Edit</a></li>
                                                        <li><a className="dropdown-item" data-bs-toggle="modal" href="#deleteRecordModal" onClick={()=> confDelete(x._id,x.name)}><i className="ri-delete-bin-5-line align-bottom me-2 text-muted"></i>
                                                                Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <h6 className="fs-16 text-truncate task-title"><a href="apps-tasks-details.html" className="link-dark d-block">{x.innerData[0].tasktitle}</a></h6>
                                            <p className="text-muted">{x.innerData[0].taskdescription}</p>
                                            <div className="tasks-img rounded" style={{backgroundImage: 'url(/assets/images/small/img-4.jpg)'}}></div>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <span className="badge badge-soft-primary">{x.innerData[0].tags}</span>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <div className="avatar-group">
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Frank">
                                                            <img src="/assets/images/users/avatar-3.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                        <a href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Herbert">
                                                            <img src="/assets/images/users/avatar-2.jpg" alt="" className="rounded-circle avatar-xxs" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer border-top-dashed">
                                            <div className="d-flex">
                                                <div className="flex-grow-1">
                                                    <span className="text-muted"><i className="ri-time-line align-bottom me-1"></i>
                                                    {x.innerData[0].duedate}</span>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <ul className="link-inline mb-0">
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-eye-line align-bottom"></i> 11</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-question-answer-line align-bottom"></i>
                                                                26</a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="#" className="text-muted"><i className="ri-attachment-2 align-bottom"></i> 30</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end card-body--> */}
                                        <div className="progress progress-sm">
                                            <div className="progress-bar bg-success" style={{width: progress + "%" }} aria-valuenow="3" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    {/* <!--end card--> */}
                                </div>
                            </div>) : <div className="tasks-img rounded" style={{backgroundImage: 'url(/assets/images/task.png)', height: '235px', width: "auto", backgroundPosition : 'center',backgroundRepeat : "no-repeat"}}></div>
                           
                            }
                            <div className="my-3">
                                <button className="btn btn-soft-info w-100" data-bs-toggle="modal" data-bs-target="#creatertaskModal" onClick={()=> addContent(x._id)}>Add More</button>
                            </div>
                        </div>
                                )
                            })) : ""
              
                        }
                        {/* <!--end tasks-list--> */}
                    </div>
                    {/* <!--end task-board--> */}

                    <div className="modal fade" id="addmemberModal" tabIndex="-1" aria-labelledby="addmemberModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content border-0">
                                <div className="modal-header p-3 bg-soft-warning">
                                    <h5 className="modal-title" id="addmemberModalLabel">Add Member</h5>
                                    <button type="button" className="btn-close" id="btn-close-member" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="row g-3">
                                            <div className="col-lg-12">
                                                <label htmlFor="submissionidInput" className="form-label">Submission ID</label>
                                                <input type="number" className="form-control" id="submissionidInput" placeholder="Submission ID" />
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-12">
                                                <label htmlFor="profileimgInput" className="form-label">Profile Images</label>
                                                <input className="form-control" type="file" id="profileimgInput" />
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-6">
                                                <label htmlFor="firstnameInput" className="form-label">First Name</label>
                                                <input type="text" className="form-control" id="firstnameInput" placeholder="Enter firstname" />
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-6">
                                                <label htmlFor="lastnameInput" className="form-label">Last Name</label>
                                                <input type="text" className="form-control" id="lastnameInput" placeholder="Enter lastname" />
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-12">
                                                <label htmlFor="designationInput" className="form-label">Designation</label>
                                                <input type="text" className="form-control" id="designationInput" placeholder="Designation" />
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-12">
                                                <label htmlFor="titleInput" className="form-label">Title</label>
                                                <input type="text" className="form-control" id="titleInput" placeholder="Title" />
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-6">
                                                <label htmlFor="numberInput" className="form-label">Phone Number</label>
                                                <input type="text" className="form-control" id="numberInput" placeholder="Phone number" />
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-6">
                                                <label htmlFor="joiningdateInput" className="form-label">Joining Date</label>
                                                <input type="text" className="form-control" id="joiningdateInput" data-provider="flatpickr" placeholder="Select date" />
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-12">
                                                <label htmlFor="emailInput" className="form-label">Email ID</label>
                                                <input type="email" className="form-control" id="emailInput" placeholder="Email" />
                                            </div>
                                            {/* <!--end col--> */}
                                        </div>
                                        {/* <!--end row--> */}
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-light" data-bs-dismiss="modal"><i className="ri-close-line align-bottom me-1"></i> Close</button>
                                    <button type="button" className="btn btn-success" id="addMember">Add Member</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--end add member modal--> */}

                    <div className="modal fade" id="createboardModal" tabIndex="-1" aria-labelledby="createboardModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content border-0">
                                <div className="modal-header p-3 bg-soft-info">
                                    <h5 className="modal-title" id="createboardModalLabel">Add Board</h5>
                                    <button type="button" className="btn-close" id="addBoardBtn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <label htmlFor="boardName" className="form-label">Board Name</label>
                                                <input type="text" className="form-control" id="boardName" placeholder="Enter board name" name="board_name" onChange={(e)=> setTaskBoard(e.target.value)}/>
                                            </div>
                                            <div className="mt-4">
                                                <div className="hstack gap-2 justify-content-end">
                                                    <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-success" id="addNewBoard" onClick={handleAdd}>Add
                                                        Board</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--end add board modal--> */}

                    <div className="modal fade" id="creatertaskModal" tabIndex="-1" aria-labelledby="creatertaskModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content border-0">
                                <div className="modal-header p-3 bg-soft-info">
                                    <h5 className="modal-title" id="creatertaskModalLabel">Create New Task</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form action="#">
                                        <div className="row g-3">
                                            <div className="col-lg-12">
                                                <label htmlFor="projectName" className="form-label">Project Name</label>
                                                <input type="text" className="form-control" id="projectName" placeholder="Enter project name" onChange={(e)=> setInnerData((data)=> {
                                                return {...data , projectname : e.target.value}
                                            })} />
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-12">
                                                <label htmlFor="sub-tasks" className="form-label">Task Title</label>
                                                <input type="text" className="form-control" id="sub-tasks" placeholder="Task title" onChange={(e)=> setInnerData((data)=> {
                                                return {...data , tasktitle : e.target.value}
                                            })} />
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-12">
                                                <label htmlFor="task-description" className="form-label">Task
                                                    Description</label>
                                                <textarea className="form-control" id="task-description" rows="3" placeholder="Task description" onChange={(e)=> setInnerData((data)=> {
                                                return {...data , taskdescription : e.target.value}
                                            })}></textarea>
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-12">
                                                <label htmlFor="formFile" className="form-label">Tasks Images</label>
                                                <input className="form-control" type="file" id="formFile" />
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-12">
                                                <label htmlFor="tasks-progress" className="form-label">Add Team Member</label>
                                                <div data-simplebar style={{height: '95px'}}>
                                                    <ul className="list-unstyled vstack gap-2 mb-0">
                                                        <li>
                                                            <div className="form-check d-flex align-items-center">
                                                                <input className="form-check-input me-3" type="checkbox" value="anna-adame" id="anna-adame" />
                                                                <label className="form-check-label d-flex align-items-center" htmlFor="anna-adame">
                                                                    <span className="flex-shrink-0">
                                                                        <img src="/assets/images/users/avatar-1.jpg" alt="" className="avatar-xxs rounded-circle" />
                                                                    </span>
                                                                    <span className="flex-grow-1 ms-2">
                                                                        Anna Adame
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check d-flex align-items-center">
                                                                <input className="form-check-input me-3" type="checkbox" value="frank-hook" id="frank-hook" />
                                                                <label className="form-check-label d-flex align-items-center" htmlFor="frank-hook">
                                                                    <span className="flex-shrink-0">
                                                                        <img src="/assets/images/users/avatar-3.jpg" alt="" className="avatar-xxs rounded-circle" />
                                                                    </span>
                                                                    <span className="flex-grow-1 ms-2">
                                                                        Frank Hook
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check d-flex align-items-center">
                                                                <input className="form-check-input me-3" type="checkbox" value="alexis-clarke" id="alexis-clarke" />
                                                                <label className="form-check-label d-flex align-items-center" htmlFor="alexis-clarke">
                                                                    <span className="flex-shrink-0">
                                                                        <img src="/assets/images/users/avatar-6.jpg" alt="" className="avatar-xxs rounded-circle" />
                                                                    </span>
                                                                    <span className="flex-grow-1 ms-2">
                                                                        Alexis Clarke
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check d-flex align-items-center">
                                                                <input className="form-check-input me-3" type="checkbox" value="herbert-stokes" id="herbert-stokes" />
                                                                <label className="form-check-label d-flex align-items-center" htmlFor="herbert-stokes">
                                                                    <span className="flex-shrink-0">
                                                                        <img src="/assets/images/users/avatar-2.jpg" alt="" className="avatar-xxs rounded-circle" />
                                                                    </span>
                                                                    <span className="flex-grow-1 ms-2">
                                                                        Herbert Stokes
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check d-flex align-items-center">
                                                                <input className="form-check-input me-3" type="checkbox" value="michael-morris" id="michael-morris" />
                                                                <label className="form-check-label d-flex align-items-center" htmlFor="michael-morris">
                                                                    <span className="flex-shrink-0">
                                                                        <img src="/assets/images/users/avatar-7.jpg" alt="" className="avatar-xxs rounded-circle" />
                                                                    </span>
                                                                    <span className="flex-grow-1 ms-2">
                                                                        Michael Morris
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check d-flex align-items-center">
                                                                <input className="form-check-input me-3" type="checkbox" value="nancy-martino" id="nancy-martino" />
                                                                <label className="form-check-label d-flex align-items-center" htmlFor="nancy-martino">
                                                                    <span className="flex-shrink-0">
                                                                        <img src="/assets/images/users/avatar-5.jpg" alt="" className="avatar-xxs rounded-circle" />
                                                                    </span>
                                                                    <span className="flex-grow-1 ms-2">
                                                                        Nancy Martino
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check d-flex align-items-center">
                                                                <input className="form-check-input me-3" type="checkbox" value="thomas-taylor" id="thomas-taylor" />
                                                                <label className="form-check-label d-flex align-items-center" htmlFor="thomas-taylor">
                                                                    <span className="flex-shrink-0">
                                                                        <img src="/assets/images/users/avatar-8.jpg" alt="" className="avatar-xxs rounded-circle" />
                                                                    </span>
                                                                    <span className="flex-grow-1 ms-2">
                                                                        Thomas Taylor
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check d-flex align-items-center">
                                                                <input className="form-check-input me-3" type="checkbox" value="tonya-noble" id="tonya-noble" />
                                                                <label className="form-check-label d-flex align-items-center" htmlFor="tonya-noble">
                                                                    <span className="flex-shrink-0">
                                                                        <img src="/assets/images/users/avatar-10.jpg" alt="" className="avatar-xxs rounded-circle" />
                                                                    </span>
                                                                    <span className="flex-grow-1 ms-2">
                                                                        Tonya Noble
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-4">
                                                <label htmlFor="due-date" className="form-label">Due Date</label>
                                                <input type="text" className="form-control" id="due-date" data-provider="flatpickr" placeholder="Select date" onChange={(e)=> setInnerData((data)=> {
                                                return {...data , duedate : e.target.value}
                                            })}  />
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-4">
                                                <label htmlFor="categories" className="form-label">Tags</label>
                                                <input type="text" className="form-control" id="categories" placeholder="Enter tag" onChange={(e)=> setInnerData((data)=> {
                                                return {...data , tags : e.target.value}
                                            })} />
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="col-lg-4">
                                                <label htmlFor="tasks-progress" className="form-label">Tasks Progress</label>
                                                <input type="text" className="form-control" maxLength="3" id="tasks-progress" placeholder="Enter progress" onChange={(e)=> setInnerData((data)=> {
                                                return {...data , tasksprogress : e.target.value}
                                            })} /> 
                                            </div>
                                            {/* <!--end col--> */}
                                            <div className="mt-4">
                                                <div className="hstack gap-2 justify-content-end">
                                                    <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                                    <a style={{cursor : "pointer"}} className="btn btn-success" onClick={addInnerData}>Add Task</a>
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
                    {/* <!--end add board modal--> */}

                    <div className="modal fade zoomIn" id="deleteRecordModal" tabIndex="-1" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="btn-close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="mt-2 text-center">
                                        <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop" colors="primary:#f7b84b,secondary:#f06548" style={{width: '100px',height:'100px'}}>
                                        </lord-icon>
                                        <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                                            <h4>Are you sure to remove {project_name} ?</h4>
                                            <p className="text-muted mx-4 mb-0">Are you sure you want to remove this task ?
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                                        <button type="button" className="btn w-sm btn-light" data-bs-dismiss="modal">Close</button>
                                        <a style={{cursor : "pointer"}} className="btn w-sm btn-danger" id="delete-record" onClick={deleteCard}>Yes, Delete
                                            It!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--end modal --> */}

                </div>
                {/* <!-- container-fluid --> */}
            </div>
            {/* <!-- End Page-content --> */}

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

    {/* <!--preloader--> */}
    {/* <div id="preloader">
        <div id="status">
            <div className="spinner-border text-primary avatar-sm" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </div> */}

    <div className="customizer-setting d-none d-md-block">
        <div className="btn-info btn-rounded shadow-lg btn btn-icon btn-lg p-2" data-bs-toggle="offcanvas" data-bs-target="#theme-settings-offcanvas" aria-controls="theme-settings-offcanvas">
            <i className='mdi mdi-spin mdi-cog-outline fs-22'></i>
        </div>
    </div>

    {/* <!-- Theme Settings --> */}
   <ChooseLayout/>
   </>
  )
}

export default TaskBoard