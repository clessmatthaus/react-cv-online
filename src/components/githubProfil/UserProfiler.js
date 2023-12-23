import React, { Component } from 'react'
import UserProfilerCard from './UserProfilerCard';
import UserProfilerDetails from './UserProfilerDetails';

export default class UserProfiler extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div className='container-infos-user'>
        <div className='infos-user'>
            <div className='infos-section1'>
              {
                Object.keys(this.props).length !== 0 ? <UserProfilerCard profil={this.props.profil}/> : null
              }
                
            </div>
            <div className='infos-section2'>
            {
                Object.keys(this.props).length !== 0 ? <UserProfilerDetails profil={this.props.profil}/> : null
            }
            </div>
        </div>
      </div>
    )
  }
}
