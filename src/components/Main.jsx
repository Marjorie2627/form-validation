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
    <div className='div-form'>
<Formulario action=''>
        <h1 className='title-form'>Contact Us</h1>
        <form className='form-mail' onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" placeholder='nombre' name='user_name' required autofocus ></input>
          <hr />

          <label>Email</label>
          <input type="email"  placeholder='correo' name='user_email' required autofocus></input>
          <hr />

          <label>Message</label>
          <texarea name="user_message" id="" cols="30" rows="10"></texarea>
          <hr />
          <button>Send</button>
          </form>
        </Formulario>
    </div>

  )
}

const Formulario = styled.form`
background: #ccc;
`;
