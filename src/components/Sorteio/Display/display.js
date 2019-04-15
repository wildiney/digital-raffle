import React from 'react'
import './display.css'

const display = (props)=>{
  return(
    <span className='quad nome'>{props.char}</span>
  );
}

export default display;