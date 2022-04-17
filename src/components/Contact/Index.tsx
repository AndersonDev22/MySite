import React from 'react'
import figEmail from '../../images/iconemail.jpg';
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
          <PhoneInput/>
          <Message placeholder="Message"/>
          <BtnSubmit>Submit</BtnSubmit>
          
        </Form>

      </ContainerForm>

    </Container>

  );
}
export default Contact;