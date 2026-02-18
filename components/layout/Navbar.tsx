'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Product', href: '/product' },
        { name: 'Recipes', href: '/recipes' },
        { name: 'Export', href: '/export' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 md:h-24 flex items-center ${isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10' : 'bg-gradient-to-b from-black/80 to-transparent border-b border-white/5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <div className="relative h-12 w-32 md:h-16 md:w-40">
                        <Logo className="h-full w-full" />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium transition-colors duration-300 text-white/80 hover:text-white tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button size="sm" className="bg-[#800020] hover:bg-[#5a0016] text-white border-none shadow-[0_0_15px_rgba(128,0,32,0.3)] hover:shadow-[0_0_25px_rgba(128,0,32,0.5)] transition-all duration-300">
                        Get Quote
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-white hover:text-[#C49A2C] transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-5 duration-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 font-medium tracking-wide"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="px-4 mt-2">
                        <Button className="w-full bg-[#800020] hover:bg-[#5a0016] text-white py-6 text-lg shadow-[0_0_20px_rgba(128,0,32,0.3)]">Get Quote</Button>
                    </div>
                </div>
            )}
        </nav>
    );
};
