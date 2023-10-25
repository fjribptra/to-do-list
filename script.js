const inputTask = document.getElementById('inputTask')
const addButton = document.getElementById('addButton')
const ul = document.querySelector('ul')

addButton.addEventListener('click', function() {

    if(inputTask.value == "") {
        alert("Tulis sesuatu!")
        return
    }

    const li = document.createElement('li')
            const div = document.createElement('div')
            div.setAttribute('id', 'taskWrapper')
            const p = document.createElement('p')
            p.setAttribute('class', 'task')
            p.innerHTML = inputTask.value
            div.appendChild(p)
            const button = document.createElement('button')
            button.setAttribute('id', 'deleteButton')
            button.innerHTML = 'X'
            li.append(div, button)
            ul.append(li)

    inputTask.value = ""
    saveData()
})

document.body.addEventListener('click', function(e) {
    if(e.target.id == 'deleteButton') {
        e.target.parentElement.remove()
        saveData()
    }
    if(e.target.classList == "task") {
        e.target.parentElement.classList.toggle('checkedItem')
        saveData()
    }
})

function saveData() {
    localStorage.setItem('data', ul.innerHTML)
}
function showTask() {
    ul.innerHTML = localStorage.getItem('data')
}

showTask()
