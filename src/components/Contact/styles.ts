import styled from "styled-components";

export const Container = styled.div` // PAI
  border:1px solid red;
  
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center; 
  background: #ffffff;
  width: 100%;
  height:100%;
  padding:3rem;
  
  h1{
    font-size:50px;
    font-family:'Audiowide', cursive;
    color:#56537d;
    margin-bottom: 3rem;
  }
`
export const ContainerForm = styled.div` //FILHO
  border:1px solid red;
  
  display:flex;
  justify-content:center;
  align-items:center;
  //flex-wrap:wrap;
  width: 100%;
  height:100%;
  max-width:100%;
  
`  

export const Form = styled.form` //FORMULÁRIO
  border:2px solid blue;

  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  width: 100%;
  height:100%;
  max-width:100%;
`
export const InputContainer = styled.div` // CAIXAS DE TEXTO
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
  max-width:100%;
`;

export const SectionImage = styled.div` //ILUSTRAÇÃO EMAIL
    //border:1px solid orangered;

    display:flex;
    justify-content:center;
    align-items:center;
    width:40rem;
    height:100%;
    max-width:100%;
  
  figure{

      display:flex;
      width:40rem;
      height:100%;
      max-width:100%;
    
    img{
      display:flex;
      width:40rem;
      height:100%;
      max-width:100%;
    }
  }            
`
export const Message = styled.textarea`
  box-shadow: 0px 5px 10px 5px #e9e8ff;
  border-radius: 10px;
  width: 25rem;
  height: 14rem;
  padding: 1rem;
  margin:1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  max-width:100%;

  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }

`