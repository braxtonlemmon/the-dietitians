import * as React from 'react'
import type {HeadFC, PageProps} from 'gatsby'
import styled from 'styled-components'
import Header from '../components/Header'
import Services from '../components/Services'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Resources from '../components/Resources'

const Container = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 160px;
  flex-direction: column;
  display: flex;
  gap: 70px;
  z-index: 1;
  padding: 0 50px;
`

const IndexPage: React.FC<PageProps> = ({data}) => {
  return (
    <Container>
      <Header />
      <Content>
        <Services />
        <Team />
        <Contact />
        <Resources />
      </Content>
    </Container>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
