import React, { Component, Fragment } from 'react'

export default class GitHubRepos extends Component {
  constructor(props){
    super(props)
    }
  render() {
    let {} = this.props.repos;
    return (
      <Fragment>
        <div className='repos-container'>
            <div className='repos-header'>
                <h3>Repositories</h3>
            </div>
            <div className='repos-body'>
                <ul className="repos-list">
                    {
                        this.props.repos.map((repo)=>{
                            return(
                              <li className="repos-item">
                                <a href={repo.html_url} target="_blank" className="repos-link">{repo.name}</a>
                                <div className="repos-span">
                                  <span className="w-like1">{repo.stargazers_count} Stars</span>
                                  <span className="w-like2">{repo.watchers_count} Watches</span>
                                  
                                </div>

                              </li>
                            )
                        })
                    }
                </ul>
            </div>

        </div>
        
      </Fragment>
    )
  }
}
