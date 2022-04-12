import React from 'react';
import Logotipo from '../../images/Logo.png';
import { Bars, Logo, Nav, NavMenu } from './styles';

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

      <Logo>
       <figure>
         <img src={Logotipo} alt="Logo"/>
       </figure>
      </Logo>

      <NavMenu>
        {
          menu.map(texts => (
            <a key={texts.id} href={texts.link}>
              {texts.Text}
            </a>
          ))
        }    
      </NavMenu>
      <Bars/>
      

    </Nav>
 );
}
export default NavBar;