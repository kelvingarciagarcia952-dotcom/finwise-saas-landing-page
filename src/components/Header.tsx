// src/components/Header.tsx
'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import { FaUser } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Gigs',   href: '/gigs' },
    { label: 'Chat',   href: '/chat' },
    { label: 'Perfil', href: '/profile', icon: <FaUser className="w-5 h-5 mr-1" /> },
  ];

  const linkBase = 'transition-colors';
  const desktopLink = (href: string) =>
    `${linkBase} ${
      path === href
        ? 'text-black font-semibold'
        : 'text-black hover:text-gray-700'
    }`;
  const mobileLink = (href: string) =>
    `block ${
      path === href
        ? 'text-black font-semibold'
        : 'text-black hover:text-gray-700'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-md">
      <Container className="!px-0">
        <nav className="flex justify-between items-center py-4 px-5">
          {/* Logo Kellgreat (versión blanca) */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo-kellgreat-white.svg"
              alt={siteDetails.siteName}
              className="h-12 w-auto filter invert"
            />
          </Link>

          {/* Menú de escritorio */}
          <ul className="hidden md:flex space-x-6 items-center">
            {menuItems.map(item => (
              <li key={item.href}>
                <Link href={item.href} className={desktopLink(item.href)}>
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Botón menú móvil */}
          <button
            onClick={toggleMenu}
            className="md:hidden bg-white text-black rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <HiOutlineXMark className="w-6 h-6" />
            ) : (
              <HiBars3 className="w-6 h-6" />
            )}
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
            {menuItems.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={toggleMenu}
                  className={mobileLink(item.href)}
                >
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
