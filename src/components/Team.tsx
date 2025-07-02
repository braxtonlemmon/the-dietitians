import React from 'react'
import {SectionWrapper, TextBlock, Title} from '../shared'
import styled from 'styled-components'
import {graphql, useStaticQuery} from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'

const Container = styled.div`
  /* padding: 0 200px; */
  padding: 0 100px 50px 100px;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  @media (max-width: 767px) {
    padding: 0 50px 50px 50px;
  }
  @media (max-width: 500px) {
    padding: 0 25px 50px 25px;
  }
`

const TeamMemberSection = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 40px;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`

const TeamMemberCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  width: min-content;
  height: min-content;
  background-color: white;
`

const TeamMemberPhoto = styled.div`
  height: 200px;
  width: 200px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

const TeamMemberTitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 16px;
`

const TeamMemberText = styled.div`
  display: flex;
  flex-direction: column;
`

const Titles = styled.p`
  font-size: 12px;
  color: gray;
`

const Team: React.FC = () => {
  const data = useStaticQuery(graphql`
    query TeamQuery {
      allSanityTeam {
        nodes {
          description
          teamMembers {
            _key
            infoParagraph
          }
          title
        }
      }
    }
  `)
  const {description, teamMembers, title} = data.allSanityTeam.nodes[0]

  return (
    <SectionWrapper>
      <div style={{height: '50px', width: '100%'}} id="team" />
      <Container>
        <Title>{title}</Title>
        <TextBlock>{description}</TextBlock>
        {/* Kylie */}
        <TeamMemberSection>
          <TeamMemberCard>
            <TeamMemberPhoto>
              {' '}
              <StaticImage
                src="../images/profile_pic_kylie_3.jpeg"
                alt="kylie profile pic"
                height={200}
                width={200}
                style={{
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px',
                }}
              />
            </TeamMemberPhoto>
            <TeamMemberTitles>
              <p>Kylie Peterson</p>
              <Titles>MPH, RDN, CDCES, RYT</Titles>
            </TeamMemberTitles>
          </TeamMemberCard>
          <TeamMemberText>
            {teamMembers[0].infoParagraph.map(
              (paragraph: string, index: number) => {
                return (
                  <TextBlock key={`kylie-info-${index}`}>{paragraph}</TextBlock>
                )
              }
            )}
            <TextBlock>Publications:</TextBlock>
            <TextBlock>
              <span>
                <a
                  href="https://journals.sagepub.com/eprint/GABXTYDPDBSNDUYFXKFH/full"
                  target="blank"
                  referrerPolicy="no-referrer"
                  style={{color: 'blue'}}
                >
                  Weight Bias: A Narrative Review of the Evidence, Assumptions,
                  Assessment, and Recommendations for Weight Bias in Health Care
                </a>
              </span>
            </TextBlock>
          </TeamMemberText>
        </TeamMemberSection>
      </Container>
    </SectionWrapper>
  )
}

export default Team
