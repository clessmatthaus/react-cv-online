import React from 'react'
import Location from '../location-dot-solid.svg';
import Mobile from '../mobile-screen-solid.svg';
import {useState, useRef} from "react";

function ContactContent() {
    const[inputData, setInputData] = useState({
        name: "",
        email: "",
        phone:"",
        subject: "",
        message: ""
      })
      const fname = useRef("");
      const femail = useRef("");
      const fphone = useRef("");
      const fsubject = useRef("");
      const fmessage = useRef("");

      const [errors, setErrors] = useState({
    
      })
      function handleInput(e) {
        const {name, value} = e.target;
        setInputData({
          ...inputData, [name] : value
        })
      }
      const handleSubmit= (e) => {
        e.preventDefault();
        fname.current.value="";
        femail.current.value="";
        fphone.current.value="";
        fsubject.current.value="";
        fmessage.current.value="";
        
      const validationErrors = {}
        if(!inputData.name.trim()){
          validationErrors.name = "le nom est requis"
        }
        if(!inputData.email.trim()){
          validationErrors.email = "Veuillez renseigner un email"
        }else if(!/\S+@\S+\.\S+/.test(inputData.email)){
          validationErrors.email = "email invalide"
        }
        if(!inputData.phone.trim()){
          validationErrors.phone = "le numero de téléphone est requis"
        }
        if(!inputData.subject.trim()){
          validationErrors.subject = "merci de completer ce champ"
        }
        if(!inputData.message.trim()){
          validationErrors.message = "merci de completer ce champ"
        }
        setErrors(validationErrors)
        if(Object.keys(validationErrors).length === 0){
          alert("Message envoyé avec succès")
        }
       
    
      }
  return (
    <div>
      <div className="contact-page">
      <div className='card-contact'>
        <div className="head-title">
          <h1>ME CONTACTER</h1>
          <p>Pour me contacter en vue d'une entretien ou d'une future collaboration, merci de remplir le formulaire de contact</p>
          <span></span>
        </div>
        <div className='card-content'>
        <div className="card-content1">
          <h1>Formulaire de contact</h1>
          <span className='trait'></span>
          <form onSubmit={handleSubmit}>
            <input type='text'ref={fname} placeholder="Votre nom" name="name" onChange={handleInput}/>
            {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
            <input type='email' ref={femail}  placeholder="Votre adresse email" name="email" onChange={handleInput}/>
            {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
            <input type='tel' ref={fphone}  placeholder="Votre numero de téléphone" name="phone" onChange={handleInput}/>
            {errors.phone && <p style={{color:"red"}}>{errors.phone}</p>}
            <input type='text' ref={fsubject}  placeholder="Sujet" name="subject" onChange={handleInput}/>
            {errors.subject && <p style={{color:"red"}}>{errors.subject}</p>}
            <textarea ref={fmessage}  placeholder="Votre message" name="message" onChange={handleInput}/>
            {errors.message && <p style={{color:"red"}}>{errors.message}</p>}
            <button type='submit'>Envoyer</button>
          </form>  
        </div>
        <div className="card-content1">
          <h1>Mes coordonnées</h1>
          <span className='trait'></span>        
              <p><img src={Location} alt=''/> 22 Allée Emile Zola, 91300 Massy, France</p>
              <p className='mob'><img src={Mobile} alt=''/> 06 12 34 56 78</p>
          <div className='maps'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631.331137822317!2d2.2585170761206737!3d48.73737097131583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e679d34e785ee9%3A0x95bcf22e4417f9cd!2s22%20All.%20Emile%20Zola%2C%2091300%20Massy!5e0!3m2!1sfr!2sfr!4v1702135605956!5m2!1sfr!2sfr" width="100%" height="320px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ContactContent
