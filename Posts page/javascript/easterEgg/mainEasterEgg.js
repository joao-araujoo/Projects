import jamalHeartPressed from "./modules/jamalHeartIsPressed.js"
import dblClickToLikeJamal from "./modules/dblClickToLikeJamal.js"
import copyText from "./modules/jamalCopyText.js"
let easterEggCount = 0

document.getElementById('jamal-delete-button').addEventListener('click', function(){
    easterEggCount++
    const easterEggContent = document.getElementById('easterEggContent')
    switch(easterEggCount){
    case 5:
        easterEggContent.innerText = "I told you, it's impossible to erase me, rs"
        break
    case 10:
        easterEggContent.innerText = "bro, why are you so insistent??? stop trying"
        break
    case 15:
        easterEggContent.innerText = "LOL 🤣😂🤣😂😂🤣😂🤣🤣😂🤣😂😂🤣🤣🤣😂🤣😂😂🤣🤣🤣😂🤣😂🤣😂🤣😂🤣😂😂"
        break
    case 20:
        easterEggContent.innerText = "I ALREADY TOLD YOU, YOU CANT REMOVE ME MF"
        break
    case 25:
        easterEggContent.innerText = "ok... you won...💔💔"
        break
    case 30:
        easterEggContent.innerText = "JUST KIDDING LOL NO CLUE YOU BELIEVED"
        break
    }
    if(easterEggCount > 34){
    easterEggContent.innerText = "now i'm serious, stop before your mom comes and curses you because you haven't showered yet, you greasy"
    }
})
document.getElementById('jamal-heart').addEventListener('click', jamalHeartPressed)
document.getElementById('post').addEventListener('dblclick', dblClickToLikeJamal)
document.getElementById('copy-button').addEventListener('click', copyText)