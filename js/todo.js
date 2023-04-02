// const toDoForm = document.querySelector('#todo-form')
// const todoInput = toDoForm.querySelector('input')
// const todoDiv = document.querySelector('#todo-list')
// const toDoList = document.querySelector('#todo-task')
// let toDos = [];

// function saveToDos(){
//     const todoTitle = document.querySelector('#todo-title')
//     localStorage.setItem(todoTitle.textContent, JSON.stringify(toDos))
// }

// function deleteToDo(e){
//   // 클릭한 버튼의 부모엘리먼트를 삭제
//   const li = e.target.parentElement;
//   li.remove();
//   toDos = toDos.filter((todo)=> todo.id !== parseInt(li.id));
//   saveToDos();
// }

// function paintToDo(newTodo){
//   const li = document.createElement('li');
//   li.id = newTodo.id
//   const span = document.createElement('span')
//   span.innerText = newTodo.text;
//   span.style.cursor = 'pointer';
//   span.addEventListener('click',()=>{
//     if(span.classList.contains('click')){
//         span.classList.remove('click')
//     }else {
//         span.classList.add('click')
//     }  
//   })
//   const button = document.createElement('button')
//   button.style.border = 'none'
//   button.style.backgroundColor='white'
//   button.style.marginLeft = '10px'
//   button.innerText = "❌";
//   button.addEventListener('click',deleteToDo)
//   li.appendChild(span);
//   li.appendChild(button);
//   toDoList.appendChild(li)
// }

// function handlerToDoSubmit(e){
    
//     e.preventDefault();
//     const newTodo = todoInput.value;
//     todoInput.value = ""
//     const newToDoObj = {
//         text: newTodo,
//         id: Date.now(),
//     }
//     toDos.push(newToDoObj)
//     paintToDo(newToDoObj)
//     saveToDos();
// }

// toDoForm.addEventListener('submit', handlerToDoSubmit)

// const savedToDos = localStorage.getItem(todoTitle.textContent)
// const nullObj={
//     text: "",
//     id: Date.now(),
// }
// if(savedToDos !==null){
//     const parsedToDos = JSON.parse(savedToDos);
//     toDos = parsedToDos
//     parsedToDos.forEach(paintToDo)
// }
// else if(savedToDos === null){
// }
