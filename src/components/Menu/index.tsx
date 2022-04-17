import React from "react";
import { ListMenu } from "./styles";

interface Props {
  open: boolean 
  setOpen: (open: boolean) => void
}

const Menu: React.FC <Props> = ({open, setOpen}) => {

  return(

   <ListMenu open={open} >
      <a href="/#home" onClick={() => setOpen(false)}>Home</a>
      <a href="/#skill" onClick={() => setOpen(false)}>Skill</a>
      <a href="/#portfolio" onClick={() => setOpen(false)}>Portfolio</a>
      <a href="/#contact" onClick={() => setOpen(false)}>Contact</a>
    </ListMenu> 
 );
}
export default Menu;

// interface Props {
//   open?: boolean,
// }

// const Menu: React.FC <Props> = ({open=false}) => {