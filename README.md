# 🎬 TopFive Cinema

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)

Site desenvolvido como projeto da disciplina **Desenvolvimento Front-End para Web**. Ele reúne os **5 filmes mais bem avaliados de cada gênero**, com sinopse, trailer e onde assistir. 🍿

## 🎯 Objetivo

Facilitar o acesso aos 5 filmes mais bem avaliados de 7 gêneros, para que o visitante saiba detalhadamente sobre cada filme e onde encontrá-lo.

**👥 Público-alvo:** livre para todas as idades, especialmente pessoas com curiosidade em saber quais são os filmes mais bem avaliados de gêneros diversos.

## 🎞️ Gêneros

💥 Ação · 👻 Terror/Horror · 🗺️ Aventura · ❤️ Romance · 😂 Comédia · 🚀 Ficção Científica · 🎨 Animação

## 📄 Páginas do site

- 🏠 `index.html`: página inicial
- ℹ️ `sobre.html`: sobre o projeto e a equipe
- 🎬 `filmes.html`: filmes organizados por gênero
- ✉️ `contato.html`: formulário de contato
- 🎥 35 páginas individuais de filmes (5 filmes × 7 gêneros), na pasta `filmes/`

Total: 39 páginas HTML.

## 🗂️ Estrutura de pastas

```
topfive-cinema/
├── README.md
├── index.html
├── sobre.html
├── contato.html
├── filmes.html
├── filmes/    -> páginas individuais dos filmes, por gênero
├── css/       -> style.css e um CSS exclusivo para cada filme
├── js/        -> script.js
├── img/       -> logo, capas e imagens de fundo dos filmes
├── assets/    -> vídeo de fundo dos filmes
└── docs/      -> documentação do projeto
```

Cada pasta principal tem seu próprio README explicando o conteúdo.

## 🛠️ Tecnologias

HTML5, CSS3, JavaScript e iframe do YouTube (trailers).

## 📊 Sobre o ranking

Os filmes foram selecionados com base nas avaliações do **IMDb** (mínimo de 200 mil votos por filme), consultadas em setembro de 2026. As notas mudam com o tempo e o ranking não é uma avaliação feita pelo grupo.
**Sem repetição:** cada filme aparece em um único gênero. Quando um filme se qualificou em mais de uma lista, ficou no gênero em que estava mais bem colocado no IMDb (em caso de empate, no gênero mais específico, como Ficção Científica em vez de Ação).

## 🚀 Como Executar o Projeto

### Opção 1: Acessar Online (Recomendado)

Acesse a versão publicada via GitHub Pages:

[![Acessar](https://img.shields.io/badge/▶️_ACESSAR-TopFive_Cinema-f0c020?style=for-the-badge)](https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/)

Clique no botão acima para abrir o site direto no navegador, sem instalação necessária.

### Opção 2: No seu computador

1. No repositório, clique em **Code → Download ZIP**.
2. Extraia a pasta.
3. Abra o arquivo `index.html` no navegador.

## 👥 Equipe (9 integrantes)

| Integrante | Responsabilidade |
| --- | --- |
| Alison Belen | 💥 Páginas, CSS dos 5 filmes de Ação |
| Alessandra Guimarães | 🗺️ Páginas, CSS dos 5 filmes de Aventura |
| Samuel Carmoni | 👻 Páginas, CSS dos 5 filmes de Terror |
| Ellen Cristina | ❤️ Páginas, CSS dos 5 filmes de Romance |
| Petterson Michel | 😂 Páginas, CSS dos 5 filmes de Comédia |
| Samuel Guimarães | 🚀 Páginas, CSS dos 5 filmes de Ficção Científica |
| Davi Pereira | 🎨 Páginas, CSS dos 5 filmes de Animação |
| Gabriel Anjos | 🏠 Páginas principais, CSS principal e JavaScript (ver detalhes abaixo) |
| Rafael Christian | 🏠 Páginas principais, CSS principal e JavaScript (ver detalhes abaixo) |

### 🧩 Páginas principais, CSS principal e JavaScript (Gabriel e Rafael)

- 🏠 Página inicial: `index.html`
- ℹ️ Página sobre: `sobre.html`
- ✉️ Página de contato: `contato.html`
- 🎬 Página de filmes organizados por gênero: `filmes.html`
- 🎨 CSS principal do site: `css/style.css`
- ⚙️ JavaScript da página de filmes: `js/script.js`

## 🎓 Disciplina

Desenvolvimento Front-End para Web · 2026
