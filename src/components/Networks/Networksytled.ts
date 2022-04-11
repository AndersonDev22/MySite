import styled from "styled-components";

export const ListNetworks = styled.ul`
  //border: 1px solid goldenrod;

  display:flex;
  justify-content:center;
  align-items:center;
  //margin-right:55px;
  font-size:50px;
  color:#56537D;
 
  a{
    svg{
        display:flex;
        align-items:center;
        color:#583D79;
        width:40px;
        height:40px;
        transition: color 0.3s;

        @media screen and (max-width:500px){
          width:30px;
          height:30px;
          justify-content:center;
        }

      }

    &:hover{
      svg{
        color:#141049;
      }
    }
    & + a {
      margin-left:0.5rem;
    }
 
  }

`
