import styled from "styled-components";

export const InputMask1 = styled.div`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 5px 10px 5px #e9e8ff;
  border-radius: 10px;
  width: 40rem;
  height: 0 auto;
  padding: 1rem;
  margin:1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  max-width:100%;
 
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    //border-radius: 2rem;
  }
  `