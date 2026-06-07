import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileWord, faFilm } from '@fortawesome/free-solid-svg-icons';
import { faMicrosoft, faGoogle, faFigma } from '@fortawesome/free-brands-svg-icons';

// Canva icon (no FA brand available — using official SVG path)
const CanvaIcon = () => (
  <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="url(#canvaGrad)" />
    <path d="M14.8 9.5c-.8-1.5-2.1-2-3.6-2-2.7 0-4.5 1.8-4.5 4.5s1.8 4.5 4.5 4.5c1.4 0 2.6-.7 3.2-1.8" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M15 9.5c.3.5.4 1.1.1 1.8-.3.7-.9 1.2-1.7 1.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" />
  </svg>
);

const skillsList = [
  {
    name: "Microsoft Office",
    level: 87,
    icon: <FontAwesomeIcon icon={faMicrosoft} className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" style={{ fontSize: '2rem', color: '#F25022' }} />
  },
  {
    name: "Canva",
    level: 85,
    icon: <CanvaIcon />
  },
  {
    name: "Capcut",
    level: 85,
    icon: <FontAwesomeIcon icon={faFilm} className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" style={{ fontSize: '2rem', color: '#FE2C55' }} />
  },
  {
    name: "Google Suite",
    level: 88,
    icon: <FontAwesomeIcon icon={faGoogle} className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" style={{ fontSize: '2rem', color: '#4285F4' }} />
  },
  {
    name: "Figma",
    level: 83,
    icon: <FontAwesomeIcon icon={faFigma} className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" style={{ fontSize: '2rem', color: '#F24E1E' }} />
  }
];

const certificatesList = [
  {
    title: "Start-up Sundayag 2024",
    image: "pasundayag_certificates.jpg"
  },
  {
    title: "Byte Fest 2023 Participation",
    image: "byfest_2023_participation.jpg"
  },
  {
    title: "CCRO - City Government of Panabo OJT Completion",
    image: "ccro_ojt_completion.jpg"
  },
  {
    title: "City Government of Panabo OJT Completion",
    image: "panabo_ojt_completion.jpg"
  },
  {
    title: "TESDA Skills Certificate",
    images: [
      "tesda_install_configure.png",
      "tesda_setup_servers.png",
      "tesda_setup_networks.png",
      "tesda_intro_css.png",
      "tesda_maintain_systems.png"
    ]
  },
  {
    title: "Python Essential 1",
    image: "python_essential_1.png"
  },
  {
    title: "Python Essential 2",
    image: "python_essential_2.png"
  },
  {
    title: "Cash for Work - DNSC Main Campus",
    image: "cash_for_work_main_campus.png"
  },
  {
    title: "Protecting Innovation: Hands-On Training in Intellectual Property Rights and Patent Filing",
    image: "ipr_patent_filing.jpg"
  }
];

const Skills = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (cert) => {
    setSelectedImage(cert);
    setCurrentImageIndex(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-24 bg-white border-t border-slate-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');
      
        #skills * {
            font-family: 'Outfit', sans-serif;
        }
      `}</style>

      {/* Reusable Indigo Gradient Definition */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <linearGradient id="indigoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
          <linearGradient id="canvaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C4CC" />
            <stop offset="100%" stopColor="#7D2AE8" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="max-w-6xl mx-auto px-6"
      >
        {/* Title */}
        <motion.h2 
          variants={itemVariants} 
          className="text-4xl font-extrabold text-center text-slate-800 tracking-tight"
        >
          My Work Skills & <span className="text-indigo-600">Certificates</span>
        </motion.h2>

        <motion.p 
          variants={itemVariants} 
          className="text-sm text-slate-500 text-center mt-3 max-w-xl mx-auto px-4 font-light leading-relaxed"
        >
          A visual representation of my proficiency in various key tools and software, which I leverage to deliver top-tier support and design solutions.
        </motion.p>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
          {skillsList.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white border border-slate-100 rounded-xl p-6 flex flex-col items-center justify-center group hover:-translate-y-2 hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-50/20 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 shadow-sm group-hover:bg-indigo-50/50 group-hover:border-indigo-100 transition-colors duration-300">
                {skill.icon}
              </div>
              
              {/* Skill Name */}
              <h3 className="text-[15px] font-semibold text-slate-700 mt-5 select-none tracking-wide text-center">
                {skill.name}
              </h3>
              
              {/* Thick Progress Bar */}
              <div className="w-full h-8 bg-slate-100 rounded-full mt-5 relative overflow-hidden flex items-center justify-center border border-slate-200/50">
                {/* Animated Filled Bar with Indigo Gradient */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.15 }}
                />
                
                {/* Centered Percentage Text */}
                <span className="absolute font-extrabold text-[11px] text-white tracking-widest z-10 select-none">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Separator */}
        <motion.div 
          variants={itemVariants}
          className="w-full border-t border-slate-100 my-16"
        />

        {/* Certificates Gallery Section (Just the gallery container as requested) */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 max-w-5xl mx-auto"
        >
          {certificatesList.map((cert, index) => (
            <div 
              key={index}
              onClick={() => openModal(cert)}
              className="relative group rounded-lg overflow-hidden w-56 h-56 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 cursor-pointer"
            >
              <img 
                src={cert.images ? cert.images[0] : cert.image} 
                alt={cert.title} 
                className="w-56 h-56 object-cover object-top" 
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg">
                <h1 className="text-base font-bold tracking-tight text-white mb-1 select-none">
                  {cert.title}
                </h1>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(cert);
                  }}
                  className="flex items-center gap-1 text-xs text-white/80 font-medium hover:text-white transition-colors cursor-pointer text-left"
                >
                  Show Certificate
                  <svg width="12" height="12" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.125 1.625H11.375V4.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.41602 7.58333L11.3743 1.625" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Enlarged Image Lightbox/Modal */}
        <AnimatePresence>
          {selectedImage && (() => {
            const hasMultipleImages = selectedImage.images && selectedImage.images.length > 0;
            const imagesArray = hasMultipleImages ? selectedImage.images : [selectedImage.image];

            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 cursor-zoom-out"
              >
                <motion.div
                  initial={{ scale: 0.95, y: 15 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.95, y: 15 }}
                  transition={{ type: "spring", damping: 28, stiffness: 350 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-w-4xl max-h-[92vh] w-full overflow-hidden bg-slate-950 rounded-2xl border border-white/10 shadow-2xl flex flex-col cursor-default"
                >
                  {/* Sticky Header */}
                  <div className="w-full bg-slate-900/90 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between z-20 select-none">
                    <h3 className="text-base font-bold text-white tracking-wide">
                      {selectedImage.title} {hasMultipleImages && `(${imagesArray.length} Certificates)`}
                    </h3>
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all duration-200 hover:scale-105"
                      aria-label="Close modal"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                  </div>
                  
                  {/* Scrollable Container for Images */}
                  <div className="overflow-y-auto flex-1 p-6 flex flex-col items-center gap-8 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                    {imagesArray.map((imageUrl, idx) => (
                      <div key={idx} className="w-full flex flex-col items-center gap-3">
                        <img
                          src={imageUrl}
                          alt={`${selectedImage.title} - ${idx + 1}`}
                          className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/5"
                        />
                        {hasMultipleImages && (
                          <span className="text-xs text-slate-400 font-semibold tracking-wider bg-slate-900 px-3 py-1 rounded-full border border-white/5">
                            Certificate {idx + 1} of {imagesArray.length}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })()}
        </AnimatePresence>

      </motion.div>
    </section>
  );
};

export default Skills;
