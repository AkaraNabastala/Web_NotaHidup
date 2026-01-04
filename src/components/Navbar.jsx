import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from './assets/logo.png'

const navLinks = [
    { href: "/#hero", label: "Beranda", id: "hero" },
    { href: "/#about", label: "Tentang", id: "about" },
    { href: "/#features", label: "Fitur", id: "features" },
    { href: "/#katalog", label: "Katalog", id: "katalog" },
    { href: "/#order", label: "Order", id: "order" },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();
    const isOrderPage = location.pathname === '/order';

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Logika Sembunyi/Tampil Navbar Desktop saat scroll
            if (currentScrollY <= 80) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY) {
                setIsVisible(false); // Scroll ke bawah: sembunyi
            } else {
                setIsVisible(true); // Scroll ke atas: muncul
            }
            setLastScrollY(currentScrollY);

            // Logika Scroll Spy (Aktifkan indikator menu)
            if (!isOrderPage) {
                const sections = document.querySelectorAll('section[id]');
                let current = 'hero';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop - 150;
                    if (currentScrollY >= sectionTop) {
                        current = section.getAttribute('id');
                    }
                });
                setActiveSection(current);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, isOrderPage]);

    const handleLinkClick = (id) => {
        setActiveSection(id);
        if (!isOrderPage) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    // Class animasi untuk Desktop Navbar
    const desktopTransform = isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0';

    return (
        <>
            {/* --- MOBILE TOP HEADER (TETAP DIAM / FIXED) --- */}
            <header className="md:hidden fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-sm">
                <div className="flex items-center justify-between px-6 py-3">
                    <Link to="/" className="flex items-center gap-3">
                        <img 
                            src={logo}
                            alt="Logo Nota Hidup" 
                            className="w-9 h-9 object-contain" 
                        />
                        <div className="flex flex-col">
                            <span className="font-bold text-base tracking-tight uppercase leading-none">
                                <span className="text-[#E2703A]">nota</span>
                                <span className="text-stone-800">hidup</span>
                            </span>
                            <span className="text-[7px] tracking-[0.3em] uppercase text-stone-400 font-bold mt-1">
                                Digital Invitation
                            </span>
                        </div>
                    </Link>
                    <div className="w-2 h-2 bg-[#E2703A] rounded-full animate-pulse"></div>
                </div>
            </header>

            {/* --- DESKTOP NAVBAR (BISA SEMBUNYI / SHOW ON SCROLL) --- */}
            <header className={`hidden md:flex fixed top-0 left-0 right-0 z-[100] justify-center pt-8 pointer-events-none 
                               transition-all duration-500 ease-in-out ${desktopTransform}`}>
                
                {/* Desktop Logo */}
                <Link to="/" className="absolute top-10 left-12 lg:left-24 flex items-center gap-3 pointer-events-auto group">
                    <div className="w-12 h-12 flex-shrink-0">
                        <img 
                            src={logo} 
                            alt="Logo Nota Hidup" 
                            className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300" 
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-xl tracking-tight uppercase leading-none">
                            <span className="text-[#E2703A]">nota</span>
                            <span className="text-stone-800">hidup</span>
                        </span>
                        <span className="text-[8px] tracking-[0.4em] uppercase text-stone-400 font-bold mt-1">
                            Digital Invitation
                        </span>
                    </div>
                </Link>
                
                {/* Menu Capsule */}
                <div className="w-full max-w-xl p-2 rounded-full bg-white/80 backdrop-blur-xl shadow-2xl border border-stone-100 pointer-events-auto">
                    <nav>
                        <ul className="flex items-center justify-between gap-1">
                            {navLinks.map((link) => (
                                <li key={link.id} className="flex-1">
                                    <Link 
                                        to={link.href}
                                        onClick={() => handleLinkClick(link.id)}
                                        className={`
                                            block text-center text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-2.5 rounded-full transition-all duration-300
                                            ${activeSection === link.id 
                                                ? 'bg-stone-900 text-white shadow-lg' 
                                                : 'text-stone-500 hover:text-stone-900 hover:bg-stone-50'}
                                        `}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                
                {/* Contact Action */}
                <a
                    href="https://wa.me/6282132972773"
                    className="hidden lg:inline-flex items-center bg-stone-900 text-white hover:bg-[#E2703A] px-6 py-2.5 rounded-full font-bold text-[10px] tracking-widest transition-all absolute top-10 right-12 lg:right-24 pointer-events-auto shadow-xl"
                >
                    WHATSAPP <i className="ri-whatsapp-line ml-2"></i>
                </a>
            </header>
            
            {/* --- MOBILE BOTTOM FLOATING BAR --- */}
            <header className="md:hidden fixed bottom-6 left-4 right-4 z-[100] bg-stone-900/95 backdrop-blur-lg rounded-[2rem] border border-stone-800 shadow-2xl py-3 px-2">
                <nav>
                    <ul className="flex items-center justify-around">
                        {navLinks.map((link) => (
                            <li key={`mobile-${link.id}`}>
                                <Link 
                                    to={link.href}
                                    onClick={() => handleLinkClick(link.id)}
                                    className={`
                                        flex flex-col items-center justify-center p-2 rounded-xl transition-all
                                        ${activeSection === link.id ? 'text-[#E2703A]' : 'text-stone-500'}
                                    `}
                                >
                                    <i className={`${
                                        link.id === 'hero' ? 'ri-home-5-line' : 
                                        link.id === 'about' ? 'ri-user-heart-line' : 
                                        link.id === 'features' ? 'ri-sparkling-line' : 
                                        link.id === 'katalog' ? 'ri-booklet-line' : 'ri-shopping-bag-3-line'} text-xl`}></i>
                                    <span className="text-[8px] font-bold uppercase tracking-tighter mt-1">{link.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
