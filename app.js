let eye_part = document.querySelector("#eye_part")

function apertura_occhio(){
    let eye = document.querySelector(".eye")
    eye.style.height = "30px"
    eye.style.width = "30px"
    eye.style.borderRadius = "100%"
    eye.style.background = "#fff"
    eye.style.margin = "10px"
}


function chiusura_occhio(){
    let eye = document.querySelector(".eye")
    eye.style.height = "2px"
    eye.style.width = "30px"
    eye.style.borderRadius = "0 0 500% 500%"
    eye.style.background = "#000"
    eye.style.border = "4px solid black"
    eye.style.marginTop = "25px"
}


function pupilla_visibile(){
    let pupil = document.querySelector(".pupil")
    pupil.style.height = "12px"
    pupil.style.width = "12px"
    pupil.style.borderRadius = "500%"
    pupil.style.background = "#000"
    pupil.style.margin = "auto"
}


function pupilla_invisibile(){
    let pupil = document.querySelector(".pupil")
    pupil.style.height = "0px"
}

eye_part.addEventListener("mouseover", ()=>{
    apertura_occhio()
    pupilla_visibile()
})

eye_part.addEventListener("mouseout", ()=>{
    chiusura_occhio()
    pupilla_invisibile()
})