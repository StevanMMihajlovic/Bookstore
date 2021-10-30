import { Book } from "./book.model";

export class BookList {
    results: Book[];

    constructor(obj?:any) {
        this.results = obj && obj.results && obj.results.map((x:any) => {
            return new Book(x);
        }) || [];
    }
}