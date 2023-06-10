import { nanoid } from 'nanoid';
import { View } from '../views/View';
import { User } from '../models/User';
import { Props } from './types';

export class ListForm extends View<User, Props> {
  eventsMap(): { [key: string]: (e?: any) => void; } {
    return {
      'submit:.list-form': this.onFormSubmit
    };
  }

  onFormSubmit = (e: SubmitEvent): void => {
    e.preventDefault();
    if (!e.target) {
      return;
    }
    const item = {
      id: nanoid(),
      data: (<HTMLFormElement>e.target).listItem.value,
      editing: false
    };
    this.model.save(item);
    (<HTMLFormElement>e.target).listItem.value = '';
  };

  template(): string {
    return /*html*/ `
      <form class='list-form'>
        <input class='form-input' type='text' name='listItem' />
        <button>ADD</button>
      </form>
    `;
  }
}