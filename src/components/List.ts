import { ViewCollection } from '../views/ViewCollection';
import { ItemProps } from './types';
import { ListItem } from './ListItem';

export class List extends ViewCollection {
  constructor(public parent: Element, public collection: ItemProps[]) {
    super(parent, collection);
  }

  renderItem(itemParent: Element, item: ItemProps): void {
    new ListItem(itemParent, item).render();
  }
}