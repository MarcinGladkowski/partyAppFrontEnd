import {PartyTypeInterface} from './party-type-interface';

export class PartyType implements  PartyTypeInterface {
  _id: string;
  createdDate: string;
  desc: string;
  filename: string;
  name: string;

  constructor(attrs: Partial<PartyTypeInterface>) {
    this._id = attrs._id;
    this.createdDate = attrs.createdDate;
    this.desc = attrs.desc;
    this.filename = attrs.filename;
    this.name = attrs.name;
  }
}
