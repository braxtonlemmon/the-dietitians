import React from 'react'
import styled from 'styled-components'
import {Button} from '../shared'
import {StaticImage} from 'gatsby-plugin-image'

const Container = styled.div`
  width: 100%;
  display: grid;
`

const HeroTextContainer = styled.div`
  display: grid;
  position: relative;
  grid-area: 1/1;
  place-items: center;
`
const HeroText = styled.h2`
  font-size: 50px;
  line-height: 68px;
  /* letter-spacing: 2px; */
  width: 70%;
  text-align: center;
  color: white;
  text-transform: uppercase;
  @media (max-width: 500px) {
    font-size: 32px;
    line-height: 46px;
    padding-top: 24px;
  }
`

const SubInfo = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  margin-top: 60px;
  @media (max-width: 767px) {
    padding-bottom: 24px;
  }
`

const Description = styled.p`
  font-size: 20px;
  color: white;
  text-align: center;
`

const Buttons = styled.div`
  display: flex;
  gap: 15px;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`

const Hero: React.FC = () => {
  return (
    <>
      <div style={{height: '0', width: '100%'}} id="home" />
      <Container>
        <StaticImage
          style={{gridArea: '1/1', maxHeight: 1200}}
          layout="fullWidth"
          // aspectRatio={3 / 1}
          alt=""
          src="../images/image_15.jpeg"
        />
        <HeroTextContainer
          style={{
            gridArea: '1/1',
            position: 'relative',
            placeItems: 'center',
            display: 'grid',
            alignContent: 'center',
          }}
        >
          <HeroText>Komplete Nutrition: Your Path to Healing</HeroText>
          <SubInfo>
            <Description>
              Nutrition counseling / Medical Nutrition Therapy / Diabetes
              Education
            </Description>
            <Buttons>
              <a href="mailto:kompletenutrition@gmail.com">
                <Button type="primaryFilled" style={{background: '#bb9c92'}}>
                  Book a 15 min free consult today!
                </Button>
              </a>
              <a href="#about">
                <Button
                  type="secondaryFilled"
                  style={{background: '#474b4c', color: '#fff'}}
                >
                  More about us
                </Button>
              </a>
            </Buttons>
          </SubInfo>
        </HeroTextContainer>
      </Container>
    </>
  )
}

export default Hero
