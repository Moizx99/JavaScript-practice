const todoList = [];

rendorTodoList();

function rendorTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  document.querySelector('.js-show-result').innerHTML = todoListHTML;
}


function addTodo() {
  const inputElement = document.querySelector('.js-todo-name');
  const name = inputElement.value;

  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';

  rendorTodoList()
}