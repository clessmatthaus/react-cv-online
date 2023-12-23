import React, { Component } from 'react'

export default class Portfolio extends Component {
  state= {
    showInfo: false
  }
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    })
  }
  handleExit = () => {
    this.setState({
      showInfo: !this.state.showInfo
    })
  }
  render() {
    let {title, desc, button, subDesc, picture, source, contenu, retour} = this.props.it;
    return (
    <div className='portfolio'>
        <div className="col col-md-12 col-lg-14">
          <div className="card card-rea">
              <img className="services-img  card-img-top" src={picture} alt="erreur de télechargement..." onClick={this.handleInfo}/>
              <h1 className="card-title">{title}</h1>
              <p className="card-text">{desc}</p>
              <h5 className="infos" onClick={this.handleInfo}>{button}</h5>                 
          </div>                  
              <h6>{subDesc}</h6>
          {
          this.state.showInfo && (
            <div className="modals">
              <div className="infosContent">
                <div className="poppup">
                  <div className="contens">
                  <h2>{title}</h2>
                  <br/>
                  <p>{contenu}</p>
                  <br/>
                  <div className="links-btn">
                  <a href={source} rel="noopener noreferrer" className="button" target="_blank">Code source</a>             
                  <span href="" className="button retour" onClick={this.handleInfo}>{retour}</span>
                  </div>
                </div>
                </div>
             </div>
            </div>
         )
       }
       </div>
      
      </div>
    )
  }
}

