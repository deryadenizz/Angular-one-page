import { TestBed } from '@angular/core/testing';

import { OnepageServiceService } from './onepage-service.service';

describe('OnepageServiceService', () => {
  let service: OnepageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnepageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
