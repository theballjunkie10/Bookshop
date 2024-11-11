import { books } from "./mock/books.js";
import BookComponent from "./view/bookComponent..js";

const bookListContainer =  document.querySelector('.book-list')

for (let index = 0; index < books.length; index++) {
  //create book component
  const bookComponent =  new BookComponent({book:books[index]})

  bookListContainer.insertAdjacentElement('beforeend',bookComponent.getelement())
  
}