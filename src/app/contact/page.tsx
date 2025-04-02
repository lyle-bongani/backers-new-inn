'use client'

import styled from 'styled-components'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Phone,
  WhatsApp,
  Email,
  AccessTime,
  Business,
  ShoppingCart,
  LocationOn,
  Send,
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Help,
  Work,
  Newspaper,
  VolunteerActivism,
  CheckCircle,
  ArrowForward,
  YouTube
} from '@mui/icons-material'

const ContactContainer = styled.div`
  min-height: 100vh;
  background: #FAFAFA;
`

const HeroSection = styled.div`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  overflow: hidden;
`

const ContactContent = styled.div`
  max-width: 1200px;
  margin: -100px auto 4rem;
  padding: 0 2rem;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

const ContactForm = styled.form`
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 600px;
  overflow-y: auto;
`

const Container = styled.div`
  width: 95%;
  max-width: 95%;
  margin: 0 auto;
  padding: 0;
  position: relative;
  z-index: 2;
`

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 800;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
  line-height: 1.6;
`

const Section = styled.section`
  padding: 4rem 0;
  background: white;
  margin-bottom: 2rem;
  width: 100%;
`

const SectionContent = styled.div`
  width: 95%;
  max-width: 95%;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #2B1B58;
  text-align: center;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    color: #C19A5B;
  }
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const ContactCard = styled.div<{ $bgImage?: string }>`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 150px;
    background-image: ${props => props.$bgImage ? `url(${props.$bgImage})` : 'none'};
    background-size: cover;
    background-position: center;
    opacity: 0.1;
  }

  &:hover {
    transform: translateY(-5px);
  }
`

const CardTitle = styled.h3`
  font-size: 1.5rem;
    color: #2B1B58;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #C19A5B;
  }
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.2rem;
  color: #666;
  font-size: 1.1rem;

  svg {
    color: #2B1B58;
    font-size: 1.4rem;
  }
`

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #C19A5B;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: #A88347;
    transform: translateY(-2px);
  }
`

const FormGroup = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #2B1B58;
    font-weight: 500;
    font-size: 1.1rem;
  }

  input, textarea, select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: #FAF7F2;

    &:focus {
      outline: none;
      border-color: #C19A5B;
      box-shadow: 0 0 0 2px rgba(193, 154, 91, 0.1);
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1.5rem 0;
  color: #666;
`

const SubmitButton = styled.button`
  background: #C19A5B;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;

  &:hover {
    background: #A88347;
    transform: translateY(-2px);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
`

const SocialLink = styled(Link)`
  color: #2B1B58;
  font-size: 1.8rem;
  transition: all 0.3s ease;

  &:hover {
    color: #C19A5B;
    transform: translateY(-3px);
  }
`

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const FAQItem = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`

const ProcessStep = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #666;

  svg {
    color: #C19A5B;
  }
`

const MobileCallButton = styled.a`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #C19A5B;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  z-index: 1000;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: #A88347;
  }

  @media (min-width: 769px) {
    display: none;
  }
`

const MapFormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin: 2rem 0;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const MapSection = styled.div`
  height: 600px;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`

const MapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`

const ContactDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-bottom: 2rem;
  background: #FAF7F2;
  padding: 3rem;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2070&auto=format&fit=crop');
    background-size: cover;
    background-position: center;
    opacity: 0.1;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
  }
`

const ContactGroup = styled.div`
  h3 {
    color: #2B1B58;
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
    font-weight: 600;
  }
`

const ThreeColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setShowSuccess(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      consent: false
    })

    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <ContactContainer>
      <HeroSection>
        <Image
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
          alt="Contact Us"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <Container>
          <Title>Get in Touch</Title>
          <Subtitle>We&apos;d love to hear from you</Subtitle>
        </Container>
      </HeroSection>

      <ContactContent>
        <ContactDetails>
          <ContactGroup>
            <h3>Visit Us</h3>
            <ContactItem>
              <LocationOn />
              1 Shepperton Road, Graniteside, Harare
            </ContactItem>
            <ContactItem>
              <AccessTime />
              Mon-Fri: 8:00 AM - 5:00 PM
            </ContactItem>
          </ContactGroup>

          <ContactGroup>
            <h3>Call Us</h3>
            <ContactItem>
              <Phone />
              +263 242 751 481-5
            </ContactItem>
            <ContactItem>
              <WhatsApp />
              +263 772 132 364
            </ContactItem>
          </ContactGroup>

          <ContactGroup>
            <h3>Email Us</h3>
            <ContactItem>
              <Email />
              info@bakersinnzim.com
            </ContactItem>
            <ContactItem>
              <Business />
              sales@bakersinnzim.com
            </ContactItem>
          </ContactGroup>
        </ContactDetails>

        <MapFormContainer>
          <MapSection>
            <MapIframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.772508808757!2d31.0448!3d-17.8277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e0c1f3c0a1%3A0x1f3c0a1f3c0a1f3c!2sBaker%27s%20Inn!5e0!3m2!1sen!2szw!4v1625760000000!5m2!1sen!2szw"
              title="Baker's Inn Location"
            />
          </MapSection>

          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="subject">Subject*</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="product-feedback">Product Feedback</option>
                <option value="complaint">Complaint</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
            </FormGroup>

            <FormGroup>
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <CheckboxGroup>
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
              />
              <label htmlFor="consent">I agree to the privacy policy and terms of service*</label>
            </CheckboxGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send />
            </SubmitButton>
          </ContactForm>
        </MapFormContainer>

        <SocialLinks>
          <SocialLink href="https://facebook.com/bakersinn" target="_blank">
            <Facebook />
          </SocialLink>
          <SocialLink href="https://instagram.com/bakersinn" target="_blank">
            <Instagram />
          </SocialLink>
          <SocialLink href="https://twitter.com/bakersinn" target="_blank">
            <Twitter />
          </SocialLink>
          <SocialLink href="https://linkedin.com/company/bakersinn" target="_blank">
            <LinkedIn />
          </SocialLink>
        </SocialLinks>
      </ContactContent>
      <MobileCallButton href="tel:+263242751481">
        <Phone />
      </MobileCallButton>
    </ContactContainer>
  )
}

export default ContactPage 