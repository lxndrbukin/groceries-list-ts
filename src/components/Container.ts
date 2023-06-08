import { View } from '../views/View';
import { ItemProps } from './types';
import { List } from './List';


export class ListContainer extends View {
  itemList: ItemProps[] = [];
  listItem: ItemProps;

  regionsMap(): { [key: string]: string; } {
    return {
      list: '.list',
      item: '.list-item'
    };
  }

  eventsMap(): { [key: string]: (e?: any) => void; } {
    return {
      'submit:.list-form': (e: SubmitEvent) => {
        e.preventDefault();
        if (!e.target) {
          return;
        }
        this.listItem = {
          ...this.listItem,
          id: this.itemList.length,
          data: (<HTMLFormElement>e.target).listItem.value
        };
        if (this.listItem.data === '' || !this.listItem.data) {
          return;
        }
        this.itemList.push(this.listItem);
        (<HTMLFormElement>e.target).listItem.value = '';
        new List(this.regions.list, this.itemList).render();
      },
    };
  }

  onRender(): void {

  }

  template(): string {
    return /*html*/ `
      <div class='container'>
        <form class='list-form'>
          <input class='form-input' type='text' name='listItem' />
          <button>ADD</button>
        </form>
        <div class='list'></div>
      </div>
    `;
  }
}
