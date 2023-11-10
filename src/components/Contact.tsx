import React from 'react'
import {SectionWrapper, Title} from '../shared'
import styled from 'styled-components'

const Container = styled.div`
  padding: 0 200px;
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
          <p>Email:</p>
          <a href="mailto:info@kompletenutrition.com">
            info@kompletenutrition.com
          </a>
        </Row>
        <Row>
          <p>Phone:</p>
          <a href="tel:801-995-9458">801-995-9458</a>
        </Row>
        <Col>
          <p>Physical Locations</p>
          <ul>
            {physicalLocations.map((location) => (
              <li>{location}</li>
            ))}
          </ul>
        </Col>
        <Col>
          <p>Virtual Locations</p>
          <ul>
            {virtualLocations.map((location) => (
              <li>{location}</li>
            ))}
          </ul>
        </Col>

        <div style={{height: '400px'}} />
      </Container>
    </SectionWrapper>
  )
}

export default Contact
