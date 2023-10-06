import React from 'react'
import {SectionWrapper, TextBlock, Title} from '../shared'
import styled from 'styled-components'

type GridItem = {
  icon: string
  text: string
}

const AboutOne = styled.div`
  width: 40%;
  margin-left: 200px;
  padding-bottom: 50px;
`

const AboutTwo = styled.div`
  width: 100%;
  background: #deff94;
  padding: 100px 200px;
  position: relative;
  padding-bottom: 320px;
`

const AboutThree = styled.div`
  width: 100%;
  padding-top: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AboutBottomTopHalf = styled.div`
  display: flex;
  justify-content: space-between;
`

const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 45%;
`

const Buttons = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`

const VideoContainer = styled.div`
  position: absolute;
  right: 200px;
  top: 150px;
  height: 300px;
  width: 400px;
  background: grey;
  border-radius: 30px;
  z-index: 3;
`

const GridContainer = styled.div`
  position: absolute;
  top: 300px;
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
`

const GridCard = styled.div`
  width: 100%;
  height: 100%;
  background: #feffff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 25px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  z-index: 3;
  border-radius: 15px;
`

const GridCardIcon = styled.div`
  height: 80px;
  width: 80px;
  border: 1px solid blue;
  border-radius: 50%;
`

const GridCardText = styled.p`
  font-size: 20px;
  font-weight: bold;
`

const ContactLink = styled.a`
  text-align: center;
  font-weight: bold;
`

const gridItems: GridItem[] = [
  {
    icon: '',
    text: 'Anti-diet',
  },
  {icon: '', text: 'Gentle nutrition'},
  {icon: '', text: 'Health at every size'},
  {icon: '', text: 'Intuitive eating'},
  {icon: '', text: 'Patient centered'},
  {icon: '', text: 'Food as medicine'},
  {icon: '', text: 'Behavior focused'},
  {icon: '', text: 'Weight neutral'},
]
const About: React.FC = () => {
  return (
    <SectionWrapper>
      <div style={{height: '50px', width: '100%'}} id="about" />
      <AboutOne>
        <Title style={{marginBottom: '50px'}}>
          Improving The Quality Of Your Life Through Better Health. Better
          Nutrition.
        </Title>
        <TextBlock>
          Tempus urna et pharetra pharetra massa massa ultricies mi quis. Eu sem
          integer vitae justo eget. Orci sagittis eu volutpat odio facilisis
          mauris sit amet massa. Ac feugiat sed lectus vestibulum mattis
          ullamcorper velit sed ullamcorper. Ipsum dolor sit amet consectetur.
          Elit at imperdiet dui accumsan.
        </TextBlock>
        <TextBlock>
          Tempus urna et pharetra pharetra massa massa ultricies mi quis. Eu sem
          integer vitae justo eget. Orci sagittis eu volutpat odio facilisis
          mauris sit amet massa. Ac feugiat sed lectus vestibulum mattis
          ullamcorper velit sed ullamcorper. Ipsum dolor sit amet consectetur.
          Elit at imperdiet dui accumsan.
        </TextBlock>
      </AboutOne>
      <VideoContainer />
      <AboutTwo>
        <AboutBottomTopHalf>
          <Title>Values</Title>
          <CallToAction>
            <TextBlock>
              Tempus urna et pharetra pharetra massa massa ultricies mi quis. Eu
              sem integer vitae justo eget. Orci sagittis eu volutpat odio
              facilisis mauris sit amet massa. Ac feugiat sed lectus vestibulum
              mattis ullamcorper velit sed ullamcorper.
            </TextBlock>
            <Buttons>
              <button>click</button>
            </Buttons>
          </CallToAction>
        </AboutBottomTopHalf>
        <GridContainer>
          {gridItems.map((gridItem, index) => {
            return (
              <GridCard key={`grid-item-${index}`}>
                <GridCardIcon />
                <GridCardText>{gridItem.text}</GridCardText>
              </GridCard>
            )
          })}
        </GridContainer>
      </AboutTwo>
      <AboutThree>
        <TextBlock style={{maxWidth: '600px', textAlign: 'center'}}>
          Tempus urna et pharetra pharetra massa massa ultricies mi quis. Eu sem
          integer vitae justo eget. Orci sagittis eu volutpat odio facilisis
          mauris sit amet massa. Ac feugiat sed lectus vestibulum mattis
          ullamcorper velit sed ullamcorper.
        </TextBlock>
        <ContactLink href="#contact">
          Contact Us For More Information
        </ContactLink>
      </AboutThree>
    </SectionWrapper>
  )
}

export default About
