import { TestBed } from '@angular/core/testing';

import { SpringService1Service } from './spring-service1.service';

describe('SpringService1Service', () => {
  let service: SpringService1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpringService1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
