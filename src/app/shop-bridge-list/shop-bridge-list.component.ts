import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Response, ShopBridge } from '../model/shop-bridge.model';
import { ShopBridgeService } from '../service/shop-bridge.service';
declare var $:any;

@Component({
  selector: 'app-shop-bridge-list',
  templateUrl: './shop-bridge-list.component.html',
  styleUrls: ['./shop-bridge-list.component.css']
})
export class ShopBridgeListComponent implements OnInit {
  itemId : any;
  shopBridge  = new ShopBridge();
  response : any = new Response();
  shopBridgeList : any =[]
  message : string = "";

  constructor(private router: Router,private shopBridgeService : ShopBridgeService,private toastr: ToastrService) { }

  ngOnInit(): void {
     this.getAllItems();
  }

  getAllItems(){
    this.shopBridgeList = [];
    this.shopBridgeService.getAllItems().subscribe(
      response => {
          this.response  = response;
          this.setResponse(this.response);
      },
      error => {
        this.toastr.error(error);
      }
    )
  }

  onFileChanged(event:any) {
    if(event.target.files.length > 0){
      var fileType = event.target.files[0].type;
      if(fileType.match(/image\/*/) == null){
          this.message = "Only images are supported";
          return;
      } 
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (event:any) => {
        var binaryString = event.target.result;
        this.shopBridge.image = btoa(binaryString);
     };
      reader.readAsDataURL(file);
  }
}

  saveItem(){
    this.shopBridgeService.postItem(this.shopBridge).subscribe(
      response => {
          this.response = response;
          $('#addItemsModal').modal('hide');
          if(!this.response.error){
            this.toastr.success(this.response.message);
            this.getAllItems();
          }
          else this.toastr.error(this.response.message);
      },error => {
        this.toastr.error(error);
      }
    )
  }

  deleteItem(){
    this.shopBridgeService.deleteItem(this.itemId).subscribe(
      response => {
            this.response = response;
            $('#deleteModal').modal('hide');
            if(!this.response.error){
              this.toastr.success(this.response.message);
              this.getAllItems();
            }
            else this.toastr.error(this.response.message);
      },error => {
        this.toastr.error(error);
      }
    )
  }

  setResponse(response : Response){
    if(!response.error){
      for(let data of response.data){
             let shopBridge = new ShopBridge();
             shopBridge.description = data.description;
             shopBridge.price = data.price;
             shopBridge.name = data.name;
             shopBridge.id = data.id;
             if(data.image != null){
             shopBridge.image = atob(data.image);
             }
             this.shopBridgeList.push(shopBridge);
      }
    }
  }

  resetModel(){
    this.shopBridge = new ShopBridge();
    this.message = "";
    $("#itemCreate").get(0).reset();
  }
}
