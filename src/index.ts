import { App } from './components/App';
import { User } from './models/User';
import { Props } from './components/types';

const userModel = User.build([]);

const root = document.querySelector('#root');

if (root) {
  new App(root, userModel).render();
}
