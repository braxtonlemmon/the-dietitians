import React, {ReactElement} from 'react'
import {Button, SectionWrapper, TextBlock, Title} from '../shared'
import styled from 'styled-components'
import {LuApple} from 'react-icons/lu'
import {IconType} from 'react-icons'
import {StaticImage} from 'gatsby-plugin-image'
import {graphql, useStaticQuery} from 'gatsby'

type GridItem = {
  icon: ReactElement
  text: string
}

type AboutSection = {
  sectionTitle: string
  sectionText: string
  _key: string
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

const About: React.FC = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      allSanityAbout {
        nodes {
          title
          values
          aboutSections {
            _key
            sectionText
            sectionTitle
          }
        }
      }
    }
  `)
  const {title, values, aboutSections} = data.allSanityAbout.nodes[0]

  return (
    <SectionWrapper>
      <div style={{height: '50px', width: '100%'}} id="about" />
      <Container>
        <AboutOne>
          <Title style={{marginBottom: '50px'}}>{title}</Title>
          {aboutSections.map((section: AboutSection) => {
            return (
              <>
                <TextBlockTitle key={`about-subtitle-${section._key}`}>
                  {section.sectionTitle}
                </TextBlockTitle>
                <TextBlock
                  style={{marginBottom: '30px'}}
                  key={`about-body-${section._key}`}
                >
                  {section.sectionText}
                </TextBlock>
              </>
            )
          })}
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
            {values.map((value: string, index: number) => {
              return (
                <GridCard key={`grid-item-${index}`}>
                  <GridCardText>{value}</GridCardText>
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
