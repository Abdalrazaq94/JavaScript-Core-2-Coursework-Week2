function listOfColours(colours) {
  
let con = document.querySelector('div')

  let sel = document.createElement("select");
  let opt1 = document.createElement("option");
  let opt2 = document.createElement("option"); 
  let opt3 = document.createElement("option"); 
  let opt4 = document.createElement("option"); 
  let opt5 = document.createElement("option"); 
  let opt6 = document.createElement("option"); 

  opt1.value = "red";
opt1.text = "Option: red"  


opt2.value = "blue";
opt2.text = "Option: blue"

opt3.value = "green";
opt3.text = "Option: green"

opt4.value = "yellow";
opt4.text = "Option: yellow"

opt5.value = "pink";
opt5.text = "Option: pink"

opt6.value = "orange";
opt6.text = "Option: orange"


sel.add(opt1)

sel.add(opt2 )
sel.add(opt3)
sel.add(opt4)
sel.add(opt5)
sel.add(opt6)

con.appendChild(sel)
sel.addEventListener('click', function () {
   document.body.style.backgroundColor = sel.value
})
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
