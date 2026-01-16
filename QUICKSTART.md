# ⚡ Guia Rápido - Pedro Henrique Portfolio

Comece em 5 minutos! ⏱️

## 🚀 Iniciar Agora

### 1️⃣ Instalar Dependências (1 minuto)
```bash
cd pedro-studio-portfolio
npm install
```

### 2️⃣ Configurar Firebase (2 minutos)
1. Copie arquivo `.env.example` → `.env.local`
2. Preencha com suas credenciais do Firebase Console
3. Salve

### 3️⃣ Iniciar Servidor (1 minuto)
```bash
npm run dev
```

### 4️⃣ Acessar no Navegador
```
http://localhost:5173
```

### 5️⃣ Fazer Login (1 minuto)
1. Clique "Entrar"
2. Crie conta com email/senha
3. Acesse Painel Admin
4. Adicione seus vídeos!

✅ **Pronto!** Seu portfólio está funcionando!

---

## 📚 Documentação Principal

| Documento | Para |
|-----------|------|
| [README.md](./README.md) | Documentação completa |
| [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) | Configurar Firebase |
| [CHECKLIST.md](./CHECKLIST.md) | Verificações |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | Fazer deploy |
| [DADOS_EXEMPLO.md](./DADOS_EXEMPLO.md) | Dados de teste |

---

## 📁 Arquivos Importantes

```
src/
├── App.tsx              ← Seu aplicativo
├── components/          ← Componentes React
├── pages/               ← Páginas
└── firebase.config.ts   ← Config Firebase

.env.local              ← PREENCHER COM CREDENCIAIS
.env.example            ← Template (não editar)
```

---

## 🎯 Funcionalidades

✅ **Visitantes:**
- Ver vídeos em carrossel
- Filtrar por tipo
- Assistir em modal
- Deixar comentários
- Contato direto

✅ **Admin:**
- Login seguro
- Adicionar vídeos
- Editar vídeos
- Deletar vídeos
- Gerenciar comentários

---

## ⚙️ Configuração Firebase (5 min)

### Opção A: Rápida (apenas leitura)
1. Use [dados de exemplo](./DADOS_EXEMPLO.md)
2. Crie manualmente no Firebase Console
3. Pronto!

### Opção B: Completa
Siga [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) (10-15 min)

---

## 📱 Responsividade

✅ Mobile (1 coluna)  
✅ Tablet (2 colunas)  
✅ Desktop (3 colunas)  

---

## 🔐 Segurança

- ✅ Autenticação Firebase
- ✅ Regras de Firestore
- ✅ Dados protegidos
- ✅ HTTPS em produção

---

## 🎨 Customização (1-2 horas)

### Cores
Edite `tailwind.config.js`:
```javascript
theme: {
  colors: {
    // Suas cores aqui
  }
}
```

### Conteúdo
Edite componentes:
- `Header.tsx` - Menu, logo
- `Home.tsx` - Texto principal
- `ContactSection.tsx` - Informações de contato
- `Footer.tsx` - Rodapé

### Design
Edite `index.css`:
```css
/* Animações, estilos custom */
```

---

## 📦 Build & Deploy

### Build Local
```bash
npm run build
```

### Deploy (escolha uma):

#### ✅ Vercel (Recomendado)
```bash
# 1. Push para GitHub
git push origin main

# 2. Vercel faz deploy automático
```

#### ✅ Netlify
```bash
# 1. Conecte seu GitHub
# 2. Configurar variáveis de ambiente
# 3. Deploy automático
```

#### ✅ Firebase
```bash
npm install -g firebase-tools
firebase init hosting
npm run build
firebase deploy
```

Detalhes: [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## ❓ FAQ

**P: Como adicionar um vídeo?**
R: Faça login → Painel Admin → "Adicionar Vídeo"

**P: Como usar meu próprio vídeo?**
R: Upload para YouTube, copie embed URL

**P: Como é no mobile?**
R: Totalmente responsivo, teste com F12 em Desktop

**P: Como fazer deploy?**
R: Siga [DEPLOYMENT.md](./DEPLOYMENT.md) ou use Vercel (mais fácil)

**P: Como customizar cores?**
R: Edite `tailwind.config.js`

**P: Como adicionar mais comentários?**
R: Usuários adicionam na página inicial

---

## 🐛 Problemas Comuns

| Problema | Solução |
|----------|---------|
| Vídeos não aparecem | Verificar `.env.local` e Firestore |
| Login não funciona | Verificar Firebase Auth enabled |
| Build falha | Rodar `npm install` novamente |
| Comentários não salvam | Verificar regras Firestore |

Mais: [CHECKLIST.md](./CHECKLIST.md)

---

## 💡 Dicas

1. **Usar dados reais** - Substitua placeholders por seus dados
2. **Testar mobile** - Pressione F12 no navegador
3. **Fazer backup** - Dados Firestore são importantes
4. **Deploy cedo** - Não deixe para última hora
5. **Monitorar** - Acompanhe comentários e métricas

---

## 📞 Próximos Passos

- [ ] Instalar dependências (`npm install`)
- [ ] Preencher `.env.local`
- [ ] Iniciar servidor (`npm run dev`)
- [ ] Testar funcionalidades
- [ ] Adicionar seus vídeos
- [ ] Customizar design
- [ ] Fazer deploy

---

## 🎊 Você Está Pronto!

Seu portfólio profissional está **100% funcional**.

Qualquer dúvida, consulte a documentação completa.

**Bom desenvolvimento! 🚀**

---

## 📚 Documentação Completa

```
📖 README.md              - Tudo sobre o projeto
🔐 FIREBASE_SETUP.md      - Setup Firebase passo a passo
📋 CHECKLIST.md           - Checklist de verificação
🚀 DEPLOYMENT.md          - Guia de deployment
💾 DADOS_EXEMPLO.md       - Exemplos de dados
📂 ARQUIVOS.md            - Lista de arquivos
⚡ QUICKSTART.md          - Este arquivo
```

**Leia em ordem para máxima compreensão!**
