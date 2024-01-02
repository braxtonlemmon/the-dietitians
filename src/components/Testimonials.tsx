import React from 'react'
import {SectionWrapper, Title} from '../shared'
import styled from 'styled-components'
import Slider from 'react-slick'
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import {useWindowSize} from '../hooks/useWindowSize'
import {StaticImage} from 'gatsby-plugin-image'

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

const testimonials: string[] = [
  '[Komplete Nutrition] has truly made a massive impact on my life. I have struggled for a long time, and they truly helped me see the other side. They are kind, funny, and truly want the best for their patients. I am so lucky I found this program. I will continue to recommend this place to everyone. They are AMAZING.',
  "There are truly no words to describe how absolutely amazing the professionals in the company are![Komplete Nutrition] has helped me beyond measure. After working with other specialists for years, I thought I was stuck in my disordered eating cycle forever because nothing seemed to be working. Working with them has given me insights into my habits that I would've never picked up on, and those insights have put me on a path to recovery that I haven't been able to achieve before. Without exaggeration, she's given me my life back because my disordered eating is no longer at the forefront. I will never be able to show them enough gratitude!",
  "I searched for help for over a year and this is THE place that worked for me. They is incredibly kind, encouraging, and knowledgeable. I did all my sessions over zoom and it was so helpful. Never thought I would've made this much progress. If you are even considering setting up an appointment, DO IT! Best decision I've ever made when it comes to my physical and mental health",
  'I met with [Komplete Nutrition] and had an amazing experience! They helped me understand my food struggles and gave me tools to conquer them. So grateful for the help I received!',
  'Best decision I have ever made was getting help. [Komplete Nutrition] has changed my life for the better and I will forever be grateful.',
]

const Testimonials: React.FC = () => {
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
              {testimonials.map((testimonial) => (
                <div>
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
