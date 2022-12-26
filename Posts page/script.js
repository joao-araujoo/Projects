let profilePicture = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSMDqDPHw6nv-15k9U6_sDvRVwqZqh4K9HQ&usqp=CAU'
let profileName = 'Joaozinho'

function createPost(){
    const postsSection = document.querySelector('section.posts')
    const post = document.createElement('div')
    post.className = 'post'

    const user = document.createElement('div')
    user.className = 'user'

    const userPicture = document.createElement('img')
    userPicture.src = profilePicture
    userPicture.width = 20
    const userName = document.createElement('h4')
    userName.innerText = profileName
    user.append(userPicture, userName)

    const content = document.createElement('div')
    content.className = 'content'
    content.innerText = prompt('Insira o conteúdo do post:')

    const date = new Date()
    const postDay = date.getDate()
    const postMonth = date.getMonth() + 1
    const postHour = date.getHours()
    const postMinutes = date.getMinutes()
    const postDate = document.createElement('div')
    postDate.className = 'date'
    postDate.innerText = `${postDay}/${postMonth}, ${postHour}:${postMinutes}`

    post.append(user, content, postDate)
    postsSection.appendChild(post)

    console.log({postDay, postMonth, postHour, postMinutes})
}