
export class Book {
    _id: number;
    name: string;
    description: string;
    grade: string;
    price: number;
    discount: boolean;
    picture: string;

    constructor(obj?:any) {
        this._id = obj && obj._id || 0;
        this.name = obj && obj.name || "";
        this.grade = obj && obj.grade || "";
        this.description = obj && obj.description || "";
        this.price = obj && obj.price || 0;
        this.picture = obj && obj.picture || "";
        this.discount = obj && obj.discount || null;
    }
}