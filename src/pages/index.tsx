import React from 'react'
import type {HeadFC, PageProps} from 'gatsby'
import styled from 'styled-components'
import Services from '../components/Services'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {DividerLine} from '../shared'
import SEO from '../components/SEO'
import Insurance from '../components/Insurance'
import Layout from '../components/layout'

const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  display: flex;
  /* gap: 70px; */
  z-index: 1;
`

const IndexPage: React.FC<PageProps> = ({data}) => {
  return (
    <Layout>
      <Hero />
      <Content>
        <About />
        <DividerLine />
        <Services />
        <DividerLine />
        <Insurance />
        <DividerLine />
        <Team />
        <DividerLine />
        <Testimonials />
        <DividerLine />
        <Contact />
      </Content>
      <Footer />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <SEO
    title="Komplete Nutrition"
    description="nutrition counseling, medical nutrition therapy, diabetes"
  />
)
