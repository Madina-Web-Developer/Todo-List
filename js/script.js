// ============ Dom Part Start ====================== //
let headinput    = document.querySelector('.headinput')
let headbutton   = document.querySelector('.headbutton')
let todoinput    = document.querySelector('.todoinput')
let todobutton1  = document.querySelector('.todobutton1')
let todobutton2  = document.querySelector('.todobutton2')
let todolist     = document.querySelector('.todolist')

// ============= Function Part Start==================//

headbutton.addEventListener('click', ()=>{
    if(headinput.value == ''){
        alert('Enter Your Text')
    }
    else{
        // =========Creat Element======================//
        let singletodo   = document.createElement('div')
        let todoinput    = document.createElement('input')
        let todobutton1  = document.createElement('button')
        let todobutton2  = document.createElement('button')

        // ==========Making Child=====================//
        todolist.appendChild(singletodo)
        singletodo.appendChild(todoinput)
        singletodo.appendChild(todobutton1)
        singletodo.appendChild(todobutton2)
        // =======Adding Css===========================//
        singletodo.classList.add('singletodo')
        todoinput.classList.add('todoinput')
        todobutton1.classList.add('todobutton1')
        todobutton2.classList.add('todobutton2')
        // ======= Adding Value=========================//
        todobutton1.innerHTML='Edit'
        todobutton2.innerHTML='Remove'
        // ========= Adding Value from Input Feild======//
        todoinput.value = headinput.value
        headinput.value = ''
        // ===== Setting attributes =====================//
        todoinput.setAttribute('readonly' , 'readonly')
        // ========= Removing Data=======================//
        todobutton2.addEventListener('click' , ()=>{

            singletodo.remove()
        })

    }
})



