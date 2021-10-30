import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BookList } from 'src/app/model/book-list.model';
import { Book } from 'src/app/model/book.model';

@Component({
  selector: 'bs-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() books: BookList = new BookList();
  @Output() newBook: EventEmitter<Book> = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }

  addBook(book: Book):void{
    this.newBook.emit(book);
  }

}
