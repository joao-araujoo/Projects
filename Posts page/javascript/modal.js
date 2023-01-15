// function openModal(){
//     // document.getElementById('modal').style.top = '0'

//     // const inputTitle = document.createElement('p')
//     // inputTitle.innerText = 'Digite aqui:'
//     // inputTitle.id = 'modal-input-title'

//     // const contentInput = document.createElement('textarea')
//     // contentInput.maxLength = 500
//     // contentInput.id = 'modal-content-input'

//     // const postButton = document.createElement('button')
//     // postButton.innerText = 'Post'
//     // postButton.id = 'modal-post-button'

//     // const modal = document.querySelector('div.modal')
//     // modal.append(inputTitle, contentInput, postButton)

// }

function closeModal(){
    document.getElementById('modal').style.top = '-100%'
    document.getElementById('modal-profile').remove()
    document.getElementById('modal-content-input').remove()
    document.getElementById('modal-post-button').remove()
}