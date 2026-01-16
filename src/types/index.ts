// Tipos do Portfólio
export interface Video {
  id: string;
  titulo: string;
  descricao: string;
  thumbnail: string;
  urlVideo: string;
  tipo: 'IA' | 'Reels' | 'Shorts' | 'Comercial' | 'Outro';
  criadoComIA: boolean;
  ativo: boolean;
  ordem: number;
  createdAt: string;
}

export interface Comentario {
  id: string;
  nomeUsuario: string;
  comentario: string;
  createdAt: string;
}

export interface Portfolio {
  id: string;
  nome: string;
  descricao: string;
  telefone: string;
  whatsappLink?: string;
  createdAt: string;
  videos?: Video[];
}

export interface Usuario {
  uid: string;
  email: string;
  nome: string;
  isAdmin: boolean;
  createdAt: string;
}
