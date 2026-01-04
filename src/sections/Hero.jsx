import React from 'react';

const Hero = () => {
  return (
    // Tambahkan pt-24 untuk mobile (karena nav di bawah, tapi agar konsisten) 
    // dan md:pt-48 untuk desktop agar tidak tertabrak navbar yang melayang
    <section id="hero" className="bg-[#FCFAF8] font-['Poppins'] overflow-hidden pt-20 md:pt-38">
      <div className="max-w-6xl mx-auto px-6 pb-16 md:pb-40 flex flex-col md:flex-row items-center justify-between">
        
        {/* Konten Teks */}
        <div className="md:w-1/2 space-y-6 md:space-y-8 z-10 text-center md:text-left">
          <div className="space-y-3">
            <h2 className="text-[#E2703A] font-medium tracking-[0.3em] text-[9px] md:text-xs uppercase">
              Digital Invitation Service
            </h2>
            <h1 className="text-3xl md:text-7xl font-extralight text-stone-800 leading-[1.2] md:leading-[1.1]">
              Mencatat <span className="font-semibold text-stone-900">Kebahagiaan</span> <br />
              <span className="italic font-serif text-[#E2703A]">merangkai</span> setiap momen.
            </h1>
          </div>

          <p className="text-stone-500 text-xs md:text-base leading-relaxed max-w-md font-light mx-auto md:mx-0">
            Solusi undangan digital premium yang menggabungkan estetika visual dengan kemudahan teknologi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <a href="#katalog" className="w-full sm:w-auto bg-[#E2703A] text-white px-10 py-4 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-stone-900 transition-all shadow-lg active:scale-95 text-center">
              Mulai Eksplorasi
            </a>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-8 h-[1px] bg-stone-300 group-hover:w-12 transition-all duration-300"></div>
              <span className="text-[9px] font-bold tracking-widest text-stone-400 group-hover:text-stone-800 uppercase">The Collection</span>
            </div>
          </div>
        </div>

        {/* Visual Mockup */}
        <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center md:justify-end">
          <div className="w-52 h-[380px] md:w-72 md:h-[520px] bg-white shadow-2xl rounded-t-full border border-stone-50 p-3 relative z-10">
            <div className="w-full h-full rounded-t-full overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover grayscale-[10%]"
                alt="Wedding Decor"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-8 w-full text-center px-4">
                <p className="font-serif italic text-stone-800 text-xl md:text-2xl">The Wedding of</p>
                <p className="text-[8px] tracking-[0.3em] text-stone-500 mt-1 uppercase">Arkan & Nadin</p>
              </div>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#E2703A]/5 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;