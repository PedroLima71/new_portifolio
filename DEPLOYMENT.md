# 🚀 Guia de Deployment - Pedro Henrique Portfolio

Este guia explica como fazer deploy da sua aplicação em diferentes plataformas.

## Pré-requisitos

- [ ] Aplicação testada localmente
- [ ] `npm run build` funcionando sem erros
- [ ] `.env.local` com credenciais válidas
- [ ] Conta em uma plataforma de hosting

## 🟦 1. Deploy no Vercel (Recomendado)

Vercel é a plataforma ideal para aplicações Vite + React.

### Passo 1: Preparar Repositório Git
```bash
# Se ainda não tiver Git iniciado
git init

# Adicione ao .gitignore (já feito)
# .env.local (nunca commitar!)

# Primeiro commit
git add .
git commit -m "Initial commit: Pedro Henrique Portfolio"
```

### Passo 2: Fazer Push para GitHub
1. Crie conta em [GitHub.com](https://github.com)
2. Crie novo repositório
3. Execute:
```bash
git remote add origin https://github.com/seu-usuario/pedro-studio-portfolio.git
git branch -M main
git push -u origin main
```

### Passo 3: Conectar ao Vercel
1. Acesse [Vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Selecione seu repositório do GitHub
4. Clique "Import"

### Passo 4: Configurar Variáveis de Ambiente
1. Na seção "Environment Variables":
2. Adicione cada variável de `.env.local`:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`

### Passo 5: Deploy
1. Clique "Deploy"
2. Aguarde o build terminar (2-3 minutos)
3. Acesse sua URL em formato: `seu-projeto.vercel.app`

✅ **Pronto!** Sua aplicação está online!

---

## 🔗 2. Deploy no Netlify

Alternativa rápida e simples.

### Passo 1: Preparar Build
```bash
npm run build
```

### Passo 2: Fazer Upload
1. Acesse [Netlify.com](https://netlify.com)
2. Clique "New site from Git"
3. Conecte GitHub
4. Selecione seu repositório

### Passo 3: Configurar Build
- **Build command:** `npm run build`
- **Publish directory:** `dist`

### Passo 4: Adicionar Environment Variables
1. Em "Site Settings" → "Build & deploy" → "Environment"
2. Clique "Edit variables"
3. Adicione todas as 6 variáveis do Firebase

### Passo 5: Deploy
1. Clique "Deploy site"
2. Aguarde (3-5 minutos)
3. Acesse sua URL automática

✅ **Pronto!** Seu site está no ar!

---

## 🔥 3. Deploy no Firebase Hosting

Integrate com seu projeto Firebase.

### Passo 1: Instalar Firebase CLI
```bash
npm install -g firebase-tools
```

### Passo 2: Fazer Login
```bash
firebase login
```

### Passo 3: Inicializar Firebase
```bash
firebase init hosting
```

Respostas:
- Use projeto existente: **seu-projeto**
- Public directory: `dist`
- Configure rewrite: **Yes**
- Overwrite existing files: **No**

### Passo 4: Build
```bash
npm run build
```

### Passo 5: Deploy
```bash
firebase deploy
```

Sua URL será algo como: `seu-projeto.web.app`

✅ **Pronto!** Hospedado no Firebase Hosting!

---

## 🌍 4. Deploy em Hospedagem Tradicional

Para cPanel, Plesk, etc.

### Passo 1: Build
```bash
npm run build
```

### Passo 2: Upload
1. Comprima a pasta `dist/`
2. Acesse painel de controle da hospedagem
3. Envie para pasta `public_html/` ou similar
4. Descompacte

### Passo 3: Configurar .htaccess (Apache)
Crie arquivo `.htaccess` na raiz:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Passo 4: Configurar Variáveis de Ambiente
Crie arquivo `.env.local` na raiz com as variáveis Firebase

⚠️ **Importante:** Para máxima segurança, mantenha `.env.local` em servidor apenas.

---

## 🔐 Configuração de Domínio Customizado

### Em Vercel
1. Em "Project Settings" → "Domains"
2. Adicione seu domínio
3. Siga instruções de DNS
4. Aguarde propagação (até 48h)

### Em Netlify
1. Em "Site settings" → "Domain management"
2. Clique "Add custom domain"
3. Configure DNS registrar
4. Aguarde propagação

### Em Firebase Hosting
1. No Firebase Console
2. Em Hosting settings
3. Adicione domínio
4. Configure DNS

---

## 🔍 Configurar CORS no Firebase (Se necessário)

Se receber erros de CORS:

1. Firebase Console → "Realtime Database" ou "Cloud Storage"
2. Rules → Configure para permitir seu domínio:

```javascript
{
  "rules": {
    ".read": true,
    ".write": "auth != null"
  }
}
```

---

## ✅ Checklist Pós-Deploy

- [ ] Site acessível pela URL
- [ ] Página inicial carrega
- [ ] Vídeos aparecem
- [ ] Filtros funcionam
- [ ] Modal de vídeo abre
- [ ] Formulário de comentário funciona
- [ ] Login funciona
- [ ] Painel admin funciona
- [ ] Links de contato funcionam
- [ ] Responsividade mobile OK
- [ ] Performance aceitável (Lighthouse score 80+)
- [ ] HTTPS ativado

---

## 🚨 Troubleshooting de Deployment

### "Cannot find module"
**Solução:** Verifique se `node_modules` foi criado com `npm install`

### "Build fails"
**Solução:** Verificar logs de build, geralmente:
- Variáveis de ambiente não configuradas
- Erro de TypeScript
- Erro de dependência

### "Firebase errors after deploy"
**Solução:**
- Verificar se variáveis de ambiente estão corretas
- Adicionar domínio autorizado em Firebase Console
- Verificar regras de Firestore

### "Vídeos não aparecem after deploy"
**Solução:**
- Verificar se Firestore está acessível
- Verificar console do navegador para erros
- Testar credenciais Firebase

### "Page not found (404) on refresh"
**Solução:**
- Configurar rewrite para `index.html`
- Em Vercel: automático
- Em Netlify: automático
- Em outros: criar `.htaccess` ou similar

---

## 📊 Monitoramento

### Google Analytics
1. Crie conta em [Google Analytics](https://analytics.google.com)
2. Crie propriedade
3. Copie Measurement ID
4. Instale no projeto:

```bash
npm install -g gtag
```

5. Adicione ao `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Firebase Analytics
Automático se Firebase Hosting configurado corretamente.

---

## 💰 Custos

| Plataforma | Custo | Melhor Para |
|-----------|-------|-----------|
| **Vercel** | Free até 100GB | Aplicações modernas |
| **Netlify** | Free até 100GB | Sitios estáticos |
| **Firebase** | Free até certos limites | Firebase users |
| **Hospedagem tradicional** | Variável | Compatibilidade |

---

## 🔄 Atualizações Futuras

Para atualizar após deploy:

### Vercel/Netlify
1. Faça commit e push para GitHub
2. Automático: redeploy acontece

### Firebase Hosting
```bash
npm run build
firebase deploy
```

### Hospedagem Tradicional
1. Build local: `npm run build`
2. Comprima `dist/`
3. Upload via FTP/painel
4. Descompacte

---

## 🎯 Recomendação Final

**Para a maioria dos casos, use Vercel:**
- ✅ Deploy automático
- ✅ Performance excelente
- ✅ Suporte a Vite nativo
- ✅ HTTPS automático
- ✅ Domínio customizado
- ✅ Muito fácil

---

**Dúvidas sobre deployment?**

Consulte documentação oficial:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Firebase Docs](https://firebase.google.com/docs)

Sucesso! 🚀
