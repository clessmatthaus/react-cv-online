import React, { Component } from 'react';
import { PortfolioData } from '../../data/PortfolioData';
import Portfolio from './Portfolio';

export default class PortfolioList extends Component {
    state={
        portfolio: PortfolioData
    };
  render() {
    let {portfolio} = this.state
    return (
      <div className='portfolio'>
        {
            portfolio.map(it => {
                return (
                <Portfolio
                key={it.id}
                it={it}
                />
                
                )       
            })
        }
        
      </div>
    );
  }
}
