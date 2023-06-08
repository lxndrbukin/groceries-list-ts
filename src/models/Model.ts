export interface ModelAttributes<T> {
  set(update: T): void;
  getAll(): T;
}

export class Model<T> {
  constructor(public attrs: ModelAttributes<T>) { }
}