import { TestBed } from '@angular/core/testing';

import { TabsGuardGuard } from './tabs.guard';

describe('TabsGuardGuard', () => {
  let guard: TabsGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TabsGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
