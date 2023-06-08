import { View } from '../model/View';
import { ItemProps } from './types';
import { ListItem } from './ListItem';

export class List extends View {
  constructor(public parent: Element, public itemList: ItemProps[]) {
    super(parent);
  }

  regionsMap(): { [key: string]: string; } {
    return {
      list: '.list'
    };
  }

  renderCollection(): void {
    this.parent.innerHTML = '';
    const templateEl = document.createElement('template');
    for (let item of this.itemList) {
      const itemParent = document.createElement('div');
      new ListItem(itemParent, item).render();
    }
  }

  template(): string {
    return `
      <div class='list'></div>
    `;
  }
}