import React from 'react'

const CoustomContextMenu = ({top, left}) => {
  return (
    <>
                                     <div className="row">
    <div className="col-md-3">
    <div class="card card-body" style={{top : {top}+"px", left : {left}+'px'}}>
                                        <div class="d-flex align-items-center text-center">
                                            <div class="flex-grow-1">
                                           
                                            <div class="dropdownmenu-success">
                                            <a class="dropdown-item" href="#">Action</a>
                                           <a class="dropdown-item" href="#">Anotheraction</a>
                                         <a class="dropdown-item" href="#">Something else here</a>
                                            <a class="dropdown-item" href="#">Separatedlink</a>
                                                                        </div>


                                            </div>
                                        </div>

                                    </div>
                                    </div>
</div>
    </>
  )
}

export default CoustomContextMenu