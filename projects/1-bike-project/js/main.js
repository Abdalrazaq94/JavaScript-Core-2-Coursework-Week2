let blue =  document.querySelector('#blueBtn')
let orange =  document.querySelector('#orangeBtn')
let green =  document.querySelector('#greenBtn')


let jumbotron1 = document.querySelector('.jumbotron')
let donate = document.querySelector('#donate')
let voulnteer = document.querySelector('#volunteer')

blue.addEventListener('click', function does(params) {
    jumbotron1.style.background = '#588fbd'
   donate.style.background = '#ffa500'
    voulnteer.style.background = 'black'
})

orange.addEventListener('click', function ora(params) {
    jumbotron1.style.background = '#f0ad4e'
    donate.style.background = 'red'
    voulnteer.style.background = 'light gree'
})

green.addEventListener('click', function greenColor(params) {
    jumbotron1.style.background = '#87ca8a'
    donate.style.background = 'black'
    voulnteer.style.background = '`#wihte'
})

let names = document.querySelector('#example-text-input')


let form = document.querySelector('#form')

form.addEventListener('submit', function forming(e) {



   if (names.length === null || names.length === ''){
       alert('name is required')
   }
    if (form.length === null|| form.length === '' ){
        e.preventDefault()
    }
    
})

