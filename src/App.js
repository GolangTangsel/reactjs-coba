import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/App.css'
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import OurStory from './components/templates/ourstory';
import ScrollTop from './components/atoms/scrolltop';

function App() {
  return (
    <div className="App">
      <Header />
      <OurStory/>
      <Footer />
      <ScrollTop/>
    </div>
  );
}

export default App;
