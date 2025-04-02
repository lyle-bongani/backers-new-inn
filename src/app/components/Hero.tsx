'use client'

import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const HeroSection = styled.div`
  background-color: #2B1B58;
  min-height: 65vh;
  padding-top: 1rem;
  position: relative;
  overflow: hidden;
  margin: 2rem 1rem 1rem 1rem;
  isolation: isolate;

  @media (max-width: 768px) {
    margin: 2rem 0.75rem 0.75rem 0.75rem;
    min-height: 50vh;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Content = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 32rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
    margin: 0 auto;
    gap: 1rem;
  }
`

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1.1;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`

const Highlight = styled.span`
  text-decoration: underline;
  text-decoration-color: #C19A5B;
  text-decoration-thickness: 3px;
  text-underline-offset: 12px;
`

const Description = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  opacity: 0.9;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-top: 0.5rem;
  }
`

const ReadMoreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #C19A5B;
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1.5rem;
  transition: background-color 0.3s;
  width: fit-content;

  &:hover {
    background-color: #A88347;
  }
`

const ImageContainer = styled.div`
  position: relative;
  height: 367px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 2;
  overflow: visible;

  @media (max-width: 768px) {
    height: 250px;
    justify-content: center;
    margin-top: 1rem;
  }
`

const BackgroundPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: url('/images/African Pattern 2.png');
  background-repeat: repeat;
  background-size: 400px;
  opacity: 0.15;
  pointer-events: none;
  mix-blend-mode: overlay;
  z-index: 1;
`

const HeroImage = styled(Image)`
  object-fit: contain;
  transform: scale(1.2);
  margin-right: -5%;

  @media (max-width: 768px) {
    transform: scale(1);
    margin-right: 0;
  }
`

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <Grid>
          <Content>
            <Title>
              Bringing you the{' '}
              <Highlight>best value</Highlight>{' '}
              at the{' '}
              <Highlight>best prices</Highlight>
              .
            </Title>
            <Description>
              The freshest sandwiches you can make with Baker&apos;s inn soft white loaf.
            </Description>
            <ReadMoreButton href="/products">
              READ MORE
            </ReadMoreButton>
          </Content>
          
          <ImageContainer>
            <HeroImage 
              src="/images/groupheader bread.png"
              alt="Fresh bread"
              width={800}
              height={800}
              priority
            />
          </ImageContainer>
        </Grid>
      </Container>
      
      <BackgroundPattern />
    </HeroSection>
  )
}

export default Hero;