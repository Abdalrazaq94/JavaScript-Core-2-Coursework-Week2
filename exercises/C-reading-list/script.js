function readingList(books) {
   let dom = document.querySelector('div')
 
  //  - Iterate through the list of books.
  //  - For each book, create a `<p>` element with the book title and author and append it to the page.
  //  - Use a `<ul>` and `<li>` to display the books.
  //  - Add an `<img>` to each book that links to a URL of the book cover.
  //  - Change the style of the book depending on whether you have read it (green) or not (red).
  //  - All of your HTML should go inside the `<div>` with the id **"content"**.
   
    array.forEach(element => {
      let p = document.createElement('p')
      let au = document.createElement('p')

      p.innerHTML = element.title
      au.innerHTML = element.author

      
    });


   





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