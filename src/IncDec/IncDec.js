import React from 'react';
import { useState } from 'react';
import "./incdec.css"

function IncDec() {
  const [count, setCount] = useState(0);

  function inc() {
    setCount(prev => prev + 1)
  }

  function dec() {
    setCount(prev => prev - 1)
  }

  function trya() {
    setCount (prev => prev =0)
  }

  return (
    <>
      <div className='app w-50'>
        <h3>Count : {count} </h3>
        <button
          onClick={inc}
          className='btn btn-outline-success'>
          Increment
        </button>
        <button
          onClick={dec}
          className='btn btn-outline-danger'>
          Decrement
        </button>
        <button
          onClick={trya}
          className='btn btn-outline-primary'>
          Try Again
        </button>
      </div>
    </>
  )

}
export default IncDec;