import React from 'react';
import Animated from '../Animated';

export const AboutSection: React.FC = () => {
    return (
        <section id="sobre" className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <Animated>
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">Sobre o Projeto</h2>
                            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                                Somos um movimento de <span className="font-bold text-[#FF6A1A]">gratidão em ação</span>. Levamos luz e esperança a quem mais precisa, transformando pequenas doações em grandes mudanças.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Fundado por <a href="https://www.instagram.com/_nicolesantacruz" target="_blank" rel="noopener noreferrer" className="font-bold text-[#7B3BFF] hover:underline">@_nicolesantacruz</a>, nosso objetivo atual é a reconstrução de Rio Bonito do Iguaçu, apoiando famílias e comunidades a se reerguerem.
                            </p>
                        </div>
                    </Animated>
                    <Animated delay={200}>
                        <div>
                            <img 
                                src="https://picsum.photos/id/1015/600/400" 
                                alt="Voluntários do projeto Gratifaz em ação" 
                                className="rounded-2xl shadow-xl w-full h-auto"
                            />
                        </div>
                    </Animated>
                </div>
            </div>
        </section>
    );
};