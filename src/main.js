import { render } from "./framework/render.js";
import { books } from "./mock/books.js";
import BooksModel from "./model/book-model.js";
import BookListPresenter from "./presenter/book-list-presenter.js";
import BookComponent from "./view/bookComponent.js";
import FormAddBookComponent from "./view/form-add-book-components.js";

const bookListContainer =  document.querySelector('.book-list')

const booksModel =new BooksModel()
//this capital b is a class
const bookListPresenter= new BookListPresenter({bookListContainer,booksModel})

const formAddBookComponent =new FormAddBookComponent({onclick:handleNewBookButtonClick});


const formContainer= document.querySelector('.book-form')
render(formAddBookComponent,formContainer)
bookListPresenter.init()

function handleNewBookButtonClick(){
  bookListPresenter.addBook()
}

