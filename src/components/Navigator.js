import React from 'react';
import logos from "../logos.png";
import {NavLink} from 'react-router-dom';
//React font Awesome Import
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

function Navigator() {
  return (
<nav className="navbar navbar-expand-lg header-nav">
  <NavLink exact to="/" activeClassName="navActive">
  <a className="colorLog"  href="#"><img className="logo" src={logos} alt="logo..."/></a>
  </NavLink>
  <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav " aria-expanded="false" aria-label="Toggle navigation">
  <FontAwesomeIcon icon={faBars} style={{color:"#ffff"}}/>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav bar-nav">
      
      <li className="nav-item active">
        <NavLink exact to="/" activeClassName="navActive">
          <a className="nav-link" href="#">ACCUEIL </a> 
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact to="/Services" activeClassName="navActive">
          <a className="nav-link" href="#">SERVICES</a>
        </NavLink> 
      </li>
      <li className="nav-item">
        <NavLink exact to="/Realisations" activeClassName="navActive">
          <a className="nav-link" href="#">RÉALISATIONS</a>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact to="/Blog" activeClassName="navActive">
          <a className="nav-link" href="#">BLOG</a>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact to="/Contact" activeClassName="navActive">
          <a className="nav-link" href="#">ME CONTACTER</a>
        </NavLink>
      </li>
    </ul>
  </div>
  
</nav>
  )
}
export default Navigator
