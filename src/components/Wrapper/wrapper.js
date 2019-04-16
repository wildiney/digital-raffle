import React from 'react';
import './wrapper.css';
import Banner from '../Banner/banner';
import Sorteio from '../Sorteio/sorteio';

const wrapper = (props) => {
  const style = {
    backgroundImage: `url(${props.background})`
  }
  return (
    <div id="wrapper" style={style}>
      <div className="wrapperContent">
        <Banner img={props.banner} />
        <Sorteio display={props.display} />
        <div className="btn_sortear">
          <button className="btn" onClick={props.clicked}>SORTEAR</button>
        </div>
      </div>
    </div>
  )
}

export default wrapper;