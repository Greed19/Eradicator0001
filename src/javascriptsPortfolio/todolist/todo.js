const todoInput = document.querySelector('.todoInput');
const btnInput = document.querySelector('.btnInput');
const todoContainer = document.querySelector('.todoContainer');
const todoList = document.querySelector('.todoList');


// addEventListener
btnInput.addEventListener('click',addTodo);
todoList.addEventListener('click',checkAndDel);
todoInput.addEventListener('change',(e)=>{
    if(e.target.value.length > 0){
        console.log("df")
        btnInput.disabled = false;
    }
})
// functions
if(todoInput.value.length == 0){
    btnInput.disabled = true;
}
function addTodo(e){
    //prevent from submittin
    event.preventDefault();

    
    // create a Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add(`todoDiv`);
    todoList.appendChild(todoDiv)
    // create a li
    const todoItem = document.createElement('li');
    todoItem.classList.add(`todoItem`);
    todoItem.innerText = todoInput.value;
    todoDiv.appendChild(todoItem)

    //create div for check and delete
    const divDeleck = document.createElement('div');
    divDeleck.classList.add(`divDeleck`);
    todoItem.appendChild(divDeleck)

    // icon delete and check
    const iCheck = document.createElement(`button`)
    iCheck.innerHTML = `<i class='fas fa-check'></i>`
    iCheck.classList.add(`iCheck`);
    divDeleck.appendChild(iCheck);
    
    const iDel = document.createElement(`button`);
    iDel.innerHTML = `<i class='fas fa-trash'></i>`;
    iDel.classList.add(`iDel`);
    divDeleck.appendChild(iDel);

    todoInput.value = '';
}

function checkAndDel(e){
    // console.log(e.target) 
    const item = e.target;

    // delete
    if(item.classList[0] == 'iDel'){
        const todo = item.parentElement;
        const tryyy = todo.parentElement;
        const rem = tryyy.parentElement;
        console.log(tryyy)
        // todo.classList.add(`fall`)
        // todo.addEventListener('transitionend',function(){
        rem.remove();
        // })
    }
    if(item.classList[0] === 'iCheck'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}