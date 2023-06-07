import { View } from '../model/View';

export class ListContainer extends View {
  regionsMap(): { [key: string]: string } {
    return {
      list: '.list',
    };
  }

  eventsMap(): { [key: string]: (e?: any) => void } {
    return {
      'submit:.list-form': (e: SubmitEvent) => {
        e.preventDefault();
        if (!e.target) {
          return;
        }
        console.log((<HTMLFormElement>e.target).listItem.value);
      },
    };
  }

  template(): string {
    return /*html*/ `
      <div class='container'>
        <form class='list-form'>
          <input type='text' name='listItem' />
          <button>ADD</button>
        </form>
        <div class='list'></div>
      </div>
    `;
  }
}
