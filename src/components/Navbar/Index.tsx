import React from 'react';
import Logo from '../../images/Logo.png';
import { LogoDiv, Logotipo, Nav, NavMenu } from './styles';

const menu = [
  {
    id:'about',
    Text:'About',
    link:'#'
  },
  {
    id:'skill',
    Text:'Skill',
    link:'#'
  },
  {
    id:'portfolio',
    Text:'Portfolio',
    link:'#'
  },
  {
    id:'contact',
    Text:'Contact',
    link:'#'
  },
  
  
];

const NavBar: React.FC = () => {

  return(
    <Nav>

      <LogoDiv>
       <figure>
         <img src={Logo} alt="Logo"/>
       </figure>
      </LogoDiv>

      <NavMenu>
        {
          menu.map(texts => (
            <a key={texts.id} href={texts.link}>
              {texts.Text}
            </a>
          ))
        }    
      </NavMenu>

    </Nav>
 );
}
export default NavBar;