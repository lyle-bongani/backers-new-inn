'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { 
  Grain,
  Favorite,
  Star,
  LocalFlorist,
  Groups,
  Recycling
} from '@mui/icons-material'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Timeline, 
  MapIcon,
  TruckIcon,
  CertificateIcon
} from './Icons'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const AboutContainer = styled.div`
  overflow: hidden;
`

const HeroSection = styled.div`
  position: relative;
  height: 90vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  overflow: hidden;
`

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(43, 27, 88, 0.85), rgba(43, 27, 88, 0.75));
  z-index: 1;
`

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`

const Title = styled(motion.h1)`
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`

const Subtitle = styled(motion.p)`
  font-size: 2rem;
  opacity: 0.9;
  line-height: 1.6;
  margin: 0 auto;
  max-width: 700px;
  font-weight: 300;
`

const Section = styled.section<{ $alternate?: boolean }>`
  padding: 8rem 0;
  background-color: ${props => props.$alternate ? '#F8F9FA' : 'white'};
  position: relative;
  overflow: hidden;
`

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

const SectionTitle = styled(motion.h2)`
  font-size: 3.5rem;
  color: #2B1B58;
  margin-bottom: 2rem;
  text-align: center;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const SectionSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #4A5568;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  line-height: 1.6;
`

const TimelineSection = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 2px;
    background: #E2E8F0;
  }
`

const TimelineItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  
  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    margin-bottom: 3rem;

    &:nth-child(even) {
      flex-direction: column;
    }
  }
`

const TimelineContent = styled.div`
  width: 45%;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);

  h3 {
    color: #2B1B58;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: #4A5568;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 1rem 0;
  }
`

const TimelineDot = styled.div`
  width: 20px;
  height: 20px;
  background: #C19A5B;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ValueCard = styled(motion.div)`
  background: white;
  padding: 3rem 2rem;
  border-radius: 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  svg {
    width: 60px;
    height: 60px;
    margin: 0 auto 1.5rem;
    color: #C19A5B;
  }

  h3 {
    color: #2B1B58;
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  p {
    color: #4A5568;
    line-height: 1.7;
    font-size: 1.125rem;
  }
`

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled(motion.div)`
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);

  .image-container {
    position: relative;
    height: 250px;
    background: #f3f4f6;
  }

  .content {
    padding: 2rem;

    h3 {
      font-size: 1.5rem;
      color: #2B1B58;
      margin-bottom: 1rem;
    }

    p {
      color: #4A5568;
      line-height: 1.6;
    }
  }
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: 4rem 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);

  h3 {
    font-size: 3rem;
    color: #C19A5B;
    margin-bottom: 0.5rem;
  }

  p {
    color: #4A5568;
    font-size: 1.125rem;
    font-weight: 500;
  }
`

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const TeamMember = styled(motion.div)`
  text-align: center;

  .image-container {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 0 auto 1.5rem;
    border-radius: 50%;
    overflow: hidden;
  }

  h3 {
    color: #2B1B58;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #4A5568;
    font-size: 1.125rem;
  }
`

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const TestimonialCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);

  p {
    color: #4A5568;
    font-size: 1.125rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  .author {
    display: flex;
    align-items: center;
    gap: 1rem;

    .image {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
    }

    .info {
      h4 {
        color: #2B1B58;
        font-size: 1.125rem;
        margin-bottom: 0.25rem;
      }

      span {
        color: #718096;
        font-size: 0.875rem;
      }
    }
  }
`

const AboutPage = () => {
  return (
    <AboutContainer>
      <HeroSection>
        <HeroBackground />
        <Image
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
          alt="Baker&apos;s Inn Hero"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <HeroContent>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Story
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Baking Zimbabwe&apos;s finest bread since 1982
          </Subtitle>
        </HeroContent>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Mission
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            To provide Zimbabwe with the freshest, highest quality bread while supporting our local communities
          </SectionSubtitle>

          <ValuesGrid>
            <ValueCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Grain />
              <h3>Quality Ingredients</h3>
              <p>We use only the finest ingredients, carefully selected for their quality and taste.</p>
            </ValueCard>

            <ValueCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Favorite />
              <h3>Customer Satisfaction</h3>
              <p>Your happiness is our top priority, and we&apos;re committed to exceeding your expectations.</p>
            </ValueCard>

            <ValueCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Star />
              <h3>Excellence</h3>
              <p>We strive for excellence in every aspect of our business, from product quality to service.</p>
            </ValueCard>
          </ValuesGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Journey
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A timeline of our growth and achievements
          </SectionSubtitle>

          <TimelineSection>
            <TimelineItem>
              <TimelineContent>
                <h3>1982</h3>
                <p>Baker's Inn was founded with a vision to provide quality bread to Zimbabwe.</p>
              </TimelineContent>
              <TimelineDot />
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <h3>1995</h3>
                <p>Expanded operations to multiple locations across Zimbabwe.</p>
              </TimelineContent>
              <TimelineDot />
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <h3>2005</h3>
                <p>Introduced new product lines and modernized our baking facilities.</p>
              </TimelineContent>
              <TimelineDot />
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <h3>2015</h3>
                <p>Launched our sustainability initiatives and community support programs.</p>
              </TimelineContent>
              <TimelineDot />
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <h3>2020</h3>
                <p>Became Zimbabwe's leading bakery with nationwide distribution.</p>
              </TimelineContent>
              <TimelineDot />
            </TimelineItem>
          </TimelineSection>
        </Container>
      </Section>

      <Section $alternate>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Impact
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Making a difference in Zimbabwe&apos;s communities
          </SectionSubtitle>

          <ValuesGrid>
            <ValueCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <LocalFlorist />
              <h3>Sustainability</h3>
              <p>We&apos;re committed to sustainable practices and reducing our environmental impact.</p>
            </ValueCard>

            <ValueCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Groups />
              <h3>Community</h3>
              <p>We believe in building strong relationships with our community and supporting local initiatives.</p>
            </ValueCard>

            <ValueCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Recycling />
              <h3>Innovation</h3>
              <p>We continuously innovate to bring you the best products and experiences.</p>
            </ValueCard>
          </ValuesGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            The Baker&apos;s Inn Family
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Meet the passionate people behind your daily bread
          </SectionSubtitle>

          <TeamGrid>
            <TeamMember
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="image-container">
                <Image
                  src="https://images.unsplash.com/photo-1595475207225-428b62bda831?q=80&w=2000&auto=format&fit=crop"
                  alt="Head Baker"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3>John Moyo</h3>
              <p>Head Baker</p>
            </TeamMember>
            <TeamMember
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="image-container">
                <Image
                  src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1974&auto=format&fit=crop"
                  alt="Quality Manager"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3>Sarah Ndlovu</h3>
              <p>Quality Manager</p>
            </TeamMember>
            <TeamMember
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="image-container">
                <Image
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2080&auto=format&fit=crop"
                  alt="Production Manager"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3>David Mutasa</h3>
              <p>Production Manager</p>
            </TeamMember>
            <TeamMember
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="image-container">
                <Image
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop"
                  alt="Innovation Chef"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3>Grace Chigumba</h3>
              <p>Innovation Chef</p>
            </TeamMember>
          </TeamGrid>
        </Container>
      </Section>

      <Section $alternate>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Customer Love
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What our community says about us
          </SectionSubtitle>

          <TestimonialGrid>
            <TestimonialCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p>&quot;Baker&apos;s Inn bread has been my family&apos;s daily bread for over 10 years. The quality never disappoints!&quot;</p>
              <div className="author">
                <div className="image">
                  <Image
                    src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop"
                    alt="Customer"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="info">
                  <h4>Maria Chikwanha</h4>
                  <span>Loyal Customer</span>
                </div>
              </div>
            </TestimonialCard>
            <TestimonialCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>&quot;As a restaurant owner, I trust Baker&apos;s Inn for consistent quality and reliable delivery. They&apos;re the best!&quot;</p>
              <div className="author">
                <div className="image">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
                    alt="Customer"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="info">
                  <h4>James Sibanda</h4>
                  <span>Restaurant Owner</span>
                </div>
              </div>
            </TestimonialCard>
            <TestimonialCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p>&quot;Their commitment to quality and community support makes them more than just a bakery - they&apos;re family!&quot;</p>
              <div className="author">
                <div className="image">
              <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop"
                    alt="Customer"
                fill
                style={{ objectFit: 'cover' }}
              />
                </div>
                <div className="info">
                  <h4>Ruth Makoni</h4>
                  <span>Community Leader</span>
                </div>
              </div>
            </TestimonialCard>
          </TestimonialGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Sustainability Promise
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building a better future for Zimbabwe
          </SectionSubtitle>

          <ValuesGrid>
            <ValueCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Recycling />
              <h3>Zero Waste by 2030</h3>
              <p>Committed to reducing our environmental impact through sustainable practices.</p>
            </ValueCard>
            <ValueCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <LocalFlorist />
              <h3>Eco-Friendly Packaging</h3>
              <p>Transitioning to biodegradable packaging solutions.</p>
            </ValueCard>
            <ValueCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Groups />
              <h3>Community Clean-up</h3>
              <p>Regular initiatives to keep our communities clean and green.</p>
            </ValueCard>
          </ValuesGrid>
        </Container>
      </Section>
    </AboutContainer>
  )
}

export default AboutPage 