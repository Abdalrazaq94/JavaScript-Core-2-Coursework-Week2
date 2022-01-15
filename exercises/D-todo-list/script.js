function todoList(todos) {
 
  
  todos.forEach(function (element) {


    let doc = document.querySelector('div')
  
    let shop = document.createElement('li')
    shop.innerHTML = `<a>${element.todo}<a/>`
  
    
    
  
    doc.append(shop)
  })

}


const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);