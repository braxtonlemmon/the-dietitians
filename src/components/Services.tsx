import React from 'react'
import {SectionWrapper, TextBlock, Title} from '../shared'
import styled from 'styled-components'
import {StaticImage} from 'gatsby-plugin-image'
import {graphql, useStaticQuery} from 'gatsby'

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

const ImageSection = styled.div`
  flex: 0.5;
  @media (max-width: 1200px) {
    img {
      max-height: 400px;
    }
  }
`

const servicesList = [
  'Bariatric Surgery evaluations*',
  'Celiac',
  'Chronic Kidney Disease (stages 1-4)',
  'Constipation/Diarrhea/Stomach pain',
  'Crohn’s disease',
  'Diabetes',
  'Disordered Eating',
  'Eating Disorders- Binge Eating Disorder, Anorexia Nervosa, Bulimia Nervosa, Avoidant Restrictive Food Intake Disorder, Other Specified Feeding or Eating Disorder',
  'Ehlers Danlos syndrome (EDS)',
  'Fatty Liver Disease/Cirrhosis',
  'Gastroparesis',
  'General wellness',
  'IBS (Irritable Bowel Syndrome)',
  'POTS (Postural Orthostatic Tachycardia Syndrome)',
  'SIBO (Small Intestinal Bacteria Overgrowth)',
  'Sucrase Isomaltase enzyme deficiencies',
  'Superior Mesenteric Artery Syndrome (SMA)',
  'Ulcerative colitis',
  'LGBTQ+',
]

const Services: React.FC = () => {
  const data = useStaticQuery(graphql`
    query ServicesQuery {
      allSanityServices {
        nodes {
          title
          description
          servicesOffered
          asteriskNote
        }
      }
    }
  `)

  const {title, description, servicesOffered, asteriskNote} =
    data.allSanityServices.nodes[0]
  return (
    <SectionWrapper>
      <div style={{height: '50px', width: '100%'}} id="services" />
      <Container>
        <div style={{flex: 1}}>
          <Title>{title}</Title>
          <TextBlock>{description}</TextBlock>
          <StyledList>
            {servicesOffered.map((service: string) => (
              <ListItem>{service}</ListItem>
            ))}
          </StyledList>
          <TextBlock
            style={{
              fontStyle: 'italic',
              fontSize: '14px',
              marginTop: '16px',
              maxWidth: '700px',
            }}
          >
            {asteriskNote}
          </TextBlock>
        </div>
        <ImageSection>
          <StaticImage
            src="../images/image_18.jpeg"
            alt=""
            style={{
              borderRadius: '10px',
              maxHeight: '600px',
            }}
          />
        </ImageSection>
      </Container>
    </SectionWrapper>
  )
}

export default Services
