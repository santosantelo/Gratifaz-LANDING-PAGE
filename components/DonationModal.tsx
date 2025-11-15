import React, { useState } from 'react';
import { CopyIcon } from './icons/CopyIcon';
import { CheckIcon } from './icons/CheckIcon';
import { CloseIcon } from './icons/CloseIcon';

interface DonationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
    const [isCopied, setIsCopied] = useState(false);
    const pixKey = 'projetogratifaz@gmail.com';

    const handleCopy = () => {
        navigator.clipboard.writeText(pixKey).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 text-center relative transform transition-all duration-300 scale-100" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors">
                    <CloseIcon className="w-6 h-6" />
                </button>
                
                <h2 className="text-2xl font-bold text-gray-700 mb-2">Faça sua Doação com PIX</h2>
                <p className="text-gray-600 mb-6">Sua contribuição faz toda a diferença!</p>
                
                <div className="mb-6">
                    <img 
                        src="https://images.unsplash.com/vector-1763226882500-125dd2dd918f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="QR Code PIX" 
                        className="w-48 h-48 mx-auto rounded-lg border-4 border-[#7B3BFF] p-1"
                    />
                </div>
                
                <p className="text-sm text-gray-500 mb-2">Ou use a chave PIX (e-mail):</p>
                <div className="relative mb-6">
                    <input type="text" value={pixKey} readOnly className="w-full bg-gray-100 border-2 border-gray-200 rounded-lg py-3 px-4 text-center text-gray-700 font-mono focus:outline-none"/>
                    <button onClick={handleCopy} className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-all duration-300 ${isCopied ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-600 hover:bg-[#7B3BFF] hover:text-white'}`}>
                        {isCopied ? <CheckIcon className="w-5 h-5" /> : <CopyIcon className="w-5 h-5" />}
                    </button>
                </div>
                
                 <div className="space-y-3">
                    <a href="https://w.app/j0bg3d" target="_blank" rel="noopener noreferrer" className="w-full block bg-[#7B3BFF] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-[#6A28E6] transition-all duration-300 transform hover:scale-105">
                        Quero ser doador recorrente
                    </a>
                    <button onClick={onClose} className="w-full bg-[#FF6A1A] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-[#E05A10] transition-all duration-300 transform hover:scale-105">
                        Fiz minha parte!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DonationModal;