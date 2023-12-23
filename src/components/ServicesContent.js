import React from 'react'
import Navigator from "../components/Navigator.js";
import Footer from "../components/Footer.js";
import Banner from '../code2.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import UI from '../desktop-solid.svg';
import Web from '../code-solid.svg';
import Mobile from '../mobile-screen.svg';

function ServicesContent() {
  return (
    <div className='service-section'>
      <div className="banner-img">
        <img className="banner" src={Banner} alt="erreur de télechargement..."/>
      </div>
      <div className="head-title">
        <h1>MON OFFRE DE SERVICES</h1>
        <p>Voici les prestations sur lesquelles je peux intervenir</p>
        <span></span>
      </div>
      <div className="container">
        <div className="row g-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img className="services-icons  card-img-top" src={UI} alt="erreur de télechargement..."/>
                <h1 className="card-title">UX DESIGN</h1>
                <p className="card-text"><b>L'UX Design</b> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img className="services-icons card-img-top" src={Web} alt="erreur de télechargement..."/>
                <h1 className="card-title">DÉVELEPPEMENT WEB</h1>
                <p className="card-text">Le <b>développement de sites web</b> repose sur l'utilisation des langages HTML, CSS, Javascript et PHP.</p>
            
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img className="services-icons card-img-top" src={Mobile} alt="erreur de télechargement..."/>
                <h1 className="card-title">DÉVELEPPEMENT MOBILE</h1>
                <p className="card-text">Le <b>développement d'applications mobiles</b> repose sur l'utilisation des langages JAVA, KOTLIN, SWIFT et aussi des frameworks comme REACT NATIVE et FLUTTER...</p>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default ServicesContent
