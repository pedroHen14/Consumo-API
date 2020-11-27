'use strict';

const nomeHeroi = document.getElementById('buscar_nome_heroi');
const btnBusca = document.getElementById('btn_buscar');
const idHeroi = document.getElementById('buscar_id_heroi');
const img = document.getElementById('img');

const preencherInfos = (data) => {
    idHeroi.value = data.results[0].id;
    img.src = data.results[0].image.url;
    document.getElementById('inteligencia').value = data.results[0].powerstats.intelligence;
    document.getElementById('forca').value = data.results[0].powerstats.strength;
    document.getElementById('velocidade').value = data.results[0].powerstats.speed;
    document.getElementById('durabilidade').value = data.results[0].powerstats.durability;
    document.getElementById('poder').value = data.results[0].powerstats.power;
    document.getElementById('musculo').value = data.results[0].powerstats.combat;
    document.getElementById('nome_completo').value = data.results[0].biography['full-name'];
    document.getElementById('alter_ego').value = data.results[0].biography['alter-egos'];
    document.getElementById('apelidos').value = data.results[0].biography.aliases;
    document.getElementById('cidade_natal').value = data.results[0].biography['place-of-birth'];
    document.getElementById('primeira_aparicao').value = data.results[0].biography['first-appearance'];
    document.getElementById('publicado').value = data.results[0].biography.publisher;
}

const preencherInfo2 = (data) => {
    nomeHeroi.value = data.name;
    img.src = data.image.url;
    document.getElementById('inteligencia').value = data.powerstats.intelligence;
    document.getElementById('forca').value = data.powerstats.strength;
    document.getElementById('velocidade').value = data.powerstats.speed;
    document.getElementById('durabilidade').value = data.powerstats.durability;
    document.getElementById('poder').value = data.powerstats.power;
    document.getElementById('musculo').value = data.powerstats.combat;
    document.getElementById('nome_completo').value = data.biography['full-name'];
    document.getElementById('alter_ego').value = data.biography['alter-egos'];
    document.getElementById('apelidos').value = data.biography.aliases;
    document.getElementById('cidade_natal').value = data.biography['place-of-birth'];
    document.getElementById('primeira_aparicao').value = data.biography['first-appearance'];
    document.getElementById('publicado').value = data.biography.publisher;
}

const buscaApi = (nomeHeroi) => {
    const url = `https://www.superheroapi.com/api.php/2094439440691095/search/${nomeHeroi}`
    fetch(url).then(response => response.json())
              .then(data=> preencherInfos(data));
}

const buscaApi2 = (idHeroi) => {
    const url = `https://www.superheroapi.com/api.php/2094439440691095/${idHeroi}`
    fetch(url).then(response => response.json())
              .then(data=> preencherInfo2(data));
}

const pesquisarHeroi = () => {
    buscaApi(nomeHeroi.value);
}


const pesquisarHerois = () => {
    buscaApi2(idHeroi.value);
}


btnBusca.addEventListener('click', pesquisarHeroi);

idHeroi.addEventListener('blur', pesquisarHerois);
