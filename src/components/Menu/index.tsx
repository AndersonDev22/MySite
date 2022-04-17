import React from "react";
import { ListMenu } from "./styles";

interface Props {
  open: boolean,
}

const Menu: React.FC <Props> = ({open}) => {

  return(

   <ListMenu open={open} >
      <a href="/#home">Home</a>
      <a href="/#skill">Skill</a>
      <a href="/#portfolio">Portfolio</a>
      <a href="/#contact">Contact</a>
    </ListMenu> 
 );
}
export default Menu;

// interface Props {
//   open?: boolean,
// }

// const Menu: React.FC <Props> = ({open=false}) => {