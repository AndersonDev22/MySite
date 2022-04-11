import styled from 'styled-components';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav `
  //border:1px solid deeppink;

  top:0px;
  position:fixed;
  display:flex;
  width:100%;
  background:#ffffff;
  height:60px;
 
  
  justify-content:space-between;
  padding: 0.5rem 1rem;
  z-index:20;
  flex-wrap:wrap;
  max-width:100%;  
`
 export const Bars = styled(FaBars)`
  display: none;
  color: #0B1840;

  @media screen and (max-width: 768px) {
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
export const LogoDiv = styled.div`
  width:30%;
  height:100%;
  
  figure{

    width:100%;
    height:100%;
    
    img{
      width:70%;
      height:auto;
    }
  }    
`
export const Logotipo = styled.img`
  background-repeat:no-repeat;
  background-size:contain;
  width:100%;
  height:100%;
`

export const NavMenu = styled.div`
  display:flex;
  align-items: center;
    
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
    display:none;
  }
`