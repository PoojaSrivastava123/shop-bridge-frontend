import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ShopBridge } from '../model/shop-bridge.model';

@Injectable({
  providedIn: 'root'
})
export class ShopBridgeService {

  constructor(private httpClient : HttpClient){}

  postItem(data:ShopBridge){
    return this.httpClient.post(environment.baseUrl + "/save",data);
  }

  getItem(id : number){
    return this.httpClient.get(environment.baseUrl+"/"+id);
  }

  getAllItems(){
    return this.httpClient.get(environment.baseUrl +"/all");
  }

  deleteItem(id : number){
    return this.httpClient.delete(environment.baseUrl+"/"+id);
  }
}
