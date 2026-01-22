# Pedro Henrique Portfolio

Portfólio interativo moderno para a empresa Pedro Henrique, especializada em edição e criação de vídeos.

## Funcionalidades

✅ **Carrossel de Vídeos** - Exibição dinâmica de vídeos com filtros por tipo  
✅ **Seção de Comentários** - Usuários podem deixar comentários (públicos)  
✅ **Seção de Contato** - Links diretos para WhatsApp, telefone e email  
✅ **Painel Administrativo** - Adicionar, editar e remover vídeos  
✅ **Autenticação Firebase** - Login seguro para administradores  
✅ **Design Responsivo** - Totalmente otimizado para mobile e desktop  
✅ **Integração com Firestore** - Banco de dados em tempo real  

## Estrutura do Projeto

```
src/
├── components/          # Componentes React reutilizáveis
│   ├── Header.tsx       # Cabeçalho com navegação
│   ├── Footer.tsx       # Rodapé
│   ├── VideoCarousel.tsx # Carrossel interativo de vídeos
│   ├── VideoModal.tsx   # Modal para exibição de vídeos
│   └── CommentsSection.tsx # Seção de comentários
│   └── ContactSection.tsx   # Seção de contato
├── pages/              # Páginas principais
│   ├── Home.tsx        # Página inicial
│   ├── PortfolioPage.tsx # Página de portfólio completo
│   ├── LoginPage.tsx   # Página de login
│   └── AdminPanel.tsx  # Painel administrativo
├── contexts/           # Context API
│   └── AuthContext.tsx # Contexto de autenticação
├── types/              # Tipos TypeScript
│   └── index.ts        # Interfaces do projeto
├── App.tsx             # Componente raiz
├── main.tsx            # Ponto de entrada
├── index.css           # Estilos globais
└── firebase.config.ts  # Configuração do Firebase
```

## Estrutura do Firestore

```
portfolio/
  ├── nome: string
  ├── descricao: string
  ├── telefone: string
  ├── createdAt: timestamp
  └── videos/ (subcoleção)
      └── [videoId]
          ├── titulo: string
          ├── descricao: string
          ├── thumbnail: string
          ├── urlVideo: string
          ├── tipo: 'IA' | 'Reels' | 'Shorts' | 'Comercial' | 'Outro'
          ├── criadoComIA: boolean
          ├── ativo: boolean
          ├── ordem: number
          └── createdAt: timestamp

comentarios/ (coleção)
  └── [comentarioId]
      ├── nomeUsuario: string
      ├── comentario: string
      └── createdAt: timestamp

users/ (coleção)
  └── [userId]
      ├── email: string
      ├── isAdmin: boolean
      └── createdAt: timestamp
```

## Regras de Segurança do Firestore

```javascript
service cloud.firestore {
  match /databases/{database}/documents {

    // PORTFÓLIO (dados públicos)
    match /portfolio/{portfolioId} {
      allow read: if true;
      allow write: if request.auth != null;

      match /videos/{videoId} {
        allow read: if true;
        allow write: if request.auth != null;
      }
    }

    // COMENTÁRIOS PÚBLICOS
    match /comentarios/{comentarioId} {
      allow read: if true;
      allow create: if true;
      allow update, delete: if request.auth != null;
    }

    // USUÁRIOS (ADMIN)
    match /users/{userId} {
      allow read, write: if request.auth != null
        && request.auth.uid == userId;
    }
  }
}
```

## Instalação

### 1. Clonar o repositório
```bash
git clone <seu-repo>
cd pedro-studio-portfolio
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Configurar variáveis de ambiente

Copie o arquivo `.env.example` para `.env.local` e preencha com suas credenciais do Firebase:

```bash
cp .env.example .env.local
```

Após clonar/baixar, edite `.env.local` com suas credenciais:

```
VITE_FIREBASE_API_KEY=seu_api_key
VITE_FIREBASE_AUTH_DOMAIN=seu_auth_domain
VITE_FIREBASE_PROJECT_ID=seu_project_id
VITE_FIREBASE_STORAGE_BUCKET=seu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=seu_messaging_sender_id
VITE_FIREBASE_APP_ID=seu_app_id
```

### 4. Executar em desenvolvimento
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### 5. Build para produção
```bash
npm run build
```

## Como Usar

### Para Visitantes
1. Acesse a página inicial para ver informações sobre Pedro Henrique
2. Clique em "Portfólio" para visualizar todos os vídeos
3. Filtre vídeos por tipo (IA, Reels, etc.)
4. Clique em um vídeo para assistir no modal
5. Deixe um comentário na seção de comentários
6. Acesse a seção de contato para entrar em contato via WhatsApp, email ou telefone

### Para Administradores
1. Clique em "Entrar" no cabeçalho
2. Faça login com seu email e senha
3. Acesse "Painel Admin"
4. **Gerenciar Vídeos:**
   - Clique em "Adicionar Vídeo" para criar um novo
   - Preencha os campos obrigatórios
   - Defina a ordem de exibição
   - Marque se foi criado com IA
   - Clique em "Adicionar Vídeo"
5. **Editar Vídeos:**
   - Clique em "Editar" em um vídeo existente
   - Modifique os dados
   - Clique em "Salvar Alterações"
6. **Deletar Vídeos:**
   - Clique em "Deletar" para remover um vídeo
7. **Gerenciar Comentários:**
   - Na página inicial, você pode deletar comentários indesejados

## Tecnologias Utilizadas

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool rápido
- **Firebase** - Backend e autenticação
- **Firestore** - Banco de dados em tempo real
- **Tailwind CSS** - Framework de estilos
- **React Router** - Roteamento
- **Lucide Icons** - Ícones SVG

## Design

### Cores Principais
- Primária: Indigo (rgb(99, 102, 241))
- Secundária: Purple (rgb(147, 51, 234))
- Fundo: Slate (rgb(15, 23, 42))
- Acentos: Pink, Green, Blue

### Componentes de UI
- Buttons com gradientes e hover effects
- Cards com efeitos de sombra
- Inputs com focus states
- Animações suaves com transições CSS

## Funcionalidades Detalhadas

### Carrossel de Vídeos
- Navegação por setas
- Filtros por tipo
- Seleção visual de thumbnails
- Indicador de posição
- Badge para vídeos criados com IA

### Seção de Comentários
- Formulário simples para novos comentários
- Exibição de comentários em tempo real
- Deleção de comentários (apenas admin)
- Timestamps formatados em português

### Painel Administrativo
- CRUD completo de vídeos
- Validação de formulários
- Ordenação de vídeos
- Filtros de status (ativo/inativo)
- Interface responsiva

## Suporte

Para problemas ou sugestões, entre em contato via:
- **WhatsApp:** [Link direto]
- **Email:** contato@pedrostudio.com
- **Telefone:** +55 (81) 98285-3640

## Licença

Todos os direitos reservados © 2025 Pedro Henrique.
