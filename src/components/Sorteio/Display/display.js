import React from 'react'
import './display.css'

const display = (props)=>{
  return(
    <span className='quad nome'><span>{props.char}</span></span>
  );
}

export default display;