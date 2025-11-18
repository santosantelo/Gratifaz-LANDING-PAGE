import React, { useEffect, useRef, useState } from 'react';

interface HeroSectionProps {
    onDonateClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onDonateClick }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Trigger animação após montagem
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section 
            ref={sectionRef}
            className="relative h-screen flex items-center justify-center text-center bg-[#261940] overflow-hidden"
        >
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-10 transition-opacity duration-1000"
                style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1733809637989-46f9b310a6cb?q=80&w=765&auto=format=fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    willChange: 'opacity',
                    transform: 'translateZ(0)' // GPU acceleration
                }}
            ></div>
            <div className={`relative z-10 p-6 flex flex-col items-center transition-all duration-1000 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
                <img 
                    src="https://images.unsplash.com/photo-1763227539184-fa528204bb80?q=80&w=880&auto=format=fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Logo Gratifaz" 
                    className="w-32 h-32 md:w-40 md:h-40 mb-4 rounded-full shadow-2xl border-4 border-white/10 transition-all duration-700 ease-out hover:scale-105 hover:shadow-3xl"
                    style={{ 
                        transitionDelay: '200ms',
                        willChange: 'transform'
                    }}
                />
                <h1 className={`text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight text-white transition-all duration-700 ease-out ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '300ms' }}>
                    Gratifaz
                </h1>
                <p className={`text-lg md:text-xl max-w-2xl mb-8 text-gray-200 transition-all duration-700 ease-out ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '400ms' }}>
                    Transforme vidas com um gesto de amor. Junte-se a nós e ajude a levar luz e esperança a quem mais precisa.
                </p>
                <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ease-out ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '500ms' }}>
                    <button 
                        onClick={onDonateClick}
                        className="bg-[#FF6A1A] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-[#E05A10] transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 text-lg will-change-transform"
                    >
                        Doar com PIX
                    </button>
                    <a 
                        href="https://w.app/j0bg3d"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#7B3BFF] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-[#6A28E6] transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 text-lg will-change-transform"
                    >
                        Seja Voluntário(a)
                    </a>
                </div>
            </div>

            {/* Shape divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none" 
                    className="relative block w-full h-[75px]"
                >
                    <path 
                        d="M0,60 Q300,120 600,60 T1200,60 V120 H0 Z" 
                        className="fill-gray-50"
                    ></path>
                </svg>
            </div>
        </section>
    );
};