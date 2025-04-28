import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  background: #347b6d;
  background: #474b4c;
  width: 100%;
  padding: 50px;
`

const Footer: React.FC = () => {
  return (
    <Container>
      <p style={{color: 'white'}}>
        Komplete Nutrition © 2025 | All Rights Reserved.
      </p>
    </Container>
  )
}

export default Footer
