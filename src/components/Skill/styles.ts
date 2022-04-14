import styled from "styled-components";

export const Container = styled.div` //PAI
  //border: 1px solid red;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center; 
  background: #ffffff;
  width: 100%;
  //height:0 auto;
  //padding:1rem; 
  margin-bottom:2rem;

  h1{
    //border:1px solid gray;
    font-size:50px;
    font-family:'Audiowide', cursive;
    color:#56537d;
    margin-bottom: 2rem;

    @media screen and (max-width:860px){
    font-size:35px;
    }    
    @media screen and (max-width:425px){
    font-size:24px;
    }
  }
`
export const ContainerSkill = styled.div` //FILHO
  //border:1px solid gray;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  width: 100%;
  height:0 auto;
  max-width:100%;
  //padding:1.5rem;
  //flex-shrink:3;
  
  img{
      display:flex; 
      width:250px;
      height:100%;
      max-width:100%;
      margin-bottom:0.5rem;
      //border:1px solid blue;

      @media screen and (max-width:1024px){
      width:130px;
      flex-shrink:3;
      }
      @media screen and (max-width:425px){
      width:130px;
      flex-shrink:3;
      }

     }
  
  h3{
    white-space:nowrap;
    display:flex;
    justify-content:center;
    width:200px;
    height:100%;
    max-width:80%;
    font-family: 'Roboto', sans-serif;
    //border:1px solid green;

    @media screen and (max-width:425px){
      font-size:16px;
  }
  }
  
  div{
    //border: 2px solid green;  
    width:15rem;
    border-radius:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin:2rem;
    padding:1rem;
    box-shadow: 0px 5px 10px 5px #e9e8ff;

    @media screen and (max-width:1024px){
      width:200px;
      height:0 auto;
      margin-right:2rem;
  }
    
    @media screen and (max-width:768px){
      /* width:120px;
      height:120px; */
  }
    
    @media screen and (max-width:425px){
      width:160px;
      border-radius:20px;
      margin:0.5rem;
      padding:1.5rem;
  }
    
  }
  
`
