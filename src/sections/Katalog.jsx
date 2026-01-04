import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Gunakan Link agar lebih cepat & aman
import { categoriesData } from '../data';

const Katalog = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const formatIDR = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getPricing = (price, discount) => {
    const originalPrice = parseInt(price);
    if (!discount || discount <= 0) {
      return { hasDiscount: false, finalPrice: originalPrice };
    }
    const finalPrice = originalPrice - (originalPrice * (discount / 100));
    return { hasDiscount: true, finalPrice, discountPercent: discount };
  };

  return (
    <section id="katalog" className="bg-[#FCFAF8] py-16 md:py-24 font-['Poppins']">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20 space-y-3">
          <h2 className="text-[#E2703A] font-bold tracking-[0.4em] text-[9px] md:text-[10px] uppercase">The Collection</h2>
          <h3 className="text-3xl md:text-4xl font-light text-stone-800 font-serif italic">
            Kategori <span className="not-italic font-semibold text-stone-800">Tema Utama</span>
          </h3>
        </div>

        {/* Grid Kategori Utama */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10">
          {categoriesData.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => setSelectedCategory(cat)}
              className="group cursor-pointer relative overflow-hidden rounded-[1.5rem] md:rounded-[3rem] aspect-[3/4] md:aspect-[4/5] bg-white shadow-sm hover:shadow-xl transition-all duration-700"
            >
              <img 
                src={cat.coverImage} 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                alt={cat.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-transparent flex flex-col justify-end p-4 md:p-10 text-white">
                <span className="text-[7px] md:text-[9px] tracking-[0.2em] uppercase text-orange-300 mb-1">{cat.count} Desain</span>
                <h4 className="text-lg md:text-3xl font-serif italic mb-2 md:mb-4">{cat.name}</h4>
                <button className="w-fit border-b border-white/30 pb-1 text-[8px] md:text-[10px] font-bold tracking-widest uppercase hover:border-[#E2703A] transition-all">
                  Lihat Koleksi
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL POPUP PRODUK */}
        {selectedCategory && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 md:p-10">
            <div 
              className="absolute inset-0 bg-stone-900/95 backdrop-blur-sm" 
              onClick={() => setSelectedCategory(null)}
            ></div>

            <div className="relative bg-white w-full max-w-6xl h-[85vh] md:h-[90vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col shadow-2xl">
              
              <div className="p-6 md:p-10 border-b border-stone-100 flex justify-between items-center bg-white sticky top-0 z-10">
                <div>
                  <h4 className="text-xl md:text-3xl font-serif italic text-stone-800">{selectedCategory.name}</h4>
                  <p className="text-stone-400 text-[9px] md:text-xs mt-1 uppercase tracking-widest">Premium Digital Invitation</p>
                </div>
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-stone-100 flex items-center justify-center text-stone-800 hover:bg-stone-900 hover:text-white transition-all shadow-sm"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 md:p-10 bg-[#FCFAF8]">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                  {selectedCategory.products.map((product) => {
                    const pricing = getPricing(product.price, product.discount);
                    
                    return (
                      <div key={product.id} className="group bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-md transition-all relative flex flex-col">
                        
                        {pricing.hasDiscount && (
                          <div className="absolute top-3 left-3 z-10 bg-[#E2703A] text-white text-[9px] md:text-[11px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                            <i className="ri-fire-fill"></i>
                            PROMO {pricing.discountPercent}%
                          </div>
                        )}

                        <div className="aspect-[4/5] overflow-hidden relative">
                          <img 
                            src={product.img} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                            alt={product.title} 
                          />
                        </div>

                        <div className="p-4 md:p-6 flex flex-col flex-1">
                          <div className="mb-4">
                            <h5 className="font-semibold text-stone-800 text-xs md:text-base mb-1 truncate">
                              {product.title}
                            </h5>
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-[#E2703A] font-bold text-sm md:text-lg">
                                {formatIDR(pricing.finalPrice)}
                              </span>
                              {pricing.hasDiscount && (
                                <span className="text-stone-400 line-through text-[10px] md:text-xs">
                                  {formatIDR(product.price)}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">
                            <a 
                              href={product.link} 
                              target="_blank" 
                              rel="noreferrer"
                              className="text-center border border-stone-200 text-stone-600 py-2.5 rounded-xl text-[9px] md:text-[11px] font-bold tracking-widest uppercase hover:bg-stone-50 transition-all"
                            >
                              Live Demo
                            </a>
                            {/* PERBAIKAN: Menggunakan Link ke internal route /order */}
                            <Link 
                              to={`/order?theme=${encodeURIComponent(product.title)}`}
                              className="text-center bg-stone-900 text-white py-2.5 rounded-xl text-[9px] md:text-[11px] font-bold tracking-widest uppercase hover:bg-[#E2703A] transition-all shadow-sm"
                            >
                              Order Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Katalog;