import React, { Component } from 'react';
import { ArticleData } from '../../data/ArticleData';
import Article from './Article';

export default class ArticleList extends Component {
  state={
    article: ArticleData
};
  render() {
    let {article} = this.state
    return (
      <div className='portfolio'>
        {
            article.map(it => {
                return (
                <Article
                key={it.id}
                it={it}
                />
                )       
            })
        }
        
      </div>
    )
  }
}
