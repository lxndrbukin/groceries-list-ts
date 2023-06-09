import { View } from '../views/View';
import { User } from '../models/User';
import { Props } from './types';

export class ListItem extends View<User, Props> {
  constructor(public parent: Element, public model: User, public item: Props) {
    super(parent, model);
  }

  eventsMap(): { [key: string]: () => void; } {
    return {
      'click:.del': () => {
        this.model.delete(this.item);
        console.log(this.model.get());
      }
    };
  }

  template(): string {
    return /*html*/ `
      <div class='list-item'>
        <div class='list-item-data'>
          ${this.item.data}
        </div>
        <div class='list-item-btns'>
          <button class='btn edit'>EDIT</button>
          <button class='btn del'>DEL</button>
        </div>
      </div>
    `;
  }
}