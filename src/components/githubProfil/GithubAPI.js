import React, { Component, Fragment } from 'react'
import UserProfiler from './UserProfiler';
import GitHubRepos from './GitHubRepos';
import Axios from 'axios';
import {clientId, clientSecret} from './GitHubCollections'
import Navigator from '../Navigator.js';
import Footer from "../Footer.js";

export default class GithubAPI extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      profil: null,
      repos: null
    }
  }
  updateIput = (e) => {
    this.setState({
      ...this.state,
      username: e.target.value
    });
  };
  //form submission
  searchProfilUser = (e) => {
    e.preventDefault();
    this.searchProfil();
    this.searchRepos();
  };
  //search profil
  searchProfil=()=>{
    Axios.get(`https://api.github.com/users/${this.state.username}?clientId=${clientId}&clientSecret=${clientSecret}`)
    .then((response)=>{
      this.setState({
        profil: response.data
      });
    }).catch((err) => {
      console.error(err);
    });
  };
  //search repos
  searchRepos=()=>{
    Axios.get(`https://api.github.com/users/${this.state.username}/repos?clientId=${clientId}&clientSecret=${clientSecret}`)
    .then((response)=>{
      this.setState({
        repos: response.data
      });
    }).catch((err) => {
      console.error(err);
    });
  };
  render() {
    return (
      <div className='profile-page'>
        {/*<pre>{JSON.stringify(this.state)}</pre>*/}
        <div className="container-cards">
          <div className='main-container'>
           <h4>Utilisateur GitHub</h4> 
            <form className='search-container' onSubmit={this.searchProfilUser}>
              <input className='search' type='search' 
              placeholder='Nom utilisateur' value={this.state.username} 
              onChange={this.updateIput}/>
              <button type='submit' className='recherche'>Rechercher</button>
            </form>
          </div>
        </div>
        <div className='user-section'>
          <div className='user-content'>
            <div className='user-content-infos'>
              {
                this.state.profil ? <UserProfiler profil={this.state.profil}/> : null
              }
            </div>
          </div>

        </div>
        <div className='user-section'>
          <div className='user-content'>
            <div className='user-content-infos'>
              {
                this.state.repos ? <GitHubRepos repos={this.state.repos}/> : null
              }
            </div>
          </div>

        </div>
      </div>
    )
  }
}
