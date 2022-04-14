import React from 'react'
import figEmail from '../../images/Iconemail.jpg'
import { BtnHireMe } from '../About/styles';
import PhoneInput from '../InputPhone';
import { StyledInput, InputContainer,Container, ContainerForm, Form, SectionImage, Message } from './styles';

const Contact: React.FC = () => {

  return (
    <Container>

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
          <InputContainer>
            <StyledInput type="text" placeholder="Nome" />
            <StyledInput type="email" placeholder="Email" />
            <StyledInput type="tel" placeholder="Fone"/>
            <Message/>
            <BtnHireMe>Submit</BtnHireMe>
            <PhoneInput/>
          </InputContainer>

        </Form>

      </ContainerForm>
    </Container>

  );
}
export default Contact;