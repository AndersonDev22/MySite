import React from 'react';
import About from '../../components/About/Index';
import Navbar from '../../components/Navbar/Index';
import Skill from '../../components/Skill';
import Portfolio from '../../components/Portfolio';
import {Container} from './styled';
import Contact from '../../components/Contact/Index';


function Home() {

  return (
    
    <Container>
      
      <Navbar/>
      <About/>
      <Skill/>
      <Portfolio/>
      <Contact/>
              
    </Container>

  );
}

export default Home;