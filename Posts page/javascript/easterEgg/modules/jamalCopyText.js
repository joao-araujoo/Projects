export default function copyText(){
    const content = document.querySelector('div#easterEggContent')
    setTimeout(function(){
        document.getElementById('copy-button').src = 'https://cdn-icons-png.flaticon.com/512/4288/4288159.png'
    }, 100)
        document.getElementById('copy-button').src = 'https://cdn-icons-png.flaticon.com/512/4280/4280618.png' 
        navigator.clipboard.writeText(content.innerText)
}