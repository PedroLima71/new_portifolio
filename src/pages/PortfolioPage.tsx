import React, { useState, useEffect } from 'react';
import { db } from '../firebase.config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Video } from '../types';
import VideoCarousel from '../components/VideoCarousel';
import VideoModal from '../components/VideoModal';
import { Filter } from 'lucide-react';
import { mockVideos } from '../mockData';

const PortfolioPage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    try {
      const q = query(collection(db, 'portfolio'));
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.docs.length > 0) {
        const portfolioId = querySnapshot.docs[0].id;
        const videosQuery = query(
          collection(db, `portfolio/${portfolioId}/videos`),
          where('ativo', '==', true)
        );
        const videosSnapshot = await getDocs(videosQuery);
        const videosData = videosSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Video[];
        setVideos(videosData.sort((a, b) => a.ordem - b.ordem));
      } else {
        // Se não houver dados no Firebase, usar dados mockados
        setVideos(mockVideos.sort((a, b) => a.ordem - b.ordem));
      }
    } catch (error) {
      console.error('Erro ao carregar vídeos, usando dados de teste:', error);
      // Se houver erro ao conectar ao Firebase, usar dados mockados
      setVideos(mockVideos.sort((a, b) => a.ordem - b.ordem));
    } finally {
      setLoading(false);
    }
  };

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
    setShowModal(true);
  };

  const videoTypes = Array.from(new Set(videos.map(v => v.tipo)));
  const filteredVideos = selectedType
    ? videos.filter(v => v.tipo === selectedType)
    : videos;

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent mb-4">
          Portfólio Completo
        </h1>
        <p className="text-gray-400 mb-8">
          Confira todos os nossos vídeos e projetos realizados
        </p>

        {loading ? (
          <div className="text-center py-16">
            <p className="text-gray-400">Carregando portfólio...</p>
          </div>
        ) : (
          <>
            {/* Filtros */}
            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-4 flex items-center text-white">
                <Filter size={24} className="mr-2" />
                Filtrar por tipo
              </h2>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedType(null)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    selectedType === null
                      ? 'bg-gradient-to-r from-yellow-300 to-yellow-500 text-black shadow-lg shadow-yellow-400/50'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600 border border-yellow-400/20'
                  }`}
                >
                  {/* Todos ({videos.length}) */}
                </button>
                {videoTypes.map(type => {
                  const count = videos.filter(v => v.tipo === type).length;
                  return (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                        selectedType === type
                          ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-lg shadow-amber-400/50'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600 border border-yellow-400/20'
                      }`}
                    >
                      {type} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Grid de vídeos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredVideos.map(video => (
                <div
                  key={video.id}
                  className="group cursor-pointer overflow-hidden bg-slate-800/40 backdrop-blur border border-yellow-400/20 hover:border-yellow-400/50 rounded-xl transition-all duration-300 hover:bg-slate-800/70"
                  onClick={() => handleVideoSelect(video)}
                >
                  <div className="relative aspect-video bg-slate-700 rounded-t-lg overflow-hidden mb-4">
                    <img
                      src={video.thumbnail}
                      alt={video.titulo}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center font-bold text-black">
                        ▶
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-yellow-300 transition-colors text-white">
                      {video.titulo}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{video.descricao}</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-3 py-1 rounded-full font-bold">
                        {video.tipo}
                      </span>
                      {video.criadoComIA && (
                        <span className="text-xs bg-gradient-to-r from-amber-400 to-amber-500 text-black px-3 py-1 rounded-full font-bold">
                          Criado com IA
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredVideos.length === 0 && (
              <div className="card text-center py-12">
                <p className="text-slate-400 text-lg">
                  Nenhum vídeo encontrado para este filtro
                </p>
              </div>
            )}
          </>
        )}
      </div>

      <VideoModal
        video={selectedVideo}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </main>
  );
};

export default PortfolioPage;
