export class ShopBridge {
    id : any;
    name: string = "";
    description: string = "";
    price: any;
    image : any;
}

export class Response{
    error : boolean = false;
    message : string = "";
    data : any = new ShopBridge();
}