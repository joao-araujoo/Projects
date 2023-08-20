const adviceQuote = document.getElementById('advice-quote')

async function getAdvice(){
    const response = await fetch('https://api.adviceslip.com/advice')
    const advice = await response.json()

    return advice
}

async function generateAdvice(){
    const advice = await getAdvice()
    adviceQuote.innerText = advice.slip.advice
}

generateAdvice()