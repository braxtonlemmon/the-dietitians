import React, {useEffect} from 'react'
import styled from 'styled-components'
import {MdOutlineMail} from 'react-icons/md'
import {graphql, useStaticQuery} from 'gatsby'
import {GiHamburgerMenu} from 'react-icons/gi'
import {useWindowSize} from '../hooks/useWindowSize'

interface HeaderProps {
  setIsMobileNavOpen: (isOpen: boolean) => void
  isMobileNavOpen: boolean
}
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
  z-index: 5;
  color: #347b6d;
  color: #515352;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
    padding: 10px 20px;
  }
`

const RowContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    justify-content: flex-end;
  }
`

const Link = styled.a`
  color: #515352;
  &:hover {
    transform: scale(1.05);
  }
`

const Links = styled.div`
  display: flex;
  gap: 30px;
  justify-content: flex-start;
  align-items: center;
`

const LogoContainer = styled.a`
  height: 60px;
  /* width: 100%; */
  min-width: 120px;
  cursor: pointer;
  @media (max-width: 767px) {
    height: 45px;
  }
`

const Logo = styled.img`
  height: 100%;
  width: 100%;
`

const Emailable = styled.a`
  display: flex;
  gap: 15px;
  align-items: center;
  color: #515352;
`

export const navLinks: Link[] = [
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
    title: 'Insurance',
    section: '#insurance',
  },
  // {
  //   title: 'Groups',
  //   section: '#groups',
  // },
  {
    title: 'Team',
    section: '#team',
  },
  {
    title: 'Testimonials',
    section: '#testimonials',
  },
  // {
  //   title: 'Referrals',
  //   section: '#referrals',
  // },
  {
    title: 'Contact',
    section: '#contact',
  },
]

const Header: React.FC<HeaderProps> = ({
  setIsMobileNavOpen,
  isMobileNavOpen,
}) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: {extension: {regex: "/(svg)/"}, name: {eq: "logo"}}) {
        edges {
          node {
            publicURL
          }
        }
      }
      allSanityContactInfo {
        nodes {
          email
        }
      }
    }
  `)

  const {email} = data.allSanityContactInfo.nodes[0]

  const {width} = useWindowSize()
  const shouldHideLinks = width < 1200
  const shouldHideEmail = width < 767

  return (
    <MainHeader>
      {shouldHideLinks && (
        <GiHamburgerMenu
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          style={{cursor: 'pointer'}}
          size={24}
          color="#515352"
        />
      )}
      <RowContainer>
        <LogoContainer href="#home">
          <Logo
            src={data.allFile.edges[0].node.publicURL}
            alt="komplete nutrition logo"
          />
        </LogoContainer>
        {shouldHideEmail && (
          <Emailable href={`mailto:${email}`}>
            <MdOutlineMail size={24} color="#515352" />
          </Emailable>
        )}
      </RowContainer>
      {!shouldHideLinks && (
        <Links>
          {navLinks.map((link) => {
            return <Link href={link.section}>{link.title}</Link>
          })}
        </Links>
      )}
      {!shouldHideEmail && (
        <Emailable href={`mailto:${email}`}>
          <MdOutlineMail size={24} color="#515352" />
          <p>{email}</p>
        </Emailable>
      )}
    </MainHeader>
  )
}

export default Header
