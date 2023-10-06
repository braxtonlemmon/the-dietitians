import React from 'react'
import {SectionWrapper, TextBlock, Title} from '../shared'
import styled from 'styled-components'

const Slider = styled.div`
  height: 200px;
  width: 100%;
`

const Container = styled.div`
  padding: 0 200px;
`

const Services: React.FC = () => {
  return (
    <SectionWrapper style={{background: 'grey'}}>
      <div style={{height: '50px', width: '100%'}} id="services" />
      <Container>
        <Title>Services</Title>
        <TextBlock>
          Tempus urna et pharetra pharetra massa massa ultricies mi quis. Eu sem
          integer vitae justo eget. Orci sagittis eu volutpat odio facilisis
          mauris sit amet massa. Ac feugiat sed lectus vestibulum mattis
          ullamcorper velit sed ullamcorper. Ipsum dolor sit amet consectetur.
          Elit at imperdiet dui accumsan. Lacus viverra vitae congue eu
          consequat ac. Bibendum ut tristique et egestas quis ipsum. Amet
          consectetur adipiscing elit duis tristique sollicitudin nibh sit.
          Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.
          Sed turpis tincidunt id aliquet.
        </TextBlock>
        <Slider />
      </Container>
    </SectionWrapper>
  )
}

export default Services
