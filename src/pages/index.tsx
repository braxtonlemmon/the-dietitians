import React, {useState} from 'react'
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
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MobileNav from '../components/MobileNav'
import {DividerLine} from '../shared'
import SEO from '../components/SEO'
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
  /* gap: 70px; */
  z-index: 1;
`

const IndexPage: React.FC<PageProps> = ({data}) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  return (
    <>
      <Container>
        <MobileNav isOpen={isMobileNavOpen} setIsOpen={setIsMobileNavOpen} />
        {/* <TopBanner /> */}
        <Header
          setIsMobileNavOpen={setIsMobileNavOpen}
          isMobileNavOpen={isMobileNavOpen}
        />
        <Hero />
        <Content>
          <About />
          <DividerLine />

          <Services />
          <DividerLine />

          <Team />
          <DividerLine />

          <Testimonials />
          <DividerLine />
          <Contact />
        </Content>
        <Footer />
      </Container>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <SEO
    title="Komplete Nutrition"
    description="nutrition counseling, medical nutrition therapy, diabetes"
  />
)
