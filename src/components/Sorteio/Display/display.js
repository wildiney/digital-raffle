import React from 'react'
import classes from './Display.module.css'

const display = (props) => {
  return (
    <span className={[classes.quad, classes.nome].join(' ')}>
      <span>{props.char}</span>
    </span>
  );
}

export default display;