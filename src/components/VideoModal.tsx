import React from 'react';
import { X, Play } from 'lucide-react';
import { Video } from '../types';

interface VideoModalProps {
  video: Video | null;
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ video, isOpen, onClose }) => {
  if (!isOpen || !video) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="bg-slate-800 rounded-lg max-w-2xl w-full max-h-96 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-slate-700">
          <h2 className="text-xl font-bold text-white">{video.titulo}</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Video Container */}
        <div className="aspect-video bg-black">
          {video.urlVideo.includes('youtube.com') || video.urlVideo.includes('youtu.be') ? (
            <iframe
              width="100%"
              height="100%"
              src={`${video.urlVideo}?autoplay=1`}
              title={video.titulo}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <video
              width="100%"
              height="100%"
              controls
              autoPlay
              className="w-full h-full"
            >
              <source src={video.urlVideo} />
              Seu navegador não suporta vídeo HTML5.
            </video>
          )}
        </div>

        {/* Info */}
        <div className="p-4 border-t border-yellow-400/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-yellow-300">{video.tipo}</span>
            {video.criadoComIA && (
              <span className="text-sm bg-gradient-to-r from-yellow-400 to-amber-500 px-2 py-1 rounded text-black font-bold">
                Criado com IA
              </span>
            )}
          </div>
          <p className="text-gray-400 text-sm">{video.descricao}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
