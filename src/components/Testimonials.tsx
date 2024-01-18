import React from 'react'
import {SectionWrapper, Title} from '../shared'
import styled from 'styled-components'
import Slider from 'react-slick'
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import {useWindowSize} from '../hooks/useWindowSize'
import {StaticImage} from 'gatsby-plugin-image'
import {graphql, useStaticQuery} from 'gatsby'

const Container = styled.div`
  /* padding: 0 150px; */
  /* background: lightgrey; */
  padding: 0 100px 50px 100px;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  .slider {
    height: 320px;
  }
  .slick-prev {
    z-index: 1;
  }
  .slick-next {
    z-index: 1;
  }
  @media (max-width: 500px) {
    .slider {
      height: 450px;
    }
  }
  @media (max-width: 767px) {
    padding: 0 50px 50px 50px;
  }
`

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 0px;
  }
`

const TestimonialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 320px;
  width: 100%;
  padding: 0 15px;
  @media (max-width: 500px) {
    height: 450px;
  }
`

const Testimonial = styled.p`
  font-size: 16px;
  text-align: center;
  font-style: italic;
`

const RightArrow = styled(AiOutlineArrowRight)`
  z-index: 5;
  height: 32px;
  width: 32px;
`

const LeftArrow = styled(AiOutlineArrowLeft)`
  z-index: 5;
  height: 32px;
  width: 32px;
`

const ImageContainer = styled.div`
  width: 60%;
  @media (max-width: 767px) {
    width: 100%;
    margin-top: 24px;
  }
`

const Testimonials: React.FC = () => {
  const data = useStaticQuery(graphql`
    query TestimonialsQuery {
      allSanityTestimonialsSection {
        nodes {
          testimonials
        }
      }
    }
  `)
  const {testimonials} = data.allSanityTestimonialsSection.nodes[0]
  const {width} = useWindowSize()
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    // slidesToShow: width > 767 ? 2 : 1,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <SectionWrapper>
      <div style={{height: '50px', width: '100%'}} id="testimonials" />
      <Container>
        <Title>Testimonials</Title>
        <InnerContainer>
          <ImageContainer>
            <StaticImage
              src="../images/image_5.jpeg"
              alt=""
              style={{
                borderRadius: '10px',
                maxHeight: '600px',
              }}
            />
          </ImageContainer>
          <div style={{width: width < 767 ? '100%' : '40%'}}>
            <Slider
              {...settings}
              className="slider"
              nextArrow={<RightArrow color="black" />}
              prevArrow={<LeftArrow color="black" />}
            >
              {testimonials.map((testimonial: string, index: number) => (
                <div key={`testimonial-${index}`}>
                  <TestimonialContainer>
                    <Testimonial>{`"${testimonial}"`}</Testimonial>
                  </TestimonialContainer>
                </div>
              ))}
            </Slider>
          </div>
        </InnerContainer>
      </Container>
    </SectionWrapper>
  )
}

export default Testimonials
