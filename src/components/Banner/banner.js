import React from 'react'
import classes from './Banner.module.css'

const banner = (props)=>{
  const style = {
    backgroundImage: `url(${props.img})`
  }
 
  return(
    <div className={[classes.banner, classes.wrapperItem].join(' ')} style={style}>
      {props.children}
    </div>
  )
}

export default banner;