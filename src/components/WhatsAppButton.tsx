import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  text?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  variant = 'primary', 
  size = 'medium',
  className = '',
  text = 'Fazer Negócio no WhatsApp'
}) => {
  const phoneNumber = '5581982853640';
  const message = 'Olá! Gostaria de conhecer mais sobre seus serviços de criação e edição de vídeos.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const sizeClasses = {
    small: 'py-2 px-4 text-sm',
    medium: 'py-3 px-6 text-base',
    large: 'py-4 px-8 text-lg'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 text-black hover:shadow-2xl hover:shadow-yellow-400/60 hover:scale-110 border border-yellow-200/50',
    secondary: 'border-2 border-yellow-400 text-yellow-300 hover:bg-yellow-400/15 hover:border-yellow-300 hover:shadow-lg hover:shadow-yellow-400/40 backdrop-blur'
  };

  const baseClasses = 'font-bold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 group relative overflow-hidden';

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {variant === 'primary' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-white/20 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative flex items-center justify-center gap-2">
            <MessageCircle size={size === 'small' ? 16 : size === 'medium' ? 20 : 24} className="group-hover:animate-bounce" />
            <span>{text}</span>
          </div>
        </>
      )}
      {variant === 'secondary' && (
        <div className="relative flex items-center justify-center gap-2">
          <MessageCircle size={size === 'small' ? 16 : size === 'medium' ? 20 : 24} className="group-hover:scale-125 transition-transform" />
          <span className="group-hover:font-extrabold transition-all">{text}</span>
        </div>
      )}
    </a>
  );
};

export default WhatsAppButton;
