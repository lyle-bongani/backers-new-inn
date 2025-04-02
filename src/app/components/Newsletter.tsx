'use client'

import React, { useState } from 'react'
import styled from 'styled-components'

const Section = styled.section`
  padding: 2rem 1rem;
  margin: 8rem 3rem 4rem;
  background: #B69D74;
  position: relative;
  overflow: visible;
  background-image: url('/images/African Pattern 2.png');
  background-repeat: repeat;
  background-blend-mode: multiply;
  border-radius: 1rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #B69D74;
    opacity: 0.95;
    z-index: 1;
  }

  @media (max-width: 768px) {
    margin: 6rem 1rem 2rem;
    padding: 1.5rem 1rem;
  }
`

const Container = styled.div`
  max-width: 65rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  position: relative;
  z-index: 1;
  padding: 0 1rem;
  min-height: 14rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 0 0.5rem;
  }
`

const Content = styled.div`
  flex: 1;
  max-width: 450px;
  position: relative;
  z-index: 1;
`

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  line-height: 1.1;
`

const Form = styled.form`
  display: flex;
  gap: 0.75rem;
  width: 100%;
  max-width: 450px;
  background: rgba(255, 255, 255, 0.15);
  padding: 0.375rem;
  border-radius: 4px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Input = styled.input`
  flex: 1;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  background: transparent;
  color: white;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }

  &:focus {
    outline: none;
  }
`

const SubmitButton = styled.button`
  padding: 0.5rem 2rem;
  background: #27235C;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: background-color 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: #1c1a45;
  }
`

const ImageContainer = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%) scale(1.2);
  width: 40%;
  z-index: 3;

  @media (max-width: 768px) {
    display: none;
  }
`

const BreadImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-top: -4rem;
`

const Newsletter = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Email submitted:', email)
  }

  return (
    <Section>
      <Container>
        <Content>
          <Title>Get Notified About<br />Promotions We Offer</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <SubmitButton type="submit">SUBMIT</SubmitButton>
          </Form>
        </Content>
        <ImageContainer>
          <BreadImage 
            src="/images/bottom bread group.png" 
            alt="Bread packages group"
          />
        </ImageContainer>
      </Container>
    </Section>
  )
}

export default Newsletter