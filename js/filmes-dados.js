/* ==========================================================
   TopFive Cinema - Dados dos filmes

   Cada gênero tem:
     - nome, emoji e frase (iguais aos cartões da home)
     - destaque: cor principal da página (substitui o dourado)
     - fundo: tom escuro do header e do banner
     - filmes: lista com os 5 filmes do ranking

   Fonte:IMDb
   ========================================================== */

var GENEROS = {
  "acao": {
    "pasta": "acao",
    "emoji": "💥",
    "nome": "Ação",
    "frase": "Adrenalina do começo ao fim.",
    "destaque": "#e8473d",
    "fundo": "#1f1013",
    "filmes": [
      {
        "posicao": 1,
        "titulo": "Batman: O Cavaleiro das Trevas",
        "ano": 2008,
        "diretor": "Christopher Nolan",
        "nota": "9,1",
        "votos": "3,1 milhões de votos",
        "sinopse": "Quando o Coringa espalha o caos em Gotham, Batman, Gordon e o promotor Harvey Dent precisam trabalhar juntos para deter o vilão. A ameaça testa os limites do herói e da própria cidade.",
        "capa": "img/filmes/acao/o_cavaleiro_das_trevas.webp",
        "pagina": "filmes/acao/o_cavaleiro_das_trevas.html"
      },
      {
        "posicao": 2,
        "titulo": "O Exterminador do Futuro 2: O Julgamento Final",
        "ano": 1991,
        "diretor": "James Cameron",
        "nota": "8,6",
        "votos": "1,3 milhão de votos",
        "sinopse": "Um ciborgue, idêntico ao que fracassou em matar Sarah Connor, agora deve proteger o filho dela, John, de 10 anos, de um ciborgue mais avançado e poderoso.",
        "capa": "img/filmes/acao/o_exterminador_do_futuro_2.webp",
        "pagina": "filmes/acao/o_exterminador_do_futuro.html"
      },
      {
        "posicao": 3,
        "titulo": "Os Sete Samurais",
        "ano": 1954,
        "diretor": "Akira Kurosawa",
        "nota": "8,6",
        "votos": "cerca de 385 mil votos",
        "sinopse": "Camponeses de uma aldeia explorada por bandidos contratam um samurai veterano para protegê-los, e ele reúne outros seis guerreiros para ajudá-lo.",
        "capa": "img/filmes/acao/os_sete_samurais.webp",
        "pagina": "filmes/acao/Os_Sete_Samurais.html"
      },
      {
        "posicao": 4,
        "titulo": "Gladiador",
        "ano": 2000,
        "diretor": "Ridley Scott",
        "nota": "8,5",
        "votos": "1,8 milhão de votos",
        "sinopse": "Um ex-general romano decide se vingar do imperador corrupto que assassinou sua família e o condenou à escravidão.",
        "capa": "img/filmes/acao/gladiador.webp",
        "pagina": "filmes/acao/gladiador.html"
      },
      {
        "posicao": 5,
        "titulo": "Léon: O Profissional",
        "ano": 1994,
        "diretor": "Luc Besson",
        "nota": "8,5",
        "votos": "1,3 milhão de votos",
        "sinopse": "Mathilda, de 12 anos, é acolhida a contragosto por Léon, um assassino profissional, depois que sua família é assassinada. Entre os dois se forma uma relação incomum, e ela se torna aprendiz dele.",
        "capa": "img/filmes/acao/leon_o_profissional.webp",
        "pagina": "filmes/acao/leon_o_profissional.html"
      }
    ],
    "rgb": "232, 71, 61"
  },
  "terror-horror": {
    "pasta": "terror",
    "emoji": "👻",
    "nome": "Terror/Horror",
    "frase": "O medo também é um sentimento.",
    "destaque": "#b8c2cc",
    "fundo": "#14171c",
    "filmes": [
      {
        "posicao": 1,
        "titulo": "O Silêncio dos Inocentes",
        "ano": 1991,
        "diretor": "Jonathan Demme",
        "nota": "8,6",
        "votos": "1,7 milhão de votos",
        "sinopse": "A jovem cadete do FBI Clarice Starling precisa da ajuda de Hannibal Lecter, um assassino canibal preso e manipulador, para capturar outro serial killer, que esfola suas vítimas.",
        "capa": "img/filmes/terror/o_silencio_dos_inocentes.webp",
        "pagina": "filmes/terror/O_Silencio_dos_inocentes.html"
      },
      {
        "posicao": 2,
        "titulo": "Alien, o 8º Passageiro",
        "ano": 1979,
        "diretor": "Ridley Scott",
        "nota": "8,5",
        "votos": "1,1 milhão de votos",
        "sinopse": "Ao investigar uma misteriosa transmissão de origem desconhecida, a tripulação de uma nave comercial encontra uma forma de vida mortal.",
        "capa": "img/filmes/terror/alien_o_oitavo_passageiro.webp",
        "pagina": "filmes/terror/alien_o_oitavo_passageiro.html"
      },
      {
        "posicao": 3,
        "titulo": "Psicose",
        "ano": 1960,
        "diretor": "Alfred Hitchcock",
        "nota": "8,5",
        "votos": "cerca de 780 mil votos",
        "sinopse": "Uma secretária em fuga, depois de desviar dinheiro, se refugia em um motel isolado na Califórnia, administrado por um homem reprimido e por sua mãe autoritária.",
        "capa": "img/filmes/terror/Psicose.webp",
        "pagina": "filmes/terror/psicose.html"
      },
      {
        "posicao": 4,
        "titulo": "O Iluminado",
        "ano": 1980,
        "diretor": "Stanley Kubrick",
        "nota": "8,4",
        "votos": "1,2 milhão de votos",
        "sinopse": "Uma família passa o inverno em um hotel isolado, onde uma presença sinistra leva o pai à violência. Ao mesmo tempo, o filho, dotado de poderes psíquicos, tem visões aterrorizantes do passado e do futuro do lugar.",
        "capa": "img/filmes/terror/o_iluminado.webp",
        "pagina": "filmes/terror/o_iluminado.html"
      },
      {
        "posicao": 5,
        "titulo": "Aliens, o Resgate",
        "ano": 1986,
        "diretor": "James Cameron",
        "nota": "8,4",
        "votos": "mais de 800 mil votos",
        "sinopse": "Décadas depois de sobreviver ao incidente da Nostromo, Ellen Ripley é enviada para restabelecer contato com uma colônia de terraformação, mas acaba enfrentando a Rainha Alien e sua prole.",
        "capa": "img/filmes/terror/aliens_o_resgate.webp",
        "pagina": "filmes/terror/aliens_o_resgate.html"
      }
    ],
    "rgb": "184, 194, 204"
  },
  "aventura": {
    "pasta": "aventura",
    "emoji": "🗺️",
    "nome": "Aventura",
    "frase": "Grandes jornadas e mundos a explorar.",
    "destaque": "#e8893a",
    "fundo": "#21170b",
    "filmes": [
      {
        "posicao": 1,
        "titulo": "O Senhor dos Anéis: O Retorno do Rei",
        "ano": 2003,
        "diretor": "Peter Jackson",
        "nota": "9,0",
        "votos": "2,1 milhões de votos",
        "sinopse": "Gandalf e Aragorn lideram os homens contra o exército de Sauron para atrair a atenção do Senhor das Trevas e afastá-la de Frodo e Sam, que se aproximam do Monte da Perdição com o Um Anel.",
        "capa": "img/filmes/aventura/o_senhor_dos_aneis_o_retorno_do_rei.webp",
        "pagina": "filmes/aventura/o_senhor_dos_aneis_o_retorno_do_rei.html"
      },
      {
        "posicao": 2,
        "titulo": "O Senhor dos Anéis: A Sociedade do Anel",
        "ano": 2001,
        "diretor": "Peter Jackson",
        "nota": "8,9",
        "votos": "2,2 milhões de votos",
        "sinopse": "Um pequeno hobbit do Condado e oito companheiros partem em uma jornada para destruir o poderoso Um Anel e salvar a Terra-média do Senhor das Trevas, Sauron.",
        "capa": "img/filmes/aventura/o_senhor_dos_aneis_a_sociedade_do_anel.webp",
        "pagina": "filmes/aventura/o_senhor_dos_aneis_a_sociedade_do_anel.html"
      },
      {
        "posicao": 3,
        "titulo": "O Senhor dos Anéis: As Duas Torres",
        "ano": 2002,
        "diretor": "Peter Jackson",
        "nota": "8,8",
        "votos": "1,9 milhão de votos",
        "sinopse": "Enquanto Frodo e Sam se aproximam de Mordor com a ajuda do traiçoeiro Gollum, a Sociedade dividida resiste a Saruman, o novo aliado de Sauron, e às suas hordas de Isengard.",
        "capa": "img/filmes/aventura/o_senhor_dos_aneis_as_duas_torres.webp",
        "pagina": "filmes/aventura/o_senhor_dos_aneis_as_duas_torres.html"
      },
      {
        "posicao": 4,
        "titulo": "Três Homens em Conflito",
        "ano": 1966,
        "diretor": "Sergio Leone",
        "nota": "8,8",
        "votos": "cerca de 880 mil votos",
        "sinopse": "Durante a Guerra Civil Americana, um golpe envolvendo recompensas une dois homens em uma aliança desconfortável contra um terceiro, em uma corrida para encontrar uma fortuna em ouro enterrada em um cemitério isolado.",
        "capa": "img/filmes/aventura/tres_homens_em_conflito.webp",
        "pagina": "filmes/aventura/tres_homens_em_conflito.html"
      },
      {
        "posicao": 5,
        "titulo": "Vingadores: Ultimato",
        "ano": 2019,
        "diretor": "Anthony Russo e Joe Russo",
        "nota": "8,4",
        "votos": "1,4 milhão de votos",
        "sinopse": "Depois dos eventos devastadores de Guerra Infinita, o universo está em ruínas. Com a ajuda dos aliados que restaram, os Vingadores se reúnem mais uma vez para reverter as ações de Thanos e restaurar o equilíbrio do universo.",
        "capa": "img/filmes/aventura/vingadores_ultimato.webp",
        "pagina": "filmes/aventura/vingadores_ultimato.html"
      }
    ],
    "rgb": "232, 137, 58"
  },
  "romance": {
    "pasta": "romance",
    "emoji": "❤️",
    "nome": "Romance",
    "frase": "Grandes histórias de amor.",
    "destaque": "#e0607a",
    "fundo": "#220f1a",
    "filmes": [
      {
        "posicao": 1,
        "titulo": "Forrest Gump: O Contador de Histórias",
        "ano": 1994,
        "diretor": "Robert Zemeckis",
        "nota": "8,8",
        "votos": "2,5 milhões de votos",
        "sinopse": "Pelos olhos de um homem do Alabama com QI 75, a história dos Estados Unidos entre as décadas de 1950 e 1970 se desenrola, enquanto ele sonha em se reencontrar com seu amor de infância.",
        "capa": "img/filmes/romance/forrest_gump.webp",
        "pagina": "filmes/romance/forrest_gump_o_contador_de_historias.html"
      },
      {
        "posicao": 2,
        "titulo": "A Felicidade Não se Compra",
        "ano": 1946,
        "diretor": "Frank Capra",
        "nota": "8,6",
        "votos": "cerca de 550 mil votos",
        "sinopse": "Um anjo é enviado do céu para ajudar George Bailey, um empresário desesperado e frustrado, a enxergar o valor da própria vida.",
        "capa": "img/filmes/romance/a_felicidade_nao_se_compra.webp",
        "pagina": "filmes/romance/a_felicidade_nao_se_compra.html"
      },
      {
        "posicao": 3,
        "titulo": "Casablanca",
        "ano": 1942,
        "diretor": "Michael Curtiz",
        "nota": "8,5",
        "votos": "cerca de 650 mil votos",
        "sinopse": "Em Casablanca, no Marrocos francês, o cínico dono de um café, um americano expatriado, hesita em ajudar sua antiga amante e o marido foragido dela a escapar dos nazistas.",
        "capa": "img/filmes/romance/casablanca.webp",
        "pagina": "filmes/romance/casablanca.html"
      },
      {
        "posicao": 4,
        "titulo": "Cinema Paradiso",
        "ano": 1988,
        "diretor": "Giuseppe Tornatore",
        "nota": "8,5",
        "votos": "cerca de 310 mil votos",
        "sinopse": "Salvatore, um cineasta famoso, volta à cidade natal para o funeral de Alfredo, o projecionista do cinema local, e relembra a infância e o amor pelo cinema que nasceu ali.",
        "capa": "img/filmes/romance/cinema_paradiso.webp",
        "pagina": "filmes/romance/cinema_paradiso.html"
      },
      {
        "posicao": 5,
        "titulo": "Your Name.",
        "ano": 2016,
        "diretor": "Makoto Shinkai",
        "nota": "8,4",
        "votos": "cerca de 385 mil votos",
        "sinopse": "Dois adolescentes descobrem uma conexão mágica e profunda ao perceber que estão trocando de corpo. As coisas se complicam quando o garoto e a garota decidem se encontrar pessoalmente.",
        "capa": "img/filmes/romance/your_name.webp",
        "pagina": "filmes/romance/your_name.html"
      }
    ],
    "rgb": "224, 96, 122"
  },
  "comedia": {
    "pasta": "comedia",
    "emoji": "😂",
    "nome": "Comédia",
    "frase": "Porque a vida já é séria demais.",
    "destaque": "#f2b544",
    "fundo": "#241e0d",
    "filmes": [
      {
        "posicao": 1,
        "titulo": "A Vida é Bela",
        "ano": 1997,
        "diretor": "Roberto Benigni",
        "nota": "8,6",
        "votos": "cerca de 805 mil votos",
        "sinopse": "Quando um garçom judeu de mente aberta e seu filho se tornam vítimas do Holocausto, ele usa uma mistura de vontade, humor e imaginação para proteger o menino dos perigos do campo em que estão presos.",
        "capa": "img/filmes/comedia/a_vida_e_bela.webp",
        "pagina": "filmes/comedia/a_vida_e_bela.html"
      },
      {
        "posicao": 2,
        "titulo": "De Volta para o Futuro",
        "ano": 1985,
        "diretor": "Robert Zemeckis",
        "nota": "8,5",
        "votos": "1,4 milhão de votos",
        "sinopse": "Marty McFly, um estudante de 17 anos, é enviado por acidente 30 anos ao passado em um DeLorean que viaja no tempo, inventado por seu amigo, o excêntrico cientista Doc Brown. Para voltar ao presente, ele precisa garantir que seus pais se apaixonem.",
        "capa": "img/filmes/comedia/de_volta_para_o_futuro.webp",
        "pagina": "filmes/comedia/de_volta_para_o_futuro.html"
      },
      {
        "posicao": 3,
        "titulo": "Intocáveis",
        "ano": 2011,
        "diretor": "Olivier Nakache e Éric Toledano",
        "nota": "8,5",
        "votos": "1 milhão de votos",
        "sinopse": "Depois de ficar tetraplégico em um acidente de parapente, um aristocrata contrata como cuidador um jovem vindo de um bairro pobre. Dessa convivência improvável nasce uma grande amizade.",
        "capa": "img/filmes/comedia/intocaveis.webp",
        "pagina": "filmes/comedia/intocaveis.html"
      },
      {
        "posicao": 4,
        "titulo": "Tempos Modernos",
        "ano": 1936,
        "diretor": "Charles Chaplin",
        "nota": "8,5",
        "votos": "cerca de 280 mil votos",
        "sinopse": "O Vagabundo luta para sobreviver na sociedade industrial moderna, com a ajuda de uma jovem sem-teto.",
        "capa": "img/filmes/comedia/tempos_modernos.webp",
        "pagina": "filmes/comedia/tempos_modernos.html"
      },
      {
        "posicao": 5,
        "titulo": "Luzes da Cidade",
        "ano": 1931,
        "diretor": "Charles Chaplin",
        "nota": "8,5",
        "votos": "cerca de 215 mil votos",
        "sinopse": "Com a ajuda de um milionário excêntrico que bebe demais, um vagabundo apaixonado por uma florista cega tenta juntar dinheiro para custear o tratamento que pode devolver a visão a ela.",
        "capa": "img/filmes/comedia/luzes_da_cidade.webp",
        "pagina": "filmes/comedia/luzes_da_cidade.html"
      }
    ],
    "rgb": "242, 181, 68"
  },
  "ficcao-cientifica": {
    "pasta": "ficcao-cientifica",
    "emoji": "🚀",
    "nome": "Ficção Científica",
    "frase": "O futuro (e o desconhecido) te espera.",
    "destaque": "#2f9bff",
    "fundo": "#0a1a30",
    "filmes": [
      {
        "posicao": 1,
        "titulo": "A Origem",
        "ano": 2010,
        "diretor": "Christopher Nolan",
        "nota": "8,8",
        "votos": "2,8 milhões de votos",
        "sinopse": "Dom Cobb é um ladrão especializado em roubar segredos corporativos por meio da tecnologia de compartilhamento de sonhos. Agora ele recebe a tarefa inversa: implantar uma ideia na mente do chefe de uma grande empresa, missão que seu passado trágico pode condenar ao fracasso.",
        "capa": "img/filmes/ficcao-cientifica/a_origem.webp",
        "pagina": "filmes/ficcao-cientifica/a_origem.html"
      },
      {
        "posicao": 2,
        "titulo": "Interestelar",
        "ano": 2014,
        "diretor": "Christopher Nolan",
        "nota": "8,7",
        "votos": "2,5 milhões de votos",
        "sinopse": "Com a Terra se tornando inabitável no futuro, o fazendeiro e ex-piloto da NASA Joseph Cooper recebe a missão de pilotar uma nave ao lado de uma equipe de pesquisadores em busca de um novo planeta para a humanidade.",
        "capa": "img/filmes/ficcao-cientifica/interestelar.webp",
        "pagina": "filmes/ficcao-cientifica/interestelar.html"
      },
      {
        "posicao": 3,
        "titulo": "Matrix",
        "ano": 1999,
        "diretor": "Lilly e Lana Wachowski",
        "nota": "8,7",
        "votos": "2,2 milhões de votos",
        "sinopse": "O hacker Neo é conduzido por uma estranha a um submundo proibido, onde descobre que a vida que conhece é uma fraude elaborada, criada por uma inteligência cibernética maligna.",
        "capa": "img/filmes/ficcao-cientifica/matrix.webp",
        "pagina": "filmes/ficcao-cientifica/matrix.html"
      },
      {
        "posicao": 4,
        "titulo": "Star Wars: Episódio V – O Império Contra-Ataca",
        "ano": 1980,
        "diretor": "Irvin Kershner",
        "nota": "8,7",
        "votos": "1,5 milhão de votos",
        "sinopse": "Depois que o Império derrota a Aliança Rebelde, Luke Skywalker começa a treinar com o mestre Jedi Yoda, enquanto Darth Vader e o caçador de recompensas Boba Fett perseguem seus amigos pela galáxia.",
        "capa": "img/filmes/ficcao-cientifica/star_wars_episodio_v.webp",
        "pagina": "filmes/ficcao-cientifica/star_wars_episodio_v.html"
      },
      {
        "posicao": 5,
        "titulo": "Star Wars: Episódio IV – Uma Nova Esperança",
        "ano": 1977,
        "diretor": "George Lucas",
        "nota": "8,6",
        "votos": "1,6 milhão de votos",
        "sinopse": "Luke Skywalker se une a um cavaleiro Jedi, a um piloto convencido, a um wookiee e a dois droides para salvar a galáxia do Império e de sua estação de batalha capaz de destruir mundos, enquanto tenta resgatar a princesa Leia de Darth Vader.",
        "capa": "img/filmes/ficcao-cientifica/star_wars_episodio_iv.webp",
        "pagina": "filmes/ficcao-cientifica/star_wars_episodio_iv.html"
      }
    ],
    "rgb": "47, 155, 255"
  },
  "animacao": {
    "pasta": "animacao",
    "emoji": "🎨",
    "nome": "Animação",
    "frase": "Desenhos que encantam todas as idades.",
    "destaque": "#3fc1c9",
    "fundo": "#0b2429",
    "filmes": [
      {
        "posicao": 1,
        "titulo": "A Viagem de Chihiro",
        "ano": 2001,
        "diretor": "Hayao Miyazaki",
        "nota": "8,6",
        "votos": "cerca de 950 mil votos",
        "sinopse": "Durante a mudança da família para o subúrbio, Chihiro, uma menina emburrada de 10 anos, entra em um mundo governado por deuses, bruxas e espíritos, onde os humanos são transformados em bestas.",
        "capa": "img/filmes/animacao/a_viagem_de_chihiro.webp",
        "pagina": "filmes/animacao/a_viagem_de_chihiro.html"
      },
      {
        "posicao": 2,
        "titulo": "O Rei Leão",
        "ano": 1994,
        "diretor": "Roger Allers e Rob Minkoff",
        "nota": "8,5",
        "votos": "1,2 milhão de votos",
        "sinopse": "O jovem leão Simba e seu pai, o rei Mufasa, são alvos do amargurado tio Scar, que quer subir ao trono.",
        "capa": "img/filmes/animacao/o_rei_leao.webp",
        "pagina": "filmes/animacao/o_rei_leao.html"
      },
      {
        "posicao": 3,
        "titulo": "Homem-Aranha: Através do Aranhaverso",
        "ano": 2023,
        "diretor": "Joaquim Dos Santos, Kemp Powers e Justin K. Thompson",
        "nota": "8,5",
        "votos": "cerca de 510 mil votos",
        "sinopse": "Viajando pelo multiverso, Miles Morales conhece uma nova equipe de heróis-aranha de dimensões diferentes. Quando eles entram em conflito sobre como lidar com uma nova ameaça, Miles se vê em uma encruzilhada.",
        "capa": "img/filmes/animacao/homem_aranha_aranhaverso.webp",
        "pagina": "filmes/animacao/homem_aranha_aranhaverso.html"
      },
      {
        "posicao": 4,
        "titulo": "O Túmulo dos Vagalumes",
        "ano": 1988,
        "diretor": "Isao Takahata",
        "nota": "8,5",
        "votos": "cerca de 380 mil votos",
        "sinopse": "Um menino e sua irmã mais nova lutam para sobreviver no Japão durante a Segunda Guerra Mundial.",
        "capa": "img/filmes/animacao/o_tumulo_dos_vagalumes.webp",
        "pagina": "filmes/animacao/o_tumulo_dos_vagalumes.html"
      },
      {
        "posicao": 5,
        "titulo": "WALL·E",
        "ano": 2008,
        "diretor": "Andrew Stanton",
        "nota": "8,4",
        "votos": "1,3 milhão de votos",
        "sinopse": "Um robô responsável por limpar uma Terra coberta de lixo conhece outro robô e se apaixona por ela. Juntos, eles embarcam em uma jornada que vai mudar o destino da humanidade.",
        "capa": "img/filmes/animacao/wall_e.webp",
        "pagina": "filmes/animacao/wall_e.html"
      }
    ],
    "rgb": "63, 193, 201"
  }
};
