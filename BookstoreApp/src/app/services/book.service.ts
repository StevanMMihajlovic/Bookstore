import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BookList } from '../model/book-list.model';

const baseURL = 'http://localhost:3000/api/books';
const baseURL2 = 'http://localhost:3000/api/orders';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(params?:any): Observable<BookList> {
    let queryParams = {}

    if(params) {
      queryParams = {
        params: new HttpParams()
        .set("bestseller", params.bestseller || "")
        .set("discount", params.discount || "")
      }
    }

    return this.http.get(baseURL, queryParams).pipe(map((data: any) => {
      return new BookList(data);
    }))
  }

  postOrder(order: any):Observable<any>{
		return this.http.post(baseURL2, order).pipe(map(
			data => { return data;}
		));
  }

}
