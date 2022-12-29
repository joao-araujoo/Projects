function openModal(){
    document.getElementById('modal').style.top = '0'

    const inputTitle = document.createElement('p')
    inputTitle.innerText = 'Digite aqui:'

    const contentInput = document.createElement('textarea')
    contentInput.maxLength = 500

    const sendButton = document.createElement('button')
    sendButton.innerText = 'Post'

    const modal = document.querySelector('div.modal')
    modal.append(inputTitle, contentInput, sendButton)

}

function closeModal(){
    document.getElementById('modal').style.top = '-100%'
}