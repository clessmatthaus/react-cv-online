import React from 'react'
import Banner from '../code2.jpg';
import ArticleList from '../components/blog/ArticleList.js';

function BlogContent() {
  return (
    <div>
      <div className="banner-img">
          <img className="banner" src={Banner} alt="erreur de télechargement..."/>
      </div>
        <div className="head-title">
          <h1>BLOG</h1>
          <p>Voici Quelques articles sur le dévéloppement web</p>
          <span></span>
        </div>
        <ArticleList/>
    </div>
  )
}

export default BlogContent
