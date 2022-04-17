import React from "react";
import html from '../../images/html.svg';
import css from '../../images/css.svg';
import react from '../../images/react.svg';
import javaJs from '../../images/js.svg';
import figma from '../../images/figma.svg';
import vscode from '../../images/vscode.svg';
import { Container, ContainerSkill} from "./styles";

const Skills = [
  {
    Image: <img src={html} alt="image htm5" />,
    Text: <h3>HTML5</h3>,
  },
  {
    Image: <img src={css} alt="image css3" />,
    Text: <h3>CSS 3</h3>,
  },
  {
    Image: <img src={react} alt="image reactjs" />,
    Text: <h3>REACT JS</h3>,
  },
  {
    Image: <img src={javaJs} alt="image javajs" />,
    Text: <h3>JAVASCRIPT</h3>,
  },
  {
    Image: <img src={vscode} alt="image vccode" />,
    Text: <h3>VSCODE</h3>,
  },
  {
    Image: <img src={figma} alt="image figma" />,
    Text: <h3>FIGMA</h3>,
  },

];


const Skill: React.FC = () => {

  return (

    <Container id="skill">
      <h1>&gt;&gt;&gt;&nbsp; My Skills &nbsp;&lt;&lt;&lt;</h1>

      <ContainerSkill>
        {
          Skills.map(skill => (
            <div>
              {skill.Image}
              {skill.Text}
            </div>
          ))
        }
      </ContainerSkill>

    </Container>

  );
}
export default Skill;