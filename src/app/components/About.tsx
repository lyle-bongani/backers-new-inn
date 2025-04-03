import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 4rem;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 5rem;
  margin-bottom: 6rem;
  align-items: start;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Title = styled.h1`
  color: #2B1B58;
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`

const Description = styled.p`
  color: #666666;
  font-size: 1.25rem;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1.1rem;
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
  transition: background-color 0.3s;
  width: fit-content;

  &:hover {
    background-color: #A88347;
  }
`

const ImageGrid = styled.div`
  display: none; // Hide by default on mobile

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem; // Increased gap between images
    margin-top: 2rem; // Add some space above the image grid
  }
`

const ImageContainer = styled.div`
  overflow: hidden;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  transition: transform 0.3s ease; // Add smooth transition for hover effect

  &:hover {
    transform: translateY(-5px); // Add subtle lift effect on hover
  }
`

const StyledImage = styled(Image)`
  width: 100%;
  height: 280px;
  object-fit: cover;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.05);
  }
`

const About = () => {
  return (
    <Container>
      <Grid>
        <Title>About Baker's Inn</Title>
        <Content>
          <Description>
            It all started in the eighties when Baker&apos;s Inn was just a small confectionery company that employed 40 people and produced about 30,000 loaves a day. We now aim to provide a nourishing, convinient and accessible answer to hunger&apos;s call.
          </Description>
          <p>We&apos;re committed to quality and innovation</p>
          <p>Join us in our journey to provide Zimbabwe&apos;s finest bread products</p>
          <ReadMoreButton href="/about">
            READ MORE
          </ReadMoreButton>
        </Content>
      </Grid>

      <ImageGrid>
        <ImageContainer>
          <StyledImage
            src="/images/sandwich.png"
            alt="Club Sandwich"
            width={400}
            height={300}
            priority
          />
        </ImageContainer>
        <ImageContainer>
          <StyledImage
            src="/images/pie.png"
            alt="Meat Pie"
            width={400}
            height={300}
          />
        </ImageContainer>
        <ImageContainer>
          <StyledImage
            src="/images/doughnut tea.png"
            alt="Donut and Coffee"
            width={400}
            height={300}
          />
        </ImageContainer>
        <ImageContainer>
          <StyledImage
            src="/images/slices.png"
            alt="Fresh Bread Slices"
            width={400}
            height={300}
          />
        </ImageContainer>
      </ImageGrid>
    </Container>
  )
}

export default About 