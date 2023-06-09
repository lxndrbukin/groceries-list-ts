import { Model } from './Model';
import { Atrributes } from './Attributes';

interface Props {
  id: number,
  data?: string;
}

export class User extends Model<Props> {
  static build(attrs: Props[]): User {
    return new User(new Atrributes<Props>(attrs));
  }
}