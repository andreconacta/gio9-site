/* ============================================================================
   MOTOR DO SITE  ·  monta cabecalho, rodape, idioma e o conteudo das paginas.
   Em geral voce NAO precisa mexer aqui. Conteudo fica em data.js.
   ============================================================================ */
(function(){
  const D = window.DATA;

  /* Rotulos fixos e textos das paginas (EN / PT) */
  const UI = {
    en:{
      brandTag:'Play Bold',
      nav:[['index.html','Home'],['sobre.html','About'],['carreira.html','Career'],['clubes.html','Clubs'],['gols.html','Goals'],['fotos.html','Photos'],['videos.html','Videos'],['noticias.html','News'],['contato.html','Contact']],
      cta:'Work with Gio',
      scroll:'Scroll to discover',
      hero_eyebrow:'Brazilian forward · Atlético de Madrid · #18',
      hero_intro:'Born in Brazil. Shaped by the world. Fearless in every move.',
      man_label:'The story',
      man_kicker:'From São Paulo to Florida. From Madrid to the world.',
      man_h:'Her game crosses <span class="serif">borders.</span>',
      man_p:'Gio Garbelini is a Brazilian international forward whose football was built across cultures, countries and challenges. Speed, instinct and courage define her on the pitch. Resilience defines her off it.',
      man_link:'Read her story',
      career_label:'The journey', career_h:'The road <span class="serif">here.</span>', career_link:'Full career',
      brazil_label:'Brazil', brazil_h:'More than a shirt. <span class="serif">A calling.</span>',
      brazil_p:'Two Copa América titles. An Olympian. Thirty senior appearances and counting. Every time Gio wears Brazil, she carries the places, people and dreams that made her.',
      news_label:'Latest', news_h:'News', news_link:'All news',
      partners_label:'Official sponsor', partners_h:'Built for brands that move culture.',
      partners_p:'Gio connects elite football with audiences across Brazil, Spain and the wider world, a combined community of more than 1.5M followers. Partnership opportunities include campaigns, ambassadorships, appearances and original content.',
      partners_note:'Selected collaborations and campaign work available on request.',
      contact_label:'Partnerships · Media · Appearances', contact_h:'Let’s make <span class="serif">an impact.</span>',
      contact_chips:['Sponsorship','Media & press','Interviews','Events','Ambassador','Content'],
      general_k:'General / Press', brands_k:'Partnerships & brands', ig_k:'Instagram', based_k:'Based',
      /* page heroes */
      p_about:['About','Gio <span class="serif">Garbelini.</span>','From São Paulo to the world, the story of a Brazilian international forward.'],
      about_lead:'Born in São Paulo, shaped across Brazil, Florida, Spain and England. Gio <span class="serif">plays bold.</span>',
      about_p1:'Giovana Queiroz Costa Garbelini turned professional at just fifteen. Her journey through Madrid CFF, Barcelona, where she won the 2020-21 UEFA Women’s Champions League, Levante, Arsenal and Everton forged one of the most exciting attacking talents in women’s football today.',
      about_p2:'Pace, power and an eye for goal define her game. Brazilian, Spanish and American, and fluent in three languages, she is as at home between cultures as she is between defenders, a player built to represent a new generation of global athletes.',
      about_facts_h:'Player profile',
      p_career:['Career','Clubs & <span class="serif">honours.</span>','Six clubs, three countries and one unmistakable identity.'],
      honours_h:'Honours & awards',
      p_clubs:['Clubs','Every <span class="serif">chapter.</span>','From a professional debut at fifteen to the Liga F, each club shaped the player she is today.'],
      p_goals:['Goals','The <span class="serif">archive.</span>','Goals and defining moments for club and country.'],
      p_photos:['Photos','On the <span class="serif">pitch.</span>','A gallery of match action, portraits and campaigns.'],
      p_videos:['Videos','Watch <span class="serif">Gio.</span>','Goals, skills, highlights and interviews.'],
      p_news:['News','Latest <span class="serif">updates.</span>','Verified news from club and national team.'],
      p_contact:['Contact','Work with <span class="serif">Gio.</span>','For sponsorships, media, events and brand partnerships. We respond within 48 hours.'],
      photos_soon:'Final rights-cleared photos coming soon.',
      read_more:'Read', watch:'Watch',
      foot_about:'Brazilian international forward. Atlético de Madrid. Seleção Brasileira. Playing bold, from São Paulo to the world.',
      foot_nav:'Navigate', foot_more:'More', foot_connect:'Connect', rights:'All rights reserved.'
    },
    pt:{
      brandTag:'Play Bold',
      nav:[['index.html','Início'],['sobre.html','Sobre'],['carreira.html','Carreira'],['clubes.html','Clubes'],['gols.html','Gols'],['fotos.html','Fotos'],['videos.html','Vídeos'],['noticias.html','Notícias'],['contato.html','Contato']],
      cta:'Trabalhe com a Gio',
      scroll:'Role para descobrir',
      hero_eyebrow:'Atacante brasileira · Atlético de Madrid · #18',
      hero_intro:'Nascida no Brasil. Formada pelo mundo. Destemida em cada jogada.',
      man_label:'A história',
      man_kicker:'De São Paulo à Flórida. De Madri para o mundo.',
      man_h:'O jogo dela cruza <span class="serif">fronteiras.</span>',
      man_p:'Gio Garbelini é uma atacante brasileira internacional cujo futebol foi construído entre culturas, países e desafios. Velocidade, instinto e coragem a definem em campo. A resiliência a define fora dele.',
      man_link:'Conheça a história',
      career_label:'A trajetória', career_h:'O caminho <span class="serif">até aqui.</span>', career_link:'Carreira completa',
      brazil_label:'Brasil', brazil_h:'Mais que uma camisa. <span class="serif">Um chamado.</span>',
      brazil_p:'Dois títulos da Copa América. Uma olímpica. Trinta jogos pela Seleção e contando. Toda vez que veste o Brasil, a Gio carrega os lugares, as pessoas e os sonhos que a formaram.',
      news_label:'Últimas', news_h:'Notícias', news_link:'Todas as notícias',
      partners_label:'Patrocinadora oficial', partners_h:'Feita para marcas que movem a cultura.',
      partners_p:'A Gio conecta o futebol de elite a públicos no Brasil, na Espanha e no mundo, uma comunidade combinada de mais de 1,5 milhão de seguidores. As oportunidades de parceria incluem campanhas, embaixadora de marca, aparições e conteúdo original.',
      partners_note:'Colaborações selecionadas e trabalhos de campanha sob consulta.',
      contact_label:'Parcerias · Mídia · Aparições', contact_h:'Vamos causar <span class="serif">impacto.</span>',
      contact_chips:['Patrocínio','Mídia e imprensa','Entrevistas','Eventos','Embaixadora','Conteúdo'],
      general_k:'Geral / Imprensa', brands_k:'Parcerias e marcas', ig_k:'Instagram', based_k:'Base',
      p_about:['Sobre','Gio <span class="serif">Garbelini.</span>','De São Paulo para o mundo, a história de uma atacante brasileira internacional.'],
      about_lead:'Nascida em São Paulo, formada entre Brasil, Flórida, Espanha e Inglaterra. A Gio <span class="serif">joga ousado.</span>',
      about_p1:'Giovana Queiroz Costa Garbelini virou profissional aos quinze anos. A passagem por Madrid CFF, Barcelona, onde conquistou a Liga dos Campeões Feminina de 2020-21, Levante, Arsenal e Everton forjou um dos talentos ofensivos mais empolgantes do futebol feminino atual.',
      about_p2:'Velocidade, potência e faro de gol definem o seu jogo. Brasileira, espanhola e americana, e fluente em três idiomas, ela transita entre culturas com a mesma naturalidade com que passa pelas marcadoras, uma jogadora pronta para representar uma nova geração de atletas globais.',
      about_facts_h:'Perfil da jogadora',
      p_career:['Carreira','Clubes e <span class="serif">títulos.</span>','Seis clubes, três países e uma identidade inconfundível.'],
      honours_h:'Títulos e prêmios',
      p_clubs:['Clubes','Cada <span class="serif">capítulo.</span>','Da estreia profissional aos quinze anos à Liga F, cada clube formou a jogadora de hoje.'],
      p_goals:['Gols','O <span class="serif">arquivo.</span>','Gols e momentos decisivos por clube e Seleção.'],
      p_photos:['Fotos','Em <span class="serif">campo.</span>','Uma galeria de ação de jogo, retratos e campanhas.'],
      p_videos:['Vídeos','Assista à <span class="serif">Gio.</span>','Gols, dribles, melhores momentos e entrevistas.'],
      p_news:['Notícias','Últimas <span class="serif">atualizações.</span>','Notícias verificadas do clube e da Seleção.'],
      p_contact:['Contato','Trabalhe com a <span class="serif">Gio.</span>','Para patrocínios, mídia, eventos e parcerias de marca. Respondemos em até 48 horas.'],
      photos_soon:'Seleção final de fotos com direitos liberados em breve.',
      read_more:'Ler', watch:'Assistir',
      foot_about:'Atacante brasileira internacional. Atlético de Madrid. Seleção Brasileira. Jogando ousado, de São Paulo para o mundo.',
      foot_nav:'Navegar', foot_more:'Mais', foot_connect:'Conecte-se', rights:'Todos os direitos reservados.'
    }
  };

  let LANG = 'en';
  try{ const s=localStorage.getItem('gio_lang'); if(s==='pt'||s==='en') LANG=s; }catch(e){}

  const $=(s,c=document)=>c.querySelector(s);
  const $$=(s,c=document)=>Array.from(c.querySelectorAll(s));
  const T=o=>o==null?'':(typeof o==='string'?o:(o[LANG]||o.en||o.pt||''));
  const page=document.body.getAttribute('data-page')||'home';
  const U=()=>UI[LANG];

  function ph(label,dark,corner){
    return '<div class="ph'+(dark?' dark-ph':'')+'">'+(corner?'<span class="corner"></span><span class="corner br"></span>':'')+
      '<div class="ph-l"><span class="ic">📷</span><b>'+label+'</b><small>'+(LANG==='pt'?'Foto em breve':'Photo coming soon')+'</small></div></div>';
  }

  /* ---------- Header / footer / menu ---------- */
  function chrome(){
    const u=U();
    const nav=u.nav.map(([h,l])=>'<a href="'+h+'"'+(h===currentFile()?' class="active"':'')+'>'+l+'</a>').join('');
    $('#site-header').innerHTML =
      '<a href="index.html" class="wordmark">GIO<span>.</span></a>'+
      '<nav>'+nav+'</nav>'+
      '<div class="head-right">'+
        '<div class="lang"><button data-l="en">EN</button><button data-l="pt">PT</button></div>'+
        '<a href="contato.html" class="header-cta">'+u.cta+' <span>↗</span></a>'+
        '<button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>'+
      '</div>';
    $('#mobile-menu').innerHTML = u.nav.map(([h,l])=>'<a href="'+h+'">'+l+'</a>').join('')+'<a href="contato.html" style="color:var(--gold)">'+u.cta+' ↗</a>';

    $('#site-footer').innerHTML =
      '<div class="wrap"><div class="foot-top">'+
      '<div class="foot-brand"><a href="index.html" class="wordmark">GIO<span>.</span></a><p>'+u.foot_about+'</p></div>'+
      '<div class="foot-col"><h4>'+u.foot_nav+'</h4><a href="index.html">'+u.nav[0][1]+'</a><a href="sobre.html">'+u.nav[1][1]+'</a><a href="carreira.html">'+u.nav[2][1]+'</a><a href="clubes.html">'+u.nav[3][1]+'</a></div>'+
      '<div class="foot-col"><h4>'+u.foot_more+'</h4><a href="gols.html">'+u.nav[4][1]+'</a><a href="fotos.html">'+u.nav[5][1]+'</a><a href="videos.html">'+u.nav[6][1]+'</a><a href="noticias.html">'+u.nav[7][1]+'</a></div>'+
      '<div class="foot-col"><h4>'+u.foot_connect+'</h4><a href="contato.html">'+u.nav[8][1]+'</a><a href="mailto:'+D.contact.email+'">'+D.contact.email+'</a><a href="https://instagram.com/'+D.contact.instagram+'" target="_blank" rel="noopener">Instagram</a></div>'+
      '</div><div class="foot-bottom"><span>© 2026 Gio Garbelini · <b>Play Bold</b></span><span>'+u.rights+'</span></div></div>';

    // events
    $$('.lang button').forEach(b=>{ b.classList.toggle('on',b.dataset.l===LANG); b.onclick=()=>{ LANG=b.dataset.l; try{localStorage.setItem('gio_lang',LANG);}catch(e){} renderAll(); }; });
    const burger=$('#burger'), mm=$('#mobile-menu');
    burger.onclick=()=>{ mm.classList.toggle('open'); document.body.classList.toggle('no-scroll'); };
    $$('#mobile-menu a').forEach(a=>a.onclick=()=>{ mm.classList.remove('open'); document.body.classList.remove('no-scroll'); });
  }
  function currentFile(){ const p=location.pathname.split('/').pop(); return p||'index.html'; }

  /* ---------- Reusable blocks ---------- */
  function numbersBand(){
    return '<section class="numbers">'+D.numbers.map(n=>'<div><strong>'+n.v+'</strong><span>'+T(n)+'</span></div>').join('')+'</section>';
  }
  function timeline(list){
    return '<div class="timeline">'+list.map((c,i)=>'<article><span class="no">0'+(i+1)+'</span><span class="yr">'+T(c.years)+'</span><h3>'+c.club+'</h3><p>'+T(c.note)+'</p></article>').join('')+'</div>';
  }
  function honoursGrid(){
    return '<div class="honours">'+D.honours.map(h=>'<div class="honour"><span class="em">'+h.em+'</span><div><div class="t">'+T(h.t)+'</div><div class="s">'+T(h.s)+'</div></div></div>').join('')+'</div>';
  }
  function newsCards(list){
    return list.map(n=>{
      const inner='<div class="body"><div class="tag">'+T(n.tag)+'</div><h3>'+T(n.title)+'</h3><div class="date">'+T(n.date)+'</div>'+(T(n.excerpt)?'<p class="excerpt">'+T(n.excerpt)+'</p>':'')+'</div>';
      return n.url?'<a class="card reveal" href="'+n.url+'" target="_blank" rel="noopener">'+inner+'</a>':'<div class="card reveal">'+inner+'</div>';
    }).join('');
  }
  function partnersBand(){
    const u=U();
    return '<section class="partners-band"><div class="wrap inner"><div class="reveal"><div class="plabel">'+u.partners_label+'</div><div class="nike">NIKE</div></div>'+
      '<div class="reveal"><h3>'+u.partners_h+'</h3><p>'+u.partners_p+'</p><div class="note">'+u.partners_note+'</div><div style="margin-top:26px"><a class="text-link" href="contato.html">'+u.cta+' <span class="ar">↗</span></a></div></div></div></section>';
  }
  function contactCTA(){
    const u=U();
    return '<section class="contact-cta"><div class="wrap"><p class="eyebrow" style="color:var(--gold)">'+u.contact_label+'</p><div class="chips">'+u.contact_chips.map(c=>'<span class="chip">'+c+'</span>').join('')+'</div><h2>'+u.contact_h+'</h2><a class="mail" href="mailto:'+D.contact.email+'">'+D.contact.email+' <span>↗</span></a></div></section>';
  }
  function videoCards(list){
    return '<div class="videos-grid">'+list.map(v=>'<div class="video-card reveal" data-id="'+v.id+'"><div class="v-frame"><img src="https://i.ytimg.com/vi/'+v.id+'/hqdefault.jpg" alt="'+T(v.title)+'" loading="lazy" onerror="this.style.display=\'none\'"><div class="play"></div></div><div class="v-meta"><div class="tag">'+T(v.tag)+'</div><div class="ttl">'+T(v.title)+'</div></div></div>').join('')+'</div>';
  }
  function bindVideos(scope){
    // Abre o video no YouTube em outra aba (evita o Erro 153 quando o dono
    // desativa a incorporacao, comum em videos de clube/seleção).
    $$('.video-card',scope).forEach(card=>{ card.style.cursor='pointer'; card.onclick=()=>{
      const id=card.dataset.id; if(!id) return;
      window.open('https://www.youtube.com/watch?v='+id,'_blank','noopener');
    };});
  }
  function pageHero(arr){
    return '<section class="phero"><div class="wrap"><p class="eyebrow">'+arr[0]+'</p><h1>'+arr[1]+'</h1><p class="sub">'+arr[2]+'</p></div></section>';
  }

  /* ---------- Page renderers ---------- */
  const R={};
  R.home=()=>{
    const u=U();
    return (
      '<section class="hero"><div class="hero-ph" id="heroPh"'+(D.heroImage?' style="background-image:url(\''+D.heroImage+'\')"':'')+'></div>'+
        '<div class="wrap hero-inner"><p class="eyebrow reveal">'+u.hero_eyebrow+'</p>'+
        '<h1 class="reveal">PLAY<span class="serif">BOLD.</span></h1>'+
        '<p class="intro reveal">'+u.hero_intro+'</p>'+
        '<div class="cta-row reveal"><a class="btn btn-gold" href="videos.html">'+u.watch+' ↗</a><a class="btn btn-ghost" href="contato.html">'+u.cta+'</a></div></div></section>'+

      '<section class="section"><div class="wrap"><div class="section-label reveal"><span>01</span>'+u.man_label+'</div>'+
        '<p class="reveal" style="text-transform:uppercase;letter-spacing:.14em;font-size:.85rem;font-weight:600;margin-bottom:30px;color:var(--muted)">'+u.man_kicker+'</p>'+
        '<h2 class="sec-h reveal">'+u.man_h+'</h2>'+
        '<div style="max-width:640px;margin-top:26px"><p class="reveal" style="font-size:1.1rem;line-height:1.8;color:#33312c">'+u.man_p+'</p>'+
        '<div class="reveal" style="margin-top:26px"><a class="text-link" href="sobre.html">'+u.man_link+' <span class="ar">↗</span></a></div></div></div></section>'+

      numbersBand()+

      '<section class="section dark"><div class="wrap"><div class="sec-top"><div><div class="section-label"><span>02</span>'+u.career_label+'</div><h2 class="sec-h reveal">'+u.career_h+'</h2></div><a class="text-link light reveal" href="carreira.html">'+u.career_link+' <span class="ar">↗</span></a></div>'+timeline(D.career.slice(0,4))+'</div></section>'+

      '<section class="section ink"><div class="wrap"><div class="section-label"><span>03</span>'+u.brazil_label+'</div>'+
        '<div class="brazil-split">'+
          '<div><h2 class="sec-h reveal">'+u.brazil_h+'</h2><p class="sec-intro reveal">'+u.brazil_p+'</p></div>'+
          (D.brazilImage?'<div class="brazil-photo reveal"><img src="'+D.brazilImage+'" alt="Gio Garbelini, Seleção Brasileira" loading="lazy" onerror="this.style.display=\'none\'"></div>':'')+
        '</div>'+
        '<div class="reveal" style="margin-top:44px">'+honoursGrid()+'</div></div></section>'+

      '<section class="section"><div class="wrap"><div class="sec-top"><div><div class="section-label"><span>04</span>'+u.news_label+'</div><h2 class="sec-h reveal">'+u.news_h+'</h2></div><a class="text-link reveal" href="noticias.html">'+u.news_link+' <span class="ar">↗</span></a></div><div class="grid-3">'+newsCards(D.news.slice(0,3))+'</div></div></section>'+

      partnersBand()+ contactCTA()
    );
  };

  R.sobre=()=>{
    const u=U();
    const portrait = D.aboutImage?'<div class="about-portrait reveal"><img src="'+D.aboutImage+'" alt="Gio Garbelini" loading="lazy" onerror="this.style.display=\'none\'"></div>':'';
    return pageHero(u.p_about)+
      '<section class="section"><div class="wrap"><div class="about-split"><div class="prose"><p class="lead reveal">'+u.about_lead+'</p><p class="reveal">'+u.about_p1+'</p><p class="reveal">'+u.about_p2+'</p></div>'+portrait+'</div>'+
      '<div class="reveal" style="margin-top:50px"><div class="section-label"><span>·</span>'+u.about_facts_h+'</div><div class="facts">'+D.facts.map(f=>'<div class="f"><div class="k">'+T(f.k)+'</div><div class="v">'+T(f.v)+'</div></div>').join('')+'</div></div></div></section>'+
      numbersBand()+ contactCTA();
  };

  R.carreira=()=>{
    const u=U();
    return pageHero(u.p_career)+
      '<section class="section"><div class="wrap">'+timeline(D.career)+'</div></section>'+
      '<section class="section dark"><div class="wrap"><div class="section-label"><span>·</span>'+u.honours_h+'</div>'+honoursGrid()+'</div></section>'+
      contactCTA();
  };

  R.clubes=()=>{
    const u=U();
    const cards=D.career.map(c=>{
      const thumb=c.img?'<img src="'+c.img+'" alt="'+c.club+'" loading="lazy" onerror="this.style.display=\'none\'">':ph(c.club,false,true);
      return '<div class="club-card reveal"><div class="thumb">'+thumb+'</div><div class="body"><div class="yr">'+T(c.years)+'</div><h3>'+c.club+'</h3><div class="place">'+T(c.place)+'</div><p>'+T(c.note)+'</p></div></div>';
    }).join('');
    return pageHero(u.p_clubs)+
      '<section class="section"><div class="wrap"><div class="clubs-grid">'+cards+'</div></div></section>'+ contactCTA();
  };

  R.gols=()=>{
    const u=U();
    const chips=D.goalCats.map((c,i)=>'<button data-f="'+c.key+'"'+(i===0?' class="on"':'')+'>'+T(c)+'</button>').join('');
    const cards=D.goals.map(g=>{
      const thumb=g.yt?'<div class="v-frame"><img src="https://i.ytimg.com/vi/'+g.yt+'/hqdefault.jpg" alt="'+T(g.title)+'" loading="lazy" onerror="this.style.display=\'none\'"><div class="play"></div></div>':'<div class="v-frame">'+ph(LANG==='pt'?'Vídeo do gol':'Goal video',true,false)+'</div>';
      return '<div class="video-card reveal" data-cat="'+g.cat+'" data-id="'+(g.yt||'')+'">'+thumb+'<div class="v-meta"><div class="tag">'+T(g.date)+'</div><div class="ttl">'+T(g.title)+'</div></div></div>';
    }).join('');
    return pageHero(u.p_goals)+
      '<section class="section"><div class="wrap"><div class="filters" id="goalFilters">'+chips+'</div><div class="videos-grid" id="goalGrid">'+cards+'</div></div></section>'+ contactCTA();
  };

  R.fotos=()=>{
    const u=U();
    const chips=D.photoCats.map((c,i)=>'<button data-f="'+c.key+'"'+(i===0?' class="on"':'')+'>'+T(c)+'</button>').join('');
    const tiles=D.photos.map(p=>{
      const inner=p.img?'<img src="'+p.img+'" alt="'+T(p.label)+'" loading="lazy" style="height:100%;object-fit:cover">':ph(T(p.label),false,true);
      return '<figure class="tile ph '+(p.layout==='wide'?'wide':p.layout==='tall'?'tall':'')+'" data-cat="'+p.cat+'" style="'+(p.img?'background:none':'')+'">'+inner+'<span class="cap">'+T(p.label)+'</span></figure>';
    }).join('');
    return pageHero(u.p_photos)+
      '<section class="section"><div class="wrap"><div class="filters" id="photoFilters">'+chips+'</div><div class="gallery-grid" id="photoGrid">'+tiles+'</div>'+
      '<p style="color:var(--muted);font-size:.82rem;margin-top:26px">'+u.photos_soon+'</p></div></section>'+ contactCTA();
  };

  R.videos=()=>{
    const u=U();
    return pageHero(u.p_videos)+
      '<section class="section"><div class="wrap">'+videoCards(D.videos)+'</div></section>'+ contactCTA();
  };

  R.noticias=()=>{
    const u=U();
    return pageHero(u.p_news)+
      '<section class="section"><div class="wrap"><div class="grid-3">'+newsCards(D.news)+'</div></div></section>'+ contactCTA();
  };

  R.contato=()=>{
    const u=U();
    const domain=D.contact.email.split('@')[1];
    const media='media@'+domain, partners='partnerships@'+domain;
    return pageHero(u.p_contact)+
      '<section class="section"><div class="wrap" style="max-width:900px"><div class="chips" style="display:flex;flex-wrap:wrap;gap:9px;margin-bottom:24px">'+
      u.contact_chips.map(c=>'<span class="chip" style="border:1px solid var(--line-l);border-radius:999px;padding:8px 15px;font-size:.63rem;letter-spacing:.13em;text-transform:uppercase;color:#4a473f">'+c+'</span>').join('')+'</div>'+
      '<a style="display:inline-block;font-weight:900;letter-spacing:-.03em;font-size:clamp(1.4rem,4.5vw,2.7rem);border-bottom:2px solid var(--ink);padding-bottom:8px;word-break:break-word" href="mailto:'+D.contact.email+'">'+D.contact.email+'</a>'+
      '<div class="contact-lines">'+
        '<div class="cl"><div class="k">'+u.general_k+'</div><a href="mailto:'+media+'">'+media+'</a></div>'+
        '<div class="cl"><div class="k">'+u.brands_k+'</div><a href="mailto:'+partners+'">'+partners+'</a></div>'+
        '<div class="cl"><div class="k">'+u.ig_k+'</div><a href="https://instagram.com/'+D.contact.instagram+'" target="_blank" rel="noopener">@'+D.contact.instagram+'</a></div>'+
        '<div class="cl"><div class="k">'+u.based_k+'</div><span class="v">'+T(D.contact.locations)+'</span></div>'+
      '</div></div></section>';
  };

  /* ---------- Filters ---------- */
  function bindFilters(){
    const gf=$('#goalFilters'); if(gf){ gf.onclick=e=>{ const b=e.target.closest('button'); if(!b)return; $$('button',gf).forEach(x=>x.classList.remove('on')); b.classList.add('on'); const f=b.dataset.f; $$('#goalGrid .video-card').forEach(c=>c.style.display=(f==='all'||c.dataset.cat===f)?'':'none'); }; }
    const pf=$('#photoFilters'); if(pf){ pf.onclick=e=>{ const b=e.target.closest('button'); if(!b)return; $$('button',pf).forEach(x=>x.classList.remove('on')); b.classList.add('on'); const f=b.dataset.f; $$('#photoGrid .tile').forEach(c=>c.style.display=(f==='all'||c.dataset.cat===f)?'':'none'); }; }
  }

  /* ---------- Reveal ---------- */
  let io;
  function reveals(){ if(io)io.disconnect(); io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }),{threshold:.1}); $$('.reveal').forEach(el=>io.observe(el)); }

  /* ---------- Render everything ---------- */
  function renderAll(){
    document.documentElement.lang=LANG;
    chrome();
    const main=$('#main'); if(main && R[page]) main.innerHTML=R[page]();
    bindVideos(document); bindFilters(); reveals();
  }

  addEventListener('scroll',()=>{ $('#site-header').classList.toggle('solid',scrollY>50); },{passive:true});

  /* Conteudo editavel pelo painel (/admin). Busca os arquivos JSON e, se
     encontrar, usa eles no lugar dos valores de fallback do data.js.
     Se falhar (ex.: abrir o arquivo local sem servidor), mantem o fallback. */
  async function loadContent(){
    const map={news:'assets/content/news.json',goals:'assets/content/goals.json',videos:'assets/content/videos.json',photos:'assets/content/photos.json'};
    let changed=false;
    await Promise.all(Object.entries(map).map(async([k,url])=>{
      try{ const r=await fetch(url,{cache:'no-store'}); if(r.ok){ const j=await r.json(); if(j&&Array.isArray(j.items)){ D[k]=j.items; changed=true; } } }catch(e){}
    }));
    return changed;
  }

  renderAll();
  loadContent().then(changed=>{ if(changed) renderAll(); });
})();
