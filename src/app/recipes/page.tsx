'use client'

import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { 
  AccessTime,
  People,
  Star,
  Fastfood,
  FamilyRestroom,
  EmojiEvents,
  Lightbulb,
  PlayArrow,
  NavigateBefore,
  NavigateNext,
  WhatsApp,
  Facebook,
  Instagram,
  ExpandMore,
  Close,
  Restaurant
} from '@mui/icons-material'
import { motion } from 'framer-motion'

// Import icons individually
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'
import FavoriteIcon from '@mui/icons-material/Favorite'

const RecipesContainer = styled.div`
  min-height: 100vh;
`

const HeroSection = styled.div`
  position: relative;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
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

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 2rem;
`

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const HeroSubtext = styled.p`
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`

const NavContainer = styled.div`
  position: relative;
  width: 100%;
  transition: all 0.3s ease;
`

const RecipeNav = styled.nav<{ $isSticky: boolean }>`
  background: white;
  padding: 1rem 0;
  position: ${props => props.$isSticky ? 'fixed' : 'relative'};
  top: ${props => props.$isSticky ? '0' : 'auto'};
  width: 100%;
  z-index: 90;
  box-shadow: ${props => props.$isSticky ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateZ(0);
  will-change: transform;
`

const RecipeNavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  overflow-x: auto;

  @media (max-width: 768px) {
    justify-content: start;
    padding: 0 1rem;
  }

  &::-webkit-scrollbar {
    height: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #C19A5B;
    border-radius: 3px;
  }
`

const RecipeNavLink = styled.a<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.$active ? '#C19A5B' : '#2B1B58'};
  text-decoration: none;
  font-weight: ${props => props.$active ? '600' : '500'};
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  white-space: nowrap;
  transition: all 0.3s;

  &:hover {
    color: #C19A5B;
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.25rem;
  }
`

const CarouselSection = styled.div`
  padding: 4rem 0;
  background: #FAF7F2;
`

const CarouselContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
`

const CarouselTitle = styled.h2`
  font-size: 2.5rem;
  color: #2B1B58;
  text-align: center;
  margin-bottom: 2rem;
`

const CarouselTrack = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
  transition: transform 0.5s ease;
  width: 100%;
`

const CarouselCard = styled.div`
  flex: 0 0 calc(33.333% - 1.33rem);
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);

  @media (max-width: 1024px) {
    flex: 0 0 calc(50% - 1rem);
  }

  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`

const CarouselImage = styled.div`
  position: relative;
  height: 250px;
  background: #f5f5f5;
`

const CarouselInfo = styled.div`
  padding: 1.5rem;
`

const CarouselNav = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  border: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  &:first-child {
    left: -20px;
  }

  &:last-child {
    right: -20px;
  }

  &:hover {
    background: #C19A5B;
    color: white;
  }
`

const RecipeStats = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  color: #666;
  font-size: 0.875rem;

  svg {
    font-size: 1rem;
    color: #C19A5B;
  }
`

const GetRecipeButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #C19A5B;
  color: white;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  margin-top: 1rem;
  transition: all 0.3s;

  &:hover {
    background: #A88347;
    transform: translateY(-2px);
  }
`

const TrendingSection = styled.div`
  padding: 4rem 0;
`

const TrendingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const TrendingCard = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`

const TrendingImage = styled.div`
  position: relative;
  height: 200px;
  background: #f5f5f5;
`

const TrendingInfo = styled.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.25rem;
    color: #2B1B58;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 0.875rem;
  margin-bottom: 1rem;
  }
`

const ReviewStats = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.875rem;

  svg {
    color: #FFB800;
  }
`

const RecipeOfDay = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const HighlightCard = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const HighlightImage = styled.div`
  position: relative;
  height: 400px;
  background: #f5f5f5;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`

const HighlightInfo = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 2rem;
    color: #2B1B58;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
  }
`

const Timer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #FFE4E4;
  color: #FF4B4B;
  border-radius: 2rem;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;

  svg {
  font-size: 1.25rem;
  }
`

const RecipeSection = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
`

const RecipeContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const IngredientsCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`

const IngredientsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    padding: 0.75rem 0;
    border-bottom: 1px solid #eee;
    color: #666;

    &:last-child {
      border-bottom: none;
    }

    &::before {
      content: '•';
      color: #C19A5B;
      font-size: 1.5rem;
      margin-right: 0.75rem;
    }
  }
`

const Instructions = styled.div`
  h3 {
    color: #2B1B58;
    margin-bottom: 1.5rem;
  }
`

const Step = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
`

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #C19A5B;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
`

const StepContent = styled.div`
  flex-grow: 1;

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`

const ProTip = styled.div`
  background: #F0F7FF;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    color: #2B1B58;
  }

  p {
    color: #2B1B58;
    font-size: 0.875rem;
    margin: 0;
  }
`

const VideoSection = styled.div`
  background: #FAF7F2;
  padding: 4rem 0;
`

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
`

const VideoCard = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`

const VideoThumbnail = styled.div`
  position: relative;
  height: 200px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`

const PlayButton = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  
  svg {
    color: #C19A5B;
    font-size: 2rem;
  }
`

const VideoInfo = styled.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.25rem;
    color: #2B1B58;
    margin-bottom: 0.5rem;
  }
`

const VideoDuration = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.875rem;

  svg {
    font-size: 1rem;
  }
`

const VideoModal = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const VideoFrame = styled.div`
  position: relative;
  width: 90%;
  max-width: 800px;
  aspect-ratio: 16/9;
  background: black;
  border-radius: 0.5rem;
  overflow: hidden;
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  color: #2B1B58;
  transition: all 0.3s;

  &:hover {
    background: #C19A5B;
    color: white;
  }
`

const KidsSection = styled.div`
  background: #FFF6E5;
  padding: 4rem 0;
`

const KidsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
`

const KidsCard = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
`

const KidsImage = styled.div`
  position: relative;
  height: 200px;
  background: #f5f5f5;
`

const KidsInfo = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  
  h3 {
    font-size: 1.5rem;
    color: #2B1B58;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
  }
`

const FestiveSection = styled.div`
  padding: 4rem 0;
`

const FilterSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const FilterTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
`

const FilterTag = styled.button<{ $active?: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  border: 2px solid ${props => props.$active ? '#C19A5B' : '#E5E7EB'};
  background: ${props => props.$active ? '#C19A5B' : 'transparent'};
  color: ${props => props.$active ? 'white' : '#666'};
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: #C19A5B;
    transform: translateY(-2px);
  }
`

const SearchBar = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  font-size: 1rem;
  background: white;
  color: #2B1B58;
  transition: all 0.3s;

  &:focus {
    outline: none;
    border-color: #C19A5B;
    box-shadow: 0 0 0 2px rgba(193, 154, 91, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`

const FAQSection = styled.div`
  max-width: 800px;
  margin: 4rem auto;
  padding: 0 2rem;
`

const FAQItem = styled.div`
  border-bottom: 1px solid #E5E7EB;
  padding: 1.5rem 0;

  &:last-child {
    border-bottom: none;
  }
`

interface FAQQuestionProps {
  $expanded: boolean;
}

const FAQQuestion = styled.button.attrs<FAQQuestionProps>((props) => ({
  type: 'button',
}))<FAQQuestionProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: #2B1B58;
  font-size: 1.125rem;
  font-weight: 600;
  text-align: left;

  svg {
    transition: transform 0.3s;
    transform: ${props => props.$expanded ? 'rotate(180deg)' : 'rotate(0)'};
  }
`

const FAQAnswer = styled.div<{ $expanded: boolean }>`
  color: #666;
  margin-top: ${props => props.$expanded ? '1rem' : '0'};
  max-height: ${props => props.$expanded ? '1000px' : '0'};
  overflow: hidden;
  transition: all 0.3s;
`

const Card = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`

const CardImage = styled.div`
  position: relative;
  height: 200px;
  background: #f5f5f5;
`

const CardContent = styled.div`
  padding: 1.5rem;
`

const CardTitle = styled.h3`
  color: #2B1B58;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`

const CardDescription = styled.p`
  color: #666666;
  font-size: 1rem;
  line-height: 1.5;
`

const RecipeCard = () => {
  return (
    <Card>
      <CardImage>
        <Image
          src="https://images.unsplash.com/photo-1485921325833-c519f76c4927?q=80&w=2070&auto=format&fit=crop"
          alt="Recipe"
          fill
          style={{ objectFit: 'cover' }}
        />
      </CardImage>
      <CardContent>
        <CardTitle>Baker&apos;s Inn Special Recipe</CardTitle>
        <CardDescription>
          A delicious recipe using Baker&apos;s Inn bread
        </CardDescription>
      </CardContent>
    </Card>
  )
}

const RecipesPage = () => {
  const [activeCategory, setActiveCategory] = useState('quick')
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [isNavSticky, setIsNavSticky] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  const categories = [
    { id: 'quick', name: 'Quick Snacks', icon: <Fastfood /> },
    { id: 'family', name: 'Family Meals', icon: <FamilyRestroom /> },
    { id: 'kids', name: 'Kids\' Favorites', icon: <Star /> },
    { id: 'festive', name: 'Festive Specials', icon: <EmojiEvents /> },
    { id: 'hacks', name: 'Bakers Inn Hacks', icon: <Lightbulb /> }
  ]

  const featuredRecipes = [
    {
      id: 1,
      title: 'Sunshine Bread Garlic Pizza',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop',
      prepTime: '20 mins',
      difficulty: 'Easy',
      description: 'Transform our Sunshine Bread into a crispy pizza base!'
    },
    {
      id: 2,
      title: 'Chicken Pie Breakfast Bake',
      image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2070&auto=format&fit=crop',
      prepTime: '30 mins',
      difficulty: 'Medium',
      description: 'A hearty breakfast casserole using our famous chicken pies.'
    },
    {
      id: 3,
      title: 'Rainbow Sandwich Stack',
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2070&auto=format&fit=crop',
      prepTime: '15 mins',
      difficulty: 'Easy',
      description: 'Colorful and nutritious sandwiches kids will love!'
    },
    {
      id: 4,
      title: 'Bread Pudding Delight',
      image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?q=80&w=2070&auto=format&fit=crop',
      prepTime: '45 mins',
      difficulty: 'Medium',
      description: 'A classic dessert with a Bakers Inn twist.'
    },
    {
      id: 5,
      title: 'Savory French Toast',
      image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=2070&auto=format&fit=crop',
      prepTime: '25 mins',
      difficulty: 'Easy',
      description: 'Perfect for brunch with friends and family.'
    },
    {
      id: 6,
      title: 'Bread Crumb Chicken',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2070&auto=format&fit=crop',
      prepTime: '40 mins',
      difficulty: 'Medium',
      description: 'Crispy chicken coated with our special bread crumbs.'
    }
  ]

  const trendingRecipes = [
    {
      id: 1,
      title: "Chicken Pie Breakfast Bake",
      description: "Crispy pie crust meets cheesy eggs!",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2070&auto=format&fit=crop",
      rating: 4.8,
      reviews: 200,
      prepTime: "15 mins"
    },
    {
      id: 2,
      title: "Sunshine Bread French Toast",
      description: "Classic breakfast with a Bakers Inn twist",
      image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=2070&auto=format&fit=crop",
      rating: 4.9,
      reviews: 180,
      prepTime: "20 mins"
    },
    {
      id: 3,
      title: "Savory Bread Pudding",
      description: "Perfect comfort food for rainy days",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2070&auto=format&fit=crop",
      rating: 4.7,
      reviews: 150,
      prepTime: "45 mins"
    },
    {
      id: 4,
      title: "Quick Pizza Toast",
      description: "5-minute snack that kids love",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
      rating: 4.6,
      reviews: 120,
      prepTime: "5 mins"
    }
  ];

  const recipeOfDay = {
    title: "Rainy Day Special: Spicy Bean & Bread Soup",
    description: "Transform day-old bread into a hearty, warming soup perfect for cold days. This recipe combines our signature Sunshine Bread with protein-rich beans and aromatic spices.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2070&auto=format&fit=crop",
    prepTime: "30 mins",
    difficulty: "Medium"
  };

  const recipeSteps = [
    {
      step: 1,
      instruction: "Slice 4 pieces of Bakers Inn Sunshine Bread into 1-inch thick slices."
    },
    {
      step: 2,
      instruction: "In a shallow bowl, whisk together 2 eggs, 1 cup milk, 1 tsp vanilla extract, and a pinch of cinnamon."
    },
    {
      step: 3,
      instruction: "Dip each bread slice in the egg mixture, ensuring both sides are well coated."
    },
    {
      step: 4,
      instruction: "Heat a non-stick pan over medium heat. Add butter and let it melt."
    },
    {
      step: 5,
      instruction: "Cook each slice for 2-3 minutes per side until golden brown."
    }
  ];

  const videoTutorials = [
    {
      id: 1,
      title: "5-Minute Snack Hacks with Sunshine Bread",
      thumbnail: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2070&auto=format&fit=crop",
      duration: "5:30",
      videoId: "dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Transform Leftover Bread into Croutons!",
      thumbnail: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2070&auto=format&fit=crop",
      duration: "3:45",
      videoId: "jNQXAC9IVRw"
    },
    {
      id: 3,
      title: "Kids' Lunch Box Ideas",
      thumbnail: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2070&auto=format&fit=crop",
      duration: "7:20",
      videoId: "9bZkp7q19f0"
    }
  ];

  const kidsRecipes = [
    {
      id: 1,
      title: "Rainbow Sandwich Faces",
      description: "Create fun and colorful faces using Sunshine Bread and fresh vegetables!",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Mini Pizza Bites",
      description: "Turn Bakers Inn rolls into delicious mini pizzas that kids can help make!",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop"
    }
  ]

  const festiveRecipes = [
    {
      id: 1,
      title: "Christmas Bread Wreath",
      description: "A festive centerpiece made with Bakers Inn dough",
      image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Easter Bunny Biscuits",
      description: "Cute and delicious Easter-themed treats",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2070&auto=format&fit=crop"
    }
  ]

  const dietFilters = [
    "Vegetarian",
    "Kid-Friendly",
    "Under 30 Mins",
    "Budget-Friendly"
  ]

  const faqs = [
    {
      question: "Can I use gluten-free bread for these recipes?",
      answer: "While our recipes are designed for our standard bread products, you can experiment with gluten-free alternatives. Keep in mind that texture and cooking times may vary."
    },
    {
      question: "How do I store leftovers?",
      answer: "Most recipes can be stored in an airtight container in the refrigerator for up to 3 days. For best results, reheat in the oven or toaster rather than the microwave to maintain texture."
    },
    {
      question: "Can I freeze these recipes?",
      answer: "Many of our recipes can be frozen for up to 3 months. We recommend wrapping items individually and thawing in the refrigerator overnight before reheating."
    }
  ]

  const handlePrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(featuredRecipes.length - 1);
    } else {
      setCurrentSlide(prev => prev - 1);
    }
  }

  const handleNextSlide = () => {
    if (currentSlide === featuredRecipes.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  }

  // Add auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [currentSlide]);

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    )
  }

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(prev => prev === index ? null : index)
  }

  // Update scroll handler for smoother transitions
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (navRef.current) {
            const navBottom = navRef.current.getBoundingClientRect().bottom;
            setIsNavSticky(navBottom <= 0);
          }
          ticking = false;
        });
        ticking = true;
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <RecipesContainer>
      <HeroSection>
        <Image
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2070&auto=format&fit=crop"
          alt="Delicious recipes with Bakers Inn"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <HeroContent>
          <HeroTitle>Bake Memories with Bakers Inn</HeroTitle>
          <HeroSubtext>Turn Our Breads & Treats into Family Favorites</HeroSubtext>
        </HeroContent>
      </HeroSection>

      <NavContainer ref={navRef}>
        <RecipeNav $isSticky={isNavSticky}>
          <RecipeNavContainer>
            {categories.map(category => (
              <RecipeNavLink 
                key={category.id}
                href={`#${category.id}`}
                $active={activeCategory === category.id}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveCategory(category.id);
                  const element = document.getElementById(category.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {category.icon} {category.name}
              </RecipeNavLink>
            ))}
          </RecipeNavContainer>
        </RecipeNav>
      </NavContainer>

      <CarouselSection id="quick">
        <CarouselContainer>
          <CarouselTitle>Recipe of the Month</CarouselTitle>
          <CarouselTrack 
            ref={carouselRef}
            style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
          >
            {featuredRecipes.map(recipe => (
              <CarouselCard key={recipe.id}>
                <CarouselImage>
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </CarouselImage>
                <CarouselInfo>
                  <h3>{recipe.title}</h3>
                  <p>{recipe.description}</p>
                  <RecipeStats>
                    <span><AccessTime /> {recipe.prepTime}</span>
                    <span><Star /> {recipe.difficulty}</span>
                  </RecipeStats>
                  <GetRecipeButton href={`/recipes/${recipe.id}`}>
                    Get the Recipe
                  </GetRecipeButton>
                </CarouselInfo>
              </CarouselCard>
            ))}
            {/* Duplicate first few cards for infinite scroll effect */}
            {featuredRecipes.slice(0, 3).map(recipe => (
              <CarouselCard key={`${recipe.id}-duplicate`}>
                <CarouselImage>
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </CarouselImage>
                <CarouselInfo>
                  <h3>{recipe.title}</h3>
                  <p>{recipe.description}</p>
                  <RecipeStats>
                    <span><AccessTime /> {recipe.prepTime}</span>
                    <span><Star /> {recipe.difficulty}</span>
                  </RecipeStats>
                  <GetRecipeButton href={`/recipes/${recipe.id}`}>
                    Get the Recipe
                  </GetRecipeButton>
                </CarouselInfo>
              </CarouselCard>
            ))}
          </CarouselTrack>
          <CarouselNav onClick={handlePrevSlide}>
            <NavigateBefore />
          </CarouselNav>
          <CarouselNav onClick={handleNextSlide}>
            <NavigateNext />
          </CarouselNav>
        </CarouselContainer>
      </CarouselSection>

      <TrendingSection id="family">
        <CarouselContainer>
          <CarouselTitle>What Zimbabwe is Cooking</CarouselTitle>
          <TrendingGrid>
            {trendingRecipes.map(recipe => (
              <TrendingCard key={recipe.id}>
                <TrendingImage>
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </TrendingImage>
                <TrendingInfo>
                  <h3>{recipe.title}</h3>
                  <p>{recipe.description}</p>
                  <ReviewStats>
                    <Star /> {recipe.rating} ({recipe.reviews} reviews)
                  </ReviewStats>
                  <RecipeStats>
                    <span><AccessTime /> {recipe.prepTime}</span>
                  </RecipeStats>
                </TrendingInfo>
              </TrendingCard>
            ))}
          </TrendingGrid>
        </CarouselContainer>
      </TrendingSection>

      <RecipeOfDay>
        <CarouselTitle>Recipe of the Day</CarouselTitle>
        <HighlightCard>
          <HighlightImage>
            <Image
              src={recipeOfDay.image}
              alt={recipeOfDay.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </HighlightImage>
          <HighlightInfo>
            <Timer>
              <AccessTime /> Today Only: Save This Recipe!
            </Timer>
            <h3>{recipeOfDay.title}</h3>
            <p>{recipeOfDay.description}</p>
            <RecipeStats>
              <span><AccessTime /> {recipeOfDay.prepTime}</span>
              <span><Star /> {recipeOfDay.difficulty}</span>
                </RecipeStats>
            <GetRecipeButton href="/recipes/bean-soup">
              Get the Recipe
            </GetRecipeButton>
          </HighlightInfo>
        </HighlightCard>
      </RecipeOfDay>

      <RecipeSection>
        <CarouselTitle>Sunshine Bread French Toast</CarouselTitle>
        <RecipeContent>
          <Instructions>
            <h3>Step by Step Instructions</h3>
            {recipeSteps.map(({ step, instruction }) => (
              <Step key={step}>
                <StepNumber>{step}</StepNumber>
                <StepContent>
                  <p>{instruction}</p>
                </StepContent>
              </Step>
            ))}
            <ProTip>
              <Lightbulb />
              <p>Use stale Sunshine Bread for extra crispiness!</p>
            </ProTip>
          </Instructions>
          
          <IngredientsCard>
            <h3>Ingredients</h3>
            <IngredientsList>
              <li>4 slices Bakers Inn Sunshine Bread</li>
              <li>2 large eggs</li>
              <li>1 cup milk</li>
              <li>1 tsp vanilla extract</li>
              <li>1/4 tsp cinnamon</li>
              <li>2 tbsp butter</li>
              <li>Bakers Inn Strawberry Jam (for serving)</li>
            </IngredientsList>
          </IngredientsCard>
        </RecipeContent>
      </RecipeSection>

      <VideoSection id="hacks">
        <CarouselContainer>
          <CarouselTitle>Watch & Bake</CarouselTitle>
          <VideoGrid>
            {videoTutorials.map(video => (
              <VideoCard key={video.id} onClick={() => setSelectedVideo(video.videoId)}>
                <VideoThumbnail>
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <PlayButton>
                    <PlayArrow />
                  </PlayButton>
                </VideoThumbnail>
                <VideoInfo>
                  <h3>{video.title}</h3>
                  <VideoDuration>
                    <AccessTime /> {video.duration}
                  </VideoDuration>
                </VideoInfo>
              </VideoCard>
            ))}
          </VideoGrid>
        </CarouselContainer>
      </VideoSection>

      <VideoModal $isOpen={!!selectedVideo}>
        {selectedVideo && (
          <>
            <CloseButton onClick={() => setSelectedVideo(null)}>
              <Close />
            </CloseButton>
            <VideoFrame>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </VideoFrame>
          </>
        )}
      </VideoModal>

      <KidsSection id="kids">
        <CarouselContainer>
          <CarouselTitle>Fun Recipes for Little Chefs</CarouselTitle>
          <KidsGrid>
            {kidsRecipes.map(recipe => (
              <KidsCard key={recipe.id}>
                <KidsImage>
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </KidsImage>
                <KidsInfo>
                  <h3>{recipe.title}</h3>
                  <p>{recipe.description}</p>
                  <GetRecipeButton href={`/recipes/kids/${recipe.id}`}>
                    Let's Make It!
                  </GetRecipeButton>
                </KidsInfo>
              </KidsCard>
            ))}
          </KidsGrid>
        </CarouselContainer>
      </KidsSection>

      <FestiveSection id="festive">
        <CarouselContainer>
          <CarouselTitle>Festive Specials</CarouselTitle>
          <TrendingGrid>
            {festiveRecipes.map(recipe => (
              <TrendingCard key={recipe.id}>
                <TrendingImage>
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </TrendingImage>
                <TrendingInfo>
                  <h3>{recipe.title}</h3>
                  <p>{recipe.description}</p>
                  <GetRecipeButton href={`/recipes/festive/${recipe.id}`}>
                    Get Recipe PDF
                  </GetRecipeButton>
                </TrendingInfo>
              </TrendingCard>
            ))}
          </TrendingGrid>
        </CarouselContainer>
      </FestiveSection>

      <FilterSection>
        <CarouselTitle>Find Your Perfect Recipe</CarouselTitle>
        <SearchBar 
          type="text" 
          placeholder="Search recipes by ingredient..."
        />
        <FilterTags>
          {dietFilters.map(filter => (
            <FilterTag
              key={filter}
              $active={activeFilters.includes(filter)}
              onClick={() => toggleFilter(filter)}
            >
              {filter}
            </FilterTag>
          ))}
        </FilterTags>
      </FilterSection>

      <FAQSection>
        <CarouselTitle>Frequently Asked Questions</CarouselTitle>
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <FAQQuestion
              $expanded={expandedFAQ === index}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <ExpandMore />
            </FAQQuestion>
            <FAQAnswer $expanded={expandedFAQ === index}>
              {faq.answer}
            </FAQAnswer>
          </FAQItem>
        ))}
      </FAQSection>
    </RecipesContainer>
  )
}

export default RecipesPage 