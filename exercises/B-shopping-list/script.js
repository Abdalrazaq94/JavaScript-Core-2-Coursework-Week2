function shoppingList(arrayOfPeople) {

shopping.forEach(function (element) {


  let doc = document.querySelector('div')

  let shop = document.createElement('ul')
  shop.innerHTML = `<li>${element}</li>`

  
  

  doc.append(shop)
})

}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
