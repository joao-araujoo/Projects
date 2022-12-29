let profilePicture = 'https://www.promoview.com.br/uploads/2017/04/b72a1cfe.png'
let profileName = 'Anônimo'
let postOrder = 1
let easterEggCount = 0

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
    userPicture.height = 20
    const userName = document.createElement('h4')
    userName.innerText = profileName
    user.append(userPicture, userName)
    top.appendChild(user)

    const deleteButton = document.createElement('button')
    deleteButton.className = 'delete-button'
    deleteButton.id = `post-${postOrder}`
    deleteButton.innerText = 'x'
    deleteButton.addEventListener('click', function(ev){
        if(confirm('Tem certeza de que deseja apagar este post?')){
            const postToDelete = document.getElementById(ev.currentTarget.id)
            postToDelete.remove()
        }
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

    postDate.appendChild(heartButton)
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

function easterEggButton(){
    easterEggCount++
    const easterEggContent = document.getElementById('easterEggContent')
    switch(easterEggCount){
        case 5:
            easterEggContent.innerText = "I told you, it's impossible to erase me, rs"
            break
        case 10:
            easterEggContent.innerText = "bro, why are you so insistent??? stop trying"
            break
        case 15:
            easterEggContent.innerText = "LOL 🤣😂🤣😂😂🤣😂🤣🤣😂🤣😂😂🤣🤣🤣😂🤣😂😂🤣🤣🤣😂🤣😂🤣😂🤣😂🤣😂😂"
            break
        case 20:
            easterEggContent.innerText = "I ALREADY TOLD YOU, YOU CANT REMOVE ME MF"
            break
        case 25:
            easterEggContent.innerText = "ok... you won...💔💔"
            break
        case 30:
            easterEggContent.innerText = "JUST KIDDING LOL NO CLUE YOU BELIEVED"
            break
    }
    if(easterEggCount > 34){
        easterEggContent.innerText = "now i'm serious, stop before your mom comes and curses you because you haven't showered yet, you greasy"
    }
}

function jamalHeartPressed(){
    if(document.getElementById('jamal-heart').src == 'https://cdn-icons-png.flaticon.com/512/833/833300.png'){
        document.getElementById('jamal-heart').src = 'https://cdn-icons-png.flaticon.com/512/833/833472.png'
    } else {
        document.getElementById('jamal-heart').src = 'https://cdn-icons-png.flaticon.com/512/833/833300.png'
    }
}