'use client'
import React from 'react';
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Company Name */}
        <div className="text-2xl font-bold">
          <Link href="/">
            KeySpeedster
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/">
            <span className="hover:text-gray-300">Home</span>
          </Link>
          <Link href="/about">
            <span className="hover:text-gray-300">About Us</span>
          </Link>
          <Link href="/contact">
            <span className="hover:text-gray-300">Contact</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Links */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <Link href="/">
            <span className="block px-4 py-2 hover:bg-gray-700">Home</span>
          </Link>
          <Link href="/about">
            <span className="block px-4 py-2 hover:bg-gray-700">About Us</span>
          </Link>
          <Link href="/contact">
            <span className="block px-4 py-2 hover:bg-gray-700">Contact</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
