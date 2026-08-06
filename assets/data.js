/* ============================================================================
   CONTEUDO DO SITE DA GIO GARBELINI
   ----------------------------------------------------------------------------
   ESTE E O UNICO ARQUIVO QUE VOCE PRECISA EDITAR PARA ATUALIZAR O SITE.
   Cada item tem versao em ingles (en) e portugues (pt).
   Se preencher so um idioma, o site usa esse mesmo texto nos dois (fallback).

   PARA ADICIONAR UMA NOTICIA, UM GOL OU UM VIDEO:
   copie um bloco { ... } existente, cole logo acima, e troque os textos.
   O mais recente deve ficar no topo da lista.
   ============================================================================ */
window.DATA = {

  /* ---- Fotos de destaque. Deixe '' para versão só tipográfica ---- */
  heroImage:'assets/fotos/gio-selecao-run.jpg',   // topo do início
  brazilImage:'assets/fotos/gio-copa-america.jpg', // seção Brasil (início)
  aboutImage:'assets/fotos/gio-atletico-estudio.jpg', // retrato na página Sobre

  /* ---- Info de contato (aparece no rodape e na pagina de contato) ---- */
  contact:{
    email:'press@giogarbelini.com',        // geral / imprensa
    partnerships:'brands@giogarbelini.com', // parcerias e marcas
    instagram:'gio.garbelini',
    tiktok:'gio.garbelini',
    x:'giogarbelini',
    locations:{ en:'Madrid · São Paulo · Worldwide', pt:'Madri · São Paulo · Mundo' }
  },

  /* ---- Seguidores nas redes (atualize os numeros quando mudarem) ---- */
  followers:{ instagram:'564K', tiktok:'829K', x:'200K', combined:'1.5M+' },

  /* ---- Patrocinadores e parceiros (aparecem na home) ---- */
  partners:[
    {name:'Nike',        role:{en:'Kit sponsor',pt:'Material esportivo'}},
    {name:'Volkswagen',  role:{en:'Mobility partner',pt:'Parceira de mobilidade'}},
    {name:'PlayStation', role:{en:'Gaming partner',pt:'Parceira de games'}}
  ],

  /* ---- Numeros de destaque (home). Marcos verificados, nao envelhecem rapido ---- */
  numbers:[
    {v:'200+', en:'Career<br>appearances', pt:'Jogos na<br>carreira'},
    {v:'52', en:'Career<br>goals', pt:'Gols na<br>carreira'},
    {v:'18', en:'Career<br>assists', pt:'Assistências<br>na carreira'},
    {v:'2×', en:'Copa América<br>Champion', pt:'Campeã da<br>Copa América'}
  ],

  /* ---- Carreira (paginas Carreira e Clubes) ---- */
  career:[
    {years:{en:'2024 to now',pt:'2024 até hoje'}, club:'Atlético de Madrid', place:{en:'Madrid, Spain',pt:'Madri, Espanha'}, img:'assets/fotos/gio-atletico-strike.jpg',
     note:{en:'A return to where the European story began. Debut goal vs Granada and Liga F Player of the Month in March 2025.',
           pt:'A volta ao lugar onde a história europeia começou. Gol de estreia contra o Granada e melhor da Liga F em março de 2025.'}},
    {years:{en:'Jan to Jun 2024',pt:'Jan a Jun 2024'}, club:'Madrid CFF', place:{en:'Madrid, Spain',pt:'Madri, Espanha'},
     note:{en:'Nine goals in sixteen matches, with a hat-trick vs Villarreal and braces against Valencia and Real Sociedad.',
           pt:'Nove gols em dezesseis jogos, com hat-trick contra o Villarreal e dois gols contra Valencia e Real Sociedad.'}},
    {years:{en:'2022 to 2024',pt:'2022 a 2024'}, club:'Arsenal WFC', place:{en:'London, England',pt:'Londres, Inglaterra'}, img:'assets/fotos/gio-arsenal-jogo.jpg',
     note:{en:'A formative chapter in the English game, with an FA Cup debut in January 2023 and a loan at Everton, scoring against Tottenham.',
           pt:'Um capítulo formador no futebol inglês, com estreia na FA Cup em janeiro de 2023 e empréstimo ao Everton, marcando contra o Tottenham.'}},
    {years:{en:'2022 to 2023',pt:'2022 a 2023'}, club:'Everton WFC', place:{en:'Liverpool, England',pt:'Liverpool, Inglaterra'},
     note:{en:'Women’s Super League experience and a first goal against Tottenham.',
           pt:'Experiência na Women’s Super League e o primeiro gol contra o Tottenham.'}},
    {years:{en:'2021 to 2022',pt:'2021 a 2022'}, club:'Levante UD', place:{en:'Valencia, Spain',pt:'Valência, Espanha'},
     note:{en:'Seven goals, including a match-winning brace against Rosenborg in extra time in European qualifying.',
           pt:'Sete gols, com dois decisivos contra o Rosenborg na prorrogação da fase europeia.'}},
    {years:{en:'2020 to 2022',pt:'2020 a 2022'}, club:'FC Barcelona', place:{en:'Barcelona, Spain',pt:'Barcelona, Espanha'}, img:'assets/fotos/gio-barca-estudio.jpg',
     note:{en:'League and UEFA Women’s Champions League winner in 2020-21, inside one of the world’s elite environments.',
           pt:'Campeã da liga e da Liga dos Campeões Feminina em 2020-21, em um dos ambientes de elite do mundo.'}},
    {years:{en:'2018 to 2020',pt:'2018 a 2020'}, club:'Madrid CFF', place:{en:'Madrid, Spain',pt:'Madri, Espanha'},
     note:{en:'Professional debut at fifteen, the beginning of the senior journey.',
           pt:'Estreia profissional aos quinze, o começo da jornada entre profissionais.'}}
  ],

  /* ---- Titulos e premios ---- */
  honours:[
    {em:'🏆', t:{en:'Copa América Champion 2025',pt:'Campeã da Copa América 2025'}, s:{en:'Brazil',pt:'Brasil'}},
    {em:'🏅', t:{en:'Liga F Player of the Month',pt:'Melhor da Liga F no mês'}, s:{en:'March 2025 · Atlético de Madrid',pt:'Março de 2025 · Atlético de Madrid'}},
    {em:'🏆', t:{en:'Copa América Champion 2022',pt:'Campeã da Copa América 2022'}, s:{en:'Brazil',pt:'Brasil'}},
    {em:'⭐', t:{en:'UEFA Women’s Champions League 2020-21',pt:'Liga dos Campeões Feminina 2020-21'}, s:{en:'FC Barcelona',pt:'FC Barcelona'}},
    {em:'🏆', t:{en:'Primera División 2020-21',pt:'Primera División 2020-21'}, s:{en:'FC Barcelona',pt:'FC Barcelona'}},
    {em:'🥇', t:{en:'Samba Gold Feminino 2021',pt:'Samba Gold Feminino 2021'}, s:{en:'Best Brazilian player abroad',pt:'Melhor brasileira no exterior'}},
    {em:'🌏', t:{en:'Tokyo 2020 Olympian',pt:'Olímpica em Tóquio 2020'}, s:{en:'Brazil women’s team',pt:'Seleção Brasileira'}}
  ],

  /* ---- Perfil (pagina Sobre) ---- */
  facts:[
    {k:{en:'Full name',pt:'Nome completo'}, v:'Giovana Queiroz Costa Garbelini'},
    {k:{en:'Date of birth',pt:'Nascimento'}, v:{en:'21 June 2003',pt:'21 de junho de 2003'}},
    {k:{en:'Birthplace',pt:'Naturalidade'}, v:{en:'São Paulo, Brazil',pt:'São Paulo, Brasil'}},
    {k:{en:'Nationality',pt:'Nacionalidade'}, v:{en:'Brazilian · Spanish · American',pt:'Brasileira · espanhola · americana'}},
    {k:{en:'Languages',pt:'Idiomas'}, v:{en:'Portuguese · Spanish · English',pt:'Português · espanhol · inglês'}},
    {k:{en:'Position',pt:'Posição'}, v:{en:'Forward (Striker / Winger)',pt:'Atacante (Centroavante / Ponta)'}},
    {k:{en:'Height',pt:'Altura'}, v:'167 cm'},
    {k:{en:'Preferred foot',pt:'Pé'}, v:{en:'Right',pt:'Destro'}},
    {k:{en:'Current club',pt:'Clube atual'}, v:'Atlético de Madrid'},
    {k:{en:'National team',pt:'Seleção'}, v:{en:'Brazil',pt:'Brasil'}},
    {k:{en:'Shirt',pt:'Camisa'}, v:{en:'#11 (national team) · #18 (club)',pt:'#11 (Seleção) · #18 (clube)'}},
    {k:{en:'Contract',pt:'Contrato'}, v:{en:'Through June 2027',pt:'Até junho de 2027'}}
  ],

  /* ---- Fotos (placeholders ate ter as definitivas com direitos) ----
     Para usar uma foto real: troque "img":'' pelo caminho, ex.: 'assets/fotos/gol.jpg'
     cat: chave da categoria (veja filtros na pagina Fotos). layout: 'wide' ou 'tall' ou '' */
  photos:[
    {img:'assets/fotos/gio-atletico-duelo.jpg',  cat:'action',   layout:'wide', label:{en:'Atlético · Liga F',pt:'Atlético · Liga F'}},
    {img:'assets/fotos/gio-selecao-corrida.jpg', cat:'brazil',   layout:'tall', label:{en:'Seleção Brasileira',pt:'Seleção Brasileira'}},
    {img:'assets/fotos/gio-selecao-comemora.jpg',cat:'brazil',   layout:'',     label:{en:'Celebration',pt:'Comemoração'}},
    {img:'assets/fotos/gio-barca-estudio.jpg',   cat:'portrait', layout:'tall', label:{en:'FC Barcelona',pt:'FC Barcelona'}},
    {img:'assets/fotos/gio-atletico-celebra.jpg',cat:'atletico', layout:'wide', label:{en:'Atlético de Madrid',pt:'Atlético de Madrid'}},
    {img:'assets/fotos/gio-selecao-retrato.jpg', cat:'portrait', layout:'tall', label:{en:'Seleção Brasileira',pt:'Seleção Brasileira'}},
    {img:'assets/fotos/gio-copa-america.jpg',    cat:'campaign', layout:'tall', label:{en:'Copa América 2025',pt:'Copa América 2025'}},
    {img:'assets/fotos/gio-atletico-treino.jpg', cat:'behind',   layout:'',     label:{en:'Behind the scenes',pt:'Bastidores'}},
    {img:'assets/fotos/gio-barca-hoodie.jpg',    cat:'behind',   layout:'wide', label:{en:'Behind the scenes',pt:'Bastidores'}},
    {img:'assets/fotos/gio-arsenal-retrato.jpg', cat:'portrait', layout:'tall', label:{en:'Arsenal WFC',pt:'Arsenal WFC'}},
    {img:'assets/fotos/gio-selecao-azul.jpg',    cat:'brazil',   layout:'',     label:{en:'Seleção Brasileira',pt:'Seleção Brasileira'}},
    {img:'assets/fotos/gio-atletico-estudio.jpg',cat:'campaign', layout:'',     label:{en:'Studio',pt:'Estúdio'}},
    {img:'assets/fotos/gio-atletico-strike.jpg', cat:'action',   layout:'wide', label:{en:'Atlético · Liga F',pt:'Atlético · Liga F'}},
    {img:'assets/fotos/gio-arsenal-jogo.jpg',    cat:'action',   layout:'',     label:{en:'Arsenal · WSL',pt:'Arsenal · WSL'}},
    {img:'assets/fotos/gio-atletico-run.jpg',    cat:'action',   layout:'wide', label:{en:'Atlético de Madrid',pt:'Atlético de Madrid'}},
    {img:'assets/fotos/gio-selecao-treino.jpg',  cat:'behind',   layout:'',     label:{en:'Training',pt:'Treino'}}
  ],
  photoCats:[
    {key:'all', en:'All', pt:'Todas', es:'Todas'},
    {key:'atletico', en:'Atlético', pt:'Atlético', es:'Atlético'},
    {key:'brazil', en:'Brazil', pt:'Brasil', es:'Brasil'},
    {key:'action', en:'Match action', pt:'Jogo', es:'Partido'},
    {key:'portrait', en:'Portraits', pt:'Retratos', es:'Retratos'},
    {key:'campaign', en:'Campaigns', pt:'Campanhas', es:'Campañas'},
    {key:'behind', en:'Behind the scenes', pt:'Bastidores', es:'Detrás de cámaras'}
  ],
  videoCats:[
    {key:'all', en:'All', pt:'Todos', es:'Todos'},
    {key:'gols', en:'Goals', pt:'Gols', es:'Goles'},
    {key:'momentos', en:'Highlights', pt:'Melhores momentos', es:'Mejores momentos'},
    {key:'selecao', en:'National team', pt:'Seleção', es:'Selección'},
    {key:'bastidores', en:'Behind the scenes & campaigns', pt:'Bastidores e campanhas', es:'Detrás de cámaras y campañas'},
    {key:'entrevistas', en:'Interviews', pt:'Entrevistas', es:'Entrevistas'}
  ],

  /* ---- Videos (IDs publicos do YouTube). Para adicionar: copie um bloco ---- */
  videos:[
    {id:'BYTlD5kGYZI', cat:'selecao', tag:{en:'Seleção · Ecuador',pt:'Seleção · Equador'}, title:{en:'Brazil senior debut vs Ecuador',pt:'Estreia pela Seleção contra o Equador'}},
    {id:'Wi500Ox0OjU', cat:'momentos', tag:{en:'Career compilation',pt:'Compilação de carreira'}, title:{en:'Highlights, goals and skills',pt:'Melhores momentos, gols e dribles'}},
    {id:'rLg7lsLo_QY', cat:'gols', tag:{en:'Atlético de Madrid',pt:'Atlético de Madrid'}, title:{en:'Hat-trick vs Ajax',pt:'Hat-trick contra o Ajax'}},
    {id:'FktFlf6V3mY', cat:'gols', tag:{en:'Madrid CFF · Liga F',pt:'Madrid CFF · Liga F'}, title:{en:'Brace vs Valencia',pt:'Dois gols contra o Valencia'}},
    {id:'b3NhINoQtDE', cat:'momentos', tag:{en:'Short highlights',pt:'Destaques curtos'}, title:{en:'Best moments',pt:'Melhores momentos'}}
  ],

  /* ---- Gols (pagina Gols). Use o "yt" para o video do gol, se tiver ----
     cat: 'brazil' | 'atletico' | 'madridcff' | 'england' */
  goals:[
    {yt:'rLg7lsLo_QY', cat:'atletico', date:{en:'Aug 2024',pt:'Ago 2024'}, title:{en:'Hat-trick on debut vs Ajax',pt:'Hat-trick na estreia contra o Ajax'}},
    {yt:'FktFlf6V3mY', cat:'madridcff', date:{en:'2024',pt:'2024'}, title:{en:'Brace vs Valencia',pt:'Dois gols contra o Valencia'}},
    {yt:'BYTlD5kGYZI', cat:'brazil', date:{en:'Dec 2020',pt:'Dez 2020'}, title:{en:'Senior Brazil debut vs Ecuador',pt:'Estreia pela Seleção contra o Equador'}},
    {yt:'', cat:'england', date:{en:'2023',pt:'2023'}, title:{en:'First goal in England vs Tottenham',pt:'Primeiro gol na Inglaterra contra o Tottenham'}}
  ],
  goalCats:[
    {key:'all', en:'All', pt:'Todos', es:'Todos'},
    {key:'brazil', en:'Brazil', pt:'Brasil', es:'Brasil'},
    {key:'atletico', en:'Atlético', pt:'Atlético', es:'Atlético'},
    {key:'madridcff', en:'Madrid CFF', pt:'Madrid CFF', es:'Madrid CFF'},
    {key:'england', en:'England', pt:'Inglaterra', es:'Inglaterra'}
  ],

  /* ---- Noticias (pagina Noticias e preview na home). O mais novo no topo ---- */
  news:[
    {date:{en:'August 2025',pt:'Agosto de 2025'}, tag:{en:'Brazil national team',pt:'Seleção Brasileira'}, url:'',
     title:{en:'Copa América 2025 champion: a goal and three assists in Brazil’s ninth title',pt:'Campeã da Copa América 2025: um gol e três assistências no nono título do Brasil'},
     excerpt:{en:'A decisive tournament as Brazil lifted the trophy once more.',pt:'Um torneio decisivo, com o Brasil erguendo a taça mais uma vez.'}},
    {date:{en:'March 2025',pt:'Março de 2025'}, tag:{en:'Liga F · Award',pt:'Liga F · Prêmio'}, url:'',
     title:{en:'Gio named Liga F Player of the Month for March 2025',pt:'Gio é eleita a melhor da Liga F em março de 2025'},
     excerpt:{en:'Recognition for a standout month with Atlético de Madrid.',pt:'Reconhecimento por um mês de destaque no Atlético de Madrid.'}},
    {date:{en:'November 2024',pt:'Novembro de 2024'}, tag:{en:'Brazil national team',pt:'Seleção Brasileira'}, url:'',
     title:{en:'Gio scores in 3-1 win over Australia on Seleção return',pt:'Gio marca na vitória por 3 a 1 sobre a Austrália no retorno à Seleção'},
     excerpt:{en:'A goal to mark her comeback to the national team.',pt:'Um gol para marcar a volta à Seleção.'}},
    {date:{en:'August 2024',pt:'Agosto de 2024'}, tag:{en:'Transfer',pt:'Transferência'}, url:'',
     title:{en:'Back at Atlético de Madrid with a hat-trick on debut vs Ajax',pt:'De volta ao Atlético de Madrid com hat-trick na estreia contra o Ajax'},
     excerpt:{en:'A statement return to the club where her European story began.',pt:'Um retorno marcante ao clube onde sua história europeia começou.'}}
  ]
};
