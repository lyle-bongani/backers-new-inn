'use client'

import Image from 'next/image'
import styled from 'styled-components'
import { useState } from 'react'
import FactoryTourModal from './FactoryTourModal'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const Title = styled.h2`
  color: #2B1B58;
  font-size: 2.75rem;
  font-weight: bold;
  line-height: 1.2;
`

const Description = styled.p`
  color: #2B1B58;
  font-size: 1.25rem;
  line-height: 1.6;
`

const BookButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #C19A5B;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s;
  width: fit-content;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #A88347;
  }
`

const ImageContainer = styled.div`
  position: relative;
  height: 400px;
  border-radius: 0.5rem;
  overflow: hidden;
`

const Factory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Container>
        <Content>
          <Title>Book A Factory Tour</Title>
          <Description>
            Keep on seeing how Baker&apos;s Inn products are made? Are you interested in a field trip day for your school&apos;s className? Get in touch with us to book a tour of our factory that is closest to you. Fill in the booking form and will get back to you.
          </Description>
          <BookButton onClick={() => setIsModalOpen(true)}>
            BOOK FACTORY TOUR
          </BookButton>
        </Content>
        
        <ImageContainer>
          <Image
            src="/images/factory bread.png"
            alt="Baker&apos;s Inn Factory Production Line"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </ImageContainer>
      </Container>
      <FactoryTourModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default Factory 