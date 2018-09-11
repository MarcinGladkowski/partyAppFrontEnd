import { TestBed, inject } from '@angular/core/testing';

import { PartyTypeService } from './party-type.service';

describe('PartyTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartyTypeService]
    });
  });

  it('should be created', inject([PartyTypeService], (service: PartyTypeService) => {
    expect(service).toBeTruthy();
  }));
});
