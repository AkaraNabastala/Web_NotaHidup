import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { categoriesData, musicList } from '../data';

const InputGroup = ({ label, name, value, onChange, type = "text", placeholder, optional = false, isTextArea = false }) => (
  <div className="flex flex-col gap-1 mb-3 font-sans text-left">
    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
      {label} {optional && <span className="text-stone-300 font-normal lowercase italic">(opsional)</span>}
    </label>
    {isTextArea ? (
      <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} required={!optional} rows="2" className="w-full p-3 rounded-xl border border-stone-200 focus:border-[#E2703A] outline-none transition-all text-xs bg-stone-50/50 resize-none shadow-sm" />
    ) : (
      <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} required={!optional} className="w-full p-3 rounded-xl border border-stone-200 focus:border-[#E2703A] outline-none transition-all text-xs bg-stone-50/50 shadow-sm" />
    )}
  </div>
);

const OrderForm = () => {
  const location = useLocation();
  const audioRef = useRef(null);
  const allProducts = categoriesData?.flatMap(cat => cat.products) || [];

  const [formData, setFormData] = useState(() => {
    const params = new URLSearchParams(location.search);
    const initialTheme = params.get('theme') || (allProducts[0]?.title || '');
    return {
      temaUndangan: initialTheme,
      musik: '', namaPemesan: '', noWA: '', email: '', domain: '',
      priaNamaLengkap: '', priaPanggilan: '', priaAyah: '', priaIbu: '', priaAnakKe: '',
      wanitaNamaLengkap: '', wanitaPanggilan: '', wanitaAyah: '', wanitaIbu: '', wanitaAnakKe: '',
      tglAcara: '', waktuAcara: '', tempatAcara: '', alamatAcara: '', linkMaps: '',
      quote: '', loveStory: ''
    };
  });

  const [sosmedPria, setSosmedPria] = useState([{ platform: 'Instagram', username: '' }]);
  const [sosmedWanita, setSosmedWanita] = useState([{ platform: 'Instagram', username: '' }]);
  const [kadoDigital, setKadoDigital] = useState([{ provider: '', number: '', holder: '' }]);
  const [isPlaying, setIsPlaying] = useState(false);

  // Mengambil data produk terpilih termasuk HARGA
  const selectedThemeData = allProducts.find(p => p.title === formData.temaUndangan);
  const currentPreview = selectedThemeData ? selectedThemeData.img : '';
  const currentPrice = selectedThemeData ? selectedThemeData.price : 'Hubungi Admin';

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'musik') {
      setIsPlaying(false);
      if (audioRef.current) { audioRef.current.pause(); audioRef.current.load(); }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const sosmedPText = sosmedPria.filter(s => s.username).map(s => `  - ${s.platform}: ${s.username}`).join('%0A') || '  - Tidak ada';
    const sosmedWText = sosmedWanita.filter(s => s.username).map(s => `  - ${s.platform}: ${s.username}`).join('%0A') || '  - Tidak ada';
    const kadoText = kadoDigital.filter(k => k.number).map(k => `  - ${k.provider}: ${k.number} (a/n ${k.holder})`).join('%0A') || '  - Tidak ada';

    // KONSTRUKSI PESAN WHATSAPP YANG SUPER LENGKAP
    const msg = `*NOTA HIDUP - FORM PEMESANAN*%0A` +
                `----------------------------------------%0A` +
                `*DETAIL PRODUK*%0A` +
                `• Tema: ${formData.temaUndangan}%0A` +
                `• Harga: ${currentPrice}%0A` +
                `• Musik: ${formData.musik || 'Default'}%0A` +
                `• Custom Link: nota-hidup.com/${formData.domain || 'tanpa-custom'}%0A%0A` +
                
                `*DATA PEMESAN*%0A` +
                `• Nama: ${formData.namaPemesan}%0A` +
                `• WhatsApp: ${formData.noWA}%0A` +
                `• Email: ${formData.email}%0A%0A` +
                
                `*MEMPELAI PRIA*%0A` +
                `• Nama: ${formData.priaNamaLengkap} (${formData.priaPanggilan})%0A` +
                `• Orang Tua: Putra dari Bpk. ${formData.priaAyah} %26 Ibu ${formData.priaIbu}%0A` +
                `• Anak Ke: ${formData.priaAnakKe}%0A` +
                `• Sosmed:%0A${sosmedPText}%0A%0A` +
                
                `*MEMPELAI WANITA*%0A` +
                `• Nama: ${formData.wanitaNamaLengkap} (${formData.wanitaPanggilan})%0A` +
                `• Orang Tua: Putri dari Bpk. ${formData.wanitaAyah} %26 Ibu ${formData.wanitaIbu}%0A` +
                `• Anak Ke: ${formData.wanitaAnakKe}%0A` +
                `• Sosmed:%0A${sosmedWText}%0A%0A` +
                
                `*DETAIL ACARA*%0A` +
                `• Tanggal: ${formData.tglAcara}%0A` +
                `• Waktu: ${formData.waktuAcara}%0A` +
                `• Tempat: ${formData.tempatAcara}%0A` +
                `• Alamat: ${formData.alamatAcara}%0A` +
                `• Maps: ${formData.linkMaps || 'Tidak ada'}%0A%0A` +
                
                `*DOMPET DIGITAL / KADO*%0A` +
                `${kadoText}%0A` +
                `----------------------------------------%0A` +
                `*Harap segera diproses, Terima Kasih!*`;
    
    window.open(`https://wa.me/6282132972773?text=${msg}`, '_blank');
  };

  const getSosmedIcon = (platform) => {
    const icons = { 'Instagram': 'ri-instagram-line text-pink-500', 'TikTok': 'ri-tiktok-fill text-black', 'Facebook': 'ri-facebook-box-fill text-blue-700', 'Twitter/X': 'ri-twitter-x-fill text-stone-800', 'Youtube': 'ri-youtube-fill text-red-600' };
    return icons[platform] || 'ri-share-line text-stone-400';
  };

  const getProviderIcon = (name) => {
    const n = name?.toLowerCase() || '';
    if (n.includes('bca') || n.includes('mandiri') || n.includes('bni') || n.includes('bri') || n.includes('bsi')) return 'ri-bank-fill text-blue-700';
    if (n.includes('dana') || n.includes('ovo') || n.includes('gopay') || n.includes('shopee')) return 'ri-wallet-3-fill text-[#E2703A]';
    return 'ri-bank-card-2-line text-stone-400';
  };

  return (
    <div className="min-h-screen bg-[#FCFAF8] pt-20 pb-12 selection:bg-orange-100 relative z-[1]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* --- LEFT SIDE: PREVIEW --- */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 z-[10]">
            <div className="bg-white p-4 rounded-[2rem] shadow-xl border border-stone-100">
              <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden group">
                <img src={currentPreview} alt="Preview" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent flex flex-col justify-end p-6 text-left">
                  <span className="text-[#E2703A] text-[8px] font-bold uppercase tracking-[0.3em] mb-1">Nota Hidup Signature</span>
                  <h3 className="text-white font-serif italic text-xl">{formData.temaUndangan}</h3>
                  <p className="text-white/60 text-[10px] mt-1 font-bold tracking-widest uppercase">IDR {currentPrice}</p>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-stone-50 rounded-2xl flex items-center gap-3 border border-stone-100">
                <button type="button" onClick={() => { isPlaying ? audioRef.current.pause() : audioRef.current.play(); setIsPlaying(!isPlaying); }} className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center shadow-lg hover:bg-[#E2703A] transition-all shrink-0">
                  <i className={isPlaying ? "ri-pause-line text-lg" : "ri-play-line text-lg ml-0.5"}></i>
                </button>
                <div className="flex-1 min-w-0 text-left">
                  <p className="text-[10px] font-bold truncate text-stone-800 uppercase tracking-tight">{formData.musik || 'Pilih Lagu'}</p>
                  <p className="text-[8px] text-stone-400 font-medium tracking-widest uppercase">Nota Hidup Audio</p>
                </div>
                <audio ref={audioRef} key={formData.musik}>
                    <source src={musicList.find(m => m.title === formData.musik)?.url} type="audio/mpeg" />
                </audio>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: FORM --- */}
          <div className="lg:col-span-8 z-[5]">
            <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] shadow-xl border border-stone-100 overflow-hidden">
              <div className="bg-stone-900 py-8 px-6 text-white text-center">
                <h2 className="text-2xl font-serif italic">Formulir Pesanan</h2>
                <div className="h-1 w-12 bg-[#E2703A] mx-auto rounded-full mt-2"></div>
              </div>

              <div className="p-6 md:p-10 space-y-12">
                {/* Bagian Isi Form Tetap Sama Namun Rapikan Padding Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-stone-50 rounded-2xl border border-dashed border-stone-200 text-left">
                  <div className="flex flex-col gap-1">
                    <label className="text-[9px] font-bold uppercase text-stone-400 tracking-widest">Ganti Tema</label>
                    <select name="temaUndangan" value={formData.temaUndangan} onChange={handleChange} className="p-2.5 rounded-xl border bg-white text-xs outline-none focus:border-[#E2703A]">
                      {allProducts.map(p => <option key={p.id} value={p.title}>{p.title}</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[9px] font-bold uppercase text-stone-400 tracking-widest">Pilih Lagu</label>
                    <select name="musik" value={formData.musik} onChange={handleChange} className="p-2.5 rounded-xl border bg-white text-xs outline-none focus:border-[#E2703A]">
                      <option value="">-- Pilih Lagu --</option>
                      {musicList.map(m => <option key={m.id} value={m.title}>{m.title}</option>)}
                    </select>
                  </div>
                </div>

                {/* 1. DATA PEMESAN */}
                <section>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-5 text-stone-800 border-l-4 border-[#E2703A] pl-3 text-left">1. Data Pemesan</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                    <InputGroup label="Nama Pemesan" name="namaPemesan" value={formData.namaPemesan} onChange={handleChange} />
                    <InputGroup label="WhatsApp" name="noWA" value={formData.noWA} onChange={handleChange} type="tel" />
                    <InputGroup label="Email" name="email" value={formData.email} onChange={handleChange} type="email" />
                    <InputGroup label="Custom Link (Misal: randy-fani)" name="domain" value={formData.domain} onChange={handleChange} optional />
                  </div>
                </section>

                {/* 2. MEMPELAI PRIA */}
                <section>
                  <div className="flex flex-wrap justify-between items-center gap-2 mb-5 border-l-4 border-stone-800 pl-3">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-800 text-left">2. Mempelai Pria</h3>
                    <button type="button" onClick={() => setSosmedPria([...sosmedPria, { platform: 'Instagram', username: '' }])} className="text-[9px] font-bold text-[#E2703A] uppercase hover:underline">+ Tambah Sosmed</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                    <InputGroup label="Nama Lengkap" name="priaNamaLengkap" value={formData.priaNamaLengkap} onChange={handleChange} />
                    <InputGroup label="Nama Panggilan" name="priaPanggilan" value={formData.priaPanggilan} onChange={handleChange} />
                    <InputGroup label="Nama Ayah" name="priaAyah" value={formData.priaAyah} onChange={handleChange} />
                    <InputGroup label="Nama Ibu" name="priaIbu" value={formData.priaIbu} onChange={handleChange} />
                    <InputGroup label="Anak Ke-" name="priaAnakKe" value={formData.priaAnakKe} onChange={handleChange} />
                  </div>
                  <div className="space-y-2 mt-2">
                    {sosmedPria.map((s, i) => (
                      <div key={i} className="flex gap-2 items-center">
                        {/* PEMANGGILAN FUNGSI DI SINI */}
                        <i className={`${getSosmedIcon(s.platform)} text-lg w-6`}></i> 
                        
                        <select 
                          value={s.platform} 
                          onChange={(e) => { const l = [...sosmedPria]; l[i].platform = e.target.value; setSosmedPria(l); }} 
                          className="p-2 border rounded-xl text-[10px] bg-stone-50 w-24 outline-none"
                        >
                          <option>Instagram</option>
                          <option>TikTok</option>
                          <option>Facebook</option>
                        </select>
                        <input 
                          placeholder="@username" 
                          value={s.username} 
                          onChange={(e) => { const l = [...sosmedPria]; l[i].username = e.target.value; setSosmedPria(l); }} 
                          className="flex-1 p-2 border rounded-xl text-[10px] outline-none" 
                        />
                      </div>
                    ))}
                  </div>
                </section>

                {/* 3. MEMPELAI WANITA */}
                <section>
                  <div className="flex flex-wrap justify-between items-center gap-2 mb-5 border-l-4 border-stone-800 pl-3">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-800 text-left">3. Mempelai Wanita</h3>
                    <button type="button" onClick={() => setSosmedWanita([...sosmedWanita, { platform: 'Instagram', username: '' }])} className="text-[9px] font-bold text-[#E2703A] uppercase hover:underline">+ Tambah Sosmed</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                    <InputGroup label="Nama Lengkap" name="wanitaNamaLengkap" value={formData.wanitaNamaLengkap} onChange={handleChange} />
                    <InputGroup label="Nama Panggilan" name="wanitaPanggilan" value={formData.wanitaPanggilan} onChange={handleChange} />
                    <InputGroup label="Nama Ayah" name="wanitaAyah" value={formData.wanitaAyah} onChange={handleChange} />
                    <InputGroup label="Nama Ibu" name="wanitaIbu" value={formData.wanitaIbu} onChange={handleChange} />
                    <InputGroup label="Anak Ke-" name="wanitaAnakKe" value={formData.wanitaAnakKe} onChange={handleChange} />
                  </div>
                  <div className="space-y-2 mt-2">
                    {sosmedPria.map((s, i) => (
                    <div key={i} className="flex gap-2 items-center">
                      {/* PEMANGGILAN FUNGSI DI SINI */}
                      <i className={`${getSosmedIcon(s.platform)} text-lg w-6`}></i> 
                      
                      <select 
                        value={s.platform} 
                        onChange={(e) => { const l = [...sosmedPria]; l[i].platform = e.target.value; setSosmedPria(l); }} 
                        className="p-2 border rounded-xl text-[10px] bg-stone-50 w-24 outline-none"
                      >
                        <option>Instagram</option>
                        <option>TikTok</option>
                        <option>Facebook</option>
                      </select>
                      <input 
                        placeholder="@username" 
                        value={s.username} 
                        onChange={(e) => { const l = [...sosmedPria]; l[i].username = e.target.value; setSosmedPria(l); }} 
                        className="flex-1 p-2 border rounded-xl text-[10px] outline-none" 
                      />
                    </div>
                  ))}
                  </div>
                </section>

                {/* 4. INFORMASI ACARA */}
                <section>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-5 text-stone-800 border-l-4 border-[#E2703A] pl-3 text-left">4. Informasi Acara</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <InputGroup label="Tanggal" name="tglAcara" value={formData.tglAcara} onChange={handleChange} type="date" />
                    <InputGroup label="Waktu" name="waktuAcara" value={formData.waktuAcara} onChange={handleChange} placeholder="09:00 - Selesai" />
                  </div>
                  <InputGroup label="Gedung / Tempat" name="tempatAcara" value={formData.tempatAcara} onChange={handleChange} />
                  <InputGroup label="Google Maps" name="linkMaps" value={formData.linkMaps} onChange={handleChange} optional placeholder="Link maps..." />
                  <InputGroup label="Alamat Lengkap" name="alamatAcara" value={formData.alamatAcara} onChange={handleChange} isTextArea />
                </section>

                {/* 5. KADO DIGITAL */}
                <section className="bg-stone-50 p-6 rounded-[2rem] border border-stone-100 text-left">
                  <div className="flex justify-between items-center mb-5">
                    <h3 className="text-xs font-bold uppercase text-stone-800 tracking-tighter italic">5. Kado Digital (Angpao)</h3>
                    <button type="button" onClick={() => setKadoDigital([...kadoDigital, { provider: '', number: '', holder: '' }])} className="bg-stone-900 text-white px-3 py-1.5 rounded-xl text-[9px] font-bold uppercase hover:bg-[#E2703A] transition-all">+ Akun</button>
                  </div>
                  {kadoDigital.map((k, i) => (
                    <div key={i} className="flex flex-wrap md:flex-nowrap gap-2 mb-3 items-center">
                      {/* PEMANGGILAN FUNGSI DI SINI */}
                      <div className="w-8 h-8 flex items-center justify-center shrink-0">
                        <i className={`${getProviderIcon(k.provider)} text-xl`}></i>
                      </div>

                      <input 
                        placeholder="Bank/E-Wallet" 
                        value={k.provider} 
                        onChange={(e) => { const l = [...kadoDigital]; l[i].provider = e.target.value; setKadoDigital(l); }} 
                        className="w-full md:w-1/4 p-2.5 border rounded-xl text-[10px] outline-none" 
                      />
                      {/* ... input lainnya ... */}
                    </div>
                  ))}
                </section>

                <button type="submit" className="w-full bg-[#E2703A] text-white py-5 rounded-[1.5rem] font-bold uppercase tracking-[0.3em] shadow-xl hover:bg-stone-900 transition-all text-xs">
                  Kirim Pesanan ke WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;