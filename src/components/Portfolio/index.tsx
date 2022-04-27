import React from "react";
import projeto1 from '../../images/pokemon.png';
import projeto2 from '../../images/projeto2.jpg';
import projeto3 from '../../images/projeto3.jpg';
import projeto4 from '../../images/projeto4.png';
import projeto5 from '../../images/projeto5.jpg';
import projeto6 from '../../images/projeto6.png';
import { Container, ContainerSkill} from "./styles";

const Skills = [
  {
    id:'1',
    Image: <img src={projeto1} alt="image 01" />,
    link:'https://cardpokemon.vercel.app/'
  },
  {
    id:'2',
    Image: <img src={projeto2} alt="image 02" />,
    //Text: <h3>CSS 3</h3>,
  },
  {
    id:'3',
    Image: <img src={projeto3} alt="image 03" />,
    //Text: <h3>REACT JS</h3>,
  },
  {
    id:'4',
    Image: <img src={projeto4} alt="image javajs" />,
    //Text: <h3>JAVASCRIPT</h3>,
  },
  {
    id:'5',
    Image: <img src={projeto5} alt="image vccode" />,
    //Text: <h3>VSCODE</h3>,
  },
  {
    id:'6',
    Image: <img src={projeto6} alt="image figma" />,
    //Text: <h3>FIGMA</h3>,
  },

];


const Skill: React.FC = () => {

  return (

    <Container id="portfolio">

      <h1>
        &gt;&gt;&gt;&nbsp; Portfolio &nbsp;&lt;&lt;&lt;
      </h1>

      <ContainerSkill>
        {
          Skills.map(skill => (
            <div>
              <a key={skill.id} href={skill.link} target="_blank" rel="noopener noreferrer">
                {skill.Image}
              </a>
            </div>
          ))
        }
      </ContainerSkill>

    </Container>

  );
}
export default Skill;