const addButton = document.getElementById('add')
addButton.addEventListener('click', addTask)

function addTask(){
    const taskText = document.querySelector('input#taskText').value
    if(taskText !== ''){
        const tasksSection = document.querySelector('div.tasks')
    
        const task = document.createElement('div')
        task.className = 'task'
    
        const taskParagraph = document.createElement('p')
        taskParagraph.innerText = taskText
    
        const doneButton = document.createElement('button')
        doneButton.innerText = '✔️'
    
        const removeButton = document.createElement('button')
        removeButton.innerText = '❌'
        removeButton.addEventListener('click', function(){
            task.remove()
        })
    
        task.append(taskParagraph, doneButton, removeButton)
        tasksSection.appendChild(task)
        document.querySelector('input#taskText').value = ''
    } else {
        alert('Insira alguma tarefa!')
    }
}