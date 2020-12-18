let eye_part = document.querySelector("#eye_part")

function data(){
    let date = new Date()
    let data = date.getDate()
    let mese = date.getMonth() + 1

    if(data === 18 && mese === 12){
        return true
    } else {
        return false
    }
}

function apertura_occhio(eye){
    eye.style.height = "28px"
    eye.style.width = "30px"
    eye.style.borderRadius = "80% 80% 100% 100%"
    eye.style.background = "#fff"
    eye.style.marginTop = "15px"


    let bocca = document.querySelector(".mouth")
    bocca.style.height = "10px"
    bocca.style.width = "30px"
    bocca.style.borderRadius = "100% 100% 500% 500%"
    bocca.style.animation = "none"
}


function pupilla_visibile(pupil){
    pupil.style.height = "12px"
    pupil.style.width = "12px"
    pupil.style.borderRadius = "500%"
    pupil.style.background = "#000"
    pupil.style.margin = "auto"
}




function open(){
    let left_eye = document.querySelector(".sinistro")
    let right_eye = document.querySelector(".destro")
    let left_pupil = document.querySelector(".left")
    let right_pupil = document.querySelector(".right")
    apertura_occhio(left_eye)
    apertura_occhio(right_eye)
    pupilla_visibile(left_pupil)
    pupilla_visibile(right_pupil)
    const testo = document.querySelector(".text")
    testo.style.fontSize = "60px"
    testo.innerHTML = "Buon Natale"
}



if (data()){
    open()
}else{
    eye_part.addEventListener("mouseover", ()=>{
        const testo = document.querySelector(".text")
        testo.innerHTML = "Non è ancora Natale. Lasciami dormire"
    })

    eye_part.addEventListener("mouseleave", ()=>{
        const testo = document.querySelector(".text")
        testo.innerHTML = ""
    })
}

