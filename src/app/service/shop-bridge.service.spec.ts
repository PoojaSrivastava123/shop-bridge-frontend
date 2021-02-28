import { TestBed } from '@angular/core/testing';

import { ShopBridgeService } from './shop-bridge.service';

describe('ShopBridgeService', () => {
  let service: ShopBridgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopBridgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
