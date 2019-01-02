import {PartyInviteInterface} from './party-intive-interface';
import {Party} from '../party';
import {User} from '../../user/user';

export class PartyInvite implements PartyInviteInterface {

  _id: string;
  createdDate: Date;
  party: Party;
  send: Boolean;
  userInvited: User;

  constructor(attrs: Partial<PartyInviteInterface>) {
    this._id = attrs._id;
    this.createdDate = attrs.createdDate;
    this.party = attrs.party;
    this.send = attrs.send;
    this.userInvited = attrs.userInvited;
  }
}
