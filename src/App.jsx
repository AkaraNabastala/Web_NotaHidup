import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Hero from './sections/Hero';
import About from './sections/About';
import Features from './sections/Features';
import Katalog from './sections/Katalog';
import Order from './sections/Order';
import OrderForm from './sections/OrderForm';
import 'remixicon/fonts/remixicon.css';

// Komponen agar setiap pindah page otomatis scroll ke atas
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  // Mendeteksi /Web_NotaHidup/ dari vite.config.js secara otomatis
  const baseName = import.meta.env.BASE_URL;

  return (
    <Router basename={baseName}>
      <ScrollToTop />
      <div className="min-h-screen bg-white selection:bg-orange-100">
        <Navbar />
        
        <Routes>
          {/* HALAMAN UTAMA */}
          <Route path="/" element={
            <main>
              <section id="hero"><Hero /></section>
              <section id="about"><About /></section>
              <section id="features"><Features /></section>
              <section id="katalog"><Katalog /></section>
              <section id="order"><Order /></section>
            </main>
          } />

          {/* HALAMAN FORM ORDER */}
          <Route path="/order" element={<OrderForm />} />
        </Routes>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;