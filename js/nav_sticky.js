
const moveu = _ => {
    if (window.scrollY > 2) {

        document.querySelector('header').style.display = 'none';
        var nav = document.querySelector('nav')
        nav.style.position = 'sticky';
        nav.style.top = 0;
        nav.style.height = 'auto'
        document.querySelector('#img_logo').style.position = 'static'
    }
    if (window.scrollY < 3) {

        var nav = document.querySelector('nav')
        nav.removeAttribute('style')
        document.querySelector('header').removeAttribute('style')
        document.querySelector('#img_logo').style.position = 'absolute'
    }
}

document.querySelector('.btn_menu').addEventListener('click', _ => { menu_lateral(false) })
document.querySelector('.div1_off').addEventListener('click', _ => { menu_lateral(true) })

const menu_lateral = on => {

    if (on) {
        document.querySelector('body').style.overflowY = 'auto';
        document.querySelector('.div1_off').style.display = 'none';

        document.querySelector('.div2').removeAttribute('style')

        scroll(-421, window.scrollY)

    } else {
        document.querySelector('.div1_off').style.display = 'flex';

        var div2 = document.querySelector('.div2')
        div2.style.position = 'fixed';
        div2.style.right = '0';

        scroll(421, window.scrollY)
    }
}

const antesDedescarregar = _ => {
    document.querySelector('.div2').removeAttribute('style')
    window.scrollTo(0, 0)
}

window.addEventListener('scroll', moveu)
window.addEventListener('beforeunload', antesDedescarregar)
