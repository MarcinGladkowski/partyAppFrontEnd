import { TestBed, inject } from '@angular/core/testing';

import { PartyListsService } from './party-lists.service';

describe('PartyListsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartyListsService]
    });
  });

  it('should be created', inject([PartyListsService], (service: PartyListsService) => {
    expect(service).toBeTruthy();
  }));
});
