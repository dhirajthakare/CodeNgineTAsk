import { TestBed } from '@angular/core/testing';

import { MiddlewareserviceService } from './middlewareservice.service';

describe('MiddlewareserviceService', () => {
  let service: MiddlewareserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiddlewareserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
