let tasks = []
let qtyOfTasks = 0
let qtyItemsLeft = document.getElementById('qty-items-left')
let qtyCompleted = document.getElementById('qty-completed')
const tasksContainer = document.querySelector('.tasks-container')
const addTaskInput = document.getElementById('add-task')

addTaskInput.addEventListener('keydown', event => {
    if (event.code === 'Enter')
        addTask()
})

const loadTasksFromLocalStorage = () => {
    const userTasks = localStorage.getItem('user-tasks')
    const itemsLeft = localStorage.getItem('items-left')
    const completedTasks = localStorage.getItem('qty-completed')

    if (userTasks && itemsLeft && completedTasks) {
        tasks = JSON.parse(userTasks)
        qtyItemsLeft.innerText = itemsLeft
        qtyCompleted.innerText = completedTasks

        loadTasks()
    }
}

const updateLocalStorage = () => {
    localStorage.setItem('user-tasks', JSON.stringify(tasks))
    localStorage.setItem('items-left', qtyItemsLeft.innerText)
    localStorage.setItem('qty-completed', qtyCompleted.innerText)
}

const generateTaskHTML = (task, taskID) => {
    const isCompleted = task.done ? 'task-completed' : ''

    return `
        <div class="task" id="task-${taskID}">
            <label>
                <input type="checkbox" name="complete-task" id="checkbox-task-${taskID}" class="complete-task" onclick="completeTask(${taskID})" ${isCompleted ? 'checked' : ''}>
                <span></span>
            </label>
            <p class="task-content ${isCompleted}" id="task-content-${taskID}" ondblclick="editTask(${taskID})">${task.title}</p>
            <button class="remove-task" onclick="removeTask(${taskID})">✕</button>
        </div>`
}

const loadTasks = () => {
    tasksContainer.innerHTML = ''
    let taskID = 0

    tasks.forEach(task => {
        tasksContainer.innerHTML += generateTaskHTML(task, taskID)
        taskID++
    })
}

const loadActiveTasks = () => {
    tasksContainer.innerHTML = ''
    let taskID = 0

    tasks.forEach(task => {
        if (!task.done) {
            tasksContainer.innerHTML += generateTaskHTML(task, taskID)
            taskID++
        }
    })
}

const loadCompletedTasks = () => {
    tasksContainer.innerHTML = ''
    let taskID = 0

    tasks.forEach(task => {
        if (task.done) {
            tasksContainer.innerHTML += generateTaskHTML(task, taskID)
            taskID++
        }
    })
}

const addTask = () => {
    if (addTaskInput.value !== '') {
        tasks.push(
            {
                title: addTaskInput.value,
                done: false
            }
        )

        localStorage.setItem('user-tasks', tasks)

        addTaskInput.value = ''
        qtyOfTasks++
        qtyItemsLeft.innerText = Number(qtyItemsLeft.innerText) + 1

        loadTasks()
        updateLocalStorage()
    }
}

const completeTask = (taskID) => {
    let taskIsCompleted = tasks[taskID]
    if (taskIsCompleted.done) {
        taskIsCompleted.done = false
        qtyItemsLeft.innerText = Number(qtyItemsLeft.innerText) + 1
        qtyCompleted.innerText = Number(qtyCompleted.innerText) - 1
    } else {
        taskIsCompleted.done = true
        qtyItemsLeft.innerText = Number(qtyItemsLeft.innerText) - 1
        qtyCompleted.innerText = Number(qtyCompleted.innerText) + 1
    }

    const taskContent = document.getElementById(`task-content-${taskID}`)
    taskContent.classList.toggle('task-completed')
    updateLocalStorage()
}

const editTask = (taskID) => {
    if (!tasks[taskID].done) {
        const taskContent = document.getElementById(`task-content-${taskID}`)
        taskContent.contentEditable = true
        
        document.querySelector(`.tasks-container`).addEventListener('mouseleave', () => {
            taskContent.contentEditable = false
            tasks[taskID].title = taskContent.innerText
            updateLocalStorage()
        })
    }
}

const removeTask = (taskID) => {
    qtyOfTasks--
    if(tasks[taskID].done){
        qtyCompleted.innerText = Number(qtyCompleted.innerText) - 1
    } else {
        qtyItemsLeft.innerText = Number(qtyItemsLeft.innerText) - 1
    }

    tasks.splice(taskID, 1)

    updateLocalStorage()
    loadTasks()
}

const clearCompleted = () => {
    tasks = tasks.filter(task => !task.done)
    qtyCompleted.innerText = 0

    updateLocalStorage()
    loadTasks()
}

loadTasksFromLocalStorage()