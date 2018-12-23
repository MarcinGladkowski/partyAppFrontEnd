import { PartyInterface } from './party-interface';
import {User} from '../user/user';
import {PartyType} from './party-type/party-type';

export class Party implements PartyInterface {
  _id: string;
  createdDate: string;
  desc: string;
  latitude: number;
  longitude: number;
  name: string;
  participants: User[];
  partyType: PartyType;
  userCreated: User;

  constructor(attrs: Partial<PartyInterface>) {
    this._id = attrs._id;
    this.createdDate = attrs.createdDate;
    this.desc = attrs.desc;
    this.latitude = attrs.latitude;
    this.longitude = attrs.longitude;
    this.name = attrs.name;
    this.participants = attrs.participants;
    this.partyType = attrs.partyType;
    this.userCreated = attrs.userCreated;
  }
}
