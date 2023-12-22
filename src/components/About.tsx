import React, {ReactElement} from 'react'
import {Button, SectionWrapper, TextBlock, Title} from '../shared'
import styled from 'styled-components'
import {LuApple} from 'react-icons/lu'
import {IconType} from 'react-icons'
import {StaticImage} from 'gatsby-plugin-image'

type GridItem = {
  icon: ReactElement
  text: string
}

const Container = styled.div`
  /* padding: 0 200px; */
  /* padding-bottom: 50px; */
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
`

const TextBlockTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 15px;
`

const AboutOne = styled.div`
  /* width: 40%; */
  /* margin-left: 200px; */
  padding: 0px 100px 50px 100px;
  @media (max-width: 767px) {
    padding: 0 50px 50px 50px;
  }
  @media (max-width: 500px) {
    margin: 0;
    padding: 0 25px 50px 25px;
    width: 100%;
  }
`

const AboutTwo = styled.div`
  width: 100%;
  /* background: #deff94; */
  position: relative;
  padding: 50px 100px;
  @media (max-width: 767px) {
    padding: 50px;
  }
  @media (max-width: 500px) {
    padding: 50px 25px;
  }
`

const Image = styled.div`
  padding: 0px 100px 50px 100px;
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
  /* position: absolute; */
  /* top: 300px; */
  width: 100%;
  /* max-width: 1100px; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const GridCard = styled.div`
  width: 100%;
  height: 150px;
  background: #feffff;
  background: #bb9c92;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  padding: 25px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  z-index: 3;
  border-radius: 15px;
  color: #fff;
`

const GridCardText = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
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
          <Title style={{marginBottom: '50px'}}>About Us</Title>
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
          <TextBlockTitle>Weight Concerns</TextBlockTitle>
          <TextBlock style={{marginBottom: '30px'}}>
            Although weight-neutrality and intuitive eating is our approach for
            our clients, it does not mean we are unable or unwilling to discuss
            weight concerns. If this is important to you, it is important to us.
            We will work together in creating a positive approach to food and
            self-image that promotes healthy sustainable lifestyle behavior
            changes.
          </TextBlock>
        </AboutOne>
        {/* <VideoContainer /> */}
        <Image>
          <StaticImage
            src="../images/image_12.jpeg"
            alt=""
            style={{maxHeight: '250px', borderRadius: '10px'}}
            layout="fullWidth"
          />
        </Image>
        <AboutTwo>
          <AboutBottomTopHalf>
            <Title>Values</Title>
          </AboutBottomTopHalf>
          <GridContainer>
            {gridItems.map((gridItem, index) => {
              return (
                <GridCard key={`grid-item-${index}`}>
                  <GridCardText>{gridItem.text}</GridCardText>
                </GridCard>
              )
            })}
          </GridContainer>
        </AboutTwo>
      </Container>
    </SectionWrapper>
  )
}

export default About
