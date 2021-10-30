import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookList } from '../model/book-list.model';
import { Book } from '../model/book.model';
import { OrderComponent } from '../order/order.component';
import { BookService } from '../services/book.service';

@Component({
  selector: 'bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css']
})
export class BookStoreComponent implements OnInit {

  books: BookList = new BookList();
  cart: Book[] = [];
  showCart: boolean = true;
  sumBook: number = 0;
  noBook: number = 0;

  params={
    bestseller:false, 
    discount:false,
  }

  constructor(private service: BookService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks():void{
    this.service.getBooks(this.params).subscribe((data: BookList) => {
      this.books = data;
    })
  }

  addCart(book: Book):void{
    this.cart.push(book);
    this.showCart = false;
    this.noBook = this.cart.length;
    this.sumBook += book.price;
    this.sumBook = Number(this.sumBook.toFixed(2));
  }

  openDialog(cart: Book[], sumBook: number):void{
    const modalRef = this.modalService.open(OrderComponent);
    modalRef.componentInstance.cart = cart;
    modalRef.componentInstance.sumBook = sumBook;
    modalRef.componentInstance.emptycart.subscribe((receivedEntry) => {
      this.cart = [];
      this.showCart = true;
      })
  }

}
