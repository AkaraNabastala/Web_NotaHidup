import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#FCFAF8] font-['Poppins'] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-40">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-[#E2703A] font-bold tracking-[0.4em] text-[10px] uppercase">Ready to Order</h2>
            <h3 className="text-4xl md:text-7xl font-extralight text-stone-900 leading-[1.1]">
              Mulai buat <br className="hidden md:block" />
              <span className="font-serif italic text-[#E2703A] font-normal">momen indah</span> Anda.
            </h3>
            <p className="text-stone-500 text-xs md:text-base font-light leading-relaxed max-w-md mx-auto lg:mx-0">
              Lengkapi data Anda melalui formulir digital kami untuk pemesanan yang lebih cepat dan terorganisir.
            </p>
          </div>

          <div className="lg:w-1/2 w-full max-w-md">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-stone-200/50 border border-stone-100 text-center space-y-6">
              <div className="w-16 h-16 bg-[#E2703A]/10 rounded-full flex items-center justify-center mx-auto text-[#E2703A]">
                <i className="ri-file-list-3-line text-3xl"></i>
              </div>
              <h4 className="text-xl font-serif italic text-stone-800">Formulir Pesanan</h4>
              
              {/* BUTTON REDIRECT KE HALAMAN ORDERFORM */}
              <button 
                onClick={() => navigate('/order')}
                className="w-full bg-[#E2703A] text-white py-5 rounded-2xl text-[10px] font-bold tracking-[0.3em] uppercase shadow-lg hover:bg-stone-900 transition-all active:scale-95"
              >
                Pesan Sekarang
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Order;