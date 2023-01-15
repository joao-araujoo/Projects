let profilePicture = 'https://www.promoview.com.br/uploads/2017/04/b72a1cfe.png'
let profileName = 'Anônimo'
let postOrder = 1
let easterEggCount = 0

function createPost(){

    const postsSection = document.querySelector('section.posts')
    const post = document.createElement('div')
    post.className = 'post'
    post.id = `post-${postOrder}`
    post.addEventListener('dblclick', function(){
        if(heartButton.src === 'https://cdn-icons-png.flaticon.com/512/833/833300.png'){
            heartButton.src = 'https://cdn-icons-png.flaticon.com/512/833/833472.png'
        } else {
            heartButton.src = 'https://cdn-icons-png.flaticon.com/512/833/833300.png'
        }
    })

    const top = document.createElement('div')
    top.className = 'header'

    const user = document.createElement('div')
    user.className = 'user'

    const userPicture = document.createElement('img')
    userPicture.src = profilePicture
    userPicture.width = 20
    userPicture.height = 20
    const userName = document.createElement('h4')
    userName.innerText = profileName
    user.append(userPicture, userName)
    top.appendChild(user)

    const deleteButton = document.createElement('button')
    deleteButton.className = 'delete-button'
    deleteButton.id = `post-${postOrder}`
    deleteButton.innerText = '×'
    deleteButton.addEventListener('click', function(ev){
        if(confirm('Tem certeza de que deseja apagar este post?')){
            const postToDelete = document.getElementById(ev.currentTarget.id)
            postToDelete.remove()
        }
    })
    
    top.appendChild(deleteButton)

    const content = document.createElement('div')
    content.className = 'content'
    
    const date = new Date()
    let postDay = date.getDate()
    if(postDay < 10){
        postDay = `0${postDay}`
    }

    let postMonth = date.getMonth() + 1
    switch(postMonth){
    case 1:
        postMonth = 'jan'
    case 2:
        postMonth = 'fev'
    case 3:
        postMonth = 'mar'
    case 4:
        postMonth = 'abr'
    case 5:
        postMonth = 'mai'
    case 6:
        postMonth = 'jun'
    case 7:
        postMonth = 'jul'
    case 8:
        postMonth = 'ago'
    case 9:
        postMonth = 'set'
    case 10:
        postMonth = 'out'
    case 11:
        postMonth = 'nov'
    case 12:
        postMonth = 'dez'
    }
    
    let postHour = date.getHours()
    if(postHour < 10){
        postHour = `0${postHour}`
    }
    let postMinutes = date.getMinutes()
    if(postMinutes < 10){
        postMinutes = `0${postMinutes}`
    }
    let postYear = date.getFullYear()
    
    const postDate = document.createElement('div')
    postDate.className = 'date'
    postDate.innerText = `${postHour}:${postMinutes} · ${postDay} de ${postMonth} de ${postYear}`
    
    const heartButton = document.createElement('img')
    heartButton.src = 'https://cdn-icons-png.flaticon.com/512/833/833300.png'
    heartButton.width = 15
    heartButton.alt = 'heart button'
    heartButton.className = 'heart'
    heartButton.addEventListener('click', function(){
        if(heartButton.src === 'https://cdn-icons-png.flaticon.com/512/833/833300.png'){
            heartButton.src = 'https://cdn-icons-png.flaticon.com/512/833/833472.png'
        } else {
            heartButton.src = 'https://cdn-icons-png.flaticon.com/512/833/833300.png'
        }
    })

    const copyButton = document.createElement('img')
    copyButton.src = 'https://cdn-icons-png.flaticon.com/512/4288/4288159.png'
    copyButton.width = 14
    copyButton.alt = 'copy button'
    copyButton.className = 'copy-button'
    copyButton.addEventListener('click', function(){setTimeout(function(){
        copyButton.src = 'https://cdn-icons-png.flaticon.com/512/4288/4288159.png'
    }, 100)
        copyButton.src = 'https://cdn-icons-png.flaticon.com/512/4280/4280618.png' 
        navigator.clipboard.writeText(content.innerText)
    })
    
    document.getElementById('modal').style.top = '0'
    
    const modalProfile = document.createElement('div')
    modalProfile.id = 'modal-profile'

    const modalProfilePicture = document.createElement('img')
    modalProfilePicture.src = profilePicture
    modalProfilePicture.width = '30'
    modalProfilePicture.height = '30'

    const modalUsername = document.createElement('p')
    modalUsername.innerText = profileName

    modalProfile.append(modalProfilePicture, modalUsername)
    
    const contentInput = document.createElement('textarea')
    contentInput.maxLength = 500
    contentInput.id = 'modal-content-input'
    
    const postButton = document.createElement('button')
    postButton.innerText = 'Post'
    postButton.id = 'modal-post-button'
    
    const modal = document.querySelector('div.modal')
    modal.append(modalProfile, contentInput, postButton)
    
    
    postButton.addEventListener('click', function(){
        content.innerText = document.querySelector('#modal-content-input').value
        if(content.innerText == ''){
            alert('Digite algo antes de postar!')
            return
        } else {
            postDate.append(heartButton, copyButton)
            post.append(top, content, postDate)
            postsSection.appendChild(post)
            postOrder++
        }
        document.getElementById('modal').style.top = '-100%'
        document.getElementById('modal-input-title').remove()
        document.getElementById('modal-content-input').remove()
        document.getElementById('modal-post-button').remove()
    })
}

        
function changeUserName(){
    
    document.getElementById('modal').style.top = '0'
    
    const newNameTitle = document.createElement('p')
    newNameTitle.innerText = 'Digite o novo nome:'
    newNameTitle.id = 'new-name-title'
    
    const newName = document.createElement('input')
    newName.maxLength = 30
    newName.id = 'new-name-input'
    
    const changeButton = document.createElement('button')
    changeButton.innerText = 'Done'
    changeButton.id = 'new-name-button'

    const modal = document.querySelector('div.modal')
    modal.append(newNameTitle, newName, changeButton)
    
    
    changeButton.addEventListener('click', function(){
        
        if(document.querySelector('#new-name-input').value == ''){
            alert('Digite algo antes de concluir!')
            return
        } else {
            profileName = document.querySelector('#new-name-input').value
            document.getElementById('username').innerText = profileName
            document.getElementById('modal').style.top = '-100%'
        }
        document.getElementById('new-name-title').remove()
        document.getElementById('new-name-input').remove()
        document.getElementById('new-name-button').remove()
    })
    document.getElementById('close-modal').addEventListener('click', function(){
        document.getElementById('new-name-title').remove()
        document.getElementById('new-name-input').remove()
        document.getElementById('new-name-button').remove()
    })
}
        
function changeUserPhoto(){
    document.getElementById('modal').style.top = '0'
    
    const newPhotoTitle = document.createElement('p')
    newPhotoTitle.innerText = 'Insira a URL da imagem:'
    newPhotoTitle.id = 'new-photo-title'
    
    const newPhoto = document.createElement('input')
    newPhoto.id = 'new-photo-input'
    
    const changeButton = document.createElement('button')
    changeButton.innerText = 'Done'
    changeButton.id = 'new-photo-button'

    const modal = document.querySelector('div.modal')
    modal.append(newPhotoTitle, newPhoto, changeButton)
    
    
    changeButton.addEventListener('click', function(){
        
        if(document.querySelector('#new-photo-input').value == ''){
            alert('Insira algo antes de concluir!')
            return
        } else {
            profilePicture = document.querySelector('#new-photo-input').value
            document.getElementById('user-picture').src = profilePicture
            document.getElementById('modal').style.top = '-100%'
        }
        document.getElementById('new-photo-title').remove()
        document.getElementById('new-photo-input').remove()
        document.getElementById('new-photo-button').remove()
    })
    document.getElementById('close-modal').addEventListener('click', function(){
        document.getElementById('new-photo-title').remove()
        document.getElementById('new-photo-input').remove()
        document.getElementById('new-photo-button').remove()
    })
}