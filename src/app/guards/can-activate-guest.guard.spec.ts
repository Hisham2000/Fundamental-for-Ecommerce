import { TestBed } from '@angular/core/testing';

import { CanActivateGuestGuard } from './can-activate-guest.guard';

describe('CanActivateGuestGuard', () => {
  let guard: CanActivateGuestGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateGuestGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
