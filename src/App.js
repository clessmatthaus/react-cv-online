import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from "./pages/Header.js";
import About from "./pages/About.js";
import Services from "./pages/Services.js";
import ServicesContent from "./components/ServicesContent.js";
import Realisations from "./pages/Realisations.js";
import RealisationsContent from "./components/RealisationsContent.js";
import Blog from "./pages/Blog.js";
import BlogContent from "./components/BlogContent.js";
import NotFound from "./pages/NotFound.js";
import Contact from "./pages/Contact.js";
import ContactContent from "./components/ContactContent.js";
import ScrollToTop from "react-scroll-to-top";
import {Routes, Route, useParams} from 'react-router-dom';
import {BrowserRouter}  from 'react-router-dom';
import Profile from "./components/githubProfil/Profile.js";
import AboutContents from "./components/AboutContents.js";
import Apropos from "./pages/Apropos.js";
import Mentions from "./pages/Mentions.js";
import MentionsContent from "./components/MentionsContent.js";
import { createContext, useState } from "react";


function App() {
  return (
    <div className="App">            
        <Routes>
          <Route path='/' element={<Header/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/AboutContents' element={<AboutContents/>} />
          <Route path='/Services' element={<Services/>} />
          <Route path='/ServicesContent' element={<ServicesContent/>} />
          <Route path='/Realisations' element={<Realisations/>} />
          <Route path='/RealisationsContent' element={<RealisationsContent/>} />
          <Route path='/Blog' element={<Blog/>} />
          <Route path='/BlogContent' element={<BlogContent/>} />
          <Route path='/Mentions' element={<Mentions/>} />
          <Route path='/MentionsContent' element={<MentionsContent/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/ContactContent' element={<ContactContent/>} /> 
          <Route path='/Apropos' element={<Apropos/>} />
          <Route path='/Profile' element={<Profile/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes> 
      <ScrollToTop smooth color="#298eff"/> 
    </div>
  );
  
}

export default App;
