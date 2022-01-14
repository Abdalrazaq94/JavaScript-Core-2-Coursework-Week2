function readingList(books) {
   let dom = document.querySelector('div')
   let df = document.createDocumentFragment()


   let div = document.createElement('div').style.color = green
   let ul = document.createElement('ul')
   
   ul.innerHTML = `<li>${books.title}</li>`

  df.appendChild(div)
  df.appendChild(ul)
  dom.appendChild(df)
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);