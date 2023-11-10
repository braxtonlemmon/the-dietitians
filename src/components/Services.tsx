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
const servicesList = [
  'Eating Disorders- Binge Eating Disorder, Anorexia Nervosa, Bulimia Nervosa, Avoidant Restrictive Food Intake Disorder, Other Specified Feeding or Eating Disorder',
  'Disordered Eating',
  'IBS (Irritable Bowel Syndrome)',
  'SIBO (Small Intestinal Bacteria Overgrowth)',
  'Sucrase Isomaltase enzyme deficiencies',
  'Ehlers Danlos syndrome (EDS)',
  'POTS (Postural Orthostatic Tachycardia Syndrome)',
  'Superior Mesenteric Artery Syndrome (SMA)',
  'Gastroparesis',
  'Celiac',
  'Crohn’s disease',
  'Ulcerative colitis',
  'Constipation/Diarrhea/Stomach pain',
  'General wellness',
  'Type 2 Diabetes',
  'Fatty Liver Disease/Cirrhosis',
  'Chronic Kidney Disease (stages 1-4)',
  'Bariatric Surgery evaluations*',
  'LGBTQ+ friendly',
]

const Services: React.FC = () => {
  return (
    <SectionWrapper style={{background: '#dfdfdf'}}>
      <div style={{height: '50px', width: '100%'}} id="services" />
      <Container>
        <Title>Services offered virtually, in person, and at your home</Title>
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
        <ul>
          {servicesList.map((service) => (
            <li>{service}</li>
          ))}
        </ul>
        <Slider />
      </Container>
    </SectionWrapper>
  )
}

export default Services
