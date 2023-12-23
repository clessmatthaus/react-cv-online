import React, { Component } from 'react'

export default class Article extends Component {
  render() {
    let {title, desc, button, subDesc, picture, source} = this.props.it;
    return (
    <div className='portfolio'>
        <div className="col col-md-12 col-lg-14">
          <div className="card card-rea">
              <img className="services-img  card-img-top" src={picture} alt="erreur de télechargement..."/>
              <h1 className="card-title">{title}</h1>
              <p className="card-text">{desc}</p>
              <a href={source} style={{textDecoration: 'none'}} rel="noopener noreferrer" target="_blank"><h5 className="infos-article">{button}</h5></a>                
          </div>                  
              <h6>{subDesc}</h6>
       </div>   
      </div>
    )
  }
}
