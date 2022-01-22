
function populateTodoList(todos) {
  
  
    todos.forEach(addToDoo)

}




function addToDoo (add) {
  
  let list = document.querySelector('#todo-list');
  let li = document.createElement('li');
  li.innerHTML = add.task
  li.className = 'list-group-item d-flex justify-content-between align-items-center'
  list.appendChild(li)
  let span = document.createElement('span')
  span.classList =  'badge bg-primary rounded-pill'
  li.appendChild(span);
  let a = document.createElement('i')
  a.className = 'fa fa-check'
  span.appendChild(a)
  // let iT = document.createElement('i')
  // a.className = 'fa fa-trash'
  // span.appendChild(iT)
}




let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];





populateTodoList(todos);

function deleteAllCompletedTodos() {

}
