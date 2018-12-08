import { PartyInterface } from './party-interface';

export class Party implements PartyInterface {
  _id: string;
  desc: string;
  name: string;
  type: string;
}
