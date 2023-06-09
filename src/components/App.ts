import { View } from '../views/View';
import { User } from '../models/User';
import { Props } from './types';
import { Header } from './Header';
import { ListContainer } from './ListContainer';

export class App extends View<User, Props> {

  regionsMap(): { [key: string]: string; } {
    return {
      header: '.header-wrapper',
      container: '.container-wrapper',
    };
  }

  onRender(): void {
    new Header(this.regions.header, this.model).render();
    new ListContainer(this.regions.container, this.model).render();
  }

  template(): string {
    return /*html*/ `
      <div class='app'>
        <header class='header-wrapper'></header>
        <div class='container-wrapper'></div>
      </div>
    `;
  }
}
