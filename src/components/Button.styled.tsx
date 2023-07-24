import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

type StyledBtnPropsType ={
    primary?: boolean
    outlined?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  width: 86px;
  height: 30px;
  font-family: Inter, sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 2; /* 200% */
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.primary && css<StyledBtnPropsType> `
    border: none;
    background-color: #4E71FE;
    color: #FFF;
    
    &:hover{
      background-color: #FFF;
      color: #4E71FE;
      border: 2px solid #4E71FE;
    }
  `}
  ${props => props.outlined && css<StyledBtnPropsType> `
    background-color: #FFF;
    color: #4E71FE;
    border: 2px solid #4E71FE;
    
    &:hover{
      border: none;
      background-color: #4E71FE;
      color: #FFF;
    }
  `}
  
  &:hover {
    background-color: aquamarine;
  }

  `

export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: gold;
  color: deeppink;
 
  
  &:hover{
    animation: ${MyAnimation} 2s ease-in-out infinite;
  }
`