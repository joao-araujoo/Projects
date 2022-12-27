let profilePicture = 'https://www.promoview.com.br/uploads/2017/04/b72a1cfe.png'
let profileName = 'Anônimo'
let postOrder = 1

function createPost(){
    const postsSection = document.querySelector('section.posts')
    const post = document.createElement('div')
    post.className = 'post'
    post.id = `post-${postOrder}`

    const top = document.createElement('div')
    top.className = 'header'

    const user = document.createElement('div')
    user.className = 'user'

    const userPicture = document.createElement('img')
    userPicture.src = profilePicture
    userPicture.width = 20
    const userName = document.createElement('h4')
    userName.innerText = profileName
    user.append(userPicture, userName)
    top.appendChild(user)

    const deleteButton = document.createElement('button')
    deleteButton.className = 'delete-button'
    deleteButton.id = `post-${postOrder}`
    deleteButton.innerText = 'x'
    deleteButton.addEventListener('click', function(ev){
        const postToDelete = document.getElementById(ev.currentTarget.id)
        postToDelete.remove()
    })
    
    top.appendChild(deleteButton)

    const content = document.createElement('div')
    content.className = 'content'
    content.innerText = prompt('Insira o conteúdo do post:')
    if(content.innerText === ''){
        alert('Insira algum conteúdo para o post!')
        return
    }

    const date = new Date()
    let postDay = date.getDate()
    if(postDay < 10){
        postDay = `0${postDay}`
    }
    let postMonth = date.getMonth() + 1
    if(postMonth < 10){
        postMonth = `0${postMonth}`
    }
    let postHour = date.getHours()
    if(postHour < 10){
        postHour = `0${postHour}`
    }
    let postMinutes = date.getMinutes()
    if(postMinutes < 10){
        postMinutes = `0${postMinutes}`
    }
    const postDate = document.createElement('div')
    postDate.className = 'date'
    postDate.innerText = `${postDay}/${postMonth}, ${postHour}:${postMinutes}`

    post.append(top, content, postDate)
    postsSection.appendChild(post)

    postOrder++
}

function changeUserName(){
    profileName = prompt('Digite o novo nome de perfil:')
    if(profileName){
        document.getElementById('username').innerText = profileName
    } else {
        alert('Digite um nome válido!')
    }
}

function changeUserPhoto(){
    profilePicture = prompt('Insira o link da imagem:')
    if(profilePicture){
        document.getElementById('user-picture').src = profilePicture
        document.getElementById('user-picture').width = 50
    } else {
        alert('Insira algum link!')
    }
}