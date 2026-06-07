import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(80);
    const fullText = "Hi, I'm Gerald S. Bual";

    useEffect(() => {
        let timer;
        const handleTyping = () => {
            if (!isDeleting) {
                // Typing
                setCurrentText(fullText.substring(0, currentText.length + 1));
                setTypingSpeed(80);

                if (currentText === fullText) {
                    // Hold for 2.5s to read the name
                    timer = setTimeout(() => setIsDeleting(true), 2500);
                    return;
                }
            } else {
                // Deleting
                setCurrentText(fullText.substring(0, currentText.length - 1));
                setTypingSpeed(35);

                if (currentText === '') {
                    setIsDeleting(false);
                    // Brief pause before restarting
                    timer = setTimeout(() => {}, 200);
                }
            }

            timer = setTimeout(handleTyping, typingSpeed);
        };

        timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, typingSpeed]);

    return (
        <section id="home" className="pt-20 bg-white">
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');
                    
                    #home * {
                        font-family: 'Outfit', sans-serif;
                    }

                    @keyframes blink {
                        50% { border-color: transparent }
                    }
                    .animate-blink {
                        animation: blink 0.8s step-end infinite;
                    }

                    @keyframes pulse-soft {
                        0%, 100% { transform: scale(1); }
                        50% { transform: scale(1.12); }
                    }
                    .animate-pulse-soft {
                        animation: pulse-soft 4s ease-in-out infinite;
                    }
                `}
            </style>

            <main className="flex flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="flex flex-col items-center md:items-start w-full md:max-w-xl">
                    {/* min-h is set to a single-line height to prevent layout shifting while keeping spacing tight */}
                    <h1 className="text-center md:text-left text-4xl leading-[46px] md:text-5xl md:leading-[68px] font-bold text-slate-900 min-h-[46px] md:min-h-[68px]">
                        <span className="text-slate-900">{currentText}</span>
                        <span className="border-r-4 border-indigo-600 animate-blink ml-1">&nbsp;</span>
                     </h1>
                    <p className="text-center md:text-left text-sm text-slate-500 max-w-lg mt-4 leading-relaxed">
                        Welcome to my portfolio! I'm really glad you're here. Feel free to explore my academic milestones, personal projects, and the creative solutions I build.
                    </p>
                    
                    <div className="flex items-center gap-4 mt-8 text-sm">
                        <a 
                            href="#contact" 
                            className="bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 transition rounded-md px-7 h-11 text-sm font-medium flex items-center justify-center shadow-sm hover:shadow-indigo-100 hover:shadow-md"
                        >
                            Contact Me
                        </a>
                        <a 
                            href="#projects" 
                            className="flex items-center gap-2 border border-slate-300 active:scale-95 hover:bg-slate-50 transition text-slate-600 rounded-md px-6 h-11 text-sm flex items-center justify-center"
                        >
                            View Work
                        </a>
                    </div>
                </div>

                <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] flex items-center justify-center select-none flex-shrink-0">
                    {/* Indigo Circle with rotating glowing border (Stable Position, Cyan/Teal Glow) */}
                    <div className="absolute top-[6%] left-[6%] w-[22%] h-[22%] rounded-full flex items-center justify-center p-[2px] overflow-hidden shadow-lg animate-pulse-soft bg-white z-0">
                        <div className="absolute inset-0 w-[150%] h-[150%] left-[-25%] top-[-25%] bg-[conic-gradient(from_0deg,transparent_30%,#22d3ee_60%,#0d9488_90%,transparent_100%)] animate-spin" style={{ animationDuration: '3s' }}></div>
                        <div className="absolute inset-0 w-[150%] h-[150%] left-[-25%] top-[-25%] bg-[conic-gradient(from_0deg,transparent_30%,#22d3ee_60%,#0d9488_90%,transparent_100%)] animate-spin blur-sm opacity-80" style={{ animationDuration: '3s' }}></div>
                        <div className="relative w-full h-full rounded-full bg-indigo-600 z-10"></div>
                    </div>
                    
                    {/* Purple Circle with rotating glowing border (Stable Position, Gold/Orange Glow) */}
                    <div className="absolute bottom-[6%] right-[6%] w-[18%] h-[18%] rounded-full flex items-center justify-center p-[2px] overflow-hidden shadow-lg animate-pulse-soft bg-white z-30">
                        <div className="absolute inset-0 w-[150%] h-[150%] left-[-25%] top-[-25%] bg-[conic-gradient(from_0deg,transparent_30%,#fbbf24_60%,#ea580c_90%,transparent_100%)] animate-spin" style={{ animationDuration: '3.5s' }}></div>
                        <div className="absolute inset-0 w-[150%] h-[150%] left-[-25%] top-[-25%] bg-[conic-gradient(from_0deg,transparent_30%,#fbbf24_60%,#ea580c_90%,transparent_100%)] animate-spin blur-sm opacity-80" style={{ animationDuration: '3.5s' }}></div>
                        <div className="relative w-full h-full rounded-full bg-purple-500 z-10"></div>
                    </div>
                    
                    {/* Main Circular Profile Image with rotating glowing border */}
                    <div className="relative w-[76%] h-[76%] rounded-full flex items-center justify-center p-[6px] overflow-hidden z-20 shadow-2xl bg-white">
                        {/* The rotating gradient light */}
                        <div className="absolute inset-0 w-[150%] h-[150%] left-[-25%] top-[-25%] bg-[conic-gradient(from_0deg,transparent_40%,#6366f1_70%,#a855f7_90%,transparent_100%)] animate-spin" style={{ animationDuration: '4s' }}></div>
                        
                        {/* Glow effect behind */}
                        <div className="absolute inset-0 w-[150%] h-[150%] left-[-25%] top-[-25%] bg-[conic-gradient(from_0deg,transparent_40%,#6366f1_70%,#a855f7_90%,transparent_100%)] animate-spin blur-md opacity-70" style={{ animationDuration: '4s' }}></div>
                        
                        {/* Inner content (Profile Image) */}
                        <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-50 flex items-center justify-center z-10">
                            <img
                                src="hero_avatar.jpg"
                                alt="Gerald S. Bual"
                                className="w-full h-full object-cover object-center scale-[1.03] hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Hero;
