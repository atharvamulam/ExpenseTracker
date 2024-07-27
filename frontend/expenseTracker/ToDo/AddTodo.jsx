import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddCardTodo from './AddCardTodo';
import { useRecoilState } from 'recoil';
import { verify } from './atom';

function AddTodo() {

  const [v , setV ] = useRecoilState(verify);
  const navigate = useNavigate();

  const handleCardClick = (type) => {
    navigate('/createtodo', { state: { type } });

    setV(type);
  };

  return (
    <div className='d-flex flex-column justify-content-center'>
      <div className='d-flex justify-content-center col-12'>
        <div className='fs-3 m-2 col-5 p-2 d-flex'>
          <div className='col-4'></div>Create Todo</div>
      </div>
      <div className='d-flex justify-content-center'> 
        <div 
          className='col-4 border rounded cursor-pointer'
          onClick={() => handleCardClick('photo')}
          role="button"
          tabIndex={0}
        >
          <AddCardTodo image={"./src/assets/photo.jpg"} name={"Photo"}>
            Submit photo evidence of your completed todo, which we manually approve/deny.
          </AddCardTodo>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-3 mb-3'> 
        <div 
          className='col-4 border rounded bg-white cursor-pointer'
          onClick={() => handleCardClick('self-verify')}
          role="button"
          tabIndex={0}
        >
          <AddCardTodo image={"./src/assets/selfverify.jpg"} name={"Self Verify"}>
            Simply confirm or deny whether you completed the todo or not. There are no time limits to self verify.
          </AddCardTodo>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;