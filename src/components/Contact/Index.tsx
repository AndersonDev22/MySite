import React from 'react'
import styled from 'styled-components';
import figEmail from '../../images/Iconemail.jpg'
import { Container, InputContainer, ContainerForm, Form, SectionImage, Message } from './styles';

export function Input({ type, placeholder }) {
  return <StyledInput type={type} placeholder={placeholder} />;
}

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 5px 10px 5px #e9e8ff;
  border-radius: 10px;
  width: 25rem;
  height: 0 auto;
  padding: 1rem;
  margin:1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;

  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    //border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;


const Contact: React.FC = () => {

  return (
    <Container>

      <h1>Contact me</h1>

      <ContainerForm>
        
        <SectionImage>
         <figure>
            <img src={figEmail} alt="" />
         </figure>
        </SectionImage>


        <Form>
          <InputContainer>
            <Input type="text" placeholder="Nome" />
            <Input type="email" placeholder="Email" />
            <Input type="tel" placeholder="Fone"/>
            <Message/>
          </InputContainer>

        </Form>

      </ContainerForm>
    </Container>

  );
}
export default Contact;