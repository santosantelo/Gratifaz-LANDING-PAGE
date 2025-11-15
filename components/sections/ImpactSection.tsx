import React from 'react';
import AnimatedCount from '../AnimatedCount';
import Animated from '../Animated';

const ImpactCard = ({ beforeImg, afterImg, title, description }: { beforeImg?: string; afterImg: string; title: string; description: string; }) => (
    <div 
        className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 group"
    >
        <div className="relative w-full h-40">
            {beforeImg ? (
                <>
                    <img src={beforeImg} alt="Antes" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0" />
                    <img src={afterImg} alt="Depois" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                </>
            ) : (
                <img src={afterImg} alt={title} className="w-full h-full object-cover" />
            )}
        </div>
        <div className="p-6">
            <h3 className="font-bold text-lg text-gray-700">{title}</h3>
            <p className="text-gray-600 mt-2">{description}</p>
        </div>
    </div>
);

export const ImpactSection: React.FC = () => {
    return (
        <section id="impacto" className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                 <Animated>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">Nosso Impacto em Números</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                        Cada doação, cada hora de voluntariado, cada compartilhamento nos ajuda a construir um futuro melhor. Veja o que já conquistamos juntos.
                    </p>
                </Animated>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <Animated>
                        <div className="bg-orange-100/50 p-8 rounded-2xl">
                            <span className="text-5xl font-extrabold text-[#FF6A1A]"><AnimatedCount target={500} />+</span>
                            <p className="mt-2 text-lg font-semibold text-gray-700">Famílias Impactadas</p>
                        </div>
                    </Animated>
                    <Animated delay={200}>
                        <div className="bg-purple-100/50 p-8 rounded-2xl">
                            <span className="text-5xl font-extrabold text-[#7B3BFF]"><AnimatedCount target={1000} />+</span>
                            <p className="mt-2 text-lg font-semibold text-gray-700">De Alimentos Doados</p>
                        </div>
                    </Animated>
                     <Animated delay={400}>
                        <div className="bg-orange-100/50 p-8 rounded-2xl">
                            <span className="text-5xl font-extrabold text-[#FF6A1A]"><AnimatedCount target={100} />+</span>
                            <p className="mt-2 text-lg font-semibold text-gray-700">Voluntários Ativos</p>
                        </div>
                    </Animated>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
                    <Animated delay={600}>
                        <ImpactCard 
                            afterImg="https://images.unsplash.com/photo-1763229999659-f2d7aee08e10?q=80&w=1171&auto-format=fit-crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            title="Reforma da Casa da Sra. Emília" 
                            description="Com a ajuda de doações, reconstruímos o lar de uma família afetada pelas chuvas." 
                        />
                    </Animated>
                    <Animated delay={800}>
                        <ImpactCard 
                            afterImg="https://images.unsplash.com/photo-1763230048077-6fe9cff4dabd?q=80&w=1171&auto-format=fit-crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            title="Cestas Básicas Mensais" 
                            description="Garantimos a segurança alimentar de dezenas de famílias em situação de vulnerabilidade." 
                        />
                    </Animated>
                </div>
                 <div className="mt-12">
                    <a href="https://www.instagram.com/projetogratifaz/?hl=en" target="_blank" rel="noopener noreferrer" className="bg-[#7B3BFF] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#6A28E6] transition-all duration-300 transform hover:scale-105 text-lg">
                        Apoiar Projetos
                    </a>
                </div>
            </div>
        </section>
    );
};