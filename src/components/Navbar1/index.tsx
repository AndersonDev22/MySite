import React from 'react';
import { MyNavbar } from './styles';

const NavBar1: React.FC = () => {
  return (
    <MyNavbar>
      <ul className="list">
        <li className="items">About</li>
        <li className="items">Skill</li>
        <li className="items">Portfolio</li>
        <li className="items">Contact</li>
      </ul>
    </MyNavbar>
  ) 
}
export default NavBar1;