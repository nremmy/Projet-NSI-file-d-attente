let inputPrenom = document.getElementById("Prenom")
let liste_boutons = document.querySelectorAll("button")
let file_attente = []
let prenom = ""
let prochain = ""
let liste_est_libre = [true, true, true]
let changement

//console.log(inputPrenom)
//console.log(liste_boutons)

inputPrenom.addEventListener("change", ()=>{
    prenom = inputPrenom.value
    file_attente.push(prenom)
    //console.log(file_attente)
    inputPrenom.value = ""
    if (liste_est_libre.includes(true)){
        changement = 0
        for(let i=0; i<3; i++){
            if(liste_est_libre[i] === true && changement === 0){
                changement++
                //console.log(i)
                prochain = file_attente.shift()
                //console.log(file_attente)
                window.localStorage.setItem('file_attente', file_attente)
                if (file_attente.length === 0){
                    window.localStorage.setItem('cvidechef', "cvidechef")
                }
                window.localStorage.setItem('bouton', i)
                window.localStorage.setItem('prochain', prochain)
                liste_est_libre[i] = false
            }
        }
    } else {
    window.localStorage.setItem('file_attente', file_attente)
    }
})

for(let i=0; i<3; i++){
    liste_boutons[i].addEventListener("click", ()=>{
        //console.log(i)
        prochain = file_attente.shift()
        if (prochain === undefined){
            prochain = "Ce micro-onde est libre"
            liste_est_libre[i] = true
        }
        //console.log(file_attente)
        window.localStorage.setItem('file_attente', file_attente)
        if (file_attente.length === 0){
            window.localStorage.setItem('cvidechef', "cvidechef")
        }
        window.localStorage.setItem('bouton', i)
        window.localStorage.setItem('prochain', prochain)
    })
}






