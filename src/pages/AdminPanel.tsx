import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import { db } from '../firebase.config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query } from 'firebase/firestore';
import { Video } from '../types';

const AdminPanel: React.FC = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [portfolioId, setPortfolioId] = useState<string>('');
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    thumbnail: '',
    urlVideo: '',
    tipo: 'IA' as 'IA' | 'Reels' | 'Shorts' | 'Comercial' | 'Outro',
    criadoComIA: false,
    ativo: true,
    ordem: 1
  });

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      loadPortfolioAndVideos();
    }
  }, [user]);

  const loadPortfolioAndVideos = async () => {
    try {
      const portfolioQuery = query(collection(db, 'portfolio'));
      const portfolioSnapshot = await getDocs(portfolioQuery);
      
      if (portfolioSnapshot.docs.length > 0) {
        const portfolio = portfolioSnapshot.docs[0];
        setPortfolioId(portfolio.id);

        const videosQuery = query(collection(db, `portfolio/${portfolio.id}/videos`));
        const videosSnapshot = await getDocs(videosQuery);
        const videosData = videosSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Video[];
        setVideos(videosData.sort((a, b) => a.ordem - b.ordem));
      }
    } catch (error) {
      console.error('Erro ao carregar vídeos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddVideo = async () => {
    if (!portfolioId) {
      alert('Erro: Portfólio não encontrado');
      return;
    }

    try {
      await addDoc(collection(db, `portfolio/${portfolioId}/videos`), {
        ...formData,
        createdAt: new Date().toISOString()
      });

      setFormData({
        titulo: '',
        descricao: '',
        thumbnail: '',
        urlVideo: '',
        tipo: 'IA',
        criadoComIA: false,
        ativo: true,
        ordem: videos.length + 1
      });
      setShowAddForm(false);
      loadPortfolioAndVideos();
    } catch (error) {
      console.error('Erro ao adicionar vídeo:', error);
      alert('Erro ao adicionar vídeo');
    }
  };

  const handleUpdateVideo = async (videoId: string) => {
    try {
      await updateDoc(doc(db, `portfolio/${portfolioId}/videos`, videoId), formData);
      setEditingId(null);
      loadPortfolioAndVideos();
    } catch (error) {
      console.error('Erro ao atualizar vídeo:', error);
    }
  };

  const handleDeleteVideo = async (videoId: string) => {
    if (!window.confirm('Tem certeza que deseja deletar este vídeo?')) return;
    try {
      await deleteDoc(doc(db, `portfolio/${portfolioId}/videos`, videoId));
      loadPortfolioAndVideos();
    } catch (error) {
      console.error('Erro ao deletar vídeo:', error);
    }
  };

  const handleEditClick = (video: Video) => {
    setFormData({
      titulo: video.titulo,
      descricao: video.descricao,
      thumbnail: video.thumbnail,
      urlVideo: video.urlVideo,
      tipo: video.tipo,
      criadoComIA: video.criadoComIA,
      ativo: video.ativo,
      ordem: video.ordem
    });
    setEditingId(video.id);
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-400">Carregando...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent mb-8">
          Painel de Administração
        </h1>

        {/* Botão para adicionar */}
        {!showAddForm && !editingId && (
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-black font-bold py-2 px-6 rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all flex items-center mb-8"
          >
            <Plus size={20} className="mr-2" />
            Adicionar Vídeo
          </button>
        )}

        {/* Formulário de adicionar/editar */}
        {(showAddForm || editingId) && (
          <div className="bg-slate-800/40 backdrop-blur border border-yellow-400/30 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-white">
              {editingId ? 'Editar Vídeo' : 'Novo Vídeo'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Título</label>
                <input
                  type="text"
                  value={formData.titulo}
                  onChange={(e) => setFormData({...formData, titulo: e.target.value})}
                  className="input-field"
                  placeholder="Título do vídeo"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Tipo</label>
                <select
                  value={formData.tipo}
                  onChange={(e) => setFormData({...formData, tipo: e.target.value as 'IA' | 'Reels' | 'Shorts' | 'Comercial' | 'Outro'})}
                  className="input-field"
                >
                  <option>IA</option>
                  <option>Reels</option>
                  <option>Shorts</option>
                  <option>Comercial</option>
                  <option>Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">URL do Vídeo</label>
                <input
                  type="url"
                  value={formData.urlVideo}
                  onChange={(e) => setFormData({...formData, urlVideo: e.target.value})}
                  className="input-field"
                  placeholder="https://youtube.com/embed/..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">URL da Thumbnail</label>
                <input
                  type="url"
                  value={formData.thumbnail}
                  onChange={(e) => setFormData({...formData, thumbnail: e.target.value})}
                  className="input-field"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Ordem</label>
                <input
                  type="number"
                  value={formData.ordem}
                  onChange={(e) => setFormData({...formData, ordem: parseInt(e.target.value)})}
                  className="input-field"
                  placeholder="1"
                />
              </div>

              <div className="flex items-end gap-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.criadoComIA}
                    onChange={(e) => setFormData({...formData, criadoComIA: e.target.checked})}
                    className="w-4 h-4"
                  />
                  <span>Criado com IA</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.ativo}
                    onChange={(e) => setFormData({...formData, ativo: e.target.checked})}
                    className="w-4 h-4"
                  />
                  <span>Ativo</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Descrição</label>
              <textarea
                value={formData.descricao}
                onChange={(e) => setFormData({...formData, descricao: e.target.value})}
                className="input-field resize-none h-24"
                placeholder="Descrição do vídeo"
              />
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => editingId ? handleUpdateVideo(editingId) : handleAddVideo()}
                className="btn-primary flex items-center"
              >
                <Save size={20} className="mr-2" />
                {editingId ? 'Salvar Alterações' : 'Adicionar Vídeo'}
              </button>
              <button
                onClick={() => {
                  setShowAddForm(false);
                  setEditingId(null);
                }}
                className="btn-secondary flex items-center"
              >
                <X size={20} className="mr-2" />
                Cancelar
              </button>
            </div>
          </div>
        )}

        {/* Lista de vídeos */}
        <div className="grid gap-6">
          <h2 className="text-2xl font-bold">Vídeos ({videos.length})</h2>
          {videos.length === 0 ? (
            <div className="card text-center py-8">
              <p className="text-slate-400">Nenhum vídeo adicionado ainda</p>
            </div>
          ) : (
            videos.map(video => (
              <div key={video.id} className="card">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
                  <div>
                    <img
                      src={video.thumbnail}
                      alt={video.titulo}
                      className="w-full h-24 object-cover rounded"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="font-bold text-lg mb-2 text-white">{video.titulo}</h3>
                    <p className="text-gray-400 text-sm mb-2">{video.descricao}</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-2 py-1 rounded font-bold">
                        {video.tipo}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded font-bold ${
                        video.ativo ? 'bg-green-600/50 text-green-200' : 'bg-red-600/50 text-red-200'
                      }`}>
                        {video.ativo ? 'Ativo' : 'Inativo'}
                      </span>
                      {video.criadoComIA && (
                        <span className="text-xs bg-gradient-to-r from-amber-400 to-amber-500 text-black px-2 py-1 rounded font-bold">
                          IA
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditClick(video)}
                      className="btn-secondary flex items-center justify-center flex-1"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteVideo(video.id)}
                      className="btn-danger flex items-center justify-center flex-1"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default AdminPanel;
