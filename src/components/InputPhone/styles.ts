import styled from "styled-components";
import InputMask from 'react-input-mask';

export const InputMaskCustom = styled(InputMask)`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
box-shadow: 0px 5px 10px 5px #e9e8ff;
border-radius: 10px;
width: 100%;
height: 0 auto;
padding: 0.7rem;
margin:0.5rem;
border: 2px solid transparent;
outline: none;
color:#56537d;
font-size: 16px;
font-weight: 150;
max-width:100%;

&:focus {
  display: inline-block;
  border: 2px solid #b9abe0;
  backdrop-filter: blur(12rem);
}

&::placeholder {
  color: #b9abe099;
  font-weight: 100;
}
`