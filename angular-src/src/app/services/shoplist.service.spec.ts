import { TestBed, inject } from '@angular/core/testing';

import { ShoplistService } from './shoplist.service';

describe('ShoplistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoplistService]
    });
  });

  it('should be created', inject([ShoplistService], (service: ShoplistService) => {
    expect(service).toBeTruthy();
  }));
});
