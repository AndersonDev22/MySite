import styled from "styled-components";

interface Props {
  open: boolean,
}

  export const ListMenu = styled.ul<Props>`
    
    //border: 1px solid red;
    @include border-slide(transparent, #34a1cd);
    display:none;
    justify-content:first baseline;
    align-items:center;
    width:100%;
    height:auto;
    color:#141049;

    a {
    text-align:center;
    top: 0;
    border-bottom:2px solid transparent;
    padding: 8px ;
    color: #141049;
    text-decoration: none;
    font-size:20px;
    font-weight: 500;
    line-height: 32px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   
    &:hover{
      //border: 1px solid red;
      border-bottom:2px solid #141049;
      transition:all 0.3s;
    }
  }

  @media (max-width: 768px) {
    flex-flow: column wrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 60px;
    right: 0;
    height: 100vh;
    list-style: none;
    display: flex;
    width: 100%;
    padding-top: 1rem;
    transition: transform 0.3s ease-in-out;
    align-items: center;
  }
`