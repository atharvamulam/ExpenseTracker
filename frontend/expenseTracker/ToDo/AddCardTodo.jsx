import React from 'react'

function AddCardTodo({image, name , children}) {
  return (
    <div className=''>

    <div className='d-flex flex-row col-12 '>
    <div className='border m-3 rounded'> <div className='image m-3'> <img src={`${image}`} className='rounded'   width={80} height={80}></img> </div></div>

    <div className='d-flex flex-column'>
      <div className='fs-3 mt-2'>{name}</div>
      <div className='col-12 '> {children}</div>
    </div>
      
    </div>
      
    </div>
  )
}

export default AddCardTodo
