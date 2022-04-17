import React, {useState} from 'react';
import Logotipo from '../../images/Logo.png';
import Burger from '../Burger';
import Menu from '../Menu/index';
import { Logo, Nav, } from './styles';

const NavBar: React.FC = () => {
  const [open, setOpen] = React.useState(false)

  return(
    <Nav>

      <Logo>
       <figure>
         <img src={Logotipo} alt="Logo"/>
       </figure>
      </Logo>

      <Burger open={open} setOpen={setOpen}/>
      <Menu open={open}/>
    </Nav>
 );
}
export default NavBar;