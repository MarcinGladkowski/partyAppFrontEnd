import {User} from '../../user/user';
import {Party} from '../party';

export interface PartyInviteInterface {
  _id: string;
  send: Boolean;
  userInvited: User;
  party: Party;
  createdDate: Date;
}
