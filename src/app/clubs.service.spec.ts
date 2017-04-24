import { TestBed, inject } from '@angular/core/testing';

import { ClubsService } from './clubs.service';

describe('ClubsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClubsService]
    });
  });

  it('should ...', inject([ClubsService], (service: ClubsService) => {
    expect(service).toBeTruthy();
  }));
});
