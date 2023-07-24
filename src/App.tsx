import React from 'react';
import './App.css';
import styled from "styled-components";
import {Link} from "./components/Link.styled";
import {Buttons, Card, Headline, Image, Paragraph} from "./components/Card.styled";
import {StyledBtn} from "./components/Button.styled";

function App() {
    return (
        <div>
            {/*<Menu>*/}
            {/*    <ul>*/}
            {/*        <li><a href="#">Menu item 1</a></li>*/}
            {/*        <li><a href="#">Menu item 2</a></li>*/}
            {/*        <li><a href="#">Menu item 3</a></li>*/}
            {/*    </ul>*/}
            {/*</Menu>*/}
            <Box>
                {/*<StyledBtn as='a' href='#'>Hello</StyledBtn>*/}
                {/*<StyledBtn as={Link} href='#'>LinkComponent</StyledBtn>*/}
                {/*<Link>Hello</Link>*/}
                {/*<StyledBtn>Hello</StyledBtn>*/}
                <Card>
                    <Image/>
                    <Headline>Headline</Headline>
                    <Paragraph>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Paragraph>
                    <Buttons>
                        <StyledBtn primary>See More</StyledBtn>
                        <StyledBtn outlined>Save</StyledBtn>
                    </Buttons>
                </Card>
            </Box>

        </div>
    );
}

export default App;





const Box = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }
  @media screen and (max-width: 800px){
    flex-direction: column;
  }
`

