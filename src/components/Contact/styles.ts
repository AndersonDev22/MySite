import { useRef } from "react";
import styled from "styled-components";

export const Container = styled.div` //PAI
  //border:1px solid red;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center; 
  background: #ffffff;
  width: 100%;
  height:100%;
  padding:0.5rem; 
  margin-bottom:2rem;

  h1{
    //border:1px solid red;
    max-width:100%;
    margin-top:1rem;
    font-size:50px;
    font-family:'Audiowide', cursive;
    color:#56537d;
    margin-bottom: 2rem;

    @media screen and (max-width:860px){
    font-size:40px;
    }    
    @media screen and (max-width:425px){
    font-size:28px;
    }
  }
`

export const ContainerForm = styled.div` //FILHO
  //border:1px solid gray;
  display:flex;
  justify-content:center;
  align-items:center;
  width: 100%;
  height:90%;
  max-width:100%;

  @media screen and (max-width:768px){
    flex-wrap:wrap;
  }  
`  
export const Form = styled.form` //FORMULÁRIO
  display:flex;
  justify-content:flex-end;
  flex-wrap:wrap;
  width:40rem;
  height:100%;
  max-width:100%;

  @media screen and (max-width:1024px){
    width:30rem;
    height:0 auto;
  }
`
export const SectionImage = styled.div` //ILUSTRAÇÃO EMAIL
    display:flex;
    justify-content:center;
    align-items:center;
    width:40rem;
    height:100%;
    max-width:100%;
    margin:1rem;
     
  figure{
      display:flex;
      width:40rem;
      height:100%;
      max-width:100%;
      margin: 1rem 0;
    
    img{
      display:flex;
      width:40rem;
      height:100%;
      max-width:100%;
    }
  }
  
  @media screen and (max-width:1024px){
    width:30rem;
    height:0 auto;
  }
`
export const Message = styled.textarea` // CAIXA DA MENSSAGEM
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border-radius: 10px;
  width: 100%;
  height: 15rem;
  padding: 0.7rem;
  margin:0.5rem;
  border: 2px solid #b9abe0;
  outline: none;
  color:#56537d;
  font-size: 16px;
  font-weight: 150;
  max-width:100%;
 
  &:focus {
    display: inline-block;
    border: 2px solid #b9abe0;
    backdrop-filter: blur(12rem);
 }
 
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
  }
`
export const StyledInput = styled.input` // CAIXAS DE TEXTO
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border-radius: 10px;
  width: 100%;
  height: 0 auto;
  padding: 0.7rem;
  margin:0.5rem;
  border: 2px solid #b9abe0;
  outline: none;
  color:#56537d;
  font-size: 16px;
  font-weight: 150;
  max-width:100%;
 
  &:focus {
    display: inline-block;
    border: 2px solid #b9abe0;
    backdrop-filter: blur(12rem);
 }

  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
  }
`
export const BtnSubmit = styled.button` //BOTÃO SUBMIT
  background:#34A1CD;
  color: #fff;
  font-size: 16px;
  padding:1rem;
  font-weight:700;
  border:none;
  border-radius:8px;
  width:11rem;
  margin:0.5rem;
  cursor:pointer;

  @media screen and (max-width:500px){
   font-size:16px;
   margin-bottom:20px;
   width:100%;
   font-weight:600;
   padding:0.6rem;
   margin:0.5rem;
  }

  &:hover{
    filter:brightness(0.9);
  }
`