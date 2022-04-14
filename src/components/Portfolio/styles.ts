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
export const ContainerSkill = styled.div`
  //border:1px solid black; 
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  width: 100%;
  height:100%;
  max-width:100%;
  
  img{
      display:flex;
      width:40rem;
      height:100%;
      margin:1rem;
      max-width:100%;
      border:1px solid #b09dc7;
      border-radius:10px;
      cursor: pointer;    
     }
  
  div{
    //border:1px solid black;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0.5rem;
    width:35rem;
    height:0 auto;
    max-width:100%;

    &:hover{
      transition:0.3s;
      filter:brightness(0.9);
    }  

    @media screen and (max-width:1024px){
    width:24rem;
    }
  }    
`