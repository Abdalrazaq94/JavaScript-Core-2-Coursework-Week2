let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];



function listOfNames(arrayOfPeople) {

  people.forEach(function (element) {
    let div = document.querySelector('div');

    let names = document.createElement('h1').innerHTML = element.name;
    let jobs  = document.createElement('h1').innerHTML = element.job;

    div.append(

    ` names is :${names}
    jobs is : ${jobs}
    `  
    )

    
  })

  }



listOfNames(people);