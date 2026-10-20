/* =========================================================
   NOVAMENTE RECORDS – main.js
   ---------------------------------------------------------
   Tudo o que é editável fica aqui no topo:
   CONFIG (contatos e redes), MEDIA (caminhos dos arquivos),
   ARTISTS (artistas) e RELEASES (músicas).
   Procure por "TROCAR" para achar o que ainda é provisório.
   ========================================================= */
'use strict';

/* ---------------------------------------------------------
   CONFIG – contatos, redes da gravadora e ajustes gerais
   --------------------------------------------------------- */
const CONFIG = {
  /* TROCAR: número provisório, só para testar o botão */
  whatsapp: 'https://wa.me/5511981444190?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20contratar%20um%20show.',

  /* Mensagem do "Contratar show" no modal de cada artista ({artista} vira o nome).
     Usa o mesmo número do whatsapp acima. */
  whatsappArtista: 'Olá! Vim pelo site e gostaria de contratar um show do {artista}.',

  /* TROCAR: e-mail provisório, só para testar o botão */
  email: 'novamenterecordsoficial@gmail.com',
  emailSubject: 'Contato pelo site',

  /* Redes da Novamente Records */
  social: {
    instagram: 'https://www.instagram.com/novamente.records/',
    youtube: 'https://www.youtube.com/@novamenterecordsoficial',
    tiktok: 'https://www.tiktok.com/@novamenterecords',
    // A gravadora ainda não tem Spotify. Quando tiver, adicione aqui (spotify: 'https://...')
    // e o ícone no Contato do index.html.
  },

  /* Spotify aberto pelo botão do hero ("Ouvir no Spotify") e pelo "Abrir no Spotify" do player */
  heroSpotify: 'https://open.spotify.com/intl-pt/artist/04QHNiih9ZesPvals6II1h',

  /* Player de destaque.
     TROCAR: para destacar uma faixa, use https://open.spotify.com/embed/track/ID_DA_FAIXA */
  spotifyEmbed: 'https://open.spotify.com/embed/artist/04QHNiih9ZesPvals6II1h?utm_source=generator&theme=0',

  /* Números do canal (seção Sobre). Só números reais: confira no YouTube e atualize a data.
     "Artistas no elenco" é contado sozinho a partir de ARTISTS. */
  numeros: {
    conferidoEm: '17/10/2026',
    inscritos: { valor: 5.21, casas: 2, sufixo: ' mil' },
    videos: { valor: 42 },
  },

  /* Preloader */
  preloaderMs: 2600,     // duração total (2 a 3 s)
  bpm: 130,              // batida da lâmpada/equalizador

  /* Vídeo do hero no celular. false = só o poster no mobile (economiza dados) */
  heroVideoOnMobile: true,

  /* Aba inicial dos lançamentos (chave de ARTISTS) */
  initialTab: 'marks',
};

/* ---------------------------------------------------------
   MEDIA – caminhos de todos os arquivos (pasta assets/)
   Os mesmos nomes são usados no HTML/CSS.
   --------------------------------------------------------- */
const MEDIA = {
  logoColor: 'assets/logo-color.webp',   // .png original fica de reserva
  logoWordmark: 'assets/logo-wordmark.webp',
  wallpaper: 'assets/wallpaper.png',
  clipeFundo: 'assets/clipe-fundo.mp4',
  posterHero: 'assets/poster-hero.jpg',
  fotoEquipe: 'assets/foto-equipe-principal.jpg',
  equipe1: 'assets/equipe-01.jpg',
  equipe2: 'assets/equipe-02.jpg',
  equipe3: 'assets/equipe-03.jpg',
  equipe4: 'assets/equipe-04.jpg',
  equipe5: 'assets/equipe-05.jpg',
  equipe6: 'assets/equipe-06.jpg',
  marks: 'assets/marks.jpg',
  brenninhovj: 'assets/brenninhovj.jpg',
  donizett: 'assets/donizett.jpg?v=3', // ?v=2: foto nova (troque o número quando trocar a foto)
  bubbajay: 'assets/bubbajay.jpg',
  djbl: 'assets/djbl.jpg',
  djdan: 'assets/djdan.jpg',
  djjadsonsp: 'assets/jadsonsp.jpg',
  du4rt: 'assets/du4rt.jpg',
  capas: 'assets/capas/', // + [id-da-música].jpg
};

/* ---------------------------------------------------------
   ARTISTS – todos com o mesmo destaque visual
   foto: caminho da foto | mask: true usa máscara escura em vez do multiply
   --------------------------------------------------------- */
const ARTISTS = [
  {
    chave: 'marks',
    nome: 'MC Marks',
    handle: '@mcmarks',
    foto: MEDIA.marks,
    bio: 'Referência do trap funk consciente e motivacional, com letras que misturam superação e a batida do funk paulista. Dono de hits que levaram o som da quebrada para as paradas.',
    redes: {
      instagram: 'https://www.instagram.com/mcmarks/',
      spotify: 'https://open.spotify.com/intl-pt/artist/04QHNiih9ZesPvals6II1h',
      youtube: 'https://www.youtube.com/@mcmarks',
      tiktok: 'https://www.tiktok.com/@mcmarksoficial',
    },
  },
  {
    chave: 'brenninhovj',
    nome: 'Brenninhovj',
    handle: '@brenninhovj',
    foto: MEDIA.brenninhovj,
    bio: 'Voz da nova geração do funk paulista, parceiro de hits do MC Marks. Energia, melodia e presença de palco que botam o baile para cantar junto.',
    redes: {
      instagram: 'https://www.instagram.com/brenninhovj/',
      spotify: 'https://open.spotify.com/intl-pt/artist/2XKAwrTieZHEnU6mgALhgN',
      youtube: 'https://www.youtube.com/@Brenninhovj',
      tiktok: 'https://www.tiktok.com/@mcbrenninhovj',
    },
  },
  {
    chave: 'donizett',
    nome: 'MC Donizett',
    handle: '@mcdonizett',
    foto: MEDIA.donizett,
    bio: 'Talento em ascensão na Novamente Records, com estilo próprio e muita vontade de fazer história. Um nome para ficar de olho no funk.',
    redes: {
      instagram: 'https://www.instagram.com/mcdonizett/',
      spotify: 'https://open.spotify.com/intl-pt/artist/7JxpfbQ8yr7PmUhCs9y7xj',
      youtube: 'https://www.youtube.com/@mcdonizett',
      tiktok: 'https://www.tiktok.com/@mcdonizett',
    },
  },
  {
    chave: 'bubbajay',
    nome: 'Bubbajay',
    handle: '@obubbajay',
    foto: MEDIA.bubbajay,
    bio: 'Rima afiada entre o trap e o funk, com faixas ao lado de Krawk e de nomes do elenco da Novamente, como o MC Donizett e o DU4RT.',
    redes: {
      instagram: 'https://www.instagram.com/obubbajay/',
      spotify: 'https://open.spotify.com/intl-pt/artist/7fctsXmbgy715CE6TEafJq',
      youtube: 'https://www.youtube.com/@Bubbajay4real',
      tiktok: 'https://www.tiktok.com/@obubbajay',
    },
  },
  {
    chave: 'djbl',
    nome: 'DJ BL',
    handle: '@djbloriginal',
    foto: MEDIA.djbl,
    bio: 'DJ e produtor com batidas feitas para o baile, em faixas ao lado do MC Marks, do MC Urubuzinho e de muitos outros nomes do funk.',
    redes: {
      instagram: 'https://www.instagram.com/djbloriginal/',
      spotify: 'https://open.spotify.com/intl-pt/artist/6czOKOz60lY0Ay02RYe6Ca',
      youtube: 'https://www.youtube.com/@djbloriginal',
      tiktok: 'https://www.tiktok.com/@djbloficial',
    },
  },
  {
    chave: 'djdan',
    nome: 'DJ Dan',
    handle: '@djdan_taligado',
    foto: MEDIA.djdan,
    bio: 'O DJ Dan Tá Ligado assina a batida de faixas do MC Marks como "Relatos de um Sonhador", "Pai de Moleque" e "Viciei de Novo".',
    redes: {
      instagram: 'https://www.instagram.com/djdan_taligado/',
      spotify: 'https://open.spotify.com/intl-pt/artist/3mzo8dpOOwDvtPm2s2SNM3',
      youtube: 'https://www.youtube.com/c/DjDanT%C3%A1ligado',
      tiktok: 'https://www.tiktok.com/@djdantaligado',
    },
  },
  {
    chave: 'djjadsonsp',
    nome: 'DJ Jadson SP',
    handle: '@djjadsonsp',
    foto: MEDIA.djjadsonsp,
    bio: 'DJ e produtor por trás de faixas como "Só Na Segunda", "Brota na Minha Base" e "Trem Bala". Batida pesada do começo ao fim.',
    redes: {
      instagram: 'https://www.instagram.com/djjadsonsp/',
      spotify: 'https://open.spotify.com/intl-pt/artist/4nfxwlCaQW7S8EH2uwC6ii',
      youtube: 'https://www.youtube.com/@Djjadsonsp',
      tiktok: 'https://www.tiktok.com/@djjadsonsp',
    },
  },
  {
    chave: 'du4rt',
    nome: 'DU4RT',
    handle: '@du4rtprod',
    foto: MEDIA.du4rt,
    bio: 'Produtor de faixas como "A Sorte Me Espera" e "Solzão Estrala", ao lado do MC Marks e do Brenninhovj.',
    redes: {
      instagram: 'https://www.instagram.com/du4rtprod/',
      spotify: 'https://open.spotify.com/intl-pt/artist/2mOPgDTwtsd1t2Q7WOrCRq',
      // YouTube e TikTok ainda não informados: sem o link, o botão não aparece
    },
  },
];

/* ---------------------------------------------------------
   RELEASES – cada música aparece UMA vez.
   "artistas" define em quais abas ela entra (chaves de ARTISTS).
   A capa padrão é MEDIA.capas + id + '.jpg'.
   --------------------------------------------------------- */
const capa = (id) => `${MEDIA.capas}${id}.jpg`;
const RELEASES = [
  // MC Marks
  { id: 'fiel-e-amante', titulo: 'Fiel e Amante', creditos: 'MC Marks feat. DJ Glenner', artistas: ['marks'], spotify: 'https://open.spotify.com/intl-pt/track/450jguJbIWsDPPtKDkeR3D', capa: capa('fiel-e-amante') },
  { id: 'body-splash', titulo: 'Body Splash', creditos: 'MC Marks feat. MC IG', artistas: ['marks'], spotify: 'https://open.spotify.com/intl-pt/track/2hy1tYr5XYFbssGcUEednD', capa: capa('body-splash') },
  { id: 'quatro-cantos', titulo: 'Quatro Cantos', creditos: 'MC Marks feat. 2B, MC RN do Capão, MC Ryan SP e MC Daniel', artistas: ['marks'], spotify: 'https://open.spotify.com/intl-pt/track/2DQ9fY7c5PwAc0hPUkFT3f', capa: capa('quatro-cantos') },
  { id: 'viciei-de-novo', titulo: 'Viciei de Novo', creditos: 'MC Marks, MC Donizett, BMC, MC Jvila, MC Leozin e MC Meno K', artistas: ['marks', 'donizett', 'djdan'], spotify: 'https://open.spotify.com/intl-pt/track/4MPKqKJQ3J8z9sC411tpGV', capa: capa('viciei-de-novo') },
  { id: 'tratamento-vip', titulo: 'Tratamento VIP', creditos: 'MC Marks', artistas: ['marks'], spotify: 'https://open.spotify.com/intl-pt/track/6C4QgaeZjRELgmdtJs2wzc', capa: capa('tratamento-vip') },
  { id: 'tal-da-saudade', titulo: 'Tal da Saudade', creditos: 'MC Marks, MC Donizett, MC Dkzinn e MC Fabrin', artistas: ['marks', 'donizett', 'djdan'], spotify: 'https://open.spotify.com/intl-pt/track/2u8ZGQtU34AQo6Bd5AyYIs', capa: capa('tal-da-saudade') },

  // Brenninhovj
  { id: 'vamo-querer', titulo: 'Vamo Querer', creditos: 'Brenninhovj feat. DJ Billy Mandela', artistas: ['brenninhovj'], spotify: 'https://open.spotify.com/intl-pt/track/70BRgn0uveHVluEcEz6l8B', capa: capa('vamo-querer') },
  { id: 'proibido-amar', titulo: 'Proibido Amar', creditos: 'Brenninhovj', artistas: ['brenninhovj'], spotify: 'https://open.spotify.com/intl-pt/track/0uRElKhvAhZpEL17LNrq0b', capa: capa('proibido-amar') },
  { id: 'finalzao-do-ano', titulo: 'Finalzão do Ano', creditos: 'Brenninho VJ, DJ Faveliano, Menor Richard e MC Kadu', artistas: ['brenninhovj'], spotify: 'https://open.spotify.com/intl-pt/track/4OwshhEUCvJFPVhDdc1Tqm', capa: capa('finalzao-do-ano') },
  { id: 'nada-pra-fazer', titulo: 'Nada Pra Fazer (Casa das Put*)', creditos: 'Brenninhovj feat. DJ Glenner, MC Jvila, MC Ryan SP, MC IG e outros', artistas: ['brenninhovj'], spotify: 'https://open.spotify.com/intl-pt/track/7DshyZBWSsQRzn4EdpJcyI', capa: capa('nada-pra-fazer') },
  { id: 'festa-do-fafa', titulo: 'Festa do Fafa', creditos: 'Brenninhovj feat. MC GP, MC Piedro, Kotim e outros', artistas: ['brenninhovj'], spotify: 'https://open.spotify.com/intl-pt/track/1uit6jamu5hF3SkLsZbwX6', capa: capa('festa-do-fafa') },
  { id: 'lanca-que-espirra', titulo: 'Lança Que Espirra', creditos: 'Brenninhovj feat. Kotim', artistas: ['brenninhovj'], spotify: 'https://open.spotify.com/intl-pt/track/6ScW7UkkCvgrxQqdd1J9yu', capa: capa('lanca-que-espirra') },

  // MC Donizett (+ "Tal da Saudade" e "Viciei de Novo", que já estão acima)
  { id: 'baile-na-ruinha', titulo: 'Baile na Ruinha', creditos: 'MC Donizett, Breno RB, MC Miguel VN e Bubbajay', artistas: ['donizett', 'bubbajay'], spotify: 'https://open.spotify.com/intl-pt/track/6iQq1NyGkxOQNJCjJ4dcWS', capa: capa('baile-na-ruinha') },
  { id: 'peaky-blinders', titulo: 'Peaky Blinders', creditos: 'MC Donizett feat. Brenninho VJ e DJ Hyago', artistas: ['donizett'], spotify: 'https://open.spotify.com/intl-pt/track/115btfmRVs7quKiYla5qhe', capa: capa('peaky-blinders') },
  { id: 'bumbum-pulando', titulo: 'Bumbum Pulando', creditos: 'MC Donizett, MC Dkzinn, MC Marks, Brenninho VJ e MC Joãozinho VT', artistas: ['donizett'], spotify: 'https://open.spotify.com/intl-pt/track/6R81DEAp0OTws2aQHc1Sq1', capa: capa('bumbum-pulando') },
  { id: 'sentada-destemida', titulo: 'Sentada Destemida', creditos: 'MC Donizett, Brenninho VJ e DJ Dan Tá Ligado', artistas: ['donizett'], spotify: 'https://open.spotify.com/intl-pt/track/1YEVFBnVXwEzfj6HPVzDhi', capa: capa('sentada-destemida') },

  // Bubbajay (+ "Baile na Ruinha", que já está acima)
  { id: 'papo-de-apaixonar', titulo: 'Papo de Apaixonar', creditos: 'DJ Dan Tá Ligado, Bubbajay, MC Higão, MC Kal, Dinho MC e MC Gael', artistas: ['bubbajay'], spotify: 'https://open.spotify.com/intl-pt/track/1kL8AWGyRRnqvKw9kFQlWH', capa: capa('papo-de-apaixonar') },
  { id: 'criminosa', titulo: 'Criminosa', creditos: 'Bubbajay, Krawk, Jorge Bask, Apollo e Greezy', artistas: ['bubbajay'], spotify: 'https://open.spotify.com/intl-pt/track/27tJZ6ZTUMEp2OS4lXVfnq', capa: capa('criminosa') },
  { id: 'fabrica-de-notas', titulo: 'Fábrica de Notas', creditos: 'Bubbajay e Krawk', artistas: ['bubbajay'], spotify: 'https://open.spotify.com/intl-pt/track/3T5N8FAmWpeNvnQc1R6RTk', capa: capa('fabrica-de-notas') },
  { id: 'a-fonte', titulo: 'A Fonte', creditos: 'Bubbajay, Thiago Kelbert e Krawk', artistas: ['bubbajay'], spotify: 'https://open.spotify.com/intl-pt/track/5AkDgMvZ4F5Scv8AHAADGX', capa: capa('a-fonte') },
  { id: 'chainz-on-fleek', titulo: 'Chainz on Fleek', creditos: 'Falatuzetrê, Bubbajay e Krawk', artistas: ['bubbajay'], spotify: 'https://open.spotify.com/intl-pt/track/1gg0UEXlJPPZfVNbjMWGtH', capa: capa('chainz-on-fleek') },

  // DJ BL
  { id: 'trajadao-de-lala', titulo: 'Trajadão de Lalá', creditos: 'MC Urubuzinho, DJ BL e DJ Leevy', artistas: ['djbl'], spotify: 'https://open.spotify.com/intl-pt/track/5AoFlSGogLdskl9pgeb8kz', capa: capa('trajadao-de-lala') },
  { id: 'jesus-olhou-pra-mim', titulo: 'Jesus Olhou pra Mim', creditos: 'MC Marks e DJ BL', artistas: ['djbl'], spotify: 'https://open.spotify.com/intl-pt/track/1DkzGlCD3WVrUm4yn8zg35', capa: capa('jesus-olhou-pra-mim') },
  { id: 'posso-te-empurrar', titulo: 'Posso Te Empurrar', creditos: 'MC Arraia e DJ BL', artistas: ['djbl'], spotify: 'https://open.spotify.com/intl-pt/track/00EnrwtX3WOZKf4cX9YJ00', capa: capa('posso-te-empurrar') },
  { id: 'embriagada', titulo: 'Embriagada', creditos: 'MC Donzela, DJ BL e DJ Kelvinho', artistas: ['djbl'], spotify: 'https://open.spotify.com/intl-pt/track/0S9NSofmT6gBQ0ccjBYkq7', capa: capa('embriagada') },
  { id: 'sem-ko-sem-mimi', titulo: 'Sem Ko Sem Mimi', creditos: 'MC Urubuzinho, DJ Leevy e DJ BL', artistas: ['djbl'], spotify: 'https://open.spotify.com/intl-pt/track/6dfcWZDAPvV92B0SI1QPDb', capa: capa('sem-ko-sem-mimi') },
  { id: 'nao-nasci-pra-casar', titulo: 'Não Nasci pra Casar, Nasci pra Dar Piru Pras Putas', creditos: 'DJ BL, MC Levin e MC GP', artistas: ['djbl'], spotify: 'https://open.spotify.com/intl-pt/track/5Mmd1PKNwOUcabfnQUvZYF', capa: capa('nao-nasci-pra-casar') },

  // DJ Dan (+ "Viciei de Novo" e "Tal da Saudade", que já estão acima)
  { id: 'relatos-de-um-sonhador', titulo: 'Relatos de um Sonhador', creditos: 'MC Marks e DJ Dan Tá Ligado', artistas: ['djdan'], spotify: 'https://open.spotify.com/intl-pt/track/03SNef4L5PMcToqSIa3LAH', capa: capa('relatos-de-um-sonhador') },
  { id: 'pai-de-moleque', titulo: 'Pai de Moleque', creditos: 'MC Marks e DJ Dan Tá Ligado', artistas: ['djdan'], spotify: 'https://open.spotify.com/intl-pt/track/6sGK0gtDBCsLXqoy4EpTCt', capa: capa('pai-de-moleque') },
  { id: 'funk-love', titulo: 'Funk Love', creditos: 'MC Jvila, MC Marks e DJ Dan Tá Ligado', artistas: ['djdan'], spotify: 'https://open.spotify.com/intl-pt/track/0FfeR86HoVdZkSrMrD46tf', capa: capa('funk-love') },
  { id: 'baile-inflama', titulo: 'Baile Inflama', creditos: 'DJ Dan Tá Ligado, MC Marks, MC Don Juan, MC Vinny, Brenninho VJ e MC Ryan SP', artistas: ['djdan'], spotify: 'https://open.spotify.com/intl-pt/track/4CJoBBo1tnuL9a7rZJgw8c', capa: capa('baile-inflama') },

  // DJ Jadson SP
  { id: 'so-na-segunda', titulo: 'Só Na Segunda', creditos: 'Teká Oficial, DuNotti e DJ Jadson SP', artistas: ['djjadsonsp'], spotify: 'https://open.spotify.com/intl-pt/track/0JGPEUAU2P76xLDft5kWiq', capa: capa('so-na-segunda') },
  { id: 'brota-na-minha-base', titulo: 'Brota na Minha Base', creditos: 'Teká Oficial e DJ Jadson SP', artistas: ['djjadsonsp'], spotify: 'https://open.spotify.com/intl-pt/track/1Lbhu6H0M1SCKFx0ACt78O', capa: capa('brota-na-minha-base') },
  { id: 'sem-fim', titulo: 'Sem Fim', creditos: 'Teká Oficial e DJ Jadson SP', artistas: ['djjadsonsp'], spotify: 'https://open.spotify.com/intl-pt/track/4HhsNlSm8nqtoILtd4bwXv', capa: capa('sem-fim') },
  { id: 'trem-bala', titulo: 'Trem Bala', creditos: 'Teká Oficial, matheuzGB, DJ Jadson SP e UNIK3', artistas: ['djjadsonsp'], spotify: 'https://open.spotify.com/intl-pt/track/4oeOzvPsnPsEdIzkgwCiVr', capa: capa('trem-bala') },
  { id: 'mar-calmo', titulo: 'Mar Calmo', creditos: 'MC Belão, MC Thiago do BDS, Fepa MC e DJ Jadson SP', artistas: ['djjadsonsp'], spotify: 'https://open.spotify.com/intl-pt/track/3jqbR02ZGt5zjzDLInaUdp', capa: capa('mar-calmo') },
  { id: 'insaciavel', titulo: 'Insaciável', creditos: 'Teká Oficial e DJ Jadson SP', artistas: ['djjadsonsp'], spotify: 'https://open.spotify.com/intl-pt/track/4dktGBnFhvQ0PIGX1LtLZb', capa: capa('insaciavel') },

  // DU4RT
  { id: 'a-sorte-me-espera', titulo: 'A Sorte Me Espera', creditos: 'MC Marks, TOKIODK e DU4RT', artistas: ['du4rt'], spotify: 'https://open.spotify.com/intl-pt/track/1ycslIEuuhbWnjRmX48MSP', capa: capa('a-sorte-me-espera') },
  { id: 'tempo-do-relogio', titulo: 'Tempo do Relógio (Ao Vivo)', creditos: 'MC Marks, Rael e DU4RT', artistas: ['du4rt'], spotify: 'https://open.spotify.com/intl-pt/track/3AJsB5UEgYstfMcu8xTANu', capa: capa('tempo-do-relogio') },
  { id: 'solzao-estrala', titulo: 'Solzão Estrala', creditos: 'DU4RT, Brenninho VJ, MC Marks, MC Jvila, Do N e iceton', artistas: ['du4rt'], spotify: 'https://open.spotify.com/intl-pt/track/7F0btWYweHIoL55M6PxgMI', capa: capa('solzao-estrala') },
  { id: 'enfeiticando', titulo: 'Enfeitiçando', creditos: 'Lua Ventura, Óclin e DU4RT', artistas: ['du4rt'], spotify: 'https://open.spotify.com/intl-pt/track/2KimYgZrG0ajkjiMhfkWHH', capa: capa('enfeiticando') },
  { id: 'ela-da-aulas', titulo: 'Ela Dá Aulas', creditos: 'DU4RT, Brenninho VJ, Menor MC, MC Fabrin, Gubeatz e MC Pedrin HG', artistas: ['du4rt'], spotify: 'https://open.spotify.com/intl-pt/track/6iWemfMzUnqSpRLYg4sfYL', capa: capa('ela-da-aulas') },
  { id: 'eu-amo-a-rua', titulo: 'Eu Amo a Rua', creditos: 'DU4RT, MC Italo SP, Dinho MC, MC Gael e MC Donizett', artistas: ['du4rt'], spotify: 'https://open.spotify.com/intl-pt/track/4ei7s7J3g2n2s99NKQyyUG', capa: capa('eu-amo-a-rua') },
];

/* Ordem das músicas dentro de cada aba (opcional).
   Se a aba não estiver aqui, usa a ordem do array RELEASES. */
const TAB_ORDER = {
  donizett: ['baile-na-ruinha', 'peaky-blinders', 'tal-da-saudade', 'viciei-de-novo', 'bumbum-pulando', 'sentada-destemida'],
  bubbajay: ['papo-de-apaixonar', 'criminosa', 'fabrica-de-notas', 'a-fonte', 'chainz-on-fleek', 'baile-na-ruinha'],
  djdan: ['relatos-de-um-sonhador', 'viciei-de-novo', 'pai-de-moleque', 'tal-da-saudade', 'funk-love', 'baile-inflama'],
};

/* =========================================================
   A partir daqui é o funcionamento do site.
   ========================================================= */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const root = document.documentElement;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasGSAP = () => typeof window.gsap !== 'undefined';
const EXTERNAL = { target: '_blank', rel: 'noopener noreferrer' };

/* Cria um elemento com atributos e filhos (atalho) */
function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (v === null || v === undefined || v === false) return;
    if (k === 'class') node.className = v;
    else if (k === 'text') node.textContent = v;
    else if (k === 'html') node.innerHTML = v;
    else node.setAttribute(k, v === true ? '' : v);
  });
  [].concat(children).forEach((c) => c && node.append(c));
  return node;
}

/* Ícone do sprite SVG */
function icon(name) {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('class', 'icon');
  svg.setAttribute('aria-hidden', 'true');
  const use = document.createElementNS(ns, 'use');
  use.setAttribute('href', `#i-${name}`);
  svg.append(use);
  return svg;
}

const initials = (name) => name.replace(/^MC\s+/i, '').split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();
const mailtoHref = () => `mailto:${CONFIG.email}?subject=${encodeURIComponent(CONFIG.emailSubject)}`;

// Mesmo número do CONFIG.whatsapp, com a mensagem já dizendo qual artista
function whatsappHref(artist) {
  const base = CONFIG.whatsapp.split('?')[0];
  return `${base}?text=${encodeURIComponent(CONFIG.whatsappArtista.replace('{artista}', artist.nome))}`;
}

/* ---------------------------------------------------------
   1. Aplica MEDIA e CONFIG nos elementos do HTML
   --------------------------------------------------------- */
function applyMediaAndLinks() {
  $$('[data-media]').forEach((img) => {
    const path = MEDIA[img.dataset.media];
    if (path && img.getAttribute('src') !== path) img.setAttribute('src', path);
  });
  const video = $('#hero-video');
  if (video) {
    if (MEDIA[video.dataset.mediaPoster]) video.setAttribute('poster', MEDIA[video.dataset.mediaPoster]);
    if (MEDIA[video.dataset.mediaSrc]) video.dataset.src = MEDIA[video.dataset.mediaSrc];
  }

  const links = {
    whatsapp: CONFIG.whatsapp, email: mailtoHref(), heroSpotify: CONFIG.heroSpotify, ...CONFIG.social,
    youtubeSub: CONFIG.social.youtube && `${CONFIG.social.youtube}?sub_confirmation=1`, // abre já pedindo a inscrição
  };
  $$('[data-link]').forEach((a) => {
    const href = links[a.dataset.link];
    if (href) a.href = href;
  });
  $$('[data-text="email"]').forEach((n) => { n.textContent = CONFIG.email; });

  const cta = $('#hero-cta');
  if (cta) cta.href = CONFIG.heroSpotify;

  // Garante nova aba + rel seguro em todo link externo
  $$('a[href^="http"]').forEach((a) => { a.target = EXTERNAL.target; a.rel = EXTERNAL.rel; });

  // Imagens estáticas que falharem: mostra fundo escuro em vez de ícone quebrado
  // (.webp que falhar tenta antes o .png original de mesmo nome)
  $$('img').forEach((img) => {
    const hide = () => {
      const src = img.getAttribute('src') || '';
      if (/\.webp$/.test(src)) { img.addEventListener('error', hide, { once: true }); img.src = src.replace(/\.webp$/, '.png'); return; }
      img.style.visibility = 'hidden';
    };
    if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) hide();
    else img.addEventListener('error', hide, { once: true });
  });
}

/* ---------------------------------------------------------
   2. Preloader (só na 1ª visita da sessão)
   Retorna uma Promise que resolve quando o site é revelado.
   --------------------------------------------------------- */
function runPreloader() {
  return new Promise((resolve) => {
    const pre = $('#preloader');
    if (!root.classList.contains('is-loading') || !pre) { pre && pre.remove(); resolve(); return; }

    const fill = $('#preloader-fill');
    const count = $('#preloader-count');
    const word = $('#preloader-word');
    const total = reducedMotion ? 900 : CONFIG.preloaderMs;
    const beatMs = 60000 / CONFIG.bpm;
    root.style.setProperty('--beat', `${60 / CONFIG.bpm}s`);
    const start = performance.now();

    // Equalizador de ponta a ponta: barras com cor e ritmo diferentes
    const eqBox = $('#preloader-eq');
    if (eqBox) {
      const bars = window.innerWidth < 768 ? 22 : 40;
      for (let i = 0; i < bars; i += 1) {
        const b = el('span');
        b.style.backgroundPosition = `${(i / (bars - 1)) * 100}% 0`;
        b.style.animationDelay = `${-(Math.random() * 0.45).toFixed(2)}s`;
        if (i % 3 === 1) b.style.animationDuration = 'calc(var(--beat) / 2)';
        eqBox.append(b);
      }
    }

    // Uma palavra por batida, chamando o baile
    const WORDS = ['Aumenta', 'O som', 'Que o baile', 'Vai começar'];
    let shownWord = -1;
    const showWord = (i) => {
      if (!word || i === shownWord) return;
      shownWord = i;
      word.textContent = WORDS[i];
      word.classList.toggle('is-last', i === WORDS.length - 1);
      word.classList.remove('is-hit');
      void word.offsetWidth; // reinicia a animação
      word.classList.add('is-hit');
    };
    showWord(0);

    // Contador de 000 a 100 sincronizado com a duração
    const tick = (now) => {
      const p = Math.min(1, Math.max(0, (now - start) / total));
      const eased = 1 - Math.pow(1 - p, 2);
      const val = Math.round(eased * 100);
      fill.style.width = `${val}%`;
      count.textContent = String(val).padStart(3, '0');
      showWord(Math.min(WORDS.length - 1, Math.floor((now - start) / (beatMs * 1.4)))); // espalha as 4 palavras na abertura
      if (p < 1) requestAnimationFrame(tick);
      else leave();
    };
    requestAnimationFrame(tick);

    let done = false;
    // Garantia geral: se a animação travar (aba em segundo plano, GSAP com erro, celular lento),
    // o site é liberado mesmo assim. Nunca fica preso em "100%".
    const guard = setTimeout(() => finish(), total + 2500);
    function finish() {
      if (done) return;
      done = true;
      clearTimeout(guard);
      root.classList.remove('is-loading', 'is-revealing');
      pre.remove();
      try { sessionStorage.setItem('nm_preloaded', '1'); } catch (e) { /* modo privado */ }
      resolve();
    }
    // Saída com GSAP: a lâmpada "estoura" num clarão que revela o site
    function flashExit() {
      const flash = $('#preloader-flash');
      const logo = $('.preloader__logo');
      const r = $('.preloader__glow').getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const cover = (Math.hypot(Math.max(cx, innerWidth - cx), Math.max(cy, innerHeight - cy)) / 40) * 1.15;
      gsap.set(flash, { x: cx, y: cy });
      gsap.timeline({ onComplete: finish })
        .to(['.preloader__word', '.preloader__count', '.preloader__tag', '.preloader__eq', '.preloader__bar', '.preloader__aura'], { opacity: 0, y: 24, duration: .25, ease: 'power2.in' })
        .to(logo, { scale: .88, duration: .2, ease: 'power2.in' }, '<')        // respira...
        .to(logo, { scale: 1.15, duration: .2, ease: 'power3.out' })           // ...e bate
        .to(flash, { scale: cover, duration: .5, ease: 'expo.in' }, '<')       // a lâmpada estoura
        .add(() => {
          pre.style.background = 'transparent';
          gsap.set(logo, { opacity: 0 });
          root.classList.add('is-revealing');
          resolve();                                                           // hero começa por baixo do clarão
        })
        .to(flash, { opacity: 0, duration: 1, ease: 'power2.out' });
    }

    function leave() {
      if (hasGSAP() && !reducedMotion) {
        try { flashExit(); return; } catch (e) { /* se o clarão falhar, usa a saída em CSS abaixo */ }
      }
      // Sem GSAP: saída com "batida" em CSS (soco + cortina subindo)
      pre.classList.add('is-leaving');
      // Libera o scroll e começa a animar o hero um pouco antes do fim
      setTimeout(() => { root.classList.add('is-revealing'); resolve(); }, reducedMotion ? 0 : 380);
      pre.addEventListener('animationend', (e) => { if (e.target === pre) finish(); });
      setTimeout(finish, 1200); // garantia
    }
  });
}

/* ---------------------------------------------------------
   3. Header: fundo ao rolar, menu mobile, link ativo
   --------------------------------------------------------- */
function initHeader() {
  const header = $('#site-header');
  const burger = $('#burger');
  const nav = $('#site-nav');
  const links = $$('.site-nav a');

  // Fundo escuro + altura menor ao rolar
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Menu hambúrguer
  const setMenu = (open) => {
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    nav.classList.toggle('is-open', open);
    root.classList.toggle('menu-open', open);
    if (open && hasGSAP() && !reducedMotion) {
      gsap.fromTo(links, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: .5, stagger: .06, delay: .15, ease: 'power3.out' });
    }
    if (open) links[0].focus({ preventScroll: true });
  };
  burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
  [...links, $('#header-hire')].filter(Boolean).forEach((a) => a.addEventListener('click', () => { if (nav.classList.contains('is-open')) setMenu(false); }));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { setMenu(false); burger.focus(); }
  });
  // Se a tela crescer para desktop com o menu aberto, fecha
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (m) => { if (m.matches) setMenu(false); });

  // O link da página atual já vem marcado no HTML (class="is-active" aria-current="page")
}

/* ---------------------------------------------------------
   4. Hero: vídeo, fade no loop, título animado e CTA
   --------------------------------------------------------- */
function initHeroVideo() {
  const video = $('#hero-video');
  const fade = $('#hero-fade');
  if (!video) return;

  // Se o poster não existir, remove (aparece o wallpaper do CSS)
  const poster = video.getAttribute('poster');
  if (poster) {
    const test = new Image();
    test.onerror = () => video.removeAttribute('poster');
    test.src = poster;
  }

  // Decide se carrega o vídeo (economia de dados / movimento reduzido / mobile)
  const conn = navigator.connection || {};
  const slow = conn.saveData || /(^|-)2g$/.test(conn.effectiveType || '');
  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  const useVideo = !reducedMotion && !slow && (CONFIG.heroVideoOnMobile || !isMobile);

  if (!useVideo) { video.removeAttribute('autoplay'); return; }

  video.addEventListener('error', () => video.classList.add('is-hidden'));
  video.src = video.dataset.src;
  video.muted = true;
  const p = video.play();
  if (p && p.catch) p.catch(() => { /* autoplay bloqueado: fica o poster */ });

  // Fade escuro de ~0,4 s no fim e no começo do loop
  const FADE = 0.4;
  let raf = null;
  const loop = () => {
    const d = video.duration;
    const t = video.currentTime;
    if (d && isFinite(d)) {
      let o = 0;
      if (t < FADE) o = 1 - t / FADE;
      else if (d - t < FADE) o = 1 - (d - t) / FADE;
      fade.style.opacity = o.toFixed(3);
    }
    raf = requestAnimationFrame(loop);
  };

  // Só roda o vídeo/animação quando o hero está na tela
  const io = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      video.play().catch(() => {});
      if (!raf) raf = requestAnimationFrame(loop);
    } else {
      video.pause();
      cancelAnimationFrame(raf); raf = null;
    }
  });
  io.observe($('#inicio'));
}

/* Quebra o título em palavras/letras para animar letra por letra */
function splitHeroTitle() {
  const title = $('#hero-title');
  if (!title) return [];
  const text = title.textContent.trim();
  title.setAttribute('aria-label', text);
  title.textContent = '';
  const words = text.split(' ');
  words.forEach((word, i) => {
    const w = el('span', { class: `word${i === words.length - 1 ? ' word--accent' : ''}`, 'aria-hidden': 'true' });
    [...word].forEach((ch) => w.append(el('span', { class: 'char', text: ch })));
    title.append(w);
    if (i < words.length - 1) title.append(document.createTextNode(' '));
  });
  return $$('.char', title);
}

function initHero(revealed) {
  if (!$('#inicio')) return;
  initHeroVideo();
  const chars = splitHeroTitle();

  // CTA: só abre o Spotify em nova aba (pelo próprio link). A página fica onde está.

  if (!hasGSAP() || reducedMotion) { root.classList.add('hero-ready'); return; }

  /* Estado inicial (tudo escondido até a entrada) */
  const media = $('.hero__media');
  const content = $('.hero__content');
  const logo = $('.hero__logo');
  const shocks = $$('.hero__shock');
  const words = $$('#hero-title .word');
  const accent = $('#hero-title .word--accent');
  gsap.set(logo, { scale: 2.4, opacity: 0, filter: 'blur(14px)' });
  gsap.set('.hero__tag', { opacity: 0, letterSpacing: '.6em' });
  gsap.set(words, { scale: 2.6, opacity: 0, filter: 'blur(12px)' });
  gsap.set('.hero__cta', { scale: 0, opacity: 0 });
  gsap.set('#site-header', { yPercent: -100 });
  gsap.set(media, { scale: 1.25, filter: 'brightness(2.2) saturate(1.4)' });
  root.classList.add('hero-ready');

  const half = 60 / CONFIG.bpm / 4; // um quarto de batida (palavras entram mais rápido)
  const shake = (target, f = 1) => gsap.to(target, {
    keyframes: { x: [0, -12 * f, 10 * f, -7 * f, 4 * f, 0], y: [0, 6 * f, -5 * f, 3 * f, -1 * f, 0] },
    duration: .4, ease: 'none',
  });

  revealed.then(() => {
    gsap.timeline({ defaults: { ease: 'expo.out' } })
      // fundo "acorda" do clarão
      .to(media, { scale: 1, filter: 'brightness(1) saturate(1)', duration: 2.4, ease: 'power3.out', clearProps: 'filter' }, 0)
      // logo cai pesada, tela treme e solta a onda de choque
      .to(logo, { scale: 1, opacity: 1, filter: 'blur(0px)', duration: .5, ease: 'power4.in', clearProps: 'filter' }, .15)
      .add(() => shake(content, 1))
      .fromTo(shocks, { scale: .4, opacity: 1 }, { scale: 2.8, opacity: 0, duration: 1.2, stagger: .14 }, '<')
      .to('.hero__tag', { opacity: 1, letterSpacing: '0em', duration: .8 }, '-=1')
      // título: uma palavra por meia batida (130 BPM)
      .to(words, { scale: 1, opacity: 1, filter: 'blur(0px)', duration: .22, ease: 'power4.in', stagger: half, clearProps: 'filter' }, '-=.8')
      .add(() => shake('#hero-title', .7))
      // "quebrada." acende como a lâmpada
      .fromTo(accent,
        { color: '#ffffff', textShadow: '0 0 30px rgba(249,184,74,1), 0 0 70px rgba(224,43,208,.85)' },
        { color: '#F9B84A', textShadow: '0 0 0 rgba(249,184,74,0), 0 0 0 rgba(224,43,208,0)', duration: 1.3, ease: 'power2.out', clearProps: 'color,textShadow' }, '<')
      .to('.hero__cta', { scale: 1, opacity: 1, duration: 1.1, ease: 'elastic.out(1, .45)', clearProps: 'transform' }, '-=1.1')
      .to('#site-header', { yPercent: 0, duration: .9, clearProps: 'transform' }, '-=1');
  });
}

/* ---------------------------------------------------------
   5. Sobre: galeria (Swiper) e parallax da foto
   --------------------------------------------------------- */
function initAbout() {
  if ($('#gallery') && typeof window.Swiper !== 'undefined') {
    // eslint-disable-next-line no-new
    new Swiper('#gallery', {
      slidesPerView: 1.15,
      spaceBetween: 14,
      grabCursor: true,
      speed: reducedMotion ? 0 : 600,
      keyboard: { enabled: true, onlyInViewport: true },
      a11y: { prevSlideMessage: 'Foto anterior', nextSlideMessage: 'Próxima foto', slideLabelMessage: 'Foto {{index}} de {{slidesLength}}' },
      navigation: { prevEl: '.gallery__prev', nextEl: '.gallery__next' },
      // Barra começa sem cor e o arco-íris aparece conforme avança
      on: {
        progress: (sw, progress) => {
          const fill = $('#gallery-fill');
          if (fill) fill.style.clipPath = `inset(0 ${(100 - Math.max(0, Math.min(1, progress)) * 100).toFixed(2)}% 0 0)`;
        },
      },
      breakpoints: {
        480: { slidesPerView: 2.1, spaceBetween: 16 },
        768: { slidesPerView: 2.6, spaceBetween: 20 },
        1024: { slidesPerView: 3.2, spaceBetween: 24 },
        1280: { slidesPerView: 3.6, spaceBetween: 24 },
      },
    });
  }

  if ($('.about__photo-frame img') && hasGSAP() && window.ScrollTrigger && !reducedMotion) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo('.about__photo-frame img', { yPercent: -7 }, {
      yPercent: 7, ease: 'none',
      scrollTrigger: { trigger: '.about__photo-frame', start: 'top bottom', end: 'bottom top', scrub: true },
    });
  }
}

/* ---------------------------------------------------------
   6. Artistas: cards, lista e página de cada MC (artista.html?mc=chave)
   --------------------------------------------------------- */

/* Foto com placeholder (iniciais) se não carregar */
function photoBlock(artist, cls, { lazy = true } = {}) {
  const wrap = el('div', { class: `${cls}${artist.mask ? ' use-mask' : ''}` });
  const ph = el('div', { class: 'ph', 'aria-hidden': 'true' }, [el('span', { text: initials(artist.nome) })]);
  wrap.append(ph);
  if (!artist.foto) { wrap.classList.add('is-missing'); return wrap; }
  const img = el('img', {
    alt: `Foto de ${artist.nome}`,
    loading: lazy ? 'lazy' : null,
    decoding: 'async',
    width: 800, height: 1000,
  });
  img.addEventListener('error', () => wrap.classList.add('is-missing'), { once: true });
  img.src = artist.foto;
  wrap.prepend(img);
  return wrap;
}

const artistUrl = (artist) => `artista.html?mc=${encodeURIComponent(artist.chave)}`;
const currentArtistKey = () => new URLSearchParams(location.search).get('mc');

function renderArtists() {
  const grid = $('#artists-grid');
  if (!grid) return;
  const skip = grid.hasAttribute('data-exclude-current') ? currentArtistKey() : null;
  const limit = parseInt(grid.dataset.limit, 10) || ARTISTS.length;
  ARTISTS.filter((a) => a.chave !== skip).slice(0, limit).forEach((artist) => {
    const card = el('a', {
      href: artistUrl(artist),
      class: 'artist-card',
      'data-artist': artist.chave,
      'aria-label': `${artist.nome}: ver a página do artista`,
    });
    const inner = el('div', { class: 'artist-card__inner' });
    inner.append(photoBlock(artist, 'artist-card__media'));
    inner.append(el('div', { class: 'artist-card__body' }, [
      el('div', {}, [
        el('h3', { class: 'artist-card__name', text: artist.nome }),
        el('span', { class: 'artist-card__handle', text: artist.handle }),
      ]),
      el('span', { class: 'artist-card__more', 'aria-hidden': 'true' }, [icon('arrow')]),
    ]));
    card.append(inner);
    grid.append(card);
  });
}

/* Redes do MC em círculos (o nome da rede fica no aria-label e no title) */
function artistSocial(artist) {
  const r = artist.redes || {};
  const wrap = el('div', { class: 'artist-hero__social', id: 'artist-social' });
  [['instagram', 'Instagram'], ['spotify', 'Spotify'], ['youtube', 'YouTube'], ['tiktok', 'TikTok']].forEach(([key, label]) => {
    if (!r[key]) return;
    wrap.append(el('a', { href: r[key], ...EXTERNAL, 'aria-label': `${label} de ${artist.nome}`, title: label }, [icon(key)]));
  });
  return wrap;
}

/* Página de um MC: tudo vem de ARTISTS e RELEASES */
function renderArtistPage() {
  if (!document.body.hasAttribute('data-artist-page')) return;
  const artist = ARTISTS.find((a) => a.chave === currentArtistKey());
  if (!artist) { location.replace('artistas.html'); return; }

  document.title = `${artist.nome} | Novamente Records`;
  const desc = $('meta[name="description"]');
  if (desc) desc.setAttribute('content', `${artist.nome} na Novamente Records: bio, músicas e contratação de show.`);

  // Foto no mesmo tratamento dos cards: P&B com multiply sobre o prata
  $('#artist-media').append(photoBlock(artist, 'artist-card__media artist-hero__photo', { lazy: false }));
  const name = $('#artist-name');
  name.textContent = artist.nome;
  name.setAttribute('data-split', '');
  $('#artist-handle').textContent = artist.handle;
  $('#artist-bio').textContent = artist.bio;
  $('#artist-social').replaceWith(artistSocial(artist));
  const hire = $('#artist-hire');
  hire.href = whatsappHref(artist);
  hire.setAttribute('aria-label', `Contratar show do ${artist.nome} pelo WhatsApp`);
  $('#artist-hire-label').textContent = `Contratar ${artist.nome}`;

  // Próximo artista (na ordem de ARTISTS; depois do último volta ao primeiro)
  const next = ARTISTS[(ARTISTS.indexOf(artist) + 1) % ARTISTS.length];
  const nextLink = $('#next-artist');
  if (nextLink && next && next !== artist) {
    nextLink.href = artistUrl(next);
    $('#next-artist-name').textContent = next.nome;
    nextLink.setAttribute('aria-label', `Próximo artista: ${next.nome}`);
  } else if (nextLink) nextLink.remove();

  // Músicas do MC: capas do player + grade; o player já fica no artista
  const songs = releasesFor(artist.chave);
  const covers = $('.player__covers');
  if (covers) {
    covers.innerHTML = '';
    songs.slice(0, 4).forEach((r) => covers.append(el('img', { src: r.capa, alt: '', width: 400, height: 400, loading: 'lazy', decoding: 'async' })));
  }
  const grid = $('#release-grid');
  songs.forEach((rel) => grid.append(releaseCard(rel)));
  setPlayerArtist(artist.chave);
}



/* ---------------------------------------------------------
   7. Lançamentos: abas + grade de capas
   --------------------------------------------------------- */
const oembedCache = new Map();

/* Tenta pegar a capa pelo oEmbed do Spotify */
async function fetchOembedThumb(trackUrl) {
  if (oembedCache.has(trackUrl)) return oembedCache.get(trackUrl);
  const job = fetch(`https://open.spotify.com/oembed?url=${encodeURIComponent(trackUrl)}`)
    .then((r) => (r.ok ? r.json() : null))
    .then((data) => (data && data.thumbnail_url) || null)
    .catch(() => null);
  oembedCache.set(trackUrl, job);
  return job;
}

function releaseCard(rel) {
  const coverWrap = el('div', { class: 'release__cover' });
  const img = el('img', {
    alt: `Capa de ${rel.titulo} – ${rel.creditos}`,
    loading: 'lazy', decoding: 'async', width: 400, height: 400,
  });
  // Capa local → oEmbed do Spotify → capa gerada em CSS
  let triedOembed = false;
  img.addEventListener('error', async () => {
    if (!triedOembed) {
      triedOembed = true;
      const thumb = await fetchOembedThumb(rel.spotify);
      if (thumb) { img.src = thumb; return; }
    }
    coverWrap.classList.add('is-missing');
  });
  if (rel.capa) img.src = rel.capa; else img.dispatchEvent(new Event('error'));

  coverWrap.append(
    img,
    el('div', { class: 'release__fallback', 'aria-hidden': 'true' }, [el('span', { text: rel.titulo })]),
    el('div', { class: 'release__overlay', 'aria-hidden': 'true' }, [
      el('span', { class: 'release__play' }, [icon('play')]),
      el('span', { text: 'Tocar aqui' }),
    ]),
  );

  // Toca a música no player único da seção (sem sair do site)
  const link = el('button', {
    class: 'release__link', type: 'button', 'data-track': rel.id,
    'aria-label': `Tocar ${rel.titulo} – ${rel.creditos} no player`,
  }, [
    coverWrap,
    el('div', { class: 'release__info' }, [
      el('h3', { class: 'release__title', text: rel.titulo }),
      el('p', { class: 'release__credits', text: rel.creditos }),
    ]),
  ]);
  link.addEventListener('click', () => playTrack(rel));
  const li = el('li', { class: 'release' }, [link]);
  if (player.current === rel.id) li.classList.add('is-playing');
  return li;
}

function releasesFor(key) {
  const list = RELEASES.filter((r) => r.artistas.includes(key));
  const order = TAB_ORDER[key];
  if (!order) return list;
  return list.sort((a, b) => {
    const ia = order.indexOf(a.id); const ib = order.indexOf(b.id);
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
  });
}

function initReleases() {
  const tablist = $('#release-tabs');
  const panel = $('#release-panel');
  const grid = $('#release-grid');
  if (!tablist || !grid) return;

  const tabs = ARTISTS.map((a) => {
    const tab = el('button', {
      class: 'tab', type: 'button', role: 'tab',
      id: `tab-${a.chave}`, 'aria-controls': 'release-panel',
      'aria-selected': 'false', tabindex: '-1', 'data-key': a.chave, text: a.nome,
    });
    tablist.append(tab);
    return tab;
  });

  let current = null;
  let busy = null;

  const render = (key) => {
    grid.innerHTML = '';
    releasesFor(key).forEach((rel) => grid.append(releaseCard(rel)));
    panel.setAttribute('aria-labelledby', `tab-${key}`);
  };

  const select = (key, { focus = false, animate = true } = {}) => {
    if (key === current) return;
    if (current && animate) tearTape(tabs.find((t) => t.dataset.key === current));
    current = key;
    setPlayerArtist(key);
    tabs.forEach((t) => {
      const on = t.dataset.key === key;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      if (on && focus) t.focus();
      // Mantém a aba ativa visível na faixa rolável (sem rolar a página)
      if (on) {
        const l = t.offsetLeft - tablist.offsetLeft;
        if (l < tablist.scrollLeft || l + t.offsetWidth > tablist.scrollLeft + tablist.clientWidth) {
          tablist.scrollLeft = l - 8;
        }
      }
    });

    if (!animate || !hasGSAP() || reducedMotion) { render(key); return; }
    // Transição: cards saem, nova grade entra em cascata
    if (busy) busy.kill();
    busy = gsap.timeline()
      .to(grid.children, { y: 16, opacity: 0, scale: .97, duration: .2, stagger: .02, ease: 'power2.in' })
      .add(() => render(key))
      .add(() => {
        gsap.fromTo(grid.children, { y: 30, opacity: 0, scale: .96 }, { y: 0, opacity: 1, scale: 1, duration: .55, stagger: .06, ease: 'power3.out', clearProps: 'transform' });
      });
  };

  tablist.addEventListener('click', (e) => {
    const t = e.target.closest('[role="tab"]');
    if (t) select(t.dataset.key);
  });

  // Teclado: setas, Home e End
  tablist.addEventListener('keydown', (e) => {
    const i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    let n = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = (i + 1) % tabs.length;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = (i - 1 + tabs.length) % tabs.length;
    if (e.key === 'Home') n = 0;
    if (e.key === 'End') n = tabs.length - 1;
    if (n === null) return;
    e.preventDefault();
    select(tabs[n].dataset.key, { focus: true });
  });

  // Pista de rolagem: esmaece a borda direita enquanto ainda houver aba escondida
  const updateScrollCue = () => {
    const more = tablist.scrollWidth - tablist.clientWidth;
    tablist.classList.toggle('is-scrollable', more > 1);
    tablist.classList.toggle('is-end', tablist.scrollLeft >= more - 1);
  };
  tablist.addEventListener('scroll', updateScrollCue, { passive: true });
  window.addEventListener('resize', updateScrollCue);
  document.fonts && document.fonts.ready.then(updateScrollCue);

  const first = ARTISTS.some((a) => a.chave === CONFIG.initialTab) ? CONFIG.initialTab : ARTISTS[0].chave;
  select(first, { animate: false });
  updateScrollCue();
}

/* Player do Spotify (um só para a seção): só carrega quando a pessoa clica em
   "Tocar aqui" no player ou numa capa da grade */
const player = { current: null, artist: null };

// Endereço do player para o artista (pelo link do Spotify em ARTISTS); sem link, usa o padrão
function artistEmbed(key) {
  const a = ARTISTS.find((x) => x.chave === key);
  const id = a && a.redes && ((a.redes.spotify || '').match(/artist\/([A-Za-z0-9]+)/) || [])[1];
  return id ? `https://open.spotify.com/embed/artist/${id}?utm_source=generator&theme=0` : CONFIG.spotifyEmbed;
}

// Aba de artista: o player passa a ser o desse artista (e o "Abrir no Spotify" também)
function setPlayerArtist(key) {
  player.artist = key;
  const a = ARTISTS.find((x) => x.chave === key);
  const open = $('#player-open');
  if (open) open.href = (a && a.redes && a.redes.spotify) || CONFIG.heroSpotify;
  if ($('#player iframe')) {
    player.current = null;
    $$('.release.is-playing').forEach((li) => li.classList.remove('is-playing'));
    loadPlayer(artistEmbed(key), `Player do Spotify – ${a ? a.nome : 'Novamente Records'}`);
  }
}

function loadPlayer(src, title) {
  const box = $('#player');
  if (!box) return;
  let iframe = $('iframe', box);
  if (!iframe) {
    iframe = el('iframe', {
      width: '100%', height: '352',
      allow: 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture',
    });
    iframe.addEventListener('load', () => box.classList.remove('is-loading-player'));
    $('#player-facade').replaceWith(iframe);
  }
  iframe.title = title;
  box.classList.add('is-loading-player');
  iframe.src = src;
}

// Capa da grade: carrega a música no player e mostra o player
function playTrack(rel) {
  const id = (rel.spotify.match(/track\/([A-Za-z0-9]+)/) || [])[1];
  if (!id) { window.open(rel.spotify, EXTERNAL.target, 'noopener'); return; }
  player.current = rel.id;
  $$('.release').forEach((li) => {
    li.classList.toggle('is-playing', $('.release__link', li).dataset.track === rel.id);
  });
  loadPlayer(`https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0`, `Player do Spotify – ${rel.titulo}`);
  $('#player').scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'center' });
}

function initPlayer() {
  const btn = $('#player-load');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const a = ARTISTS.find((x) => x.chave === player.artist);
    loadPlayer(artistEmbed(player.artist), `Player do Spotify – ${a ? a.nome : 'Novamente Records'}`);
    $('#player iframe').focus();
  });
}

/* ---------------------------------------------------------
   8. Contato: copiar e-mail
   --------------------------------------------------------- */
/* Números do canal: valores do CONFIG e contagem até o número quando a faixa aparece */
function initStats() {
  const n = CONFIG.numeros || {};
  const stats = {
    inscritos: n.inscritos,
    videos: n.videos,
    mcs: { valor: ARTISTS.length },
  };
  const fmt = (v, casas = 0) => v.toLocaleString('pt-BR', { minimumFractionDigits: casas, maximumFractionDigits: casas });
  const paint = (node, s, v) => {
    node.textContent = fmt(v, s.casas);
    if (s.sufixo) node.append(el('small', { text: s.sufixo }));
  };
  const items = $$('[data-stat]').map((node) => ({ node, s: stats[node.dataset.stat] })).filter((x) => x.s && typeof x.s.valor === 'number');
  items.forEach(({ node, s }) => paint(node, s, s.valor));
  const note = $('#stats-note');
  if (note && n.conferidoEm) note.textContent = `Números do YouTube em ${n.conferidoEm}.`;

  if (!items.length || !hasGSAP() || reducedMotion || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger); // pode rodar antes do initReveals; registrar duas vezes não tem problema
  // Placar de estádio: cada dígito gira numa coluna (0–9 duas vezes) e para no número certo,
  // um de cada vez, da esquerda pra direita. No fim volta a ser texto normal.
  items.forEach(({ node, s }) => {
    const text = fmt(s.valor, s.casas);
    node.setAttribute('aria-label', `${text}${s.sufixo || ''}`);
    node.textContent = '';
    const strips = [];
    [...text].forEach((ch) => {
      if (!/\d/.test(ch)) { node.append(el('span', { class: 'odo__sep', 'aria-hidden': 'true', text: ch })); return; }
      const strip = el('span', { class: 'odo__strip' });
      for (let i = 0; i < 20; i += 1) strip.append(el('span', { text: String(i % 10) }));
      node.append(el('span', { class: 'odo__col', 'aria-hidden': 'true' }, [strip]));
      strips.push({ strip, d: Number(ch) });
    });
    if (s.sufixo) node.append(el('small', { text: s.sufixo, 'aria-hidden': 'true' }));
    gsap.timeline({
      scrollTrigger: { trigger: '.stats', start: 'top 85%', once: true },
      onComplete: () => { paint(node, s, s.valor); node.removeAttribute('aria-label'); },
    }).to(strips.map((x) => x.strip), {
      yPercent: (i) => -((10 + strips[i].d) / 20) * 100,
      duration: (i) => 1.1 + i * .35, ease: 'power3.out',
    }, 0);
  });
}

function initContact() {
  const btn = $('#copy-email');
  if (!btn) return;
  const label = $('.copy-btn__label', btn);
  btn.addEventListener('click', async () => {
    let ok = false;
    try { await navigator.clipboard.writeText(CONFIG.email); ok = true; }
    catch (e) {
      // Plano B: seleciona o texto para o usuário copiar
      const range = document.createRange();
      range.selectNodeContents($('#contact-email-text'));
      const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(range);
      try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
    }
    label.textContent = ok ? 'Copiado!' : 'Selecionado';
    btn.classList.toggle('is-copied', ok);
    setTimeout(() => { label.textContent = 'Copiar'; btn.classList.remove('is-copied'); }, 2000);
  });
}

/* ---------------------------------------------------------
   9. Animações de entrada ao rolar (GSAP + ScrollTrigger)
   --------------------------------------------------------- */
/* Quebra um título em palavras dentro de "máscaras" para elas subirem (data-split).
   O texto inteiro continua no aria-label para leitores de tela. */
function splitWords(node) {
  if (node.dataset.splitDone || node.children.length) return [];
  const text = node.textContent.trim();
  node.dataset.splitDone = '1';
  node.setAttribute('aria-label', text);
  node.textContent = '';
  return text.split(/\s+/).map((word, i, all) => {
    const inner = el('span', { class: 'split__word', text: word });
    node.append(el('span', { class: 'split__mask', 'aria-hidden': 'true' }, [inner]));
    if (i < all.length - 1) node.append(document.createTextNode(' '));
    return inner;
  });
}

/* Bem-vindo (Início, logo depois do hero): o final do antigo paredão. A seção fica presa enquanto a
   rolagem abre o fundo nas cores da logo, cresce o círculo preto com anel e acende o neon. */
function initWelcome() {
  const sec = $('#bem-vindo');
  if (!sec) return;
  sec.classList.add('is-on');
  const color = $('.welcome__color', sec);
  const hole = $('.welcome__hole', sec);
  const text = $('.welcome__text', sec);
  const burst = { p: 0 };
  const setBurst = () => color.style.setProperty('--r', `${(burst.p * Math.hypot(innerWidth, innerHeight) / 2 * 1.02).toFixed(1)}px`);
  const holeScale = () => (Math.hypot(innerWidth, innerHeight) / hole.offsetWidth) * 1.15;
  gsap.set(hole, { scale: 0 });
  gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: sec, start: 'top top', end: () => `+=${innerHeight * 1.2}`,
      pin: true, scrub: 0.5, anticipatePin: 1, invalidateOnRefresh: true, onRefresh: setBurst,
    },
  })
    // fundo colorido abre do centro
    .to(burst, { p: 1, duration: 1, ease: 'power2.out', onUpdate: setBurst })
    // círculo preto com anel arco-íris cresce e abre o resto do site
    .to(hole, { scale: holeScale, duration: 2, ease: 'power2.in' }, '-=.2')
    // letreiro de neon: acende quando o círculo já cabe o texto, falha duas vezes e fica aceso
    .to(text, { keyframes: { opacity: [0, 1, .1, .9, 0, .2, 1] }, duration: 0.7, ease: 'none' }, '<1.2')
    .to(text, { opacity: 0, duration: 0.5 }, '>0.4');
}

/* Título "carimbado": cada letra cai grande e torta, bate no lugar, e no fim a página dá um
   tranco com um rastro rosa/azul que some rápido. Uma batida só. */
function stampTitle(t) {
  const text = t.textContent.trim();
  t.setAttribute('aria-label', text);
  t.textContent = '';
  const chars = [];
  text.split(/\s+/).forEach((word, wi) => {
    if (wi) t.append(' ');
    const w = el('span', { class: 'stamp__word', 'aria-hidden': 'true' });
    [...word].forEach((ch) => { const c = el('span', { class: 'stamp__char', text: ch }); w.append(c); chars.push(c); });
    t.append(w);
  });
  const head = t.closest('.page-head');
  gsap.timeline({ delay: .15, scrollTrigger: { trigger: t, start: 'top 90%', once: true } })
    .from(chars, {
      scale: 2.8, opacity: 0, rotate: () => gsap.utils.random(-25, 25), yPercent: -30,
      duration: .3, stagger: .055, ease: 'power4.in',
    })
    .fromTo(t, { textShadow: '7px 0 0 rgba(224,43,208,.9), -7px 0 0 rgba(47,111,228,.9)' }, { textShadow: '0px 0 0 rgba(224,43,208,0), 0px 0 0 rgba(47,111,228,0)', duration: .5, ease: 'power2.out', clearProps: 'textShadow' })
    .to(head, { keyframes: { x: [0, -10, 8, -5, 3, 0], y: [0, 6, -4, 2, 0] }, duration: .4, ease: 'none', clearProps: 'transform' }, '<');
}

function initReveals() {
  if (!hasGSAP() || !window.ScrollTrigger || reducedMotion) return;
  gsap.registerPlugin(ScrollTrigger);
  initWelcome(); // primeiro: a seção presa muda a posição de tudo que vem depois
  const once = (trigger, start = 'top 85%') => ({ trigger, start, once: true });

  // Títulos: linha arco-íris "risca" da esquerda pra direita
  $$('.section-title').forEach((t) => {
    gsap.from(t, { '--line': 0, duration: .9, ease: 'power3.out', delay: .25, scrollTrigger: once(t) });
  });

  // Título grande das páginas internas: letras estampadas como carimbo + tranco na página
  $$('.page-head .page-title').forEach(stampTitle);

  // Títulos com data-split: cada palavra sobe de dentro da máscara, em cascata
  $$('[data-split]').forEach((t) => {
    if (t.matches('.page-head .page-title')) return; // esses são estampados (acima)
    const words = splitWords(t);
    if (!words.length) return;
    gsap.from(words, { yPercent: 110, rotate: 4, duration: .9, stagger: .07, ease: 'expo.out', scrollTrigger: once(t, 'top 90%') });
  });

  // Fotos com data-clip: abrem como uma cortina de baixo pra cima, com um leve zoom de volta
  $$('[data-clip]').forEach((box) => {
    const img = $('img', box);
    gsap.fromTo(box, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: 'expo.inOut', clearProps: 'clipPath', scrollTrigger: once(box, 'top 88%') });
    if (img) gsap.from(img, { scale: 1.25, duration: 1.6, ease: 'expo.out', scrollTrigger: once(box, 'top 88%') });
  });

  // Fotos da galeria entram uma depois da outra
  if ($('.gallery__item')) {
    gsap.from('.gallery__item', { y: 50, opacity: 0, duration: .8, stagger: .08, ease: 'power3.out', clearProps: 'transform,opacity', scrollTrigger: once('#gallery', 'top 88%') });
  }

  $$('[data-reveal]').forEach((node) => {
    // Cards e linhas de artista têm entrada própria (abaixo)
    if (node.classList.contains('artist-card') || node.classList.contains('contact__card')) return;
    gsap.from(node, { y: 40, opacity: 0, duration: .9, ease: 'power3.out', scrollTrigger: once(node, 'top 88%') });
  });

  if ($('.artist-card')) {
    gsap.from('.artist-card', {
      y: 60, opacity: 0, rotate: (i) => (i % 2 ? 2 : -2), duration: .9, stagger: .12, ease: 'power3.out',
      clearProps: 'transform,opacity', scrollTrigger: once('#artists-grid'),
    });
  }

  if ($('.release')) {
    gsap.from('.release', {
      y: 30, opacity: 0, duration: .6, stagger: .06, ease: 'power3.out', clearProps: 'transform,opacity',
      scrollTrigger: once('#release-grid', 'top 88%'),
    });
  }

  echoName();
  pasteCards();
  initGiantOla();

  // Ícones sociais "quicam" no ritmo
  if ($('.social--big li')) {
    gsap.from('.social--big li', {
      y: 30, opacity: 0, scale: .6, duration: .6, stagger: .08, ease: 'back.out(2)',
      scrollTrigger: once('.social--big', 'top 92%'),
    });
  }

  // ===== A partir daqui, tudo acompanha a rolagem (scrub): vai e volta junto com o dedo/mouse =====
  const scrub = (trigger, start = 'top bottom', end = 'bottom top') => ({ trigger, start, end, scrub: true });

  // Início: ao descer, o conteúdo do hero encolhe e some, e o vídeo dá zoom
  if ($('#inicio')) {
    gsap.to('.hero__content', { scale: .82, opacity: 0, yPercent: -12, ease: 'none', scrollTrigger: scrub('#inicio', 'top top', 'bottom top') });
    gsap.to('#hero-video', { scale: 1.18, ease: 'none', scrollTrigger: scrub('#inicio', 'top top', 'bottom top') });
  }

  // Títulos grandes das páginas internas andam mais devagar que a rolagem
  $$('.page-head .page-title').forEach((t) => {
    gsap.to(t, { yPercent: 22, ease: 'none', scrollTrigger: scrub(t, 'top top', 'bottom top') });
  });
  // Manchas de tinta giram e crescem um pouco
  $$('.splash').forEach((b) => {
    gsap.fromTo(b, { rotate: -8, scale: .92 }, { rotate: 10, scale: 1.08, ease: 'none', scrollTrigger: scrub(b.parentElement, 'top top', 'bottom top') });
  });

  // (Os cards de artista não se mexem mais com a rolagem: o desnível parecia erro, a pedido do usuário.)

  // Página do MC: a foto dá um zoom leve e o nome sobe mais devagar
  // (no wrapper da foto, para não brigar com o zoom de entrada do data-clip, que fica na própria img)
  if ($('.artist-hero__photo')) {
    gsap.to('.artist-hero__photo', { scale: 1.12, ease: 'none', scrollTrigger: scrub('.artist-hero', 'top top', 'bottom top') });
  }

  // Rodapé: o "NOVAMENTE" gigante vai sendo preenchido até o fim da página
  $$('.site-footer__giant').forEach((g) => {
    // começa quando o rodapé aparece e termina no fim da página
    gsap.fromTo(g, { '--fill': '0%' }, { '--fill': '100%', ease: 'none', scrollTrigger: { trigger: g.closest('.site-footer') || g, start: 'top bottom', endTrigger: g, end: 'bottom bottom', scrub: true } });
  });
}

/* Botões magnéticos: puxam levemente na direção do mouse (só com mouse) */
function initMagnetic() {
  if (reducedMotion || !window.matchMedia('(pointer: fine)').matches) return;
  const pull = 0.28;
  document.addEventListener('pointermove', (e) => {
    const btn = e.target.closest('[data-magnetic], .btn--primary');
    $$('.is-magnet').forEach((b) => { if (b !== btn) { b.classList.remove('is-magnet'); b.style.translate = ''; } });
    if (!btn) return;
    const r = btn.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * pull;
    const y = (e.clientY - (r.top + r.height / 2)) * pull;
    btn.classList.add('is-magnet');
    btn.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`; // "translate" não briga com o transform do hover
  }, { passive: true });
}

/* ---------------------------------------------------------
   10. Cursor personalizado (desktop com mouse)
   --------------------------------------------------------- */
function initCursor() {
  if (reducedMotion || !window.matchMedia('(pointer: fine)').matches) return;
  const cursor = $('#cursor');
  if (!cursor) return;
  root.classList.add('has-cursor');
  let x = -100; let y = -100; let cx = x; let cy = y;
  window.addEventListener('mousemove', (e) => { x = e.clientX; y = e.clientY; cursor.classList.add('is-visible'); }, { passive: true });
  document.addEventListener('mouseleave', () => cursor.classList.remove('is-visible'));
  document.addEventListener('mouseover', (e) => {
    cursor.classList.toggle('is-hover', !!e.target.closest('a, button, [role="tab"]'));
  });
  const move = () => {
    cx += (x - cx) * 0.22; cy += (y - cy) * 0.22;
    cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
    requestAnimationFrame(move);
  };
  move();
}

/* ---------------------------------------------------------
   11. Spray de grafite: rastro de tinta nas cores da logo que segue o mouse (ou o dedo)
   só no hero do Início. Some sozinho em ~1,5 s.
   Mouse rápido = traço fino e comprido; devagar = tinta grossa que escorre.
   --------------------------------------------------------- */
const SPRAY_COLORS = ['#E02BD0', '#7B3FE4', '#2F6FE4', '#3DDC5A', '#F9B84A', '#FF7A2F', '#E5384F'];

function sprayColor(dist) {
  // a cor vai mudando conforme a distância percorrida (uma cor da logo a cada ~140 px)
  const t = (dist / 140) % SPRAY_COLORS.length;
  const i = Math.floor(t); const f = t - i;
  const a = SPRAY_COLORS[i]; const b = SPRAY_COLORS[(i + 1) % SPRAY_COLORS.length];
  const ch = (c, k) => parseInt(c.substr(1 + k * 2, 2), 16);
  return [0, 1, 2].map((k) => Math.round(ch(a, k) + (ch(b, k) - ch(a, k)) * f));
}

function initSpray() {
  if (reducedMotion) return;
  $$('.hero').forEach((zone) => {
    const canvas = el('canvas', { class: 'spray', 'aria-hidden': 'true' });
    // fica atrás do texto: depois do fundo (vídeo/mancha) e antes do conteúdo
    const before = $('.hero__content', zone);
    zone.insertBefore(canvas, before);
    const ctx = canvas.getContext('2d');
    let w = 0; let h = 0; let dpr = 1;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = zone.clientWidth; h = zone.clientHeight;
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    new ResizeObserver(resize).observe(zone);

    let last = null; let dist = 0; let drips = []; let lastPaint = 0; let running = false;

    const dab = (x, y, r, rgb) => {
      const [cr, cg, cb] = rgb;
      // miolo macio
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${cr},${cg},${cb},.55)`);
      g.addColorStop(.6, `rgba(${cr},${cg},${cb},.22)`);
      g.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      // respingos em volta
      const n = Math.round(r * .9);
      ctx.fillStyle = `rgba(${cr},${cg},${cb},.8)`;
      for (let i = 0; i < n; i++) {
        const ang = Math.random() * Math.PI * 2;
        const d = r * (.4 + Math.random() * 1.2);
        const s = Math.random() * 1.6 + .3;
        ctx.fillRect(x + Math.cos(ang) * d, y + Math.sin(ang) * d, s, s);
      }
    };

    const paint = (x, y, t) => {
      unfade();
      if (!last) { last = { x, y, t }; return; }
      const dx = x - last.x; const dy = y - last.y;
      const len = Math.hypot(dx, dy);
      if (len < 1) return;
      const speed = len / Math.max(t - last.t, 8); // px por ms
      const r = Math.max(3, 24 - Math.min(speed, 2.4) * 8.5);
      const step = Math.max(2, r * .35);
      for (let s = step; s <= len; s += step) {
        const px = last.x + (dx * s) / len; const py = last.y + (dy * s) / len;
        const rgb = sprayColor(dist + s);
        dab(px, py, r, rgb);
        // tinta grossa escorre de vez em quando
        if (speed < .35 && Math.random() < .05 && drips.length < 40) {
          drips.push({ x: px + (Math.random() - .5) * r, y: py + r * .3, w: 1.5 + Math.random() * 2.5, v: .6 + Math.random() * .9, life: 50 + Math.random() * 50, rgb });
        }
      }
      dist += len;
      last = { x, y, t };
      lastPaint = performance.now();
      if (!running) { running = true; requestAnimationFrame(tick); }
    };

    // se voltar a pintar no meio do esmaecimento, "assa" a transparência atual na tinta antiga
    // (assim os rabiscos velhos não voltam a ficar fortes de repente)
    const unfade = () => {
      const op = parseFloat(canvas.style.opacity || '1');
      if (op >= 1) return;
      ctx.globalCompositeOperation = 'destination-in';
      ctx.fillStyle = `rgba(0,0,0,${op})`;
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'source-over';
      canvas.style.opacity = '1';
    };

    const tick = (now) => {
      // apaga um pouco a cada quadro: o rastro some em cerca de 1 s
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0,0,0,.07)';
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'source-over';
      drips = drips.filter((d) => {
        d.y += d.v; d.v *= .985; d.life -= 1;
        ctx.fillStyle = `rgba(${d.rgb[0]},${d.rgb[1]},${d.rgb[2]},.75)`;
        ctx.beginPath(); ctx.arc(d.x, d.y, d.w, 0, Math.PI * 2); ctx.fill();
        return d.life > 0;
      });
      // parou de mexer: a camada toda esmaece devagar (sem sumir de uma vez nem deixar "fantasma")
      const idle = now - lastPaint;
      if (idle > 450) canvas.style.opacity = String(Math.max(0, 1 - (idle - 450) / 1100).toFixed(3));
      if (idle > 1550) {
        drips = [];
        ctx.clearRect(0, 0, w, h);
        canvas.style.opacity = '1';
        running = false; return;
      }
      requestAnimationFrame(tick);
    };

    const point = (cx, cy) => {
      const r = canvas.getBoundingClientRect();
      paint(cx - r.left, cy - r.top, performance.now());
    };
    zone.addEventListener('pointermove', (e) => { if (e.pointerType !== 'touch') point(e.clientX, e.clientY); }, { passive: true });
    zone.addEventListener('pointerleave', () => { last = null; });
    // celular: segue o dedo enquanto ele arrasta (sem travar a rolagem)
    zone.addEventListener('touchstart', () => { last = null; }, { passive: true });
    zone.addEventListener('touchmove', (e) => { const t = e.touches[0]; if (t) point(t.clientX, t.clientY); }, { passive: true });
  });
}

/* ---------------------------------------------------------
   12. Cards de artista como figurinha holográfica: inclinam em 3D na direção do mouse
   com brilho arco-íris; no celular, inclinam com o próprio aparelho (sensor de movimento).
   Os 3 cards têm exatamente o mesmo efeito.
   --------------------------------------------------------- */
function setTilt(card, nx, ny) {
  // nx/ny de -1 a 1 (posição relativa ao centro do card)
  card.style.setProperty('--rx', `${(-ny * 9).toFixed(2)}deg`);
  card.style.setProperty('--ry', `${(nx * 11).toFixed(2)}deg`);
  card.style.setProperty('--mx', `${((nx + 1) * 50).toFixed(1)}%`);
  card.style.setProperty('--my', `${((ny + 1) * 50).toFixed(1)}%`);
}

function initHolo() {
  const grids = $$('.artists__grid');
  if (reducedMotion || !grids.length) return;
  $$('.artist-card').forEach((card) => {
    $('.artist-card__inner', card).append(el('span', { class: 'artist-card__holo', 'aria-hidden': 'true' }));
  });

  if (window.matchMedia('(pointer: fine)').matches) {
    grids.forEach((grid) => {
      grid.addEventListener('pointermove', (e) => {
        const card = e.target.closest('.artist-card');
        if (!card || e.pointerType === 'touch') return;
        const r = card.getBoundingClientRect();
        const nx = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width) * 2 - 1));
        const ny = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height) * 2 - 1));
        card.classList.remove('is-settling');
        card.classList.add('is-tilt');
        setTilt(card, nx, ny);
      }, { passive: true });
      grid.addEventListener('pointerout', (e) => {
        const card = e.target.closest('.artist-card');
        if (!card || card.contains(e.relatedTarget)) return;
        // volta ao lugar com um balanço
        card.classList.remove('is-tilt');
        card.classList.add('is-settling');
        setTilt(card, 0, 0);
      });
    });
    return;
  }

  // Celular/tablet: sensor de movimento (sem sensor, os cards ficam parados)
  if (!('DeviceOrientationEvent' in window)) return;
  let base = null; let tx = 0; let ty = 0; let cx = 0; let cy = 0; let raf = 0;
  const cards = $$('.artist-card');
  const loop = () => {
    cx += (tx - cx) * .12; cy += (ty - cy) * .12;
    cards.forEach((c) => setTilt(c, cx, cy));
    raf = Math.abs(tx - cx) + Math.abs(ty - cy) > .002 ? requestAnimationFrame(loop) : 0;
  };
  window.addEventListener('deviceorientation', (e) => {
    if (e.beta == null || e.gamma == null) return;
    if (!base) { base = { b: e.beta, g: e.gamma }; cards.forEach((c) => c.classList.add('is-gyro')); }
    // a posição "neutra" acompanha devagar o jeito que a pessoa segura o celular
    base.b += (e.beta - base.b) * .02; base.g += (e.gamma - base.g) * .02;
    tx = Math.max(-1, Math.min(1, (e.gamma - base.g) / 18));
    ty = Math.max(-1, Math.min(1, (e.beta - base.b) / 18));
    if (!raf) raf = requestAnimationFrame(loop);
  }, { passive: true });
}

/* ---------------------------------------------------------
   13. Rabisco de marcador: no hover dos links do menu (computador) e dos "Ver todos",
   um sublinhado feito à mão se desenha da esquerda pra direita
   --------------------------------------------------------- */
function initScribble() {
  const svgNS = 'http://www.w3.org/2000/svg';
  $$('.site-nav a:not(.is-active), .section-head__link').forEach((link) => {
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('class', 'scribble');
    svg.setAttribute('viewBox', '0 0 100 14');
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.setAttribute('aria-hidden', 'true');
    ['M2 9 C 22 4, 46 12, 70 7 S 94 5, 98 7', 'M8 12 C 34 9, 62 11, 92 10'].forEach((d) => {
      const p = document.createElementNS(svgNS, 'path');
      p.setAttribute('d', d);
      p.setAttribute('pathLength', '1');
      svg.append(p);
    });
    link.append(svg);
  });
}

/* ---------------------------------------------------------
   14. Mais efeitos
   --------------------------------------------------------- */

/* Hero: passar o mouse no "Ouvir no Spotify" dá um soco de grave (fundo aproxima e volta + onda do botão) */
function initHeroPunch() {
  const cta = $('#hero-cta');
  if (!cta || reducedMotion || !hasGSAP() || !window.matchMedia('(pointer: fine)').matches) return;
  cta.addEventListener('mouseenter', () => {
    const ring = el('span', { class: 'cta-shock', 'aria-hidden': 'true' });
    cta.append(ring);
    gsap.fromTo(ring, { scale: 1, opacity: .9 }, { scale: 2.2, opacity: 0, duration: .7, ease: 'power2.out', onComplete: () => ring.remove() });
    gsap.fromTo('.hero__media', { scale: 1.07 }, { scale: 1, duration: .55, ease: 'power3.out', overwrite: true });
  });
}

/* Fundo: manchas de meio-tom nas cores da logo (Quem somos, Artistas, Lançamentos).
   Cada ponto cai exatamente sobre um pontinho da retícula do fundo (grade de 12 px, centros em 6 + 12k);
   o tamanho do ponto segue a força da mancha, então ela some aos poucos, com borda irregular.
   As manchas respiram e andam devagar, só enquanto a seção está na tela. */
const HALFTONE = [
  { sel: '.home-intro', blobs: [{ x: .93, y: .34, r: .22, c: ['#E02BD0', '#7B3FE4'] }, { x: .78, y: .84, r: .1, c: ['#7B3FE4', '#2F6FE4'] }] },
  { sel: '.artists', blobs: [{ x: .1, y: .74, r: .26, c: ['#2F6FE4', '#3DDC5A'] }, { x: .9, y: .2, r: .12, c: ['#3DDC5A', '#2F6FE4'] }] },
  { sel: '.releases', blobs: [{ x: .88, y: .22, r: .26, c: ['#F9B84A', '#FF7A2F'] }, { x: .08, y: .6, r: .13, c: ['#FF7A2F', '#E5384F'] }] },
];
const hexRgb = (h) => [1, 3, 5].map((k) => parseInt(h.substr(k, 2), 16));

function initHalftone() {
  HALFTONE.forEach(({ sel, blobs }) => {
    $$(sel).forEach((sec) => {
      const canvas = el('canvas', { class: 'halftone', 'aria-hidden': 'true' });
      sec.prepend(canvas);
      const ctx = canvas.getContext('2d');
      const cols = blobs.map((b) => b.c.map(hexRgb));
      let w = 0; let h = 0; let dpr = 1; let visible = false; let raf = 0; let lastT = 0;
      const resize = () => {
        dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        w = sec.clientWidth; h = sec.clientHeight;
        canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        draw(lastT);
      };
      function draw(t) {
        if (!w || !h) return;
        ctx.clearRect(0, 0, w, h);
        const r0 = sec.getBoundingClientRect();
        // alinha com a retícula do fundo
        const ox = (((6 - (r0.left + scrollX)) % 12) + 12) % 12;
        const oy = (((6 - (r0.top + scrollY)) % 12) + 12) % 12;
        const scale = Math.max(Math.min(w * 1.05, 1300), 560); // pela largura: no celular a seção é alta e a mancha ficaria enorme
        const live = blobs.map((b, k) => ({
          x: (b.x + Math.sin(t * .00023 + k * 2.1) * .035) * w,
          y: (b.y + Math.cos(t * .00019 + k * 1.3) * .05) * h,
          r: b.r * scale * (1 + Math.sin(t * .0004 + k) * .1),
        }));
        for (let y = oy; y < h; y += 12) {
          for (let x = ox; x < w; x += 12) {
            let best = 0; let bk = 0; let bd = 0;
            for (let k = 0; k < live.length; k += 1) {
              const L = live[k];
              const d = Math.hypot(x - L.x, y - L.y) / L.r;
              const v = Math.exp(-d * d * 2.2);
              if (v > best) { best = v; bk = k; bd = d; }
            }
            // borda irregular: ondulação lenta que "come" pedaços da mancha
            const n = Math.sin(x * .021 + t * .0003) * Math.cos(y * .017 - t * .00025) + Math.sin((x + y) * .009 + t * .0002) * .6;
            const v = best * (.78 + n * .28);
            if (v < .07) continue;
            const [a, b] = cols[bk];
            const f = Math.min(1, bd);
            ctx.fillStyle = `rgba(${Math.round(a[0] + (b[0] - a[0]) * f)},${Math.round(a[1] + (b[1] - a[1]) * f)},${Math.round(a[2] + (b[2] - a[2]) * f)},${Math.min(.95, v * 1.4).toFixed(2)})`;
            ctx.beginPath(); ctx.arc(x, y, .7 + Math.min(1, v) * 3.4, 0, Math.PI * 2); ctx.fill();
          }
        }
      }
      const loop = (t) => {
        if (!visible) { raf = 0; return; }
        if (t - lastT > 40) { lastT = t; draw(t); } // ~25 quadros por segundo bastam para algo tão lento
        raf = requestAnimationFrame(loop);
      };
      new ResizeObserver(resize).observe(sec);
      if (reducedMotion || !('IntersectionObserver' in window)) return;
      new IntersectionObserver(([e]) => {
        visible = e.isIntersecting;
        if (visible && !raf) raf = requestAnimationFrame(loop);
      }).observe(sec);
    });
  });
}

/* Fundo: luz que segue o mouse, acendendo os pontinhos da retícula nas cores da logo (só com mouse) */
function initBgSpot() {
  if (reducedMotion || !window.matchMedia('(pointer: fine)').matches) return;
  const spot = el('div', { class: 'bg-spot', 'aria-hidden': 'true' });
  document.body.prepend(spot);
  let cx = 0; let cy = 0; let ticking = false;
  const update = () => {
    spot.style.setProperty('--mx', `${cx}px`);
    spot.style.setProperty('--my', `${cy}px`);
    spot.style.setProperty('--oy', `${-(scrollY % 12)}px`); // mantém os pontos grudados na retícula ao rolar
    ticking = false;
  };
  const ask = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  window.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    cx = e.clientX; cy = e.clientY;
    spot.classList.add('is-on');
    ask();
  }, { passive: true });
  window.addEventListener('scroll', ask, { passive: true });
  document.documentElement.addEventListener('mouseleave', () => spot.classList.remove('is-on'));
}

/* Abas de lançamentos: a fita da aba que perde a seleção é "arrancada" */
function tearTape(tab) {
  if (reducedMotion) return;
  const tape = el('span', { class: 'tape tape--off', 'aria-hidden': 'true' });
  tab.append(tape);
  tape.addEventListener('animationend', () => tape.remove(), { once: true });
}

/* Display de som automotivo: letreiro de LED verde rolando o nome da página, acima do título */
function initLcd() {
  $$('.page-head .page-title, #lancamentos-title, #contato-title').forEach((title) => {
    const name = (title.getAttribute('aria-label') || title.textContent).trim().toUpperCase();
    const line = `► ${name} ► NOVAMENTE RECORDS `;
    const lcd = el('div', { class: 'lcd', 'aria-hidden': 'true' }, [
      el('span', { class: 'lcd__track' }, [el('span', { text: line }), el('span', { text: line })]),
    ]);
    title.before(lcd);
  });
}

/* Rodapé: ao chegar ao fim da página, as letras do "NOVAMENTE" dão um pulinho em sequência (ola).
   Cada letra colorida recebe o seu pedaço do degradê (--w = largura da palavra, --ox = posição da letra),
   senão a cor some quando a letra se mexe. */
function initGiantOla() {
  const giant = $('.site-footer__giant');
  if (!giant) return;
  const layers = $$('.site-footer__giant > span', giant);
  const split = (layer) => {
    const text = layer.textContent;
    layer.textContent = '';
    return [...text].map((ch) => { const s = el('span', { class: 'giant__l', text: ch }); layer.append(s); return s; });
  };
  const rows = layers.map(split);
  const fill = $('.site-footer__giant-fill', giant);
  if (fill) {
    fill.classList.add('is-split');
    const measure = () => {
      fill.style.setProperty('--w', `${fill.offsetWidth}px`);
      $$('.giant__l', fill).forEach((l) => l.style.setProperty('--ox', `${l.offsetLeft}px`));
    };
    measure();
    new ResizeObserver(measure).observe(giant);
    if (document.fonts) document.fonts.ready.then(measure);
  }
  // as duas camadas pulam juntas, letra por letra
  const pairs = rows[0].map((l, i) => rows.map((r) => r[i]));
  const tl = gsap.timeline({ paused: true });
  pairs.forEach((pair, i) => {
    tl.to(pair, { keyframes: { yPercent: [0, -22, 0], rotate: [0, i % 2 ? 4 : -4, 0] }, duration: .5, ease: 'power1.inOut' }, i * .07);
  });
  ScrollTrigger.create({ trigger: giant, start: 'bottom bottom', once: true, onEnter: () => tl.play() });
}

/* Página do MC: o nome gigante solta duas cópias em contorno que se espalham e somem, como eco de grave */
function echoName() {
  const name = $('.artist-hero__name');
  if (!name) return;
  const text = name.getAttribute('aria-label') || name.textContent.trim();
  const echoes = ['echo--a', 'echo--b'].map((c) => {
    const e = el('span', { class: `echo ${c}`, 'aria-hidden': 'true', text });
    name.append(e);
    return e;
  });
  const tl = gsap.timeline({ delay: .9, repeat: 2, repeatDelay: (60 / CONFIG.bpm) * 2 - .7 });
  tl.fromTo(echoes, { opacity: .9, x: 0, scale: 1 }, { opacity: 0, x: (i) => (i ? 46 : -46), scale: 1.06, duration: .7, ease: 'power2.out' });
}

/* Contato: os cartões chegam dobrados e se esticam na parede como lambe-lambe; ao bater, a tela dá um
   tranco, duas fitas crepe prendem os cantos e um adesivo escrito à mão estoura em cima */
const STICKERS = ['Chama no zap!', 'Manda um salve!'];
function pasteCards() {
  const cards = $$('.contact__card');
  if (!cards.length) return;
  const tl = gsap.timeline({ scrollTrigger: { trigger: cards[0], start: 'top 90%', once: true } });
  cards.forEach((card, i) => {
    const tapes = ['card-tape--l', 'card-tape--r'].map((c) => el('span', { class: `card-tape ${c}`, 'aria-hidden': 'true' }));
    const sticker = el('span', { class: `card-sticker${i % 2 ? ' card-sticker--alt' : ''}`, 'aria-hidden': 'true', text: STICKERS[i % STICKERS.length] });
    card.append(...tapes, sticker);
    gsap.set([...tapes, sticker], { scale: 0, opacity: 0 });
    const at = i * .55;
    tl.from(card, {
      rotationX: -75, skewY: i % 2 ? -5 : 5, scaleY: .55, y: -60, opacity: 0, transformPerspective: 900, transformOrigin: '50% 0%',
      duration: .5, ease: 'power3.in',
    }, at)
      // PLAU: achata ao bater e volta, e a área toda dá um tranco
      .to(card, { keyframes: { scaleX: [1.06, .98, 1], scaleY: [.9, 1.03, 1] }, duration: .4, ease: 'power2.out', clearProps: 'transform' }, at + .5)
      .to('.contact__inner', { keyframes: { x: [0, i % 2 ? 8 : -8, -5, 3, 0], y: [0, 5, -3, 0] }, duration: .35, ease: 'none', clearProps: 'transform' }, at + .5)
      // fitas batidas nos cantos, uma depois da outra
      .to(tapes, { scale: 1, opacity: 1, duration: .25, stagger: .1, ease: 'back.out(3)' }, at + .6)
      // adesivo estoura girando e assenta torto
      .fromTo(sticker, { scale: 0, opacity: 0, rotate: -40 }, { scale: 1, opacity: 1, rotate: i % 2 ? -7 : 8, duration: .6, ease: 'elastic.out(1, .45)' }, at + .8);
  });
}

/* ---------------------------------------------------------
   Início
   --------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  applyMediaAndLinks();
  renderArtists();
  renderArtistPage();
  initReleases();
  initPlayer();
  initHeader();
  initContact();
  initStats();
  initCursor();
  initMagnetic();
  initSpray();
  initHolo();
  initScribble();
  initHeroPunch();
  initHalftone();
  initBgSpot();
  initLcd();

  const revealed = runPreloader();
  initHero(revealed);
  initAbout();
  revealed.then(() => {
    initReveals();
    if (!window.ScrollTrigger) return;
    ScrollTrigger.refresh();
    // Fotos, fontes e conteúdo montado pelo JS mudam a altura da página depois:
    // recalcula onde cada animação de rolagem começa e termina sempre que a altura mudar
    let lastH = document.body.scrollHeight;
    let timer = null;
    new ResizeObserver(() => {
      const h = document.body.scrollHeight;
      if (Math.abs(h - lastH) < 2) return;
      lastH = h;
      clearTimeout(timer);
      timer = setTimeout(() => ScrollTrigger.refresh(), 150);
    }).observe(document.body);
    if (document.fonts) document.fonts.ready.then(() => ScrollTrigger.refresh());
  });
});
