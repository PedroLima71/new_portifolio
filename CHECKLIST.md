# ✅ Checklist de Configuração - Pedro Henrique Portfolio

Use este checklist para garantir que tudo está configurado corretamente antes de iniciar o desenvolvimento.

## 📋 Configuração Inicial

- [ ] Node.js instalado (versão 16+)
- [ ] npm instalado
- [ ] Projeto clonado/baixado
- [ ] `npm install` executado com sucesso
- [ ] Terminal aberto na pasta do projeto

## 🔐 Configuração Firebase

### Firebase Console
- [ ] Conta Google criada/logada
- [ ] Novo projeto criado no Firebase Console
- [ ] Projeto nomeado (ex: "pedro-studio")
- [ ] Região selecionada

### Firestore Database
- [ ] Firestore Database criado
- [ ] Modo de teste selecionado
- [ ] Localização configurada

### Authentication
- [ ] Authentication habilitado
- [ ] Método "Email/Senha" ativado
- [ ] Domínios autorizados configurados (localhost para dev)

### Credenciais
- [ ] Credenciais Firebase obtidas
- [ ] Arquivo `.env.local` criado (cópia de `.env.example`)
- [ ] Todas as 6 variáveis preenchidas:
  - [ ] `VITE_FIREBASE_API_KEY`
  - [ ] `VITE_FIREBASE_AUTH_DOMAIN`
  - [ ] `VITE_FIREBASE_PROJECT_ID`
  - [ ] `VITE_FIREBASE_STORAGE_BUCKET`
  - [ ] `VITE_FIREBASE_MESSAGING_SENDER_ID`
  - [ ] `VITE_FIREBASE_APP_ID`

### Regras de Segurança
- [ ] Regras de segurança copiadas e publicadas no Firestore
- [ ] Regras testadas (deve permitir leitura pública)

## 📊 Estrutura Firestore

### Coleções Criadas
- [ ] Coleção `portfolio` criada
- [ ] Coleção `comentarios` criada
- [ ] Coleção `users` criada

### Documento Portfolio
- [ ] Documento em `portfolio/` com campos:
  - [ ] `nome` (String): "Pedro Henrique"
  - [ ] `descricao` (String)
  - [ ] `telefone` (String)
  - [ ] `whatsappLink` (String)
  - [ ] `email` (String)
  - [ ] `createdAt` (Timestamp)

### Subcoleção Videos
- [ ] Subcoleção `videos` criada dentro de portfolio
- [ ] Pelo menos 1 vídeo adicionado com campos:
  - [ ] `titulo` (String)
  - [ ] `descricao` (String)
  - [ ] `thumbnail` (String - URL)
  - [ ] `urlVideo` (String - URL YouTube)
  - [ ] `tipo` (String: "IA", "Reels", "Shorts", "Comercial", "Outro")
  - [ ] `criadoComIA` (Boolean)
  - [ ] `ativo` (Boolean: true)
  - [ ] `ordem` (Number)
  - [ ] `createdAt` (Timestamp)

### Coleção Comentarios
- [ ] Coleção `comentarios` criada
- [ ] Pode deixar vazia inicialmente (usuários criarão)

### Coleção Users
- [ ] Coleção `users` criada
- [ ] Documento de admin adicionado (ou criado via app)

## 🚀 Execução Local

### Desenvolvimento
- [ ] Terminal aberto na pasta do projeto
- [ ] Comando `npm run dev` executado
- [ ] Servidor iniciado em `http://localhost:5173`
- [ ] Página inicial carrega sem erros
- [ ] Vídeos aparecem no carrossel

### Testes Funcionais

#### Visitante Público
- [ ] Página inicial carrega corretamente
- [ ] Carrossel exibe vídeos
- [ ] Filtros por tipo funcionam
- [ ] Thumbnail clicável abre modal
- [ ] Modal exibe vídeo (embed YouTube)
- [ ] Fechar modal funciona
- [ ] Página portfolio carrega
- [ ] Grid de vídeos exibe corretamente
- [ ] Filtros funcionam na página portfolio
- [ ] Botões de contato funcionam
- [ ] Link WhatsApp redireciona corretamente
- [ ] Link email abre cliente de email
- [ ] Botão telefone funciona
- [ ] Comentários carregam
- [ ] Formulário de comentário funciona
- [ ] Novo comentário aparece na lista

#### Autenticação
- [ ] Página de login carrega
- [ ] Signup cria nova conta
- [ ] Login com credenciais válidas funciona
- [ ] Login com credenciais inválidas mostra erro
- [ ] Usuário autenticado vê "Painel Admin" no menu
- [ ] Botão logout funciona
- [ ] Logout remove sessão

#### Painel Admin
- [ ] Painel carrega apenas para admin
- [ ] Usuário não autenticado é redirecionado para login
- [ ] Lista de vídeos carrega
- [ ] Botão "Adicionar Vídeo" expande formulário
- [ ] Formulário permite adicionar novo vídeo
- [ ] Novo vídeo aparece na lista
- [ ] Botão editar abre formulário
- [ ] Editar vídeo salva mudanças
- [ ] Botão deletar remove vídeo
- [ ] Vídeos deletados desaparecem da lista

### Responsividade
- [ ] Desktop: Layout 3 colunas no portfolio
- [ ] Tablet: Layout 2 colunas no portfolio
- [ ] Mobile: Layout 1 coluna, menu hamburguer funciona
- [ ] Navegação mobile abre/fecha corretamente
- [ ] Carrossel funciona em mobile
- [ ] Modal funciona em mobile
- [ ] Formulários responsivos em mobile

## 📱 Navegação

- [ ] Header logo redireciona para home
- [ ] Links de navegação funcionam:
  - [ ] Home
  - [ ] Portfolio
  - [ ] Admin (quando autenticado)
  - [ ] Login (quando não autenticado)
  - [ ] Logout (quando autenticado)
- [ ] Breadcrumbs/URLs corretos
- [ ] Links internos funcionam sem reload

## 🎨 Design & UI

- [ ] Cores aparecem corretamente
- [ ] Gradientes aparecem
- [ ] Animações funcionam (fade in, slide in, pulse)
- [ ] Hover effects funcionam
- [ ] Sombras aparecem corretamente
- [ ] Tipografia legível
- [ ] Espaçamento consistente
- [ ] Dark mode aplicado corretamente

## 🔧 Troubleshooting

### Erros Comuns

#### "Firebase configuration is missing"
- [ ] `.env.local` existe na raiz do projeto
- [ ] Variáveis têm nomes exatos (VITE_* maiúsculas)
- [ ] Não há espaços vazios nas variáveis
- [ ] Reiniciar servidor (`npm run dev`)

#### "Permission denied ao escrever"
- [ ] Regras de Firestore publicadas corretamente
- [ ] User está autenticado para operações admin
- [ ] Verificar console do navegador para detalhes

#### "Vídeos não aparecem"
- [ ] Documento em `portfolio/` existe
- [ ] Pelo menos 1 vídeo em `portfolio/videos/`
- [ ] Campo `ativo: true` no vídeo
- [ ] Verificar console do navegador

#### "Comentários não salvam"
- [ ] Coleção `comentarios/` criada
- [ ] Regra permite `allow create: if true`
- [ ] Verificar console para erros

## 📝 Customização (Após Configuração)

- [ ] Cores customizadas em `tailwind.config.js`
- [ ] Textos customizados nos componentes
- [ ] Logo customizado em `Header.tsx`
- [ ] Informações de contato em `ContactSection.tsx`
- [ ] Descrições em `Home.tsx`

## 📦 Build & Deploy

- [ ] `npm run build` executa sem erros
- [ ] Pasta `dist/` criada
- [ ] Arquivos minificados
- [ ] Pronto para deploy em:
  - [ ] Vercel
  - [ ] Netlify
  - [ ] Firebase Hosting
  - [ ] Sua própria hospedagem

## 📚 Documentação

- [ ] README.md lido
- [ ] FIREBASE_SETUP.md consultado
- [ ] DADOS_EXEMPLO.md revisado
- [ ] RESUMO_IMPLEMENTACAO.md entendido
- [ ] Este checklist completado

## 🎉 Finalização

- [ ] Todas as verificações feitas
- [ ] Aplicação funcionando corretamente
- [ ] Dados de teste adicionados
- [ ] Pronto para:
  - [ ] Mostrar ao cliente
  - [ ] Fazer deploy
  - [ ] Adicionar mais vídeos
  - [ ] Customizar conforme necessário

---

## 📞 Próximos Passos

1. **Adicione seus vídeos reais**
   - Crie links de embed do YouTube
   - Upload thumbnails em qualidade alta
   - Configure tipos apropriados

2. **Customize o design**
   - Ajuste cores para sua marca
   - Adicione logo do studio
   - Configure informações de contato

3. **Configure emails**
   - Adicione email real para contato
   - Configure WhatsApp business
   - Adicione telefone válido

4. **Faça deploy**
   - Escolha plataforma (Vercel/Netlify recomendado)
   - Configure domínio customizado
   - Configure HTTPS

5. **Monitoramento**
   - Configure analytics
   - Monitore comentários
   - Acompanhe métricas

---

**Parabéns! 🎊 Seu portfólio está pronto!**

Se encontrar algum problema, consulte a documentação ou entre em contato com suporte.
