import { View } from '../views/View';
import { Header } from './Header';
import { ListContainer } from './Container';

export class App extends View {
  regionsMap(): { [key: string]: string; } {
    return {
      header: '.header-wrapper',
      container: '.container-wrapper',
    };
  }

  onRender(): void {
    new Header(this.regions.header).render();
    new ListContainer(this.regions.container).render();
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
