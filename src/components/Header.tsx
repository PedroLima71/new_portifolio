import React, { useState } from 'react';
import { Menu, X, LogOut, LogIn } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.config';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <header className="bg-black border-b border-yellow-400/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-yellow-400/50 transition-all">
              <span className="text-black font-bold text-xl">PH</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">
              Pedro Henrique
            </h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-yellow-300 transition-colors">
              Home
            </Link>
            <Link to="/portfolio" className="text-gray-300 hover:text-yellow-300 transition-colors">
              Portfólio
            </Link>
            {user && (
              <Link to="/admin" className="text-gray-300 hover:text-yellow-300 transition-colors">
                Painel Admin
              </Link>
            )}
            {!user ? (
              <Link to="/login" className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all flex items-center space-x-2">
                <LogIn size={18} />
                <span>Entrar</span>
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all flex items-center space-x-2"
              >
                <LogOut size={18} />
                <span>Sair</span>
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-yellow-300 hover:text-yellow-200 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden mt-4 space-y-3 pb-4 border-t border-yellow-400/30 pt-4">
            <Link to="/" className="block text-gray-300 hover:text-yellow-300 transition-colors py-2">
              Home
            </Link>
            <Link to="/portfolio" className="block text-gray-300 hover:text-yellow-300 transition-colors py-2">
              Portfólio
            </Link>
            {user && (
              <Link to="/admin" className="block text-gray-300 hover:text-yellow-300 transition-colors py-2">
                Painel Admin
              </Link>
            )}
            {!user ? (
              <Link to="/login" className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all flex items-center space-x-2 w-full">
                <LogIn size={18} />
                <span>Entrar</span>
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all flex items-center space-x-2 w-full"
              >
                <LogOut size={18} />
                <span>Sair</span>
              </button>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;