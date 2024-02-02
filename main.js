const main = document.querySelector('main')
const containerTodo = document.querySelector("#container-todo")
const todoList = document.querySelector('#todo-list')
const add = document.querySelector("button")
const input = document.querySelector("#input")
let contador = 0;
input.focus()

const addTodo = ()=>{
    if (input.value =='') {
        input.style.borderColor = 'red'
        alert('Insira uma tarefa')

        input.focus()

    } else {
        const newTodo = document.createElement('div')
        const button = document.createElement('button')
        const span = document.createElement('span')
        const containerSpan = document.createElement('div');

        containerSpan.classList.add('new-container')
        newTodo.classList.add('new-todo')
        button.classList.add('new-button')
        span.classList.add('span-contador')

        contador++   
        span.innerHTML = `${contador}. <span style="color: white;">${input.value}</span>`
        button.innerText = 'excluir'

        const todos = document.querySelectorAll('.new-todo')

        containerTodo.insertBefore(newTodo,todos[0])  
        containerSpan.appendChild(span)

        if (containerTodo.children.length == 2){
            todoList.style.marginBottom = '2rem'
        }

        newTodo.append(containerSpan,button)
        for (let i = 0; i < todos.length; i++) {
            containerTodo.appendChild(todos[i]);
        }

        const adicionado = document.createElement('div')
        adicionado.classList.add('adicionado')
        adicionado.innerHTML = 'Conteudo adicionado'
        adicionado.style.display = 'block'
        main.append(adicionado)
        setTimeout(() => {
            adicionado.style.display = 'none'
        }, 1000);
    
        input.focus()
        input.placeholder = ''
        input.value = ''

        button.addEventListener('click',()=>{
            newTodo.remove()
            contador--          
            if(containerTodo.children.length < 2){
                todoList.style.marginBottom = '0'
            }  
    
            const deletado = document.createElement('div')
            deletado.classList.add('deletado')
            deletado.innerHTML = 'Conteudo Deletado'
            deletado.style.display = 'block'
            main.append(deletado)
            setTimeout(() => {
                deletado.style.display = 'none'
            }, 1000);
        })
    }
}

input.addEventListener('click',()=>{
    input.style.borderColor = '#252527'
    input.placeholder = ''
})

input.addEventListener('keyup',(event)=>{
    input.style.borderColor = '#252527'
    if (event.key == "Enter") {
        addTodo()   
    }
})

add.addEventListener('click',()=>{
    addTodo()
})

