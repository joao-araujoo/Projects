document.getElementById('hamburger-btn').addEventListener('click', function(ev){
    if(document.querySelector('.hamburger-menu').style.left === '100%'){
        document.querySelector('.hamburger-menu').style.left = '0'
        document.getElementById('hamburger-btn').innerText = '✕'
    } else {
        document.querySelector('.hamburger-menu').style.left = '100%'
        document.getElementById('hamburger-btn').innerText = '☰'
    }
})