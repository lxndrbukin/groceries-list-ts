export abstract class View {
  constructor(public parent: Element) { }

  abstract template(): string;

  eventsMap(): { [key: string]: () => void; } {
    return {};
  }

  render(): void {
    const templateEl = document.createElement('template');
    templateEl.innerHTML = this.template();
    this.parent.appendChild(templateEl.content);
  }
}