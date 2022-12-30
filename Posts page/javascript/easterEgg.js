function easterEggButton(){
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
}
                        
function jamalHeartPressed(){
    if(document.getElementById('jamal-heart').src == 'https://cdn-icons-png.flaticon.com/512/833/833300.png'){
        document.getElementById('jamal-heart').src = 'https://cdn-icons-png.flaticon.com/512/833/833472.png'
    } else {
        document.getElementById('jamal-heart').src = 'https://cdn-icons-png.flaticon.com/512/833/833300.png'
    }
}

document.getElementById('post').addEventListener('dblclick', function(){
    if(document.getElementById('jamal-heart').src == 'https://cdn-icons-png.flaticon.com/512/833/833300.png'){
        document.getElementById('jamal-heart').src = 'https://cdn-icons-png.flaticon.com/512/833/833472.png'
    } else {
        document.getElementById('jamal-heart').src = 'https://cdn-icons-png.flaticon.com/512/833/833300.png'
    }
})

function copyText(){
    const content = document.querySelector('div#easterEggContent')
    setTimeout(function(){
        document.getElementById('copy-button').src = 'https://cdn-icons-png.flaticon.com/512/4288/4288159.png'
    }, 100)
        document.getElementById('copy-button').src = 'https://cdn-icons-png.flaticon.com/512/4280/4280618.png' 
        navigator.clipboard.writeText(content.innerText)
}