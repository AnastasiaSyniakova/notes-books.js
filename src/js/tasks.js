import { saveTask, getTasks } from './local-storage-api';
import { renderList, renderTask } from './render-tasks';

export function addTask(e) {
  e.preventDefault();
  const { taskName, taskDescription } = e.currentTarget.elements;
  if (taskName.value.trim() === '' || taskDescription.value.trim() === '') {
    alert('Please fill the field');
    return;
  }
  const data = {
    id: Date.now().toString(), // ← add this
    title: taskName.value.trim(),
    description: taskDescription.value.trim(),
  };

  saveTask(data);
  renderTask(data);
  e.currentTarget.reset();
}

export function initList() {
  const array = getTasks() || [];
  renderList(array);
}
