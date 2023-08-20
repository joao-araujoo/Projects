async function getAdvice(){
    const response = await fetch('https://api.adviceslip.com/advice')
    const advice = await response.json()

    return advice
}

async function showAdvice(){
    const advice = await getAdvice()
    document.body.append(advice.slip.advice)
}
