import React from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import logo from '../assets/logo.svg'


export const Main = () => {

  const sendEmail = (event) => {

    event.preventDefault();
    emailjs.sendForm('service_l64ue24', "template_mc7bu4d", event.target, "5rYpU1zQ5DTEcG-X7")
      .then(response => console.log(response))

      .catch(error => console.log(error))
  }
  return (

    <div className='div-form  <div class=" align-items: center">
    '>
      <img alt="logo.svg" src={logo} width="251" height="63" align-items-center />
      


        <Formulario action=''>
          <div className='title-form h3 mb-3 font-weight-normal'>Singn up</div>


          <div className='user'>
          <form className='form-mail' onSubmit={sendEmail}>
            <label></label>
            <input type="text" placeholder='Coloque su nombre  completo' name='user_name' required autofocus ></input>
            </div>
            
            <hr />
            <div class="form-group">
            <label></label>
            <input type="email" placeholder='Ingrese su correo electrónico' name='user_email' required autofocus></input>
            </div>
            <hr />

            <div class="form-group text-center">
            <p>Recibiras un email con la contraseña<br></br> autorizada por conexión</p>
            <texarea name="user_message" id="" cols="30" rows="10"></texarea>
            </div>
            <hr />
            <div class="form-group">
            <button class="btn btn-primary w-100" :disabled="isSubmitting">
             <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
               Send
               </div>
               </button>
               </div>
               </Formulario>
             </div>
          </form>
    
  

    

  )
}

const Formulario = styled.form`
background: ;
`;
