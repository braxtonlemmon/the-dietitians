import React, {useState} from 'react'
import styled from 'styled-components'
import MobileNav from '../components/MobileNav'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
  z-index: 1;
`

export default function Layout({children}: {children: React.ReactNode}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <Container>
      <MobileNav isOpen={isMobileNavOpen} setIsOpen={setIsMobileNavOpen} />
      <Header
        setIsMobileNavOpen={setIsMobileNavOpen}
        isMobileNavOpen={isMobileNavOpen}
      />
      {children}
      <Footer />
    </Container>
  )
}
