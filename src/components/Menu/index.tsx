import React from "react";
import { ListMenu } from "./styles";

interface Props {
  open: boolean,
}

const Menu: React.FC <Props> = ({open}) => {

  return(

   <ListMenu open={open}>
      <a href="#">About</a>
      <a href="#">Skill</a>
      <a href="#">Portfolio</a>
      <a href="#">Contact Us</a>
    </ListMenu> 
 );
}
export default Menu;

// interface Props {
//   open?: boolean,
// }

// const Menu: React.FC <Props> = ({open=false}) => {