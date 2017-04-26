import { TestBed, async, inject } from '@angular/core/testing';

import { MycanactivateGuard } from './mycanactivate.guard';

describe('MycanactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MycanactivateGuard]
    });
  });

  it('should ...', inject([MycanactivateGuard], (guard: MycanactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
