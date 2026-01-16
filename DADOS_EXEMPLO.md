# Dados de Exemplo para Firestore

Este arquivo contém estruturas de dados de exemplo que você pode usar para popular seu Firestore inicialmente.

## 1. Documento de Portfolio

**Caminho:** `portfolio/{portfolioId}`

```json
{
  "nome": "Pedro Henrique",
  "descricao": "Portfólio interativo de edição e criação de vídeos de alta qualidade",
  "telefone": "+55 (11) 98765-4321",
  "whatsappLink": "https://wa.me/5511987654321",
  "email": "contato@pedrostudio.com",
  "createdAt": "2025-12-20T00:00:00Z"
}
```

## 2. Exemplos de Vídeos (Subcoleção)

**Caminho:** `portfolio/{portfolioId}/videos/{videoId}`

### Exemplo 1: IA
```json
{
  "titulo": "IA Produto X - Conversão em 60 segundos",
  "descricao": "Uma IA impactante que aumentou conversões em 300%. Feita com técnicas avançadas de persuasão e edição profissional.",
  "thumbnail": "https://via.placeholder.com/1280x720?text=IA+Produto+X",
  "urlVideo": "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "tipo": "IA",
  "criadoComIA": true,
  "ativo": true,
  "ordem": 1,
  "createdAt": "2025-12-15T10:30:00Z"
}
```

### Exemplo 2: Reels
```json
{
  "titulo": "Reels para Instagram - Trending",
  "descricao": "Um reels viral otimizado para o algoritmo do Instagram. Resultou em 50k views em 3 dias.",
  "thumbnail": "https://via.placeholder.com/1280x720?text=Reels+Instagram",
  "urlVideo": "https://www.youtube.com/embed/jNQXAC9IVRw",
  "tipo": "Reels",
  "criadoComIA": false,
  "ativo": true,
  "ordem": 2,
  "createdAt": "2025-12-14T14:20:00Z"
}
```

### Exemplo 3: Shorts
```json
{
  "titulo": "YouTube Shorts - Tutorial Rápido",
  "descricao": "Um shorts educativo que ensina uma técnica em apenas 60 segundos. Perfeito para sua audiência.",
  "thumbnail": "https://via.placeholder.com/1280x720?text=YouTube+Shorts",
  "urlVideo": "https://www.youtube.com/embed/pXYLysDsKrU",
  "tipo": "Shorts",
  "criadoComIA": true,
  "ativo": true,
  "ordem": 3,
  "createdAt": "2025-12-13T09:15:00Z"
}
```

### Exemplo 4: Comercial
```json
{
  "titulo": "Comercial de 30 segundos - Marca Premium",
  "descricao": "Comercial profissional para marca de luxo. Produção de alto nível com efeitos visuais sofisticados.",
  "thumbnail": "https://via.placeholder.com/1280x720?text=Comercial+30s",
  "urlVideo": "https://www.youtube.com/embed/tYzMGcUty6s",
  "tipo": "Comercial",
  "criadoComIA": false,
  "ativo": true,
  "ordem": 4,
  "createdAt": "2025-12-12T16:45:00Z"
}
```

## 3. Exemplos de Comentários

**Caminho:** `comentarios/{comentarioId}`

```json
{
  "nomeUsuario": "João Silva",
  "comentario": "Excelente trabalho! Meu produto nunca teve tantas conversões. Recomendo demais!",
  "createdAt": "2025-12-20T08:30:00Z"
}
```

```json
{
  "nomeUsuario": "Maria Santos",
  "comentario": "O vídeo ficou incrível! Muito criativo e profissional. Já estou pensando em novos projetos!",
  "createdAt": "2025-12-19T15:20:00Z"
}
```

```json
{
  "nomeUsuario": "Carlos Oliveira",
  "comentario": "Rápido, eficiente e com qualidade garantida. É difícil encontrar profissionais assim.",
  "createdAt": "2025-12-18T11:00:00Z"
}
```

## 4. Documento de Usuário Admin

**Caminho:** `users/{userId}`

```json
{
  "email": "admin@pedrostudio.com",
  "isAdmin": true,
  "nome": "Pedro Administrador",
  "createdAt": "2025-12-01T00:00:00Z"
}
```

## Como Adicionar Dados no Firebase Console

### Passo 1: Acessar o Firestore
1. Abra [Firebase Console](https://console.firebase.google.com)
2. Selecione seu projeto
3. Clique em **Firestore Database**

### Passo 2: Criar Coleção Portfolio
1. Clique em **+ Iniciar coleção**
2. Digite `portfolio` como ID
3. Clique em **Próxima etapa**
4. Deixe o ID automático (ou use um de sua escolha)
5. Clique em **Salvar**

### Passo 3: Adicionar Campos ao Portfolio
1. No documento criado, clique em **+ Adicionar campo**
2. Adicione cada campo com seu tipo:
   - `nome` (String)
   - `descricao` (String)
   - `telefone` (String)
   - `whatsappLink` (String)
   - `createdAt` (Timestamp)

### Passo 4: Criar Subcoleção Videos
1. No documento de portfolio, clique em **+ Adicionar coleção**
2. Digite `videos` como ID
3. Clique em **Próxima etapa**
4. Deixe ID automático
5. Clique em **Salvar**

### Passo 5: Adicionar Vídeos
1. Clique em **+ Adicionar campo** para cada vídeo
2. Repita para os 4 vídeos de exemplo acima

### Passo 6: Criar Coleção Comentarios
1. De volta ao banco de dados, clique em **+ Iniciar coleção**
2. Digite `comentarios`
3. Deixe vazia ou adicione exemplos de comentários

### Passo 7: Criar Coleção Users
1. Clique em **+ Iniciar coleção**
2. Digite `users`
3. Adicione o documento de admin

## URLs de Exemplo para Thumbnails

Se não tiver URLs reais, use estas:

- `https://via.placeholder.com/1280x720?text=Video+1`
- `https://via.placeholder.com/1280x720?text=Video+2`
- `https://via.placeholder.com/1280x720?text=Video+3`
- `https://via.placeholder.com/1280x720?text=Video+4`

## URLs de Vídeos (YouTube Embeds)

Format: `https://www.youtube.com/embed/{VIDEO_ID}`

Exemplos:
- `https://www.youtube.com/embed/dQw4w9WgXcQ` (Rick Roll - para teste)
- `https://www.youtube.com/embed/jNQXAC9IVRw` (YouTube Video)
- `https://www.youtube.com/embed/pXYLysDsKrU` (Vimeo embed compatible)

## 💡 Dicas

1. **Use timestamps reais** - Use datas atuais ou próximas para testes
2. **IDs únicos** - O Firestore gera automaticamente, ou você pode usar nomes descritivos
3. **Ordem importante** - A ordenação nos vídeos afeta a exibição
4. **URLs válidas** - Use URLs reais para thumbnails e vídeos em produção
5. **Backup** - Sempre faça backup dos dados importantes

## 🔄 Ordem de Criação Recomendada

1. Coleção `portfolio` (com um documento)
2. Subcoleção `videos` dentro de portfolio
3. Coleção `comentarios`
4. Coleção `users`

## Próximos Passos

1. ✅ Adicionar dados de exemplo no Firestore
2. ✅ Testar a aplicação em desenvolvimento
3. ✅ Adicionar mais vídeos conforme necessário
4. ✅ Personalizar com dados reais
5. ✅ Fazer deploy

---

**Dúvidas?** Consulte [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) ou a documentação oficial do Firebase.
