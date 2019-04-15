import React from 'react'
import './banner.css'

const banner = (props)=>{
  const style = {
    backgroundImage: `url(${props.img})`
  }
 
  return(
    <div id="banner" style={style}>
      
    </div>
  )
}

export default banner;