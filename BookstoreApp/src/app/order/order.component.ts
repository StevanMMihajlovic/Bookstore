import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Book } from '../model/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'bs-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() cart: Book[] = [];
  @Input() sumBook: number = 0;
  @Output() emptycart: EventEmitter<any> = new EventEmitter();

  order = {
    sumBook: 0,
    address: "",
    appartment: "",
    telephone: 0
  };

  constructor(private service: BookService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  orderBooks():void{
    if(this.order.address == ""){
      window.alert("Adresa je prazna u formi!");
      return;
    }
    if(this.order.appartment == ""){
      window.alert("Apartman je prazan u formi!");
      return;
    }
    if(this.order.telephone == 0){
      window.alert("Broj telefona je prazan u formi!");
      return;
    }

    this.service.postOrder(this.order).subscribe(
      data => {
        window.alert("Succesfull add of new order!");
        console.log(this.order);
        this.order = {
          sumBook: 0,
          address: "",
          appartment: "",
          telephone: 0
        };
        this.cart = [];
        this.emptycart.emit();
        this.activeModal.close();
        },
        error => {
          console.log("error: " + error.statusText);
        }
      );
    }

    deleteBook(i: number):void{
      this.cart.splice(i, 1);
      if(this.cart.length == 0){
        this.activeModal.close();
      }
    }

}
