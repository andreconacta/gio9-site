# Site da Gio Garbelini · guia de edição

Site oficial internacional (giogarbelini.com). Multipágina, estático, sem dependências. Você atualiza tudo editando um único arquivo.

## O que tem na pasta
- Páginas: `index.html` (início), `sobre.html`, `carreira.html`, `clubes.html`, `gols.html`, `fotos.html`, `videos.html`, `noticias.html`, `contato.html`.
- `assets/styles.css`: a aparência (cores, tipografia).
- `assets/data.js`: TODO o conteúdo. É o arquivo que você edita no dia a dia.
- `assets/app.js`: o motor que monta as páginas. Você não precisa mexer aqui.

## Como ver o site
Dê dois cliques em `index.html`. Abre no navegador, sem instalar nada. Os links do menu levam às outras páginas.

## Como publicar
- Netlify Drop: acesse app.netlify.com/drop e arraste a pasta inteira. Sai no ar na hora.
- Vercel, Cloudflare Pages ou GitHub Pages também servem (é um site estático).
- Depois, aponte o domínio giogarbelini.com para onde publicou.

## Atualização semanal (o que você mais vai fazer)
Abra `assets/data.js` num editor de texto. Cada item tem versão em inglês (`en`) e português (`pt`). Se preencher só um idioma, o site usa esse mesmo nos dois.

Para adicionar uma NOTÍCIA: no bloco `news`, copie um item `{ ... }`, cole no topo da lista (o mais novo primeiro) e troque data, tag, título, resumo e o link (`url`).

Para adicionar um GOL: no bloco `goals`, copie um item, troque data e título, informe a categoria (`cat`) e, se tiver, o `yt` (o ID do vídeo do YouTube, a parte depois de `watch?v=`).

Para adicionar um VÍDEO: no bloco `videos`, copie um item e troque o `id` do YouTube, a tag e o título.

## Fotos
Hoje o site usa placeholders (as fotos proprietárias foram removidas). Quando tiver as fotos definitivas com direitos liberados:
1. coloque os arquivos numa pasta, por exemplo `assets/fotos/`;
2. em `assets/data.js`, no bloco `photos` (e no `clubes` via carreira), preencha o campo `img` com o caminho, por exemplo `assets/fotos/selecao.jpg`.
Para a foto de destaque do início, dá para me pedir que eu configuro.

## Idioma
O site abre em inglês (padrão internacional) e tem o botão EN/PT no topo. Para mudar o padrão, em `assets/app.js` troque `let LANG='en'` por `'pt'`.

## Antes de publicar
- Substitua os placeholders pelas fotos finais com direitos liberados.
- Só a Nike aparece como patrocinadora oficial. Não inclua outras marcas como patrocinadoras atuais sem contrato.
- Os números (2× Copa América, 30+ jogos, camisa 18) são marcos verificados. Confira, e confirme o número dela na Seleção.
- E-mail central: contact@giogarbelini.com (aliases sugeridos: media@ e partnerships@).
