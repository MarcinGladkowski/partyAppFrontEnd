import { Injectable } from '@angular/core';

@Injectable()
export class PartyListsService {

  partyEvents = [
    {
      id: 1,
      name: 'Domówka',
      desc: 'ciekawa impreza',
      latitude: 50.1826663,
      longitude: 19.1444923
    },
    {
      id: 2,
      name: 'Impreza muzyczna',
      desc: 'tylko Bach',
      latitude: 50.2548661,
      longitude: 19.0350241
    }
  ];

  getPartyLists() {
    return this.partyEvents;
  }

  constructor() { }

}
