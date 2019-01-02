import { UserAttrs } from './user-attrs';
import { environment } from '../../environments/environment';

export class User implements UserAttrs {

    static defaultAvatar = 'defaultAvatar.png';

    _id: string;
    email: string;
    username: string;
    avatar: string;
    active: boolean;

    constructor(attrs: Partial<UserAttrs>) {
        this._id = attrs._id;
        this.email = attrs.email;
        this.username = attrs.username;
        this.avatar = `${environment.upload}/avatar/${(attrs.avatar || User.defaultAvatar)}`;
        this.active = attrs.active;
    }
}
