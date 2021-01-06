import { TestBed } from '@angular/core/testing';

import { ChainViewService } from './chain-view.service';

describe('ChainViewService', () => {
  let service: ChainViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChainViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
