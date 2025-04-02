import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from './registry'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { GlobalStyle } from '../styled-components.config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Baker's Inn Zimbabwe",
  description: "Zimbabwe's favorite bread and confectionery manufacturer",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
};

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
          <main>{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
