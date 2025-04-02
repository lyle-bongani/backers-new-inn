'use client'

import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { 
  AccessTime as AccessTimeIcon,
  Restaurant as RestaurantIcon,
  ArrowBack as ArrowBackIcon,
  Print as PrintIcon,
  Share as ShareIcon,
  Favorite as FavoriteIcon
} from '@mui/icons-material'

// Import icons individually to fix barrel optimization issues
import PeopleIcon from '@mui/icons-material/People'
import SetMealIcon from '@mui/icons-material/SetMeal'
import ListAltIcon from '@mui/icons-material/ListAlt'
import HomeIcon from '@mui/icons-material/Home'

// Reuse all styled components from shwarma page
const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
  background: #FAFAFA;
  position: relative;
`

const HeroSection = styled.div`
  position: relative;
  height: 60vh;
  min-height: 500px;
  width: 100%;
  background: #2B1B58;
  overflow: hidden;
`

const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30%;
    background: linear-gradient(to bottom, transparent, #2B1B58);
  }
`

const ButtonGroup = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  display: flex;
  gap: 1rem;
  z-index: 10;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const NavButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 2rem;
  transition: all 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateX(-5px);
  }
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: -200px auto 4rem;
  padding: 0 2rem;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    margin-top: -150px;
    padding: 0 1rem;
  }
`

const RecipeHeader = styled.div`
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`

const Title = styled.h1`
  color: #2B1B58;
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Description = styled.p`
  color: #666666;
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  background: #FAF7F2;
  padding: 1.5rem;
  border-radius: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`

const StatIcon = styled.div`
  color: white;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #C19A5B;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(193, 154, 91, 0.3);

  svg {
    font-size: 1.75rem;
  }
`

const StatInfo = styled.div`
  flex: 1;
`

const StatLabel = styled.div`
  color: #666666;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`

const StatValue = styled.div`
  color: #2B1B58;
  font-weight: 700;
  font-size: 1.25rem;
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

const Section = styled.div`
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`

const SectionTitle = styled.h2`
  color: #2B1B58;
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    color: #C19A5B;
  }
`

const IngredientsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const IngredientItem = styled.div`
  color: #2B1B58;
  font-size: 1.125rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #FAF7F2;
  border-radius: 1rem;
  transition: all 0.3s;

  &:hover {
    transform: translateX(10px);
    background: #f0e9e0;
  }

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: #C19A5B;
    border-radius: 50%;
  }
`

const StepsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const StepItem = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: #FAF7F2;
  border-radius: 1rem;
  transition: all 0.3s;

  &:hover {
    transform: translateX(10px);
    background: #f0e9e0;
  }
`

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  background: #C19A5B;
  color: white;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.5rem;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(193, 154, 91, 0.3);
`

const StepContent = styled.div`
  flex: 1;
`

const StepTitle = styled.h3`
  color: #2B1B58;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`

const StepDescription = styled.p`
  color: #666666;
  font-size: 1.125rem;
  line-height: 1.6;
`

const ActionButtons = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 100;
`

const ActionButton = styled.button`
  background: #C19A5B;
  color: white;
  border: none;
  border-radius: 1rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;

  &:hover {
    background: #A88347;
    transform: translateX(-5px);
  }

  svg {
    font-size: 1.5rem;
  }
`

const SalmonStripsPage = () => {
  const [imageError, setImageError] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Salmon Strips Recipe',
        text: 'Check out this delicious Salmon Strips recipe!',
        url: window.location.href,
      });
    }
  };

  return (
    <Container>
      <HeroSection>
        <HeroImage>
          <Image
            src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2070&auto=format&fit=crop"
            alt="Salmon Strips"
            fill
            style={{ objectFit: 'cover' }}
            priority
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            onError={(e) => {
              console.error('Image failed to load:', e);
              setImageError(true);
            }}
          />
          {imageError && (
            <div style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0, 
              background: '#2B1B58',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.5rem'
            }}>
              Image not available
            </div>
          )}
        </HeroImage>
        <ButtonGroup>
          <NavButton href="/">
            <HomeIcon /> Back to Home
          </NavButton>
          <NavButton href="/recipes">
            <ArrowBackIcon /> Back to Recipes
          </NavButton>
        </ButtonGroup>
      </HeroSection>

      <ContentWrapper>
        <RecipeHeader>
          <Title>Crispy Salmon Strips</Title>
          <Description>
            A delicious and healthy recipe using Baker&apos;s Inn bread
          </Description>
          <Stats>
            <StatItem>
              <StatIcon>
                <AccessTimeIcon />
              </StatIcon>
              <StatInfo>
                <StatLabel>Prep Time</StatLabel>
                <StatValue>20 Minutes</StatValue>
              </StatInfo>
            </StatItem>
            <StatItem>
              <StatIcon>
                <PeopleIcon />
              </StatIcon>
              <StatInfo>
                <StatLabel>Serves</StatLabel>
                <StatValue>6 people</StatValue>
              </StatInfo>
            </StatItem>
            <StatItem>
              <StatIcon>
                <SetMealIcon />
              </StatIcon>
              <StatInfo>
                <StatLabel>Category</StatLabel>
                <StatValue>Family Meal</StatValue>
              </StatInfo>
            </StatItem>
          </Stats>
        </RecipeHeader>

        <ContentGrid>
          <Section>
            <SectionTitle>
              <ListAltIcon /> Ingredients
            </SectionTitle>
            <IngredientsList>
              <IngredientItem>4 slices Baker&apos;s Inn bread</IngredientItem>
              <IngredientItem>500g fresh salmon</IngredientItem>
              <IngredientItem>2 eggs</IngredientItem>
              <IngredientItem>1 cup breadcrumbs</IngredientItem>
              <IngredientItem>Salt and pepper to taste</IngredientItem>
            </IngredientsList>
          </Section>

          <Section>
            <SectionTitle>
              <RestaurantIcon /> Directions
            </SectionTitle>
            <StepsList>
              <StepItem>
                <StepNumber>1</StepNumber>
                <StepContent>
                  <StepTitle>Cut the salmon into strips</StepTitle>
                  <StepDescription>
                    Cut the fresh salmon fillet into even strips, about 1 inch wide and 4 inches long.
                  </StepDescription>
                </StepContent>
              </StepItem>
              <StepItem>
                <StepNumber>2</StepNumber>
                <StepContent>
                  <StepTitle>Prepare the coating</StepTitle>
                  <StepDescription>
                    Beat the eggs in a shallow dish. In another dish, mix breadcrumbs with salt and pepper.
                  </StepDescription>
                </StepContent>
              </StepItem>
              <StepItem>
                <StepNumber>3</StepNumber>
                <StepContent>
                  <StepTitle>Coat the salmon</StepTitle>
                  <StepDescription>
                    Dip each salmon strip in beaten eggs, then coat with seasoned breadcrumbs.
                  </StepDescription>
                </StepContent>
              </StepItem>
              <StepItem>
                <StepNumber>4</StepNumber>
                <StepContent>
                  <StepTitle>Cook to perfection</StepTitle>
                  <StepDescription>
                    Heat oil in a pan over medium heat. Cook the strips for 2-3 minutes on each side until golden brown.
                  </StepDescription>
                </StepContent>
              </StepItem>
              <StepItem>
                <StepNumber>5</StepNumber>
                <StepContent>
                  <StepTitle>Serve and enjoy</StepTitle>
                  <StepDescription>
                    Serve hot with your favorite dipping sauce and Baker&apos;s Inn bread on the side.
                  </StepDescription>
                </StepContent>
              </StepItem>
            </StepsList>
          </Section>
        </ContentGrid>
      </ContentWrapper>

      <ActionButtons>
        <ActionButton onClick={() => {}} title="Save Recipe">
          <FavoriteIcon />
        </ActionButton>
        <ActionButton onClick={handleShare} title="Share Recipe">
          <ShareIcon />
        </ActionButton>
        <ActionButton onClick={handlePrint} title="Print Recipe">
          <PrintIcon />
        </ActionButton>
      </ActionButtons>
    </Container>
  )
}

export default SalmonStripsPage 