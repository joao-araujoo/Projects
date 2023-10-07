const colors = ['#F5E3B5', '#FAC4BE', '#c4edc2', '#CCB8E0', '#DFF1F7']
let lastColor = ''
let newColor = ''

//Select a random color from the array 'Colors'
const randomColor = () => colors[Math.floor(Math.random() * 5)]

//Gets the real date
const getDate = function(){
    const date = new Date()
    
    let day = date.getDate()
    if(day < 10){
        day = `0${day}`
    }

    let month = date.getMonth() + 1
    switch(month){
        case 1:
            month = 'jan'
            break
        case 2:
            month = 'fev'
            break
        case 3:
            month = 'mar'
            break
        case 4:
            month = 'abr'
            break
        case 5:
            month = 'mai'
            break
        case 6:
            month = 'jun'
            break
        case 7:
            month = 'jul'
            break
        case 8:
            month = 'ago'
            break
        case 9:
            month = 'set'
            break
        case 10:
            month = 'out'
            break
        case 11:
            month = 'nov'
            break
        case 12:
            month = 'dez'
            break
    }
    
    let year = date.getFullYear()

    return `${month} ${day}, ${year}`
}

//when clicking the "+" button
document.getElementById('add-notes-btn').addEventListener('click', function(){
    //Open the modal to the user write his text
    document.querySelector('.modal-background').style.bottom = 0
    document.getElementById('orange').addEventListener('click', function(){
        newColor = colors[0] 
        document.querySelector('.modal').style.backgroundColor = colors[0]
    })
    document.getElementById('red').addEventListener('click', function(){
        newColor = colors[1] 
        document.querySelector('.modal').style.backgroundColor = colors[1]
    })
    document.getElementById('green').addEventListener('click', function(){
        newColor = colors[2] 
        document.querySelector('.modal').style.backgroundColor = colors[2]
    })
    document.getElementById('purple').addEventListener('click', function(){
        newColor = colors[3] 
        document.querySelector('.modal').style.backgroundColor = colors[3]
    })
    document.getElementById('blue').addEventListener('click', function(){
        newColor = colors[4] 
        document.querySelector('.modal').style.backgroundColor = colors[4]
    })
    document.getElementById('random').addEventListener('click', function(){
        newColor = ''
        document.querySelector('.modal').style.backgroundColor = '#f1f1f1'
    })
})

document.querySelector('.save-button').addEventListener('click', function(){
    
    let textarea = document.querySelector('#textarea').value
    
    //Verify if the textarea input has something 
    if(textarea != ''){
        
        //notes section
        const notesContainer = document.querySelector('.notes')
        
        //main div 'note'
        const note = document.createElement('div')
        note.className = 'note'
        
        //gives a random background-color to the note or use the selected by the user
        if(newColor == ''){
            do {
                newColor = randomColor()
            } while(newColor === lastColor)
            lastColor = newColor
        }
        note.style.backgroundColor = newColor
    
        //div 'text'
        const text = document.createElement('div')
        text.className = 'text'
    
        //paragraph inside the 'text' div
        const paragraph = document.createElement('p')
        paragraph.className = 'paragraph'
        paragraph.innerText = textarea
        paragraph.contentEditable = false
    
        //div 'footer'
        const footer = document.createElement('div')
        footer.className = 'footer'
    
        //elements inside 'footer' div
        const data = document.createElement('p')
        data.className = 'data'
        data.innerText = getDate()
        
    
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

        document.querySelector('.modal-background').style.bottom = '100%'
        document.querySelector('#textarea').value = ''
        document.querySelector('.modal').style.backgroundColor = '#fff'
        newColor = ''
    } else {
        alert('Type something!')
        document.querySelector('.modal-background').style.bottom = '100%'
        document.querySelector('.modal').style.backgroundColor = '#fff'
        newColor = ''
    }
})

//Close the modal when clicked
document.getElementById('close-modal').addEventListener('click', function(){
    document.querySelector('.modal-background').style.bottom = '100%'
    document.querySelector('#textarea').value = ''
    document.querySelector('.modal').style.backgroundColor = '#fff'
    newColor = ''
})

document.querySelector('.cancel-button').addEventListener('click', function(){
    document.querySelector('.modal-background').style.bottom = '100%'
    document.querySelector('#textarea').value = ''
    document.querySelector('.modal').style.backgroundColor = '#fff'
    newColor = ''
})