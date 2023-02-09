import React, { useEffect, useRef, useState } from 'react';

const Timer = () => {
    const [days, setDays] = useState(0);
  const [stopCheck, setStopCheck] = useState(false);
  const [now, setNow] = useState(null);
  const [time, setTime] = useState(null);
 
  const intervalRef = useRef(null)
  let handleStart = () => {
    setTime(Date.now());
    setNow(Date.now());
    intervalRef.current = setInterval(()=> {
    setTime(Date.now());
    },10)
      }
      let handleStop = () => {
clearInterval(intervalRef.current)
setStopCheck(true)
}
let timePassed = (time - now) / 1000;
let resetTimer = () => {
        if(stopCheck === true) {
        setTime(null);
        setNow(null);
        setStopCheck(false)
    }
    }

  return (
    <>
                            <div className="card">
                                <div className="card-body text-center">
                                    <h6 className="card-title mb-3 flex-grow-1 text-start">Time Tracker</h6>
                                    <div className="mb-2">
                                        <lord-icon src="https://cdn.lordicon.com/kbtmbyzy.json" trigger="loop" colors="primary:#405189,secondary:#02a8b5" style={{width: '90px', height: '90px'}}>
                                        </lord-icon>
                                    </div>
                                    <h3 className="mb-1">{timePassed.toFixed(3)} sec </h3>
                                    <h5 className="fs-14 mb-4">Profile Page Tracker</h5>
                                    <div className="hstack gap-2 justify-content-center">
                                        <button className="btn btn-primary btn-sm" onClick={resetTimer}><i className="ri-share-circle-line align-bottom me-1"></i> Reset</button>
                                        <button className="btn btn-danger btn-sm" onClick={handleStop}><i className="ri-stop-circle-line align-bottom me-1"></i> Stop</button>
                                        <button className="btn btn-success btn-sm" onClick={handleStart}><i className="ri-play-circle-line align-bottom me-1"></i> Start</button>
                                    </div>
                                </div>
                            </div>
    </>
  )
}

export default Timer