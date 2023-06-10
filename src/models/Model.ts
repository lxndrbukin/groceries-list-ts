export interface ModelAttributes<T> {
  set(update: T): void;
  get(): T[];
  save(item: T): void;
  delete(item: T): void;
}

export interface ModelEvents {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export class Model<T> {
  constructor(public attrs: ModelAttributes<T>, public events: ModelEvents) { }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  set(update: T): void {
    this.attrs.set(update);
    this.events.trigger('change');
  }

  get(): T[] {
    return this.attrs.get();
  }

  save(item: T): void {
    this.attrs.save(item);
    this.events.trigger('change');
  }

  delete(item: T): void {
    this.attrs.delete(item);
    this.events.trigger('change');
  }
}