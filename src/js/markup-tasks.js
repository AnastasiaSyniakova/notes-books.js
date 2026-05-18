export function markupTask({ id, title, description }) {
  return `
    <li class="task-list-item" data-id="${id}">
      <button class="task-list-item-btn">Delete</button>
      <h3>${title}</h3>
      <p>${description}</p>
    </li>`;
}

export function markupList(array) {
  return array.map(element => markupTask(element)).join('');
}
