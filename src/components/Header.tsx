'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import { FaFingerprint, FaUser } from 'react-icons/fa';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-transparent fixed top-0 left-0 right-0 z-50 w-full">
      <Container className="!px-0">
        <nav className="flex justify-between items-center bg-white md:bg-transparent shadow-md md:shadow-none py-2 px-5 md:py-10">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <FaFingerprint className="text-foreground w-7 h-7" />
            <span className="manrope text-xl font-semibold text-foreground cursor-pointer">
              {siteDetails.siteName}
            </span>
          </Link>

          {/* Menú escritorio */}
          <ul className="hidden md:flex space-x-6 items-center">
            <li>
              <Link href="/" className="text-foreground hover:text-foreground-accent transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/gigs" className="text-foreground hover:text-foreground-accent transition-colors">
                Gigs
              </Link>
            </li>
            <li>
              <Link href="/chat" className="text-foreground hover:text-foreground-accent transition-colors">
                Chat
              </Link>
            </li>
            <li>
              <Link href="/profile" className="flex items-center text-foreground hover:text-foreground-accent transition-colors">
                <FaUser className="w-5 h-5 mr-1" />
                Perfil
              </Link>
            </li>
          </ul>

          {/* Botón móvil */}
          <button
            onClick={toggleMenu}
            type="button"
            className="md:hidden bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <HiOutlineXMark className="w-6 h-6" /> : <HiBars3 className="w-6 h-6" />}
            <span className="sr-only">Toggle navigation</span>
          </button>
        </nav>
      </Container>

      {/* Menú móvil */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 pt-4 pb-6 px-6">
            <li>
              <Link href="/" onClick={toggleMenu} className="block text-foreground hover:text-primary">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/gigs" onClick={toggleMenu} className="block text-foreground hover:text-primary">
                Gigs
              </Link>
            </li>
            <li>
              <Link href="/chat" onClick={toggleMenu} className="block text-foreground hover:text-primary">
                Chat
              </Link>
            </li>
            <li>
              <Link href="/profile" onClick={toggleMenu} className="flex items-center block text-foreground hover:text-primary">
                <FaUser className="w-5 h-5 mr-1" />
                Perfil
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
