import React from 'react'
import avatar from '../../images/avatar.png'
import Networks from '../Networks/Index'
import {
  BtnHireMe,
  Container,
  ContainerAbout,
  Section3,
  SectionAboutMe,
  SectionAvatar,
  TxtHello,
  TxtLead,
  TxtName,
  TxtProfession
} from './styles'

const About: React.FC = () => {
  return (
    <Container id="home">
      <ContainerAbout>
        <SectionAboutMe>
          <TxtName>Luiz Anderson</TxtName>
          <TxtProfession>Front-end Developer</TxtProfession>
          <TxtLead>
          Me chamo Luiz Anderson, sou um profissional versátil e apaixonado pela área de tecnologia, sempre disposto a aprender algo novo e superar grandes desafios. Busco constantemente capacitação para melhor exercer minhas habilidades. 
          </TxtLead>
          <Section3>
            <BtnHireMe>
              <a href="/#contact">Contate-me</a>
            </BtnHireMe>
            <Networks />
          </Section3>
        </SectionAboutMe>
        <SectionAvatar>
          <figure>
            <img src={avatar} alt="" />
          </figure>
        </SectionAvatar>
      </ContainerAbout>
    </Container>
  )
}
export default About
