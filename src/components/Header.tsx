import React, {useEffect} from 'react'
import styled from 'styled-components'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {graphql, useStaticQuery} from 'gatsby'

interface Link {
  title: string
  section: string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const MainHeader = styled.header`
  width: 100%;
  display: flex;
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  gap: 30px;
  position: sticky;
  top: 0px;
  background: white;
  z-index: 2;
  color: #347b6d;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
`

const RowContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
`

const Link = styled.a`
  color: #347b6d;
  &:hover {
    transform: scale(1.05);
  }
`

const Links = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
`

const LogoContainer = styled.a`
  height: 80px;
  cursor: pointer;
`

const Logo = styled.img`
  height: 100%;
  width: 100%;
`

const Callable = styled.a`
  display: flex;
  gap: 15px;
  align-items: center;
`

const links: Link[] = [
  {
    title: 'Home',
    section: '#home',
  },
  {
    title: 'About Us',
    section: '#about',
  },
  {
    title: 'Services',
    section: '#services',
  },
  {
    title: 'Team',
    section: '#team',
  },
  {
    title: 'Testimonials',
    section: '#testimonials',
  },
  {
    title: 'Contact',
    section: '#contact',
  },
]

const Header: React.FC = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: {extension: {regex: "/(svg)/"}, name: {eq: "logo"}}) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)

  return (
    <MainHeader>
      <RowContainer>
        <LogoContainer href="#home">
          <Logo
            src={data.allFile.edges[0].node.publicURL}
            alt="komplete nutrition logo"
          />
        </LogoContainer>
      </RowContainer>
      <Links>
        {links.map((link) => {
          return <Link href={link.section}>{link.title}</Link>
        })}
      </Links>
      <Callable href="tel:801-600-7125">
        <BsFillTelephoneFill />
        <p>8016007125</p>
      </Callable>
    </MainHeader>
  )
}

export default Header
