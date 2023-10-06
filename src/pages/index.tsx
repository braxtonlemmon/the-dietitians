import * as React from 'react'
import type {HeadFC, PageProps} from 'gatsby'
import styled from 'styled-components'
import Header from '../components/Header'
import Services from '../components/Services'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Resources from '../components/Resources'
import TopBanner from '../components/TopBanner'
import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'

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
  margin: 0 auto;
  flex-direction: column;
  display: flex;
  gap: 70px;
  z-index: 1;
  padding-top: 60px;
`

const IndexPage: React.FC<PageProps> = ({data}) => {
  return (
    <Container>
      <TopBanner />
      <Header />
      <Hero />
      <Content>
        <About />
        <Services />
        <Team />
        <Testimonials />
        <Contact />
      </Content>
      <Footer />
    </Container>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Komplete Nutrition</title>
