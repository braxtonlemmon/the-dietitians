import React, {ReactElement} from 'react'
import {Button, SectionWrapper, TextBlock, Title} from '../shared'
import styled from 'styled-components'
import {LuApple} from 'react-icons/lu'
import {IconType} from 'react-icons'

type GridItem = {
  icon: ReactElement
  text: string
}

const Container = styled.div`
  /* padding: 0 200px; */
  padding-bottom: 50px;
`

const TextBlockTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 15px;
`

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
  padding-bottom: 180px;
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
  gap: 15px;
  padding: 25px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  z-index: 3;
  border-radius: 15px;
`

const GridCardText = styled.p`
  font-size: 20px;
  font-weight: 600;
`

const ContactLink = styled.a`
  text-align: center;
  font-weight: bold;
`

const gridItems: GridItem[] = [
  {icon: <LuApple size={34} color="grey" />, text: 'Anti-diet'},
  {icon: <LuApple size={34} color="grey" />, text: 'Gentle nutrition'},
  {icon: <LuApple size={34} color="grey" />, text: 'Health at every size'},
  {icon: <LuApple size={34} color="grey" />, text: 'Intuitive eating'},
  {icon: <LuApple size={34} color="grey" />, text: 'Patient centered'},
  {icon: <LuApple size={34} color="grey" />, text: 'Food as medicine'},
  {icon: <LuApple size={34} color="grey" />, text: 'Behavior focused'},
  {icon: <LuApple size={34} color="grey" />, text: 'Weight neutral'},
]
const About: React.FC = () => {
  return (
    <SectionWrapper>
      <div style={{height: '50px', width: '100%'}} id="about" />
      <Container>
        <AboutOne>
          <Title style={{marginBottom: '50px'}}>What We Do</Title>
          <TextBlockTitle>Disordered Eating & Eating Disorders</TextBlockTitle>
          <TextBlock style={{marginBottom: '30px'}}>
            Whether you’ve been diagnosed with an eating disorder or struggling
            with diet culture, self-image, and your relationship with food, we
            can help! We aim to heal your relationship with your body and help
            you make peace with food. Our approach is that of Health at Every
            Size and Intuitive Eating.
          </TextBlock>
          <TextBlockTitle>Gastrointestinal Health</TextBlockTitle>
          <TextBlock style={{marginBottom: '30px'}}>
            Recent diagnosis with IBS, SIBO, Crohn’s, or Colitis? Or maybe you
            are struggling with upset stomach, diarrhea, constipation, and/or
            pain and have tried everything to no avail? Maybe you’re afraid to
            eat or go anywhere too far from a bathroom? We are here for you.
            Working with gastrointestinal issues, needs to be tailored to the
            individual and working with their unique gut biome. Nutritional
            counseling as part of your treatment plan can help heal your gut and
            identify triggers to guide you to liberation from your aggravating
            symptoms.
          </TextBlock>
          <TextBlockTitle>
            Chronic Disease Management and Prevention
          </TextBlockTitle>
          <TextBlock style={{marginBottom: '30px'}}>
            Whatever chronic disease you’ve been diagnosed with, there is
            promise of management and treatment through healing nutrition. Our
            approach is focused on making sustainable lifestyle behavior changes
            to guide you back to living your healthiest life.
          </TextBlock>
        </AboutOne>
        <VideoContainer />
        <AboutTwo>
          <AboutBottomTopHalf>
            <Title>Values</Title>
            <CallToAction>
              <TextBlock>
                Tempus urna et pharetra pharetra massa massa ultricies mi quis.
                Eu sem integer vitae justo eget. Orci sagittis eu volutpat odio
                facilisis mauris sit amet massa. Ac feugiat sed lectus
                vestibulum mattis ullamcorper velit sed ullamcorper.
              </TextBlock>
              <Buttons>
                <a href="tel:801-995-9458">
                  <Button type="primaryFilled">Make Appointment</Button>
                </a>
              </Buttons>
            </CallToAction>
          </AboutBottomTopHalf>
          <GridContainer>
            {gridItems.map((gridItem, index) => {
              return (
                <GridCard key={`grid-item-${index}`}>
                  {gridItem.icon}
                  <GridCardText>{gridItem.text}</GridCardText>
                </GridCard>
              )
            })}
          </GridContainer>
        </AboutTwo>
        <AboutThree>
          <TextBlock style={{maxWidth: '600px', textAlign: 'center'}}>
            Tempus urna et pharetra pharetra massa massa ultricies mi quis. Eu
            sem integer vitae justo eget. Orci sagittis eu volutpat odio
            facilisis mauris sit amet massa. Ac feugiat sed lectus vestibulum
            mattis ullamcorper velit sed ullamcorper.
          </TextBlock>
          <ContactLink href="#contact">
            Contact Us For More Information
          </ContactLink>
        </AboutThree>
      </Container>
    </SectionWrapper>
  )
}

export default About
