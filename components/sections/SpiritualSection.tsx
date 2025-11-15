import React, { useState, useEffect } from 'react';
import Animated from '../Animated';

// Versículos sobre ajudar o próximo e generosidade
const verses = [
    {
        quote: "Não se esqueçam de fazer o bem e de repartir com os outros o que vocês têm, pois de tais sacrifícios Deus se agrada.",
        reference: "Hebreus 13:16"
    },
    {
        quote: "Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria.",
        reference: "2 Coríntios 9:7"
    },
    {
        quote: "O generoso prosperará; quem dá alívio aos outros, alívio receberá.",
        reference: "Provérbios 11:25"
    },
    {
        quote: "Portanto, enquanto temos oportunidade, façamos o bem a todos, especialmente aos da família da fé.",
        reference: "Gálatas 6:10"
    },
    {
        quote: "A religião que Deus, o nosso Pai, aceita como pura e imaculada é esta: cuidar dos órfãos e das viúvas em suas dificuldades...",
        reference: "Tiago 1:27"
    },
    {
        quote: "Levem os fardos uns dos outros e, assim, cumpram a lei de Cristo.",
        reference: "Gálatas 6:2"
    }
];

export const SpiritualSection: React.FC = () => {
    const [currentVerseIndex, setCurrentVerseIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsFading(true); // Inicia o fade-out
            setTimeout(() => {
                setCurrentVerseIndex(prevIndex => (prevIndex + 1) % verses.length);
                setIsFading(false); // Inicia o fade-in
            }, 500); // Duração da transição do CSS
        }, 5000); // Troca de versículo a cada 5 segundos

        return () => clearInterval(intervalId);
    }, []);

    const { quote, reference } = verses[currentVerseIndex];

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <Animated>
                    <div className="max-w-3xl mx-auto relative bg-[#F3F0FA] rounded-xl shadow-md p-8 overflow-hidden min-h-[250px] flex items-center">
                        <div className="absolute left-0 top-0 h-full w-2 bg-[#7B3BFF] rounded-l-xl"></div>
                        <div 
                            className={`w-full pl-6 transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
                        >
                            <blockquote className="flex flex-col justify-center">
                                <p className="text-xl md:text-2xl italic text-[#7B3BFF] leading-relaxed">
                                    "{quote}"
                                </p>
                                <footer className="mt-4 font-semibold text-lg text-[#7B3BFF] text-right">
                                    - {reference}
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </Animated>
            </div>
        </section>
    );
};