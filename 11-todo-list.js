const todoList = [];

rendorTodoList();

function rendorTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;

    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${i}, 1);
      rendorTodoList();
      " class="delete-button-css">delete</button>
    `;
    todoListHTML += html;
  }
  document.querySelector('.js-show-result').innerHTML = todoListHTML;
} 


function addTodo() {
  const inputElement = document.querySelector('.js-todo-name');
  const name = inputElement.value;

  const dueDateELement = document.querySelector('.js-due-date');
  const dueDate = dueDateELement.value;

  todoList.push({
    name,
    dueDate
  });

  inputElement.value = '';

  rendorTodoList()
}