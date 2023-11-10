import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  background: #347b6d;
  width: 100%;
  padding: 100px;
`

const Footer: React.FC = () => {
  return (
    <Container>
      <p style={{color: 'white'}}>
        Komplete Nutrition © 2023 | All Rights Reserved.
      </p>
    </Container>
  )
}

export default Footer
