import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase.config';
import { doc, setDoc } from 'firebase/firestore';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Create user document in Firestore
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          email,
          isAdmin: false,
          createdAt: new Date().toISOString()
        });
      }
      navigate('/admin');
    } catch (err: any) {
      setError(err.message || 'Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-slate-800/40 backdrop-blur border border-yellow-400/20 rounded-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-2">
            <span className="bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">
              Pedro Henrique
            </span>
          </h1>
          <p className="text-center text-gray-400 mb-8">
            {isLogin ? 'Entre na sua conta' : 'Crie uma nova conta'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <div className="relative">
                <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field pl-10"
                  placeholder="seu@email.com"
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Senha</label>
              <div className="relative">
                <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pl-10"
                  placeholder="••••••••"
                  disabled={loading}
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-300 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-black font-bold py-2 px-6 rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all w-full flex items-center justify-center disabled:opacity-50"
            >
              {loading ? 'Carregando...' : (isLogin ? 'Entrar' : 'Criar Conta')}
              <ArrowRight size={18} className="ml-2" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              {isLogin ? 'Não tem conta? ' : 'Já tem conta? '}
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
                }}
                className="text-yellow-300 hover:text-yellow-200 font-semibold transition-colors"
              >
                {isLogin ? 'Cadastre-se' : 'Faça login'}
              </button>
            </p>
          </div>
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          Acesso apenas para administradores
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
