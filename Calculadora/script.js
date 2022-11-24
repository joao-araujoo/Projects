function insert(num){
    document.querySelector('div.result').innerHTML += num
}

function clean(){
    document.querySelector('div.result').innerHTML = ''
}

function backspace(){
    let resultado = document.querySelector('div.result').innerHTML
    document.querySelector('div.result').innerHTML = resultado.substring(0, resultado.length -1)
}

function calculate(){
    let resultado = document.querySelector('div.result').innerHTML
    if(resultado){
        document.querySelector('div.result').innerHTML = eval(resultado)
    } else {
        alert('Type something to calculate!')
    }
}