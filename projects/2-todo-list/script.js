
function populateTodoList(todos) {
  
  
   todos.forEach(addToDoo);

}




function addToDoo (add) {
  
  let list = document.querySelector('#todo-list');
  let li = document.createElement('li');
  li.innerHTML = add.task
  console.log(add.task);
  li.className = 'list-group-item d-flex justify-content-between align-items-center'
  list.appendChild(li)
  let span = document.createElement('span')
  span.classList =  'badge bg-primary rounded-pill'
  li.appendChild(span);
  const completedButton = document.createElement("button");
  completedButton.classList = 'fa fa-check'
  span.appendChild(completedButton);
  //Create trash button
  const trashButton = document.createElement("button");
 
  trashButton.classList = 'fa fa-trash'
  span.appendChild(trashButton);
  
}




let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];





populateTodoList(todos);

function deleteAllCompletedTodos() {

}
