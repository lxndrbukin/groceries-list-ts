import { View } from '../views/View';
import { User } from '../models/User';
import { Props } from './types';

export class ListItem extends View<User, Props> {
  constructor(public parent: Element, public model: User, public item: Props) {
    super(parent, model);
  }

  eventsMap(): { [key: string]: () => void; } {
    return {
      'click:.del': this.onClickDelete,
      'click:.edit': this.showEditOnClick
    };
  }

  onClickDelete = (): void => {
    this.model.delete(this.item);
  };

  showEditOnClick = (): void => {
    this.item.editing = !this.item.editing;
    this.model.trigger('change');
  };

  renderEdit(): string {
    if (!this.item.editing) {
      return /*html*/ `
        <span>${this.item.data}</span>
      `;
    }
    return /*html*/ `
      <input value='${this.item.data}' />
    `;
  }

  template(): string {
    return /*html*/ `
      <div class='list-item'>
        <div class='list-item-data'>
          ${this.renderEdit()}
        </div>
        <div class='list-item-btns'>
          <button class='btn edit'>EDIT</button>
          <button class='btn del'>DEL</button>
        </div>
      </div>
    `;
  }
}