import { TestBed } from '@angular/core/testing';

import { BlockCreatorService } from './block-creator.service';

describe('BlockCreatorService', () => {
  let service: BlockCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
