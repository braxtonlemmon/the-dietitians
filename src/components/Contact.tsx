import React from 'react'
import {SectionWrapper, Title} from '../shared'
import styled from 'styled-components'
import {StaticImage} from 'gatsby-plugin-image'

const Container = styled.div`
  /* padding: 0 200px; */
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 100px 50px 100px;
  @media (max-width: 767px) {
    padding: 0 50px 50px 50px;
  }
  @media (max-width: 500px) {
    padding: 0 25px 50px 25px;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.div`
  width: 100%;
  max-width: 800px;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 15px;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 15px;
`

const ListItem = styled.li`
  list-style: disc;
  margin-bottom: 5px;
  margin-left: 25px;
`

const physicalLocations = [
  'Peoria, Arizona',
  'Surprise, Arizona',
  'Ogden, Utah – coming',
  'Layton, Utah – coming',
  'Salt Lake City – coming',
]

const virtualLocations = [
  'Arizona',
  'Alaska',
  'California',
  'Colorado',
  'Connecticut',
  'Hawaii',
  'Idaho',
  'Indiana',
  'Massachusetts',
  'New Hampshire',
  'New York',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const Contact: React.FC = () => {
  return (
    <SectionWrapper>
      <div style={{height: '50px', width: '100%'}} id="contact" />
      <Container>
        <Title>Contact</Title>
        <Row>
          <p>Phone:</p>
          <a href="tel:8019959458">801-995-9458</a>
        </Row>
        <Row>
          <p>Email:</p>
          <a href="mailto:kompletenutrition@gmail.com">
            kompletenutrition@gmail.com
          </a>
        </Row>
        <Col style={{marginTop: '20px'}}>
          <p style={{fontSize: '20px'}}>Available virtual locations:</p>
          <ImageContainer>
            <Image>
              <StaticImage
                src="../images/virtual_map.png"
                alt="virtual locations map"
                layout="fullWidth"
              />
            </Image>
          </ImageContainer>
          {/* <ul>
            {virtualLocations.map((location) => (
              <ListItem>{location}</ListItem>
            ))}
          </ul> */}
        </Col>
        <Col style={{marginTop: '20px'}}>
          <p style={{fontSize: '20px'}}>Physical locations coming soon!</p>
        </Col>
      </Container>
    </SectionWrapper>
  )
}

export default Contact
