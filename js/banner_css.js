var constante = 1.6247;
var banner = document.querySelector('.banner')

function escutando_resolucao_aultera() {
    if(window.screen.width < 1185){
        mudando_altura()
    }else{
        banner.removeAttribute('style')
    }
}

function mudando_altura(){
    cal = parseInt((banner.clientWidth / constante))
    banner.style.height = `${cal}px`;
}

window.addEventListener('resize', escutando_resolucao_aultera)
window.addEventListener('load', escutando_resolucao_aultera)