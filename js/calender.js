// pad method
Number.prototype.pad = function() {
    return this > 9 ? this : '0' + this;
  }

function calendarItem(date){
    const check = localStorage.getItem(date)
    if(check !== null && check.length > 2){
        console.log(check.length)
      return '✔'
    }
    else {
        return ''
    }
}

const prev = document.querySelector('.prevDay')
const next = document.querySelector('.nextDay')
const todoTitle = document.querySelector('#todo-title')
const toDoList = document.querySelector('#todo-task')

const makeCalendar = (item) =>{
    const currnetYear = new Date(item).getFullYear();
    const currnetMonth = new Date(item).getMonth() + 1;

    // 첫날의 요일 구하기 : 초기 시작위치를 위해서
    const firstDay = new Date(item.setDate(1)).getDay();
    // 마지막 날짜 구하기
    const lastDay = new Date(currnetYear, currnetMonth, 0).getDate();
    const nowMonth = new Date().getMonth()
    const nowYear = new Date().getFullYear()
    const today = new Date().getDate()
    console.log(today)
   
    // 남은 박스만큼 다음달 날짜 표시
    const limitDay = firstDay + lastDay;
    const nextDay = Math.ceil(limitDay / 7) * 7;

    let htmlDummy = "";

    // 한달 전 날짜 표시
    for(let i=0; i<firstDay; i++){
        htmlDummy += `<div class='noColor'></div>`;
    }
    
    // 이번달 날짜 표시
    for(let i=1; i<=lastDay; i++){
        const date = `${currnetYear}-${currnetMonth.pad()}-${i.pad()}`

        i === today?
        htmlDummy += `<div onclick="changeTitle(${i}, ${currnetYear}, ${currnetMonth})">
        ${`<span style="color:red">${i}</span>`}
        <p>
        ${calendarItem(date)}
        </p>
        </div>`
        :
        htmlDummy += `<div onclick="changeTitle(${i}, ${currnetYear}, ${currnetMonth})">
        ${`<span>${i}</span>`}
        <p style="color:red"; >
        ${calendarItem(date)}
        </p>
        </div>`

        
    }

    // 다음달 날짜 표시
    for(let i=limitDay; i < nextDay; i++){
        htmlDummy += `<div class='noColor'></div>`;
    }

    document.querySelector('.dateBoard').innerHTML = htmlDummy;
    document.querySelector('.dateTitle').innerText = 
    `${currnetYear}년 ${currnetMonth}월`;
}

function changeTitle(i, currnetYear, currnetMonth){
    todoTitle.innerText = `${currnetYear}-${currnetMonth.pad()}-${i.pad()}`
    const savedToDos = localStorage.getItem(todoTitle.textContent)
    const task = document.querySelector('#todo-task')
        if(savedToDos !==null && !task.firstChild){
            const parsedToDos = JSON.parse(savedToDos);
            toDos = parsedToDos
            parsedToDos.forEach(paintToDo)
        }
        else if(task.firstChild){
            nullToDo();
            const parsedToDos = JSON.parse(savedToDos);
            toDos = parsedToDos
            parsedToDos.forEach(paintToDo)
        }
        else if(savedToDos === null){
            nullToDo();
        }
    }

   

function nextMonth(){
    makeCalendar(new Date(date.setMonth(date.getMonth()+ 1)))
}

function prevMonth(){
    makeCalendar(new Date(date.setMonth(date.getMonth()- 1)))
}

/////  TODO
const toDoForm = document.querySelector('#todo-form')
const todoInput = toDoForm.querySelector('input')
const todoDiv = document.querySelector('#todo-list')
let toDos = [];

function saveToDos(){
    const todoTitle = document.querySelector('#todo-title')
    localStorage.setItem(todoTitle.textContent, JSON.stringify(toDos))
    const date = new Date();
    makeCalendar(date);
}

function deleteToDo(e){
  // 클릭한 버튼의 부모엘리먼트를 삭제
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo)=> todo.id !== parseInt(li.id));
  saveToDos();
  const date = new Date();
  makeCalendar(date);
}

function nullToDo(){
    const task = document.querySelector('#todo-task')
    while(task.firstChild){
        task.firstChild.remove()
    }
}

function paintToDo(newTodo){
  const li = document.createElement('li');
  li.id = newTodo.id
  const span = document.createElement('span')
  span.innerText = newTodo.text;
  span.style.cursor = 'pointer';
  span.addEventListener('click',()=>{
    if(span.classList.contains('click')){
        span.classList.remove('click')
    }else {
        span.classList.add('click')
    }  
  })
  const button = document.createElement('button')
  button.style.border = 'none'
  button.style.backgroundColor='white'
  button.style.marginLeft = '10px'
  button.innerText = "❌";
  button.addEventListener('click',deleteToDo)
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li)
}

function handlerToDoSubmit(e){
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = ""
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newToDoObj)
    paintToDo(newToDoObj)
    saveToDos();
}

const date = new Date();
makeCalendar(date);
toDoForm.addEventListener('submit', handlerToDoSubmit)
prev.addEventListener('click', prevMonth)
next.addEventListener('click', nextMonth)



