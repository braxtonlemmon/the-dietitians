import React from 'react'
import styled from 'styled-components'
import {MdLocationOn} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiFillClockCircle} from 'react-icons/ai'
import {FaFacebook, FaTwitter, FaYoutube} from 'react-icons/fa'
import {Link} from 'gatsby'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 40px;
  background-color: #347b6d;
  width: 100%;
  color: #fff;
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

const TopBanner: React.FC = () => {
  const yellow = '#deff94'
  return (
    <Container id="home">
      <LeftSide>
        <LeftItem>
          <BsFillTelephoneFill color={yellow} fontSize={18} />
          <p>Emergency Line: 911</p>
        </LeftItem>
        <LeftItem>
          <MdLocationOn color={yellow} fontSize={20} />
          <p>Location: SLC, Utah</p>
        </LeftItem>
        <LeftItem>
          <AiFillClockCircle color={yellow} fontSize={18} />
          <p>Mon-Fri: 8:00 am - 5:00 pm</p>
        </LeftItem>
      </LeftSide>
      <RightSide>
        <Link to="#">
          <FaFacebook color={yellow} fontSize={18} />
        </Link>
        <Link to="#">
          <FaTwitter color={yellow} fontSize={18} />
        </Link>
        <Link to="#">
          <FaYoutube color={yellow} fontSize={18} />
        </Link>
      </RightSide>
    </Container>
  )
}

export default TopBanner
