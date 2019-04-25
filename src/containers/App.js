import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import './App.css';
import Banner from '../components/Banner/banner';
import Sorteio from '../components/Sorteio/sorteio';

class App extends Component {
  state = {
    background: 'https://loremflickr.com/1920/1080/frame',
    banner: 'https://loremflickr.com/1920/150/abstract'
  }

  render() {
    
    return (
      <div className="App">
        <Layout background={this.state.background} >
          <Banner img={this.state.banner} />
          <Sorteio />
        </Layout>
      </div>
    );
  }
}

export default App;
