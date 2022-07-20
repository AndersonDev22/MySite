import styled from 'styled-components';
//import {FaBars} from 'react-icons/fa';


export const Nav = styled.nav `
  //border:1px solid deeppink;
  top:0px;
  position:fixed;
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
  background:#ffffff;
  height:60px;
  
  padding: 2rem 2rem;
  z-index:20;
  max-width:1440px;
  
  @media screen and (max-width: 500px) {
    padding: 1rem 1rem;
  }
`
export const Logo = styled.div`
  //border:1px solid blue;

  display:flex;
  justify-content:center;
  align-items:center;
  width:25rem;
  height:100%;
  max-width:100%;
  //margin-left:2rem;
  
  figure{
      display:flex;
      width:25rem;
      height:0 auto;
      max-width:100%;
    
    img{
      display:flex;
      width:25rem;
      height:0 auto;
      max-width:100%;

      @media screen and (max-width: 1024px) {
        width:20rem;
      }

      @media screen and (max-width: 768px) {
        width:15rem;
      }

      @media screen and (max-width: 425px) {
        width:12rem;
        padding:0px;
      }
    }
  }    
`