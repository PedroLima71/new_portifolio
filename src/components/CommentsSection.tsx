import React, { useState, useEffect } from 'react';
import { Trash2, Star } from 'lucide-react';
import { db } from '../firebase.config';
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  orderBy,
  Timestamp
} from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';
import { Comentario } from '../types';
import { mockComentarios } from '../mockData';

/* Avatar com iniciais */
const getInitials = (name: string) => {
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
};

const CommentsSection: React.FC = () => {
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [comentario, setComentario] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    loadComentarios();
  }, []);

  const loadComentarios = async () => {
    try {
      const q = query(
        collection(db, 'comentarios'),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      const comentariosData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Comentario[];
      setComentarios(comentariosData);
    } catch (error) {
      console.error('Erro ao carregar comentários, usando mock:', error);
      setComentarios(mockComentarios);
    }
  };

  const handleAddComentario = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nomeUsuario.trim() || !comentario.trim()) {
      alert('Preencha todos os campos');
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, 'comentarios'), {
        nomeUsuario,
        comentario,
        rating,
        createdAt: Timestamp.now()
      });

      setNomeUsuario('');
      setComentario('');
      setRating(5);
      loadComentarios();
    } catch (error) {
      console.error('Erro ao adicionar comentário:', error);
      alert('Erro ao enviar comentário');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteComentario = async (id: string) => {
    if (!window.confirm('Deseja realmente deletar este comentário?')) return;
    await deleteDoc(doc(db, 'comentarios', id));
    loadComentarios();
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return '';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  return (
    <div id="comentarios" className="mb-16">
      {/* HEADER */}
      <div className="mb-12 text-center">
        <h3 className="text-5xl font-bold bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent mb-4">
          O que nossos clientes dizem
        </h3>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Depoimentos reais de clientes que confiaram no nosso trabalho e
          alcançaram um novo padrão de qualidade e resultado.
        </p>

        <div className="mt-6 flex justify-center">
          <span className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* FORM */}
        <form
          onSubmit={handleAddComentario}
          className="bg-slate-800/40 border border-yellow-400/20 rounded-xl p-6"
        >
          <div className="flex gap-1 mb-4">
            {[1, 2, 3, 4, 5].map(star => (
              <button
                type="button"
                key={star}
                onClick={() => setRating(star)}
              >
                <Star
                  size={24}
                  className={
                    star <= rating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-500'
                  }
                />
              </button>
            ))}
          </div>

          <input
            placeholder="Seu nome"
            value={nomeUsuario}
            onChange={e => setNomeUsuario(e.target.value)}
            className="w-full mb-3 px-4 py-2 rounded-lg bg-slate-700 text-white focus:outline-none"
          />

          <textarea
            placeholder="Seu comentário"
            value={comentario}
            onChange={e => setComentario(e.target.value)}
            className="w-full h-32 mb-4 px-4 py-2 rounded-lg bg-slate-700 text-white focus:outline-none resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-500 transition"
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>

        {/* LISTA DE COMENTÁRIOS */}
        <div className="lg:col-span-2 space-y-4">
          {comentarios.map(com => (
            <div
              key={com.id}
              className="bg-slate-800/40 border border-yellow-400/20 rounded-lg p-4 flex gap-4"
            >
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold text-sm">
                {getInitials(com.nomeUsuario)}
              </div>

              <div className="flex-1">
                <h4 className="text-yellow-300 font-bold">
                  {com.nomeUsuario}
                </h4>

                <div className="flex gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star
                      key={star}
                      size={14}
                      className={
                        star <= com.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-600'
                      }
                    />
                  ))}
                </div>

                <p className="text-gray-300">{com.comentario}</p>

                <p className="text-sm text-gray-500 mt-1">
                  {formatDate(com.createdAt)}
                </p>
              </div>

              {user && (
                <button
                  onClick={() => handleDeleteComentario(com.id)}
                  className="text-red-400 hover:text-red-500 transition"
                >
                  <Trash2 size={18} />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentsSection;
