import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { featureData } from '../data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  // Mencegah scroll saat modal terbuka
  useEffect(() => {
    if (selectedFeature) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedFeature]);

  return (
    <section id="features" className="bg-white py-24 md:py-32 font-['Poppins'] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section: Minimalis & Elegan */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-stone-100 pb-10">
          <div>
            <h2 className="text-[#E2703A] font-bold tracking-[0.5em] text-[10px] uppercase mb-3">Core Features</h2>
            <h3 className="text-3xl md:text-5xl font-serif italic text-stone-900 leading-tight">
              Elegansi dalam <span className="text-[#E2703A]">Detail.</span>
            </h3>
          </div>
          
          {/* Custom Navigation Buttons */}
          <div className="flex gap-4">
            <button className="f-prev w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-[#E2703A] hover:text-white transition-all duration-500 shadow-sm">
              <i className="ri-arrow-left-s-line text-xl"></i>
            </button>
            <button className="f-next w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-[#E2703A] hover:text-white transition-all duration-500 shadow-sm">
              <i className="ri-arrow-right-s-line text-xl"></i>
            </button>
          </div>
        </div>

        {/* SWIPER: Image Left, Text Right Layout */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{ nextEl: '.f-next', prevEl: '.f-prev' }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            1024: { slidesPerView: 1.2, spaceBetween: 40 }
          }}
          className="!overflow-visible"
        >
          {featureData.map((item, index) => (
            <SwiperSlide key={index}>
              <div 
                className="bg-[#FCFAF8] rounded-[2.5rem] p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-14 group cursor-pointer border border-stone-100/50 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-700"
                onClick={() => setSelectedFeature(item)}
              >
                {/* Left Side: Image (Portrait/Square) */}
                <div className="w-full md:w-[45%] aspect-square overflow-hidden rounded-[2rem] shadow-md">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                  />
                </div>

                {/* Right Side: Text Description */}
                <div className="w-full md:w-[55%] space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-[#E2703A]"></span>
                    <span className="text-[10px] font-bold tracking-[0.4em] text-[#E2703A] uppercase">
                      Insight 0{index + 1}
                    </span>
                  </div>
                  <h4 className="text-3xl md:text-4xl font-serif italic text-stone-800 tracking-tight leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-stone-500 text-sm md:text-base font-light leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all duration-500">
                      <i className="ri-add-line"></i>
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-stone-900">Explore Depth</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* --- LUXURY MODAL POP-UP --- */}
      {selectedFeature && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center px-4 md:px-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-md transition-opacity duration-500" 
            onClick={() => setSelectedFeature(null)}
          ></div>
          
          {/* Modal Container */}
          <div className="bg-white w-full max-w-5xl rounded-[3rem] overflow-hidden relative z-10 shadow-2xl animate-modal-in flex flex-col md:flex-row h-[90vh] md:h-[650px]">
            
            {/* Modal Left: Branding & Cinematic Image */}
            <div className="w-full md:w-1/2 h-56 md:h-auto overflow-hidden relative">
              <img src={selectedFeature.image} className="w-full h-full object-cover" alt={selectedFeature.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-black/20"></div>
              
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 border border-white/20">
                  <i className={`${selectedFeature.icon} text-2xl text-white`}></i>
                </div>
                {/* Branding: Nota (Orange) Hidup (White) */}
                <p className="text-[11px] tracking-[0.5em] uppercase font-bold drop-shadow-md">
                   <span className="text-[#E2703A]">Nota</span> <span className="text-white">Hidup</span>
                </p>
              </div>
            </div>

            {/* Modal Right: Detailed Content */}
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col bg-white overflow-y-auto custom-scrollbar">
              {/* Close Button */}
              <button 
                onClick={() => setSelectedFeature(null)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 hover:bg-stone-900 hover:text-white transition-all duration-300 z-20"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>

              <div className="mb-8">
                <h3 className="text-3xl md:text-5xl font-serif italic text-stone-900 mb-6 leading-tight">
                  {selectedFeature.title}
                </h3>
                <div className="w-16 h-[2px] bg-[#E2703A]"></div>
              </div>

              <div className="space-y-8">
                <p className="text-stone-500 text-sm md:text-lg font-light leading-relaxed">
                  {selectedFeature.detailDesc || selectedFeature.desc}
                </p>
                
                {/* Dynamic Signature Excellence List */}
                <div className="pt-8 border-t border-stone-100">
                  <h5 className="text-stone-900 font-bold text-[10px] uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E2703A]"></span>
                    Signature Excellence
                  </h5>
                  <ul className="grid grid-cols-1 gap-4">
                    {selectedFeature.highlights && selectedFeature.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-4 text-sm italic text-stone-500 group">
                        <i className="ri-checkbox-circle-fill text-[#E2703A] text-lg mt-[-2px]"></i>
                        <span className="leading-tight">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Back Button inside Modal */}
              <div className="mt-12 pt-8 border-t border-stone-50">
                <button 
                  onClick={() => setSelectedFeature(null)}
                  className="w-full py-5 bg-stone-900 text-white rounded-2xl text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-[#E2703A] transition-all duration-500 shadow-xl shadow-stone-100"
                >
                  Return to Exploration
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Internal CSS for Animations & Scrollbar */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes modal-in {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-modal-in { animation: modal-in 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
        .swiper-pagination-bullet { background: #E2703A !important; opacity: 0.2; }
        .swiper-pagination-bullet-active { opacity: 1 !important; width: 20px !important; border-radius: 10px !important; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E2703A; border-radius: 10px; }
      `}} />
    </section>
  );
};

export default Features;