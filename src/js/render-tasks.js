import { markupList, markupTask } from './markup-tasks';
import refs from './refs';

export function renderTask(data) {
  refs.listElement.insertAdjacentHTML('beforeend', markupTask(data));
}

export function renderList(array) {
  refs.listElement.innerHTML = markupList(array);
}
