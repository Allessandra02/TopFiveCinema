
const parametros = new URLSearchParams(location.search);
const busca = (parametros.get("q") || "").trim();
let genero = parametros.get("genero")

//se escolher genero abre o de ação
if (!busca && !GENEROS[genero]) {
  genero = "acao";
}

let ordem = "nota";
let epoca = "todas"

const titulo = document.getElementById("tituloGenero");
const frase = document.getElementById("fraseGenero");
const faixa = document.getElementById("faixaGeneros");
const lista = document.getElementById("listaFilmes");
const contagem = document.getElementById("contagemFilmes");
const seletor = document.getElementById("seletorEpoca")
const abas = document.querySelectorAll(".abaFiltro");

//tira acento e maiúscula pra busca achar "acao" em "Ação"
function tirarAcento(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

//muda as cores do css 
function mudarCores(g) {
  const raiz = document.documentElement;
  if (g) {
    raiz.style.setProperty("--amarelo", g.destaque);
    raiz.style.setProperty("--azulEscuro", g.fundo);
    raiz.style.setProperty("--amareloRgb", g.rgb)
  } else {
    raiz.style.removeProperty("--amarelo")
    raiz.style.removeProperty("--azulEscuro");
    raiz.style.removeProperty("--amareloRgb");
  }
}

function epocaOk(ano) {
  if (epoca == "ouro") return ano <= 1960;
  if (epoca == "meio") return ano >= 1961 && ano <= 1999;
  if (epoca == "atual") return ano >= 2000;
  return true;
}

//pega os filmes do gênero ou, se for busca, de todos os gêneros
function pegarFilmes() {
  const resultado = [];

  if (!busca) {
    return GENEROS[genero].filmes.slice();
  }

  const termo = tirarAcento(busca);
  for (const chave in GENEROS) {
    const filmes = GENEROS[chave].filmes;
    for (let i = 0; i < filmes.length; i++) {
      const f = filmes[i];
      const texto = tirarAcento(f.titulo + " " + f.diretor + " " + f.ano + " " + GENEROS[chave].nome);
      if (texto.indexOf(termo) != -1) {
        resultado.push(f);
      }
    }
  }
  return resultado;
}

function mostrarBanner() {
  if (busca) {
    titulo.textContent = "Resultados para “" + busca + "”";
    frase.textContent = "Filmes encontrados em todos os gêneros.";
    document.title = "Busca: " + busca + " | Top Five Cinema";
    mudarCores(null);
  } else {
    const g = GENEROS[genero];
    titulo.textContent = g.emoji + " " + g.nome;
    frase.textContent = g.frase;
    document.title = g.nome + " | Top Five Cinema";
    mudarCores(g);
  }
}

//botoes pra trocar de genero
function mostrarGeneros() {
  for (const chave in GENEROS) {
    const link = document.createElement("a");
    link.className = "chipGenero";
    link.href = "filmes.html?genero=" + chave;
    link.textContent = GENEROS[chave].emoji + " " + GENEROS[chave].nome;

    if (chave == genero) {
      link.classList.add("chipAtivo");
      link.setAttribute("aria-current", "page");
    }
    faixa.appendChild(link);
  }
}

//cria um elemento com classe e texto
function criar(tag, classe, texto) {
  const elemento = document.createElement(tag);
  elemento.className = classe;
  if (texto) {
    elemento.textContent = texto;
  }
  return elemento;
}

function mostrarFilmes() {
  const todos = pegarFilmes()
  const filmes = [];

  //filtro de época
  for (let i = 0; i < todos.length; i++) {
    if (epocaOk(todos[i].ano)) {
      filmes.push(todos[i]);
    }
  }

  //ordem: ranking ou mais novos primeiro
  filmes.sort(function (a, b) {
    if (ordem == "lancamento") {
      return b.ano - a.ano;
    }
    return a.posicao - b.posicao;
  });

  contagem.textContent = filmes.length == 1 ? "1 filme" : filmes.length + " filmes";
  lista.innerHTML = "";

  if (filmes.length == 0) {
    lista.appendChild(criar("li", "semFilmes", "Nenhum filme encontrado com esses filtros."));
    return;
  }

  for (let j = 0; j < filmes.length; j++) {
    const f = filmes[j];

    const item = criar("li", "itemFilme");
    const cartao = criar("article", "cartaoFilme");

    const capa = criar("div", "capaFilme");
    capa.appendChild(criar("span", "posicaoFilme", f.posicao));
    const imagem = criar("img", "imagemCapa");
    imagem.src = f.capa;
    imagem.alt = "Capa de " + f.titulo;
    imagem.loading = "lazy";
    capa.appendChild(imagem);

    const info = criar("div", "infoFilme");
    info.appendChild(criar("h2", "tituloFilme", f.titulo));
    info.appendChild(criar("p", "metaFilme", f.ano + " · " + f.diretor));
    info.appendChild(criar("p", "notaFilme", "★ " + f.nota + "/10 · " + f.votos));
    info.appendChild(criar("p", "sinopseFilme", f.sinopse))

    const detalhes = criar("a", "linkDetalhes", "Ver detalhes ›");
    detalhes.href = f.pagina;
    info.appendChild(detalhes);

    cartao.appendChild(capa);
    cartao.appendChild(info);
    item.appendChild(cartao);
    lista.appendChild(item);
  }
}

//botões de ordenar
for (let i = 0; i < abas.length; i++) {
  abas[i].addEventListener("click", function () {
    ordem = this.dataset.ordem;
    for (let j = 0; j < abas.length; j++) {
      abas[j].classList.remove("abaAtiva");
      abas[j].setAttribute("aria-pressed", "false")
    }
    this.classList.add("abaAtiva");
    this.setAttribute("aria-pressed", "true");
    mostrarFilmes();
  });
}

seletor.addEventListener("change", function () {
  epoca = seletor.value;
  mostrarFilmes();
});

mostrarBanner();
mostrarGeneros();
mostrarFilmes();