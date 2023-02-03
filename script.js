var listaFilmes = ["https://br.web.img2.acsta.net/medias/nmedia/18/89/56/94/20055685.jpg",
                    "https://br.web.img2.acsta.net/pictures/22/09/23/20/14/0505071.jpg",
                    "https://br.web.img2.acsta.net/pictures/19/07/10/20/01/2331295.jpg",
                    "https://www.clickriomafra.com.br/emacite/wp-content/uploads/2022/04/Animais-Fant%C3%A1sticos-3-ser%C3%A1-exibido-no-Cineplus-Emacite-confira-a-programa%C3%A7%C3%A3o-1.jpg",
                    "https://br.web.img2.acsta.net/pictures/18/11/08/14/45/3423559.jpg",
                    "https://sm.ign.com/ign_br/screenshot/default/pokemon-first_32qq.jpg",
                    "https://s2.glbimg.com/co1HagXAnL1RH0f4Vc3FMNqpC-4=/362x536/https://s2.glbimg.com/alwqepi-sVFMrdvPKeMkosBvH4E=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2022/4/n/chM3O1TiAxPfWhtDB6lA/6222869-poster.jpg",
                    "http://cdn.fstatic.com/public/articles/files/2014/09/8116898a-9270-4646-bdfb-47745beeccff.jpg",
                    "https://upload.wikimedia.org/wikipedia/pt/8/8e/Divergent.png",
                    "https://extra.globo.com/incoming/17656610-8fa-6f8/w533h800/cartaz.jpg",
                    "http://www.cinesystem.com.br/filmes/images/poster/avatar-o-caminho-da-agua.jpg",
                    "https://upload.wikimedia.org/wikipedia/pt/e/e6/Xmen_apocalypse_ver18.jpg"
                ];

listaFilmes.push('https://lumiere-a.akamaihd.net/v1/images/p_insideout_19751_af12286c.jpeg', 'https://cdn.shopify.com/s/files/1/1057/4964/products/harry-potter-and-the-chamber-of-secrets-vintage-movie-poster-original-1-sheet-27x41.jpg');

var nomeFilmes = ['Titanic', 'Wandinha', 'Stranger Things', 'Animais Fantásticos', 'Animais Fantásticos', 'Pokémon: The First Movie', 'Pokémon 2000', 'Maze Runner: Correr ou Morrer', 
                  'Divergente', 'Jogos Vorazes: A Esperança', 'Avatar: O Caminho da Água', 'X-Men: Apocalipse', 'Divertidamente', 'Harry Potter e a Câmara Secreta'];
                
document.write('<div class="container_todosFilmes">')

var i = 0;
while(i < listaFilmes.length){
    if((listaFilmes[i].endsWith('jpg')) || (listaFilmes[i].endsWith('jpeg')) || (listaFilmes[i].endsWith('png'))){
        document.write('<div class="container_filme">')
        document.write('<img src='+ listaFilmes[i] +'>');
        document.write('<p>'+ nomeFilmes[i] +'</p>');
        document.write('</div>')
    }else{
        document.write('<p> A imagem ' + i + ' não foi lida pois não é um arquivo do tipo jpeg ou jpg </p>');
    }
    i++;
}
document.write('</div>')
