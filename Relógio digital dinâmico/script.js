const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

const relogio = setInterval(function time(){
    let dateToday = new Date()
    let hora = dateToday.getHours()
    let minuto = dateToday.getMinutes()
    let segundo = dateToday.getSeconds()

    hora < 10 ? horas.innerHTML = '0' + hora : horas.innerHTML = hora
    minuto < 10 ? minutos.innerHTML =  '0' + minuto : minutos.innerHTML = minuto
    segundo < 10 ? segundos.innerHTML = '0' + segundo : segundos.innerHTML = segundo

}, 1)