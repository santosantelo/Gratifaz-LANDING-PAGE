import React, { useState, useEffect, useRef } from 'react';

interface AnimatedProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale';
}

const Animated: React.FC<AnimatedProps> = ({ 
    children, 
    className = '', 
    delay = 0,
    animation = 'fadeUp'
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Otimização: usar will-change apenas quando necessário
        element.style.willChange = 'opacity, transform';

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Usar requestAnimationFrame para melhor performance
                    requestAnimationFrame(() => {
                        setIsVisible(true);
                        // Remover will-change após animação para melhorar performance
                        setTimeout(() => {
                            if (element) {
                                element.style.willChange = 'auto';
                            }
                        }, 1000);
                    });
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px', // Trigger um pouco antes do elemento aparecer
            }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, []);

    const getAnimationClasses = () => {
        const baseTransition = 'transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]';
        
        switch (animation) {
            case 'fadeIn':
                return isVisible 
                    ? `${baseTransition} opacity-100` 
                    : `${baseTransition} opacity-0`;
            case 'slideLeft':
                return isVisible 
                    ? `${baseTransition} opacity-100 translate-x-0` 
                    : `${baseTransition} opacity-0 translate-x-8`;
            case 'slideRight':
                return isVisible 
                    ? `${baseTransition} opacity-100 translate-x-0` 
                    : `${baseTransition} opacity-0 -translate-x-8`;
            case 'scale':
                return isVisible 
                    ? `${baseTransition} opacity-100 scale-100` 
                    : `${baseTransition} opacity-0 scale-95`;
            case 'fadeUp':
            default:
                return isVisible 
                    ? `${baseTransition} opacity-100 translate-y-0` 
                    : `${baseTransition} opacity-0 translate-y-8`;
        }
    };

    return (
        <div
            ref={ref}
            className={`${className} ${getAnimationClasses()}`}
            style={{ 
                transitionDelay: `${delay}ms`,
                backfaceVisibility: 'hidden', // Melhora performance em alguns navegadores
                perspective: '1000px'
            }}
        >
            {children}
        </div>
    );
};

export default Animated;