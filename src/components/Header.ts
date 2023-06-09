import { View } from '../views/View';
import { User } from '../models/User';
import { Props } from './types';

export class Header extends View<User, Props> {
  template(): string {
    return /*html*/ `
      <div class='header'>
        <h3>Goodies List</h3>
      </div>
    `;
  }
}
