import React from 'react';
import logo from './assets/logo.png'

const Footer = () => {
  const socialLinks = [
    { icon: 'ri-instagram-line', url: 'https://www.instagram.com/dicha16_/' },
    { icon: 'ri-linkedin-box-line', url: 'https://linkedin.com/in/mahardicha' },
    { icon: 'ri-youtube-line', url: 'https://www.youtube.com/@mahardicha16' },
    { icon: 'ri-github-line', url: 'https://github.com/AkaraNabastala' }
  ];

  return (
    <footer className="bg-stone-900 text-white pt-20 pb-36 md:pb-16 font-['Poppins'] selection:bg-[#E2703A]/30">
      <div className="max-w-6xl mx-auto px-8">
        
        {/* Main Grid Container */}
        <div className="flex flex-col lg:flex-row gap-16 mb-16">
          
          {/* 1. Brand Info - Full Width on Mobile, 50% on Desktop */}
          <div className="lg:w-1/2 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex-shrink-0">
                <img 
                  src={logo} 
                  alt="Logo Nota Hidup" 
                  className="w-full h-full object-contain filter drop-shadow-md"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl tracking-tight uppercase leading-none">
                  <span className="text-[#E2703A]">nota</span>
                  <span className="text-white">hidup</span>
                </span>
                <span className="text-[8px] tracking-[0.4em] uppercase text-stone-500 font-bold mt-1">
                  Digital Invitation
                </span>
              </div>
            </div>
            
            <p className="text-stone-400 text-sm leading-relaxed max-w-md font-light">
              Membantu Anda merangkai momen berharga menjadi abadi melalui undangan digital yang elegan, interaktif, dan penuh makna.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-stone-700 rounded-full flex items-center justify-center text-stone-400 hover:bg-[#E2703A] hover:text-white hover:border-[#E2703A] transition-all duration-500"
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* 2. Link Container - 2 Columns on Mobile! */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-8 md:gap-16">
            
            {/* Navigasi */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#E2703A]">Navigasi</h4>
              <ul className="space-y-4 text-stone-400 text-sm font-light">
                <li className="hover:text-white transition-colors cursor-pointer text-[13px]"><a href="#katalog">Katalog</a></li>
                <li className="hover:text-white transition-colors cursor-pointer text-[13px]"><a href="#features">Fitur</a></li>
                <li className="hover:text-white transition-colors cursor-pointer text-[13px]">Harga</li>
              </ul>
            </div>

            {/* Bantuan */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#E2703A]">Bantuan</h4>
              <ul className="space-y-4 text-stone-400 text-sm font-light">
                <li className="hover:text-white transition-colors cursor-pointer text-[13px]">Privasi</li>
                <li className="hover:text-white transition-colors cursor-pointer text-[13px]"><a href="#kontak">Kontak</a></li>
                <li className="hover:text-white transition-colors cursor-pointer text-[13px]">Syarat</li>
              </ul>
            </div>

          </div>
        </div>

        {/* --- COPYRIGHT SECTION --- */}
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <a 
            href="https://akaranabastala.github.io/porto_dicha/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 group order-2 md:order-1"
          >
            <span className="text-stone-600 text-[9px] tracking-[0.3em] uppercase group-hover:text-stone-400 transition-colors">Crafted With</span>
            <span className="text-stone-200 text-sm font-serif italic tracking-widest group-hover:scale-105 transition-all">
              Astro<span className="text-[#E2703A] not-italic font-bold font-sans tracking-tighter">phile</span>
            </span>
          </a>

          <p className="text-stone-500 text-[9px] tracking-[0.3em] uppercase order-1 md:order-2">
            © 2026 NOTA HIDUP. ALL RIGHTS RESERVED.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;