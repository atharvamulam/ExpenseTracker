import React, { useEffect, useState } from "react";
import { IoDiamondOutline } from "react-icons/io5";
import { useRecoilState, useRecoilValue } from "recoil";
import { date, time, todo, verify } from "./atom";
import { useNavigate } from "react-router-dom";

function CreateTodo() { 
  const navigate = useNavigate();
  const veri = useRecoilValue(verify);
  const dat = new Date().toISOString().split("T")[0];

  const [startDate, setStartDate] = useRecoilState(date);
  const [startTime, setStartTime] = useRecoilState(time);
  const [td, setTd] = useRecoilState(todo);

  useEffect(() => {
    const checkDateTime = () => {
      const currentTime = new Date();
      const currentTimeString = currentTime.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: "numeric", 
        minute: "numeric"
      });

      if (dat == startDate && startTime < currentTimeString) {
        alert("Please select a future time");
        setStartTime(currentTime.toLocaleTimeString('en-IN', { 
          hour12: false, 
          hour: "numeric", 
          minute: "numeric"
        }));
      }
    };

    checkDateTime();
    const interval = setInterval(checkDateTime, 6000); // Check every minute

    return () => clearInterval(interval);
  }, [startDate, startTime, dat]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any final validations here
    navigate("/finaltodo");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='d-flex flex-column justify-content-center border col-10'>
          <div className="form-group">
            <div className='d-flex justify-content-center col-12'>
              <div className='fs-3 m-2 col-5 d-flex'>
                <div className='col-4'></div>New Todo
              </div>
            </div>
            <div className='d-flex flex-row border justify-content-center'>
              <div className='col-2'></div>
              <div className='m-5 col-4 fs-4'>
                I will send a <span className='bg-primary border text-white rounded p-2'>{veri !== "photo" ? "self-verified photo" : veri}</span> of <br />
                <input 
                  placeholder='Enter the to do'
                  onChange={(e) => setTd(e.target.value)}
                  value={td}
                  required 
                  className='rounded mt-2 p-2'
                />
                <br />
                Before
                <div className="">
                  <div className="d-flex mt-2">
                    <input 
                      type="date" 
                      value={startDate} 
                      min={dat} 
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                    <input 
                      type="time" 
                      value={startTime}  
                      onChange={(e) => setStartTime(e.target.value)}
                    />
                    <br />
                  </div>
                  <div className="mt-3">
                    or <span className="bg-primary text-white rounded p-2 col-5 mt-2">forfeit 5 <IoDiamondOutline size={18} className="mb-1"/></span>
                  </div> 
                </div>
              </div> 
            </div>
            <div className="d-flex flex-row justify-content-center">
              <button type="submit" className="mt-3 rounded col-1">Next</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateTodo;