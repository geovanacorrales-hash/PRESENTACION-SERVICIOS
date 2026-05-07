/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Instagram, 
  Phone, 
  MapPin, 
  Calendar, 
  Sparkles, 
  Eye, 
  CheckCircle2,
  ChevronRight,
  Menu,
  X,
  GraduationCap,
  TrendingUp,
  BookOpen
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [businessName, setBusinessName] = useState("Olam Lashes Brows");
  const [phone, setPhone] = useState("61962062");
  const [location, setLocation] = useState("San José, Costa Rica");
  const [instagram, setInstagram] = useState("@olam_lashes_brows");

  const instagramUrl = "https://www.instagram.com/olam_lashes_brows/";
  const promoText = "10% de descuento en tu primera cita";

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: "Brow Specialist",
      description: "Perfeccionamos tu mirada con técnicas semi-permanentes y de diseño.",
      items: ["Microblading", "Shading", "Laminado de Cejas", "Henna", "Estudio de mirada"],
      icon: <Sparkles className="w-6 h-6 text-brand-gold" />
    },
    {
      title: "Lash Artist",
      description: "Extensiones y tratamientos para unas pestañas de impacto.",
      items: ["Volumen Tecnológico", "Volumen Americano", "Efectos Especiales", "Lash Lift"],
      icon: <Eye className="w-6 h-6 text-brand-gold" />
    },
    {
      title: "Beauty & Skin",
      description: "Complementos ideales para resaltar tu belleza natural.",
      items: ["Micropigmentación de Labios", "Facial Hidratante"],
      icon: <Sparkles className="w-6 h-6 text-brand-gold" />
    }
  ];

  return (
    <div className="min-h-screen selection:bg-brand-gold/30">
      {/* Promo Bar */}
      <div className="bg-brand-gold text-white text-[10px] uppercase tracking-[0.2em] py-2 text-center font-bold">
        ✨ {promoText} ✨
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 bg-brand-cream/80 backdrop-blur-md border border-brand-ink/5 rounded-full px-8 h-16 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <img src="https://res.cloudinary.com/dbwevdrpp/image/upload/v1778042815/540371464_122137339934859733_5105957402932874274_n_rhuabk.png" alt="Olam Logo" className="h-12 w-auto object-contain" />
          <h1 className="text-xl font-serif tracking-tight hidden sm:block">{businessName}</h1>
        </div>
        <div className="hidden md:flex gap-8 items-center text-[10px] uppercase tracking-[0.2em] font-semibold">
          <a href="#servicios" className="hover:text-brand-gold transition-colors">Servicios</a>
          <a 
            href={`https://wa.me/${phone}`} 
            target="_blank" 
            rel="noreferrer"
            className="px-6 py-2 bg-brand-ink text-white rounded-full hover:bg-brand-gold transition-all"
          >
            WhatsApp
          </a>
        </div>
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 z-40 bg-brand-cream flex flex-col items-center justify-center gap-8 text-2xl font-serif "
        >
          <a href="#servicios" onClick={() => setIsMenuOpen(false)}>Servicios</a>
          <a href="#contacto" onClick={() => setIsMenuOpen(false)}>Contacto</a>
          <button onClick={() => setIsMenuOpen(false)} className="p-4 rounded-full border border-brand-ink/10 mt-8">
            <X className="w-8 h-8" />
          </button>
        </motion.div>
      )}

      {/* Hero Section */}
      <header className="pt-40 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center min-h-[90vh]">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Estudio de Mirada & Micropigmentación</span>
          <h2 className="text-6xl md:text-8xl leading-[0.85] mb-8 font-serif">
            Tu mirada, <br/>nuestra <span className="italic text-brand-gold">Pasión</span>
          </h2>
          <p className="text-lg text-brand-ink/70 max-w-md mb-10 leading-relaxed font-light">
            Especialistas en transformar tu expresión. En <strong>{businessName}</strong>, combinamos arte y técnica para resaltar tu esencia única.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-brand-ink text-white rounded-full flex items-center gap-2 hover:scale-105 hover:bg-brand-gold transition-all duration-300"
            >
              Agendar Cita <ChevronRight className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-2 px-6 py-4 border border-brand-ink/10 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              {promoText}
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/5] lg:aspect-auto lg:h-[600px] w-full bg-brand-ink/5 rounded-[60px] overflow-hidden shadow-2xl"
        >
          <img 
            src="https://res.cloudinary.com/dbwevdrpp/image/upload/v1778046448/WhatsApp_Image_2026-05-05_at_11.46.39_PM_2_gfikpd.jpg" 
            alt="Olam Studio" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/60 via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
             <div className="bg-brand-ink/60 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
               <p className="text-white/60 text-[8px] uppercase tracking-widest font-bold mb-1">Ubicación</p>
               <p className="text-white text-sm font-serif italic">{location}</p>
             </div>
             <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center -mb-4 -mr-4 shadow-xl border-4 border-brand-cream">
                <span className="text-white font-bold text-center leading-none text-[10px] uppercase tracking-tighter">10%<br/>First Visit</span>
             </div>
          </div>
        </motion.div>
      </header>

      {/* Info Collector (Edit Mode) - Hidden in Final */}
      <section className="bg-brand-ink text-white py-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[100px] -mr-32 -mt-32" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="p-8 border border-white/10 rounded-[40px] bg-white/5 backdrop-blur-sm">
            <h3 className="text-xl mb-6 font-serif flex items-center gap-2 italic">
              <Sparkles className="w-5 h-5 text-brand-gold" />
              ¡Últimas citas disponibles! Cupos limitados para esta semana.
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Empresa</label>
                <input 
                  type="text" 
                  value={businessName} 
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full bg-white/5 border-b border-white/10 px-4 py-3 rounded-t-xl focus:border-brand-gold outline-none transition-all text-sm"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">WhatsApp</label>
                <input 
                  type="text" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white/5 border-b border-white/10 px-4 py-3 rounded-t-xl focus:border-brand-gold outline-none transition-all text-sm"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Ubicación</label>
                <input 
                  type="text" 
                  value={location} 
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-white/5 border-b border-white/10 px-4 py-3 rounded-t-xl focus:border-brand-gold outline-none transition-all text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-24">
          <span className="text-brand-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block">Excelencia en cada detalle</span>
          <h2 className="text-5xl md:text-7xl mb-6 italic">Experiencia & Técnica</h2>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              {...fadeInUp}
              transition={{ delay: idx * 0.2 }}
              className="group p-10 border border-brand-ink/5 bg-white rounded-[50px] hover:border-brand-gold/20 hover:shadow-2xl hover:shadow-brand-gold/10 transition-all duration-500"
            >
              <div className="mb-8 inline-block p-5 bg-brand-cream rounded-[24px] group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-3xl mb-6 italic font-serif">{service.title}</h3>
              <p className="text-brand-ink/50 mb-8 font-light leading-relaxed text-sm">{service.description}</p>
              <ul className="space-y-4">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs tracking-widest font-medium uppercase text-brand-ink/80">
                    <CheckCircle2 className="w-3 h-3 text-brand-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portrait Section (Artist) */}
      <section className="py-32 bg-brand-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
           <motion.div 
             {...fadeInUp}
             className="relative"
           >
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-gold/5 rounded-full blur-[60px]" />
              <div className="relative rounded-[80px] overflow-hidden shadow-2xl border-8 border-white p-0">
                <img src="https://res.cloudinary.com/dbwevdrpp/image/upload/v1778046439/WhatsApp_Image_2026-05-05_at_11.46.39_PM_nut7ic.jpg" alt="Geovanna CR" className="w-full h-auto grayscale-[0.3] hover:grayscale-0 transition-all duration-1000" />
              </div>
           </motion.div>

           <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">The Artist</span>
              <h2 className="text-5xl md:text-7xl mb-8 leading-tight italic font-serif">Certificación & <br/>Compromiso.</h2>
              <p className="text-brand-ink/60 mb-10 font-light text-lg leading-relaxed">
                Soy <strong>Geovana Corrales R</strong>, 🎓 Lash Master Trainer. Artista de pestañas, efectos, Cejas PMU y Faciales. 💎 Fundadora de Olam Lashes & Brows, estaré encantada de atenderte con materiales de alta calidad y técnicas actualizadas para garantizar que te sientas única.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h4 className="text-3xl font-serif italic text-brand-gold">10+</h4>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Técnicas Master</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-3xl font-serif italic text-brand-gold">Gold</h4>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Standards Partner</p>
                </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Featured Lash Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div 
          {...fadeInUp}
          className="bg-brand-ink rounded-[60px] overflow-hidden grid lg:grid-cols-2 items-center shadow-2xl shadow-brand-gold/10"
        >
           <div className="p-12 lg:p-24 space-y-8">
              <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold">Featured Technique</span>
              <h2 className="text-4xl md:text-6xl text-white italic font-serif">Miradas que <br/>impactan.</h2>
              <p className="text-white/50 font-light leading-relaxed">
                Diseños personalizados para resaltar tu belleza natural. 
                Nuestra técnica garantiza salud para tus pestañas naturales y un efecto duradero y elegante.
              </p>
              <a 
                href={`https://wa.me/${phone}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-white rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Consultar Disponibilidad
              </a>
           </div>
           <div className="h-[400px] lg:h-full relative group">
              <img 
                src="/src/assets/images/regenerated_image_1778046982890.jpg" 
                alt="Featured Lashes" 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-brand-gold/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
           </div>
        </motion.div>
      </section>

      {/* Olam Academy Section */}
      <section id="academy" className="py-32 bg-brand-cream/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-24">
            <span className="text-brand-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block">Formación Profesional</span>
            <h2 className="text-5xl md:text-7xl mb-6 italic font-serif text-brand-ink">Olam Academy</h2>
            <p className="text-brand-ink/50 max-w-2xl mx-auto font-light">
              Transforma tu pasión en una carrera rentable. Cursos diseñados para artistas que buscan la excelencia técnica y el éxito empresarial.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Técnica Clásica",
                desc: "El cimiento de toda Lash Artist. Perfecciona la aplicación 1 a 1 y diseño básico.",
                icon: <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23C5A059' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2 13a10 10 0 0 0 20 0'/%3E%3Cpath d='M5 10l-1.5-2'/%3E%3Cpath d='M10 9L9 6'/%3E%3Cpath d='M14 9l1-3'/%3E%3Cpath d='M19 10l1.5-2'/%3E%3C/svg%3E" alt="Minimalist Lashes" className="w-10 h-10 object-contain" />
              },
              {
                name: "Volumen Artesanal",
                desc: "Avanza al siguiente nivel con abanicos hechos a mano y efectos de densidad.",
                icon: <GraduationCap className="w-5 h-5" />
              },
              {
                name: "Tecnológicas",
                desc: "Domina las fibras tecnológicas (Y, W, 5D) para acabados rápidos y perfectos.",
                icon: <Sparkles className="w-5 h-5" />
              },
              {
                name: "Estrategia Pro",
                desc: "Mentalidad de negocio, marketing para beauty y cierre estratégico de ventas.",
                icon: <TrendingUp className="w-5 h-5" />
              }
            ].map((course, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[40px] border border-brand-ink/5 hover:border-brand-gold/30 transition-all group scale-100 hover:scale-[1.02]"
              >
                <div className="w-12 h-12 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-gold mb-8 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-500">
                  {course.icon}
                </div>
                <h4 className="text-xl font-serif italic mb-4 text-brand-ink">{course.name}</h4>
                <p className="text-brand-ink/40 text-sm font-light leading-relaxed mb-8">{course.desc}</p>
                <div className="h-[1px] w-8 bg-brand-gold/30 group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>

          <motion.div 
            {...fadeInUp}
            className="mt-20 text-center"
          >
            <a 
              href={`https://wa.me/${phone}?text=Hola Geovana, me gustaría recibir información sobre los cursos de Olam Academy.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-col items-center gap-4 group"
            >
              <div className="px-10 py-5 bg-brand-ink text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors flex items-center gap-3">
                 SOLICITAR ACCESO ACADEMICO <ChevronRight className="w-4 h-4" />
              </div>
              <span className="text-[10px] text-brand-ink/30 uppercase tracking-[0.2em] font-bold group-hover:text-brand-gold transition-colors">
                Cupos limitados por convocatoria
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <motion.div 
             {...fadeInUp}
             className="relative aspect-square rounded-[60px] overflow-hidden group shadow-xl"
           >
              <video 
                src="https://res.cloudinary.com/dbwevdrpp/video/upload/v1778043360/TLLN3678_gvemce.mp4" 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-brand-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-xs uppercase tracking-widest font-bold border border-white/30">
                   Resultados Reales
                 </span>
              </div>
           </motion.div>
           <div className="flex flex-col justify-center space-y-12 py-12 md:pl-12">
              <motion.div {...fadeInUp}>
                 <h3 className="text-4xl mb-6 font-serif italic">Precisión en cada trazo.</h3>
                 <p className="text-brand-ink/50 font-light leading-relaxed">
                   Especialistas en Microblading y Extensiones de Pestañas. 
                   Realizamos un diagnóstico previo para determinar el efecto que mejor se adapte a tu tipo de rostro y mirada.
                 </p>
              </motion.div>
              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-full bg-brand-cream border border-brand-gold/20 flex items-center justify-center">
                   <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                 </div>
                 <div className="w-12 h-12 rounded-full bg-brand-cream border border-brand-gold/20 flex items-center justify-center">
                   <Eye className="w-5 h-5 text-brand-gold" />
                 </div>
                 <div className="w-12 h-12 rounded-full bg-brand-cream border border-brand-gold/20 flex items-center justify-center">
                   <Sparkles className="w-5 h-5 text-brand-gold" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contacto" className="py-32 px-6 bg-brand-ink text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/10 blur-[120px] -mr-48 -mb-48" />
        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 text-center">
           <span className="text-brand-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-8">Reservaciones</span>
           <h2 className="text-5xl md:text-8xl mb-24 italic font-serif leading-[0.85]">Te esperamos en <br/> nuestro <span className="text-brand-gold">Studio</span></h2>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 w-full text-center">
              <div className="space-y-6">
                <a 
                  href={`https://wa.me/${phone}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10 hover:border-brand-gold transition-colors"
                >
                  <Phone className="w-5 h-5 text-brand-gold" />
                </a>
                <h4 className="font-serif text-xl italic tracking-wide">WhatsApp</h4>
                <p className="text-white/40 text-sm tracking-widest">{phone}</p>
                <a href={`https://wa.me/${phone}`} className="inline-block text-[10px] font-bold uppercase text-brand-gold tracking-[0.2em] underline underline-offset-8">Escribir Ahora</a>
              </div>
              <div className="space-y-6">
                <a href={instagramUrl} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10 hover:border-brand-gold transition-colors">
                  <Instagram className="w-5 h-5 text-brand-gold" />
                </a>
                <h4 className="font-serif text-xl italic tracking-wide">Instagram</h4>
                <p className="text-white/40 text-sm tracking-widest">{instagram}</p>
                <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-block text-[10px] font-bold uppercase text-brand-gold tracking-[0.2em] underline underline-offset-8">Seguir</a>
              </div>
              <div className="space-y-6 lg:col-span-2">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10 hover:border-brand-gold transition-colors">
                  <MapPin className="w-5 h-5 text-brand-gold" />
                </div>
                <h4 className="font-serif text-xl italic tracking-wide">Ubicación</h4>
                <p className="text-white/40 text-sm tracking-widest max-w-[200px] mx-auto uppercase leading-loose">{location}</p>
              </div>
           </div>

           <div className="mt-40 pt-16 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center gap-8 opacity-30">
              <p className="text-[10px] uppercase tracking-widest font-bold">
                &copy; {new Date().getFullYear()} {businessName}
              </p>
              <div className="flex items-center gap-4">
                <img src="https://res.cloudinary.com/dbwevdrpp/image/upload/v1778042815/540371464_122137339934859733_5105957402932874274_n_rhuabk.png" alt="Mini Logo" className="h-10 w-auto grayscale brightness-200" />
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}
