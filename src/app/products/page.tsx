'use client'

import Image from 'next/image'
import styled from 'styled-components'
import { useState, useEffect, useRef } from 'react'
import { 
  BakeryDining,
  LocalPizza,
  Cake,
  Event,
  Business,
  LocationOn,
  Star,
  Info,
  ShoppingCart,
  VerifiedUser,
  LocalShipping,
  EmojiEvents,
  Favorite,
  Nature
} from '@mui/icons-material'
import { motion } from 'framer-motion'
import Link from 'next/link'

const ProductsContainer = styled.div`
  min-height: 100vh;
  background: #FAFAFA;
`

const HeroSection = styled.div`
  position: relative;
  height: 70vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  overflow: hidden;
`

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto 4rem;
  padding: 0 2rem;
  position: relative;
  z-index: 10;
`

const ProductCard = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`

const Navigation = styled.nav<{ $isSticky: boolean }>`
  background: white;
  padding: 1rem 0;
  position: ${props => props.$isSticky ? 'fixed' : 'relative'};
  top: ${props => props.$isSticky ? '0' : 'auto'};
  width: 100%;
  z-index: 100;
  box-shadow: ${props => props.$isSticky ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'};
  transition: all 0.3s ease;
`

const NavContainer = styled.div`
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

const NavLink = styled(Link)<{ $active?: boolean }>`
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

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #2B1B58;
  text-align: center;
  margin-bottom: 1rem;
`

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
  text-align: center;
  margin-bottom: 3rem;
`

const ProductImage = styled.div`
  position: relative;
  height: 250px;
  background: #f5f5f5;
`

const ProductInfo = styled.div`
  padding: 1.5rem;
`
  
const ProductTitle = styled.h3`
    font-size: 1.5rem;
    color: #2B1B58;
    margin-bottom: 0.5rem;
`

const ProductTagline = styled.p`
  color: #666;
  margin-bottom: 1rem;
`

const ProductVariants = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

const Variant = styled.span`
  padding: 0.25rem 0.75rem;
  background: #f5f5f5;
  border-radius: 1rem;
  font-size: 0.875rem;
  color: #666;
`

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #C19A5B;
  color: white;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    background: #A88347;
    transform: translateY(-2px);
  }
`

const InfoSection = styled.div<{ $theme?: 'dark' | 'light' }>`
  background: ${props => props.$theme === 'dark' ? '#2B1B58' : '#FAF7F2'};
  color: ${props => props.$theme === 'dark' ? 'white' : '#2B1B58'};
  padding: 4rem 0;
`

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const InfoCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: #C19A5B;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;

  svg {
    font-size: 2rem;
  }
`

const StoreLocator = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  margin-top: 2rem;
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

const MapPlaceholder = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`

const PartnerTabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  border-bottom: 2px solid #E5E7EB;
  padding-bottom: 1rem;
`

const PartnerTab = styled.button<{ $active?: boolean }>`
  padding: 0.5rem 1rem;
  background: ${props => props.$active ? '#C19A5B' : 'transparent'};
  color: ${props => props.$active ? 'white' : '#666'};
  border: ${props => props.$active ? 'none' : '2px solid #E5E7EB'};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${props => props.$active ? '#A88347' : '#f5f5f5'};
  }
`

const MapContainer = styled.div`
  margin-top: 2rem;
`

const TestimonialCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const CustomerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const CustomerImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`

const Rating = styled.div`
  color: #FFB800;
  display: flex;
  gap: 0.25rem;
`

const ImpactMetrics = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const Metric = styled.div`
  text-align: center;

  h3 {
    font-size: 2.5rem;
    color: #C19A5B;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  p {
    color: #666;
  }
`

const AnimatedMetric = ({ end, label }: { end: number; label: string }) => {
  const { count, ref } = useCountAnimation(end, 5000);
  
  return (
    <Metric ref={ref}>
      <h3>{count.toLocaleString()}+</h3>
      <p>{label}</p>
    </Metric>
  );
};

const useCountAnimation = (end: number, duration: number = 5000) => {
  const [count, setCount] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const steps = 60
    const stepDuration = duration / steps
    const increment = end / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [end, duration, isVisible])

  return { count, ref: elementRef }
}

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('breads')
  const [isSticky, setIsSticky] = useState(false)
  const [activePartner, setActivePartner] = useState('ok')

  const products = [
    {
      id: 1,
      name: "Sunshine Bread",
      description: "Our signature white bread",
      image: "/products/sunshine-bread.jpg"
    },
    // More products...
  ]

  // Handle scroll for sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ProductsContainer>
      <HeroSection>
        <Image
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
          alt="Our Products"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <h1>Our Products</h1>
      </HeroSection>

      <Navigation $isSticky={isSticky}>
        <NavContainer>
          <NavLink href="#breads" $active={activeCategory === 'breads'}>
            <BakeryDining /> Breads
          </NavLink>
          <NavLink href="#snacks" $active={activeCategory === 'snacks'}>
            <LocalPizza /> Snacks & Pastries
          </NavLink>
          <NavLink href="#cakes" $active={activeCategory === 'cakes'}>
            <Cake /> Cakes & Desserts
          </NavLink>
          <NavLink href="#seasonal" $active={activeCategory === 'seasonal'}>
            <Event /> Seasonal Specials
          </NavLink>
          <NavLink href="#wholesale" $active={activeCategory === 'wholesale'}>
            <Business /> Wholesale Packs
          </NavLink>
        </NavContainer>
      </Navigation>

      <ProductsGrid>
        {products.map(product => (
          <ProductCard key={product.id}>
            {/* Product details */}
          </ProductCard>
        ))}
      </ProductsGrid>

      <SectionContainer id="breads">
        <SectionTitle>Our Daily Bread, Your Daily Joy</SectionTitle>
        <SectionSubtitle>Fresh from our ovens to your table</SectionSubtitle>
        <ProductsGrid>
          <ProductCard>
            <ProductImage>
              <Image
                src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=2070&auto=format&fit=crop"
                alt="Sunshine Bread"
                fill
                style={{ objectFit: 'cover' }}
              />
            </ProductImage>
            <ProductInfo>
              <ProductTitle>Sunshine Bread</ProductTitle>
              <ProductTagline>Soft, Nutritious, and Perfect for Every Meal.</ProductTagline>
              <ProductVariants>
                <Variant>500g</Variant>
                <Variant>1kg</Variant>
              </ProductVariants>
              <CTAButton href="/products/sunshine-bread">Learn More</CTAButton>
            </ProductInfo>
          </ProductCard>

          <ProductCard>
            <ProductImage>
              <Image
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
                alt="Whole Wheat Bread"
                fill
                style={{ objectFit: 'cover' }}
              />
            </ProductImage>
            <ProductInfo>
              <ProductTitle>Whole Wheat Bread</ProductTitle>
              <ProductTagline>Fuel Your Day with Fiber-Rich Goodness.</ProductTagline>
              <ProductVariants>
                <Variant>500g</Variant>
                <Variant>1kg</Variant>
              </ProductVariants>
              <CTAButton href="/products/whole-wheat-bread">Learn More</CTAButton>
            </ProductInfo>
          </ProductCard>

          <ProductCard>
            <ProductImage>
              <Image
                src="https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=2064&auto=format&fit=crop"
                alt="Premium Sourdough"
                fill
                style={{ objectFit: 'cover' }}
              />
            </ProductImage>
            <ProductInfo>
              <ProductTitle>Premium Sourdough</ProductTitle>
              <ProductTagline>Crafted with Traditional Zimbabwean Recipes.</ProductTagline>
              <ProductVariants>
                <Variant>1kg</Variant>
              </ProductVariants>
              <CTAButton href="/products/premium-sourdough">Learn More</CTAButton>
            </ProductInfo>
          </ProductCard>
        </ProductsGrid>
      </SectionContainer>

      <SectionContainer id="snacks">
        <SectionTitle>On-the-Go Treats, Made with Love</SectionTitle>
        <SectionSubtitle>Perfect snacks for any time of day</SectionSubtitle>
        <ProductsGrid>
          <ProductCard>
            <ProductImage>
              <Image
                src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2070&auto=format&fit=crop"
                alt="Chicken Pies"
                fill
                style={{ objectFit: 'cover' }}
              />
            </ProductImage>
            <ProductInfo>
              <ProductTitle>Chicken Pies</ProductTitle>
              <ProductTagline>Crispy, Flaky, and Packed with Flavor.</ProductTagline>
              <ProductVariants>
                <Variant>Regular</Variant>
                <Variant>Family Size</Variant>
              </ProductVariants>
              <CTAButton href="/products/chicken-pies">Learn More</CTAButton>
            </ProductInfo>
          </ProductCard>

          <ProductCard>
            <ProductImage>
              <Image
                src="https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=2070&auto=format&fit=crop"
                alt="Scones"
                fill
                style={{ objectFit: 'cover' }}
              />
            </ProductImage>
            <ProductInfo>
              <ProductTitle>Scones</ProductTitle>
              <ProductTagline>Sweet or Savory—Perfect with Tea.</ProductTagline>
              <ProductVariants>
                <Variant>6 Pack</Variant>
                <Variant>12 Pack</Variant>
              </ProductVariants>
              <CTAButton href="/products/scones">Learn More</CTAButton>
            </ProductInfo>
          </ProductCard>

          <ProductCard>
            <ProductImage>
              <Image
                src="https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?q=80&w=2065&auto=format&fit=crop"
                alt="Doughnuts"
                fill
                style={{ objectFit: 'cover' }}
              />
            </ProductImage>
            <ProductInfo>
              <ProductTitle>Doughnuts</ProductTitle>
              <ProductTagline>Glazed, Sprinkled, or Sugar-Dusted.</ProductTagline>
              <ProductVariants>
                <Variant>Single</Variant>
                <Variant>Box of 6</Variant>
              </ProductVariants>
              <CTAButton href="/products/doughnuts">Learn More</CTAButton>
            </ProductInfo>
          </ProductCard>
        </ProductsGrid>
      </SectionContainer>

      <SectionContainer id="cakes">
        <SectionTitle>Celebrate Life's Sweet Moments</SectionTitle>
        <SectionSubtitle>Custom cakes and desserts for every occasion</SectionSubtitle>
        <ProductsGrid>
          <ProductCard>
            <ProductImage>
              <Image
                src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1974&auto=format&fit=crop"
                alt="Birthday Cakes"
                fill
                style={{ objectFit: 'cover' }}
              />
            </ProductImage>
            <ProductInfo>
              <ProductTitle>Birthday Cakes</ProductTitle>
              <ProductTagline>Customize Your Celebration Cake.</ProductTagline>
              <ProductVariants>
                <Variant>Small</Variant>
                <Variant>Medium</Variant>
                <Variant>Large</Variant>
              </ProductVariants>
              <CTAButton href="/products/birthday-cakes">Learn More</CTAButton>
            </ProductInfo>
          </ProductCard>

          <ProductCard>
            <ProductImage>
              <Image
                src="https://images.unsplash.com/photo-1557979619-445218f326b9?q=80&w=1974&auto=format&fit=crop"
                alt="Victoria Cake"
                fill
                style={{ objectFit: 'cover' }}
              />
            </ProductImage>
            <ProductInfo>
              <ProductTitle>Victoria Cake</ProductTitle>
              <ProductTagline>A Zimbabwean Classic Since 1982.</ProductTagline>
              <ProductVariants>
                <Variant>Classic</Variant>
                <Variant>Premium</Variant>
              </ProductVariants>
              <CTAButton href="/products/victoria-cake">Learn More</CTAButton>
            </ProductInfo>
          </ProductCard>

          <ProductCard>
            <ProductImage>
              <Image
                src="https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=1974&auto=format&fit=crop"
                alt="Cupcakes"
                fill
                style={{ objectFit: 'cover' }}
              />
            </ProductImage>
            <ProductInfo>
              <ProductTitle>Cupcakes</ProductTitle>
              <ProductTagline>Bite-Sized Happiness for All Ages.</ProductTagline>
              <ProductVariants>
                <Variant>6 Pack</Variant>
                <Variant>12 Pack</Variant>
              </ProductVariants>
              <CTAButton href="/products/cupcakes">Learn More</CTAButton>
            </ProductInfo>
          </ProductCard>
        </ProductsGrid>
      </SectionContainer>

      <SectionContainer id="seasonal">
        <SectionTitle>Limited-Time Flavors You'll Crave</SectionTitle>
        <SectionSubtitle>Special treats for special occasions</SectionSubtitle>
        <ProductsGrid>
          <ProductCard>
            <ProductImage>
              <Image
                src="https://images.unsplash.com/photo-1606913084603-3e7702b01627?q=80&w=2070&auto=format&fit=crop"
                alt="Christmas Fruitcake"
                fill
                style={{ objectFit: 'cover' }}
              />
            </ProductImage>
            <ProductInfo>
              <ProductTitle>Christmas Fruitcake</ProductTitle>
              <ProductTagline>Rich, Fruity, and Festive.</ProductTagline>
              <ProductVariants>
                <Variant>500g</Variant>
                <Variant>1kg</Variant>
              </ProductVariants>
              <CTAButton href="/products/christmas-fruitcake">Learn More</CTAButton>
            </ProductInfo>
          </ProductCard>

          <ProductCard>
            <ProductImage>
              <Image
                src="https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=1974&auto=format&fit=crop"
                alt="Easter Hot Cross Buns"
                fill
                style={{ objectFit: 'cover' }}
              />
            </ProductImage>
            <ProductInfo>
              <ProductTitle>Easter Hot Cross Buns</ProductTitle>
              <ProductTagline>A Beloved Easter Tradition.</ProductTagline>
              <ProductVariants>
                <Variant>6 Pack</Variant>
                <Variant>12 Pack</Variant>
              </ProductVariants>
              <CTAButton href="/products/hot-cross-buns">Learn More</CTAButton>
            </ProductInfo>
          </ProductCard>
        </ProductsGrid>
      </SectionContainer>

      <SectionContainer id="wholesale">
        <SectionTitle>Stock Up for Home, Business, or Events</SectionTitle>
        <SectionSubtitle>Bulk orders and wholesale solutions</SectionSubtitle>
        <ProductsGrid>
          <ProductCard>
            <ProductImage>
              <Image
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
                alt="Family Bundle"
                fill
                style={{ objectFit: 'cover' }}
              />
            </ProductImage>
            <ProductInfo>
              <ProductTitle>Family Bundle</ProductTitle>
              <ProductTagline>5 Loaves + 12 Snacks.</ProductTagline>
              <ProductVariants>
                <Variant>Weekly</Variant>
                <Variant>Monthly</Variant>
              </ProductVariants>
              <CTAButton href="/products/family-bundle">Learn More</CTAButton>
            </ProductInfo>
          </ProductCard>

          <ProductCard>
            <ProductImage>
              <Image
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
                alt="Office Breakfast Box"
                fill
                style={{ objectFit: 'cover' }}
              />
            </ProductImage>
            <ProductInfo>
              <ProductTitle>Office Breakfast Box</ProductTitle>
              <ProductTagline>Perfect for Team Meetings.</ProductTagline>
              <ProductVariants>
                <Variant>10-15 People</Variant>
                <Variant>20-25 People</Variant>
              </ProductVariants>
              <CTAButton href="/products/office-box">Learn More</CTAButton>
            </ProductInfo>
          </ProductCard>

          <ProductCard>
            <ProductImage>
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
                alt="Event Package"
                fill
                style={{ objectFit: 'cover' }}
              />
            </ProductImage>
            <ProductInfo>
              <ProductTitle>Event Package</ProductTitle>
              <ProductTagline>Catering for Special Occasions.</ProductTagline>
              <ProductVariants>
                <Variant>50+ People</Variant>
                <Variant>100+ People</Variant>
              </ProductVariants>
              <CTAButton href="/products/event-package">Learn More</CTAButton>
            </ProductInfo>
          </ProductCard>
        </ProductsGrid>
      </SectionContainer>

      <InfoSection $theme="dark">
        <SectionContainer>
          <SectionTitle>Why Trust Bakers Inn?</SectionTitle>
          <SectionSubtitle>Our commitment to quality in every bite</SectionSubtitle>
          <InfoGrid>
            <InfoCard>
              <IconWrapper>
                <VerifiedUser />
              </IconWrapper>
              <ProductTitle>100% Locally Sourced</ProductTitle>
              <ProductTagline>Supporting Zimbabwean farmers with premium local wheat</ProductTagline>
            </InfoCard>
            <InfoCard>
              <IconWrapper>
                <LocalShipping />
              </IconWrapper>
              <ProductTitle>HACCP Certified</ProductTitle>
              <ProductTagline>Meeting international food safety standards</ProductTagline>
            </InfoCard>
            <InfoCard>
              <IconWrapper>
                <Nature />
              </IconWrapper>
              <ProductTitle>No Preservatives</ProductTitle>
              <ProductTagline>Always fresh, always natural</ProductTagline>
            </InfoCard>
          </InfoGrid>
        </SectionContainer>
      </InfoSection>

      <SectionContainer>
        <SectionTitle>Where to Buy</SectionTitle>
        <SectionSubtitle>Find Bakers Inn products near you</SectionSubtitle>
        <StoreLocator>
          <SearchBar type="text" placeholder="Enter your location to find Bakers Inn near you" />
          <PartnerTabs>
            <PartnerTab 
              $active={activePartner === 'ok'} 
              onClick={() => setActivePartner('ok')}
            >
              OK Zimbabwe
            </PartnerTab>
            <PartnerTab 
              $active={activePartner === 'tm'} 
              onClick={() => setActivePartner('tm')}
            >
              TM Pick n Pay
            </PartnerTab>
            <PartnerTab 
              $active={activePartner === 'spar'} 
              onClick={() => setActivePartner('spar')}
            >
              Spar
            </PartnerTab>
          </PartnerTabs>

          <MapContainer>
            {activePartner === 'ok' && (
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d724709.9595934199!2d30.440207038293785!3d-18.05416957929859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sok%20zimbabwe!5e0!3m2!1sen!2szw!4v1742559469281!5m2!1sen!2szw"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}
            {activePartner === 'tm' && (
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d971121.742726926!2d30.440196820178578!3d-18.050974794108967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sTM%20Pick%20n%20Pay%20zimbabwe!5e0!3m2!1sen!2szw!4v1742559529508!5m2!1sen!2szw"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}
            {activePartner === 'spar' && (
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d121552.38640010939!2d30.963394328470073!3d-17.814614200731484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sspar%20zimbabwe!5e0!3m2!1sen!2szw!4v1742559597042!5m2!1sen!2szw"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}
          </MapContainer>
        </StoreLocator>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>What Zimbabwe Loves Most</SectionTitle>
        <SectionSubtitle>Our customers' favorites</SectionSubtitle>
        <ProductsGrid>
          <TestimonialCard>
            <CustomerInfo>
              <CustomerImage>
                <Image
                  src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop"
                  alt="Customer"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </CustomerImage>
              <div>
                <ProductTitle>John M.</ProductTitle>
                <Rating>
                  <Star /> <Star /> <Star /> <Star /> <Star />
                </Rating>
              </div>
            </CustomerInfo>
            <ProductTagline>"I buy Sunshine Bread every week! It's consistently fresh and delicious."</ProductTagline>
          </TestimonialCard>

          <TestimonialCard>
            <CustomerInfo>
              <CustomerImage>
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
                  alt="Customer"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </CustomerImage>
              <div>
                <ProductTitle>Sarah K.</ProductTitle>
                <Rating>
                  <Star /> <Star /> <Star /> <Star /> <Star />
                </Rating>
              </div>
            </CustomerInfo>
            <ProductTagline>"The birthday cake I ordered was absolutely stunning! Everyone at the party loved it."</ProductTagline>
          </TestimonialCard>

          <TestimonialCard>
            <CustomerInfo>
              <CustomerImage>
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
                  alt="Customer"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </CustomerImage>
              <div>
                <ProductTitle>David R.</ProductTitle>
                <Rating>
                  <Star /> <Star /> <Star /> <Star /> <Star />
                </Rating>
              </div>
            </CustomerInfo>
            <ProductTagline>"Their chicken pies are the best in Zimbabwe! Perfect for lunch at work."</ProductTagline>
          </TestimonialCard>

          <TestimonialCard>
            <CustomerInfo>
              <CustomerImage>
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2070&auto=format&fit=crop"
                  alt="Customer"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </CustomerImage>
              <div>
                <ProductTitle>Maria C.</ProductTitle>
                <Rating>
                  <Star /> <Star /> <Star /> <Star /> <Star />
                </Rating>
              </div>
            </CustomerInfo>
            <ProductTagline>"The Office Breakfast Box is our team's favorite! Great variety and always on time."</ProductTagline>
          </TestimonialCard>

          <TestimonialCard>
            <CustomerInfo>
              <CustomerImage>
                <Image
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2070&auto=format&fit=crop"
                  alt="Customer"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </CustomerImage>
              <div>
                <ProductTitle>Thomas N.</ProductTitle>
                <Rating>
                  <Star /> <Star /> <Star /> <Star /> <Star />
                </Rating>
              </div>
            </CustomerInfo>
            <ProductTagline>"The whole wheat bread is fantastic! Love that it's made with local ingredients."</ProductTagline>
          </TestimonialCard>

          <TestimonialCard>
            <CustomerInfo>
              <CustomerImage>
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop"
                  alt="Customer"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </CustomerImage>
              <div>
                <ProductTitle>Grace M.</ProductTitle>
                <Rating>
                  <Star /> <Star /> <Star /> <Star /> <Star />
                </Rating>
              </div>
            </CustomerInfo>
            <ProductTagline>"Their scones remind me of my grandmother's baking. Simply perfect with tea!"</ProductTagline>
          </TestimonialCard>
        </ProductsGrid>
      </SectionContainer>

      <InfoSection $theme="dark">
        <SectionContainer>
          <SectionTitle>Making a Difference Together</SectionTitle>
          <SectionSubtitle>Every purchase supports our community initiatives</SectionSubtitle>
          <ImpactMetrics>
            <AnimatedMetric end={50000} label="Loaves Donated Monthly" />
            <AnimatedMetric end={100} label="Schools Supported" />
            <AnimatedMetric end={1000} label="Local Jobs Created" />
          </ImpactMetrics>
        </SectionContainer>
      </InfoSection>
    </ProductsContainer>
  )
}

export default ProductsPage 