'use client'

import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem;
  text-align: center;
`

const Title = styled.h2`
  color: #2B1B58;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled.div`
  overflow: hidden;
  border-radius: 0.5rem;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`

const ProductImage = styled(Image)`
  width: 100%;
  height: 250px;
  object-fit: cover;
`

const ViewButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #C19A5B;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s;
  width: fit-content;
  margin: 0 auto;

  &:hover {
    background-color: #A88347;
  }
`

const Products = () => {
  return (
    <Container>
      <Title>Our Product Range</Title>
      <ProductGrid>
        <ProductCard>
          <ProductImage
            src="/images/slices.png"
            alt="Fresh Bread"
            width={300}
            height={250}
            priority
          />
        </ProductCard>
        <ProductCard>
          <ProductImage
            src="/images/pie.png"
            alt="Meat Pies"
            width={300}
            height={250}
          />
        </ProductCard>
        <ProductCard>
          <ProductImage
            src="/images/doughnut tea.png"
            alt="Donuts"
            width={300}
            height={250}
          />
        </ProductCard>
        <ProductCard>
          <ProductImage
            src="/images/sandwich.png"
            alt="Sandwich"
            width={300}
            height={250}
          />
        </ProductCard>
      </ProductGrid>
      <ViewButton href="/products">
        VIEW COMPLETE RANGE
      </ViewButton>
    </Container>
  )
}

export default Products 