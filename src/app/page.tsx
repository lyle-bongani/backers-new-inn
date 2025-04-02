'use client'

import styled from 'styled-components'

// Import components
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Recipes from './components/Recipes'
import KidsCorner from './components/KidsCorner'
import Newsletter from './components/Newsletter'

const Main = styled.main`
  min-height: 100vh;
  background: #FAFAFA;
  width: 100%;
`

const HomePage = () => {
  return (
    <Main>
      <Hero />
      <About />
      <Products />
      <Recipes />
      <KidsCorner />
      <Newsletter />
    </Main>
  )
}

export default HomePage
