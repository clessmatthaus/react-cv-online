import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Location from '../location-dot-solid.svg';
import Mobile from '../mobile-screen-solid.svg';
import Email from '../envelope-solid.svg';
import Web from '../globe-solid.svg';

function MentionsContent() {
  return (
  <div className='card-accordion'>
    <div className="head-title">
      <h1>MENTIONS LÉGALES</h1>
      <span></span>
    </div>
<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Éditeur du site</Accordion.Header>
       
        <Accordion.Body>
         <h4 style={{fontWeight:'bold'}}>Cless Matthaüs</h4>
         <p style={{fontWeight:'bold', fontSize:'14px'}}><img src={Location} alt=''/> 22 Allée Emile Zola<br/>  91300 Massy, France</p>
          <p className='mob' style={{color: 'blue', marginTop:'-16px'}}><img src={Mobile} alt=''/><a href="tel:0758807164" style={{textDecoration:'none'}}> 07 58 80 71 64</a><br/><img src={Email} alt=''/> <a href="mailto:cless91@live.fr" style={{textDecoration:'none'}}>cless91@live.fr</a></p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Hébergeur</Accordion.Header>
        <Accordion.Body>
        <h4 style={{fontWeight:'bold'}}>Hostinger Ltd</h4>
        <p style={{fontWeight:'bold', fontSize:'14px'}}>61 Rue Lordou Vironos, 6023<br/>Lanarca, Chypre</p>
        <p className='mob' style={{color: 'blue'}}><img src={Web} alt=''/><a href="https://www.hostinger.fr" target="_blank" style={{textDecoration:'none'}}> www.hostinger.fr</a></p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Crédits</Accordion.Header>
        <Accordion.Body>
        <h4 style={{fontWeight:'bold'}}>Crédits</h4>
        <p style={{fontWeight:'bold', fontSize:'14px'}}>Site développé par Cless Matthaüs.
          Tous les droits réservés.
        </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
  )
}

export default MentionsContent
