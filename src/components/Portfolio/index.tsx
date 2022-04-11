import React from "react";
import projeto1 from '../../images/projeto1.jpg';
import projeto2 from '../../images/projeto2.jpg';
import projeto3 from '../../images/projeto3.jpg';
import projeto4 from '../../images/projeto4.png';
import projeto5 from '../../images/projeto5.jpg';
import projeto6 from '../../images/projeto6.png';
import { Container, ContainerSkill} from "./styles";

const Skills = [
  {
    Image: <img src={projeto1} alt="image 01" />,
    //Text: <h3>Projeto 01</h3>,
  },
  {
    Image: <img src={projeto2} alt="image 02" />,
    //Text: <h3>CSS 3</h3>,
  },
  {
    Image: <img src={projeto3} alt="image 03" />,
    //Text: <h3>REACT JS</h3>,
  },
  {
    Image: <img src={projeto4} alt="image javajs" />,
    //Text: <h3>JAVASCRIPT</h3>,
  },
  {
    Image: <img src={projeto5} alt="image vccode" />,
    //Text: <h3>VSCODE</h3>,
  },
  {
    Image: <img src={projeto6} alt="image figma" />,
    //Text: <h3>FIGMA</h3>,
  },

];


const Skill: React.FC = () => {

  return (

    <Container>

      <h1>Portfolio</h1>

      <ContainerSkill>
        {
          Skills.map(skill => (
            <div>
              {skill.Image}
              {/* {skill.Text} */}
            </div>
          ))
        }
      </ContainerSkill>

    </Container>

  );
}
export default Skill;