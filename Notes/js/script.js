const colors = ['#FEC872', '#FD9C71', '#E4ED90', '#B490FA', '#01D4FF']
let lastColor
let newColor

//Select a random color from the array 'Colors'
const randomColor = () => colors[Math.floor(Math.random() * 5)]

//when clicking the "+" button
document.getElementById('add-notes-btn').addEventListener('click', function(){
    //notes section
    const notesContainer = document.querySelector('.notes')

    //main div 'note'
    const note = document.createElement('div')
    note.className = 'note'

    //gives a random background-color to the note
    do {
        newColor = randomColor()
    } while(newColor === lastColor)
    lastColor = newColor
    note.style.backgroundColor = newColor

    //div 'text'
    const text = document.createElement('div')
    text.className = 'text'

    //paragraph inside the 'text' div
    const paragraph = document.createElement('p')
    paragraph.className = 'paragraph'
    paragraph.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, blanditiis?'
    paragraph.contentEditable = false

    //div 'footer'
    const footer = document.createElement('div')
    footer.className = 'footer'

    //elements inside 'footer' div
    const data = document.createElement('p')
    data.className = 'data'
    data.innerText = 'Fev 18, 2023'

    const editBtn = document.createElement('button')
    editBtn.className = 'edit-btn'
    editBtn.innerText = '✎'
    editBtn.addEventListener('click', function(){
        paragraph.contentEditable = true
        paragraph.focus()
        note.addEventListener('dblclick', () => paragraph.contentEditable = false)
        notesContainer.addEventListener('dblclick', () => paragraph.contentEditable = false)
    })

    notesContainer.appendChild(note)
    note.append(text, footer)
    text.appendChild(paragraph)
    footer.append(data, editBtn)
})