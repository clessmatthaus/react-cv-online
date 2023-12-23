import React from 'react';
import RealisationsContent from '../components/RealisationsContent';
import Navigator from "../components/Navigator.js";
import Footer from "../components/Footer.js";
function Realisations() {
  return (
    <div>
      <Navigator/>
     <RealisationsContent/>
     <Footer/>
    </div>
  )
}

export default Realisations
