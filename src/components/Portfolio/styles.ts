import styled from "styled-components";

export const Container = styled.div`
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
    max-width:100%;
    margin-top:1rem;
    font-size:50px;
    font-family:'Audiowide', cursive;
    color:#56537d;
    margin-bottom: 2rem;

    @media screen and (max-width:860px){
    //flex-direction:column-reverse;
    font-size:40px;
    }    
    @media screen and (max-width:425px){
    //flex-direction:column-reverse;
    font-size:28px;
    }
}
  }
`
export const ContainerSkill = styled.div`
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  width: 80%;
  height:100%;
  max-width:100%;
  margin-top:2rem;
  padding:2rem;
  margin-top:2rem;
  //border:1px solid black;
  
  

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
    width:30rem;
    height:0 auto;
    max-width:100%;

    &:hover{
      transition:0.3s;
      filter:brightness(0.9);
      //zoom:1.07;
    }
    
    //border:5px solid goldenrod;
    //&:hover{
    //  filter:brightness(0.9);
    //}
    
  }
  
`
