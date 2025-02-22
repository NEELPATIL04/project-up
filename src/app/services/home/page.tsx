'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Contact from '../contact/page';
import Services from '../services/page';
import VideoBackground from './../videosection';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 80, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <VideoBackground>
      <main className="relative w-full">
        {/* Navbar */}
        <nav className="fixed top-0 z-50 w-full backdrop-blur-lg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="text-2xl font-bold text-white">WEBDRIFT</div>

              {/* Desktop Menu */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-8">
                  <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white">Home</button>
                  <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white">Services</button>
                  <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white">Contact</button>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-black/90 px-4 pb-3 pt-2">
              <button onClick={() => scrollToSection('home')} className="block py-2 text-gray-300 hover:text-white">Home</button>
              <button onClick={() => scrollToSection('services')} className="block py-2 text-gray-300 hover:text-white">Services</button>
              <button onClick={() => scrollToSection('contact')} className="block py-2 text-gray-300 hover:text-white">Contact</button>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <div id="home" className="relative flex min-h-screen items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">Welcome to Our World</h1>
            <p className="mb-6 max-w-2xl text-lg text-gray-300">
              Experience the future of digital innovation. We create stunning experiences that captivate and inspire.
            </p>
            <button onClick={() => scrollToSection('services')} className="rounded-lg bg-white px-6 py-3 text-black font-semibold hover:bg-gray-200">
              Explore Services
            </button>
          </div>
        </div>

        {/* Services Section */}
        <Services />

        {/* Contact Section */}
        <Contact />
      </main>
    </VideoBackground>
  );
}