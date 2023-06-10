interface HasId {
  id: string;
}

export class Atrributes<T extends HasId> {
  constructor(private data: T[]) { }

  set(update: T): void {
    const index = this.data.findIndex((item: T) => item.id === update.id);
    this.data[index] = {
      ...this.data[index],
      update
    };
    console.log(this.data);
  }

  get(): T[] {
    return this.data;
  }

  save(item: T): void {
    this.data.push(item);
  }

  delete(item: T): void {
    const updatedList = this.data.filter((dataItem: T) => {
      return dataItem.id !== item.id;
    });
    this.data = updatedList;
  }

  edit(item: T): void {

  }
}