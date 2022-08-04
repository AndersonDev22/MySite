import React from "react";
import html from '../../images/html.svg';
import css from '../../images/css.svg';
import react from '../../images/react.svg';
import javaJs from '../../images/js.svg';
import node from '../../images/node.svg';
import typescript from '../../images/typescript.svg';
import styled from '../../images/styled.svg';
import tailwind from '../../images/tailwind.svg';
import git from '../../images/git.svg';
import github from '../../images/github.svg';
import graphql from '../../images/graphql.svg';
import storybook from '../../images/storybook.svg';
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
    Image: <img src={typescript} alt="image vccode" />,
    Text: <h3>VSCODE</h3>,
  },
  {
    Image: <img src={node} alt="image figma" />,
    Text: <h3>FIGMA</h3>,
  },
  {
    Image: <img src={styled} alt="image figma" />,
    Text: <h3>FIGMA</h3>,
  },
  {
    Image: <img src={git} alt="image figma" />,
    Text: <h3>FIGMA</h3>,
  },
  {
    Image: <img src={github} alt="image figma" />,
    Text: <h3>FIGMA</h3>,
  },
  {
    Image: <img src={tailwind} alt="image figma" />,
    Text: <h3>FIGMA</h3>,
  },
  {
    Image: <img src={graphql} alt="image figma" />,
    Text: <h3>FIGMA</h3>,
  },
  {
    Image: <img src={storybook} alt="image figma" />,
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
              {/* {skill.Text} */}
            </div>
          ))
        }
      </ContainerSkill>

    </Container>

  );
}
export default Skill;