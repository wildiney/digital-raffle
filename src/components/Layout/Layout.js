import React from 'react';
import classes from './Layout.module.css';


const layout = ({ background, children }) => {
  const style = {
    backgroundImage: `url(${background})`
  }
  return (
    <div className={classes.content} style={style}>
      <div className={classes.wrapperContent}>
        {children}
      </div>
    </div>
  )
}

export default layout;