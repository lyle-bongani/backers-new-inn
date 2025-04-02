'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', sans-serif;
  }
`

// Ensure consistent class name generation between server and client
export const generateClassName = (componentId: string) => {
  return `sc-${componentId}`
} 