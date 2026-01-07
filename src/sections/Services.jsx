import React, { useState, useEffect } from 'react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedService]);

  const serviceData = [
    {
      id: "01",
      icon: "ri-quill-pen-line",
      title: "Limitless Refinement",
      shortDesc: "Kebebasan revisi tanpa batasan jumlah untuk hasil sempurna.",
      fullDesc: "Kami di Nota Hidup mengutamakan kepuasan batin Anda. Anda mendapatkan hak revisi tanpa batas jumlah hingga setiap elemen visual—mulai dari tipografi hingga palet warna—benar-benar selaras dengan impian Anda.",
    },
    {
      id: "02",
      icon: "ri-flashlight-line",
      title: "Priority Delivery",
      shortDesc: "Jalur ekspres untuk pengerjaan dalam hitungan jam.",
      fullDesc: "Waktu Anda sangat berharga. Nota Hidup menghapus antrean panjang dengan jalur prioritas khusus (Express Lane), memastikan karya digital Anda siap disebar dalam hitungan jam.",
    },
    {
      id: "03",
      icon: "ri-vip-diamond-line",
      title: "All-In Premium",
      shortDesc: "Seluruh fitur eksklusif terbuka tanpa biaya tersembunyi.",
      fullDesc: "Transparansi adalah komitmen kami. RSVP otomatis, integrasi Maps, galeri musik sinematik, hingga fitur kado digital sudah aktif sejak awal dalam satu harga yang jujur.",
    },
    {
      id: "04",
      icon: "ri-user-heart-line",
      title: "Concierge Support",
      shortDesc: "Bantuan input data tamu & panduan lengkap sampai bisa.",
      fullDesc: "Layanan personal dari hati. Tim Nota Hidup mendampingi proses input nomor tamu dan memberikan panduan teknis langkah demi langkah agar Anda merasa tenang.",
    }
  ];

  return (
    <section id="services" className="bg-[#FAF9F6] py-20 md:py-44 font-['Poppins'] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-32 gap-8">
          <div className="max-w-xl">
            <h2 className="text-[#E2703A] font-bold tracking-[0.5em] text-[10px] uppercase mb-4 flex items-center gap-4">
              <span className="w-10 h-[1px] bg-[#E2703A]"></span> Luxury Care
            </h2>
            <h3 className="text-4xl md:text-7xl font-light text-stone-900 leading-[1.1] tracking-tight">
              The Signature <br />
              <span className="italic font-serif text-[#E2703A]">Experience.</span>
            </h3>
          </div>
          <p className="hidden md:block text-stone-400 text-sm md:text-base font-light max-w-[250px] leading-relaxed italic border-l border-stone-200 pl-6">
            "Memberikan lebih dari sekadar desain, kami menciptakan kenyamanan."
          </p>
        </div>

        {/* Layout Mobile: Horizontal Scroll | Layout Desktop: Asymmetric Grid */}
        <div className="flex md:grid md:grid-cols-2 overflow-x-auto md:overflow-visible pb-10 md:pb-0 gap-6 md:gap-x-24 md:gap-y-40 snap-x snap-mandatory no-scrollbar">
          {serviceData.map((item, index) => (
            <div 
              key={index}
              onClick={() => setSelectedService(item)}
              className={`
                min-w-[85vw] md:min-w-0 snap-center
                group relative cursor-pointer transition-all duration-700 
                ${index % 2 === 1 ? 'md:mt-32' : ''}
              `}
            >
              <div className="relative bg-white md:bg-transparent p-8 md:p-0 rounded-[2.5rem] md:rounded-none shadow-xl shadow-stone-200/50 md:shadow-none border border-stone-100 md:border-none">
                {/* Background Numbering */}
                <span className="absolute -top-10 -left-2 md:-top-16 md:-left-4 text-[7rem] md:text-[14rem] font-serif italic text-stone-100 group-hover:text-orange-100 transition-colors duration-700 pointer-events-none z-0 select-none">
                  {item.id}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#FCFAF8] md:bg-white shadow-sm flex items-center justify-center text-[#E2703A] mb-8 group-hover:bg-[#E2703A] group-hover:text-white transition-all duration-500 border border-stone-50 md:border-none">
                    <i className={`${item.icon} text-2xl`}></i>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-2xl md:text-4xl font-serif italic text-stone-800 group-hover:text-[#E2703A] md:group-hover:translate-x-2 transition-all duration-500">
                      {item.title}
                    </h4>
                    <p className="text-stone-400 text-sm md:text-lg font-light leading-relaxed max-w-sm">
                      {item.shortDesc}
                    </p>
                    
                    <div className="flex items-center gap-4 pt-4">
                      <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-stone-900 group-hover:text-[#E2703A] transition-colors">Discover</span>
                      <div className="w-8 md:w-12 h-[1px] bg-stone-200 group-hover:bg-[#E2703A] group-hover:w-16 transition-all duration-700"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- LUXURY MODAL POP-UP --- */}
        {selectedService && (
          <div className="fixed inset-0 z-[999] flex items-end md:items-center justify-center px-0 md:px-4">
            <div 
              className="absolute inset-0 bg-stone-900/40 backdrop-blur-md animate-fade-in" 
              onClick={() => setSelectedService(null)}
            ></div>
            
            <div className="bg-white w-full max-w-xl rounded-t-[3rem] md:rounded-[3rem] overflow-hidden relative z-10 shadow-2xl animate-modal-up">
              <div className="h-1.5 w-12 bg-stone-200 rounded-full mx-auto mt-4 mb-2 md:hidden"></div>
              
              <div className="p-10 md:p-16">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 bg-[#FCFAF8] rounded-2xl flex items-center justify-center text-[#E2703A] text-3xl border border-stone-100">
                    <i className={selectedService.icon}></i>
                  </div>
                  <button 
                    onClick={() => setSelectedService(null)} 
                    className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 hover:text-stone-900 transition-all"
                  >
                    <i className="ri-close-line text-2xl"></i>
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-[#E2703A] text-[10px] font-bold tracking-[0.4em] uppercase mb-2">Service Excellence</p>
                    <h3 className="text-3xl md:text-5xl font-serif italic text-stone-900 leading-tight">
                      {selectedService.title}
                    </h3>
                  </div>
                  <div className="w-12 h-[1px] bg-[#E2703A]"></div>
                  <p className="text-stone-500 leading-relaxed font-light text-base md:text-lg">
                    {selectedService.fullDesc}
                  </p>
                </div>

                <div className="mt-12 flex flex-col items-center gap-6">
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="w-full py-5 bg-stone-900 text-white rounded-2xl text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-[#E2703A] transition-all shadow-xl shadow-stone-200"
                  >
                    Understand
                  </button>
                  <p className="text-[9px] tracking-[0.5em] uppercase font-bold text-stone-300">
                     <span className="text-[#E2703A]">Nota</span> Hidup Signature
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes modal-up {
          from { opacity: 0; transform: translateY(100px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-modal-up { animation: modal-up 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
      `}} />
    </section>
  );
};

export default Services;