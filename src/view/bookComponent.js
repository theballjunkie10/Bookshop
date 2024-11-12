
import { createElement } from "../framework/render.js";

function createBookComponentTemplate(book) {
  const {title,author,genre}=book

  return(
    `<div class="book">
  <h3 class="book-title" > Title: ${title}</h3>
  <p class="book-author">Author: ${author}</p>
  <p class="book-genre">Genre:${genre}</p>
  <button class = "delete-button">delete book</button>
</div>`
  )
}
export default class BookComponent{
  #handleClick= null
  #clickHandler=(evt)=>{
    evt.preventDefault()
    this.#handleClick()

  }

    constructor({book,onDeleteclick}){
      this.book = book;
      this.#handleClick =onDeleteclick
      this.getelement().addEventListener("click",this.#clickHandler)
    }

    get template(){
      return createBookComponentTemplate(this.book)
      }

      getelement(){
        if (!this.element){
          this.element=createElement(this.template)
        }
        return this.element;
      }

}
  
