import React from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';

interface ContactSectionProps {
  telefone?: string;
  email?: string;
  whatsappLink?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  telefone = '+55 (81) 98285-3640',
  email = 'contato@pedrostudio.com',
  whatsappLink = 'https://wa.me/5511987654321'
}) => {
  const skills = [
    {
      icon: '🎬',
      title: 'Edição de Vídeos',
      desc: 'Experiência com Adobe Premiere, Final Cut e DaVinci Resolve.',
      gradient: 'from-yellow-400 to-amber-500'
    },
    {
      icon: '✍️',
      title: 'Criação de Roteiros',
      desc: 'Roteiros envolventes que capturam atenção e entregam impacto.',
      gradient: 'from-yellow-300 to-yellow-500'
    },
    {
      icon: '✨',
      title: 'Motion Graphics',
      desc: 'Animações e efeitos visuais que dão vida a vídeos e ideias.',
      gradient: 'from-amber-400 to-orange-500'
    },
    {
      icon: '📱',
      title: 'Produção de Conteúdo',
      desc: 'Conteúdo estratégico para mídias sociais e plataformas digitais.',
      gradient: 'from-yellow-400 to-yellow-600'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-yellow-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-white">Entre em </span>
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-gray-300 text-lg">Vamos transformar sua visão em realidade</p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Telefone */}
          <div className="group cursor-pointer relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
            <div className="relative bg-slate-900/90 backdrop-blur border border-gray-800 hover:border-yellow-400/50 rounded-xl p-8 text-center transition-all duration-300 group-hover:bg-black/90">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Phone size={36} className="text-black font-bold" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Telefone</h3>
              <p className="text-gray-300 mb-6 text-lg font-semibold">{telefone}</p>
              <a
                href={`tel:${telefone.replace(/\D/g, '')}`}
                className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105"
              >
                Ligar Agora
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="group cursor-pointer relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
            <div className="relative bg-slate-900/90 backdrop-blur border border-gray-800 hover:border-yellow-300/50 rounded-xl p-8 text-center transition-all duration-300 group-hover:bg-black/90">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle size={36} className="text-black font-bold" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">WhatsApp</h3>
              <p className="text-gray-300 mb-6 text-lg font-semibold">Mensagem Rápida</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-yellow-300 to-yellow-500 text-black font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-yellow-300/50 transition-all duration-300 hover:scale-105"
              >
                Abrir WhatsApp
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="group cursor-pointer relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
            <div className="relative bg-slate-900/90 backdrop-blur border border-gray-800 hover:border-amber-400/50 rounded-xl p-8 text-center transition-all duration-300 group-hover:bg-black/90">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Mail size={36} className="text-black font-bold" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Email</h3>
              <p className="text-gray-300 mb-6 text-lg font-semibold">{email}</p>
              <a
                href={`mailto:${email}`}
                className="inline-block bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-amber-400/50 transition-all duration-300 hover:scale-105"
              >
                Enviar Email
              </a>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-white text-center mb-12">
            <span className="bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">Minhas Habilidades</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="group cursor-pointer relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500`} />
                <div className="relative bg-slate-900/90 backdrop-blur border border-gray-800 group-hover:border-yellow-400/50 rounded-xl p-6 h-full transition-all duration-300 group-hover:bg-black/90 group-hover:shadow-lg">
                  <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">{skill.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">{skill.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">{skill.desc}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 to-amber-500 rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />
          <div className="relative bg-gradient-to-r from-slate-800 to-slate-900 border-2 border-yellow-400/30 group-hover:border-yellow-400/70 rounded-2xl p-12 text-center transition-all duration-300">
            <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-yellow-300 transition-colors">
              🚀 Pronto para começar seu projeto?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Entre em contato agora e vamos transformar sua visão em realidade de forma criativa e estratégica
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 text-black font-bold py-4 px-8 rounded-lg text-lg hover:shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle size={24} className="inline mr-2 mb-1" />
              Iniciar Conversa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
