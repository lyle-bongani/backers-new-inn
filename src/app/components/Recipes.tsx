'use client'

import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { useState } from 'react'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem;
  text-align: center;
`

const Title = styled.h2`
  color: #2B1B58;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
`

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
  
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const RecipeCard = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`

const RecipeImage = styled(Image)`
  width: 100%;
  height: 250px;
  object-fit: cover;
`

const RecipeContent = styled.div`
  padding: 1.5rem;
  text-align: left;
`

const RecipeTitle = styled.h3`
  color: #2B1B58;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

const RecipeDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const Recipes = () => {
  const [activeTab, setActiveTab] = useState<'kids' | 'vegans' | 'family'>('kids');

  const filteredRecipes = recipeData.filter(recipe => recipe.category === activeTab);

  return (
    <Container>
      <Title>Baker&apos;s Recipes</Title>
      <TabContainer>
        <Tab 
          $active={activeTab === 'kids'} 
          onClick={() => setActiveTab('kids')}
        >
          For Kid&apos;s
        </Tab>
        <Tab 
          $active={activeTab === 'vegans'} 
          onClick={() => setActiveTab('vegans')}
        >
          For Vegans
        </Tab>
        <Tab 
          $active={activeTab === 'family'} 
          onClick={() => setActiveTab('family')}
        >
          For Family
        </Tab>
      </TabContainer>
      
      <RecipeGrid>
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
      </RecipeGrid>
    </Container>
  )
}

export default Recipes 