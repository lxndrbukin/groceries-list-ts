import { View } from '../views/View';
import { User } from '../models/User';
import { Props } from './types';
import { List } from './List';


export class ListContainer extends View<User, Props> {
  itemList: Props[] = [];
  listItem: Props;

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
        const list = this.model.get();
        const item = {
          id: list.length,
          data: (<HTMLFormElement>e.target).listItem.value
        };
        this.model.save(item);
        console.log(list);
        (<HTMLFormElement>e.target).listItem.value = '';
        new List(this.regions.list, this.model).render();
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
