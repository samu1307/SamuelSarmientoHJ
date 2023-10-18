const load = document.querySelector('.load')
const main = document.querySelector('main')
const inputs = document.querySelectorAll('input')
const divCall = document.querySelector('.call')
const btnSlides = document.querySelector('#slides')
const gustos = document.querySelector('#gustos')
const submitBtn = document.getElementById('submit');
const svgSlides = document.querySelector('svg')
const iname = document.getElementById('vname')
const divGracias = document.querySelector('.main-gracias')
const h3Text = document.querySelector('#gras')
const email = document.querySelector('#email')


(
    setTimeout(()=>{
        setTimeout(()=>{
            main.style.display = 'flex'
            load.style.opacity = 0
            main.style.opacity = 1
            document.body.style.overflow = "auto"
            setTimeout(()=>{
                load.style.display = 'none'
            },1000)
        }, 1500)
    },0)
)()


gustos.placeholder = ''

inputs.forEach(i=>{
    i.onfocus = ()=>{
        i.previousElementSibling.classList.add('top')
        i.previousElementSibling.classList.add('focus')
        i.parentNode.classList.add('focus')
    }
    i.onblur = ()=>{
        const ivalue = i.value.trim();
        if(ivalue == ''){
            i.previousElementSibling.classList.remove('top')
        }
        i.previousElementSibling.classList.remove('focus')
        i.parentNode.classList.remove('focus')
    }
})

gustos.onfocus = ()=>{
    gustos.placeholder = 'Separalos por una coma'
    gustos.previousElementSibling.classList.add('top')
    gustos.previousElementSibling.classList.add('focus')
    gustos.parentNode.classList.add('focus')
}
gustos.onblur = ()=>{
    gustos.placeholder = ''
    const ivalue = gustos.value.trim();
    if(ivalue == ''){
        gustos.previousElementSibling.classList.remove('top')
    }
    gustos.previousElementSibling.classList.remove('focus')
    gustos.parentNode.classList.remove('focus')
}


function slidesRotate() {
    if(divCall.style.height == '45px'){
        svgSlides.style.transform = 'rotate(90deg)'
        divCall.style.height = '172px'
        divCall.style.boxShadow = '0px 0px 7px 2px #95fab9'
        fechav.required = false
        horav.required = false
    }else{
        fechav.required = true
        horav.required = true
        svgSlides.style.transform = 'rotate(0)'
        divCall.style.height = '45px'
        divCall.style.boxShadow = '0px 0px 5px #0000001b'
    }

}

function nameInput(){
    let nombreInpunt = iname.value
    let correo = email.value
    if(!nombreInpunt.length == 0){
        if(!correo.length == 0){
            h3Text.innerHTML = `Gracias por contactarme <b>${nombreInpunt}</b>,
                                pero el formulario tiene fines recreativos. Si deseas ponerte en contacto,
                                encontrarás la información correspondiente en la sección de perfil.
                                Agradezco tú atención.` 
            divGracias.style.display = 'flex'
        }
    }
}