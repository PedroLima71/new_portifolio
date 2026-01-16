import React, { useState } from 'react';
import { Play, Zap } from 'lucide-react';
import { Video } from '../types';

interface VideoCarouselProps {
  videos: Video[];
  onVideoSelect?: (video: Video) => void;
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos, onVideoSelect }) => {
  const [selectedVideoType, setSelectedVideoType] = useState<string | null>(null);

  const filteredVideos = selectedVideoType
    ? videos.filter(v => v.tipo === selectedVideoType && v.ativo)
    : videos.filter(v => v.ativo);

  const sortedVideos = [...filteredVideos].sort((a, b) => a.ordem - b.ordem);
  const videoTypes = Array.from(new Set(videos.map(v => v.tipo)));

  if (sortedVideos.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-slate-400 text-lg">Nenhum vídeo disponível</p>
      </div>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">
          Carrossel de {selectedVideoType || 'reels'}
        </h2>

        {/* Filtros */}
        <div className="flex flex-wrap gap-3 mb-12">
          {/* <button
            onClick={() => setSelectedVideoType(null)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              selectedVideoType === null
                ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-lg shadow-yellow-400/50'
                : 'bg-slate-800/60 text-gray-300 hover:border-yellow-400/50 border border-yellow-400/20'
            }`}
          >
            Todos ({sortedVideos.length})
          </button> */}
          {videoTypes.map(type => (
            <button
              key={type}
              onClick={() => setSelectedVideoType(type)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedVideoType === type
                  ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-lg shadow-yellow-400/50'
                  : 'bg-slate-800/60 text-gray-300 hover:border-yellow-400/50 border border-yellow-400/20'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Grid de vídeos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedVideos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer"
              onClick={() => onVideoSelect?.(video)}
            >
              <div className="relative w-full aspect-video bg-slate-900 rounded-xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400/50 transition-all hover:shadow-lg hover:shadow-yellow-400/30">
                {/* Thumbnail/Preview - Mostra a imagem */}
                <img
                  src={video.thumbnail}
                  alt={video.titulo}
                  className="w-full h-full object-cover"
                />

                {/* Overlay com play button */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center animate-pulse-glow shadow-lg shadow-yellow-400/50 mb-4">
                    <Play size={32} className="text-black fill-black" />
                  </div>
                </div>

                {/* Badges */}
                <div className="absolute top-3 right-3 flex gap-2">
                  {video.criadoComIA && (
                    <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                      <Zap size={12} /> IA
                    </div>
                  )}
                </div>

                {/* Info no rodapé */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                  <p className="text-white font-semibold text-sm line-clamp-2">{video.titulo}</p>
                  <p className="text-yellow-300 text-xs mt-1">{video.tipo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sortedVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">
              Nenhum vídeo encontrado para este filtro
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoCarousel;
