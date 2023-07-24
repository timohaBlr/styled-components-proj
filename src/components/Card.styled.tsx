import styled from "styled-components";
import image from '../assets/Rectangle1.png'

export const Card = styled.div`
  width: 300px;
  height: 350px;
  padding: 10px;
  background-color: #FFF;
  border-radius: 15px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.10);

  &:hover {
    //background-color: aquamarine;
  }

`
export const Image = styled.div`
  width: 280px;
  height: 170px;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`

export const Headline = styled.h2`
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 10px;
  padding: 10px 0;
`
export const Paragraph = styled.p`
  color: #ABB3BA;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
  margin: 10px;
`
export const Buttons=styled.div`
display: flex;
  gap: 12px;
`
