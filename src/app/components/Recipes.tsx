'use client'

import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { useState } from 'react'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`

const Title = styled.h2`
  color: #2B1B58;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
`

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #E5E7EB;
  }
`

interface TabProps {
  $active?: boolean;
}

const Tab = styled.button<TabProps>`
  color: ${(props: TabProps) => props.$active ? '#2B1B58' : '#A1A1AA'};
  font-size: 1.25rem;
  font-weight: ${(props: TabProps) => props.$active ? '600' : '500'};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  position: relative;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 0.75rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${(props: TabProps) => props.$active ? '#C19A5B' : 'transparent'};
    z-index: 1;
  }
`

const RecipeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
`

const RecipeCard = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 300px;
    margin: 0 auto;
  }

  &:hover {
    transform: translateY(-5px);
  }
`

const RecipeImage = styled(Image)`
  width: 100%;
  height: 250px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 180px;
  }
`

const RecipeContent = styled.div`
  padding: 1.5rem;
  text-align: left;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`

const RecipeTitle = styled.h3`
  color: #2B1B58;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
`

const RecipeDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`

const RecipeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const InfoText = styled.div`
  color: #666666;
  font-size: 0.875rem;

  span {
    color: #C19A5B;
  }
`

const ViewRecipeButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #C19A5B;
  color: white;
  border-radius: 50%;
  transition: background-color 0.3s;

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }

  &:hover {
    background-color: #A88347;
  }
`

type Recipe = {
  id: number;
  title: string;
  image: string;
  prepTime: string;
  serves: string;
  category: 'kids' | 'vegans' | 'family';
}

const recipeData: Recipe[] = [
  {
    id: 1,
    title: "Shwarma Sandwich",
    image: "/images/shwarma.png",
    prepTime: "5 min",
    serves: "6 people",
    category: "kids"
  },
  {
    id: 2,
    title: "Shwarma Sandwich",
    image: "/images/shwarma.png",
    prepTime: "5 min",
    serves: "6 people",
    category: "kids"
  },
  {
    id: 3,
    title: "Shwarma Sandwich",
    image: "/images/shwarma.png",
    prepTime: "5 min",
    serves: "6 people",
    category: "kids"
  },
  {
    id: 4,
    title: "Sweet Shortbread",
    image: "/images/shortbread.png",
    prepTime: "20 min",
    serves: "6 people",
    category: "vegans"
  },
  {
    id: 5,
    title: "Sweet Shortbread",
    image: "/images/shortbread.png",
    prepTime: "20 min",
    serves: "6 people",
    category: "vegans"
  },
  {
    id: 6,
    title: "Sweet Shortbread",
    image: "/images/shortbread.png",
    prepTime: "20 min",
    serves: "6 people",
    category: "vegans"
  },
  {
    id: 7,
    title: "Salmon Strips",
    image: "/images/salmon.png",
    prepTime: "20 min",
    serves: "6 people",
    category: "family"
  },
  {
    id: 8,
    title: "Salmon Strips",
    image: "/images/salmon.png",
    prepTime: "20 min",
    serves: "6 people",
    category: "family"
  },
  {
    id: 9,
    title: "Salmon Strips",
    image: "/images/salmon.png",
    prepTime: "20 min",
    serves: "6 people",
    category: "family"
  }
];

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  overflow: hidden;
  margin: 2rem 0;
  padding: 0 1rem;

  @media (min-width: 769px) {
    display: none;
  }
`

const CarouselTrack = styled.div<{ $translateX: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${props => props.$translateX}%);
  width: 100%;
`

const CarouselCard = styled.div`
  flex: 0 0 100%;
  padding: 0 0.5rem;
`

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  border: 1px solid #E5E7EB;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }

  &:hover {
    background: #F9FAFB;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.prev {
    left: 0;
  }

  &.next {
    right: 0;
  }
`

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`

const Dot = styled.button<{ $active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.$active ? '#C19A5B' : '#E5E7EB'};
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background-color 0.3s;

  &:hover {
    background: ${props => props.$active ? '#C19A5B' : '#D1D5DB'};
  }
`

const DesktopGrid = styled.div`
  display: none;
  width: 100%;

  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 2rem;
  }
`

const Recipes = () => {
  const [activeTab, setActiveTab] = useState<'kids' | 'vegans' | 'family'>('kids');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const filteredRecipes = recipeData.filter(recipe => recipe.category === activeTab);
  const totalSlides = filteredRecipes.length;
  const translateX = -currentSlide * 100;

  // Calculate which dot should be active based on current slide
  const getActiveDotIndex = () => {
    if (currentSlide === 0) return 0;
    if (currentSlide === totalSlides - 1) return 2;
    return 1;
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
    } else if (hasMore) {
      loadMoreRecipes();
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const loadMoreRecipes = async () => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    try {
      // Simulate loading more recipes
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Add more recipes to the data
      const newRecipes = recipeData.map(recipe => ({
        ...recipe,
        id: recipe.id + recipeData.length
      }));
      
      recipeData.push(...newRecipes);
      setHasMore(recipeData.length < 30); // Limit to 30 recipes
    } catch (error) {
      console.error('Error loading more recipes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const goToSlide = (dotIndex: number) => {
    if (dotIndex === 0) {
      setCurrentSlide(0);
    } else if (dotIndex === 1) {
      setCurrentSlide(Math.floor(totalSlides / 2));
    } else {
      setCurrentSlide(totalSlides - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight * 1.5 && hasMore) {
      loadMoreRecipes();
    }
  };

  return (
    <Container>
      <Title>Baker&apos;s Recipes</Title>
      <TabContainer>
        <Tab 
          $active={activeTab === 'kids'} 
          onClick={() => {
            setActiveTab('kids');
            setCurrentSlide(0);
          }}
        >
          For Kid&apos;s
        </Tab>
        <Tab 
          $active={activeTab === 'vegans'} 
          onClick={() => {
            setActiveTab('vegans');
            setCurrentSlide(0);
          }}
        >
          For Vegans
        </Tab>
        <Tab 
          $active={activeTab === 'family'} 
          onClick={() => {
            setActiveTab('family');
            setCurrentSlide(0);
          }}
        >
          For Family
        </Tab>
      </TabContainer>
      
      {/* Mobile Carousel */}
      <CarouselContainer>
        <CarouselTrack 
          $translateX={translateX}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {filteredRecipes.map((recipe, index) => (
            <CarouselCard key={recipe.id}>
              <RecipeCard>
                <RecipeImage
                  src={recipe.image}
                  alt={recipe.title}
                  width={400}
                  height={250}
                  priority={index === 0}
                />
                <RecipeContent>
                  <RecipeTitle>{recipe.title}</RecipeTitle>
                  <RecipeDetails>
                    <RecipeInfo>
                      <InfoText>Prep Time: <span>{recipe.prepTime}</span></InfoText>
                      <InfoText>Serves: <span>{recipe.serves}</span></InfoText>
                    </RecipeInfo>
                    <ViewRecipeButton href={`/recipes/${recipe.title.toLowerCase().replace(/ /g, '-')}`}>
                      →
                    </ViewRecipeButton>
                  </RecipeDetails>
                </RecipeContent>
              </RecipeCard>
            </CarouselCard>
          ))}
        </CarouselTrack>
        <CarouselButton 
          className="prev" 
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          ←
        </CarouselButton>
        <CarouselButton 
          className="next" 
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1 && !hasMore}
        >
          →
        </CarouselButton>
        <CarouselDots>
          {[0, 1, 2].map((index) => (
            <Dot
              key={index}
              $active={getActiveDotIndex() === index}
              onClick={() => goToSlide(index)}
            />
          ))}
        </CarouselDots>
      </CarouselContainer>

      {/* Desktop Grid with Infinite Scroll */}
      <DesktopGrid onScroll={handleScroll}>
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard key={recipe.id}>
            <RecipeImage
              src={recipe.image}
              alt={recipe.title}
              width={400}
              height={250}
              priority={index === 0}
            />
            <RecipeContent>
              <RecipeTitle>{recipe.title}</RecipeTitle>
              <RecipeDetails>
                <RecipeInfo>
                  <InfoText>Prep Time: <span>{recipe.prepTime}</span></InfoText>
                  <InfoText>Serves: <span>{recipe.serves}</span></InfoText>
                </RecipeInfo>
                <ViewRecipeButton href={`/recipes/${recipe.title.toLowerCase().replace(/ /g, '-')}`}>
                  →
                </ViewRecipeButton>
              </RecipeDetails>
            </RecipeContent>
          </RecipeCard>
        ))}
        {isLoading && <div>Loading more recipes...</div>}
      </DesktopGrid>
    </Container>
  )
}

export default Recipes 