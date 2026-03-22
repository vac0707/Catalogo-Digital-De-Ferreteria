/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  MessageCircle, 
  ChevronLeft, 
  ArrowRight,
  Menu,
  X,
  Phone,
  ExternalLink
} from 'lucide-react';
import { BUSINESS_INFO, CATEGORIES, PRODUCTS, FEATURES } from './data';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsApp = (productName?: string) => {
    const message = productName 
      ? `Hola, deseo cotizar el producto ${productName} de Ferretería PROCONSTRUCTOR.`
      : BUSINESS_INFO.defaultMessage;
    const url = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleLocation = () => {
    window.open(BUSINESS_INFO.locationUrl, '_blank');
  };

  // Scroll to top on category change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-industrial-black text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => setSelectedCategory(null)}
          >
            <div className="bg-industrial-yellow p-1.5 rounded-lg">
              <Phone className="w-5 h-5 text-industrial-black" />
            </div>
            <span className="font-bold tracking-tighter text-lg">PROCONSTRUCTOR</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => setSelectedCategory(null)} className="hover:text-industrial-yellow transition-colors">Inicio</button>
            <button onClick={handleLocation} className="flex items-center gap-1 hover:text-industrial-yellow transition-colors">
              <MapPin className="w-4 h-4" /> Ubicación
            </button>
            <button 
              onClick={() => handleWhatsApp()}
              className="bg-industrial-yellow text-industrial-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-4 h-4" /> Cotizar
            </button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-industrial-gray border-t border-white/10 overflow-hidden"
            >
              <div className="p-4 flex flex-col gap-4">
                <button onClick={() => { setSelectedCategory(null); setIsMenuOpen(false); }} className="text-left py-2 border-b border-white/5">Inicio</button>
                <button onClick={handleLocation} className="text-left py-2 border-b border-white/5 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Ver Ubicación
                </button>
                <button 
                  onClick={() => { handleWhatsApp(); setIsMenuOpen(false); }}
                  className="bg-industrial-yellow text-industrial-black p-3 rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" /> Cotizar por WhatsApp
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Hero Section */}
              <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1920" 
                    alt="Construcción"
                    className="w-full h-full object-cover brightness-50"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-industrial-black via-transparent to-transparent" />
                </div>
                
                <div className="relative z-10 text-center px-4 max-w-4xl">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6 inline-block"
                  >
                    <span className="bg-industrial-yellow text-industrial-black px-4 py-1 rounded-full text-sm font-black uppercase tracking-widest">
                      Calidad Industrial
                    </span>
                  </motion.div>
                  <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter leading-none">
                    FERRETERÍA <br />
                    <span className="text-industrial-yellow">PROCONSTRUCTOR</span>
                  </h1>
                  <p className="text-xl text-neutral-300 mb-8 font-medium">
                    {BUSINESS_INFO.slogan}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      onClick={() => handleWhatsApp()}
                      className="bg-industrial-yellow text-industrial-black px-8 py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-2xl"
                    >
                      <MessageCircle className="w-6 h-6" /> COTIZAR AHORA
                    </button>
                    <button 
                      onClick={handleLocation}
                      className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/20 transition-all"
                    >
                      <MapPin className="w-6 h-6" /> VER UBICACIÓN
                    </button>
                  </div>
                </div>
              </section>

              {/* Categories Grid */}
              <section className="max-w-7xl mx-auto px-4 py-20">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">NUESTRAS CATEGORÍAS</h2>
                  <div className="w-20 h-1.5 bg-industrial-yellow mx-auto rounded-full" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {CATEGORIES.map((cat, idx) => (
                    <motion.div
                      key={cat.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => setSelectedCategory(cat.id)}
                      className="group cursor-pointer relative overflow-hidden rounded-2xl aspect-[4/5] shadow-xl hover:shadow-2xl transition-all"
                    >
                      <img 
                        src={cat.image} 
                        alt={cat.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-industrial-black via-industrial-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-6 w-full">
                        <div className="bg-industrial-yellow w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <cat.icon className="w-6 h-6 text-industrial-black" />
                        </div>
                        <h3 className="text-xl font-black text-white mb-2 leading-tight uppercase tracking-tight">{cat.title}</h3>
                        <p className="text-neutral-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {cat.description}
                        </p>
                        <div className="flex items-center gap-2 text-industrial-yellow font-bold text-sm">
                          VER PRODUCTOS <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Why Choose Us */}
              <section className="bg-industrial-black text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight">¿POR QUÉ ELEGIRNOS?</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">Comprometidos con el éxito de tu obra, brindando soluciones integrales.</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {FEATURES.map((feature, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center group">
                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-industrial-yellow group-hover:text-industrial-black transition-all duration-300">
                          <feature.icon className="w-8 h-8" />
                        </div>
                        <span className="font-bold text-sm uppercase tracking-wider leading-tight">{feature.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="category-view"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-7xl mx-auto px-4 py-12"
            >
              <button 
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-2 text-industrial-black font-bold mb-8 hover:text-industrial-yellow transition-colors group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> VOLVER AL INICIO
              </button>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                    {CATEGORIES.find(c => c.id === selectedCategory)?.title}
                  </h2>
                  <p className="text-neutral-500 font-medium text-lg">
                    {CATEGORIES.find(c => c.id === selectedCategory)?.description}
                  </p>
                </div>
                <div className="bg-industrial-yellow/10 px-4 py-2 rounded-lg border border-industrial-yellow/20 text-industrial-black font-bold text-sm">
                  {PRODUCTS[selectedCategory as keyof typeof PRODUCTS].length} Productos disponibles
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {PRODUCTS[selectedCategory as keyof typeof PRODUCTS].map((product, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-xl border border-neutral-100 flex flex-col group"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={product.img} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-industrial-black/80 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                          Premium
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-black mb-2 leading-tight text-industrial-black uppercase tracking-tight">
                        {product.name}
                      </h3>
                      <p className="text-neutral-500 text-sm mb-6 flex-grow">
                        {product.desc}
                      </p>
                      <button 
                        onClick={() => handleWhatsApp(product.name)}
                        className="w-full bg-industrial-black text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-industrial-yellow hover:text-industrial-black transition-all shadow-lg active:scale-95"
                      >
                        <MessageCircle className="w-5 h-5" /> COTIZAR POR WHATSAPP
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-industrial-black text-white pt-20 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-industrial-yellow p-1.5 rounded-lg">
                  <Phone className="w-5 h-5 text-industrial-black" />
                </div>
                <span className="font-bold tracking-tighter text-2xl uppercase">PROCONSTRUCTOR</span>
              </div>
              <p className="text-neutral-400 leading-relaxed mb-6">
                {BUSINESS_INFO.description}
              </p>
              <div className="flex gap-4">
                <button onClick={handleLocation} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-industrial-yellow hover:text-industrial-black transition-all">
                  <MapPin className="w-5 h-5" />
                </button>
                <button onClick={() => handleWhatsApp()} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-industrial-yellow hover:text-industrial-black transition-all">
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-black text-lg mb-6 uppercase tracking-wider text-industrial-yellow">Categorías Rápidas</h4>
              <ul className="space-y-3">
                {CATEGORIES.slice(0, 5).map(cat => (
                  <li key={cat.id}>
                    <button 
                      onClick={() => setSelectedCategory(cat.id)}
                      className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="w-3 h-3 text-industrial-yellow" /> {cat.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-black text-lg mb-6 uppercase tracking-wider text-industrial-yellow">Contacto Directo</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/5 p-3 rounded-xl">
                    <Phone className="w-5 h-5 text-industrial-yellow" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase font-bold tracking-widest mb-1">WhatsApp Ventas</p>
                    <p className="font-bold text-lg">932 350 348</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/5 p-3 rounded-xl">
                    <MapPin className="w-5 h-5 text-industrial-yellow" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase font-bold tracking-widest mb-1">Nuestra Tienda</p>
                    <p className="font-bold text-sm">Encuéntranos en Google Maps</p>
                    <button onClick={handleLocation} className="text-industrial-yellow text-xs font-bold flex items-center gap-1 mt-1 hover:underline">
                      VER MAPA <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-10 text-center">
            <div className="bg-industrial-yellow/5 p-8 rounded-3xl border border-industrial-yellow/10 mb-10">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">¿Listo para empezar tu proyecto?</h3>
              <p className="text-neutral-400 mb-6">Solicita tu cotización de forma rápida y recibe asesoría experta.</p>
              <button 
                onClick={() => handleWhatsApp()}
                className="bg-industrial-yellow text-industrial-black px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-xl flex items-center gap-3 mx-auto"
              >
                <MessageCircle className="w-6 h-6" /> COTIZAR POR WHATSAPP
              </button>
            </div>
            <p className="text-neutral-600 text-xs font-medium tracking-widest uppercase">
              © {new Date().getFullYear()} FERRETERÍA PROCONSTRUCTOR. TODOS LOS DERECHOS RESERVADOS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
