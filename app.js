let eye_part = document.querySelector("#eye_part")

function apertura_occhio(eye){
    eye.style.height = "30px"
    eye.style.width = "30px"
    eye.style.borderRadius = "80% 80% 100% 100%"
    eye.style.background = "#fff"
    eye.style.margin = "10px"

    let bocca = document.querySelector(".mouth")
    bocca.style.height = "10px"
    bocca.style.width = "30px"
    bocca.style.animation = "none"
}


function chiusura_occhio(eye){
    eye.style.height = "2px"
    eye.style.width = "30px"
    eye.style.borderRadius = "0 0 500% 500%"
    eye.style.background = "#000"
    eye.style.border = "4px solid black"
    eye.style.marginTop = "25px"

    let bocca = document.querySelector(".mouth")
    bocca.style.animation = "mouth 1.3s infinite"
}


function pupilla_visibile(pupil){
    pupil.style.height = "12px"
    pupil.style.width = "12px"
    pupil.style.borderRadius = "500%"
    pupil.style.background = "#000"
    pupil.style.margin = "auto"
}


function pupilla_invisibile(pupil){
    pupil.style.height = "0px"
}

eye_part.addEventListener("mouseover", ()=>{
    let left_eye = document.querySelector(".sinistro")
    let right_eye = document.querySelector(".destro")

    let left_pupil = document.querySelector(".left")
    let right_pupil = document.querySelector(".right")
    apertura_occhio(left_eye)
    apertura_occhio(right_eye)
    pupilla_visibile(left_pupil)
    pupilla_visibile(right_pupil)
})

eye_part.addEventListener("mouseout", ()=>{
    let left_eye = document.querySelector(".sinistro")
    let right_eye = document.querySelector(".destro")

    let left_pupil = document.querySelector(".left")
    let right_pupil = document.querySelector(".right")
    chiusura_occhio(left_eye)
    chiusura_occhio(right_eye)
    pupilla_invisibile(left_pupil)
    pupilla_invisibile(right_pupil)
})