function highlightWords(paragraph, colours) {



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







   let div = document.querySelector('div');
  let par = document.createElement('p')
   par.innerHTML =   `<spam>${paragraph.split('    ').join(- '')}<spam/>`;
   console.log(par);

   div.appendChild(par)
   div.appendChild(sel)

  par.onmouseover = function (params) {
    par.style.color = sel.value
  }
}



const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
