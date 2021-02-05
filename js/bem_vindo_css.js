var div11 = [1.6985, document.querySelector('.d_img')]
var principios = [1.4613, document.querySelector('.d_img_1')]
var img_estrutura =
    [
        [1.5036, document.querySelectorAll('.img_estrutura')[0]],
        [1.5036, document.querySelectorAll('.img_estrutura')[1]],
        [1.5036, document.querySelectorAll('.img_estrutura')[2]],
        [1.5036, document.querySelectorAll('.img_estrutura')[3]],
        [1.5036, document.querySelectorAll('.img_estrutura')[4]]
    ]
var o_mapa = [2.0031, document.querySelector('.o_mapa')]


function escutando_resolucao() {
    if (window.screen.width < 783) {
        mudando_height(div11)
        mudando_height(principios)
        img_estrutura.forEach((element, n) => {
            mudando_height(img_estrutura[n])
        });
        mudando_height(o_mapa)
    } else {
        div11[1].removeAttribute('style')
        principios[1].removeAttribute('style')
        img_estrutura.forEach((element, n) => {
            img_estrutura[n][1].removeAttribute('style')
        });
        o_mapa[1].removeAttribute('style')
    }
}

function mudando_height(div) {
    cal = parseInt((div[1].clientWidth / div[0]))
    div[1].style.height = `${cal}px`;
}

window.addEventListener('resize', escutando_resolucao)
window.addEventListener('load', escutando_resolucao)