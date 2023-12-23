import React from 'react'
import GithubAPI from './GithubAPI';
import Navigator from '../Navigator.js';
import Footer from "../Footer.js";


function Profile() {
  return (
    <div>
      <Navigator/>
      <GithubAPI/> 
    </div>
  )
}

export default Profile
