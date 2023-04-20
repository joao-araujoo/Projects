const result = document.getElementById('result')
const button = document.getElementById('copyToClipboard')

const characters = {
    upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowerCase: 'abcdefghijklmnopqrstuvwxyz',
    number: '0123456789',
    symbol: '@#$%^&*()_+~{}[]<>/-=|' 
}

document.getElementById('generatePassword').addEventListener('click', () => {
    let password = ''
    
    do {
        password += characters.upperCase[Math.floor(Math.random() * characters.upperCase.length)]
        password += characters.lowerCase[Math.floor(Math.random() * characters.lowerCase.length)]
        password += characters.number[Math.floor(Math.random() * characters.number.length)]
        password += characters.symbol[Math.floor(Math.random() * characters.symbol.length)]
    } while(password.length < 15)
    
    result.value = password
    button.innerText = 'Copy'
    button.classList.remove('success')
})

button.addEventListener('click', () => {
    if(button.innerText === 'Copy'){
        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(result.value)
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})
