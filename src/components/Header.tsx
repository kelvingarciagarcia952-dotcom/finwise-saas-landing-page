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
        ? 'text-white font-semibold shadow-lg'
        : 'text-white hover:text-gray-200'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full glass-effect shadow-2xl">
      <Container className="!px-0">
        <nav className="flex justify-between items-center py-4 px-5">
          {/* Logo Kellgreat colorido estilo Instagram */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo-kellgreat-fiverr.svg"
              alt={siteDetails.siteName}
              className="h-12 w-auto"
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
            className="md:hidden bg-green-500 text-white hover:bg-green-600 transition-all duration-200 rounded-full w-12 h-12 flex items-center justify-center focus:outline-none shadow-lg"
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

      {/* Overlay para cerrar sidebar */}
      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-40 md:hidden"
          onClick={toggleMenu}
        />
      </Transition>

      {/* Sidebar lateral */}
      <Transition
        show={isOpen}
        enter="transition-transform duration-300 ease-out"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform duration-300 ease-in"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-green-500 to-green-600">
            <img
              src="/logo-kellgreat-fiverr.svg"
              alt={siteDetails.siteName}
              className="h-10 w-auto"
            />
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-100 transition-colors"
            >
              <HiOutlineXMark className="w-7 h-7" />
            </button>
          </div>
          
          <nav className="px-6 py-8 bg-white">
            <ul className="space-y-4">
              {menuItems.map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                      path === item.href
                        ? 'bg-green-500 text-white font-semibold shadow-lg'
                        : 'text-green-600 hover:bg-green-50 hover:text-green-700'
                    }`}
                  >
                    <span className="mr-4 text-xl text-green-500">
                      {item.icon || '•'}
                    </span>
                    <span className="text-lg font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
