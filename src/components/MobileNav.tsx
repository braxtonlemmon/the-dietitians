import React from 'react'
import styled from 'styled-components'
import {navLinks} from './Header'

type MobileNavProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const Container = styled.nav<{isOpen: boolean}>`
  width: 250px;
  height: 100vh;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  transform: ${(props) =>
    props.isOpen ? 'translateX(0px)' : 'translateX(-333px)'};
  transition: all 600ms ease;
  z-index: 4;
  box-shadow: 5px 0 5px -5px #333;
  padding-top: 100px;
  padding-left: 20px;
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Link = styled.a`
  cursor: pointer;
  color: ${(props) => props.theme.colors.one};
  display: flex;
  text-transform: uppercase;
  &:hover {
    color: ${(props) => props.theme.colors.two};
  }
  font-size: 18px;
`

const MobileNav: React.FC<MobileNavProps> = ({isOpen, setIsOpen}) => {
  return (
    <Container isOpen={isOpen} onClick={() => setIsOpen(false)}>
      <LinksContainer>
        {navLinks.map((link) => (
          <Link href={link.section}>{link.title}</Link>
        ))}
      </LinksContainer>
    </Container>
  )
}

export default MobileNav
