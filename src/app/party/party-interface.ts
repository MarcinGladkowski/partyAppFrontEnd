import {User} from '../user/user';
import {PartyType} from './party-type/party-type';

export interface PartyInterface {
    _id: string;
    name: string;
    desc: string;
    latitude: number;
    longitude: number;
    createdDate: string;
    partyType: PartyType;
    participants: User[];
    userCreated: User;
    priv: boolean;
}
