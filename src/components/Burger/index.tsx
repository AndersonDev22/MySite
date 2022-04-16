import React, {useState} from 'react';
import Menu from '../Menu';
import { StyledBurger, ContainerDiv } from './styles';

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
}

const Burger: React.FC<Props> = ({ setOpen, open }) => {
  
  return (
    <ContainerDiv>

        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>

        <Menu open={open}/>

    </ContainerDiv>
  )
}

export default Burger;