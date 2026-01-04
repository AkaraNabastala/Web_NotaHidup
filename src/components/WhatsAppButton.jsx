import React from 'react';
import { useLocation } from 'react-router-dom';

const WhatsAppButton = () => {
  const location = useLocation();
  const waNumber = "6282132972773"; 
  const message = "Halo Admin Nota Hidup, saya butuh bantuan untuk memilih tema undangan.";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

  // Sembunyikan di halaman order
  if (location.pathname === '/order') return null;

  return (
    <div className="fixed bottom-6 right-4 md:right-10 md:bottom-10 z-[90] font-sans">
      
      <a 
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center group"
      >
        {/* --- TAMPILAN MOBILE: PILL DESIGN (Bar Melayang) --- */}
        <div className="flex md:hidden items-center bg-white/90 backdrop-blur-md pl-2 pr-5 py-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-stone-100 animate-fade-in-up">
          {/* Ikon Bulat Kecil dengan Notifikasi */}
          <div className="relative">
            <div className="w-10 h-10 bg-[#E2703A] rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-200">
              <i className="ri-whatsapp-line text-xl"></i>
            </div>
            {/* Dot Notifikasi Berdenyut */}
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full animate-pulse"></span>
          </div>
          
          {/* Teks Pendek di Samping Ikon */}
          <div className="ml-3 flex flex-col">
            <span className="text-[7px] font-bold text-[#E2703A] uppercase tracking-widest leading-none">Online</span>
            <span className="text-[11px] font-bold text-stone-800 leading-tight">Tanya Admin</span>
          </div>
        </div>

        {/* --- TAMPILAN DESKTOP: CLASSIC ROUND DESIGN --- */}
        <div className="hidden md:flex items-center group">
          {/* Label yang muncul saat hover di desktop */}
          <div className="absolute right-full mr-4 bg-white px-5 py-2.5 rounded-2xl shadow-xl border border-stone-50 opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
            <p className="text-[9px] font-bold text-[#E2703A] uppercase tracking-[0.2em] mb-0.5">Ready to Help</p>
            <p className="text-xs font-semibold text-stone-800 italic">Konsultasi via WhatsApp</p>
          </div>

          {/* Tombol Bulat Desktop */}
          <div className="relative">
            <span className="absolute inset-0 rounded-full bg-[#E2703A]/20 animate-ping"></span>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-stone-50 group-hover:scale-110 transition-transform duration-500">
              <div className="w-12 h-12 bg-gradient-to-tr from-[#E2703A] to-[#ff8c52] rounded-full flex items-center justify-center text-white">
                <i className="ri-whatsapp-line text-3xl"></i>
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* Style tambahan untuk animasi fade-in mobile (opsional) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}} />
    </div>
  );
};

export default WhatsAppButton;