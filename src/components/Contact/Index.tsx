import React from 'react'
import emailjs from '@emailjs/browser';
import ilustracao from '../../images/Iustracaoemail.png'
import PhoneInput from '../InputPhone'
import { StyledInput, BtnSubmit, Container, ContainerForm, Form, SectionImage, Message } from './styles';

const Contact: React.FC = () => {
  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs.sendForm('messagecontact', 'template_vtmvjgk', e.target, 'Ll6kRRoS_BBd_V6nF')
      .then((result) => {
          alert("Mensagem enviada com sucesso!")
      }, (error) => {
          alert(error.message)
      });
      e.target.reset()
    };

  return (    
    <Container id="contact">
      <h1> 
        &gt;&gt;&gt;&nbsp; Contact-me &nbsp;&lt;&lt;&lt;
      </h1>
      <ContainerForm>        
        <SectionImage>
         <figure>
            <img src={ilustracao} alt="" />
         </figure>
        </SectionImage>
        <Form onSubmit={sendEmail}> 
          <StyledInput type="text" placeholder="Your Name*" name="name"/>
          <StyledInput type="email" placeholder="Your Email*" name="email"/>
          <PhoneInput name="phone"/>
          <Message placeholder="Message" name="message"/>
          <BtnSubmit type="submit" value="send">Enviar</BtnSubmit>  
        </Form>
      </ContainerForm>
    </Container>
  );}
export default Contact;