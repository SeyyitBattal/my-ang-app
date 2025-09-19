import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})

export class ProductService{
getProducts() : Product[]{
    return[
        {name: "Telephone", quantity: 2125656},
        {name: "Tablet", quantity: 3134534},
        {name: "Type-c cable", quantity: 6545434},
        ];
    }
}

export class Product{
    name: String;
    quantity: number;
}