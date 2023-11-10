import React from 'react'
import styled from 'styled-components'
import {Button} from '../shared'

const Container = styled.div`
  width: 100%;
  height: 650px;
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: relative;
  background-color: #a8af9d;
`

const HeroText = styled.h2`
  font-size: 50px;
  line-height: 68px;
  letter-spacing: 2px;
  width: 70%;
  text-align: center;
  color: white;
  text-transform: uppercase;
`

const SubInfo = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
  margin-top: 60px;
`

const Description = styled.p`
  font-size: 20px;
  color: white;
`

const Buttons = styled.div`
  display: flex;
  gap: 15px;
`

const Hero: React.FC = () => {
  return (
    <Container>
      <HeroText>
        Guidance on healing your life through gentle nutrition
      </HeroText>
      <SubInfo>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Description>
        <Buttons>
          <a href="tel:801-995-9458">
            <Button type="primaryFilled">
              Book a 15 min free consult today!
            </Button>
          </a>
          <a href="#about">
            <Button type="secondaryFilled">More about us</Button>
          </a>
        </Buttons>
      </SubInfo>
    </Container>
  )
}

export default Hero
