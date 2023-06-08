export abstract class ViewCollection {
  constructor(public parent: Element, public collection: object[]) { }

  abstract renderItem(itemParent: Element, item: object): void;

  render(): void {
    this.parent.innerHTML = '';
    const templateEl = document.createElement('template');
    for (let item of this.collection) {
      const itemParent = document.createElement('div');
      this.renderItem(itemParent, item);
      templateEl.content.appendChild(itemParent);
    }
    this.parent.appendChild(templateEl.content);
  }
}