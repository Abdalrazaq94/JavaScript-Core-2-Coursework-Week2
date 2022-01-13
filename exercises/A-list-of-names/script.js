let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);

function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  let names = document.createElement('h1')
  let job = document.createElement('h1')
  content.innerHTML = names 
  names.innerText = people[0].name
  
 
 

}

