import React from 'react'
import Navigator from "../components/Navigator.js";
import Footer from "../components/Footer.js";
import BlogContent from '../components/BlogContent.js';

function Blog() {
  return (
    <div>
      <Navigator/>
      <BlogContent/>
      <Footer/>
    </div>
  )
}

export default Blog
