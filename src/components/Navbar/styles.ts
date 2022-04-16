import styled from 'styled-components';
//import {FaBars} from 'react-icons/fa';


export const Nav = styled.nav `
  //border:1px solid deeppink;
  top:0px;
  position:fixed;
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
  background:#ffffff;
  height:60px;
  
  padding: 2rem 2rem;
  z-index:20;
  max-width:100%;
  
  @media screen and (max-width: 500px) {
    padding: 1rem 1rem;
  }
`
//  export const Bars = styled(FaBars)`
//   //border:1px solid black;
//   display: none;
//   color: #0B1840;

//     @media screen and (max-width: 500px) {
//     display:block;
//     position:absolute;
//     align-items:10px;
//     right:10px;
//     transform: translate(-100, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//     }

//     &:before{
//       transform: rotate(225deg)

//     }
// `
export const Logo = styled.div`
  //border:1px solid blue;

  display:flex;
  justify-content:center;
  align-items:center;
  width:25rem;
  height:100%;
  max-width:100%;
  //margin-left:2rem;
  
  figure{
      display:flex;
      width:25rem;
      height:0 auto;
      max-width:100%;
    
    img{
      display:flex;
      width:25rem;
      height:0 auto;
      max-width:100%;

      @media screen and (max-width: 1024px) {
        width:20rem;
      }

      @media screen and (max-width: 768px) {
        width:15rem;
      }

      @media screen and (max-width: 425px) {
        width:12rem;
        padding:0px;
      }
    }
  }    
`
export const NavMenu = styled.div` //MENU
  //border:1px solid red;
  background:#ffffff;
  margin-right:1px;
  width:25rem;
  height:0 auto;
  display:flex;
  justify-content:center;
  //align-items:flex-start;
  position:relative;
      
        a{ //NOMES
            font-family:'Roboto', sans-serif;
            font-size:18px;
            font-weight:bolder;
            color:#141049;
            text-decoration:none;
            border-bottom:2px solid transparent;

            @media screen and (max-width: 500px) {
              display:flex;
              width:6rem;
              padding:3px;
              margin:3px;
              //border:1px solid blue;
          }
            
            & + a {
              margin-left:1.5rem;

              @media screen and (max-width: 500px) {
                margin-left:3px;
              }
            }
            &:hover{
              border-bottom:2px solid #141049;
              transition:0.3s;
            }

          }

  @media screen and (max-width: 768px) {
    display:none;
    flex-direction: column;
    margin-top:180px;
    margin-right:15px;
    //width:35rem;
    left:-20px;
  }

`