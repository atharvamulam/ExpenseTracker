import React, { useRef, useState } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { useRecoilValue } from 'recoil';
import { verify, todo, date, time } from './atom';
import { IoDiamondOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

function FinalTodo() {
  const navigate = useNavigate();
  const [signatureCount, setSignatureCount] = useState(0);
  const canvasRef = useRef(null);
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let mont = month[d.getMonth()];

  const veri = useRecoilValue(verify);
  const td = useRecoilValue(todo);
  const dat = useRecoilValue(date);
  const tm = useRecoilValue(time);

  const handleSubmit = async () => {
    if (signatureCount <= 2) {
      alert("First sign below");
      return;
    }

    const newDateObj = moment().add(10, 'minutes').toDate();

    try {
      const response = await fetch("http://localhost:3001/user/todo", {
        method: "POST",
        body: JSON.stringify({
          username: "param",
          date: dat,
          month :mont ,
          time: tm,
          deletetime: newDateObj,
          todo: td,
          veri: veri,
        }),
        headers: {
          "Content-Type": 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      await response.json();
      alert("data inserted");
      navigate("/dashboard");
    } catch (error) {
      console.error('Error:', error);
      alert("An error occurred while submitting the todo");
    }
  };

  const handleResetClick = () => {
    canvasRef.current?.resetCanvas();
    setSignatureCount(0);
  };

  const styles = {
    border: '0.0625rem solid #9c9c9c',
    borderRadius: '0.25rem',
  };

  return (
    <div>
      <div className='d-flex flex-column col'>
        <div className='d-flex flex-row justify-content-center'>
          <div className='fs-3 fw-bold '> Confirm Todo</div>
        </div>
   
        <div className='d-flex flex-row justify-content-center'>
          <div className=''>
            You have pledged to send a <span className='fw-bold text-primary'>{veri !== "photo" ? "self-verified photo" : veri}</span> <br></br> of <span className='fw-bold text-primary'> "{td}"</span> before <span className='fw-bold text-primary'> {dat} {tm}</span> <br></br>
            <div className='mt-2'> If you fail to submit <span className='fw-bold text-primary'>{veri}</span> evidence ,<br></br> you'll <span className='fw-bold text-primary'>forfeit 5 <IoDiamondOutline size={10} className="mb-1"/></span> <br></br> </div>
            <div className='mt-2'> This Todo can be deleted within 10 <br></br> minutes of its creation .</div><br></br><div className='fw-bold fs-4'>Sign Below To commit</div>
          </div>
        </div>

        <div className='d-flex flex-row justify-content-center'>
          <ReactSketchCanvas
            ref={canvasRef}
            style={styles}
            width="260px"
            height="100px"
            strokeWidth={3}
            strokeColor="black"
            onChange={() => setSignatureCount(prev => prev + 1)}
          />
          <div className='m-2'></div>
        </div>

        <div className='d-flex flex-row justify-content-center mt-3'>
          <button className='rounded me-2' onClick={handleResetClick}>Reset</button>
          <button className='rounded' onClick={handleSubmit}>Submit</button>
        </div>

      </div>
    </div>
  );
}

export default FinalTodo;