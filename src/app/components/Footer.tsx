'use client'

import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const FooterWrapper = styled.footer`
  background: #27235C;
  color: white;
  padding: 4rem 0 0;
`

const LogoDivider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  
  &::before, &::after {
    content: '';
    height: 1px;
    background: #B69D74;
    flex: 1;
    margin: 0 2rem;
  }
`

const LogoImage = styled.img`
  width: 120px;
  height: auto;
`

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

const Section = styled.div`
  h3 {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
`

const InstagramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`

const InstagramImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`

const ContactInfo = styled.div`
  p {
    margin-bottom: 0.5rem;
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 1.2rem;
      color: #B69D74;
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`

const SitemapLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #B69D74;
    }
  }
`

const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`

const SubsidiaryLogo = styled.img`
  height: 40px;
  width: auto;
  filter: brightness(0) invert(1);
`

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;

  a {
    color: #B69D74;
    text-decoration: none;
  }
`

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: #B69D74;
    transition: opacity 0.2s;
    
    &:hover {
      opacity: 0.8;
    }

    svg {
      font-size: 1.5rem;
    }
  }
`

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <LogoDivider>
        <LogoImage src="/images/footer logo.png" alt="Baker's Inn Logo" />
      </LogoDivider>
      
      <MainContent>
        <Section>
          <h3>Instagram Feed</h3>
          <InstagramGrid>
            <InstagramImage src="/images/instafeed.png" alt="Instagram post - Food platter" />
            <InstagramImage src="/images/insta feed.png" alt="Instagram post - Sandwich" />
            <InstagramImage src="/images/plate.png" alt="Instagram post - Food" />
          </InstagramGrid>
          <SocialIcons>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
          </SocialIcons>
        </Section>

        <Section>
          <h3>Our Location</h3>
          <ContactInfo>
            <p>
              <LocationOnIcon />
              1 Sheperton Road,
            </p>
            <p>Graniteside,</p>
            <p>Harare,</p>
            <p>Zimbabwe.</p>
          </ContactInfo>
        </Section>

        <Section>
          <h3>Get In Touch With Us</h3>
          <ContactInfo>
            <p>
              <PhoneIcon />
              08080151
            </p>
            <p>08080152</p>
            <p>+263 242 751 481</p>
            <p>+263 242 710 334</p>
            <p>
              <EmailIcon />
              marketing@bakersinnzim.com
            </p>
          </ContactInfo>
        </Section>

        <Section>
          <h3>Sitemap</h3>
          <SitemapLinks>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/recipes">Recipes</Link>
            <Link href="/kids">Kid&apos;s Corner</Link>
          </SitemapLinks>
        </Section>
      </MainContent>

      <BottomBar>
        <SubsidiaryLogo src="/images/inscor_logo@2x 1.png" alt="Subsidiary of Innscor" />
        <Copyright>
          Copyright © 2022 Bakers Inn. All rights reserved. Site by{' '}
          <a href="https://bryanvengwa.com" target="_blank" rel="noopener noreferrer">
            Bryan Vengwa
          </a>
        </Copyright>
      </BottomBar>
    </FooterWrapper>
  )
}

export default Footer
