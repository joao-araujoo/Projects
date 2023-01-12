const addButton = document.getElementById('add')
addButton.addEventListener('click', addTask)

function addTask(){
    const taskText = document.querySelector('input#taskText').value
    if(taskText !== ''){
        const tasksSection = document.querySelector('div.tasks')
    
        const task = document.createElement('div')
        task.className = 'task'

        const task2 = document.createElement('div')
        task2.className = 'task2'
    
        const taskParagraph = document.createElement('p')
        taskParagraph.innerText = taskText
        taskParagraph.className = 'taskParagraph'
    
        const doneButton = document.createElement('button')
        doneButton.innerText = '✔️'
    
        const removeButton = document.createElement('button')
        removeButton.innerText = '❌'
        removeButton.addEventListener('click', function(){
            task.remove()
        })
    
        task2.append(taskParagraph, doneButton, removeButton)
        task.appendChild(task2)
        tasksSection.appendChild(task)
        document.querySelector('input#taskText').value = ''

    } else {
        alert('Insira alguma tarefa!')
    }
}