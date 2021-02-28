import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopBridgeListComponent } from './shop-bridge-list/shop-bridge-list.component';
import { ViewShopBridgeListComponent } from './shop-bridge-list/view-shop-bridge-list/view-shop-bridge-list/view-shop-bridge-list.component';

const routes: Routes = [
  {
    path: '',
    component: ShopBridgeListComponent,
    children: [
      { path: '', redirectTo: 'home' ,pathMatch: 'prefix'},
      { path: 'home', component : ShopBridgeListComponent }]
  },
  {
    path: 'home/item/:id',
    component: ViewShopBridgeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
