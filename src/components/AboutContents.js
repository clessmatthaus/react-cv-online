import React, { Component } from 'react'
import cless from "../cless.jpg";
import Navigator from "../components/Navigator.js";
import Footer from "../components/Footer.js";

export default class AboutContents extends Component {
  render() {
 
    return (
        <div> 
        
        <div className="about-container">
        <div className="about-card">
            <div className="first-segment">
                <h1>À Propos</h1>
                <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivie une formation d'<b>integrateur-développeur web</b> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <b>développement web</b>.
                    <br/>
                    Basé à Nantes, je suis en recherche d'une alternance ou stage au sein d'une agence digitale pour consolider ma formation de <b>développeur web full stack</b>.
                    <br/>                 
                    J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
                    </p>
            </div>
            <div className="second-segment">
                <div className="card-img">
                    <img className="cless" src={cless} alt=""/>
                </div>
                <div className="card-skills">
                    <h1>Mes compétences</h1>
                    <p>HTML 90%</p>
                    <div className="bar"><div id="p-html"></div></div>
                    
                    <p>CSS3 80%</p>
                    <div className="bar"><div id="p-css"></div></div>
                   
                    <p>JAVASCRIPT 70%</p>
                    <div className="bar"><div id="p-js"></div></div>
                   
                    <p>PHP 60%</p>
                    <div className="bar"><div id="p-php"></div></div>
                    
                    <p>REACT 50%</p> 
                    <div className="bar"><div id="p-react"></div></div>  
                </div>
            </div>
        </div>
    </div>
    
  </div>
    ) 
  
  }
}
