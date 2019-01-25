import { UserAttrs } from './user-attrs';

export class User implements UserAttrs {
  
    _id: string;
    email: string;
    username: string;
    avatar: string;
    active: boolean;

    constructor(attrs: Partial<UserAttrs>) {
        this._id = attrs._id;
        this.email = attrs.email;
        this.username = attrs.username;
        this.avatar = attrs.avatar;
        this.active = attrs.active;
    }
}
