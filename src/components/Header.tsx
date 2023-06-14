import React from 'react'
import styled from 'styled-components'

interface Link {
  title: string
  section: string
}

const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 30px;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  border-bottom: 1px solid yellow;
  z-index: 2;
`

const Link = styled.a``

const Logo = styled.div`
  height: 100px;
  width: 100px;
  border: 1px solid grey;
  border-radius: 50%;
`

const links: Link[] = [
  {
    title: 'Home',
    section: '#home',
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
    title: 'Contact',
    section: '#contact',
  },
  {
    title: 'Resources',
    section: '#resources',
  },
]

const Header: React.FC = () => {
  return (
    <Container>
      <Logo />
      {links.map((link) => {
        return <Link href={link.section}>{link.title}</Link>
      })}
    </Container>
  )
}

export default Header
