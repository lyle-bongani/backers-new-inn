'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from './registry'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { GlobalStyle } from '../styled-components.config'
import styled from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

const MainContent = styled.main`
  padding-top: 5rem; // Add padding to create space for fixed nav
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Nav />
          <MainContent>{children}</MainContent>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
