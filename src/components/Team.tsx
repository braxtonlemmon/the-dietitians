import React from 'react'
import {SectionWrapper, TextBlock, Title} from '../shared'
import styled from 'styled-components'

const Container = styled.div`
  padding: 0 200px;
  padding-bottom: 50px;
`

const TeamMemberSection = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 40px;
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
  background: #787878;
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
  return (
    <SectionWrapper style={{backgroundColor: '#dfdfdf'}}>
      <div style={{height: '50px', width: '100%'}} id="team" />
      <Container>
        <Title>Meet Our Team</Title>
        <TextBlock>
          Hello! We are Kelli Jo & Kylie. We met during college years ago and
          became the best of friends. Life and our careers took us to different
          places but remained great friends. We noticed that our professional
          backgrounds complimented each other quite well and the idea for
          Komplete Nutrition was born. We both are passionate about people and
          nutrition and helping individuals find peace and liberation through
          healing nutrition.
        </TextBlock>
        {/* Kelli Jo  */}
        <TeamMemberSection>
          <TeamMemberCard>
            <TeamMemberPhoto />
            <TeamMemberTitles>
              <p>Kelli Jo Grover</p>
              <Titles>MS, RD</Titles>
            </TeamMemberTitles>
          </TeamMemberCard>
          <TeamMemberText>
            <TextBlock>
              Kelli Jo has worked in eating disorder treatment as the lead
              dietitian at inpatient (IP), Residential (RTC), Partial
              hospitalization (PHP) and outpatient (OP) levels of care for the
              last 6 years. She helped create a BED track at an
              inpatient/residential eating disorder treatment center. Kelli Jo
              has worked with extensive medical complications, including
              gastroparesis, bariatric surgeries, allergies, enteral feedings,
              autoimmune disorders, diabetes (pre-diabetes, type II, and type
              I), Ehlers Danlos Syndrome (EDS), superior mesenteric artery
              syndrome (SMA) and postural orthostatic tachycardia syndrome
              (POTS). Kelli Jo has also worked with individuals who struggle
              with co-occurring borderline personality disorder (BPD),
              dissociative identity disorder (DID), obsessive compulsive
              disorder (OCD), substance abuse, and other addictions. She works
              with individuals with significant trauma and understands how this
              impacts one's relationship with food and body. She uses Radically
              Open Dialectical Behavior Therapy (RO-DBT) to help teach
              individuals flexibility both in life and with food. Kelli Jo uses
              aspects of somatic experiencing to help individuals struggling
              with body image and body dysmorphia. Kelli Jo was a college
              athlete herself and understands the impact this can have on one's
              perception of self/identity and how this affects food consumption
              when trying to perform or play a sport at a competitive level.
            </TextBlock>
            <TextBlock>
              Kelli Jo has a deep desire to help individuals who struggle with
              eating disorders as she has seen the pain one goes through when
              trying to free oneself from this disorder. She knows it is a
              constant battle and wants to help support and guide individuals
              toward finding freedom and reconnecting with oneself.
            </TextBlock>
          </TeamMemberText>
        </TeamMemberSection>

        {/* Kylie */}
        <TeamMemberSection>
          <TeamMemberCard>
            <TeamMemberPhoto />
            <TeamMemberTitles>
              <p>Kylie Peterson</p>
              <Titles>MPH, RDN, CDCES, RYT</Titles>
            </TeamMemberTitles>
          </TeamMemberCard>
          <TeamMemberText>
            <TextBlock>
              Kylie’s initial interest in nutrition began largely in part due to
              growing up in a family with numerous gastro-intestinal disorders
              including IBS, Crohn’s and ulcerative colitis. She saw the impact
              nutrition had on the quality of life for her family and wanted to
              share that with others. In Kylie’s personal health journey, she
              has found liberation in an anti-diet approach, self-acceptance,
              mindfulness, and gentle nutrition.
            </TextBlock>
            <TextBlock>
              Kylie has been working as a Registered Dietitian since 2015. Her
              work experience includes 9 years of working in the critical care
              setting on ICU and medical surgical floors. Her experience
              includes the nutrition management of severe gastrointestinal
              concerns including inflammatory bowel disease, ostomies, bowel
              obstructions, bowel surgeries, pancreatitis, and liver disease.
              She also has experience with nutritional management of kidney
              disease as well as heart complications like heart failure and
              cardiac rehab patients. She also worked with individuals on
              nutrition support including tube feeds and total parenteral
              nutrition (TPN). Kylie is also a Certified Diabetes Care and
              Education Specialist and has extensive experience working with
              diabetes patients from new onset to managing and preventing
              complications.
            </TextBlock>
            <TextBlock>
              Kylie’s work experience has been unique as her in-patient critical
              care experience has always been coupled with the outpatient
              setting. Kylie’s heart lies with outpatient work, as it allows for
              a deeper connection and impact with individuals. In the outpatient
              setting, she has worked one on one with a myriad of conditions
              including heart health, diabetes, kidney health, liver health, gut
              health, eating disorders (anorexia nervosa, bulimia nervosa, binge
              eating disorder), emotional eating/disordered eating, tube feeds,
              and general health and wellbeing. Her work incorporates
              motivational interviewing, cognitive behavior therapy, and
              acceptance commitment therapy around applying and making lifestyle
              behavior changes. Kylie’s focus is one of hope and liberation, no
              matter what your condition is, to find an eating style that is as
              varied and diversified within the guidelines of your condition to
              optimize health and outcomes.
            </TextBlock>
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
