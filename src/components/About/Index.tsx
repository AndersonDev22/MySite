import React from 'react';
import Networks from '../Networks/Index';
import avatar from '../../images/avatar.png';
import { BtnHireMe, ContainerAbout, Container, Section3, SectionAboutMe, SectionAvatar, TxtHello, TxtLead, TxtName, TxtProfession } from './styles';

const About: React.FC = () => {

  return(
    <Container>
      <ContainerAbout> 

        <SectionAboutMe>
                    

            <TxtHello>
              Hello.
            </TxtHello>

            <TxtName>
              Luiz Anderson
            </TxtName>

            <TxtProfession>
              Front-end Developer
            </TxtProfession>
                      
            <TxtLead>
              I'm Junior Front-End Developer and from Brazil. 
              I create efficent and innovate experiences that
              balance user and business goals. Welcome to my portfolio!
            </TxtLead>

            <Section3>

              <BtnHireMe>
                Hire me
              </BtnHireMe>
            
              <Networks/>

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
export default About;