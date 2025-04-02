'use client'

import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const NavBar = styled.nav<{ $hasScrolled: boolean }>`
  width: 100%;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 0.5rem 0;
  box-shadow: ${props => props.$hasScrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'};
  transition: box-shadow 0.3s ease;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

const LogoLink = styled(Link)`
  flex-shrink: 0;
  
  img {
    width: auto;
    height: 50px;

    @media (max-width: 768px) {
      height: 40px;
    }
  }
`

const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${props => props.$isOpen ? '0' : '-100%'};
    bottom: 0;
    width: 280px;
    background: white;
    padding: 2rem 1.5rem;
    gap: 1.5rem;
    box-shadow: -2px 0 8px rgba(0,0,0,0.1);
    transition: right 0.3s ease-in-out;
    z-index: 100;
  }
`

const Overlay = styled.div<{ $isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: ${props => props.$isOpen ? 1 : 0};
    visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
    transition: all 0.3s ease-in-out;
    z-index: 90;
  }
`

const MenuHeader = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #eee;
  }
`

const CloseButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    color: #666666;
    font-size: 1.5rem;
  }
`

const NavLink = styled(Link)<{ $isActive: boolean }>`
  color: ${props => props.$isActive ? '#B73C32' : '#666666'};
  font-size: 1.125rem;
  transition: color 0.3s;
  font-weight: ${props => props.$isActive ? '600' : '400'};
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #B73C32;
    transform: scaleX(${props => props.$isActive ? 1 : 0});
    transition: transform 0.3s;
  }

  &:hover {
    color: #B73C32;
    
    &:after {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 0.5rem;
  }
`

const ContactButton = styled(Link)<{ $isActive: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.$isActive ? '#A88347' : '#C19A5B'};
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: ${props => props.$isActive ? '600' : '500'};
  transition: background-color 0.3s;
  width: fit-content;

  &:hover {
    background-color: #A88347;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

interface MenuButtonProps {
  $isOpen: boolean;
}

const MenuButton = styled.button<MenuButtonProps>`
  display: none;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  width: 30px;
  height: 30px;
  position: relative;
  z-index: 60;
  
  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 24px;
    height: 2px;
    background-color: #666666;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.3s ease-in-out;

    &:first-child {
      top: ${props => props.$isOpen ? '50%' : '25%'};
      transform: ${props => props.$isOpen ? 'translate(-50%, -50%) rotate(45deg)' : 'translate(-50%, -50%)'};
    }

    &:nth-child(2) {
      top: 50%;
      transform: translate(-50%, -50%);
      opacity: ${props => props.$isOpen ? 0 : 1};
    }

    &:last-child {
      top: ${props => props.$isOpen ? '50%' : '75%'};
      transform: ${props => props.$isOpen ? 'translate(-50%, -50%) rotate(-45deg)' : 'translate(-50%, -50%)'};
    }
  }
`

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <NavBar $hasScrolled={hasScrolled}>
      <Container>
        <NavContent>
          <LogoLink href="/">
            <Image 
              src="/images/bakersinnlogo.png"
              alt="Baker's Inn Logo"
              width={146}
              height={60}
              className="object-contain"
              priority
            />
          </LogoLink>
          
          <MenuButton 
            $isOpen={isMenuOpen} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div />
            <div />
            <div />
          </MenuButton>

          <Overlay $isOpen={isMenuOpen} onClick={closeMenu} />
          
          <NavLinks $isOpen={isMenuOpen}>
            <MenuHeader>
              <h3>Menu</h3>
              <CloseButton onClick={closeMenu}>×</CloseButton>
            </MenuHeader>
            <NavLink 
              href="/" 
              $isActive={pathname === '/'}
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink 
              href="/about" 
              $isActive={pathname === '/about'}
              onClick={closeMenu}
            >
              About Us
            </NavLink>
            <NavLink 
              href="/products" 
              $isActive={pathname === '/products'}
              onClick={closeMenu}
            >
              Products
            </NavLink>
            <NavLink 
              href="/recipes" 
              $isActive={pathname === '/recipes'}
              onClick={closeMenu}
            >
              Recipes
            </NavLink>
            <NavLink 
              href="/kids-corner" 
              $isActive={pathname === '/kids-corner'}
              onClick={closeMenu}
            >
              Kid's Corner
            </NavLink>
            <ContactButton 
              href="/contact" 
              $isActive={pathname === '/contact'}
              onClick={closeMenu}
            >
              Contact Us
            </ContactButton>
          </NavLinks>
        </NavContent>
      </Container>
    </NavBar>
  );
};

export default Nav;
