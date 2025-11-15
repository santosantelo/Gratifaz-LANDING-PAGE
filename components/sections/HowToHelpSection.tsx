import React from 'react';
import { DonateIcon } from '../icons/DonateIcon';
import { BoxIcon } from '../icons/BoxIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { VolunteerIcon } from '../icons/VolunteerIcon';
import Animated from '../Animated';

interface HowToHelpProps {
    onDonateClick: () => void;
}

const HelpCard = ({ icon, title, description, buttonText, action, isPrimary = false }: { icon: React.ReactNode; title: string; description: string; buttonText: string; action: () => void; isPrimary?: boolean }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg text-center flex flex-col items-center transition-transform transform hover:-translate-y-2 h-full">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${isPrimary ? 'bg-[#FF6A1A]' : 'bg-[#7B3BFF]'}`}>
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-700 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <button onClick={action} className={`w-full font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 ${isPrimary ? 'bg-[#FF6A1A] text-white hover:bg-[#E05A10]' : 'bg-[#7B3BFF] text-white hover:bg-[#6A28E6]'}`}>
            {buttonText}
        </button>
    </div>
);

const helpOptions = [
    {
        icon: <DonateIcon className="w-8 h-8 text-white" />,
        title: "Doação Recorrente",
        description: "Apoie continuamente nossos projetos e nos ajude a planejar ações de longo prazo.",
        buttonText: "Seja Recorrente",
        action: () => { window.open('https://w.app/j0bg3d', '_blank'); },
        isPrimary: true,
    },
    {
        icon: <BoxIcon className="w-8 h-8 text-white" />,
        title: "Doação de Itens",
        description: "Roupas, alimentos e materiais de construção são sempre bem-vindos. Entre em contato.",
        buttonText: "Entrar em Contato",
        action: () => { window.open('https://w.app/j0bg3d', '_blank'); },
    },
    {
        icon: <ShareIcon className="w-8 h-8 text-white" />,
        title: "Divulgue o Projeto",
        description: "Siga-nos e compartilhe nossas ações nas redes sociais. Sua voz amplia nosso alcance!",
        buttonText: "Compartilhar",
        action: () => { window.open('https://www.instagram.com/projetogratifaz/?hl=en', '_blank'); },
    },
    {
        icon: <VolunteerIcon className="w-8 h-8 text-white" />,
        title: "Seja Voluntário",
        description: "Doe seu tempo e talento. Participe de nossas ações e sinta a gratidão de perto.",
        buttonText: "Quero ser Voluntário",
        action: () => { window.open('https://w.app/j0bg3d', '_blank'); },
    },
];

export const HowToHelpSection: React.FC<HowToHelpProps> = ({ onDonateClick }) => {
    return (
        <section id="como-ajudar" className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <Animated>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">Como você pode ajudar</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Existem muitas formas de fazer parte do Gratifaz. Escolha a que mais toca seu coração.
                        </p>
                    </div>
                </Animated>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {helpOptions.map((option, index) => (
                        <Animated key={option.title} delay={index * 150}>
                            <HelpCard {...option} />
                        </Animated>
                    ))}
                </div>
            </div>
        </section>
    );
};