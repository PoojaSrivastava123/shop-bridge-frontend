import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShopBridge } from 'src/app/model/shop-bridge.model';
import { ShopBridgeService } from 'src/app/service/shop-bridge.service';

@Component({
  selector: 'app-view-shop-bridge-list',
  templateUrl: './view-shop-bridge-list.component.html',
  styleUrls: ['./view-shop-bridge-list.component.css']
})
export class ViewShopBridgeListComponent implements OnInit {
  itemId : any;
  shopBridge  = new ShopBridge();
  response : any = new Response();

  constructor(private router: Router,private route: ActivatedRoute,private shopBridgeService : ShopBridgeService) {
    this.route.params.subscribe((param: Params) => {
      this.itemId = param["id"];
  })
   }

  ngOnInit(): void {
    this.shopBridgeService.getItem(this.itemId).subscribe(
      response => {
            this.response = response;
            if(!this.response.error){
               this.shopBridge.description = this.response.data.description;
               this.shopBridge.price = this.response.data.price;
               this.shopBridge.name = this.response.data.name;
               this.shopBridge.id = this.response.data.id;
               if(this.response.data.image != null){
                this.shopBridge.image = atob(this.response.data.image);
               }
            }
      }
    )
  }

}
