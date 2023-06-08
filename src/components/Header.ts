import { View } from '../views/View';

export class Header extends View {
  template(): string {
    return /*html*/ `
      <div class='header'>
        <h3>Goodies List</h3>
      </div>
    `;
  }
}
