import React, { Component, Fragment } from 'react'

export default class UserProfilerCard extends Component {
    constructor(props){
        super(props);

    }
  render() {
    let {name, avatar_url, bio, html_url,  public_repos, followers, created_at, updated_at, location} = this.props.profil;
    return (
      <Fragment>
        <div className='profil'>
          <div className='img-profil'>
          <img src={avatar_url} alt='' className='img-fluid'/>
          </div>
          <div className='profil-content'>
              <h4 className='profil-name'>{name}</h4>
              <p>{bio}</p>
              <a href={html_url} target='_blank'><h5 className='btn-profil'>Profil</h5></a>
              <div className='follo'>
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
              <h5> {location}</h5>
              </div>
              <div className='cpt'>
                <div className='crea'>
                  <h5><b>Date de création:</b> </h5>
                    <span>{created_at}</span>
                </div>
                <div className='maj'>
                  <h5><b>Dernière mise à jour:</b></h5>
                  <span> {updated_at}</span>
                </div>
              </div>
          </div>
        </div> 
      </Fragment>
    )
  }
}
