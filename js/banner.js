var intervalo
var contador = 0;
var voltar = false;
var imgs = document.querySelectorAll('.b_img')
var popup = document.querySelector('.popup')
var banner_popup = document.querySelector('.banner_popup');
var time1, time2;
var popupText = [

    `<h1>ECOGRAFIAS</h1>
    <H3>MELHORES MÉDICOS E PREÇOS ACESSÍVEIS</H3>
    <p>
        Gestacional, Transvaginal, Mamas, Tireóide(com ou sem doppler),
        Rins e vias urinárias, Prótatas, Parede abdominal, Abdominal total,
        Bolsa Escrotal, Pélvica, Partes moles, Muscoloesquelética.
    </p>
    `,
    `<h1>CARDIOLOGIA</h1>
    <H3>ACREDITAMOS QUE VOCÊ PRECISA DE SAÚDE</H3>
    <p>
       Realizamos consultas de cardiologia e exames do coração. 
    </p>
    `,
    `<h1>DERMATOLOGIA</h1>
    <H3>TRATAMENTOS ESTÉTICOS</H3>
    <p>
        Atendemos a área de dermatologia e realizamos diversos
        tratamentos estéticos(Botox, peeling, preenchimento de rugas).
    </p>
    `,
    `<h1>GINECOLOGIA</h1>
    <H3>GINECOLOGIA/OBSTETRICA</H3>
    <p>
        Oferecemos consultas de ginecologia, pré-natal,
        exames de prevenção e outros exames de saúde da mulher.
    </p>
    `
]

document.querySelector('.btn1_banner').addEventListener('click', function () { proximo(1) })
document.querySelector('.btn2_banner').addEventListener('click', function () { proximo(2) })
function start_intervalos() {
    time1 = setTimeout(time_on, 2000)
    time2 = setTimeout(time_off, 14000)
}
function img_on() {
    imgs[contador].classList.remove("off")
    imgs[contador].classList.add("on")
}
function img_off() {
    imgs.forEach(element => {
        element.classList.remove('on')
        element.classList.add('off')
    });
}
function time_on() {
    banner_popup.removeAttribute('style');
    if((contador - 1) == 2) {
        popup.classList.remove('popup_top')
        banner_popup.style.justifyContent = 'Flex-end';
    }
    if((contador - 1) == 1) banner_popup.style.alignItems = 'Flex-start';
    popup.classList.remove("off_popup")
    popup.classList.add("on_popup")
    popup.innerHTML = popupText[contador - 1];
}
function time_off() {
    
    popup.classList.remove("on_popup")
    popup.classList.add("off_popup")
    popup.innerHTML = '';

    if((contador - 1) == 0) popup.classList.add('popup_top');
}
function proximo(direcao) {
    clearInterval(intervalo)
    clearTimeout(time1)
    clearTimeout(time2)

    img_off()
    time_off()

    if (direcao == 2) {
        if (contador == 4) {
            contador = 0
        } else {
            contador + 1
        }
    }
    if (direcao == 1) {
        contador = contador - 2
        if (contador == -1) contador = 3
    }

    img_on()
    start_intervalos()

    contador++

    start_intervalo()
}

function carrosel() {
    if (contador == 4) contador = 0

    img_off()
    img_on()
    start_intervalos()

    contador++
}

function start_intervalo() {
    intervalo = setInterval(carrosel, 15000)
}

function inicio() {
    contador = 4
    start_intervalos()
    intervalo = setInterval(carrosel, 15000)
}

window.addEventListener('load', inicio)