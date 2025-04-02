'use client'

import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { 
  Info,
  VerifiedUser,
  Timer,
  LocalDining
} from '@mui/icons-material'
import { motion } from 'framer-motion'

const KidsContainer = styled.div`
  min-height: 100vh;
  background: #FAFAFA;
  overflow: hidden;
`

const HeroSection = styled.div`
  position: relative;
  height: 70vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFE4E4;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`

const ContentSection = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
`

const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const GameCard = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 800;
  color: white;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.5rem;
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  color: white;
  position: relative;
  z-index: 2;
`

const Section = styled.section`
  padding: 4rem 0;
  background: white;
  margin-bottom: 2rem;
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

const ActivityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const ActivityCard = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
  }
`

const ActivityImage = styled.div`
  position: relative;
  height: 200px;
  background: #f5f5f5;
`

const ActivityContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
  
const ActivityTitle = styled.h3`
    font-size: 1.5rem;
    color: #2B1B58;
  margin-bottom: 1rem;
`

const ActivityDescription = styled.p`
    color: #666;
    line-height: 1.6;
  margin-bottom: 1rem;
`

const ProTip = styled.div`
  background: #F0F7FF;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #2B1B58;
  }
`

const AgeFilter = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
`

const AgeButton = styled.button<{ $active?: boolean }>`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${props => props.$active ? '#C19A5B' : '#E5E7EB'};
  border-radius: 2rem;
  background: ${props => props.$active ? '#C19A5B' : 'transparent'};
  color: ${props => props.$active ? 'white' : '#666'};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #C19A5B;
    transform: translateY(-2px);
  }
`

const ParentZone = styled.div`
  background: #FFF6E5;
  padding: 2rem;
  border-radius: 1rem;
  margin-top: 2rem;
`

const SafetyTip = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
  color: #666;

  svg {
    color: #C19A5B;
  }
`

const ActivityLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const KidsCornerPage = () => {
  const [activeAge, setActiveAge] = useState('all')

  const ageGroups = [
    { id: 'all', name: 'All Ages' },
    { id: '3-5', name: 'Ages 3-5' },
    { id: '6-9', name: 'Ages 6-9' },
    { id: '10+', name: 'Ages 10+' }
  ]

  const activities = [
    // Creative Play Zone
    {
      title: "Build a Cardboard City",
      description: "Transform cardboard boxes into a miniature city with buildings, roads, and parks.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
      proTip: "Use markers, stickers, and recycled materials to decorate your city.",
      ageGroup: "6-9",
      section: "creative"
    },
    {
      title: "DIY Board Game Creation",
      description: "Design your own board game using paper, markers, and household items.",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2070&auto=format&fit=crop",
      proTip: "Create unique game pieces using bottle caps or small toys.",
      ageGroup: "6-9",
      section: "creative"
    },
    // Outdoor Challenges
    {
      title: "Nature Scavenger Hunt",
      description: "Create a list of items to find in nature and explore your surroundings.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2070&auto=format&fit=crop",
      proTip: "Include items like leaves, rocks, and flowers of different colors.",
      ageGroup: "3-5",
      section: "outdoor"
    },
    {
      title: "Obstacle Course Challenge",
      description: "Set up an obstacle course using household items and garden equipment.",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2070&auto=format&fit=crop",
      proTip: "Use hula hoops, cones, and jump ropes for various challenges.",
      ageGroup: "6-9",
      section: "outdoor"
    },
    // Educational Games
    {
      title: "Math Treasure Hunt",
      description: "Solve math problems to find hidden clues around the house.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2070&auto=format&fit=crop",
      proTip: "Create different difficulty levels for various age groups.",
      ageGroup: "6-9",
      section: "educational"
    },
    {
      title: "Word Building Challenge",
      description: "Use letter cards or Scrabble tiles to create words and learn vocabulary.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
      proTip: "Start with simple words and gradually increase difficulty.",
      ageGroup: "6-9",
      section: "educational"
    },
    // Storytelling & Roleplay
    {
      title: "Adventure Story Creation",
      description: "Create an interactive story where kids make choices and shape the narrative.",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2070&auto=format&fit=crop",
      proTip: "Use props and costumes to make the story more engaging.",
      ageGroup: "6-9",
      section: "storytelling"
    },
    {
      title: "Pretend Play Restaurant",
      description: "Set up a pretend restaurant with menus, play food, and role-playing.",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2070&auto=format&fit=crop",
      proTip: "Create a simple menu and let kids take turns being chef and customer.",
      ageGroup: "3-5",
      section: "storytelling"
    },
    // Craft & Recycling Projects
    {
      title: "Recycled Art Creation",
      description: "Create artwork using recycled materials like paper, plastic, and cardboard.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2070&auto=format&fit=crop",
      proTip: "Collect materials throughout the week for a weekend art project.",
      ageGroup: "6-9",
      section: "craft"
    },
    {
      title: "DIY Musical Instruments",
      description: "Make musical instruments from household items and create a family band.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
      proTip: "Use rice in containers for shakers and rubber bands for string instruments.",
      ageGroup: "6-9",
      section: "craft"
    },
    // Family Baking Competitions
    {
      title: "Creative Sandwich Challenge",
      description: "Create the most imaginative sandwich using various ingredients.",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2070&auto=format&fit=crop",
      proTip: "Use cookie cutters to create fun shapes.",
      ageGroup: "6-9",
      section: "baking"
    },
    {
      title: "Cookie Decorating Contest",
      description: "Decorate cookies with icing, sprinkles, and other toppings.",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2070&auto=format&fit=crop",
      proTip: "Create different themes for each round of decoration.",
      ageGroup: "3-5",
      section: "baking"
    }
  ]

  const filteredActivities = activeAge === 'all'
    ? activities
    : activities.filter(activity => activity.ageGroup === activeAge)

  return (
    <KidsContainer>
      <HeroSection>
        <Image
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
          alt="Kids Corner"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <Container>
          <Title>Welcome to Kids Corner!</Title>
          <Subtitle>Fun activities and games for young bakers</Subtitle>
        </Container>
      </HeroSection>

      <ContentSection>
        <AgeFilter>
          {ageGroups.map(group => (
            <AgeButton
              key={group.id}
              $active={activeAge === group.id}
              onClick={() => setActiveAge(group.id)}
            >
              {group.name}
            </AgeButton>
          ))}
        </AgeFilter>

        <ActivityGrid>
          {filteredActivities.map((activity, index) => (
            <ActivityLink href={`/kids-corner/${activity.section}/${activity.title.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
              <ActivityCard>
              <ActivityImage>
                <Image
                  src={activity.image}
                    alt={activity.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </ActivityImage>
                <ActivityContent>
                  <ActivityTitle>{activity.title}</ActivityTitle>
                  <ActivityDescription>{activity.description}</ActivityDescription>
                  <ProTip>
                    <Info />
                    {activity.proTip}
                  </ProTip>
                </ActivityContent>
            </ActivityCard>
            </ActivityLink>
          ))}
        </ActivityGrid>
      </ContentSection>

      <ParentZone>
        <SectionTitle>
          <Info /> Parent&apos;s Corner
        </SectionTitle>
        <SafetyTip>
          <VerifiedUser /> Always supervise children during activities
        </SafetyTip>
        <SafetyTip>
          <Timer /> Set reasonable time limits for online games
        </SafetyTip>
        <SafetyTip>
          <LocalDining /> Ensure proper hand washing before baking activities
        </SafetyTip>
      </ParentZone>
    </KidsContainer>
  )
}

export default KidsCornerPage 