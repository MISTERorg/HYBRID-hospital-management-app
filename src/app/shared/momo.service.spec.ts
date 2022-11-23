import { TestBed } from '@angular/core/testing';

import { MomoService } from './momo.service';

describe('MomoService', () => {
  let service: MomoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MomoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
