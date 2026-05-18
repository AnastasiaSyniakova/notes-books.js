/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/

import refs from './js/refs';
import { addTask, initList } from './js/tasks';
import { deleteTask } from './js/local-storage-api';

refs.formElement.addEventListener('submit', addTask);

document.addEventListener('DOMContentLoaded', () => {
  initList();

  refs.listElement.addEventListener('click', e => {
    if (!e.target.classList.contains('task-list-item-btn')) return;
    const item = e.target.closest('.task-list-item');
    deleteTask(item.dataset.id);
    item.remove();
  });
});

// //Storage (local-storage-api.js) — saves tasks to localStorage and reads them back, so data survives page refresh.
// Markup (markup-tasks.js) — takes a task object {title, description} and returns an HTML string for one card, or a whole list of cards.
// Render (render-tasks.js) — puts that HTML into the actual page (either appending one new card, or replacing the whole list).
// Refs (refs.js) — just grabs the form and the <ul> from the DOM once, so other files can use them without repeating querySelector.
// Tasks (tasks.js) — the logic: addTask handles form submit (validates, saves, renders), initList loads saved tasks on page load.
// Main (main.js) — wires everything together: listens for form submit → addTask, listens for page load → initList.
