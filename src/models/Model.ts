export interface ModelAttributes<T> {
  set(update: T): void;
  get(): T[];
  save(item: T): void;
}

export class Model<T> {
  constructor(public attrs: ModelAttributes<T>) { }

  set(update: T): void {
    this.attrs.set(update);
  }

  get(): T[] {
    return this.attrs.get();
  }

  save(item: T): void {
    this.attrs.save(item);
  }
}