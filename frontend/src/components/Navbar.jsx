import { useState } from 'react';

const navItems = [
    { label: 'Home',     href: '#home' },
    { label: 'About',    href: '#about' },
    { label: 'Skills',   href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact',  href: '#contact' },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('Home');

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');
                    * {
                        font-family: 'Outfit', sans-serif;
                    }

                    @keyframes rotate {
                        100% {
                            transform: rotate(1turn);
                        }
                    }
                
                    .rainbow::before {
                        content: '';
                        position: absolute;
                        z-index: -2;
                        left: -50%;
                        top: -50%;
                        width: 200%;
                        height: 200%;
                        background-position: 100% 50%;
                        background-repeat: no-repeat;
                        background-size: 50% 30%;
                        filter: blur(3px);
                        background-image: linear-gradient(to right, rgba(99, 102, 241, 0), #6366f1, #a855f7);
                        animation: rotate 4s linear infinite;
                    }

                    .rainbow:hover {
                        box-shadow: 0 0 15px rgba(99, 102, 241, 0.4);
                    }
                `}
            </style>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-100 px-6 md:px-12 lg:px-24 xl:px-40 py-4 flex items-center justify-between">

                {/* Logo */}
                <a href="#home" onClick={() => setActive('Home')}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4.706"  cy="16"     r="4.706" fill="#000" />
                        <circle cx="16.001" cy="4.706"  r="4.706" fill="#000" />
                        <circle cx="16.001" cy="27.294" r="4.706" fill="#000" />
                        <circle cx="27.294" cy="16"     r="4.706" fill="#000" />
                    </svg>
                </a>

                {/* Desktop pill nav */}
                <div className="hidden md:flex items-center bg-zinc-50 border border-zinc-200 rounded-full px-1 py-1 gap-2">
                    {navItems.map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            onClick={() => setActive(label)}
                            className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                                active === label
                                    ? 'bg-white border border-zinc-200 font-medium text-indigo-600 hover:text-indigo-500'
                                    : 'text-zinc-500 hover:text-zinc-800'
                            }`}
                        >
                            {label}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <a
                    href="cv.pdf"
                    download="Gerald_Bual_CV.pdf"
                    className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium border-2 border-zinc-950 bg-white text-zinc-900 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer no-underline select-none"
                >
                    Download CV
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                </a>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-1"
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-zinc-800 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-zinc-800 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-zinc-800 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

                {/* Mobile menu */}
                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border-t border-zinc-200 flex flex-col p-5 gap-1 md:hidden z-50 shadow-lg">
                        {navItems.map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                onClick={() => { setActive(label); setMenuOpen(false); }}
                                className={`px-4 py-2.5 rounded-lg text-sm transition-colors ${
                                    active === label
                                        ? 'bg-zinc-50 font-medium text-zinc-800'
                                        : 'text-zinc-500 hover:bg-zinc-50'
                                }`}
                            >
                                {label}
                            </a>
                        ))}
                        <a
                            href="cv.pdf"
                            download="Gerald_Bual_CV.pdf"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-2 px-6 py-2 mt-3 w-fit rounded-full text-sm font-medium border-2 border-zinc-950 bg-white text-zinc-900 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer no-underline select-none"
                        >
                            Download CV
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>
                        </a>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
