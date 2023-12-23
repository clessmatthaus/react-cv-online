import React, { Component, Fragment } from 'react'

export default class UserProfilerDetails extends Component {
    constructor(props){
        super(props);
    }
  render() {
    let {public_repos, followers, following, public_gists 
    , name, email, blog, created_at, html_url } = this.props.profil;
    return (
      <Fragment>
        <div className='details-card'>
          <div className='details-header'>
               <span>{public_repos} Repos</span>
               <span>{followers} Followers</span>
               <span>{following} Following</span>
               <span>{public_gists} Gists</span>
          </div>
          <div className="details-body">
              <ul className="list">
                <li className="list-item">
                  <b>Nom utilisateur</b> : {name}
                </li>
                <li className="list-item">
                <b>Email</b> : {email}
                </li>
                <li className="list-item">
                <b>Blog</b> : {blog}
                </li>
                <li className="list-item">
                <b>Profile URL</b> : {html_url}
                </li>
                <li className="list-item">
                <b>Membre depuis</b> : {created_at}
                </li>

              </ul>
          </div>
        </div>
      </Fragment>
    )
  }
}
