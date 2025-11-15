import React from 'react';
import { InstagramIcon } from './icons/InstagramIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { SecurityIcon } from './icons/SecurityIcon';
import Animated from './Animated';

interface FooterProps {
    onAboutClick: () => void;
    onImpactClick: () => void;
    onHelpClick: () => void;
    onPrivacyClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAboutClick, onImpactClick, onHelpClick, onPrivacyClick }) => {
    return (
        <footer id="contato" className="bg-[#261940] text-white pt-16 pb-8 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <Animated>
                        <div className="md:text-left">
                            <h3 className="text-xl font-bold mb-4 text-[#FF6A1A]">Gratifaz</h3>
                            <p className="text-gray-300">Gratidão que se transforma em ação, levando esperança e ajuda a quem mais precisa.</p>
                             <div className="flex items-center justify-center md:justify-start mt-4 gap-2 text-gray-300">
                                <SecurityIcon className="w-5 h-5" />
                                <span>Doação Segura</span>
                            </div>
                        </div>
                    </Animated>
                    <Animated delay={200}>
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-[#7B3BFF]">Links Úteis</h3>
                            <ul className="space-y-2">
                                <li><button onClick={onAboutClick} className="hover:text-[#FF6A1A] transition-colors w-full md:w-auto">Sobre o Projeto</button></li>
                                <li><button onClick={onImpactClick} className="hover:text-[#FF6A1A] transition-colors w-full md:w-auto">Nosso Impacto</button></li>
                                <li><button onClick={onHelpClick} className="hover:text-[#FF6A1A] transition-colors w-full md:w-auto">Como Ajudar</button></li>
                                <li><button onClick={onPrivacyClick} className="hover:text-[#FF6A1A] transition-colors w-full md:w-auto">Política de Privacidade</button></li>
                            </ul>
                        </div>
                    </Animated>
                    <Animated delay={400}>
                        <div className="md:text-left">
                            <h3 className="text-xl font-bold mb-4 text-[#7B3BFF]">Contato</h3>
                            <p className="text-gray-300 mb-4">projetogratifaz@gmail.com</p>
                            <div className="flex justify-center md:justify-start space-x-4">
                                <a href="https://www.instagram.com/projetogratifaz/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FF6A1A] transition-transform transform hover:scale-125">
                                    <InstagramIcon className="w-8 h-8" />
                                </a>
                                <a href="https://w.app/j0bg3d" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FF6A1A] transition-transform transform hover:scale-125">
                                    <WhatsAppIcon className="w-8 h-8" />
                                </a>
                            </div>
                        </div>
                    </Animated>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Projeto Gratifaz. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;