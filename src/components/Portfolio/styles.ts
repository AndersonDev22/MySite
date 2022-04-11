import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center; 
  background: #ffffff;
  width: 100%;
  height:100%;
  padding:1rem;
  border:1px solid red;
  

  h1{
    max-width:100%;
    margin-top:1rem;
    font-size:50px;
    font-family:'Audiowide', cursive;
    color:#56537d;
  }
`
export const ContainerSkill = styled.div`
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  width: 100%;
  height:100%;
  max-width:100%;
  margin-top:2rem;
  padding:2rem;
  margin-top:2rem;
  border:1px solid black;
  
  

  img{
      display:flex;
      width:40rem;
      height:100%;
      max-width:100%;
      border:1px solid #b09dc7;
      border-radius:10px;
      cursor: pointer;    
     }
  
  div{
    display:flex;
    justify-content:center;
    align-items:center;
    margin:1rem;
    width:40rem;
    height:100%;
    max-width:100%;

    &:hover{
      transition:0.3s;
      filter:brightness(0.9);
      zoom:1.07;
    }
    
    //border:5px solid goldenrod;
    //&:hover{
    //  filter:brightness(0.9);
    //}
    
  }
  
`
