import { TestBed } from '@angular/core/testing';

import { DataIntentService } from './data-intent.service';

describe('DataIntentService', () => {
  let service: DataIntentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataIntentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
