import { TestBed } from '@angular/core/testing';

import { PartyInvitesService } from './party-invites.service';

describe('PartyInvitesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartyInvitesService = TestBed.get(PartyInvitesService);
    expect(service).toBeTruthy();
  });
});
