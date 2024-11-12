import { render } from "../framework/render.js";
import BookListComponent from "../view/book-list-component.js";
import BookComponent from "../view/bookComponent.js";

//this is where the list of boosk will be presented
export default class BookListPresenter{
  #booklistComponent = new BookListComponent();
  #bookslistContainer =null;
  #booksModel = null;

   constructor({bookListContainer, booksModel}){
      this.#bookslistContainer = bookListContainer;
      this.#booksModel = booksModel;
      this.#booksModel.addObserver(this.#handleModelChange.bind(this))
   }
   init(){
    render(this.#booklistComponent,this.#bookslistContainer)
    this.#renderBookslist();
       }
   //this function renders and displays our html element of the html doc
   #renderBookslist(){
    for (let index = 0; index < this.#booksModel.books.length; index++) {
      const b =this.#booksModel.books[index]
      //create book component
      const bookComponent =  new BookComponent({book:b,onDeleteclick:()=>this.deleteBook(b)})
    //display
    render(bookComponent,this.#booklistComponent.getelement())
  
   }
} 
deleteBook(book){
  console.log("happening")
   this.#booksModel.deleteBook(book.id)
}

//this function when will be called when we add a new book to the books list
#handleModelChange(){
  this.#clearbookslistSection()
  this.#renderBookslist();
}
#clearbookslistSection(){
  this.#booklistComponent.getelement().innerHTML='';
}
addBook(){
  const title = document.querySelector('#book-title');
  const author = document.querySelector('#book-author');
  const genre = document.querySelector('#book-genre');
  if (!title||!author||!genre){
    return
  }
  this.#booksModel.addBook({'id':Math.floor(Math.random() * 101),'title':title.value,'author':author.value,'genre':genre.value})

  document.querySelector('#book-title').value=''
  document.querySelector('#book-author').value=''
  document.querySelector('#book-genre').value=''

}
}
