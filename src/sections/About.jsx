import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-24 md:py-32 font-['Poppins']">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Sisi Kiri: Storytelling */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-[#E2703A] font-bold tracking-[0.4em] text-[10px] uppercase">Our Philosophy</h2>
              <h3 className="text-4xl md:text-5xl font-light text-stone-900 leading-tight">
                Lebih dari sekadar <br />
                <span className="font-serif italic text-[#E2703A]">Undangan Digital.</span>
              </h3>
            </div>
            
            <p className="text-stone-500 text-sm md:text-base font-light leading-relaxed">
              Kami percaya bahwa setiap pernikahan memiliki jiwa dan cerita yang unik. **Nota Hidup** hadir untuk memastikan pesan kebahagiaan Anda tersampaikan dengan elegan, profesional, dan berkesan bagi setiap tamu yang menerimanya.
            </p>

            {/* Stats & Quote yang dipindahkan ke sini */}
            <div className="pt-10 flex flex-wrap gap-12 items-center justify-start border-t border-stone-50">
              <div className="flex gap-12">
                <div className="space-y-1">
                  <p className="text-2xl md:text-3xl font-semibold text-stone-800">500+</p>
                  <p className="text-[9px] tracking-[0.2em] text-stone-400 uppercase font-bold">Klien Senang</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl md:text-3xl font-semibold text-stone-800">50+</p>
                  <p className="text-[9px] tracking-[0.2em] text-stone-400 uppercase font-bold">Desain Eksklusif</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Image & Quote */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000" 
                alt="Our Studio" 
                className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Quote Box */}
            <div className="absolute -bottom-10 -left-10 md:left-auto md:-right-10 bg-white p-8 rounded-3xl shadow-xl max-w-[280px] border border-stone-50 z-20">
              <i className="ri-double-quotes-l text-3xl text-[#E2703A]/20 block mb-4"></i>
              <p className="text-stone-600 text-xs font-light leading-relaxed italic italic font-serif">
                "Setiap undangan menceritakan kisah yang berbeda, kami membantu merangkainya menjadi abadi."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;