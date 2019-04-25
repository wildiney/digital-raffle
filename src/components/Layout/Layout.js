import React from 'react';
import classes from './Layout.module.css';


const layout = (props) => {
  const style = {
    backgroundImage: `url(${props.background})`
  }
  return (
    <div className={classes.content} style={style}>
      <div className={classes.wrapperContent}>
        {props.children}
      </div>
    </div>
  )
}

export default layout;