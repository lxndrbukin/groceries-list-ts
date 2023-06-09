import { Model } from './Model';
import { Atrributes } from './Attributes';
import { Events } from './Events';
import { Props } from '../components/types';

export class User extends Model<Props> {
  static build(attrs: Props[]): User {
    return new User(new Atrributes<Props>(attrs), new Events());
  }
}