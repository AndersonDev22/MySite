import styled from "styled-components";

export const Container = styled.div`
  //border: 1px solid gray;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center; 
  background: #ffffff;
  width: 100%;
  height:100%;
  padding:0.5rem; 
  margin-bottom:2rem;

  @media screen and (max-width:860px){
    //flex-direction:column-reverse;
    padding:1rem;
  }

  h1{
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
  //border:1px solid red;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  width: 90%;
  height:0 auto;
  max-width:100%;
  padding:0.5rem;
  margin-top:2rem;
  
  

  img{
      display:flex; 
      width:250px;
      height:100%;
      max-width:50%;
      margin:1rem;
      //border:1px solid blue;
     }
  
  h3{
    display:flex;
    justify-content:center;
    width:200px;
    height:100%;
    max-width:80%;
    font-family: 'Roboto', sans-serif;
    //border:1px solid green;
  }
  
  div{
    border-radius:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin:1rem;
    padding:1rem;
    box-shadow: 0px 5px 10px 5px #e9e8ff;
    
    @media screen and (max-width:768px){
    width:160px;
    font-size:14px;
    flex-direction:column;
    margin:1rem;
  }
    
    @media screen and (max-width:425px){
    width:140px;
    font-size:14px;
    flex-direction:column;
    margin:0.5rem;
  }
    
  }
  
`
