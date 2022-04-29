import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import './App.css';
import Banner from '../components/Banner/banner';
import Sorteio from '../components/Sorteio/sorteio';
import Footer from '../components/Footer/footer';


const App = () => {
  const [background] = useState('https://via.placeholder.com/1920x1080/?text=Background');
  const [banner] = useState('https://via.placeholder.com/1160x220/?text=Banner');


  return (
    <div className="App" >
      <Layout background={background} >
        <Banner img={banner} />
        <Sorteio />
        <Footer />
      </Layout>
    </div >
  );
}

export default App;
