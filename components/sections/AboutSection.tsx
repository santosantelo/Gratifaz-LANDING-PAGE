import React, { useEffect, useRef, useState } from 'react';
import Animated from '../Animated';

export const AboutSection: React.FC = () => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Carrega o script do Instagram embed
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//www.instagram.com/embed.js';
        script.async = true;
        script.defer = true;
        
        if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
            document.body.appendChild(script);
        }

        // Aguarda o script carregar e renderiza o embed
        script.onload = () => {
            if ((window as any).instgrm) {
                (window as any).instgrm.Embeds.process();
            }
        };

        return () => {
            // Cleanup se necessário
        };
    }, []);

    // Intersection Observer para detectar quando o vídeo entra na viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        // Renderiza o embed do Instagram quando visível
                        if ((window as any).instgrm) {
                            (window as any).instgrm.Embeds.process();
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    // Tenta iniciar o vídeo automaticamente
    useEffect(() => {
        if (!isVisible) return;

        const iframe = iframeRef.current;
        if (!iframe) return;

        // Debug: verifica se o iframe está carregando
        const handleError = () => {
            console.warn('Erro ao carregar iframe do Instagram');
        };
        
        iframe.addEventListener('error', handleError);

        const attemptPlay = () => {
            try {
                // Método 1: Tentar acessar o conteúdo do iframe diretamente
                const iframeWindow = iframe.contentWindow;
                if (iframeWindow) {
                    try {
                        const iframeDocument = iframe.contentDocument || iframeWindow.document;
                        if (iframeDocument) {
                            const video = iframeDocument.querySelector('video');
                            if (video) {
                                video.muted = true;
                                video.play().catch(() => {
                                    // Se falhar, tenta novamente após um delay
                                    setTimeout(() => {
                                        video.muted = true;
                                        video.play().catch(() => {});
                                    }, 500);
                                });
                                return;
                            }
                            
                            // Tenta encontrar botão de play e clicar
                            const playButton = iframeDocument.querySelector('[aria-label*="play" i], [aria-label*="reproduc" i], button[class*="play" i], .play-button, [role="button"]') as HTMLElement;
                            if (playButton) {
                                playButton.click();
                                return;
                            }
                        }
                    } catch (e) {
                        // Cross-origin - continua para outros métodos
                    }
                }

                // Método 2: Simular clique no iframe usando eventos de mouse
                const rect = iframe.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                // Sequência de eventos para simular um clique real
                const events = [
                    new MouseEvent('mousemove', {
                        view: window,
                        bubbles: true,
                        cancelable: true,
                        clientX: centerX,
                        clientY: centerY,
                    }),
                    new MouseEvent('mouseenter', {
                        view: window,
                        bubbles: true,
                        cancelable: true,
                        clientX: centerX,
                        clientY: centerY,
                    }),
                    new MouseEvent('mousedown', {
                        view: window,
                        bubbles: true,
                        cancelable: true,
                        clientX: centerX,
                        clientY: centerY,
                        button: 0,
                    }),
                    new MouseEvent('mouseup', {
                        view: window,
                        bubbles: true,
                        cancelable: true,
                        clientX: centerX,
                        clientY: centerY,
                        button: 0,
                    }),
                    new MouseEvent('click', {
                        view: window,
                        bubbles: true,
                        cancelable: true,
                        clientX: centerX,
                        clientY: centerY,
                        button: 0,
                    }),
                ];

                events.forEach((event, index) => {
                    setTimeout(() => {
                        iframe.dispatchEvent(event);
                        // Também tenta enviar para o iframe interno
                        if (iframe.contentWindow) {
                            try {
                                iframe.contentWindow.dispatchEvent(new MessageEvent('message', {
                                    data: { type: 'play' },
                                    origin: window.location.origin,
                                }));
                            } catch (e) {
                                // Ignora
                            }
                        }
                    }, index * 50);
                });
            } catch (e) {
                // Ignora erros
            }
        };

        // Aguarda o iframe carregar
        const handleLoad = () => {
            // Aguarda o conteúdo do Instagram carregar completamente
            // Tenta múltiplas vezes com delays crescentes
            setTimeout(attemptPlay, 1500);
            setTimeout(attemptPlay, 2500);
            setTimeout(attemptPlay, 4000);
            setTimeout(attemptPlay, 6000);
        };

        // Adiciona listener de load
        iframe.addEventListener('load', handleLoad);
        
        // Se o iframe já estiver carregado, executa imediatamente
        if (iframe.contentDocument?.readyState === 'complete' || iframe.contentWindow?.document?.readyState === 'complete') {
            // Aguarda um pouco para garantir que o conteúdo carregou
            setTimeout(handleLoad, 500);
        }

        return () => {
            iframe.removeEventListener('load', handleLoad);
            iframe.removeEventListener('error', handleError);
        };
    }, [isVisible]);

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
                        <div 
                            ref={containerRef}
                            className="relative p-1 rounded-2xl bg-gradient-to-r from-[#FF6A1A] via-purple-500 to-[#7B3BFF]"
                        >
                            <div className="bg-white rounded-2xl p-2 w-full overflow-hidden" style={{ minHeight: '600px', position: 'relative' }}>
                                <blockquote 
                                    className="instagram-media" 
                                    data-instgrm-permalink="https://www.instagram.com/reel/DRFYPleDo_I/?utm_source=ig_web_copy_link" 
                                    data-instgrm-version="14"
                                    style={{ 
                                        background: '#FFF', 
                                        border: '0',
                                        borderRadius: '12px',
                                        margin: '1px',
                                        maxWidth: '100%',
                                        minWidth: '326px',
                                        padding: 0,
                                        width: '100%',
                                        height: '580px'
                                    }}
                                ></blockquote>
                                <iframe 
                                    ref={iframeRef}
                                    src="https://www.instagram.com/reel/DRFYPleDo_I/embed/" 
                                    className="w-full rounded-xl"
                                    style={{ 
                                        minHeight: '580px', 
                                        border: 'none',
                                        width: '100%',
                                        background: '#fff',
                                        display: 'none'
                                    }}
                                    frameBorder="0"
                                    scrolling="no"
                                    allowTransparency={true}
                                    allow="autoplay; encrypted-media; fullscreen"
                                    allowFullScreen
                                    title="Vídeo do Instagram Gratifaz"
                                ></iframe>
                            </div>
                        </div>
                    </Animated>
                </div>
            </div>
        </section>
    );
};