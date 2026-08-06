/* ============================================================================
   MOTOR DO SITE  ·  monta cabecalho, rodape, idioma e o conteudo das paginas.
   Em geral voce NAO precisa mexer aqui. Conteudo fica em data.js.
   ============================================================================ */
(function(){
  const D = window.DATA;

  /* Chave do formulario de contato (Web3Forms). Os envios chegam por e-mail. */
  const WEB3FORMS_KEY = 'REPLACE_WITH_WEB3FORMS_KEY';

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
      partners_label:'Partners & sponsors', partners_h:'Built for brands that move culture.',
      partners_p:'Gio connects elite football with audiences across Brazil, Spain and the wider world, a combined community of more than 1.5M followers. Partnership opportunities include campaigns, ambassadorships, appearances and original content.',
      partners_note:'Selected collaborations and campaign work available on request.',
      contact_label:'Partnerships · Media · Appearances', contact_h:'Let’s make <span class="serif">an impact.</span>',
      contact_chips:['Sponsorship','Media & press','Interviews','Events','Ambassador','Content'],
      cta2_label:'Press · Media · Interviews', cta2_h:'Let’s <span class="serif">talk.</span>',
      cta2_chips:['Interviews','Media & press','Story requests','Credentials','Appearances'],
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
      foot_nav:'Navigate', foot_more:'More', foot_connect:'Connect', rights:'All rights reserved.',
      f_name:'Name', f_company:'Company', f_email:'Email', f_type:'Type of enquiry', f_msg:'Message', f_send:'Send message',
      f_ok:'Thank you. Your message has been sent, we respond within 48 hours.', f_err:'Something went wrong, please email us directly.',
      combined_k:'Combined reach'
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
      partners_label:'Patrocinadores e parceiros', partners_h:'Feita para marcas que movem a cultura.',
      partners_p:'A Gio conecta o futebol de elite a públicos no Brasil, na Espanha e no mundo, uma comunidade combinada de mais de 1,5 milhão de seguidores. As oportunidades de parceria incluem campanhas, embaixadora de marca, aparições e conteúdo original.',
      partners_note:'Colaborações selecionadas e trabalhos de campanha sob consulta.',
      contact_label:'Parcerias · Mídia · Aparições', contact_h:'Vamos causar <span class="serif">impacto.</span>',
      contact_chips:['Patrocínio','Mídia e imprensa','Entrevistas','Eventos','Embaixadora','Conteúdo'],
      cta2_label:'Imprensa · Mídia · Entrevistas', cta2_h:'Vamos <span class="serif">conversar.</span>',
      cta2_chips:['Entrevistas','Mídia e imprensa','Pautas','Credenciais','Aparições'],
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
      foot_nav:'Navegar', foot_more:'Mais', foot_connect:'Conecte-se', rights:'Todos os direitos reservados.',
      f_name:'Nome', f_company:'Empresa', f_email:'E-mail', f_type:'Tipo de contato', f_msg:'Mensagem', f_send:'Enviar mensagem',
      f_ok:'Obrigado. Sua mensagem foi enviada, respondemos em até 48 horas.', f_err:'Algo deu errado, escreva direto para o nosso e-mail.',
      combined_k:'Alcance total'
    }
  };

  // Idioma inicial: detecta o navegador (portugues -> pt), senao ingles.
  // Se a pessoa ja escolheu antes, respeita a escolha guardada.
  let LANG = ((navigator.language||navigator.userLanguage||'en').toLowerCase().indexOf('pt')===0) ? 'pt' : 'en';
  try{ const s=localStorage.getItem('gio_lang'); if(s==='pt'||s==='en') LANG=s; }catch(e){}

  /* Icones de redes sociais (SVG). Handles ficam em data.js (contact). */
  const SOCIAL_SVG = {
    instagram:'<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.15" fill="currentColor" stroke="none"/></svg>',
    tiktok:'<svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M16.5 3c.3 2 1.6 3.5 3.5 3.8v2.4c-1.3.1-2.5-.3-3.5-1v6.1c0 3-2.2 5.2-5.1 5.2-2.9 0-5.1-2.2-5.1-5 0-2.7 2-4.9 4.7-5v2.5c-.3 0-.6.1-.9.2-1 .3-1.5 1.2-1.4 2.3.1 1.1 1 1.9 2.1 1.8 1.1 0 1.9-.9 1.9-2V3h3.8z"/></svg>',
    x:'<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M17.5 3h3l-6.6 7.6L21.8 21h-5.9l-4.3-5.6L6.6 21H3.5l7-8.1L2.6 3h6l3.9 5.2L17.5 3zm-1 16h1.6L8 4.5H6.3L16.5 19z"/></svg>'
  };
  function socials(cls){
    const c=D.contact||{}; let out='';
    if(c.instagram) out+='<a href="https://instagram.com/'+c.instagram+'" target="_blank" rel="noopener" aria-label="Instagram">'+SOCIAL_SVG.instagram+'</a>';
    if(c.tiktok)    out+='<a href="https://www.tiktok.com/@'+c.tiktok+'" target="_blank" rel="noopener" aria-label="TikTok">'+SOCIAL_SVG.tiktok+'</a>';
    if(c.x)         out+='<a href="https://x.com/'+c.x+'" target="_blank" rel="noopener" aria-label="X">'+SOCIAL_SVG.x+'</a>';
    return '<div class="socials'+(cls?' '+cls:'')+'">'+out+'</div>';
  }

  const $=(s,c=document)=>c.querySelector(s);
  const $$=(s,c=document)=>Array.from(c.querySelectorAll(s));
  const T=o=>o==null?'':(typeof o==='string'?o:(o[LANG]||o.en||o.pt||''));
  /* Converte *palavra* em destaque dourado e quebra de linha simples. Uso nos textos editaveis. */
  const fmt=s=>String(s==null?'':s).replace(/\*([^*]+)\*/g,'<span class="serif">$1</span>').replace(/\n/g,'<br>');
  /* Pega texto do painel (obj {pt,en}) com destaque; se vazio, usa o padrao fixo. */
  const TX=(o,fb)=>{ const v=(o&&(o[LANG]||o.en||o.pt)); return (v&&String(v).trim())?fmt(v):fb; };
  const page=document.body.getAttribute('data-page')||'home';
  const U=()=>UI[LANG];

  function ph(label,dark,corner){
    return '<div class="ph'+(dark?' dark-ph':'')+'">'+(corner?'<span class="corner"></span><span class="corner br"></span>':'')+
      '<div class="ph-l"><span class="ic">📷</span><b>'+label+'</b><small>'+(LANG==='pt'?'Foto em breve':'Photo coming soon')+'</small></div></div>';
  }

  /* ---------- Header / footer / menu ---------- */
  function chrome(){
    const u=U();
    const hrefPage=h=>{ const b=h.replace('.html',''); return b==='index'?'home':b; };
    const isAct=h=>hrefPage(h)===page;
    const nav=u.nav.map(([h,l])=>'<a href="'+h+'"'+(isAct(h)?' class="active"':'')+'>'+l+'</a>').join('');
    $('#site-header').innerHTML =
      '<a href="index.html" class="wordmark">GIO<span>.</span></a>'+
      '<nav>'+nav+'</nav>'+
      '<div class="head-right">'+
        '<div class="lang"><button data-l="en">EN</button><button data-l="pt">PT</button></div>'+
        '<a href="contato.html" class="header-cta">'+u.cta+' <span>↗</span></a>'+
        '<button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>'+
      '</div>';
    $('#mobile-menu').innerHTML = u.nav.map(([h,l])=>'<a href="'+h+'"'+(isAct(h)?' class="active"':'')+'>'+l+'</a>').join('')+'<a href="contato.html" style="color:var(--gold)">'+u.cta+' ↗</a>';

    $('#site-footer').innerHTML =
      '<div class="wrap"><div class="foot-top">'+
      '<div class="foot-brand"><a href="index.html" class="wordmark">GIO<span>.</span></a><p>'+u.foot_about+'</p></div>'+
      '<div class="foot-col"><h4>'+u.foot_nav+'</h4><a href="index.html">'+u.nav[0][1]+'</a><a href="sobre.html">'+u.nav[1][1]+'</a><a href="carreira.html">'+u.nav[2][1]+'</a><a href="clubes.html">'+u.nav[3][1]+'</a></div>'+
      '<div class="foot-col"><h4>'+u.foot_more+'</h4><a href="gols.html">'+u.nav[4][1]+'</a><a href="fotos.html">'+u.nav[5][1]+'</a><a href="videos.html">'+u.nav[6][1]+'</a><a href="noticias.html">'+u.nav[7][1]+'</a></div>'+
      '<div class="foot-col"><h4>'+u.foot_connect+'</h4><a href="contato.html">'+u.nav[8][1]+'</a><a href="mailto:'+D.contact.email+'">'+D.contact.email+'</a>'+socials('foot-socials')+'</div>'+
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
    const f=D.followers||{};
    const ff=[['instagram','Instagram'],['tiktok','TikTok'],['x','X']].filter(([k])=>f[k]).map(([k,l])=>'<div class="ff"><b>'+f[k]+'</b><span>'+l+'</span></div>').join('');
    const foll=(ff||f.combined)?'<div class="followers reveal">'+ff+(f.combined?'<div class="ff gold"><b>'+f.combined+'</b><span>'+u.combined_k+'</span></div>':'')+'</div>':'';
    const logos=(D.partners||[]).map(p=>'<div class="partner"><div class="pn">'+p.name+'</div><div class="pr">'+T(p.role)+'</div></div>').join('');
    return '<section class="partners-band"><div class="wrap">'+
      '<div class="plabel reveal">'+u.partners_label+'</div>'+
      '<h3 class="reveal">'+u.partners_h+'</h3>'+
      '<p class="pmax reveal">'+u.partners_p+'</p>'+
      foll+
      '<div class="partners-row reveal">'+logos+'</div>'+
      '<div class="note reveal">'+u.partners_note+'</div>'+
      '<div class="reveal" style="margin-top:26px"><a class="text-link" href="contato.html">'+u.cta+' <span class="ar">↗</span></a></div>'+
      '</div></section>';
  }
  function contactCTA(variant){
    const u=U();
    const press = variant==='press';
    const label = press ? u.cta2_label : u.contact_label;
    const head  = press ? u.cta2_h : u.contact_h;
    const chips = press ? u.cta2_chips : u.contact_chips;
    const email = press ? D.contact.email : (D.contact.partnerships||D.contact.email);
    return '<section class="contact-cta"><div class="wrap"><p class="eyebrow" style="color:var(--gold)">'+label+'</p><div class="chips">'+chips.map(c=>'<span class="chip">'+c+'</span>').join('')+'</div><h2>'+head+'</h2><a class="mail" href="mailto:'+email+'">'+email+' <span>↗</span></a></div></section>';
  }
  function videoCards(list){
    return '<div class="videos-grid">'+list.map(v=>'<div class="video-card reveal" data-id="'+v.id+'" data-ext="'+(v.external?'1':'')+'"><div class="v-frame"><img src="https://i.ytimg.com/vi/'+v.id+'/hqdefault.jpg" alt="'+T(v.title)+'" loading="lazy" onerror="this.style.display=\'none\'"><div class="play"></div></div><div class="v-meta"><div class="tag">'+T(v.tag)+'</div><div class="ttl">'+T(v.title)+'</div></div></div>').join('')+'</div>';
  }
  /* Janela sobreposta (lightbox) que toca o video direto no site. */
  function ensureLightbox(){
    let ov=document.getElementById('vlightbox');
    if(ov) return ov;
    const st=document.createElement('style');
    st.textContent='#vlightbox{position:fixed;inset:0;z-index:9999;display:none;align-items:center;justify-content:center}#vlightbox.open{display:flex}#vlightbox .vlb-bg{position:absolute;inset:0;background:rgba(6,6,8,.92)}#vlightbox .vlb-box{position:relative;width:min(92vw,980px);z-index:1}#vlightbox .vlb-frame{position:relative;padding-top:56.25%;background:#000;border-radius:12px;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.5)}#vlightbox .vlb-frame iframe{position:absolute;inset:0;width:100%;height:100%;border:0}#vlightbox .vlb-close{position:absolute;top:-46px;right:0;background:none;border:none;color:#fff;font-size:2.3rem;line-height:1;cursor:pointer}#vlightbox .vlb-yt{position:absolute;top:-40px;left:0;color:rgba(255,255,255,.7);font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;text-decoration:none}#vlightbox .vlb-yt:hover{color:var(--gold)}';
    document.head.appendChild(st);
    ov=document.createElement('div'); ov.id='vlightbox';
    ov.innerHTML='<div class="vlb-bg"></div><div class="vlb-box"><a class="vlb-yt" target="_blank" rel="noopener">Abrir no YouTube ↗</a><button class="vlb-close" aria-label="Fechar">×</button><div class="vlb-frame"></div></div>';
    document.body.appendChild(ov);
    ov.querySelector('.vlb-bg').onclick=closeVideo;
    ov.querySelector('.vlb-close').onclick=closeVideo;
    document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeVideo(); });
    return ov;
  }
  function openVideo(id){
    if(!id) return;
    const ov=ensureLightbox();
    ov.querySelector('.vlb-yt').href='https://www.youtube.com/watch?v='+id;
    ov.querySelector('.vlb-frame').innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0&modestbranding=1" title="Vídeo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    ov.classList.add('open'); document.body.classList.add('no-scroll');
  }
  function closeVideo(){
    const ov=document.getElementById('vlightbox');
    if(ov){ ov.classList.remove('open'); ov.querySelector('.vlb-frame').innerHTML=''; }
    document.body.classList.remove('no-scroll');
  }
  function bindVideos(scope){
    // Padrao: toca o video direto no site (janela sobreposta).
    // Se o video estiver marcado como "de terceiros" (data-ext="1"), abre no YouTube.
    $$('.video-card',scope).forEach(card=>{ card.style.cursor='pointer'; card.onclick=()=>{
      const id=card.dataset.id; if(!id) return;
      if(card.dataset.ext==='1'){ window.open('https://www.youtube.com/watch?v='+id,'_blank','noopener'); }
      else{ openVideo(id); }
    };});
  }
  function pageHero(arr){
    return '<section class="phero"><div class="wrap"><p class="eyebrow">'+arr[0]+'</p><h1>'+arr[1]+'</h1><p class="sub">'+arr[2]+'</p></div></section>';
  }

  /* ---------- Page renderers ---------- */
  const R={};
  R.home=()=>{
    const u=U();
    const H=D.homeText||{};
    return (
      '<section class="hero"><div class="hero-ph" id="heroPh"'+(D.heroImage?' style="background-image:url(\''+D.heroImage+'\')"':'')+'></div>'+
        '<div class="wrap hero-inner"><p class="eyebrow reveal">'+TX(H.hero_eyebrow,u.hero_eyebrow)+'</p>'+
        '<h1 class="reveal">PLAY<span class="serif">BOLD.</span></h1>'+
        '<p class="intro reveal">'+TX(H.hero_intro,u.hero_intro)+'</p>'+
        '<div class="cta-row reveal"><a class="btn btn-gold" href="videos.html">'+u.watch+' ↗</a><a class="btn btn-ghost" href="contato.html">'+u.cta+'</a></div></div></section>'+

      '<section class="section"><div class="wrap"><div class="section-label reveal"><span>01</span>'+u.man_label+'</div>'+
        '<p class="reveal" style="text-transform:uppercase;letter-spacing:.14em;font-size:.85rem;font-weight:600;margin-bottom:30px;color:var(--muted)">'+u.man_kicker+'</p>'+
        '<h2 class="sec-h reveal">'+TX(H.story_h,u.man_h)+'</h2>'+
        '<div style="max-width:640px;margin-top:26px"><p class="reveal" style="font-size:1.1rem;line-height:1.8;color:#33312c">'+TX(H.story_p,u.man_p)+'</p>'+
        '<div class="reveal" style="margin-top:26px"><a class="text-link" href="sobre.html">'+u.man_link+' <span class="ar">↗</span></a></div></div></div></section>'+

      numbersBand()+

      '<section class="section dark"><div class="wrap"><div class="sec-top"><div><div class="section-label"><span>02</span>'+u.career_label+'</div><h2 class="sec-h reveal">'+u.career_h+'</h2></div><a class="text-link light reveal" href="carreira.html">'+u.career_link+' <span class="ar">↗</span></a></div>'+timeline((D.career.filter(c=>c.na_home).length?D.career.filter(c=>c.na_home):D.career.slice(0,4)))+'<div class="reveal" style="margin-top:34px"><a class="text-link light" href="carreira.html">'+u.career_link+' <span class="ar">↗</span></a></div></div></section>'+

      '<section class="section ink"><div class="wrap"><div class="section-label"><span>03</span>'+u.brazil_label+'</div>'+
        '<div class="brazil-split">'+
          '<div><h2 class="sec-h reveal">'+TX(H.brazil_h,u.brazil_h)+'</h2><p class="sec-intro reveal">'+TX(H.brazil_p,u.brazil_p)+'</p></div>'+
          (D.brazilImage?'<div class="brazil-photo reveal"><img src="'+D.brazilImage+'" alt="Gio Garbelini, Seleção Brasileira" loading="lazy" onerror="this.style.display=\'none\'"></div>':'')+
        '</div>'+
        '<div class="reveal" style="margin-top:44px">'+honoursGrid()+'</div></div></section>'+

      '<section class="section"><div class="wrap"><div class="sec-top"><div><div class="section-label"><span>04</span>'+u.news_label+'</div><h2 class="sec-h reveal">'+u.news_h+'</h2></div><a class="text-link reveal" href="noticias.html">'+u.news_link+' <span class="ar">↗</span></a></div><div class="grid-3">'+newsCards(D.news.slice(0,3))+'</div></div></section>'+

      partnersBand()+ contactCTA()
    );
  };

  R.sobre=()=>{
    const u=U();
    const A=D.aboutText||{};
    const portrait = D.aboutImage?'<div class="about-portrait reveal"><img src="'+D.aboutImage+'" alt="Gio Garbelini" loading="lazy" onerror="this.style.display=\'none\'"></div>':'';
    return pageHero(u.p_about)+
      '<section class="section"><div class="wrap"><div class="about-split"><div class="prose"><p class="lead reveal">'+TX(A.lead,u.about_lead)+'</p><p class="reveal">'+TX(A.p1,u.about_p1)+'</p><p class="reveal">'+TX(A.p2,u.about_p2)+'</p></div>'+portrait+'</div>'+
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

  /* Ajuste inteligente do recorte: detecta se a foto e vertical ou horizontal e posiciona sozinho. */
  function smartThumbs(){
    $$('.club-card .thumb img, .tile.fixed img').forEach(function(img){
      function ap(){ if(!img.naturalWidth) return; img.style.objectPosition=(img.naturalHeight>img.naturalWidth*1.05)?'50% 12%':'50% 42%'; }
      if(img.complete&&img.naturalWidth) ap(); else img.addEventListener('load',ap);
    });
  }

  function clubColor(name){
    const n=(name||'').toLowerCase();
    if(n.indexOf('atlétic')>=0||n.indexOf('atletic')>=0) return '#cb3524';
    if(n.indexOf('arsenal')>=0) return '#ef0107';
    if(n.indexOf('barcelona')>=0||n.indexOf('barça')>=0||n.indexOf('barca')>=0) return '#a50044';
    if(n.indexOf('madrid cff')>=0) return '#1f5fbf';
    if(n.indexOf('levante')>=0) return '#9b1d20';
    if(n.indexOf('everton')>=0) return '#003399';
    if(n.indexOf('tottenham')>=0) return '#132257';
    if(n.indexOf('rosenborg')>=0) return '#00612c';
    return 'var(--gold-deep)';
  }

  R.clubes=()=>{
    const u=U();
    const cards=D.career.map(c=>{
      const col=clubColor(c.club);
      const thumb=c.img?'<img src="'+c.img+'" alt="'+c.club+'" loading="lazy" onerror="this.style.display=\'none\'">':ph(c.club,false,true);
      return '<div class="club-card reveal" style="border-top:4px solid '+col+'"><div class="thumb">'+thumb+'</div><div class="body"><div class="yr" style="color:'+col+'">'+T(c.years)+'</div><h3>'+c.club+'</h3><div class="place">'+T(c.place)+'</div><p>'+T(c.note)+'</p></div></div>';
    }).join('');
    return pageHero(u.p_clubs)+
      '<section class="section"><div class="wrap"><div class="clubs-grid">'+cards+'</div></div></section>'+ contactCTA();
  };

  R.gols=()=>{
    const u=U();
    const chips=D.goalCats.map((c,i)=>'<button data-f="'+c.key+'"'+(i===0?' class="on"':'')+'>'+T(c)+'</button>').join('');
    const cards=D.goals.map(g=>{
      const thumb=g.yt?'<div class="v-frame"><img src="https://i.ytimg.com/vi/'+g.yt+'/hqdefault.jpg" alt="'+T(g.title)+'" loading="lazy" onerror="this.style.display=\'none\'"><div class="play"></div></div>':'<div class="v-frame">'+ph(LANG==='pt'?'Vídeo do gol':'Goal video',true,false)+'</div>';
      return '<div class="video-card reveal" data-cat="'+g.cat+'" data-id="'+(g.yt||'')+'" data-ext="'+(g.external?'1':'')+'">'+thumb+'<div class="v-meta"><div class="tag">'+T(g.date)+'</div><div class="ttl">'+T(g.title)+'</div></div></div>';
    }).join('');
    return pageHero(u.p_goals)+
      '<section class="section"><div class="wrap"><div class="filters" id="goalFilters">'+chips+'</div><div class="videos-grid" id="goalGrid">'+cards+'</div></div></section>'+ contactCTA('press');
  };

  R.fotos=()=>{
    const u=U();
    const chips=D.photoCats.map((c,i)=>'<button data-f="'+c.key+'"'+(i===0?' class="on"':'')+'>'+T(c)+'</button>').join('');
    const tiles=D.photos.map(p=>{
      if(p.img){
        return '<figure class="tile" data-cat="'+p.cat+'"><img src="'+p.img+'" alt="'+T(p.label)+'" loading="lazy"><span class="cap">'+T(p.label)+'</span></figure>';
      }
      return '<figure class="tile ph" data-cat="'+p.cat+'">'+ph(T(p.label),false,true)+'<span class="cap">'+T(p.label)+'</span></figure>';
    }).join('');
    return pageHero(u.p_photos)+
      '<section class="section"><div class="wrap"><div class="filters" id="photoFilters">'+chips+'</div><div class="gallery-grid" id="photoGrid">'+tiles+'</div>'+
      '<p style="color:var(--muted);font-size:.82rem;margin-top:26px">'+u.photos_soon+'</p></div></section>'+ contactCTA('press');
  };

  R.videos=()=>{
    const u=U();
    return pageHero(u.p_videos)+
      '<section class="section"><div class="wrap">'+videoCards(D.videos)+'</div></section>'+ contactCTA('press');
  };

  R.noticias=()=>{
    const u=U();
    return pageHero(u.p_news)+
      '<section class="section"><div class="wrap"><div class="grid-3">'+newsCards(D.news)+'</div></div></section>'+ contactCTA('press');
  };

  function contactForm(){
    const u=U();
    const opts=u.contact_chips.map(c=>'<option>'+c+'</option>').join('');
    return '<form class="cform" id="cform">'+
      '<input type="hidden" name="access_key" value="'+WEB3FORMS_KEY+'" />'+
      '<input type="hidden" name="subject" value="Novo contato pelo site (Gio Garbelini)" />'+
      '<input type="hidden" name="from_name" value="Site Gio Garbelini" />'+
      '<input type="checkbox" name="botcheck" class="hp" style="display:none" tabindex="-1" autocomplete="off" />'+
      '<label class="fl"><span>'+u.f_name+'</span><input name="name" required></label>'+
      '<label class="fl"><span>'+u.f_company+'</span><input name="company"></label>'+
      '<label class="fl"><span>'+u.f_email+'</span><input type="email" name="email" required></label>'+
      '<label class="fl"><span>'+u.f_type+'</span><select name="type">'+opts+'</select></label>'+
      '<label class="fl"><span>'+u.f_msg+'</span><textarea name="message" rows="4" required></textarea></label>'+
      '<button type="submit" class="btn btn-gold">'+u.f_send+'</button>'+
      '<div class="fmsg" id="fmsg" role="status"></div>'+
      '</form>';
  }

  R.contato=()=>{
    const u=U();
    const gen=D.contact.email, brands=D.contact.partnerships||D.contact.email;
    return pageHero(u.p_contact)+
      '<section class="section"><div class="wrap contact-wrap">'+
        '<div class="contact-left">'+
          '<div class="chips">'+u.contact_chips.map(c=>'<span class="chip">'+c+'</span>').join('')+'</div>'+
          '<a class="contact-mail" href="mailto:'+gen+'">'+gen+'</a>'+
          '<div class="contact-lines">'+
            '<div class="cl"><div class="k">'+u.general_k+'</div><a href="mailto:'+gen+'">'+gen+'</a></div>'+
            '<div class="cl"><div class="k">'+u.brands_k+'</div><a href="mailto:'+brands+'">'+brands+'</a></div>'+
            '<div class="cl"><div class="k">'+u.ig_k+'</div><a href="https://instagram.com/'+D.contact.instagram+'" target="_blank" rel="noopener">@'+D.contact.instagram+'</a></div>'+
            '<div class="cl"><div class="k">'+u.based_k+'</div><span class="v">'+T(D.contact.locations)+'</span></div>'+
          '</div>'+
          '<div style="margin-top:28px">'+socials('big-socials')+'</div>'+
        '</div>'+
        '<div class="contact-right">'+contactForm()+'</div>'+
      '</div></section>';
  };

  /* ---------- Filters ---------- */
  function bindFilters(){
    const gf=$('#goalFilters'); if(gf){ gf.onclick=e=>{ const b=e.target.closest('button'); if(!b)return; $$('button',gf).forEach(x=>x.classList.remove('on')); b.classList.add('on'); const f=b.dataset.f; $$('#goalGrid .video-card').forEach(c=>c.style.display=(f==='all'||c.dataset.cat===f)?'':'none'); }; }
    const pf=$('#photoFilters'); if(pf){ pf.onclick=e=>{ const b=e.target.closest('button'); if(!b)return; $$('button',pf).forEach(x=>x.classList.remove('on')); b.classList.add('on'); const f=b.dataset.f; $$('#photoGrid .tile').forEach(c=>c.style.display=(f==='all'||c.dataset.cat===f)?'':'none'); }; }
  }

  /* ---------- Reveal ---------- */
  let io;
  function reveals(){ if(io)io.disconnect(); io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }),{threshold:.1}); $$('.reveal').forEach(el=>io.observe(el)); }

  /* ---------- Formulario de contato (Web3Forms) ---------- */
  function bindForm(){
    const f=$('#cform'); if(!f) return;
    f.addEventListener('submit',function(e){
      e.preventDefault();
      const btn=f.querySelector('button[type=submit]'); if(btn) btn.disabled=true;
      const data=Object.fromEntries(new FormData(f).entries());
      // Enquanto a chave do Web3Forms nao estiver configurada, o envio abre o e-mail do visitante.
      if(!WEB3FORMS_KEY || WEB3FORMS_KEY.indexOf('REPLACE')===0){
        const to=(D.contact&&D.contact.email)||'press@giogarbelini.com';
        const subj=encodeURIComponent('Contato pelo site - '+(data.name||''));
        const lines=['Nome: '+(data.name||''),'Empresa: '+(data.company||''),'E-mail: '+(data.email||''),'Tipo: '+(data.type||''),'','Mensagem:',(data.message||'')];
        window.location.href='mailto:'+to+'?subject='+subj+'&body='+encodeURIComponent(lines.join('\n'));
        const m=$('#fmsg'); if(m){ m.textContent=U().f_ok; m.className='fmsg ok'; }
        if(btn) btn.disabled=false; return;
      }
      fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data)})
        .then(r=>r.json())
        .then(j=>{ const m=$('#fmsg'); if(j&&j.success){ if(m){ m.textContent=U().f_ok; m.className='fmsg ok'; } f.reset(); } else { if(m){ m.textContent=U().f_err; m.className='fmsg err'; } } })
        .catch(()=>{ const m=$('#fmsg'); if(m){ m.textContent=U().f_err; m.className='fmsg err'; } })
        .finally(()=>{ if(btn) btn.disabled=false; });
    });
  }

  /* ---------- Render everything ---------- */
  function renderAll(){
    document.documentElement.lang=LANG;
    chrome();
    const main=$('#main'); if(main && R[page]) main.innerHTML=R[page]();
    bindVideos(document); bindFilters(); bindForm(); reveals(); smartThumbs();
  }

  addEventListener('scroll',()=>{ $('#site-header').classList.toggle('solid',scrollY>50); },{passive:true});

  /* Conteudo editavel pelo painel (/admin). Busca os arquivos JSON e, se
     encontrar, usa eles no lugar dos valores de fallback do data.js.
     Se falhar (ex.: abrir o arquivo local sem servidor), mantem o fallback. */
  async function loadContent(){
    const map={
      news:'assets/content/news.json', goals:'assets/content/goals.json',
      videos:'assets/content/videos.json', photos:'assets/content/photos.json',
      career:'assets/content/career.json', honours:'assets/content/honours.json',
      facts:'assets/content/facts.json'
    };
    let changed=false;
    await Promise.all(Object.entries(map).map(async([k,url])=>{
      try{ const r=await fetch(url,{cache:'no-store'}); if(r.ok){ const j=await r.json(); if(j&&Array.isArray(j.items)){ D[k]=j.items; changed=true; } } }catch(e){}
    }));
    // Informacoes gerais: numeros, contato, redes, parceiros e imagens
    try{
      const r=await fetch('assets/content/info.json',{cache:'no-store'});
      if(r.ok){ const j=await r.json(); if(j){
        if(Array.isArray(j.numbers)&&j.numbers.length) D.numbers=j.numbers;
        if(j.contact) D.contact=Object.assign({},D.contact,j.contact);
        if(j.followers) D.followers=j.followers;
        if(Array.isArray(j.partners)&&j.partners.length) D.partners=j.partners;
        if(j.heroImage!=null) D.heroImage=j.heroImage;
        if(j.brazilImage!=null) D.brazilImage=j.brazilImage;
        if(j.aboutImage!=null) D.aboutImage=j.aboutImage;
        changed=true;
      } }
    }catch(e){}
    // Textos e fotos da pagina inicial
    try{
      const r=await fetch('assets/content/home.json',{cache:'no-store'});
      if(r.ok){ const j=await r.json(); if(j){
        if(j.heroImage!=null) D.heroImage=j.heroImage;
        if(j.brazilImage!=null) D.brazilImage=j.brazilImage;
        D.homeText=j; changed=true;
      } }
    }catch(e){}
    // Textos e foto da pagina Sobre
    try{
      const r=await fetch('assets/content/about.json',{cache:'no-store'});
      if(r.ok){ const j=await r.json(); if(j){
        if(j.aboutImage!=null) D.aboutImage=j.aboutImage;
        D.aboutText=j; changed=true;
      } }
    }catch(e){}
    return changed;
  }

  renderAll();
  loadContent().then(changed=>{ if(changed) renderAll(); });

  /* Cloudflare Web Analytics (metricas de visita, sem cookies) */
  try{
    var cfb=document.createElement('script');
    cfb.defer=true;
    cfb.src='https://static.cloudflareinsights.com/beacon.min.js';
    cfb.setAttribute('data-cf-beacon','{"token": "e9af6f60f9ba482f9ae10668f4b94e02"}');
    document.head.appendChild(cfb);
  }catch(e){}
})();
