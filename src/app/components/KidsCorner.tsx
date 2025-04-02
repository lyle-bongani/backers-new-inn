'use client'

import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #2B1B58;
  padding: 2rem 4rem;
  position: relative;
  overflow: hidden;
  margin: 3em;
  border-radius: 1rem;
  min-height: 400px;
  display: flex;
  align-items: center;
`

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const ImageContainer = styled.div`
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`

const Title = styled.h2`
  @font-face {
    font-family: 'Dumb';
    src: url('/fonts/Dumb.ttf') format('truetype');
  }
  
  color: white;
  font-size: 4.3125rem;
  font-weight: bold;
  line-height: 1;
  font-family: 'Dumb', 'Comic Sans MS', cursive;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
`

const Description = styled.p`
  color: white;
  font-size: 1.25rem;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 500px;
`

const PlayButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #FF0000;
  color: white;
  padding: 0.75rem 2.5rem;
  border-radius: 0.25rem;
  font-size: 1.125rem;
  font-weight: 600;
  transition: transform 0.3s;
  text-transform: uppercase;

  &:hover {
    transform: scale(1.05);
  }
`

const KidsCorner = () => {
  return (
    <Container>
      <Content>
        <ImageContainer>
          <Image
            src="/images/mariofinal.png"
            alt="Mario Character"
            width={600}
            height={600}
            style={{ objectFit: 'contain' }}
            priority
          />
        </ImageContainer>
        <TextContent>
          <Title>Kid&apos;s Corner</Title>
          <Description>
            let your children join the fun. Explore a place with exciting games and the top winners stand a chance to win exciting monthly prizes!
          </Description>
          <PlayButton href="/kids-corner">
            PLAY GAMES
          </PlayButton>
        </TextContent>
      </Content>
    </Container>
  )
}

export default KidsCorner 