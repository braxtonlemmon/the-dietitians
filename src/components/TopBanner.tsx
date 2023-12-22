import React from 'react'
import styled from 'styled-components'
import {MdLocationOn} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiFillClockCircle} from 'react-icons/ai'
import {MdOutlineMail} from 'react-icons/md'

import {FaFacebook, FaInstagram} from 'react-icons/fa'
import {Link} from 'gatsby'
import {useWindowSize} from '../hooks/useWindowSize'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 40px;
  background-color: #347b6d;
  width: 100%;
  color: #fff;
  z-index: 5;
  @media (max-width: 767px) {
    padding: 20px;
  }
`

const LeftSide = styled.div`
  display: flex;
  gap: 25px;
  width: 100%;
  justify-content: flex-start;
`

const LeftItem = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

const RightSide = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  align-items: center;
`

const Emailable = styled.a`
  display: flex;
  gap: 15px;
  align-items: center;
`

const TopBanner: React.FC = () => {
  const yellow = '#deff94'
  // const yellow = '#fff'
  const {width} = useWindowSize()
  const shouldShowEmail = width < 767
  return (
    <Container id="home">
      <LeftSide>
        {' '}
        {shouldShowEmail && (
          <Emailable href="mailto:komplete.info.k@gmail.com">
            <MdOutlineMail size={24} color={yellow} />
            <p style={{color: yellow}}>komplete.info.k@gmail.com</p>
          </Emailable>
        )}
      </LeftSide>
      <RightSide>
        <Link to="#">
          <FaFacebook color={yellow} fontSize={18} />
        </Link>
        <Link to="#">
          <FaInstagram color={yellow} fontSize={18} />
        </Link>
      </RightSide>
    </Container>
  )
}

export default TopBanner
