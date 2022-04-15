import React from 'react';
import About from '../../components/About/Index';
import Navbar from '../../components/Navbar/Index';
import Skill from '../../components/Skill';
import Portfolio from '../../components/Portfolio';
import {Container} from './styled';
import Contact from '../../components/Contact/Index';
import Navbar1 from '../../components/Navbar1/index';


function Home() {

  return (
    
    <Container>
      
      <Navbar/>
      <About/>
      <Skill/>
      <Portfolio/>
      <Contact/>
      <Navbar1/>
              
    </Container>

  );
}

export default Home;