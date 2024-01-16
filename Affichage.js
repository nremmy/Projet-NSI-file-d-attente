window.localStorage.clear()
let liste_div_microondes = document.querySelectorAll(".microondes")
let div_file_attente = document.getElementById("suivants")
let file_attente = []
let bouton
//let balise_ul = document.createElement("ul")
let contenu_div_file_attente = ""

//console.log(liste_div_microondes)
//console.log(div_file_attente)

window.addEventListener('storage', ()=> {
    if (window.localStorage.getItem('prochain') && window.localStorage.getItem('bouton')){
        bouton = parseInt(window.localStorage.getItem('bouton'))
        prochain = window.localStorage.getItem('prochain')
        liste_div_microondes[bouton].textContent = prochain
        //console.log(bouton)
        //console.log(prochain)
        //console.log(file_attente)
        window.localStorage.clear()
    }else {
        if (window.localStorage.getItem('file_attente')){
            file_attente = window.localStorage.getItem('file_attente').split(",")
            //console.log(file_attente)
            contenu_div_file_attente = ""
            for (let i=0; i<file_attente.length; i++){
                contenu_div_file_attente = contenu_div_file_attente + `<ul>${file_attente[i]}</ul>`
            }
            div_file_attente.innerHTML = contenu_div_file_attente
            window.localStorage.clear()
        }else {
            if(window.localStorage.getItem('cvidechef')){
                file_attente = []
                //console.log(file_attente)
                div_file_attente.innerHTML = ""
                window.localStorage.clear()
            }
        } 
    }
})