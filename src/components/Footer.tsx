import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="relative text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Pedro Henrique
            </h3>
            <p className="text-slate-400">
              Criação e edição de vídeos de alta qualidade com uso de tecnologia e IA.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-slate-200 mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#portfolio" className="hover:text-indigo-400 transition-colors">Portfólio</a></li>
              <li><a href="#comentarios" className="hover:text-indigo-400 transition-colors">Comentários</a></li>
              <li><a href="#contato" className="hover:text-indigo-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold text-slate-200 mb-4">Contato</h4>
            <p className="text-slate-400 mb-2">📧 contato@pedrostudio.com</p>
            <p className="text-slate-400">📱 +55 (81) 98285-3640</p>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-slate-400">
            © {currentYear} Pedro Henrique. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
