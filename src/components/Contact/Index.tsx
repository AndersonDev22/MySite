import React from 'react'
import figEmail from '../../images/IconEmail.jpg'
import PhoneInput from '../InputPhone';
import { StyledInput, BtnSubmit, Container, ContainerForm, Form, SectionImage, Message } from './styles';

const Contact: React.FC = () => {

  return (
    <Container id="contact">

      <h1> 
        &gt;&gt;&gt;&nbsp; Contact me &nbsp;&lt;&lt;&lt;
      </h1>

      <ContainerForm>
        
        <SectionImage>
         <figure>
            <img src={figEmail} alt="" />
         </figure>
        </SectionImage>

        <Form>         
          <StyledInput type="text" placeholder="Your Name*" />
          <StyledInput type="email" placeholder="Your Email*" />
          <StyledInput type="tel" placeholder="Your Fone*"/>
          <Message placeholder="Message"/>
          <BtnSubmit>Submit</BtnSubmit>
          <PhoneInput/>
        </Form>

      </ContainerForm>

    </Container>

  );
}
export default Contact;