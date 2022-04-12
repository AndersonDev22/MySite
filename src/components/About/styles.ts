import styled from "styled-components";

export const Container = styled.div` //PAI
  //border:1px solid dodgerblue;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center; 
  background: #ffffff;
  width: 100%;
  height:100%;
  padding:0.5rem; 
  margin-bottom:2rem;
`
export const ContainerAbout = styled.div`//FILHO
  //border:1px solid black;
  display:flex;
  justify-content:center;
  align-items:center;
  width: 100%;
  height:100%;
  max-width:100%;  
  
  @media screen and (max-width:860px){
    flex-direction:column-reverse;
  }
`
export const SectionAboutMe = styled.div` //APRESENTAÇÃO
  //border:1px solid green;
  
  display:flex;
  justify-content:center;
  width: 70rem;
  height:100%;
  max-width:100%;
  align-items:left;
  flex-direction:column;
  padding:4rem;

  @media screen and (max-width:662px){
    padding:2rem;
  }
  @media screen and (max-width:375px){
    padding:1rem;
  }
`
export const SectionAvatar = styled.div` //MINHA FOTO
    //border:1px solid orangered;
    display:flex;
    justify-content:center;
    align-items:center;
    width:0 auto;
    height:100%;
    max-width:100%;
  
  figure{

      display:flex;
      width:0 auto;
      height:100%;
      max-width:100%;

      @media screen and (max-width:1440px){
    width:30rem;

    @media screen and (max-width:970px){
    width:25rem;
  }
  }  
    img{
      display:flex;
      width:0 auto;
      height:100%;
      max-width:100%;

      @media screen and (max-width:1440px){
    width:30rem;

    @media screen and (max-width:970px){
    width:25rem;
  }
  }

    }
  }    
`
export const TxtHello = styled.h1` //HELLO
  //border:1px solid blueviolet;
  font-family:'Audiowide', cursive;
  margin-bottom:50px;
  color:#141049;
  font-size: 30px;

  @media screen and (max-width:375px){
   font-size:20px;
   margin-bottom:20px;
  }
`
export const TxtName = styled.h1` //MEU NOME
  //border:1px solid orangered;
  width: 100%;
  height:100%;
  max-width:100%;
  font-family:'Audiowide', cursive;
  color:#34A1CD;
  font-size: 55px;

  @media screen and (max-width:449px){
    font-size:35px;
  }
  @media screen and (max-width:375px){
   font-size:30px;
  }
`
export const TxtProfession = styled.h1`//FRONT END
  //border:1px solid black;
  font-family:'Audiowide', cursive;
  margin-bottom:50px;
  color:#B09DC7;
  font-size: 20px;

  @media screen and (max-width:375px){
   font-size:14px;
   margin-bottom:20px;
  }
`
export const TxtLead = styled.h1` // FALANDO SOBRE MIM
  //border:1px solid yellowgreen;
  display:flex;
  width:100%;
  height:100%;
  max-width:100%;
  font-family: 'Roboto', sans-serif;
  color:#141049;
  font-size: 20px;
  margin-bottom:80px;

  @media screen and (max-width:500px){
   font-size:14px;
   margin-bottom:35px;
  }

  @media screen and (max-width:375px){
   font-size:12px;
   margin-bottom:25px;
  }
`
export const Section3 = styled.div` //BOTÃO E REDES SOCIAIS
  //border:1px solid pink;
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;
  width: 100%;
  height:100%;
  max-width:100%;

  @media screen and (max-width:500px){
    justify-content:center;    
  }
`
export const BtnHireMe = styled.button` //BOTÃO HIRE ME
  background:#34A1CD;
  color: #fff;
  font-size: 16px;
  padding:1rem;
  font-weight:700;
  border:none;
  border-radius:8px;
  width:11rem;
  cursor:pointer;

  @media screen and (max-width:500px){
   font-size:16px;
   margin-bottom:20px;
   width:17rem;
   font-weight:600;
   padding:0.6rem;
  }

  &:hover{
    filter:brightness(0.9);
  }
`

