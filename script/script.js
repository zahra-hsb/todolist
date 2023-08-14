const $ = document;
const todoInput = $.querySelector('#todoInput')
const todoList = $.querySelector('.todo-list')
const currentParagraph = $.querySelector('.currentParagraph')

let deleteTodo = (e) => {
    e.target.parentElement.remove()
}
let doTodo = (e) => {
    let li = e.target
    li.classList.toggle('check')
    li.disabled = true
}

let addTodo = (e) => {
    if(e.key === 'Enter'){
        if(todoInput.value) {
            currentParagraph.classList.add('hide')
            

            let li = $.createElement('li')
            li.addEventListener('click', doTodo)

            let trash = $.createElement('i')
            trash.className = 'fa fa-trash'

            trash.addEventListener('click', deleteTodo)

            let link = $.createElement('a')
            link.innerHTML = todoInput.value

            li.append(link, trash)
            
            todoList.append(li)
            trash.addEventListener('click', deleteTodo)

            todoInput.value = ''
            
        } else {
            currentParagraph.classList.remove('hide')
            currentParagraph.textContent = 'this input could not be empty!!!'
            currentParagraph.style.color = 'red'
        }
    } 
}







todoInput.addEventListener('keydown', addTodo)