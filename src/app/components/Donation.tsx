'use client'

import Image from 'next/image'
import styled from 'styled-components'
import { useState } from 'react'
import DonationRequestModal from './DonationRequestModal'

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

const ImageContainer = styled.div`
  position: relative;
  height: 400px;
  border-radius: 0.5rem;
  overflow: hidden;
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

const DonateButton = styled.button`
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

const Donation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Container>
        <ImageContainer>
          <Image
            src="/images/donate .png"
            alt="Baker's Inn Donation Event"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </ImageContainer>
        <Content>
          <Title>Request A Donation</Title>
          <Description>
            If you are holding an event that you wish to have us donate to we&apos;re more than glad to help. Fill in the donation form for us to best understand how we can increase your event&apos;s impact in the local community.
          </Description>
          <p>Every donation helps us reach more communities and make a difference in people&apos;s lives</p>
          <DonateButton onClick={() => setIsModalOpen(true)}>
            REQUEST DONATION
          </DonateButton>
        </Content>
      </Container>
      <DonationRequestModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default Donation 