import React from 'react'
import classes from './Banner.module.css'

const banner = ({ img, children }) => {
  const style = {
    backgroundImage: `url(${img})`
  }

  return (
    <div className={[classes.banner, classes.wrapperItem].join(' ')} style={style}>
      {children}
    </div>
  )
}

export default banner;