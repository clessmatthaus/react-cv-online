import React from "react";
import Typed from "react-typed";
import {motion} from "framer-motion";
import Navigator from "../components/Navigator.js";
import Footer from "../components/Footer.js";
import {NavLink, Link} from 'react-router-dom';
import AboutContents from "../components/AboutContents.js";
import ServicesContent from "../components/ServicesContent.js";
import RealisationsContent from "../components/RealisationsContent.js";
import BlogContent from "../components/BlogContent.js";
import ContactContent from "../components/ContactContent.js";


function Header() {
  const container = {
    hidden: {opacity: 1, scale: 0},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  }
  const item = {
    hidden:{y: 200, opacity: 0},
    visible: {y: 0, opacity: 1},
  }
  return (
    
  <div> 
    <Navigator/>
   <div className="header-wrapper">
    <div className="main-info">
       <h1>
        Bonjour, je suis Cless Matthaüs
       </h1>
       <Typed 
         className="typed-text"
         strings={["Développeur web full stack", "UI/UX Designer", "Android Développeur"]}
         typeSpeed={40}
         backSpeed={60}
         loop
       />
       <br/>
       
       <Link to="/Profile">en savoir plus</Link>
       
   <motion.div 
     className="icons-wrapper"
     variants={container}
     initial="hidden"
     animate="visible">

      <div style={{display: 'flex'}}>
        <motion.div className="item-1 item" variants={item}></motion.div>
        <motion.div className="item-2 item" variants={item}></motion.div>
        <motion.div className="item-3 item" variants={item}></motion.div>
        <motion.div className="item-4 item" variants={item}></motion.div>
        <motion.div className="item-5 item" variants={item}></motion.div>
        <motion.div className="item-6 item" variants={item}></motion.div>
        <motion.div className="item-7 item" variants={item}></motion.div>
      </div>
    </motion.div>
    </div>
    </div>
   <AboutContents/>
   <ServicesContent/>
   <RealisationsContent/>
   <BlogContent/>
   <ContactContent/>
   <Footer/>
</div>
  
  )
}

export default Header
