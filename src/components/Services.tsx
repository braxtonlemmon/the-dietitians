import React from 'react'
import {SectionWrapper, TextBlock, Title} from '../shared'
import styled from 'styled-components'
import {StaticImage} from 'gatsby-plugin-image'

const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0px 100px 50px 100px;
  display: flex;
  gap: 30px;
  align-items: center;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (max-width: 767px) {
    padding: 0 50px 50px 50px;
  }
  @media (max-width: 500px) {
    padding: 0 25px 50px 25px;
  }
`

const StyledList = styled.ul`
  max-width: 550px;
`

const ListItem = styled.li`
  list-style: disc;
  margin: 10px 0;
  margin-left: 25px;
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
    <SectionWrapper>
      <div style={{height: '50px', width: '100%'}} id="services" />
      <Container>
        <div style={{flex: 1}}>
          <Title>Services offered virtually, in person, and at your home</Title>
          <TextBlock>
            Personalized one-on-one nutrition counseling tailored to your
            specific health journey.
          </TextBlock>
          <StyledList>
            {servicesList.map((service) => (
              <ListItem>{service}</ListItem>
            ))}
          </StyledList>
        </div>
        <div style={{flex: 0.5}}>
          <StaticImage
            src="../images/image_18.jpeg"
            alt=""
            style={{
              borderRadius: '10px',
              maxHeight: '600px',
            }}
          />
        </div>
      </Container>
    </SectionWrapper>
  )
}

export default Services
