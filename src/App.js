import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Slider from './components/HeaderSlider';
import LatestWorks from './components/LastestWorks';
import Services from './components/Services';

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Services />
      <LatestWorks />
      <Footer />
    </>
  );
}

export default App;
