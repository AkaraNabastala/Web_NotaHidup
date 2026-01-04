import React, { useState, useEffect } from 'react';
import { featureData } from '../data';

const Features = () => {
  // State untuk menyimpan fitur yang dipilih (untuk Modal)
  const [selectedFeature, setSelectedFeature] = useState(null);

  // useEffect untuk menangani Scroll Lock (Mencegah body scroll saat modal buka)
  // Ini memperbaiki error ESLint "value cannot be modified"
  useEffect(() => {
    if (selectedFeature) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function untuk mengembalikan scroll jika komponen di-unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedFeature]);

  const openModal = (feature) => {
    setSelectedFeature(feature);
  };

  const closeModal = () => {
    setSelectedFeature(null);
  };

  return (
    <section id="features" className="bg-white py-24 md:py-40 font-['Poppins'] overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section: Design Asimetris & Elegan */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24 md:mb-40 items-center">
          {/* Sisi Kiri: Judul Utama */}
          <div className="md:col-span-8 space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#E2703A]"></span>
              <h2 className="text-[#E2703A] font-bold tracking-[0.4em] text-[10px] uppercase">
                Fitur Eksklusif
              </h2>
            </div>
            <h3 className="text-4xl md:text-7xl font-extralight text-stone-900 leading-[1.1] tracking-tight">
              Lebih dari sekadar informasi, ini adalah <br className="hidden md:block" />
              <span className="italic font-serif text-[#E2703A] font-normal">sebuah perayaan.</span>
            </h3>
          </div>

          {/* Sisi Kanan: Deskripsi Penyeimbang */}
          <div className="md:col-span-4 self-end">
            <div className="border-l-2 border-stone-100 pl-6 py-2">
              <p className="text-stone-400 text-sm md:text-base font-light leading-relaxed italic">
                "Kami merancang setiap interaksi digital untuk menciptakan kesan mendalam bagi tamu undangan Anda."
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Storytelling Layout (List Fitur) */}
        <div className="space-y-32 md:space-y-48">
          {featureData.map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
            >
              {/* Image Side with Floating Element */}
              <div className="w-full md:w-3/5 relative group">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl md:rounded-[3rem] shadow-2xl transition-all duration-700">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                </div>
                {/* Floating Icon Card */}
                <div className={`absolute -bottom-6 ${index % 2 === 1 ? '-left-6' : '-right-6'} bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block animate-bounce-slow`}>
                  <div className="w-12 h-12 bg-[#E2703A] rounded-xl flex items-center justify-center text-white">
                    <i className={`${item.icon} text-2xl`}></i>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-2/5 space-y-6 text-center md:text-left">
                <span className="font-mono text-[10px] text-stone-300 tracking-[0.5em] uppercase">Feature — {index + 1}</span>
                <h4 className="text-3xl md:text-4xl font-serif italic text-stone-800">{item.title}</h4>
                <p className="text-stone-500 text-sm md:text-base leading-relaxed font-light">
                  {item.desc}
                </p>
                <div className={`flex justify-center md:justify-start pt-4`}>
                  <button 
                    onClick={() => openModal(item)}
                    className="flex items-center gap-4 group text-[10px] font-bold tracking-[0.3em] uppercase text-stone-800 hover:text-[#E2703A] transition-all"
                  >
                    Explore Details
                    <span className="w-8 h-[1px] bg-[#E2703A] group-hover:w-16 transition-all duration-500"></span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL POP-UP --- */}
      {selectedFeature && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center px-4 overflow-hidden">
          {/* Backdrop (Latar Belakang Gelap) */}
          <div 
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-md transition-opacity duration-300"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="bg-white w-full max-w-xl rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 animate-modal-in">
            {/* Tombol Close */}
            <button 
              onClick={closeModal}
              className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center rounded-full bg-stone-50 text-stone-400 hover:bg-stone-900 hover:text-white transition-all z-20"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
            
            <div className="p-10 md:p-14">
              <div className="w-16 h-16 bg-[#E2703A]/10 rounded-2xl flex items-center justify-center text-[#E2703A] text-3xl mb-8">
                <i className={selectedFeature.icon}></i>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-serif italic text-stone-900 mb-6">
                {selectedFeature.title}
              </h3>
              
              <p className="text-stone-500 leading-relaxed font-light text-sm md:text-lg mb-10">
                {/* Menggunakan detailDesc jika ada di data.js, jika tidak kembali ke desc */}
                {selectedFeature.detailDesc || selectedFeature.desc}
              </p>
              
              <button 
                onClick={closeModal}
                className="w-full bg-stone-900 text-white py-5 rounded-2xl text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#E2703A] transition-all shadow-xl shadow-stone-200"
              >
                Kembali ke Halaman
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;