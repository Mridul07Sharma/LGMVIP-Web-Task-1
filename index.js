const form = document.querySelector("#submission");
let list = document.querySelector('#todo-display');
const items = document.querySelector('#todo');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let todo = items.value;
    let newTodo = document.createElement('div');
    let remove = document.createElement('button');
    newTodo.classList.add('setting');
    remove.classList.add('styling');
    newTodo.innerText = todo;
    remove.innerHTML = "<i class='fas fa-trash'></i>"
    list.append(newTodo);
    list.append(remove);
    items.value = "";
    remove.addEventListener('click', function () {
        newTodo.style.textDecoration = "line-through";
        newTodo.style.color = "white";
        newTodo.style.backgroundColor = "#937DC2";
        remove.innerHTML = "<i class='fas fa-check'></i>";
    })

})
