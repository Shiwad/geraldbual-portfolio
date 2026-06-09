import React from 'react';

export default function About() {
    return (
        <section id="about" className="py-20 bg-[#f8faff] border-t border-slate-100">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');
            
                #about * {
                    font-family: 'Outfit', sans-serif;
                }
            `}</style>

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 px-6 md:px-12">

                {/* Left Column: Image with Capsule shape and overlay badge */}
                <div className="relative flex-shrink-0 select-none">
                    <img
                        className="w-[280px] h-[370px] rounded-t-full rounded-b-full object-cover shadow-lg border-[6px] border-white hover:scale-[1.01] transition-transform duration-300"
                        src="profile.jpg"
                        alt="Gerald S. Bual"
                    />

                    {/* Circle overlay badge */}
                    <div className="absolute bottom-6 -right-6 bg-indigo-600 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg border-[5px] border-white select-none">
                        <span className="text-2xl font-extrabold leading-none">4th</span>
                        <span className="text-[8px] uppercase font-bold text-center mt-1 tracking-wider text-indigo-100 max-w-[64px] leading-tight">
                            Year Student
                        </span>
                    </div>
                </div>

                {/* Right Column: Bio and Grid */}
                <div className="flex-1 md:max-w-xl">
                    <span className="text-xs uppercase tracking-widest text-indigo-600 font-bold flex items-center gap-1.5">
                        <span>»</span> ABOUT ME
                    </span>

                    <h2 className="text-4xl font-extrabold text-slate-800 mt-3 tracking-tight">
                        My Name is <span className="text-indigo-600">Gerald</span>
                    </h2>

                    <p className="text-sm font-semibold text-slate-600 mt-2 uppercase tracking-wide text-xs">
                        Bachelor of Science in Information Systems
                    </p>

                    <p className="text-sm text-slate-500 mt-5 leading-relaxed font-light">
                        Hello there, my full name is Gerald Sumiog Bual. I'm an undergraduate student and a fourth-year Bachelor of Science in Information Systems student at Davao del Norte State College (DNSC). Living in San Vicente, Panabo City, I blend technical learning with creative execution to build solutions, utilizing technical skills like Microsoft Office, Figma design, and Video Editing.
                    </p>

                    {/* Info Row (Grid layout for mobile alignment, original Flexbox for desktop) */}
                    <div className="grid grid-cols-2 md:flex md:flex-wrap md:items-start md:justify-between gap-y-6 gap-x-4 md:gap-x-8 mt-8 pt-8 border-t border-slate-200/80">
                        <div className="min-w-0 md:min-w-[60px]">
                            <h4 className="text-xs font-bold text-slate-800 tracking-wider uppercase">Age</h4>
                            <p className="text-sm md:text-base text-slate-500 mt-1.5 font-light">22 Years</p>
                        </div>
                        <div className="min-w-0 md:min-w-[110px]">
                            <h4 className="text-xs font-bold text-slate-800 tracking-wider uppercase">Born In</h4>
                            <p className="text-sm md:text-base text-slate-500 mt-1.5 font-light">Panabo City, PH</p>
                        </div>
                        <div className="min-w-0 md:min-w-[140px]">
                            <h4 className="text-xs font-bold text-slate-800 tracking-wider uppercase">Phone</h4>
                            <p className="text-sm md:text-base text-slate-500 mt-1.5 font-light tracking-wide">+63 981 063 3870</p>
                        </div>
                        <div className="min-w-0 md:min-w-[180px]">
                            <h4 className="text-xs font-bold text-slate-800 tracking-wider uppercase">Email</h4>
                            <p className="text-sm md:text-base text-slate-500 mt-1.5 font-light break-all md:break-normal">bual.rald@gmail.com</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex flex-col md:flex-row items-center gap-2 h-auto md:h-[400px] w-full max-w-5xl mt-12 mx-auto px-6 md:px-12">
                <div className="relative group flex-grow transition-all w-full md:w-56 rounded-lg overflow-hidden h-[250px] md:h-[400px] duration-500 hover:md:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src="gallery_1.jpg"
                        alt="Group Photo 1" />
                </div>
                <div className="relative group flex-grow transition-all w-full md:w-56 rounded-lg overflow-hidden h-[250px] md:h-[400px] duration-500 hover:md:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src="gallery_2.jpg"
                        alt="Group Photo 2" />
                </div>
                <div className="relative group flex-grow transition-all w-full md:w-56 rounded-lg overflow-hidden h-[250px] md:h-[400px] duration-500 hover:md:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src="gallery_3.jpg"
                        alt="Group Photo 3" />
                </div>
                <div className="relative group flex-grow transition-all w-full md:w-56 rounded-lg overflow-hidden h-[250px] md:h-[400px] duration-500 hover:md:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src="gallery_4.jpg"
                        alt="Group Photo 4" />
                </div>
                <div className="relative group flex-grow transition-all w-full md:w-56 rounded-lg overflow-hidden h-[250px] md:h-[400px] duration-500 hover:md:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src="gallery_5.jpg"
                        alt="Group Photo 5" />
                </div>
                <div className="relative group flex-grow transition-all w-full md:w-56 rounded-lg overflow-hidden h-[250px] md:h-[400px] duration-500 hover:md:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src="gallery_6.jpg"
                        alt="Group Photo 6" />
                </div>
            </div>
        </section>
    );
}
