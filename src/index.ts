import './styles.css';
import { App } from './components/App';
import { User } from './models/User';

const userModel = User.build([]);

const root = document.querySelector('#root');

if (root) {
  new App(root, userModel).render();
}
