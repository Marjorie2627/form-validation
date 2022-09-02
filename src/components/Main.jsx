import React from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';


export const Main = () => {

const sendEmail = (event) => {
  
  event.preventDefault();
  emailjs.sendForm('service_l64ue24',"template_mc7bu4d",event.target,"5rYpU1zQ5DTEcG-X7")
    .then(response => console.log(response))

    .catch(error=> console.log(error))
}
      return (
        
    <div className='div-form  <div class=" align-items: center">
    '>
       <img alt="logo.svg" src="./assets/logo.svg"></img>
       <b-card class="logo.svg-center">
    

<Formulario action=''>
      <h1 className='title-form h3 mb-3 font-weight-normal'>Singn in</h1>

        <form className='form-mail' onSubmit={sendEmail}>
          <label></label>
          <input type="text" placeholder='Coloque su nombre completo' name='user_name' required autofocus ></input>
          <hr />

          <label></label>
          <input type="email"  placeholder='Ingrese su correo electrónico' name='user_email' required autofocus></input>
          <hr />

          <p>Recibiras un email con la contraseña autorizada por conexión</p>
          <texarea name="user_message" id="" cols="30" rows="10"></texarea>
          <hr />
          <button>Send</button>
          </form>
        </Formulario>
        </b-card>
        
    </div>

  )
}

const Formulario = styled.form`
background: #ccc;
`;
