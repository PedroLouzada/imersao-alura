const text = document.querySelector(".search"); // Seleciona o elemento com a classe "search" (provavelmente um campo de input para pesquisa)
const butt = document.querySelector(".poke"); // Seleciona o elemento com a classe "poke" 
const square = document.querySelector(".square"); // Seleciona o elemento com a classe "square" 
const logo = document.querySelector(".top"); // Seleciona o elemento com a classe "top" 
const imagem = document.querySelector(".imagem"); // Seleciona o elemento com a classe "imagem" 
const card = document.querySelector(".card"); // Seleciona o elemento com a classe "card" 
const menor = document.querySelector(".quadradomenor"); // Seleciona o elemento com a classe "quadradomenor" 
const desc = document.querySelector(".descricao"); // Seleciona o elemento com a classe "descricao" 
const numero = document.querySelector(".numero"); // Seleciona o elemento com a classe "numero" 
const tp = document.querySelector(".tp"); // Seleciona o elemento com a classe "tp" 
const tp2 = document.querySelector(".tp2"); // Seleciona o elemento com a classe "tp2" 
const tps = document.querySelector('.tps'); // Seleciona o elemento com a classe "tps" 

let counttps = 0; // Variável para contar os tipos (provavelmente para determinar se há um ou dois tipos)

butt.addEventListener("click", function () { // Adiciona um ouvinte de evento ao botão para executar uma função quando clicado
  let count = 0; // Variável para contar as correspondências de pesquisa
  const searchValue = text.value.toLowerCase(); // Obtém o valor do campo de pesquisa, converte para minúsculas e armazena em searchValue

  // Verifica se o campo de pesquisa está vazio
  if (text.value.trim() === "") {
    alert("Digite o nome de um Pokémon"); // Exibe um alerta se o campo estiver vazio
    return; // Sai da função
  }

  // Itera sobre cada Pokémon em um array chamado "info" (não mostrado no código)
  info.forEach(pokemon => {
    const pokemonTitle = pokemon.title.toLowerCase(); // Obtém o título do Pokémon e converte para minúsculas
  // Atualiza o HTML com as informações do Pokémon encontrado
  if (pokemonTitle === searchValue) {
    count = 1;
    imagem.innerHTML = `<img src=${pokemon.ft} alt="foto" class = "ft">
                            <h2 class= "nome">${pokemon.title}</h2>
                            `// Código HTML para exibir a imagem do Pokémon
    desc.innerHTML = `<p class ="dex">${pokemon.dex}</p>
                      <p class = "abilities"><b>Habilidades</b></p>
                      <p class = "ab1">${pokemon.ability}</p>
                      <p class = "hidden">${pokemon.hiddenabilitie} <i>(h)</i></p>
                      `// Código HTML para exibir a descrição do Pokémon
    numero.innerHTML = `<p class = "num">${pokemon.num}</p>`
    if (pokemon.type !== 'none' && pokemon.type2 !== 'none') {
        tp.innerHTML = `<img src=${pokemon.type} alt="foto" class = "type">`
        tp2.innerHTML = `<img src=${pokemon.type2} alt="foto" class = "type2">`
        counttps = 1;// Código HTML para exibir o número do Pokémon
    }
    else {
        tp.innerHTML = `<img src=${pokemon.type} alt="foto" class = "type">`
        tp2.innerHTML = '';
        counttps = 0;
    }// ... (código similar para atualizar os tipos, habilidades, etc.)
}
  });
    if(searchValue == ""){// Se nenhuma correspondência for encontrada, exibe uma mensagem de erro
        return alert("Digite o nome de um Pokémon");
    }
    const abilities = document.querySelector(".abilities");
    const ab1 = document.querySelector(".ab1");
    const hidden = document.querySelector(".hidden");
    const ft = document.querySelector(".ft");
    const type = document.querySelector(".type"); 
        if (count === 1) {//estilização da pagina apos a busca
            text.style.marginTop = '0px';
            text.style.backgroundImage = 'linear-gradient(to right, #8FECF0, #73E8E9)';
            butt.style.marginTop = '10px'
            square.style.backgroundImage = "url('./assets/opendex.png')";
            square.classList.add('scale-in-ver-center');
            square.style.height = '750px';
            square.style.backgroundSize = '650px 770px';
            logo.style.display = 'none';
            card.style.height = '285px';
            card.style.width = '490px';
            card.style.backgroundColor = '#8CD0FB';
            card.style.marginTop = '226px';
            card.style.borderWidth = "1px";
            card.style.borderTopColor = 'white';
            card.style.borderBottomColor = 'white';
            card.style.borderStyle = 'solid';
            card.style.borderRightColor = '#7E818F';
            card.style.borderLeftColor = '#7E818F';
            menor.style.height = '200px';
            menor.style.width = '150px';
            menor.style.backgroundColor = '#82ECF0';
            menor.style.marginTop = '40px';
            menor.style.marginLeft = '-100px'
            menor.style.marginRight = '15px'
            menor.style.borderRadius = '25px'
            menor.style.borderColor = 'white';
            menor.style.borderStyle = 'solid';
            menor.style.borderWidth = '2px';
            desc.style.marginTop = '40px';
            numero.style.marginTop = '8px';
            numero.style.height = '50px';
            numero.style.width = '180px';
            abilities.style.marginTop = '32px';
            abilities.style.fontFamily = '"SUSE", sans-serif';
            abilities.style.fontSize = '18px';
            ab1.style.marginTop = '10px';
            ab1.style.fontFamily = '"Open Sans", sans-serif';
            ab1.style.color = 'rgb(41, 41, 41)';
            hidden.style.fontFamily = '"Open Sans", sans-serif';
            hidden.style.color = 'rgb(41, 41, 41)';
            hidden.style.marginTop = '3px';
            if (counttps === 1) {
                tps.style.marginLeft = '-180px';
                desc.style.marginLeft = '0px'
            }
            else {
                tps.style.marginLeft = '-137px';
                desc.style.marginLeft = '50px';
            }
        }
        if (count === 0) {//estilização da pagina apos a busca
            text.style.marginTop = '0px';
            text.style.backgroundImage = 'linear-gradient(to right, #8FECF0, #73E8E9)';
            butt.style.marginTop = '10px'
            square.style.backgroundImage = "url('./assets/opendex.png')";
            square.classList.add('scale-in-ver-center');
            square.style.height = '750px';
            square.style.backgroundSize = '650px 770px';
            logo.style.display = 'none';
            card.style.height = '285px';
            card.style.width = '490px';
            card.style.backgroundColor = '#8CD0FB';
            card.style.marginTop = '226px';
            card.style.borderWidth = "1px";
            card.style.borderTopColor = 'white';
            card.style.borderBottomColor = 'white';
            card.style.borderStyle = 'solid';
            card.style.borderRightColor = '#7E818F';
            card.style.borderLeftColor = '#7E818F';
            menor.style.height = '200px';
            menor.style.width = '150px';
            menor.style.backgroundColor = '#82ECF0';
            menor.style.marginTop = '40px';
            menor.style.marginLeft = '-100px'
            menor.style.marginRight = '15px'
            menor.style.borderRadius = '25px'
            menor.style.borderColor = 'white';
            menor.style.borderStyle = 'solid';
            menor.style.borderWidth = '2px';
            desc.style.marginTop = '40px';
            numero.style.marginTop = '8px';
            numero.style.height = '50px';
            numero.style.width = '180px';
            abilities.style.marginTop = '32px';
            abilities.style.fontFamily = '"SUSE", sans-serif';
            abilities.style.fontSize = '18px';
            ab1.style.marginTop = '10px';
            ab1.style.fontFamily = '"Open Sans", sans-serif';
            ab1.style.color = 'rgb(41, 41, 41)';
            hidden.style.fontFamily = '"Open Sans", sans-serif';
            hidden.style.color = 'rgb(41, 41, 41)';
            hidden.style.marginTop = '3px';
            if (counttps === 1) {
                tps.style.marginLeft = '-180px';
                desc.style.marginLeft = '0px'
            }
            else {
                tps.style.marginLeft = '-137px';
                desc.style.marginLeft = '50px';
            }
            imagem.innerHTML = `<img src="./assets/misigno.png" alt="foto" class = "ft">
                                        <h2 class= "nome"></h2>
                                        `
            desc.innerHTML = `<p class ="dexerror">𑢶𑣁𑣓𑣕𑣈𑣓 𑢾𑣏𑣂𑣅𑣃 𑢶𑣁𑣓𑣁𑣙 𑢾𑣀𑣞𑣁𑣔𑣙𑣓 𑢷𑣂𑣌𑣁𑣞 𑢷𑣂𑣗𑣙𑣋 𑢮𑣙𑣁𑣜𑣌𑣙𑣓𑣑 𑣞𑣜𑣌𑣁𑣜 𑢼𑣁𑣓𑣏𑣂𑣅𑣄, 𑣘𑣕𑣜𑣁𑣀𑣌 𑣤𑣣-𑣡𑣡𑣢𑣠𑣠𑣢 𑣔𑣂𑣚𑣀 𑣡𑣠𑣧𑣢𑣠𑣠𑣢 𑣚𑣈𑣌𑣁 𑣕𑣈 𑣖𑣃𑣕𑣃𑣚 𑣙𑣉𑣉 𑣙𑣅𑣖 𑣘𑣘𑣁𑣔𑣂𑣜 𑣎𑣃𑣘𑣃𑣚𑣅 𑢯𑣁𑣆𑣗𑣁𑣞𑣁 𑣜𑣈𑣅𑣄 𑣆𑣊𑣋𑣃𑣚 𑣙𑣉𑣉 𑣙𑣅𑣖 𑣘𑣘𑣁𑣔𑣂𑣜 𑣎𑣃𑣖𑣘𑣃𑣚𑣅 𑣗𑣁𑣜𑣁 𑣎𑣉𑣊 𑢹𑣗𑣁𑣜𑣊 𑣏𑣂𑣕𑣂 𑣉𑣓𑣉𑣚 𑣕𑣈 𑣘𑣃𑣕𑣂 𑣗𑣆 𑣓𑣀 𑣙𑣅𑣖 𑣗𑣂𑣔𑣃𑣁𑣙 𑣉𑣓𑣑𑣉𑣄 𑣄𑣂𑣕𑣂 𑣖𑣜𑣃 𑣌𑣉𑣄 𑢯𑣁𑣆𑣗𑣁𑣞𑣁 𑣜𑣈 𑣌𑣈𑣓𑣈𑣅𑣁 𑣙𑣉𑣗𑣁 𑣚𑣈𑣓𑣁 𑣉𑣓𑣑𑣉𑣄 𑣈𑣓 𑢮𑣙𑣁𑣜𑣌𑣙𑣓𑣑 𑣞𑣜𑣌𑣁𑣜 𑣘𑣁𑣅 𑣕𑣈 𑣈𑣚𑣁 𑣔𑣙𑣜𑣁 𑣌𑣓 𑢳 𑢾 𑢦 𑢼 𑢲 𑣘𑣃𑣕𑣂 𑣉𑣛𑣊 𑣕𑣈𑣋𑣈 𑣘𑣃𑣕𑣂 𑣌𑣉 𑣉𑣚 𑣁𑣀𑣌𑣁</p>
                                  <p class = "abilities"></p>
                                  <p class = "ab1">.</p>
                                  <p class = "hidden">.</p>
                                  `
            numero.innerHTML = `<p class = "num">000</p>`
            tp.innerHTML = `<img src="./assets/miss.png" alt="foto" class = "type">`;
            type.height = '35px';
            type.width = '90px';
        }
    
});