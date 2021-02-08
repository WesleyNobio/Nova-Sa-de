var bc_c = document.querySelectorAll('.b_div_2_banner')


function escutando_resolucao_cita() {
        var div_on 

        bc_c.forEach(e =>{
            if(e.classList[1] == 'on') div_on = e
        })       

        document.querySelector('.b_1').style.height = `${div_on.offsetHeight}px`

}


window.addEventListener('resize', escutando_resolucao_cita)
window.addEventListener('load', escutando_resolucao_cita)