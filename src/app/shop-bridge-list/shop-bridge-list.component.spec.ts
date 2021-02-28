import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBridgeListComponent } from './shop-bridge-list.component';

describe('ShopBridgeListComponent', () => {
  let component: ShopBridgeListComponent;
  let fixture: ComponentFixture<ShopBridgeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopBridgeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopBridgeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
