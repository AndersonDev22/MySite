import styled from 'styled-components';
import {FaBars} from 'react-icons/fa';

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
  
  padding: 0.5rem 1rem;
  z-index:20;
  //flex-wrap:wrap;
  max-width:100%;  
`
//  export const Bars = styled(FaBars)`
//   border:1px solid black;
//   display: none;
//   color: #0B1840;

//   @media screen and (max-width: 768px) {
//     display:block;
//     position:absolute;
//     top:10px;
//     right:10px;
//     transform: translate(-100, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `
export const Logo = styled.div`
  border:1px solid blue;

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
      height:100%;
      max-width:100%;
    
    img{
      display:flex;
      width:25rem;
      height:100%;
      max-width:100%;
    }
  }    
`
export const NavMenu = styled.div`
  
  border:1px solid blue;
  display:flex;
  align-items: center;
  margin-right:2rem;
    
 a{
    font-family: 'Roboto', sans-serif;
    font-size:18px;
    color:#141049;
    text-decoration:none;
    border-bottom:2px solid transparent;
    & + a {
      margin-left:1.5rem;
    }
    &:hover{
      border-bottom:2px solid #141049;
      transition:0.3s;
    }

  }

  @media screen and (max-width: 768px) {
    //display:none;
  }
`