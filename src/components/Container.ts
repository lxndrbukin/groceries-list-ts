import { View } from '../model/View';
import { ItemProps } from './types';
import { ListItem } from './ListItem';


export class ListContainer extends View {
  itemList: ItemProps[] = [];
  listItem: ItemProps;

  regionsMap(): { [key: string]: string; } {
    return {
      list: '.list',
    };
  }

  renderList(): void {
    this.itemList.map((item: ItemProps) => {
      new ListItem(this.regions.list, item).render();
    });
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
        this.itemList.push(this.listItem);
        (<HTMLFormElement>e.target).listItem.value = '';
        this.render();
      },
      'input:.form-input': (e: InputEvent) => {
        if (!e.target) {
          return;
        }
      }
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
        <div class='list-wrapper'></div>
      </div>
    `;
  }
}
