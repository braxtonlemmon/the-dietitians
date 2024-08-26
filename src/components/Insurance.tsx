import React from 'react'
import {SectionWrapper, TextBlock, Title} from '../shared'
import styled from 'styled-components'
import {graphql, useStaticQuery} from 'gatsby'
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
    align-items: flex-start;
  }
  @media (max-width: 767px) {
    padding: 0 50px 50px 50px;
  }
  @media (max-width: 500px) {
    padding: 0 25px 50px 25px;
    justify-content: flex-start;
  }
`

const ListItem = styled.li`
  list-style: disc;
  margin: 10px 0;
  margin-left: 25px;
`

const ImageSection = styled.div`
  flex: 0.7;
  @media (max-width: 1200px) {
    img {
      max-width: 800px;
      margin: 0 auto;
      border-radius: 10px;
    }
  }
`

const Insurance: React.FC = () => {
  const data = useStaticQuery(graphql`
    query InsuranceQuery {
      allSanityInsurance {
        nodes {
          title
          description
          acceptedInsurance
        }
      }
    }
  `)

  const {title, description, acceptedInsurance} =
    data.allSanityInsurance.nodes[0]
  return (
    <SectionWrapper>
      <div style={{height: '50px', width: '100%'}} id="insurance" />
      <Container>
        <div style={{flex: 0.7}}>
          <Title>{title}</Title>
          <TextBlock>{description}</TextBlock>
          <ul>
            {acceptedInsurance.map((insurance: string) => (
              <ListItem>{insurance}</ListItem>
            ))}
          </ul>
        </div>
        <ImageSection>
          <StaticImage
            src="../images/image_10.jpeg"
            alt=""
            style={{
              borderRadius: '10px',
              maxHeight: '300px',
            }}
          />
        </ImageSection>
      </Container>
    </SectionWrapper>
  )
}

export default Insurance
