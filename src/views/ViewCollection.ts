import { Model } from '../models/Model';
import { Props } from '../components/types';

export abstract class ViewCollection<T extends Model<K>, K> {
  constructor(public parent: Element, public model: T) { }

  abstract renderItem(itemParent: Element, item: Props): void;

  render(): void {
    this.parent.innerHTML = '';
    const templateEl = document.createElement('template');
    const items = this.model.get();
    for (let item of items) {
      const itemParent = document.createElement('div');
      this.renderItem(itemParent, item as Props);
      templateEl.content.appendChild(itemParent);

    }
    this.parent.appendChild(templateEl.content);
  }
}