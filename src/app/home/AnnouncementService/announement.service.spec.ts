import { TestBed } from '@angular/core/testing';

import { AnnounementService } from './announement.service';

describe('AnnounementService', () => {
  let service: AnnounementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnounementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
