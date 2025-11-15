import React, { useEffect, useRef } from 'react';
import Animated from '../Animated';

export const AboutSection: React.FC = () => {
    const scriptLoadedRef = useRef(false);

    // Carrega o script do Instagram embed apenas uma vez
    useEffect(() => {
        if (scriptLoadedRef.current) return;

        try {
            const existingScript = document.querySelector('script[src*="instagram.com/embed.js"]');
            
            if (!existingScript) {
                const script = document.createElement('script');
                script.src = 'https://www.instagram.com/embed.js';
                script.async = true;
                script.defer = true;
                
                script.onload = () => {
                    scriptLoadedRef.current = true;
                    // Processa os embeds após um pequeno delay para garantir que o DOM está pronto
                    requestAnimationFrame(() => {
                        setTimeout(() => {
                            try {
                                if ((window as any).instgrm?.Embeds) {
                                    (window as any).instgrm.Embeds.process();
                                }
                            } catch (e) {
                                // Silenciosamente ignora erros
                            }
                        }, 500);
                    });
                };

                script.onerror = () => {
                    // Silenciosamente ignora erros de carregamento
                };

                document.body.appendChild(script);
                scriptLoadedRef.current = true;
            } else {
                scriptLoadedRef.current = true;
                // Se o script já existe, processa após um delay
                requestAnimationFrame(() => {
                    setTimeout(() => {
                        try {
                            if ((window as any).instgrm?.Embeds) {
                                (window as any).instgrm.Embeds.process();
                            }
                        } catch (e) {
                            // Silenciosamente ignora erros
                        }
                    }, 500);
                });
            }
        } catch (e) {
            // Silenciosamente ignora erros
        }
    }, []);

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
                        <div className="relative p-1 rounded-2xl bg-gradient-to-r from-[#FF6A1A] via-purple-500 to-[#7B3BFF]">
                            <div className="bg-white rounded-2xl p-2 w-full" style={{ 
                                minHeight: '600px', 
                                position: 'relative', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                overflow: 'hidden'
                            }}>
                                <div style={{ 
                                    width: '100%', 
                                    height: '580px', 
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: '12px'
                                }}>
                                    <blockquote 
                                        className="instagram-media" 
                                        data-instgrm-permalink="https://www.instagram.com/reel/DRFYPleDo_I/?utm_source=ig_web_copy_link" 
                                        data-instgrm-version="14"
                                        style={{ 
                                            background: '#FFF', 
                                            border: '0',
                                            borderRadius: '12px',
                                            margin: '0',
                                            padding: '0',
                                            width: '100%',
                                            height: '100%',
                                            maxWidth: '100%',
                                            minWidth: '280px',
                                            display: 'block',
                                            overflow: 'hidden',
                                            position: 'relative'
                                        }}
                                    ></blockquote>
                                </div>
                            </div>
                        </div>
                    </Animated>
                </div>
            </div>
        </section>
    );
};