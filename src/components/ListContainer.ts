import { View } from '../views/View';
import { User } from '../models/User';
import { Props } from './types';
import { ListForm } from './ListForm';
import { List } from './List';


export class ListContainer extends View<User, Props> {
  regionsMap(): { [key: string]: string; } {
    return {
      listForm: '.list-form-wrapper',
      list: '.list',
    };
  }

  onRender(): void {
    new ListForm(this.regions.listForm, this.model).render();
    new List(this.regions.list, this.model).render();
  }

  template(): string {
    return /*html*/ `
      <div class='container'>
        <div class='list-form-wrapper'></div>
        <div class='list'></div>
      </div>
    `;
  }
}
