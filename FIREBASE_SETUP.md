# Guia de Configuração do Firebase

Este guia irá ajudá-lo a configurar o Firebase para o projeto Pedro Henrique Portfolio.

## Passo 1: Criar um Projeto no Firebase

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Clique em "Adicionar projeto"
3. Digite um nome para seu projeto (ex: "pedro-studio")
4. Selecione sua região
5. Clique em "Criar projeto"

## Passo 2: Configurar Firestore Database

1. No console do Firebase, navegue até **Firestore Database**
2. Clique em **Criar banco de dados**
3. Selecione o modo **Modo de teste** (para desenvolvimento)
4. Selecione uma localização (preferencialmente próxima a você)
5. Clique em **Criar**

## Passo 3: Configurar Authentication

1. No console, vá para **Authentication**
2. Clique em **Configurar método de login**
3. Selecione **Email/Senha**
4. Ative a opção **Email/Senha**
5. Clique em **Salvar**

## Passo 4: Obter Credenciais do Firebase

1. No console Firebase, clique no ícone de **engrenagem** ⚙️ (Configurações do projeto)
2. Vá para a aba **Geral**
3. Clique em **Adicionar aplicativo** e selecione **Web** (</>)
4. Digite um apelido para seu aplicativo (ex: "pedro-studio-web")
5. Copie as credenciais exibidas (firebaseConfig)

Você receberá algo assim:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyD...",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};
```

## Passo 5: Adicionar Credenciais ao Projeto

1. Abra o arquivo `.env.local` na raiz do projeto
2. Preencha com as credenciais do Firebase:

```env
VITE_FIREBASE_API_KEY=AIzaSyD...
VITE_FIREBASE_AUTH_DOMAIN=seu-projeto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu-projeto
VITE_FIREBASE_STORAGE_BUCKET=seu-projeto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=1234567890
VITE_FIREBASE_APP_ID=1:1234567890:web:abcdef123456
```

## Passo 6: Configurar Regras de Segurança do Firestore

1. No console Firebase, vá para **Firestore Database**
2. Clique na aba **Regras**
3. Copie e cole o seguinte código:

```javascript
rules_version = '2';
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

4. Clique em **Publicar**

## Passo 7: Criar Documento de Portfolio

1. No Firestore, clique em **+ Iniciar coleção**
2. Digite `portfolio` como nome da coleção
3. Clique em **Próxima etapa**
4. Adicione um documento com ID automático (deixe em branco ou gere automaticamente)
5. Adicione os seguintes campos:

| Campo | Tipo | Valor |
|-------|------|-------|
| `nome` | String | Pedro Henrique |
| `descricao` | String | Portfólio interativo de edição de vídeos |
| `telefone` | String | +55 (81) 98285-3640 |
| `whatsappLink` | String | https://wa.me/5511987654321 |
| `createdAt` | Timestamp | (data/hora atual) |

## Passo 8: Criar Subcoleção de Videos

1. No documento de portfolio criado, clique em **+ Adicionar coleção**
2. Digite `videos` como nome da subcoleção
3. Adicione um primeiro vídeo com os seguintes campos:

| Campo | Tipo | Valor Exemplo |
|-------|------|-------|
| `titulo` | String | IA Produto X |
| `descricao` | String | Uma descrição interessante |
| `thumbnail` | String | URL de uma imagem |
| `urlVideo` | String | https://www.youtube.com/embed/dQw4w9WgXcQ |
| `tipo` | String | IA |
| `criadoComIA` | Boolean | true |
| `ativo` | Boolean | true |
| `ordem` | Number | 1 |
| `createdAt` | Timestamp | (data/hora atual) |

## Passo 9: Criar Coleção de Comentarios

1. De volta ao banco de dados, clique em **+ Iniciar coleção**
2. Digite `comentarios` como nome
3. Você pode deixar vazia por enquanto (será preenchida pelos usuários)

## Passo 10: Testar a Configuração

1. Execute `npm run dev`
2. Acesse `http://localhost:5173`
3. Verifique se os vídeos aparecem na página
4. Tente adicionar um comentário
5. Faça login como administrador em `/login`
6. Teste o painel administrativo em `/admin`

## Troubleshooting

### Erro: "Firebase configuration is missing"
- Verifique se o arquivo `.env.local` foi criado corretamente
- Certifique-se de que as variáveis estão com os nomes exatos (maiúsculas/minúsculas importam)
- Reinicie o servidor de desenvolvimento

### Erro: "Permission denied"
- Verifique as regras de segurança do Firestore
- Certifique-se de que está autenticado para operações de escrita
- Verifique se o projeto está bem configurado

### Vídeos não aparecem
- Verifique se o documento de portfolio foi criado corretamente
- Certifique-se de que pelo menos um vídeo está ativo (`ativo: true`)
- Verifique o console do navegador para erros

## Próximos Passos

1. **Adicione seus vídeos** - Use o painel administrativo
2. **Configure domínios** - Adicione domínios autorizados nas configurações do Firebase
3. **Deploy** - Importe para Vercel, Netlify ou Firebase Hosting
4. **Customização** - Ajuste cores, fontes e conteúdo conforme necessário

## Links Úteis

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Firebase Authentication](https://firebase.google.com/docs/auth)

## Suporte

Para dúvidas, consulte a documentação oficial do Firebase ou entre em contato com o time de desenvolvimento.
