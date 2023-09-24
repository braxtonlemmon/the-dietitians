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
  border-bottom: 1px solid yellow;
  z-index: 2;
  color: #347b6d;
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

const Title = styled.div`
  display: flex;
  flex-direction: column;
`

const Word = styled.h1`
  text-transform: uppercase;
`

const LogoContainer = styled.div`
  height: 80px;
`

const Logo = styled.img`
  height: 100%;
  width: 100%;
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
    title: 'Testimonials',
    section: '#testimonials',
  },
  {
    title: 'Services',
    section: '#services',
  },
  {
    title: 'Team',
    section: '#team',
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

  useEffect(() => {
    console.log(data)
  }, [])
  return (
    <MainHeader>
      <RowContainer>
        <LogoContainer>
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
      <RowContainer>
        <BsFillTelephoneFill />
        <p>8016007125</p>
      </RowContainer>
    </MainHeader>
  )
}

export default Header
