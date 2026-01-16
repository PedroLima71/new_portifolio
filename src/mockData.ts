// Mock data para teste sem Firebase
export const mockVideos = [
  {
    id: '1',
    titulo: 'V32 - Conteúdo Dinâmico',
    descricao: 'Vídeo de produção de alta qualidade com edição profissional',
    thumbnail: 'https://images.unsplash.com/photo-1611162617305-c69b3fa7fbe0?w=500&h=300&fit=crop',
    urlVideo: '/videos/V32.mov',
    tipo: 'Outro' as const,
    criadoComIA: true,
    ativo: true,
    ordem: 1,
    createdAt: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    titulo: 'V618 - Reels Profissional',
    descricao: 'Reel viral com estratégia de engajamento comprovada',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f70e504c3?w=500&h=300&fit=crop',
    urlVideo: '/videos/V618.mov',
    tipo: 'Reels' as const,
    criadoComIA: false,
    ativo: true,
    ordem: 2,
    createdAt: '2024-01-14T14:20:00Z'
  },
  {
    id: '3',
    titulo: 'Motion Graphics V8',
    descricao: 'Animações impressionantes com motion graphics de impacto',
    thumbnail: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=300&fit=crop',
    urlVideo: '/videos/v8 (1) (1).mp4',
    tipo: 'Outro' as const,
    criadoComIA: true,
    ativo: true,
    ordem: 3,
    createdAt: '2024-01-13T09:15:00Z'
  },
  {
    id: '4',
    titulo: 'Video 1 - IA High Impact',
    descricao: 'Vídeo de vendas com copywriting e visual de alto impacto',
    thumbnail: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=300&fit=crop',
    urlVideo: '/videos/video1.mp4',
    tipo: 'IA' as const,
    criadoComIA: true,
    ativo: true,
    ordem: 4,
    createdAt: '2024-01-12T16:45:00Z'
  },
  {
    id: '5',
    titulo: 'Video 2 - Shorts Viral',
    descricao: 'Shorts com padrão viral pronto para TikTok e Instagram',
    thumbnail: 'https://images.unsplash.com/photo-1515232209828-30e6d82b938f?w=500&h=300&fit=crop',
    urlVideo: '/videos/video2.mp4',
    tipo: 'Shorts' as const,
    criadoComIA: false,
    ativo: true,
    ordem: 5,
    createdAt: '2024-01-11T08:30:00Z'
  },
  {
    id: '6',
    titulo: 'Video 3 - Comercial',
    descricao: 'Anúncio comercial com identidade visual e branding forte',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    urlVideo: '/videos/video3.mp4',
    tipo: 'Comercial' as const,
    criadoComIA: false,
    ativo: true,
    ordem: 6,
    createdAt: '2024-01-10T15:20:00Z'
  },
  {
    id: '7',
    titulo: 'Video 4 - Reel Profissional',
    descricao: 'Conteúdo otimizado para Instagram Reels com high engagement',
    thumbnail: 'https://images.unsplash.com/photo-1606933248051-5ce2cb1b8f83?w=500&h=300&fit=crop',
    urlVideo: '/videos/video4.mp4',
    tipo: 'Reels' as const,
    criadoComIA: true,
    ativo: true,
    ordem: 7,
    createdAt: '2024-01-09T11:00:00Z'
  },
  {
    id: '8',
    titulo: 'Video 5 - Produção Premium',
    descricao: 'Vídeo de produção com qualidade cinema 4K',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
    urlVideo: '/videos/video5.MOV',
    tipo: 'Outro' as const,
    criadoComIA: false,
    ativo: true,
    ordem: 8,
    createdAt: '2024-01-08T13:30:00Z'
  },
  {
    id: '9',
    titulo: 'Video 6 - IA Estratégica',
    descricao: 'Vídeo de vendas com estratégia de múltiplas estruturas',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    urlVideo: '/videos/video6.mp4',
    tipo: 'IA' as const,
    criadoComIA: true,
    ativo: true,
    ordem: 9,
    createdAt: '2024-01-07T10:15:00Z'
  },
  {
    id: '10',
    titulo: 'Video 7 - Shorts TikTok',
    descricao: 'Conteúdo criado especificamente para TikTok Shorts',
    thumbnail: 'https://images.unsplash.com/photo-1516191073914-48705431f396?w=500&h=300&fit=crop',
    urlVideo: '/videos/video7.mp4',
    tipo: 'Shorts' as const,
    criadoComIA: false,
    ativo: true,
    ordem: 10,
    createdAt: '2024-01-06T09:45:00Z'
  },
  {
    id: '11',
    titulo: 'Video 9 - Comercial Premium',
    descricao: 'Publicidade premium com produção de nível internacional',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
    urlVideo: '/videos/video9.mov',
    tipo: 'Comercial' as const,
    criadoComIA: false,
    ativo: true,
    ordem: 11,
    createdAt: '2024-01-05T14:00:00Z'
  }
];

export const mockComentarios = [
  {
    id: '1',
    nomeUsuario: 'João Silva',
    comentario: 'Excelente trabalho! Meu produto nunca teve tantas conversões. Recomendo demais!',
    createdAt: '2025-12-20T08:30:00Z'
  },
  {
    id: '2',
    nomeUsuario: 'Maria Santos',
    comentario: 'O vídeo ficou incrível! Muito criativo e profissional. Já estou pensando em novos projetos!',
    createdAt: '2025-12-19T15:20:00Z'
  },
  {
    id: '3',
    nomeUsuario: 'Carlos Oliveira',
    comentario: 'Rápido, eficiente e com qualidade garantida. É difícil encontrar profissionais assim.',
    createdAt: '2025-12-18T11:00:00Z'
  }
];
