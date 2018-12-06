import { UserAttrs } from './user-attrs';

export class User implements UserAttrs {

    static defaultAvatar = '/assets/defaultUser.png';

    _id: number;
    email: string;
    username: string;
    avatar: string;
    active: boolean;

    constructor(attrs: Partial<UserAttrs>) {
        this._id = attrs._id;
        this.email = attrs.email;
        this.username = attrs.username;
        this.avatar = attrs.avatar || User.defaultAvatar;
        this.active = attrs.active;
    }
}
