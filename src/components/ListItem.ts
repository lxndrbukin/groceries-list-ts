import { View } from '../views/View';
import { ItemProps } from './types';

export class ListItem extends View {
  constructor(public parent: Element, public item: ItemProps) {
    super(parent);
  }

  eventsMap(): { [key: string]: () => void; } {
    return {
      'click:.del': () => {
        this.item = { ...this.item, data: '' };
        this.render();
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