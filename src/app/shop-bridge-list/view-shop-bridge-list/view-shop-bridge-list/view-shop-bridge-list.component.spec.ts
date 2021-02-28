import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShopBridgeListComponent } from './view-shop-bridge-list.component';

describe('ViewShopBridgeListComponent', () => {
  let component: ViewShopBridgeListComponent;
  let fixture: ComponentFixture<ViewShopBridgeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewShopBridgeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShopBridgeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
