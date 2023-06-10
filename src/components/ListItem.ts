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
      'click:.edit': this.showEditOnClick,
      'click:.save': this.onClickSetUpdate,
    };
  }

  onClickDelete = (): void => {
    this.model.delete(this.item);
  };

  showEditOnClick = (): void => {
    this.item.editing = !this.item.editing;
    this.model.trigger('change');
  };

  onClickSetUpdate = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const update = {
        id: this.item.id,
        data: input.value,
        editing: false
      };
      this.model.set(update);
    }
  };

  renderEdit(): string {
    if (!this.item.editing) {
      return /*html*/ `
        <div class='list-item'>
          <div class='list-item-data'>
            <span>${this.item.data}</span>
          </div>
          <div class='list-item-btns'>
            <button class='btn edit'>EDIT</button>
            <button class='btn del'>DEL</button>
          </div>
        </div>
      `;
    }
    return /*html*/ `
      <div class='list-item'>
        <div class='list-item-data'>
          <input value='${this.item.data}' />
        </div>
        <div class='list-item-btns'>
          <button class='btn save'>SAVE</button>
        </div>
      </div>
    `;
  }

  template(): string {
    return this.renderEdit();
  }
}