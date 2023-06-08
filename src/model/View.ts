export abstract class View {
  regions: { [key: string]: Element; } = {};
  constructor(public parent: Element) { }

  abstract template(): string;

  regionsMap(): { [key: string]: string; } {
    return {};
  }

  eventsMap(): { [key: string]: () => void; } {
    return {};
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();
    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const el = fragment.querySelector(selector);
      if (el) {
        this.regions[key] = el;
      }
    }
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');
      fragment.querySelectorAll(selector).forEach((element: Element): void => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  onRender(): void { }

  renderCollection(): void { };

  render(): void {
    this.parent.innerHTML = '';
    const templateEl = document.createElement('template');
    templateEl.innerHTML = this.template();
    this.bindEvents(templateEl.content);
    this.mapRegions(templateEl.content);
    this.onRender();
    this.parent.appendChild(templateEl.content);
  }
}
