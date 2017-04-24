import { TestBed, inject } from '@angular/core/testing';

import { LiveridesService } from './liverides.service';

describe('LiveridesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LiveridesService]
    });
  });

  it('should ...', inject([LiveridesService], (service: LiveridesService) => {
    expect(service).toBeTruthy();
  }));
});
