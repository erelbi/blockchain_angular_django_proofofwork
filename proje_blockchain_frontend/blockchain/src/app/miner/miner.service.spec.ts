import { TestBed } from '@angular/core/testing';

import { MinerService } from './miner.service';

describe('MinerService', () => {
  let service: MinerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
