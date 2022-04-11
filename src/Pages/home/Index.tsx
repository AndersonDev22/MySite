import React from 'react';
import About from '../../components/About/Index';
import Navbar from '../../components/Navbar/Index';
import Skill from '../../components/Skill';
import Portfolio from '../../components/Portfolio';
import {Container} from './styled';


function Home() {

  return (
    
    <Container>
      
      <Navbar/>
      <About/>
      <Skill/>
      <Portfolio/>
      
              
    </Container>

  );
}

export default Home;