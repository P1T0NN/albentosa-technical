"use client";

// REACTJS IMPORTS
import { useState, useEffect } from "react";

// NEXTJS IMPORTS
import Image from "next/image";
import Link from "next/link";

// COMPONENTS
import { Button } from "@/components/ui/button";
import { ChooseLanguage } from "@/components/ui/header/choose-language";

interface HeaderProps {
    locale: string;
}

export const Header = ({
    locale
}: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const leftNavItems = [
        { name: 'Home', href: '/' },
        { name: 'Programs', href: '#programs' },
        { name: 'About', href: '#about' },
    ];

    const rightNavItems = [
        { name: 'Contact', href: '/contact' },
        { name: "Sponsors", href: "/sponsors" },
        { name: "FAQ", href: "/faq" },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled ? 'bg-black/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex items-center justify-between transition-all duration-300 ${
                    scrolled ? 'h-16' : 'h-20'
                }`}>
                    {/* Mobile logo and menu */}
                    <div className="flex justify-between items-center w-full md:hidden">
                        {/* Logo on left for mobile */}
                        <div>
                            <Image 
                                src="/logo/albentosa-technical-logo.png" 
                                alt="Albentosa Football School" 
                                width={scrolled ? 50 : 70} 
                                height={scrolled ? 50 : 70}
                                className="transition-all duration-300"
                            />
                        </div>
                        
                        {/* Menu button on right for mobile */}
                        <Button
                            variant="ghost"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 text-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </Button>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex flex-1 items-center justify-between">
                        {/* Left Navigation */}
                        <div className="flex space-x-8">
                            {leftNavItems.map((item) => (
                                <a key={item.name} href={item.href} className="nav-link text-white">
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        {/* Logo in center */}
                        <div className="flex items-center">
                            <Image 
                                src="/logo/albentosa-technical-logo.png" 
                                alt="Albentosa Football School" 
                                width={scrolled ? 70 : 100} 
                                height={scrolled ? 70 : 100}
                                className="transition-all duration-300"
                            />
                        </div>

                        {/* Right Navigation */}
                        <div className="flex items-center space-x-8">
                            {rightNavItems.map((item) => (
                                <a key={item.name} href={item.href} className="nav-link text-white">
                                    {item.name}
                                </a>
                            ))}
                            
                            <ChooseLanguage locale={locale} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-black">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {[...leftNavItems, ...rightNavItems].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#00ff00]/10"
                            >
                                {item.name}
                                
                            </Link>
                        ))}

                        <div className="px-3 py-2">
                            <ChooseLanguage locale={locale} />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}