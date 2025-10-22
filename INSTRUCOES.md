# 🚀 Instruções para Executar o Portfólio

## ✅ Passo a Passo

### 1. Abra o terminal na pasta do projeto
```bash
cd c:\Users\Cristovam\PortfolioGustavo\portfolio-nextjs
```

### 2. Execute o servidor de desenvolvimento
```bash
npm run dev
```

### 3. Acesse no navegador
Abra: **http://localhost:3000**

---

## 🎨 O que foi criado?

✅ **Portfólio completo em Next.js 15** com TypeScript  
✅ **Tema roxo moderno** inspirado no portfolio-andersonndev  
✅ **8 Seções principais:**
- Header com navegação fixa
- Hero (apresentação principal)
- Sobre Mim
- Experiência & Educação
- Projetos (9 projetos migrados)
- Skills (16+ tecnologias)
- Avaliações (5 reviews)
- Footer com redes sociais

✅ **Animações suaves** com Framer Motion  
✅ **Design responsivo** para mobile/tablet/desktop  
✅ **SEO otimizado** com metadata  
✅ **Google Analytics** integrado  
✅ **Todas as imagens** migradas  

---

## 🎯 Funcionalidades Implementadas

- ✅ Navegação suave entre seções
- ✅ Menu mobile responsivo
- ✅ Animações de entrada nos elementos
- ✅ Hover effects modernos
- ✅ Gradientes roxos personalizados
- ✅ Barras de progresso nas skills
- ✅ Cards de projetos com tags de tecnologia
- ✅ Sistema de avaliações com estrelas
- ✅ Links para redes sociais
- ✅ Botão de WhatsApp para orçamento

---

## 📦 Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm start

# Verificar erros
npm run lint
```

---

## 🌐 Deploy

### Vercel (Recomendado)
1. Crie conta em https://vercel.com
2. Conecte seu repositório GitHub
3. Deploy automático!

Ou via CLI:
```bash
npm install -g vercel
vercel
```

### Netlify
1. Arraste a pasta `portfolio-nextjs` para https://app.netlify.com/drop
2. Pronto!

---

## 🎨 Cores do Tema Roxo

- **Primary 400**: `#a78bfa` (roxo claro)
- **Primary 500**: `#8b5cf6` (roxo médio)
- **Primary 600**: `#7c3aed` (roxo escuro)
- **Primary 700**: `#6d28d9` (roxo mais escuro)
- **Dark 950**: `#0a0a0a` (fundo)
- **Dark 900**: `#111827` (cards)

---

## 📝 Personalizar Conteúdo

Edite os arquivos em `components/`:

- `Hero.tsx` - Nome, título, links sociais
- `About.tsx` - Descrição profissional
- `Experience.tsx` - Experiências de trabalho
- `Projects.tsx` - Lista de projetos
- `Skills.tsx` - Tecnologias e habilidades
- `Reviews.tsx` - Avaliações de clientes

---

## 🐛 Problemas Comuns

### Erro de imagens
- Certifique-se que as imagens estão em `public/images/`

### Erro de build
```bash
rm -rf .next
npm run build
```

### Porta 3000 ocupada
```bash
npm run dev -- -p 3001
```

---

## 📞 Suporte

Qualquer dúvida, entre em contato!

**Gustavo Cristovam**  
WhatsApp: (73) 99911-3421  
Email: contato@gustavocristovam.dev

---

## 🎉 Pronto!

Seu portfólio moderno em Next.js está pronto para uso!
