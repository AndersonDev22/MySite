import About from '../../components/About/Index';
import Contact from '../../components/Contact/Index';
import Navbar from '../../components/Navbar/Index';
import Portfolio from '../../components/Portfolio';
import Skill from '../../components/Skill';
import { Container } from './styled';

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