import styled from "styled-components";

interface Props {
  open: boolean
}

export const StyledBurger = styled.button<Props>`
  background:#fff;
  display:none;
  position: fixed;
  top: 15px;
  flex-direction: column;
  width: 2rem;
  height: 2rem;
  border: none;
  right: 20px;
  cursor: pointer;
  z-index: 20;

 
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#141049' : '#141049'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.5s linear;
   
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      //transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`