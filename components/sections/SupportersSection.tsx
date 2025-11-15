import React from 'react';
import Animated from '../Animated';

const supporters = [
    { name: '@clubedaalice', handle: 'clubedaalice' },
    { name: '@jeffreychiquini', handle: 'jeffreychiquini' },
    { name: '@jessicachiquini', handle: 'jessicachiquini' },
    { name: '@biomax_cwb', handle: 'biomax_cwb' },
    { name: '@t.h.ranch', handle: 't.h.ranch' },
    { name: '@hospitalveterinarionivo', handle: 'hospitalveterinarionivo' },
    { name: '@hrccuritiba', handle: 'hrccuritiba' },
];

interface SupporterLinkProps {
    name: string;
    handle: string;
    index: number;
}

const SupporterLink: React.FC<SupporterLinkProps> = ({ name, handle, index }) => {
    const colorClass = index % 2 === 0 ? 'text-[#FF6A1A]' : 'text-[#7B3BFF]';
    
    return (
        <a 
            href={`https://www.instagram.com/${handle}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`text-lg font-semibold ${colorClass} hover:opacity-80 transition-opacity mx-8 whitespace-nowrap`}
        >
            {name}
        </a>
    );
};

export const SupportersSection: React.FC = () => {
    return (
        <section id="apoiadores" className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto">
                <Animated className="px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">Nossos Apoiadores</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Agradecemos a todos que acreditam e apoiam nossa causa. Juntos, fazemos a diferença.
                        </p>
                    </div>
                </Animated>
                <div className="relative flex">
                    {/* To create a seamless scroll, we duplicate the content */}
                    <div className="flex scrolling-wrapper">
                        {supporters.map((supporter, index) => (
                            <SupporterLink key={index} name={supporter.name} handle={supporter.handle} index={index} />
                        ))}
                    </div>
                    <div className="flex scrolling-wrapper" aria-hidden="true">
                        {supporters.map((supporter, index) => (
                            <SupporterLink key={index + supporters.length} name={supporter.name} handle={supporter.handle} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};