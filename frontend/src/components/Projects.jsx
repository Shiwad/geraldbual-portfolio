import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Pacific Northwest X-Ray Inc.',
    description: 'A UI/UX design project built in Figma — a complete interface for an X-Ray clinic management system.',
    embed: 'https://embed.figma.com/proto/uyW3HLisFUUCZLnTVrrEqh/HCI---Activity?node-id=1-3&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3&embed-host=share',
    tags: ['Figma', 'UI/UX', 'Design'],
    link: 'https://embed.figma.com/proto/uyW3HLisFUUCZLnTVrrEqh/HCI---Activity?node-id=1-3&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3&embed-host=share',
  },
  {
    title: 'Sea Guide',
    description: 'A startup platform empowering communities with sustainable seafood practices, a tool for reporting unethical fishing activities, real-time fishing hotspots, and enhanced community engagement.',
    embed: 'https://shiwad.github.io/sea-guide/',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://shiwad.github.io/sea-guide/',
  },
  {
    title: 'Tagum City Promotional Website',
    description: 'A promotional website dedicated to Tagum City — highlighting its vibrant culture, tourist spots, and local identity as the City of Colors.',
    embed: 'https://shiwad.github.io/tagum-website/',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://shiwad.github.io/tagum-website/',
  },
  {
    title: 'GreenCart',
    description: 'A learning project build by following tutorials on YouTube.',
    embed: 'https://shiwad.github.io/Home',
    tags: ['React', 'npm', 'Express.js'],
    link: 'https://shiwad.github.io/Home',
  },
];

const promotionalVideos = [
  {
    title: 'HVAC Appointment Scheduling & CRM System',
    description: 'A promotional video showcasing an Appointment Scheduling and Customer Relationship Management (CRM) System designed for HVAC Air Conditioning and Refrigeration Services.',
    videoUrl: 'Draft 3.3.mp4',
    tags: ['CapCut', 'Video Editing', 'HVAC', 'CRM'],
    link: 'Draft 3.3.mp4',
  },
  {
    title: 'Sea Guide Promotional Video',
    description: 'A promotional showcase of the Sea Guide platform, highlighting sustainable seafood practices, hotspots, and community engagement tools.',
    videoUrl: 'SeaGuide.mp4',
    tags: ['CapCut', 'Social Media', 'Marketing'],
    link: 'SeaGuide.mp4',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Websites');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const displayedProjects = activeCategory === 'Websites' ? projects : promotionalVideos;

  return (
    <section id="projects" className="py-24 bg-[#f8faff] border-t border-slate-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        #projects * { font-family: 'Outfit', sans-serif; }

        .proj-card {
          background: #ffffff;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(99,102,241,0.15);
          box-shadow: 0 2px 12px rgba(99,102,241,0.07), 0 1px 3px rgba(0,0,0,0.05);
          transition: transform 0.28s cubic-bezier(.22,.68,0,1.2), box-shadow 0.28s ease;
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .proj-card:hover {
          transform: translateY(-8px) scale(1.015);
          box-shadow: 0 20px 50px rgba(99,102,241,0.16), 0 6px 20px rgba(99,102,241,0.08);
          border-color: rgba(99,102,241,0.35);
        }

        .proj-img-wrap {
          position: relative;
          overflow: hidden;
          height: 200px;
          border-radius: 12px;
          margin: 14px 14px 0 14px;
        }
        .proj-img-wrap img, .proj-img-wrap video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .proj-card:hover .proj-img-wrap img {
          transform: scale(1.06);
        }

        .proj-ext-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(255,255,255,0.92);
          border: 1px solid rgba(99,102,241,0.2);
          border-radius: 8px;
          padding: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(6px);
          transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
          z-index: 10;
        }
        .proj-ext-btn:hover {
          background: #6366f1;
          border-color: #6366f1;
          transform: scale(1.1);
        }
        .proj-ext-btn:hover svg { stroke: #fff; }

        .proj-tag {
          display: inline-flex;
          align-items: center;
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.03em;
          background: #eef2ff;
          color: #4f46e5;
          border: 1px solid rgba(99,102,241,0.2);
          transition: background 0.2s ease, color 0.2s ease;
        }
        .proj-tag:hover {
          background: #6366f1;
          color: #fff;
        }

        .view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: 10px;
          border: 1.5px solid #6366f1;
          color: #6366f1;
          font-size: 13px;
          font-weight: 600;
          background: transparent;
          transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
          cursor: pointer;
          text-decoration: none;
        }
        .view-all-btn:hover {
          background: #6366f1;
          color: #fff;
          transform: scale(1.04);
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6">

        {/* ── Header Row ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 flex items-center gap-1.5 mb-2">
              <span>»</span> MY PROJECTS
            </span>
            <h2 className="text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
              Featured Projects
            </h2>
          </div>
          
          {/* Dropdown Menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="view-all-btn self-start sm:self-auto flex items-center gap-2"
              aria-expanded={isDropdownOpen}
              aria-haspopup="listbox"
            >
              <span>{activeCategory === 'Websites' ? 'Websites' : 'Promotional Videos'}</span>
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className={`transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-xl z-30 overflow-hidden py-1.5">
                <button
                  onClick={() => {
                    setActiveCategory('Websites');
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                    activeCategory === 'Websites'
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'
                  }`}
                >
                  Websites
                </button>
                <button
                  onClick={() => {
                    setActiveCategory('Videos');
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                    activeCategory === 'Videos'
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'
                  }`}
                >
                  Promotional Videos
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ── Cards Grid ── */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((proj) => (
              <motion.div
                key={proj.title}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4 }}
                style={{ height: '100%' }}
              >
                <div className="proj-card">

                  {/* Image / Embed / Video preview */}
                  <div className="proj-img-wrap">
                    {proj.videoUrl ? (
                      <video
                        src={proj.videoUrl}
                        controls
                        style={{
                          width: '100%',
                          height: '100%',
                          border: 'none',
                          borderRadius: '8px',
                          objectFit: 'cover',
                        }}
                      />
                    ) : proj.embed ? (
                      <iframe
                        src={proj.embed}
                        allowFullScreen
                        title={proj.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          border: 'none',
                          borderRadius: '8px',
                          pointerEvents: 'auto',
                        }}
                      />
                    ) : (
                      <img src={proj.image} alt={proj.title} />
                    )}
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="proj-ext-btn" aria-label="Open project">
                      <svg width="14" height="14" fill="none" stroke="#6366f1" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                          d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>

                  {/* Card body */}
                  <div className="p-5 pt-4 flex flex-col" style={{ flex: 1 }}>
                    <h3 className="text-lg font-bold text-slate-800 mb-2 tracking-tight min-h-[56px]">{proj.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4 font-light">{proj.description}</p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {proj.tags.map((tag, j) => (
                        <span key={j} className="proj-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
