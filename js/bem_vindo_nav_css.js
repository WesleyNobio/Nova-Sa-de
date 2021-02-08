var browser = true;
var bc = document.querySelectorAll('.b_div_2_banner')
var btn_a = document.querySelectorAll('.btn_a')
var img = document.querySelector('#img_b')


document.querySelectorAll('.btn_a').forEach(a => {
    a.addEventListener('click', () => {

        browser = (a.classList[1] == 0)

        btn_a.forEach(e => {
            e.classList.remove("b_nav_on")
        })

        if (window.screen.width < 496) {
            document.querySelector('.but_h').innerHTML = ""
            document.querySelector('.but_h').innerHTML = `<p>${a.getAttribute("valor")}</p>`
            document.querySelector('.b_nav').classList.toggle('b_nav_ver')
        } else {
            if (a.classList[1] != 0) {
                img.src = "assets/icon_browser_alfa_balck.png"
            } else {
                img.src = "assets/icon_browser_alfa_red.png"
            }
        }

        a.classList.add('b_nav_on')

        bc.forEach(elemento => {
            elemento.classList.remove('on')
            elemento.classList.add('off')
        })

        bc[a.classList[1]].classList.remove('off')
        bc[a.classList[1]].classList.add('on')

        document.querySelector('.b_1').style.height = `${bc[a.classList[1]].offsetHeight}px`
    })
});

document.querySelector('.but_h').addEventListener('click', () => {
    document.querySelector('.b_nav').classList.toggle('b_nav_ver')
})

function escutando_resolucao_bem_vindo() {
    if (window.screen.width < 495) {
        img.src = "assets/icon_browser_alfa_white.png"
    } else {
        if (browser) {
            img.src = "assets/icon_browser_alfa_red.png"
        } else {
            img.src = "assets/icon_browser_alfa_balck.png"
        }
    }
}

window.addEventListener('resize', escutando_resolucao_bem_vindo)
window.addEventListener('load', escutando_resolucao_bem_vindo)