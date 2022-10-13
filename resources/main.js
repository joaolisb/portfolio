function toHome(){
    document.getElementById('home').scrollIntoView(true);
}

function toSobre(){
    document.getElementById('sobre').scrollIntoView(true);
}

function toProjetos(){
    document.getElementById('projetos').scrollIntoView(true);
}

function nox(){
    var dark = document.getElementById('darkmode');
    var light = document.getElementById('lightmode');
    var root = document.querySelector(':root');

    root.style.setProperty('--fundo', '#1D1D1D');
    root.style.setProperty('--fonte1', '#FEFEFE');
    root.style.setProperty('--fonte2', '#333333');

    dark.style.display = 'none';
    light.style.display = 'block';
}

function lumos(){
    var dark = document.getElementById('darkmode');
    var light = document.getElementById('lightmode');
    var root = document.querySelector(':root');

    root.style.setProperty('--fundo', '#FEFEFE');
    root.style.setProperty('--fonte1', '#333333');
    root.style.setProperty('--fonte2', '#FEFEFE');

    light.style.display = 'none';
    dark.style.display = 'block';
}

function menu(){
    var cabecalho = document.getElementById('cabecalho');
    if(document.getElementsByClassName('hamburger') )
    cabecalho.style.height = '200px'
}