const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
let toDos = [];

const TODOS_KEY = "todos";

function handleDeleteBtn(event) {
    const li = event.target.parentElement;
    

    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    li.style.listStyle = "none";
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.style.margin = "10px"
    span.style.backgroundColor = "yellow"
    span.style.padding = "3px 1em 3px 1em"
    button.style.backgroundColor = "white";
    button.style.border = "none";
    button.style.marginLeft = "1em"


    li.appendChild(span);
    span.innerText = newTodo.text;
    li.appendChild(button);
    button.innerText = "Done! Good Job! ❌";
    button.addEventListener("click", handleDeleteBtn)
    // 여기까지는 li 안에 newToDo의 정보를 담은 span을 자식으로 넣어준다.
    toDoList.appendChild(li);
    // 앞서 만들어 둔 li를 todo list에 자식으로 포함시킨다.
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = ""; //submit 이후 placeholder의 내용을 빈 문자열로 바꿔주기 위함
    const newToDoObj ={
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    /* 
    parsedToDos.forEach(toDo => {
        paintToDo(toDo)
    }); 
    */
    // 또는
    toDos = parsedToDos; // 이 부분은 refresh할 경우 toDos가 빈 Array로 다시 선언이 되는데, 그래서 덮어쓰는 효과가 난다. 이를 local storage에 저장된 toDos를 이용해 덮어쓰지 않도록 한다.
    parsedToDos.forEach(paintToDo);
}
