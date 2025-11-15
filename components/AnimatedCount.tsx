import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCountProps {
    target: number;
    duration?: number;
}

const easeOutQuad = (t: number) => t * (2 - t);

const AnimatedCount: React.FC<AnimatedCountProps> = ({ target, duration = 1500 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const element = ref.current;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let startTime: number | null = null;

                    const animate = (timestamp: number) => {
                        if (!startTime) {
                            startTime = timestamp;
                        }

                        const progress = Math.min((timestamp - startTime) / duration, 1);
                        const easedProgress = easeOutQuad(progress);
                        const currentCount = Math.floor(target * easedProgress);
                        
                        setCount(currentCount);

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(target);
                        }
                    };
                    
                    requestAnimationFrame(animate);

                    if (element) {
                        observer.unobserve(element);
                    }
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [target, duration]);

    return <span ref={ref}>{count}</span>;
};

export default AnimatedCount;
