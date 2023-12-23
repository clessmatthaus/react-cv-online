import React from 'react'

import Banner from '../code2.jpg';
import PortfolioList from '../components/portfolio/PortfolioList.js';
import Profile from '../components/githubProfil/Profile.js';
function RealisationsContent() {
  return (
    <div>
       
      <div className="banner-img">
          <img className="banner" src={Banner} alt="erreur de télechargement..."/>
    </div>    
    <div className="head-title">
          <h1>PORTFOLIO</h1>
          <p>Voici Quelques-unes de mes réalisations</p>
          <span></span>
    </div>
      <PortfolioList/>  
      
    </div>
  )
}

export default RealisationsContent
