let div = document.getElementById('div')

let arbol = document.getElementById('arbol')
let agua = document.getElementById('agua')
let m1 = document.getElementById('m1')
let m2 = document.getElementById('m2')
let m3 = document.getElementById('m3')
let cielo = document.getElementById('cielo')
let fondo = document.getElementById('fondo')

window.addEventListener('scroll',function(){
    let value = this.window.scrollY;

    arbol.style.marginTop = value * 0 + 'px'
    agua.style.top = value * 0.099 + 'px'
    m1.style.top = value * 0.19 + 'px'
    m2.style.top = value * 0.4 + 'px'
    m3.style.top = value * 0.55 + 'px'
    cielo.style.top = value * 0.7 + 'px'
})

window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>490);
})

let ocultobtn = document.getElementById('ocultobtn');
let oculto = document.getElementById('oculto');

ocultobtn.addEventListener('click', toggleText);

function toggleText() {
    oculto.classList.toggle('show');
}

