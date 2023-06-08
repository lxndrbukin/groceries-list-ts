import { View } from '../model/View';
import { ItemProps } from './types';

export class ListItem extends View {
  constructor(public parent: Element, public item: ItemProps) {
    super(parent);
  }

  template(): string {
    return `
      <div class='list-item'>
        ${this.item.data}
      </div>
    `;
  }
}