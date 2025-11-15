import React, { useState } from 'react';
import Footer from './components/Footer';
import DonationModal from './components/DonationModal';
import InfoModal from './components/InfoModal';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ImpactSection } from './components/sections/ImpactSection';
import { HowToHelpSection } from './components/sections/HowToHelpSection';
import { SupportersSection } from './components/sections/SupportersSection';
import { DonateIcon } from './components/icons/DonateIcon';

export default function App() {
    const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
    const [infoModalContent, setInfoModalContent] = useState<{ title: string; content: React.ReactNode } | null>(null);

    const openDonationModal = () => setIsDonationModalOpen(true);
    const closeDonationModal = () => setIsDonationModalOpen(false);
    const closeInfoModal = () => setInfoModalContent(null);

    // Content for InfoModal
    const aboutContent = (
        <>
            <p className="mb-4">Somos um movimento de <span className="font-bold text-[#FF6A1A]">gratidão em ação</span>. Levamos luz e esperança a quem mais precisa, transformando pequenas doações em grandes mudanças.</p>
            <p>Fundado por <a href="https://www.instagram.com/_nicolesantacruz" target="_blank" rel="noopener noreferrer" className="font-bold text-[#7B3BFF] hover:underline">@_nicolesantacruz</a>, nosso objetivo atual é a reconstrução de Rio Bonito do Iguaçu, apoiando famílias e comunidades a se reerguerem.</p>
        </>
    );

    const impactContent = (
        <>
            <p className="mb-8">Cada doação, cada hora de voluntariado, cada compartilhamento nos ajuda a construir um futuro melhor. Veja o que já conquistamos juntos.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-6">
                <div className="bg-orange-100/50 p-4 rounded-lg">
                    <span className="text-3xl font-extrabold text-[#FF6A1A]">500+</span>
                    <p className="mt-1 font-semibold text-gray-700">Famílias Impactadas</p>
                </div>
                <div className="bg-purple-100/50 p-4 rounded-lg">
                    <span className="text-3xl font-extrabold text-[#7B3BFF]">1000+</span>
                    <p className="mt-1 font-semibold text-gray-700">De Alimentos Doados</p>
                </div>
                 <div className="bg-orange-100/50 p-4 rounded-lg">
                    <span className="text-3xl font-extrabold text-[#FF6A1A]">100+</span>
                    <p className="mt-1 font-semibold text-gray-700">Voluntários Ativos</p>
                </div>
            </div>
            <p>Nossas ações incluem a reforma de casas, como a da Sra. Emília, e a garantia de segurança alimentar com cestas básicas mensais para dezenas de famílias em vulnerabilidade.</p>
        </>
    );

    const howToHelpContent = (
        <>
            <p className="mb-4">Existem muitas formas de fazer parte do Gratifaz. Escolha a que mais toca seu coração:</p>
            <ul className="list-disc list-inside space-y-3">
                <li><strong className="text-gray-700">Doação Recorrente:</strong> Apoie continuamente nossos projetos e nos ajude a planejar ações de longo prazo.</li>
                <li><strong className="text-gray-700">Doação de Itens:</strong> Roupas, alimentos e materiais de construção são sempre bem-vindos.</li>
                <li><strong className="text-gray-700">Divulgue o Projeto:</strong> Siga-nos e compartilhe nossas ações nas redes sociais. Sua voz amplia nosso alcance!</li>
                <li><strong className="text-gray-700">Seja Voluntário:</strong> Doe seu tempo e talento. Participe de nossas ações e sinta a gratidão de perto.</li>
            </ul>
        </>
    );

    const privacyContent = (
         <p className="text-sm">
            Nós do Projeto Gratifaz valorizamos e respeitamos sua privacidade. As informações fornecidas durante o processo de doação são processadas através de plataformas seguras e não são armazenadas em nossos servidores. Não compartilhamos seus dados pessoais com terceiros. O uso de suas informações é estritamente para o processamento da sua contribuição e, caso opte, para o envio de atualizações sobre nosso trabalho e impacto.
        </p>
    );

    const handleOpenModal = (title: string, content: React.ReactNode) => {
        setInfoModalContent({ title, content });
    };
    
    return (
        <div className="bg-white min-h-screen font-sans">
            <main>
                <HeroSection onDonateClick={openDonationModal} />
                <AboutSection />
                <ImpactSection />
                <HowToHelpSection onDonateClick={openDonationModal} />
                <SupportersSection />
            </main>
            <Footer 
                onAboutClick={() => handleOpenModal('Sobre o Projeto', aboutContent)}
                onImpactClick={() => handleOpenModal('Nosso Impacto', impactContent)}
                onHelpClick={() => handleOpenModal('Como Ajudar', howToHelpContent)}
                onPrivacyClick={() => handleOpenModal('Política de Privacidade', privacyContent)}
            />
            <DonationModal isOpen={isDonationModalOpen} onClose={closeDonationModal} />
            <InfoModal 
                isOpen={!!infoModalContent} 
                onClose={closeInfoModal} 
                title={infoModalContent?.title || ''}
            >
                {infoModalContent?.content}
            </InfoModal>

            {/* Floating Action Button - Always Visible */}
            <div className="fixed bottom-6 right-6 z-50 transition-all duration-300">
                <button
                    onClick={openDonationModal}
                    className="bg-[#FF6A1A] text-white p-4 rounded-full shadow-2xl hover:bg-[#E05A10] focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-300 transform hover:scale-110 active:scale-95"
                    aria-label="Doar com PIX"
                    title="Doar com PIX"
                >
                    <DonateIcon className="w-8 h-8" />
                </button>
            </div>
        </div>
    );
}