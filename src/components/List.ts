import { ViewCollection } from '../views/ViewCollection';
import { User } from '../models/User';
import { Props } from './types';
import { ListItem } from './ListItem';

export class List extends ViewCollection<User, Props> {
  constructor(public parent: Element, public model: User) {
    super(parent, model);
  }

  renderItem(itemParent: Element, item: Props): void {
    new ListItem(itemParent, this.model, item).render();
  }
}