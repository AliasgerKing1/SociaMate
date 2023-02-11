import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = (props) => {
    let isLast = (index) => {
return index === props.crumbs.length - 1;
    }
  return (
    <>
                          <nav aria-label="breadcrumb">
    <ol class="breadcrumb">

    {
        props.crumbs.map((crumbs,ci)=> {
const disabled = isLast(ci) ? " disabled" : ""
            return(
                <li key={ci} class="breadcrumb-item" style={{cursor: 'pointer'}}>
                <Link to="/admin/filemanager" className={`${disabled}`} onClick={()=> props.selected(crumbs)}>{crumbs}</Link>
                </li>
            )
        })
    }
        {/* <li class="breadcrumb-item" style={{cursor: 'pointer'}}><Link to="/admin/filemanager">Home</Link></li>
        <li class="breadcrumb-item" style={{cursor: 'pointer'}}><Link to="#">Base UI</Link></li>
        <li class="breadcrumb-item active" aria-current="page" style={{cursor: 'pointer'}}>General</li> */}
    </ol>
</nav>
    </>
  )
}

export default BreadCrumb