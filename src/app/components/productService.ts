import { Injectable } from "@angular/core";

//Eğer dependency injection yapılacaksa @Injectable decoratoru şart.
//Injectable ile işaretliyse o servistir.
@Injectable()
export class ProductService{

    constructor(private loadingService:LoadingService){
        loadingService.log();
    }

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

export class LoadingService{
log(){
    console.log("Loading...");
}
}